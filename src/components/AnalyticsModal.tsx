import React, { useState } from 'react';
import { X, BarChart3, TrendingUp, AlertTriangle, MapPin } from 'lucide-react';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnalyticsModal({ isOpen, onClose }: AnalyticsModalProps) {
  const [selectedState, setSelectedState] = useState('all');

  const states = [
    { id: 'all', name: 'All States' },
    { id: 'mp', name: 'Madhya Pradesh' },
    { id: 'tripura', name: 'Tripura' },
    { id: 'odisha', name: 'Odisha' },
    { id: 'telangana', name: 'Telangana' }
  ];

  const analyticsData = {
    all: {
      maxClaims: { value: 4567, location: 'Madhya Pradesh' },
      mostDisputed: { value: 'Bastar District', disputes: 45 },
      totalClaims: 12847,
      approvalRate: 64.1,
      avgProcessingTime: 45,
      monthlyData: [
        { month: 'Jan', claims: 1234, approved: 789, rejected: 123 },
        { month: 'Feb', claims: 1456, approved: 934, rejected: 145 },
        { month: 'Mar', claims: 1678, approved: 1078, rejected: 167 },
        { month: 'Apr', claims: 1890, approved: 1213, rejected: 189 },
        { month: 'May', claims: 2123, approved: 1362, rejected: 212 },
        { month: 'Jun', claims: 2456, approved: 1576, rejected: 245 }
      ]
    },
    mp: {
      maxClaims: { value: 4567, location: 'Bastar District' },
      mostDisputed: { value: 'Gwalior Region', disputes: 23 },
      totalClaims: 4567,
      approvalRate: 68.2,
      avgProcessingTime: 42,
      monthlyData: [
        { month: 'Jan', claims: 456, approved: 312, rejected: 45 },
        { month: 'Feb', claims: 523, approved: 356, rejected: 52 },
        { month: 'Mar', claims: 612, approved: 417, rejected: 61 },
        { month: 'Apr', claims: 689, approved: 469, rejected: 69 },
        { month: 'May', claims: 734, approved: 500, rejected: 73 },
        { month: 'Jun', claims: 789, approved: 537, rejected: 79 }
      ]
    }
  };

  const currentData = analyticsData[selectedState as keyof typeof analyticsData] || analyticsData.all;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <BarChart3 className="h-6 w-6 mr-2 text-purple-400" />
            Claims Analytics Dashboard
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* State Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">Select State</label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
          >
            {states.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Maximum Claims</h4>
              <TrendingUp className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">{currentData.maxClaims.value}</div>
            <div className="text-sm text-gray-400">{currentData.maxClaims.location}</div>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Most Disputed Area</h4>
              <AlertTriangle className="h-6 w-6 text-red-400" />
            </div>
            <div className="text-lg font-bold text-red-400 mb-2">{currentData.mostDisputed.value}</div>
            <div className="text-sm text-gray-400">{currentData.mostDisputed.disputes} active disputes</div>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Total Claims</h4>
              <BarChart3 className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-blue-400 mb-2">{currentData.totalClaims.toLocaleString()}</div>
            <div className="text-sm text-gray-400">All time</div>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Approval Rate</h4>
              <MapPin className="h-6 w-6 text-amber-400" />
            </div>
            <div className="text-3xl font-bold text-amber-400 mb-2">{currentData.approvalRate}%</div>
            <div className="text-sm text-gray-400">Avg. {currentData.avgProcessingTime} days processing</div>
          </div>
        </div>

        {/* Claims Chart */}
        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 mb-6">
          <h4 className="text-lg font-semibold text-white mb-6">Monthly Claims Trend</h4>
          <div className="space-y-4">
            {currentData.monthlyData.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm text-gray-400">{data.month}</div>
                <div className="flex-1 flex space-x-2">
                  <div 
                    className="bg-emerald-500 h-8 rounded flex items-center justify-center text-xs text-white font-medium"
                    style={{ width: `${(data.approved / Math.max(...currentData.monthlyData.map(d => d.claims))) * 100}%` }}
                  >
                    {data.approved}
                  </div>
                  <div 
                    className="bg-amber-500 h-8 rounded flex items-center justify-center text-xs text-white font-medium"
                    style={{ width: `${((data.claims - data.approved - data.rejected) / Math.max(...currentData.monthlyData.map(d => d.claims))) * 100}%` }}
                  >
                    {data.claims - data.approved - data.rejected}
                  </div>
                  <div 
                    className="bg-red-500 h-8 rounded flex items-center justify-center text-xs text-white font-medium"
                    style={{ width: `${(data.rejected / Math.max(...currentData.monthlyData.map(d => d.claims))) * 100}%` }}
                  >
                    {data.rejected}
                  </div>
                </div>
                <div className="w-16 text-sm text-gray-400 text-right">{data.claims}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mt-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded"></div>
              <span className="text-gray-400">Approved</span>
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

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">Processing Efficiency</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Average Processing Time</span>
                <span className="text-white font-semibold">{currentData.avgProcessingTime} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fastest Processing</span>
                <span className="text-emerald-400 font-semibold">7 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Slowest Processing</span>
                <span className="text-red-400 font-semibold">180 days</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">Claim Types Distribution</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Individual Rights</span>
                <span className="text-blue-400 font-semibold">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Community Rights</span>
                <span className="text-emerald-400 font-semibold">32%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Resource Rights</span>
                <span className="text-amber-400 font-semibold">18%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Habitat Rights</span>
                <span className="text-purple-400 font-semibold">5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}