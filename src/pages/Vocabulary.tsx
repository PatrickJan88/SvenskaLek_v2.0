import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Volume2, Trash2 } from 'lucide-react';
import { useVocabulary } from '../hooks/useVocabulary';

const Vocabulary: React.FC = () => {
  const navigate = useNavigate();
  const { savedWords, removeWord, isLoaded } = useVocabulary();
  
  const playPronunciation = (word: string) => {
    // In a real app, this would play audio pronunciation
    console.log('Playing pronunciation for:', word);
  };

  const handleRemoveWord = (wordId: number) => {
    if (confirm('Are you sure you want to remove this word from your vocabulary?')) {
      removeWord(wordId);
    }
  };

  // Show loading state while data is being loaded
  if (!isLoaded) {
    return (
      <div className="container mx-auto px-4 max-w-md">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors mr-2"
          >
            <ArrowLeft size={24} className="text-primary-500 dark:text-primary-400" />
          </button>
          <h1 className="text-2xl font-bold text-primary-700 dark:text-primary-300">My Vocabulary</h1>
        </div>
        <div className="card p-8 text-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-300">Loading your vocabulary...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-md">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors mr-2"
        >
          <ArrowLeft size={24} className="text-primary-500 dark:text-primary-400" />
        </button>
        <h1 className="text-2xl font-bold text-primary-700 dark:text-primary-300">My Vocabulary</h1>
      </div>

      {savedWords.length === 0 ? (
        <div className="card p-8 text-center">
          <div className="bg-neutral-100 dark:bg-neutral-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📚</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 dark:text-neutral-100">No words saved yet</h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            Start exploring and add words to build your vocabulary!
          </p>
          <button
            onClick={() => navigate('/explore')}
            className="btn-primary"
          >
            Explore Words
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4 text-center">
            <p className="text-neutral-600 dark:text-neutral-300">
              You have learned <span className="font-bold text-primary-700 dark:text-primary-300">{savedWords.length}</span> words
            </p>
          </div>
          
          <div className="space-y-4">
            {savedWords.map((word) => (
              <div key={word.id} className="card overflow-hidden">
                <div className="flex">
                  <img 
                    src={word.imageUrl} 
                    alt={word.word}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">{word.word}</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => playPronunciation(word.word)}
                          className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors"
                        >
                          <Volume2 size={18} className="text-primary-500 dark:text-primary-400" />
                        </button>
                        <button
                          onClick={() => handleRemoveWord(word.id)}
                          className="p-2 hover:bg-error-100 dark:hover:bg-error-900 rounded-full transition-colors"
                        >
                          <Trash2 size={18} className="text-error-500 dark:text-error-400" />
                        </button>
                      </div>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm">{word.translation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Vocabulary;