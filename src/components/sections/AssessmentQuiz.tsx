'use client';

import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { questions } from '@/data/assessment';
import { trackEvent } from '@/lib/analytics';

interface AssessmentQuizProps {
  onComplete: (score: number, tags: string[]) => void;
}

export function AssessmentQuiz({ onComplete }: AssessmentQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = questions[currentIndex];
  const progress = (currentIndex / questions.length) * 100;

  const handleSelect = useCallback(
    (optionIndex: number) => {
      if (selectedOption !== null) return;

      const option = question.options[optionIndex];
      setSelectedOption(optionIndex);

      const newScore = score + option.points;
      const newTags = option.tag ? [...tags, option.tag] : tags;

      if (currentIndex === 0) {
        trackEvent('assessment_started');
      }

      // Minimal delay — just enough for visual feedback
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setScore(newScore);
          setTags(newTags);
          setCurrentIndex(currentIndex + 1);
          setSelectedOption(null);
        } else {
          trackEvent('assessment_completed', {
            score: newScore,
            tier: newScore <= 7 ? 'explorer' : newScore <= 14 ? 'ready' : 'urgent',
          });
          onComplete(newScore, newTags);
        }
      }, 150);
    },
    [currentIndex, onComplete, question, score, selectedOption, tags]
  );

  return (
    <div className="mx-auto max-w-2xl px-4">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm text-stone">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-forest/10">
          <div
            className="h-full rounded-full bg-forest transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="mb-8 text-center font-serif text-2xl font-bold text-forest md:text-3xl">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={option.label}
            type="button"
            onClick={() => handleSelect(i)}
            disabled={selectedOption !== null}
            className={cn(
              'w-full rounded-xl border-2 px-6 py-4 text-left text-base font-medium transition-all duration-200',
              selectedOption === i
                ? 'border-forest bg-forest/10 text-forest'
                : 'border-stone/15 bg-white text-charcoal hover:border-forest/40 hover:bg-forest/5',
              selectedOption !== null && selectedOption !== i && 'opacity-50'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
