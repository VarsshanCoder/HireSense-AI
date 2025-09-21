
import React from 'react';
import { Candidate, JobRequirements } from '../types';
import JobDescriptionInput from './JobDescriptionInput';
import CandidateCard from './CandidateCard';

interface DashboardProps {
  candidates: Candidate[];
  jobRequirements: JobRequirements | null;
  onAnalyzeJob: () => void;
  onSelectCandidate: (candidate: Candidate) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ candidates, jobRequirements, onAnalyzeJob, onSelectCandidate }) => {
  return (
    <div className="space-y-8">
      <JobDescriptionInput onAnalyze={onAnalyzeJob} requirements={jobRequirements} />
      
      <div>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Candidate Pipeline</h2>
            <div className="flex items-center gap-4">
                <input type="text" placeholder="Filter by name, skill..." className="w-64 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md px-3 py-2 text-sm focus:ring-primary-500 focus:border-primary-500"/>
                <button className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary-600 transition-colors">
                    Filter
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onSelect={() => onSelectCandidate(candidate)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
