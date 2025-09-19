import React from 'react';
import { Map, Users, Brain, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  return (
    <header className="bg-gray-900 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="rounded-lg w-16 h-16">
              <img src="/logo.jpg"/>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">FRA Atlas</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => onNavigate('dashboard')}
              className={`transition-colors duration-200 flex items-center space-x-1 ${
                currentPage === 'dashboard' ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              <span>{t('header.dashboard')}</span>
            </button>
            <button 
              onClick={() => onNavigate('atlas')}
              className={`transition-colors duration-200 flex items-center space-x-1 ${
                currentPage === 'atlas' ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              <span>{t('header.atlas')}</span>
            </button>
            <button 
              onClick={() => onNavigate('claims')}
              className={`transition-colors duration-200 flex items-center space-x-1 ${
                currentPage === 'claims' ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              <span>{t('header.claims')}</span>
            </button>
            <button 
              onClick={() => onNavigate('ai')}
              className={`transition-colors duration-200 flex items-center space-x-2 ${
                currentPage === 'ai' ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              <Brain className="h-4 w-4" />
              <span>{t('header.ai')}</span>
            </button>
            <button 
              onClick={() => onNavigate('profile')}
              className={`transition-colors duration-200 flex items-center space-x-2 ${
                currentPage === 'profile' ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              <User className="h-4 w-4" />
              <span>{user && user.role === 'admin' ? t('header.adminPortal') : t('header.userPortal')}</span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button 
              onClick={logout}
              className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-200"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}