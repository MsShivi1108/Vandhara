import React, { useState } from 'react';
import { Brain, TrendingUp, BarChart3, PieChart, Activity, Zap, Target, AlertTriangle } from 'lucide-react';

export default function AIAnalytics() {
  const [selectedMetric, setSelectedMetric] = useState('verification');

  const metrics = [
    { id: 'verification', name: 'Claim Verification', icon: Brain, color: 'purple' },
    { id: 'conflicts', name: 'Conflict Detection', icon: AlertTriangle, color: 'red' },
    { id: 'trends', name: 'Trend Analysis', icon: TrendingUp, color: 'emerald' },
    { id: 'policy', name: 'Policy Insights', icon: Target, color: 'blue' }
  ];

  const aiInsights = [
    {
      title: 'Automated Claim Verification',
      description: 'AI has processed 847 claims using satellite imagery and boundary analysis',
      accuracy: '94.2%',
      timeSaved: '156 hours',
      status: 'active'
    },
    {
      title: 'Conflict Prediction Model',
      description: 'Machine learning identifies potential boundary disputes before they escalate',
      accuracy: '87.5%',
      prevented: '23 conflicts',
      status: 'active'
    },
    {
      title: 'Forest Cover Analysis',
      description: 'Deep learning monitors deforestation and wildlife corridor protection',
      accuracy: '91.8%',
      coverage: '45,678 sq km',
      status: 'monitoring'
    },
    {
      title: 'Policy Recommendation Engine',
      description: 'AI analyzes patterns to suggest policy improvements and faster processing',
      efficiency: '+15%',
      recommendations: '12 active',
      status: 'generating'
    }
  ];

  const verificationData = [
    { month: 'Jan', verified: 234, pending: 45, rejected: 12 },
    { month: 'Feb', verified: 289, pending: 38, rejected: 8 },
    { month: 'Mar', verified: 324, pending: 52, rejected: 15 },
    { month: 'Apr', verified: 378, pending: 41, rejected: 9 },
    { month: 'May', verified: 412, pending: 35, rejected: 6 },
    { month: 'Jun', verified: 456, pending: 29, rejected: 4 }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 flex items-center">
            <Brain className="h-8 w-8 mr-3 text-purple-400" />
            AI Analytics Dashboard
          </h1>
          <p className="text-gray-400 text-lg">
            Advanced AI-powered insights for FRA implementation and forest rights monitoring
          </p>
        </div>

        {/* Metric Selector */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">AI Analysis Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              const colorClasses = {
                purple: 'hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-400',
                red: 'hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400',
                emerald: 'hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400',
                blue: 'hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400'
              };
              
              return (
                <button
                  key={metric.id}
                  onClick={() => setSelectedMetric(metric.id)}
                  className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-200 ${
                    selectedMetric === metric.id
                      ? `bg-${metric.color}-500/20 border-${metric.color}-500/30 text-${metric.color}-400`
                      : `bg-gray-900/50 border-gray-700 text-gray-300 ${colorClasses[metric.color as keyof typeof colorClasses]}`
                  }`}
                >
                  <Icon className="h-6 w-6" />
                  <span className="font-medium">{metric.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AI Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {aiInsights.map((insight, index) => (
            <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">{insight.title}</h4>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  insight.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' :
                  insight.status === 'monitoring' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-amber-500/20 text-amber-400'
                }`}>
                  {insight.status}
                </div>
              </div>
              <p className="text-gray-400 mb-4">{insight.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {insight.accuracy && (
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <div className="text-emerald-400 font-semibold text-lg">{insight.accuracy}</div>
                    <div className="text-gray-400 text-sm">Accuracy Rate</div>
                  </div>
                )}
                {insight.timeSaved && (
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <div className="text-blue-400 font-semibold text-lg">{insight.timeSaved}</div>
                    <div className="text-gray-400 text-sm">Time Saved</div>
                  </div>
                )}
                {insight.prevented && (
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <div className="text-amber-400 font-semibold text-lg">{insight.prevented}</div>
                    <div className="text-gray-400 text-sm">Conflicts Prevented</div>
                  </div>
                )}
                {insight.coverage && (
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <div className="text-purple-400 font-semibold text-lg">{insight.coverage}</div>
                    <div className="text-gray-400 text-sm">Area Monitored</div>
                  </div>
                )}
                {insight.efficiency && (
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <div className="text-emerald-400 font-semibold text-lg">{insight.efficiency}</div>
                    <div className="text-gray-400 text-sm">Efficiency Gain</div>
                  </div>
                )}
                {insight.recommendations && (
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <div className="text-blue-400 font-semibold text-lg">{insight.recommendations}</div>
                    <div className="text-gray-400 text-sm">Active Recommendations</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Verification Trends */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-emerald-400" />
              AI Verification Trends
            </h4>
            <div className="space-y-4">
              {verificationData.map((data, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 text-sm text-gray-400">{data.month}</div>
                  <div className="flex-1 flex space-x-2">
                    <div 
                      className="bg-emerald-500 h-6 rounded flex items-center justify-center text-xs text-white"
                      style={{ width: `${(data.verified / 500) * 100}%` }}
                    >
                      {data.verified}
                    </div>
                    <div 
                      className="bg-amber-500 h-6 rounded flex items-center justify-center text-xs text-white"
                      style={{ width: `${(data.pending / 500) * 100}%` }}
                    >
                      {data.pending}
                    </div>
                    <div 
                      className="bg-red-500 h-6 rounded flex items-center justify-center text-xs text-white"
                      style={{ width: `${(data.rejected / 500) * 100}%` }}
                    >
                      {data.rejected}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-6 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                <span className="text-gray-400">Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-amber-500 rounded"></div>
                <span className="text-gray-400">Pending</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-gray-400">Rejected</span>
              </div>
            </div>
          </div>

          {/* AI Performance Metrics */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Activity className="h-5 w-5 mr-2 text-purple-400" />
              AI Model Performance
            </h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Claim Verification Accuracy</span>
                  <span className="text-emerald-400 font-semibold">94.2%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '94.2%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Conflict Prediction Accuracy</span>
                  <span className="text-amber-400 font-semibold">87.5%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-amber-500 h-3 rounded-full" style={{ width: '87.5%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Forest Cover Analysis</span>
                  <span className="text-blue-400 font-semibold">91.8%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '91.8%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Policy Recommendation Relevance</span>
                  <span className="text-purple-400 font-semibold">89.3%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full" style={{ width: '89.3%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time AI Processing */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
            <Zap className="h-5 w-5 mr-2 text-yellow-400" />
            Real-time AI Processing
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-medium text-white">Claims Queue</h5>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-emerald-400 mb-1">47</div>
              <div className="text-sm text-gray-400">Claims being processed</div>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-medium text-white">Satellite Analysis</h5>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-blue-400 mb-1">12</div>
              <div className="text-sm text-gray-400">Images being analyzed</div>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-medium text-white">Conflict Detection</h5>
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-amber-400 mb-1">3</div>
              <div className="text-sm text-gray-400">Potential conflicts found</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}