
import React from 'react';
import { AppView } from '../types';
import { BrainCircuit, ChartBar, Sun, Moon } from './icons/Icons';

interface HeaderProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  theme: string;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, theme, onToggleTheme }) => {
  const NavLink: React.FC<{ view: AppView; label: string; icon: JSX.Element }> = ({ view, label, icon }) => {
    const isActive = currentView === view;
    return (
      <button
        onClick={() => onNavigate(view)}
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? 'bg-primary-500 text-white'
            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
        }`}
      >
        {icon}
        {label}
      </button>
    );
  };

  return (
    <header className="bg-white dark:bg-slate-800/50 backdrop-blur-sm sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <BrainCircuit className="h-8 w-8 text-primary-500" />
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">HireSense AI</h1>
          </div>
          <nav className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <NavLink view={AppView.Dashboard} label="Dashboard" icon={<ChartBar className="h-5 w-5" />} />
            <NavLink view={AppView.Analytics} label="Analytics" icon={<ChartBar className="h-5 w-5" />} />
          </nav>
          <div className="flex items-center">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
