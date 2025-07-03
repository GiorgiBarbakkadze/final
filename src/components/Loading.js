import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export const Loading = ({ message }) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 dark:border-blue-900"></div>
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent absolute top-0 left-0"></div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
        {message || t('loading')}
      </p>
    </div>
  );
}; 