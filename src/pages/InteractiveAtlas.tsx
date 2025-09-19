import { useState } from 'react';
import { Map, Layers, Satellite, TreePine, Users, AlertTriangle, ZoomIn, ZoomOut, RotateCcw, Download } from 'lucide-react';

export default function InteractiveAtlas() {
  const [activeLayer, setActiveLayer] = useState('satellite');
  const [selectedState, setSelectedState] = useState('all');
  
  const layers = [
    { id: 'satellite', name: 'Satellite View', icon: Satellite, color: 'blue' },
    { id: 'forest', name: 'Forest Cover', icon: TreePine, color: 'emerald' },
    { id: 'claims', name: 'FRA Claims', icon: Users, color: 'amber' },
    { id: 'conflicts', name: 'Conflict Zones', icon: AlertTriangle, color: 'red' }
  ];

  const states = [
    { id: 'all', name: 'All States' },
    { id: 'mp', name: 'Madhya Pradesh' },
    { id: 'tripura', name: 'Tripura' },
    { id: 'odisha', name: 'Odisha' },
    { id: 'telangana', name: 'Telangana' }
  ];

  const mapData = [
    { id: 1, type: 'claim', lat: 23.2599, lng: 77.4126, title: 'Tribal Claim - Bhopal', status: 'approved' },
    { id: 2, type: 'forest', lat: 23.8103, lng: 91.2816, title: 'Forest Reserve - Agartala', status: 'protected' },
    { id: 3, type: 'conflict', lat: 20.9517, lng: 85.0985, title: 'Boundary Dispute - Bhubaneswar', status: 'pending' },
    { id: 4, type: 'claim', lat: 17.3850, lng: 78.4867, title: 'Community Rights - Hyderabad', status: 'processing' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 flex items-center">
            <Map className="h-8 w-8 mr-3 text-emerald-400" />
            Interactive WebGIS Atlas
          </h1>
          <p className="text-gray-400 text-lg">
            Explore FRA claims, forest boundaries, and wildlife zones across target states
          </p>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Layer Controls */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Layers className="h-5 w-5 mr-2 text-emerald-400" />
              Map Layers
            </h3>
            <div className="space-y-3">
              {layers.map((layer) => {
                const Icon = layer.icon;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      activeLayer === layer.id
                        ? `bg-${layer.color}-500/20 text-${layer.color}-400 border border-${layer.color}-500/30`
                        : 'text-gray-400 hover:text-white hover:bg-gray-700 border border-transparent'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{layer.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* State Filter */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">State Filter</h3>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
            >
              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* Map Tools */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Map Tools</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <ZoomIn className="h-5 w-5 text-gray-300" />
              </button>
              <button className="flex items-center justify-center p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <ZoomOut className="h-5 w-5 text-gray-300" />
              </button>
              <button className="flex items-center justify-center p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <RotateCcw className="h-5 w-5 text-gray-300" />
              </button>
              <button className="flex items-center justify-center p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <Download className="h-5 w-5 text-gray-300" />
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Legend</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Approved Claims</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Pending Claims</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Conflicts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Forest Areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Map */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-xl">
          <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Active Layer: {layers.find(l => l.id === activeLayer)?.name}
              </h3>
              <div className="text-sm text-gray-400">
                Showing: {states.find(s => s.id === selectedState)?.name}
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] bg-gradient-to-br from-gray-800 to-gray-900">
            {/* Simulated map interface */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-800/10">
              {/* Map data points */}
              {mapData.map((point) => (
                <div
                  key={point.id}
                  className={`absolute w-4 h-4 rounded-full animate-pulse cursor-pointer transform -translate-x-2 -translate-y-2 ${
                    point.status === 'approved' ? 'bg-emerald-400' :
                    point.status === 'pending' ? 'bg-amber-400' :
                    point.status === 'processing' ? 'bg-blue-400' : 'bg-red-400'
                  }`}
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`
                  }}
                  title={point.title}
                />
              ))}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-700 max-w-md">
                  <Map className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-4">WebGIS Integration</h4>
                  <p className="text-gray-400 mb-4">
                    Interactive mapping system displaying FRA claims, forest boundaries, and conflict zones
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <div className="text-emerald-400 font-semibold">1,247</div>
                      <div className="text-gray-400">Active Claims</div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <div className="text-blue-400 font-semibold">89.2%</div>
                      <div className="text-gray-400">Forest Cover</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Claims Summary</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Claims</span>
                <span className="text-white font-semibold">12,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Approved</span>
                <span className="text-emerald-400 font-semibold">8,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pending</span>
                <span className="text-amber-400 font-semibold">3,457</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Rejected</span>
                <span className="text-red-400 font-semibold">1,156</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Forest Coverage</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Area (sq km)</span>
                <span className="text-white font-semibold">45,678</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Protected</span>
                <span className="text-emerald-400 font-semibold">38,456</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Under Review</span>
                <span className="text-amber-400 font-semibold">5,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">At Risk</span>
                <span className="text-red-400 font-semibold">1,988</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Conflict Zones</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Active Conflicts</span>
                <span className="text-white font-semibold">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Resolved</span>
                <span className="text-emerald-400 font-semibold">89</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Under Mediation</span>
                <span className="text-amber-400 font-semibold">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Escalated</span>
                <span className="text-red-400 font-semibold">22</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}