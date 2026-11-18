import React from 'react';

interface MetricBadgeProps {
  label: string;
  value: string;
  variant?: 'blue' | 'emerald' | 'amber' | 'neutral';
}

export const MetricBadge: React.FC<MetricBadgeProps> = ({ label, value, variant = 'neutral' }) => {
  const styles = {
    blue: 'bg-blue-950/40 text-blue-300 border-blue-800/40',
    emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40',
    amber: 'bg-amber-950/40 text-amber-300 border-amber-800/40',
    neutral: 'bg-neutral-900 text-neutral-300 border-neutral-800',
  }[variant];

  return (
    <div className={`inline-flex flex-col px-3 py-1.5 rounded-lg border text-xs ${styles}`}>
      <span className="text-[10px] tracking-wider uppercase text-neutral-400 font-medium">{label}</span>
      <span className="text-sm font-bold text-white mt-0.5">{value}</span>
    </div>
  );
};
