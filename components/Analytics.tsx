
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Sparkles } from './icons/Icons';

const pipelineData = [
  { name: 'Applied', count: 120 },
  { name: 'Screened', count: 45 },
  { name: 'Interview', count: 15 },
  { name: 'Offer', count: 4 },
  { name: 'Hired', count: 1 },
];

const diversityData = [
  { name: 'Female', value: 40 },
  { name: 'Male', value: 45 },
  { name: 'Non-binary', value: 5 },
  { name: 'Prefer not to say', value: 10 },
];

const COLORS = ['#60a5fa', '#34d399', '#f59e0b', '#a78bfa'];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Hiring Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hiring Pipeline */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold mb-4">Hiring Pipeline</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pipelineData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(125, 125, 125, 0.2)"/>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{fill: 'rgba(125, 125, 125, 0.1)'}} contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px'}} />
              <Legend />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* AI Prediction */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><Sparkles className="text-purple-500" /> AI-Powered Prediction</h2>
            <div className="bg-primary-100 dark:bg-primary-900/50 p-4 rounded-lg">
                <p className="text-primary-800 dark:text-primary-200 font-medium">"Based on current market data, the 'Senior Frontend Engineer' role will be <span className="font-bold">15% harder to fill</span> in the next 30 days due to increased demand for React skills."</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">Last updated: 2 mins ago</p>
        </div>

        {/* Diversity Insights */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold mb-4">Diversity & Inclusion Insights (Screened Pool)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={diversityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {diversityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px'}}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
