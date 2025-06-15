import React, { useState, useMemo } from 'react';
import { Volume2, Moon, Bell, Trash2, InfoIcon, LogOut } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

// Username generator function
const generateUsername = () => {
  const adjectives = [
    'Happy', 'Clever', 'Bright', 'Swift', 'Kind', 'Brave', 'Wise', 'Cool',
    'Smart', 'Quick', 'Bold', 'Calm', 'Eager', 'Fair', 'Gentle', 'Jolly'
  ];
  
  const nouns = [
    'Learner', 'Explorer', 'Student', 'Scholar', 'Adventurer', 'Seeker',
    'Discoverer', 'Traveler', 'Pioneer', 'Navigator', 'Wanderer', 'Voyager'
  ];
  
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNumber = Math.floor(Math.random() * 999) + 1;
  
  return `${randomAdjective}${randomNoun}${randomNumber}`;
};

const Settings: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  // Generate consistent user data
  const userData = useMemo(() => {
    // Try to get existing username from localStorage, or generate new one
    let username = localStorage.getItem('username');
    if (!username) {
      username = generateUsername();
      localStorage.setItem('username', username);
    }
    
    return {
      username
    };
  }, []);
  
  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-primary-700 dark:text-primary-300">Settings</h1>
      
      {/* User Profile Section */}
      <div className="card mb-6">
        <div className="p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full mr-4 flex-shrink-0 bg-white dark:bg-neutral-700 border-2 border-neutral-200 dark:border-neutral-600 p-1">
              <img 
                src="/ChatGPT Image Jun 15, 2025, 03_06_40 PM.png" 
                alt="Profile Avatar"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 truncate">{userData.username}</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Swedish Learner</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card mb-6">
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="font-semibold dark:text-neutral-100">App Settings</h2>
        </div>
        
        <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-full mr-3">
                <Volume2 size={20} className="text-primary-500 dark:text-primary-300" />
              </div>
              <div>
                <p className="font-medium dark:text-neutral-100">Sound Effects</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Enable sound effects in the app</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={soundEnabled}
                onChange={() => setSoundEnabled(!soundEnabled)}
              />
              <div className="w-11 h-6 bg-neutral-300 dark:bg-neutral-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
          </div>
          
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-full mr-3">
                <Moon size={20} className="text-primary-500 dark:text-primary-300" />
              </div>
              <div>
                <p className="font-medium dark:text-neutral-100">Dark Mode</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Change app appearance</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <div className="w-11 h-6 bg-neutral-300 dark:bg-neutral-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
          </div>
          
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-full mr-3">
                <Bell size={20} className="text-primary-500 dark:text-primary-300" />
              </div>
              <div>
                <p className="font-medium dark:text-neutral-100">Notifications</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Receive daily reminders</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              />
              <div className="w-11 h-6 bg-neutral-300 dark:bg-neutral-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
          </div>
        </div>
      </div>
      
      <div className="card mb-6">
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="font-semibold dark:text-neutral-100">Data</h2>
        </div>
        
        <button className="p-4 w-full flex items-center text-left text-error-600 dark:text-error-400 hover:bg-neutral-50 dark:hover:bg-neutral-700">
          <div className="bg-error-100 dark:bg-error-900 p-2 rounded-full mr-3">
            <Trash2 size={20} className="text-error-500 dark:text-error-400" />
          </div>
          <div>
            <p className="font-medium">Reset Progress</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Clear all your learning data</p>
          </div>
        </button>
      </div>
      
      <div className="card mb-6">
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="font-semibold dark:text-neutral-100">About</h2>
        </div>
        
        <button className="p-4 w-full flex items-center text-left hover:bg-neutral-50 dark:hover:bg-neutral-700">
          <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-full mr-3">
            <InfoIcon size={20} className="text-primary-500 dark:text-primary-300" />
          </div>
          <div>
            <p className="font-medium dark:text-neutral-100">About SvenskaLek</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Version 2.0.0</p>
          </div>
        </button>
      </div>
      
      <button className="w-full p-4 flex items-center justify-center text-error-600 dark:text-error-400 hover:bg-error-50 dark:hover:bg-error-900 rounded-lg transition-colors">
        <LogOut size={20} className="mr-2" />
        <span className="font-medium">Sign Out</span>
      </button>
    </div>
  );
};

export default Settings;