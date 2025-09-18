import React, { useState } from 'react';
import { User, Edit, Camera, MapPin, Calendar, Shield, Users as UsersIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function UserProfile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    age: '35',
    aadharNumber: '1234-5678-9012',
    specialStatus: 'Scheduled Tribe',
    community: 'Gond',
    state: 'Madhya Pradesh',
    district: 'Bastar',
    village: 'Kankavali',
    phone: '+91 9876543210',
    email: user?.email || 'john.doe@example.com'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data logic here
  };

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 flex items-center">
            <User className="h-8 w-8 mr-3 text-emerald-400" />
            User Profile
          </h1>
          <p className="text-gray-400 text-lg">
            Manage your personal information and account settings
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-8">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                  <User className="h-12 w-12 text-gray-600" />
                </div>
                <button className="absolute bottom-0 right-0 bg-emerald-500 hover:bg-emerald-600 p-2 rounded-full text-white transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">{profileData.name}</h2>
                <p className="text-emerald-100 mb-1">{profileData.community} Community</p>
                <p className="text-emerald-200 text-sm flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {profileData.village}, {profileData.district}, {profileData.state}
                </p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Edit className="h-4 w-4" />
                <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <User className="h-5 w-5 mr-2 text-emerald-400" />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      />
                    ) : (
                      <div className="text-white bg-gray-900/50 px-4 py-3 rounded-lg">{profileData.name}</div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Age</label>
                    {isEditing ? (
                      <input
                        type="number"
                        value={profileData.age}
                        onChange={(e) => setProfileData({...profileData, age: e.target.value})}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      />
                    ) : (
                      <div className="text-white bg-gray-900/50 px-4 py-3 rounded-lg">{profileData.age} years</div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Aadhar Number</label>
                    <div className="text-white bg-gray-900/50 px-4 py-3 rounded-lg font-mono">
                      {profileData.aadharNumber}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      />
                    ) : (
                      <div className="text-white bg-gray-900/50 px-4 py-3 rounded-lg">{profileData.phone}</div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      />
                    ) : (
                      <div className="text-white bg-gray-900/50 px-4 py-3 rounded-lg">{profileData.email}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Community & Location */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <UsersIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Community & Location
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Special Status</label>
                    {isEditing ? (
                      <select
                        value={profileData.specialStatus}
                        onChange={(e) => setProfileData({...profileData, specialStatus: e.target.value})}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      >
                        <option value="Scheduled Tribe">Scheduled Tribe</option>
                        <option value="Scheduled Caste">Scheduled Caste</option>
                        <option value="Other Backward Class">Other Backward Class</option>
                        <option value="General">General</option>
                      </select>
                    ) : (
                      <div className="text-white bg-gray-900/50 px-4 py-3 rounded-lg flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-amber-400" />
                        {profileData.specialStatus}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Community</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.community}
                        onChange={(e) => setProfileData({...profileData, community: e.target.value})}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      />
                    ) : (
                      <div className="text-white bg-gray-900/50 px-4 py-3 rounded-lg">{profileData.community}</div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">State</label>
                    {isEditing ? (
                      <select
                        value={profileData.state}
                        onChange={(e) => setProfileData({...profileData, state: e.target.value})}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      >
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Telangana">Telangana</option>
                      </select>
                    ) : (
                      <div className="text-white bg-gray-900/50 px-4 py-3 rounded-lg">{profileData.state}</div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">District</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.district}
                        onChange={(e) => setProfileData({...profileData, district: e.target.value})}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      />
                    ) : (
                      <div className="text-white bg-gray-900/50 px-4 py-3 rounded-lg">{profileData.district}</div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Village</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.village}
                        onChange={(e) => setProfileData({...profileData, village: e.target.value})}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      />
                    ) : (
                      <div className="text-white bg-gray-900/50 px-4 py-3 rounded-lg">{profileData.village}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSave}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Account Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Account Status</h4>
              <Shield className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-emerald-400 mb-2">Verified</div>
            <div className="text-sm text-gray-400">Account verified with Aadhar</div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Member Since</h4>
              <Calendar className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-2">2024</div>
            <div className="text-sm text-gray-400">Active for 3 months</div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Claims Submitted</h4>
              <User className="h-6 w-6 text-amber-400" />
            </div>
            <div className="text-2xl font-bold text-amber-400 mb-2">3</div>
            <div className="text-sm text-gray-400">2 approved, 1 pending</div>
          </div>
        </div>
      </div>
    </div>
  );
}