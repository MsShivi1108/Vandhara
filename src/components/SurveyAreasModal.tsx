import React from 'react';
import { X, MapPin, Calendar, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

interface SurveyAreasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SurveyAreasModal({ isOpen, onClose }: SurveyAreasModalProps) {
  const surveyAreas = [
    {
      id: 'SA-001',
      name: 'Bastar Forest Reserve',
      state: 'Madhya Pradesh',
      district: 'Bastar',
      area: '1,245 hectares',
      status: 'completed',
      surveyDate: '2024-02-15',
      surveyor: 'Dr. Rajesh Kumar',
      findings: 'Rich biodiversity, 23 tribal settlements identified',
      coordinates: '19.3156° N, 81.9661° E'
    },
    {
      id: 'SA-002',
      name: 'Agartala Wildlife Corridor',
      state: 'Tripura',
      district: 'West Tripura',
      area: '856 hectares',
      status: 'in_progress',
      surveyDate: '2024-03-01',
      surveyor: 'Prof. Meera Devi',
      findings: 'Elephant migration route, requires protection',
      coordinates: '23.8315° N, 91.2868° E'
    },
    {
      id: 'SA-003',
      name: 'Simlipal Tiger Reserve Buffer',
      state: 'Odisha',
      district: 'Mayurbhanj',
      area: '2,134 hectares',
      status: 'completed',
      surveyDate: '2024-01-20',
      surveyor: 'Dr. Anita Panda',
      findings: 'Tiger habitat, 15 villages with traditional rights',
      coordinates: '21.6167° N, 86.7333° E'
    },
    {
      id: 'SA-004',
      name: 'Kawal Wildlife Sanctuary',
      state: 'Telangana',
      district: 'Adilabad',
      area: '892 hectares',
      status: 'pending',
      surveyDate: '2024-03-15',
      surveyor: 'Dr. Venkat Reddy',
      findings: 'Pending survey initiation',
      coordinates: '19.0500° N, 79.2167° E'
    },
    {
      id: 'SA-005',
      name: 'Kanha Buffer Zone',
      state: 'Madhya Pradesh',
      district: 'Mandla',
      area: '1,678 hectares',
      status: 'completed',
      surveyDate: '2024-02-28',
      surveyor: 'Dr. Priya Sharma',
      findings: 'Sal forest ecosystem, 8 Gond villages documented',
      coordinates: '22.3344° N, 80.6103° E'
    },
    {
      id: 'SA-006',
      name: 'Sepahijala Wildlife Sanctuary',
      state: 'Tripura',
      district: 'Sepahijala',
      area: '567 hectares',
      status: 'in_progress',
      surveyDate: '2024-03-10',
      surveyor: 'Dr. Biplab Das',
      findings: 'Primate habitat, community fishing rights identified',
      coordinates: '23.6200° N, 91.6500° E'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-emerald-400" />;
      case 'in_progress': return <Clock className="h-4 w-4 text-amber-400" />;
      case 'pending': return <AlertTriangle className="h-4 w-4 text-red-400" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'in_progress': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'pending': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <MapPin className="h-6 w-6 mr-2 text-emerald-400" />
            Survey Areas Overview
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-white mb-1">6</div>
            <div className="text-sm text-gray-400">Total Survey Areas</div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-emerald-400 mb-1">3</div>
            <div className="text-sm text-gray-400">Completed Surveys</div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-amber-400 mb-1">2</div>
            <div className="text-sm text-gray-400">In Progress</div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-red-400 mb-1">1</div>
            <div className="text-sm text-gray-400">Pending</div>
          </div>
        </div>

        {/* Survey Areas List */}
        <div className="space-y-4">
          {surveyAreas.map((area) => (
            <div key={area.id} className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{area.name}</h4>
                  <p className="text-sm text-gray-400">Survey ID: {area.id}</p>
                </div>
                <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(area.status)}`}>
                  {getStatusIcon(area.status)}
                  <span className="capitalize">{area.status.replace('_', ' ')}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Location</div>
                  <div className="text-sm text-gray-300">{area.district}, {area.state}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Area</div>
                  <div className="text-sm text-gray-300">{area.area}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Survey Date</div>
                  <div className="text-sm text-gray-300">{area.surveyDate}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Surveyor</div>
                  <div className="text-sm text-gray-300">{area.surveyor}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-1">Coordinates</div>
                <div className="text-sm text-gray-300 font-mono">{area.coordinates}</div>
              </div>

              <div>
                <div className="text-xs text-gray-500 mb-1">Key Findings</div>
                <div className="text-sm text-gray-300">{area.findings}</div>
              </div>

              <div className="flex justify-end mt-4 space-x-2">
                <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-colors">
                  View Details
                </button>
                <button className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm hover:bg-emerald-500/30 transition-colors">
                  View on Map
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}