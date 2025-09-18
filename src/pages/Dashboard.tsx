import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import StatsCard from '../components/StatsCard';
import MapView from '../components/MapView';
import AIInsights from '../components/AIInsights';
import QuickActions from '../components/QuickActions';
import RecentActivity from '../components/RecentActivity';
import NewClaimForm from '../components/NewClaimForm';
import AnalyticsModal from '../components/AnalyticsModal';
import SurveyAreasModal from '../components/SurveyAreasModal';
import { FileText, Users, TreePine, AlertTriangle, TrendingUp, Brain, Globe, X, CheckCircle, Clock, XCircle, Eye } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const isAdmin = user && user.role === 'admin';
  const [activeModal, setActiveModal] = React.useState<string | null>(null);
  const [showNewClaimForm, setShowNewClaimForm] = React.useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = React.useState(false);
  const [showSurveyAreasModal, setShowSurveyAreasModal] = React.useState(false);

  // Sample user claims data
  const userClaims = [
    {
      id: 'FRA-2024-U001',
      title: 'Individual Forest Rights - Tribal Land',
      area: '1.5 hectares',
      location: 'Bastar, Madhya Pradesh',
      status: 'approved',
      submittedDate: '2024-01-15',
      lastUpdated: '2024-02-20',
      approvedDate: '2024-02-20'
    },
    {
      id: 'FRA-2024-U002',
      title: 'Community Resource Rights',
      area: '0.8 hectares',
      location: 'Ganjam, Odisha',
      status: 'approved',
      submittedDate: '2024-01-28',
      lastUpdated: '2024-03-05',
      approvedDate: '2024-03-05'
    },
    {
      id: 'FRA-2024-U003',
      title: 'Habitat Rights Claim',
      area: '2.1 hectares',
      location: 'West Tripura, Tripura',
      status: 'under_review',
      submittedDate: '2024-02-10',
      lastUpdated: '2024-03-01'
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

  const getFilteredClaims = (filterStatus?: string) => {
    if (!filterStatus) return userClaims;
    return userClaims.filter(claim => claim.status === filterStatus);
  };

  const renderClaimsModal = (title: string, claims: typeof userClaims) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <button
            onClick={() => setActiveModal(null)}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[60vh]">
          {claims.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">No claims found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {claims.map((claim) => (
                <div key={claim.id} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">{claim.title}</h4>
                      <p className="text-sm text-gray-400">Claim ID: {claim.id}</p>
                    </div>
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(claim.status)}`}>
                      {getStatusIcon(claim.status)}
                      <span className="capitalize">{claim.status.replace('_', ' ')}</span>
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Location</div>
                      <div className="text-sm text-gray-300">{claim.location}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Area</div>
                      <div className="text-sm text-gray-300">{claim.area}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Submitted Date</div>
                      <div className="text-sm text-gray-300">{claim.submittedDate}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Last Updated: {claim.lastUpdated}</span>
                    {claim.approvedDate && (
                      <span>Approved: {claim.approvedDate}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const adminStats = [
    { title: t('stats.totalClaims'), value: "12,847", change: "+8.2%", icon: FileText, trend: "up" as const, color: "emerald" as const },
    { title: t('stats.activeStakeholders'), value: "2,341", change: "+12.5%", icon: Users, trend: "up" as const, color: "blue" as const },
    { title: t('stats.forestCoverage'), value: "84.2%", change: "+2.1%", icon: TreePine, trend: "up" as const, color: "amber" as const },
    { title: t('stats.pendingConflicts'), value: "156", change: "-15.3%", icon: AlertTriangle, trend: "down" as const, color: "red" as const }
  ];

  const userStats = [
    { title: t('stats.myClaims'), value: "3", change: "+1", icon: FileText, trend: "up" as const, color: "emerald" as const, onClick: () => setActiveModal('all-claims') },
    { title: t('stats.approvedClaims'), value: "2", change: "0", icon: CheckCircle, trend: "up" as const, color: "blue" as const, onClick: () => setActiveModal('approved-claims') },
    { title: t('stats.landArea'), value: "4.2", change: "+1.2", icon: TreePine, trend: "up" as const, color: "amber" as const },
    { title: t('stats.pendingReview'), value: "1", change: "0", icon: Clock, trend: "down" as const, color: "red" as const, onClick: () => setActiveModal('pending-claims') }
  ];

  const stats = isAdmin ? adminStats : userStats;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-emerald-900/20 to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              {isAdmin ? t('dashboard.adminTitle') : t('dashboard.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {isAdmin 
                ? t('dashboard.adminSubtitle')
                : t('dashboard.subtitle')
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                <Brain className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">AI Verification</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                <Globe className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">WebGIS Integration</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">Real-time Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} onClick={stat.onClick} className={stat.onClick ? 'cursor-pointer' : ''}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <MapView />
          </div>
          <div>
            <AIInsights />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QuickActions 
            onNewClaim={() => setShowNewClaimForm(true)}
            onSurveyAreas={() => setShowSurveyAreasModal(true)}
            onAnalytics={() => setShowAnalyticsModal(true)}
          />
          <RecentActivity />
        </div>
      </div>

      {/* Modals */}
      {activeModal === 'all-claims' && renderClaimsModal('My Claims', userClaims)}
      {activeModal === 'approved-claims' && renderClaimsModal('Approved Claims', getFilteredClaims('approved'))}
      {activeModal === 'pending-claims' && renderClaimsModal('Pending Review', getFilteredClaims('under_review'))}
      
      <NewClaimForm isOpen={showNewClaimForm} onClose={() => setShowNewClaimForm(false)} />
      <AnalyticsModal isOpen={showAnalyticsModal} onClose={() => setShowAnalyticsModal(false)} />
      <SurveyAreasModal isOpen={showSurveyAreasModal} onClose={() => setShowSurveyAreasModal(false)} />
    </div>
  );
}