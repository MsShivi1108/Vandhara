import React from 'react';
import { Activity, MapPin, FileText, Users, CheckCircle, AlertTriangle } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    {
      type: 'claim',
      icon: FileText,
      title: 'New FRA Claim Submitted',
      description: 'Village Kankavali, Odisha - 2.5 hectares',
      time: '15 minutes ago',
      status: 'pending'
    },
    {
      type: 'verification',
      icon: CheckCircle,
      title: 'AI Verification Completed',
      description: '12 claims verified in Tripura region',
      time: '1 hour ago',
      status: 'success'
    },
    {
      type: 'conflict',
      icon: AlertTriangle,
      title: 'Boundary Conflict Detected',
      description: 'Overlap between claims in Madhya Pradesh',
      time: '2 hours ago',
      status: 'warning'
    },
    {
      type: 'survey',
      icon: MapPin,
      title: 'Field Survey Completed',
      description: 'Telangana forest survey - 15 locations',
      time: '3 hours ago',
      status: 'info'
    },
    {
      type: 'user',
      icon: Users,
      title: 'New Stakeholder Registered',
      description: 'NGO partner from Bhubaneswar added',
      time: '5 hours ago',
      status: 'info'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
      <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Activity className="h-5 w-5 mr-2 text-emerald-400" />
          Recent Activity
        </h3>
      </div>
      
      <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          const statusColors = {
            success: 'bg-emerald-500/20 text-emerald-400',
            warning: 'bg-amber-500/20 text-amber-400',
            info: 'bg-blue-500/20 text-blue-400',
            pending: 'bg-gray-500/20 text-gray-400'
          };
          
          return (
            <div 
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-900/50 transition-all duration-200 border border-transparent hover:border-gray-700"
            >
              <div className={`p-2 rounded-lg ${statusColors[activity.status as keyof typeof statusColors]}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-white mb-1">{activity.title}</h4>
                <p className="text-sm text-gray-400 mb-1">{activity.description}</p>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}