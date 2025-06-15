import React, { useState } from 'react';
import { Volume2, ArrowRight, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactConfetti from 'react-confetti';

interface VocabularyWord {
  id: number;
  word: string;
  translation: string;
  imageUrl: string;
}

interface VocabularyReviewProps {
  vocabulary: VocabularyWord[];
  onClose: () => void;
}

const VocabularyReview: React.FC<VocabularyReviewProps> = ({ vocabulary, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [knownWords, setKnownWords] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const currentWord = vocabulary[currentIndex];

  const handleKnowWord = (known: boolean) => {
    if (known) {
      setKnownWords([...knownWords, currentWord.id]);
    }
    
    if (currentIndex < vocabulary.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowTranslation(false);
    } else {
      setShowResults(true);
      if (knownWords.length + (known ? 1 : 0) >= vocabulary.length * 0.8) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      }
    }
  };

  const playPronunciation = () => {
    // In a real app, this would play audio pronunciation
    console.log('Playing pronunciation for:', currentWord.word);
  };

  const resetReview = () => {
    setCurrentIndex(0);
    setShowTranslation(false);
    setKnownWords([]);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="card p-6">
        {showConfetti && <ReactConfetti recycle={false} numberOfPieces={200} />}
        <div className="text-center">
          <div className="bg-secondary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold text-secondary-600">
              {knownWords.length}/{vocabulary.length}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">Review Complete!</h3>
          <p className="text-neutral-600 mb-6">
            {knownWords.length === vocabulary.length
              ? 'Perfect! You know all the words!'
              : knownWords.length >= vocabulary.length * 0.8
              ? 'Great job! Keep practicing the words you missed.'
              : 'Keep practicing! You\'ll get better with time.'}
          </p>
          <div className="flex space-x-3">
            <button onClick={onClose} className="btn-outline flex-1">
              Exit
            </button>
            <button onClick={resetReview} className="btn-primary flex-1">
              Review Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={currentWord.imageUrl}
          alt={currentWord.word}
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-primary-700">{currentWord.word}</h3>
          <button
            onClick={playPronunciation}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <Volume2 size={20} className="text-primary-500" />
          </button>
        </div>

        <AnimatePresence>
          {showTranslation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 mb-4"
            >
              <p className="text-primary-700">{currentWord.translation}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {!showTranslation ? (
          <button
            onClick={() => setShowTranslation(true)}
            className="btn-primary w-full mb-4"
          >
            Show Translation
          </button>
        ) : (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              onClick={() => handleKnowWord(false)}
              className="btn-outline flex items-center justify-center"
            >
              <X size={18} className="mr-2" />
              <span>Still Learning</span>
            </button>
            <button
              onClick={() => handleKnowWord(true)}
              className="btn-primary flex items-center justify-center"
            >
              <Check size={18} className="mr-2" />
              <span>I Know This</span>
            </button>
          </div>
        )}

        <div className="flex justify-between items-center text-sm text-neutral-500">
          <span>Word {currentIndex + 1} of {vocabulary.length}</span>
          <span>{knownWords.length} words mastered</span>
        </div>
      </div>
    </div>
  );
};

export default VocabularyReview;