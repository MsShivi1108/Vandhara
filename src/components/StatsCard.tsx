import React from 'react';
import { LucideIcon } from '../types/lucide';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
  color: 'emerald' | 'blue' | 'amber' | 'red';
  onClick?: () => void;
}

export default function StatsCard({ title, value, change, icon: Icon, trend, color, onClick }: StatsCardProps) {
  const colorClasses = {
    emerald: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-400',
    blue: 'from-blue-500/20 to-blue-600/5 border-blue-500/20 text-blue-400',
    amber: 'from-amber-500/20 to-amber-600/5 border-amber-500/20 text-amber-400',
    red: 'from-red-500/20 to-red-600/5 border-red-500/20 text-red-400'
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${onClick ? 'cursor-pointer hover:shadow-2xl' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${color === 'emerald' ? 'from-emerald-500 to-green-500' : 
          color === 'blue' ? 'from-blue-500 to-cyan-500' :
          color === 'amber' ? 'from-amber-500 to-yellow-500' : 'from-red-500 to-rose-500'}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className={`text-sm font-medium ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
          {trend === 'up' ? '↗' : '↘'} {change}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  );
}