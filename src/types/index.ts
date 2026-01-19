export interface Question {
  id: number;
  encouragement: string;
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  score: number;
}

export interface UserData {
  name: string;
  whatsapp: string;
  email: string;
  businessType: string;
}

export interface ResultCategory {
  level: number;
  emoji: string;
  title: string;
  subtitle: string;
  message: string;
  recommendations: Recommendation[];
  minScore: number;
  maxScore: number;
}

export interface Recommendation {
  icon: string;
  text: string;
}

export type QuizStep = 'landing' | 'quiz' | 'form' | 'result';
