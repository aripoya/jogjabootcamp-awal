import { useState } from 'react';
import { questions } from '../data/questions';
import { getResultByScore } from '../data/results';
import type { QuizStep, UserData, ResultCategory } from '../types';
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

  const handleFormSubmit = (data: UserData) => {
    setUserData(data);
    setResult(getResultByScore(score));
    setStep('result');
    
    console.log('User Data:', data);
    console.log('Score:', score);
    console.log('Result:', getResultByScore(score));
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
                questionNumber={currentQuestion + 1}
              />
            </div>
          </div>
        </div>
      )}
      
      {step === 'form' && (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-lg">
            <UserForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
      
      {step === 'result' && result && userData && (
        <div className="min-h-screen py-12 px-4">
          <Result result={result} score={score} userData={userData} />
        </div>
      )}
    </div>
  );
}
