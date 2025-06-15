import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageIcon, Volume2, AlignLeft, Book, ArrowLeft } from 'lucide-react';
import QuizCard from '../components/QuizCard';
import VocabularyReview from '../components/VocabularyReview';
import { useVocabulary } from '../hooks/useVocabulary';

const Play: React.FC = () => {
  const navigate = useNavigate();
  const { savedWords } = useVocabulary();
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [showVocabularyReview, setShowVocabularyReview] = useState(false);
  
  const quizTypes = [
    { 
      id: 'image-word', 
      title: 'Image to Word', 
      description: 'Match images with their Swedish words',
      icon: <ImageIcon size={24} className="text-primary-500 dark:text-primary-300" />
    },
    { 
      id: 'listen-word', 
      title: 'Listen and Choose', 
      description: 'Select the word you hear',
      icon: <Volume2 size={24} className="text-secondary-600 dark:text-secondary-400" />
    },
    { 
      id: 'sentence', 
      title: 'Complete the Sentence', 
      description: 'Fill in the missing word',
      icon: <AlignLeft size={24} className="text-accent-500 dark:text-accent-400" />
    }
  ];
  
  return (
    <div className="container mx-auto px-4 max-w-md">
      {!activeQuiz && !showVocabularyReview ? (
        <>
          <h1 className="text-2xl font-bold mb-6 text-primary-700 dark:text-primary-300">Play</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-neutral-100">Games</h2>
            <div className="space-y-3">
              {quizTypes.map(quiz => (
                <button
                  key={quiz.id}
                  className="card p-4 w-full flex items-center hover:shadow-md transition-shadow"
                  onClick={() => setActiveQuiz(quiz.id)}
                >
                  <div className="bg-neutral-100 dark:bg-neutral-700 p-3 rounded-full mr-4">
                    {quiz.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium dark:text-neutral-100">{quiz.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{quiz.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
          
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold dark:text-neutral-100">My Vocabulary</h2>
              <button 
                onClick={() => navigate('/vocabulary')} 
                className="text-sm text-primary-500 dark:text-primary-400 font-medium"
              >
                View All
              </button>
            </div>
            
            <div className="card p-4">
              <div className="flex items-center mb-4">
                <div className="bg-success-100 dark:bg-success-900 p-3 rounded-full mr-4">
                  <Book className="text-success-500 dark:text-success-300" size={24} />
                </div>
                <div>
                  <h3 className="font-medium dark:text-neutral-100">Review Words</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{savedWords.length} words saved</p>
                </div>
              </div>
              
              {savedWords.length > 0 ? (
                <>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {savedWords.slice(0, 4).map(word => (
                      <div key={word.id} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-sm dark:text-neutral-300">
                        {word.word}
                      </div>
                    ))}
                    {savedWords.length > 4 && (
                      <div className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-sm dark:text-neutral-300">
                        +{savedWords.length - 4} more
                      </div>
                    )}
                  </div>
                  
                  <button 
                    className="btn-primary w-full"
                    onClick={() => setShowVocabularyReview(true)}
                  >
                    Start Practice
                  </button>
                </>
              ) : (
                <div className="text-center py-4">
                  <p className="text-neutral-500 dark:text-neutral-400 mb-4">No words saved yet</p>
                  <button
                    onClick={() => navigate('/explore')}
                    className="btn-outline"
                  >
                    Explore Words
                  </button>
                </div>
              )}
            </div>
          </section>
        </>
      ) : activeQuiz ? (
        <QuizCard
          quizType={activeQuiz}
          onClose={() => setActiveQuiz(null)}
        />
      ) : (
        <>
          <div className="flex items-center mb-6">
            <button
              onClick={() => setShowVocabularyReview(false)}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors mr-2"
            >
              <ArrowLeft size={24} className="text-primary-500 dark:text-primary-400" />
            </button>
            <h1 className="text-2xl font-bold text-primary-700 dark:text-primary-300">My Vocabulary</h1>
          </div>
          <VocabularyReview
            vocabulary={savedWords}
            onClose={() => setShowVocabularyReview(false)}
          />
        </>
      )}
    </div>
  );
};

export default Play;