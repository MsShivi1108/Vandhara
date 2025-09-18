import React, { useState } from 'react';
import NewClaimForm from '../components/NewClaimForm';
import { FileText, Plus, Search, Filter, Download, Eye, Edit, Trash2, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function ClaimsPortal() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showNewClaimForm, setShowNewClaimForm] = useState(false);

  const claims = [
    {
      id: 'FRA-2024-001',
      title: 'Community Forest Rights - Kankavali Village',
      applicant: 'Tribal Council Kankavali',
      state: 'Odisha',
      district: 'Ganjam',
      area: '2.5 hectares',
      status: 'approved',
      submittedDate: '2024-01-15',
      lastUpdated: '2024-02-20'
    },
    {
      id: 'FRA-2024-002',
      title: 'Individual Forest Rights - Bastar Region',
      applicant: 'Ram Singh',
      state: 'Madhya Pradesh',
      district: 'Bastar',
      area: '1.2 hectares',
      status: 'pending',
      submittedDate: '2024-02-10',
      lastUpdated: '2024-02-25'
    },
    {
      id: 'FRA-2024-003',
      title: 'Community Resource Rights - Agartala',
      applicant: 'Tripura Tribal Association',
      state: 'Tripura',
      district: 'West Tripura',
      area: '5.8 hectares',
      status: 'under_review',
      submittedDate: '2024-01-28',
      lastUpdated: '2024-03-01'
    },
    {
      id: 'FRA-2024-004',
      title: 'Habitat Rights - Hyderabad Outskirts',
      applicant: 'Gond Community',
      state: 'Telangana',
      district: 'Rangareddy',
      area: '3.7 hectares',
      status: 'rejected',
      submittedDate: '2024-01-05',
      lastUpdated: '2024-02-15'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4 text-emerald-400" />;
      case 'pending': return <Clock className="h-4 w-4 text-amber-400" />;
      case 'under_review': return <Eye className="h-4 w-4 text-blue-400" />;
      case 'rejected': return <XCircle className="h-4 w-4 text-red-400" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'pending': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'under_review': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'rejected': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const filteredClaims = claims.filter(claim => {
    const matchesSearch = claim.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || claim.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 flex items-center">
            <FileText className="h-8 w-8 mr-3 text-emerald-400" />
            FRA Claims Portal
          </h1>
          <p className="text-gray-400 text-lg">
            Manage and track Forest Rights Act claims across all target states
          </p>
        </div>

        {/* Controls */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search claims..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 appearance-none"
                >
                  <option value="all">All Status</option>
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                  <option value="under_review">Under Review</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center space-x-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
              <button 
                onClick={() => setShowNewClaimForm(true)}
                className="flex items-center space-x-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>New Claim</span>
              </button>
            </div>
          </div>
        </div>

        {/* Claims Table */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Claim ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Applicant</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Area</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Last Updated</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredClaims.map((claim) => (
                  <tr key={claim.id} className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-white">{claim.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{claim.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{claim.applicant}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {claim.district}, {claim.state}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{claim.area}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(claim.status)}`}>
                        {getStatusIcon(claim.status)}
                        <span className="capitalize">{claim.status.replace('_', ' ')}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{claim.lastUpdated}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 rounded-lg transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20 rounded-lg transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Total Claims</h4>
              <FileText className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12,847</div>
            <div className="text-sm text-emerald-400">+8.2% from last month</div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Approved</h4>
              <CheckCircle className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">8,234</div>
            <div className="text-sm text-gray-400">64.1% approval rate</div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Pending</h4>
              <Clock className="h-6 w-6 text-amber-400" />
            </div>
            <div className="text-3xl font-bold text-amber-400 mb-2">3,457</div>
            <div className="text-sm text-gray-400">Avg. 45 days processing</div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Under Review</h4>
              <Eye className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-blue-400 mb-2">1,156</div>
            <div className="text-sm text-gray-400">AI verification in progress</div>
          </div>
        </div>
      </div>

      {/* New Claim Modal */}
      <NewClaimForm isOpen={showNewClaimForm} onClose={() => setShowNewClaimForm(false)} />
    </div>
  );
}