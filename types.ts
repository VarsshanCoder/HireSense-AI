
export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'Tech' | 'Management' | 'Soft Skills';
}

export interface Candidate {
  id: number;
  name: string;
  email: string;
  avatar: string;
  overallScore: number;
  location: string;
  remoteReady: boolean;
  salaryExpectation: number;
  skills: Skill[];
  strengths: string[];
  gaps: string[];
  videoAnalysis: {
    clarity: number; // 0-100
    tone: 'Confident' | 'Neutral' | 'Nervous';
    personalityInsights: string;
  };
}

export interface JobRequirements {
  title: string;
  skills: { name: string; importance: 'High' | 'Medium' | 'Low' }[];
  experience: number;
  certifications: string[];
}

export enum AppView {
  Dashboard = 'dashboard',
  Analytics = 'analytics',
}
