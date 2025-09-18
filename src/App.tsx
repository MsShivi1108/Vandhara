import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import AuthPage from './components/auth/AuthPage';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import InteractiveAtlas from './pages/InteractiveAtlas';
import ClaimsPortal from './pages/ClaimsPortal';
import AIAnalytics from './pages/AIAnalytics';
import UserProfile from './components/UserProfile';

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
          <div className="text-white">Loading FRA Atlas...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'atlas':
        return <InteractiveAtlas />;
      case 'claims':
        return <ClaimsPortal />;
      case 'ai':
        return <AIAnalytics />;
      case 'profile':
        return <UserProfile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">FRA Atlas</h3>
              <p className="text-gray-400 text-sm">
                Empowering transparent forest rights management through AI and WebGIS technology.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">States Coverage</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Madhya Pradesh</li>
                <li>Tripura</li>
                <li>Odisha</li>
                <li>Telangana</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Claim Verification</li>
                <li>Conflict Detection</li>
                <li>Policy Formulation</li>
                <li>Stakeholder Portal</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Technology</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>AI Analytics</li>
                <li>WebGIS Integration</li>
                <li>Satellite Imagery</li>
                <li>Real-time Monitoring</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2025 FRA Atlas. Developed for transparent forest rights management.
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;