import React from 'react';
import { Check, Mail } from 'lucide-react';

interface ToastProps {
  show: boolean;
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#161616] text-white px-4 py-3 rounded-xl border border-neutral-700 shadow-2xl flex items-center gap-3 animate-fadeIn">
      <div className="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0">
        <Check size={16} />
      </div>
      <div>
        <span className="text-xs font-semibold block">{message}</span>
        <span className="text-[10px] text-neutral-400">Ready to paste or send</span>
      </div>
    </div>
  );
};
