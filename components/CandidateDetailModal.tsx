
import React, { useEffect, useState } from 'react';
import { Candidate, JobRequirements } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircle, XCircle, Sparkles, MessageSquare, Video, Download } from './icons/Icons';


const CandidateDetailModal: React.FC<{ candidate: Candidate; jobRequirements: JobRequirements | null; onClose: () => void; }> = ({ candidate, jobRequirements, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSkillMatchData = () => {
    const data = {
        'Tech': { matched: 0, total: 0 },
        'Management': { matched: 0, total: 0 },
        'Soft Skills': { matched: 0, total: 0 },
    };

    candidate.skills.forEach(skill => {
        data[skill.category].total++;
        if (jobRequirements?.skills.some(req => req.name === skill.name) || skill.level >= 4) {
             data[skill.category].matched++;
        }
    });

    return Object.entries(data).map(([name, { matched, total }]) => ({
        name,
        matchPercentage: total > 0 ? (matched / total) * 100 : 0,
    }));
  };
  
  const skillData = getSkillMatchData();
  const modalAnimation = isClosing ? 'animate-zoom-out' : 'animate-zoom-in';
  const backdropAnimation = isClosing ? 'animate-fade-out' : 'animate-fade-in';

  return (
    <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm ${backdropAnimation}`}
        onClick={handleClose}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col ${modalAnimation}`}
        onClick={e => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-700 sticky top-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <img className="w-16 h-16 rounded-full" src={candidate.avatar} alt={candidate.name} />
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{candidate.name}</h2>
                <p className="text-slate-500 dark:text-slate-400">{jobRequirements?.title || 'Candidate Report'}</p>
            </div>
          </div>
          <div className="text-right">
              <span className="text-3xl font-bold text-primary-500">{candidate.overallScore}<span className="text-lg text-slate-400">/100</span></span>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Overall Fit Score</p>
          </div>
          <button onClick={handleClose} className="absolute top-4 right-4 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
            <XCircle className="h-6 w-6" />
          </button>
        </header>

        <main className="p-6 overflow-y-auto flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Skill Match Breakdown */}
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                <h3 className="font-semibold mb-2">Skill Match Breakdown</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={skillData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={80} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{fill: 'rgba(125, 125, 125, 0.1)'}} contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px'}} />
                    <Bar dataKey="matchPercentage" barSize={20} radius={[0, 10, 10, 0]}>
                       {skillData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={['#34d399', '#f59e0b', '#60a5fa'][index % 3]}/>
                       ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Strengths and Gaps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2"><CheckCircle className="text-green-500"/> Strengths</h3>
                    <ul className="list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
                        {candidate.strengths.map((s, i) => <li key={i} className="flex items-start"><span className="mr-2 mt-1">✅</span><span>{s}</span></li>)}
                    </ul>
                 </div>
                 <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2"><XCircle className="text-orange-500"/> Gaps & Upskill Path</h3>
                    <ul className="list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
                        {candidate.gaps.map((g, i) => <li key={i} className="flex items-start"><span className="mr-2 mt-1">⚠️</span><span>{g}</span></li>)}
                    </ul>
                 </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* AI Insights */}
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2"><Sparkles className="text-purple-500"/> AI Insights</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Highly recommended for the role. Strong technical foundation and excellent communication skills suggest high potential for growth and leadership.</p>
              </div>
              
              {/* Video Screening */}
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2"><Video className="text-blue-500"/> Video Screening</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{candidate.videoAnalysis.personalityInsights}</p>
                 <div className="flex justify-around text-center text-sm">
                    <div>
                        <div className="font-bold text-lg">{candidate.videoAnalysis.clarity}%</div>
                        <div className="text-xs">Clarity</div>
                    </div>
                     <div>
                        <div className="font-bold text-lg">{candidate.videoAnalysis.tone}</div>
                        <div className="text-xs">Tone</div>
                    </div>
                 </div>
              </div>

               {/* Collaboration */}
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                  <h3 className="font-semibold mb-2 flex items-center gap-2"><MessageSquare className="text-teal-500"/> Team Notes</h3>
                  <textarea placeholder="Add a comment... @mention a team member" className="w-full text-sm p-2 rounded border bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"></textarea>
              </div>
            </div>
          </div>
        </main>
        
        <footer className="p-4 border-t border-slate-200 dark:border-slate-700 flex justify-end items-center gap-3 sticky bottom-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition">
                <Download className="h-4 w-4"/> Export Report
            </button>
            <button className="text-sm text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition">Reject</button>
            <button className="text-sm text-white bg-primary-600 px-4 py-2 rounded-lg hover:bg-primary-700 transition">Schedule Interview</button>
        </footer>
      </div>
    </div>
  );
};


export default CandidateDetailModal;
