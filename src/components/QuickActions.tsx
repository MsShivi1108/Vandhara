import React from 'react';
import { FileText, Upload, Users, MapPin, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface QuickActionsProps {
  onNewClaim: () => void;
  onSurveyAreas: () => void;
  onAnalytics: () => void;
}

export default function QuickActions({ onNewClaim, onSurveyAreas, onAnalytics }: QuickActionsProps) {
  const { t } = useLanguage();

  const actions = [
    { name: t('quickActions.newClaim'), icon: FileText, color: 'emerald', onClick: onNewClaim },
    // { name: t('quickActions.uploadData'), icon: Upload, color: 'blue', onClick: () => {} },
    // { name: t('quickActions.manageUsers'), icon: Users, color: 'amber', onClick: () => {} },
    { name: t('quickActions.surveyAreas'), icon: MapPin, color: 'red', onClick: onSurveyAreas },
    { name: t('quickActions.analytics'), icon: BarChart3, color: 'cyan', onClick: onAnalytics }
  ];

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
      <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white">{t('quickActions.title')}</h3>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const colorClasses = {
              emerald: 'hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400',
              blue: 'hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400',
              purple: 'hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-400',
              amber: 'hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400',
              red: 'hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400',
              cyan: 'hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400'
            };
            
            return (
              <button
                key={index}
                onClick={action.onClick}
                className={`flex items-center space-x-3 p-4 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 transition-all duration-200 ${colorClasses[action.color as keyof typeof colorClasses]} hover:scale-105`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{action.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}