import React from 'react';
import { Brain, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function AIInsights() {
  const insights = [
    {
      type: 'success',
      icon: CheckCircle,
      title: 'Claim Verification Completed',
      description: '847 claims auto-verified using satellite imagery analysis',
      time: '2 hours ago'
    },
    {
      type: 'warning',
      icon: AlertCircle,
      title: 'Potential Overlap Detected',
      description: '23 overlapping claims identified in Bastar district, MP',
      time: '4 hours ago'
    },
    {
      type: 'info',
      icon: TrendingUp,
      title: 'Forest Cover Analysis',
      description: 'Wildlife corridor protection improved by 15% this quarter',
      time: '6 hours ago'
    },
    {
      type: 'pending',
      icon: Clock,
      title: 'Policy Recommendation Ready',
      description: 'New guidelines for faster tribal claim processing',
      time: '8 hours ago'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
      <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Brain className="h-5 w-5 mr-2 text-purple-400" />
          AI-Powered Insights
        </h3>
      </div>
      
      <div className="p-6 space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          const colors = {
            success: 'text-emerald-400 bg-emerald-500/20',
            warning: 'text-amber-400 bg-amber-500/20',
            info: 'text-blue-400 bg-blue-500/20',
            pending: 'text-gray-400 bg-gray-500/20'
          };
          
          return (
            <div 
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-200 border border-gray-700/50 hover:border-gray-600"
            >
              <div className={`p-2 rounded-lg ${colors[insight.type as keyof typeof colors]}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-white mb-1">{insight.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{insight.description}</p>
                <span className="text-xs text-gray-500">{insight.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}