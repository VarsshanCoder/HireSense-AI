
import React, { useState, useEffect } from 'react';
import { AppView, Candidate, JobRequirements } from './types';
import { MOCK_CANDIDATES, MOCK_JOB_REQUIREMENTS } from './constants';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import CandidateDetailModal from './components/CandidateDetailModal';
import ChatAssistant from './components/ChatAssistant';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [view, setView] = useState<AppView>(AppView.Dashboard);
  const [candidates, setCandidates] = useState<Candidate[]>(MOCK_CANDIDATES);
  const [jobRequirements, setJobRequirements] = useState<JobRequirements | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleAnalyzeJob = () => {
    // In a real app, this would parse the description text
    setJobRequirements(MOCK_JOB_REQUIREMENTS);
  };
  
  const handleSelectCandidate = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleCloseModal = () => {
    setSelectedCandidate(null);
  };

  const renderView = () => {
    switch (view) {
      case AppView.Analytics:
        return <Analytics />;
      case AppView.Dashboard:
      default:
        return (
          <Dashboard
            candidates={candidates}
            jobRequirements={jobRequirements}
            onAnalyzeJob={handleAnalyzeJob}
            onSelectCandidate={handleSelectCandidate}
          />
        );
    }
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
      <Header 
        currentView={view} 
        onNavigate={setView} 
        theme={theme} 
        onToggleTheme={toggleTheme} 
      />
      <main className="p-4 sm:p-6 lg:p-8">
        {renderView()}
      </main>
      {selectedCandidate && (
        <CandidateDetailModal 
          candidate={selectedCandidate} 
          jobRequirements={jobRequirements}
          onClose={handleCloseModal} 
        />
      )}
      <ChatAssistant allCandidates={candidates} />
    </div>
  );
}
