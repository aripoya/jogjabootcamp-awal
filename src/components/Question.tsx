import type { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (score: number) => void;
}

export default function Question({ question, onAnswer }: QuestionProps) {
  return (
    <div className="animate-fadeIn">
      <div className="bg-gold/10 border-l-4 border-gold rounded-r-lg p-4 mb-8">
        <p className="text-navy-primary leading-relaxed">
          {question.encouragement}
        </p>
      </div>
      
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy-primary mb-8">
        {question.question}
      </h2>
      
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.score)}
            className="w-full text-left p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-gold hover:bg-gold/5 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-navy-primary/10 group-hover:bg-gold group-hover:text-white text-navy-primary rounded-full flex items-center justify-center font-semibold transition-all duration-300">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-gray-700 group-hover:text-navy-primary transition-colors">
                {option.text}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
