import React, { useState } from 'react';

type StageId = 'raw' | 'inpainted' | 'segmented';

interface Stage {
  id: StageId;
  step: string;
  label: string;
  tech: string;
  problem: string;
  outcome: string;
  metrics: Array<{ value: string; desc: string }>;
  color: string;        // accent color class
  borderColor: string;
  dimColor: string;
}

const stages: Stage[] = [
  {
    id: 'raw',
    step: '01',
    label: 'Raw Frame',
    tech: 'Input',
    problem: 'Hospital timestamp watermarks (OCR targets) overlay diagnostic regions. Specular reflections from mucosal tissue surfaces saturate up to 12% of frame pixels, corrupting pixel-level ground truth.',
    outcome: 'Unusable as-is for supervised segmentation — masks labeled on raw frames are systematically biased toward false negatives in glare zones.',
    metrics: [
      { value: '~12%', desc: 'pixels saturated by glare' },
      { value: '2–4', desc: 'watermark overlays per clip' },
      { value: '640×480', desc: 'frame resolution (Kvasir-SEG)' },
    ],
    color: 'text-amber-400',
    borderColor: 'border-amber-800/50',
    dimColor: 'bg-amber-950/30',
  },
  {
    id: 'inpainted',
    step: '02',
    label: 'Artifact Removal',
    tech: 'Telea Fast Marching + Tesseract OCR',
    problem: 'Watermark bounding boxes are detected via Tesseract OCR (confidence threshold ≥ 70). Specular glare masks are computed by L-channel thresholding in LAB colorspace (L > 230). Both regions are then restored via the Telea fast-marching inpainting algorithm.',
    outcome: 'Recovered mucosal texture under artifact regions. Mean PSNR improves from 28.4 dB (raw) to 34.1 dB (cleaned), measured against manually de-artifacted reference frames.',
    metrics: [
      { value: '34.1 dB', desc: 'PSNR after inpainting' },
      { value: '±0.3px', desc: 'boundary shift in restored region' },
      { value: '<50 ms', desc: 'per-frame processing time' },
    ],
    color: 'text-blue-400',
    borderColor: 'border-blue-800/50',
    dimColor: 'bg-blue-950/30',
  },
  {
    id: 'segmented',
    step: '03',
    label: 'Polyp Segmentation',
    tech: 'ResNet-18 Encoder + U-Net Decoder',
    problem: 'Standard U-Net encoders use heavy ResNet-50/101 backbones (25M+ params), infeasible for clinic-grade edge hardware. The model must also generalise across polyp morphology (flat, sessile, pedunculated) with no size-related distribution shift.',
    outcome: 'ResNet-18 U-Net trained on cleaned Kvasir-SEG frames achieves 92.96% Dice and 86.85% IoU — competitive with ResNet-50 baselines at 2.4× fewer parameters, enabling real-time inference at 24 FPS on a Jetson Nano.',
    metrics: [
      { value: '92.96%', desc: 'Dice coefficient (Kvasir-SEG)' },
      { value: '86.85%', desc: 'mean IoU' },
      { value: '11.2M', desc: 'parameters (vs 25.6M ResNet-50)' },
    ],
    color: 'text-emerald-400',
    borderColor: 'border-emerald-800/50',
    dimColor: 'bg-emerald-950/30',
  },
];

export const InteractiveComparison: React.FC = () => {
  const [active, setActive] = useState<StageId>('segmented');
  const current = stages.find(s => s.id === active)!;

  return (
    <div className="my-10 rounded-2xl bg-[#101010] border border-neutral-800 overflow-hidden">

      {/* ── Stage selector tabs */}
      <div className="flex border-b border-neutral-800">
        {stages.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            aria-pressed={active === s.id}
            className={`
              flex-1 relative px-4 py-4 text-left transition-colors
              ${active === s.id ? 'bg-[#161616]' : 'hover:bg-[#131313]'}
              ${i > 0 ? 'border-l border-neutral-800' : ''}
            `}
          >
            <span className={`block text-[10px] font-bold font-mono mb-0.5 ${active === s.id ? s.color : 'text-neutral-600'}`}>
              {s.step}
            </span>
            <span className={`block text-sm font-semibold ${active === s.id ? 'text-white' : 'text-neutral-500'}`}>
              {s.label}
            </span>
            {/* Active underline */}
            {active === s.id && (
              <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${s.color.replace('text-', 'bg-')}`} />
            )}
          </button>
        ))}
      </div>

      {/* ── Detail panel */}
      <div className="p-6 sm:p-8 animate-fadeIn" key={active}>

        {/* Tech label */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`text-[11px] font-bold font-mono px-2.5 py-1 rounded border ${current.dimColor} ${current.borderColor} ${current.color}`}>
            {current.tech}
          </span>
        </div>

        {/* Two-col: problem + outcome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">Challenge</p>
            <p className="text-sm text-neutral-300 leading-relaxed">{current.problem}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">Outcome</p>
            <p className="text-sm text-neutral-300 leading-relaxed">{current.outcome}</p>
          </div>
        </div>

        {/* Metric row */}
        <div className="grid grid-cols-3 gap-3 pt-5 border-t border-neutral-800/60">
          {current.metrics.map((m, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className={`text-lg sm:text-xl font-extrabold font-mono tabular-nums ${current.color}`}>
                {m.value}
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5 leading-snug">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
