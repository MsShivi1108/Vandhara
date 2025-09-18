import React, { useState } from 'react';
import { Layers, Satellite, TreePine, Users, AlertTriangle } from 'lucide-react';

export default function MapView() {
  const [activeLayer, setActiveLayer] = useState('satellite');
  
  const layers = [
    { id: 'satellite', name: 'Satellite', icon: Satellite, color: 'blue' },
    { id: 'forest', name: 'Forest Cover', icon: TreePine, color: 'emerald' },
    { id: 'claims', name: 'FRA Claims', icon: Users, color: 'amber' },
    { id: 'conflicts', name: 'Conflicts', icon: AlertTriangle, color: 'red' }
  ];

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-xl">
      <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Layers className="h-5 w-5 mr-2 text-emerald-400" />
            Interactive WebGIS Atlas
          </h3>
          <div className="flex space-x-2">
            {layers.map((layer) => {
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`px-3 py-1 rounded-lg flex items-center space-x-1 text-sm transition-all duration-200 ${
                    activeLayer === layer.id
                      ? `bg-${layer.color}-500/20 text-${layer.color}-400 border border-${layer.color}-500/30`
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{layer.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900">
        {/* Simulated map interface */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-800/10">
          <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">Active Layer</div>
            <div className="text-sm font-medium text-white capitalize">{activeLayer}</div>
          </div>
          
          {/* Simulated data points */}
          <div className="absolute top-20 left-20 w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute top-32 right-24 w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute bottom-24 left-32 w-3 h-3 bg-red-400 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute bottom-32 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-700">
              <Layers className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">WebGIS Integration</h4>
              <p className="text-gray-400 text-sm max-w-md">
                Interactive mapping system for FRA claims, forest boundaries, and wildlife zones across MP, Tripura, Odisha, and Telangana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}