
import { Candidate, JobRequirements } from './types';

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 1,
    name: 'Elena Rodriguez',
    email: 'elena.r@example.com',
    avatar: 'https://picsum.photos/id/1027/200/200',
    overallScore: 92,
    location: 'Austin, TX',
    remoteReady: true,
    salaryExpectation: 120000,
    skills: [
      { name: 'React', level: 5, category: 'Tech' },
      { name: 'Node.js', level: 4, category: 'Tech' },
      { name: 'Python', level: 3, category: 'Tech' },
      { name: 'Agile Methodology', level: 5, category: 'Management' },
      { name: 'Communication', level: 5, category: 'Soft Skills' },
    ],
    strengths: ['Expert in React state management', 'Proven leadership in agile teams', 'Excellent communicator'],
    gaps: ['Limited experience with cloud deployment (AWS/GCP)', 'Familiar but not expert in GraphQL'],
    videoAnalysis: {
      clarity: 95,
      tone: 'Confident',
      personalityInsights: 'Articulate and presents ideas clearly. Shows strong problem-solving orientation.'
    }
  },
  {
    id: 2,
    name: 'Ben Carter',
    email: 'ben.c@example.com',
    avatar: 'https://picsum.photos/id/1005/200/200',
    overallScore: 88,
    location: 'San Francisco, CA',
    remoteReady: false,
    salaryExpectation: 135000,
    skills: [
      { name: 'Python', level: 5, category: 'Tech' },
      { name: 'Django', level: 5, category: 'Tech' },
      { name: 'AWS', level: 4, category: 'Tech' },
      { name: 'Project Management', level: 4, category: 'Management' },
      { name: 'Problem Solving', level: 5, category: 'Soft Skills' },
    ],
    strengths: ['Deep expertise in Python backend development', 'Strong cloud infrastructure skills', 'Certified AWS Solutions Architect'],
    gaps: ['Limited frontend experience (React/Vue)', 'Less experience in client-facing roles'],
     videoAnalysis: {
      clarity: 88,
      tone: 'Confident',
      personalityInsights: 'Methodical and analytical. Provides detailed, well-structured answers.'
    }
  },
  {
    id: 3,
    name: 'Aisha Khan',
    email: 'aisha.k@example.com',
    avatar: 'https://picsum.photos/id/1011/200/200',
    overallScore: 78,
    location: 'New York, NY',
    remoteReady: true,
    salaryExpectation: 110000,
    skills: [
      { name: 'React', level: 4, category: 'Tech' },
      { name: 'GraphQL', level: 4, category: 'Tech' },
      { name: 'TypeScript', level: 3, category: 'Tech' },
      { name: 'Team Collaboration', level: 5, category: 'Soft Skills' },
    ],
    strengths: ['Strong modern frontend stack knowledge', 'Quick learner and highly collaborative'],
    gaps: ['Lacks senior-level experience', 'Backend skills are foundational', 'No formal project management experience'],
     videoAnalysis: {
      clarity: 92,
      tone: 'Neutral',
      personalityInsights: 'Enthusiastic and eager to learn. Demonstrates good teamwork potential.'
    }
  },
  {
    id: 4,
    name: 'Marcus Chen',
    email: 'marcus.c@example.com',
    avatar: 'https://picsum.photos/id/1012/200/200',
    overallScore: 85,
    location: 'Chicago, IL',
    remoteReady: true,
    salaryExpectation: 125000,
    skills: [
        { name: 'Java', level: 5, category: 'Tech' },
        { name: 'Spring Boot', level: 5, category: 'Tech' },
        { name: 'Kubernetes', level: 4, category: 'Tech' },
        { name: 'System Design', level: 4, category: 'Management' },
        { name: 'Critical Thinking', level: 4, category: 'Soft Skills' },
    ],
    strengths: ['Expert in enterprise Java development', 'Experienced with microservices architecture', 'Strong DevOps mindset'],
    gaps: ['Not familiar with Python or Node.js ecosystems', 'Less experience with frontend technologies'],
    videoAnalysis: {
      clarity: 85,
      tone: 'Confident',
      personalityInsights: 'Precise and detail-oriented. Shows a deep understanding of complex systems.'
    }
  },
];

export const MOCK_JOB_REQUIREMENTS: JobRequirements = {
  title: 'Senior Frontend Engineer',
  skills: [
    { name: 'React', importance: 'High' },
    { name: 'TypeScript', importance: 'High' },
    { name: 'Node.js', importance: 'Medium' },
    { name: 'GraphQL', importance: 'Medium' },
    { name: 'AWS', importance: 'Low' },
  ],
  experience: 5,
  certifications: ['AWS Certified Developer - Associate (Optional)'],
};
