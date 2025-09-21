
import React from 'react';
import { Candidate } from '../types';
import { CheckCircle } from './icons/Icons';

interface CandidateCardProps {
  candidate: Candidate;
  onSelect: () => void;
}

const ScoreCircle: React.FC<{ score: number }> = ({ score }) => {
    const circumference = 2 * Math.PI * 20;
    const offset = circumference - (score / 100) * circumference;
    const color = score > 85 ? 'text-green-500' : score > 75 ? 'text-yellow-500' : 'text-orange-500';

    return (
        <div className="relative h-16 w-16">
            <svg className="h-full w-full" viewBox="0 0 44 44">
                <circle
                    className="text-slate-200 dark:text-slate-700"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="20"
                    cx="22"
                    cy="22"
                />
                <circle
                    className={`${color} transition-all duration-1000`}
                    strokeWidth="4"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="20"
                    cx="22"
                    cy="22"
                    transform="rotate(-90 22 22)"
                />
            </svg>
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                <span className="text-lg font-bold text-slate-700 dark:text-slate-200">{score}</span>
            </div>
        </div>
    );
};

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onSelect }) => {
  const topTechSkills = candidate.skills.filter(s => s.category === 'Tech').slice(0, 3);

  return (
    <div 
        className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        onClick={onSelect}
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img className="w-16 h-16 rounded-full" src={candidate.avatar} alt={candidate.name} />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{candidate.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{candidate.email}</p>
            </div>
          </div>
          <ScoreCircle score={candidate.overallScore} />
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Top Skills</h4>
          <div className="flex flex-wrap gap-2">
            {topTechSkills.map(skill => (
              <span key={skill.name} className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
            <span>{candidate.location}</span>
            {candidate.remoteReady && (
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>Remote Ready</span>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
