
import React from 'react';
import { JobRequirements } from '../types';
import { CheckCircle } from './icons/Icons';

interface JobDescriptionInputProps {
  onAnalyze: () => void;
  requirements: JobRequirements | null;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({ onAnalyze, requirements }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-semibold mb-3">1. Add Job Description</h2>
        <textarea
          className="w-full h-48 p-3 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-primary-500 transition"
          placeholder="Paste your job description here..."
          defaultValue="Seeking a Senior Frontend Engineer with 5+ years of experience in React and TypeScript. The ideal candidate will have a strong understanding of modern web development practices, including state management, component-based architecture, and responsive design. Experience with Node.js and GraphQL is a plus. Familiarity with AWS cloud services is beneficial."
        ></textarea>
        <div className="mt-4 flex justify-between items-center">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-600 dark:text-slate-400">
            <input type="file" className="hidden" />
            <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-md hover:bg-slate-300 dark:hover:bg-slate-600 transition">Upload Doc/PDF</span>
          </label>
          <button
            onClick={onAnalyze}
            className="bg-primary-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-primary-700 transition-transform transform hover:scale-105"
          >
            Analyze with AI
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-semibold mb-3">AI-Generated Competency Matrix</h2>
        {requirements ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">Role Title:</span>
              <span className="text-slate-600 dark:text-slate-300">{requirements.title}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">Experience:</span>
              <span className="text-slate-600 dark:text-slate-300">{`>${requirements.experience} years`}</span>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2">Key Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {requirements.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      skill.importance === 'High' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                      skill.importance === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                      'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-500 dark:text-slate-400">
            <p>Analysis will appear here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDescriptionInput;
