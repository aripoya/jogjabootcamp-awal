import { useState } from 'react';
import { questions } from '../data/questions';
import { getResultByScore } from '../data/results';
import { submitQuiz } from '../services/api';
import type { QuizStep, UserData, ResultCategory } from '../types';
import type { Product } from '../services/api';
import Landing from './Landing';
import Question from './Question';
import ProgressBar from './ProgressBar';
import UserForm from './UserForm';
import Result from './Result';

export default function Quiz() {
  const [step, setStep] = useState<QuizStep>('landing');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [result, setResult] = useState<ResultCategory | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStart = () => {
    setStep('quiz');
  };

  const handleAnswer = (answerScore: number) => {
    const newScore = score + answerScore;
    setScore(newScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('form');
    }
  };

  const handleFormSubmit = async (data: UserData) => {
    setIsSubmitting(true);
    const userResult = getResultByScore(score);
    
    const apiResponse = await submitQuiz({
      name: data.name,
      whatsapp: data.whatsapp,
      email: data.email,
      businessType: data.businessType,
      score: score,
      level: userResult.level,
      levelTitle: userResult.title,
      levelEmoji: userResult.emoji,
      recommendations: userResult.recommendations.map(r => `${r.icon} ${r.text}`),
    });
    
    if (apiResponse.success && apiResponse.data) {
      setProducts(apiResponse.data.products || []);
    }
    
    setUserData(data);
    setResult(userResult);
    setIsSubmitting(false);
    setStep('result');
    
    console.log('User Data:', data);
    console.log('Score:', score);
    console.log('Result:', userResult);
    console.log('API Response:', apiResponse);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {step === 'landing' && <Landing onStart={handleStart} />}
      
      {step === 'quiz' && (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <ProgressBar current={currentQuestion + 1} total={questions.length} />
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <Question
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
              />
            </div>
          </div>
        </div>
      )}
      
      {step === 'form' && (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-lg">
            <UserForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
          </div>
        </div>
      )}
      
      {step === 'result' && result && userData && (
        <div className="min-h-screen py-12 px-4">
          <Result result={result} score={score} userData={userData} products={products} />
        </div>
      )}
    </div>
  );
}
