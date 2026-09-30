import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? 'Cambiar a Tema Claro' : 'Cambiar a Tema Oscuro'}
      aria-label={isDark ? 'Cambiar a Tema Claro' : 'Cambiar a Tema Oscuro'}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all duration-200 active:scale-95 ${
        isDark
          ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 hover:bg-slate-850'
          : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-slate-50 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 animate-in spin-in-180 duration-300" />
        )}
      </div>

      {showLabel && (
        <span className="font-medium text-xs">
          {isDark ? 'Tema Claro' : 'Tema Oscuro'}
        </span>
      )}
    </button>
  );
};
