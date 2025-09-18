import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    'header.title': 'FRA Atlas',
    'header.dashboard': 'Dashboard',
    'header.atlas': 'Interactive Atlas',
    'header.claims': 'Claims Portal',
    'header.ai': 'AI Analytics',
    'header.userPortal': 'User Portal',
    'header.adminPortal': 'Admin Portal',
    
    // Dashboard
    'dashboard.title': 'User Dashboard',
    'dashboard.adminTitle': 'Admin Dashboard',
    'dashboard.subtitle': 'Track your FRA claims and access forest rights information',
    'dashboard.adminSubtitle': 'Comprehensive monitoring and management of Forest Rights Act implementation',
    
    // Stats
    'stats.totalClaims': 'Total FRA Claims',
    'stats.myClaims': 'My Claims',
    'stats.approvedClaims': 'Approved Claims',
    'stats.activeStakeholders': 'Active Stakeholders',
    'stats.forestCoverage': 'Forest Coverage',
    'stats.pendingConflicts': 'Pending Conflicts',
    'stats.landArea': 'Land Area (Ha)',
    'stats.pendingReview': 'Pending Review',
    
    // Quick Actions
    'quickActions.title': 'Quick Actions',
    'quickActions.newClaim': 'New Claim',
    'quickActions.uploadData': 'Upload Data',
    'quickActions.manageUsers': 'Manage Users',
    'quickActions.surveyAreas': 'Survey Areas',
    'quickActions.analytics': 'Analytics',
    
    // Language Selection
    'language.title': 'Language Selection',
    'language.select': 'Select Language',
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.odia': 'ଓଡ଼ିଆ',
    'language.bengali': 'বাংলা',
    'language.telugu': 'తెలుగు',
    
    // Common
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    'common.close': 'Close'
  },
  hi: {
    // Header
    'header.title': 'एफआरए एटलस',
    'header.dashboard': 'डैशबोर्ड',
    'header.atlas': 'इंटरैक्टिव एटलस',
    'header.claims': 'दावा पोर्टल',
    'header.ai': 'एआई एनालिटिक्स',
    'header.userPortal': 'उपयोगकर्ता पोर्टल',
    'header.adminPortal': 'प्रशासक पोर्टल',
    
    // Dashboard
    'dashboard.title': 'उपयोगकर्ता डैशबोर्ड',
    'dashboard.adminTitle': 'प्रशासक डैशबोर्ड',
    'dashboard.subtitle': 'अपने एफआरए दावों को ट्रैक करें और वन अधिकार जानकारी तक पहुंचें',
    'dashboard.adminSubtitle': 'वन अधिकार अधिनियम कार्यान्वयन की व्यापक निगरानी और प्रबंधन',
    
    // Stats
    'stats.totalClaims': 'कुल एफआरए दावे',
    'stats.myClaims': 'मेरे दावे',
    'stats.approvedClaims': 'स्वीकृत दावे',
    'stats.activeStakeholders': 'सक्रिय हितधारक',
    'stats.forestCoverage': 'वन कवरेज',
    'stats.pendingConflicts': 'लंबित संघर्ष',
    'stats.landArea': 'भूमि क्षेत्र (हेक्टेयर)',
    'stats.pendingReview': 'समीक्षा लंबित',
    
    // Quick Actions
    'quickActions.title': 'त्वरित कार्य',
    'quickActions.newClaim': 'नया दावा',
    'quickActions.uploadData': 'डेटा अपलोड',
    'quickActions.manageUsers': 'उपयोगकर्ता प्रबंधन',
    'quickActions.surveyAreas': 'सर्वेक्षण क्षेत्र',
    'quickActions.analytics': 'एनालिटिक्स',
    
    // Language Selection
    'language.title': 'भाषा चयन',
    'language.select': 'भाषा चुनें',
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.odia': 'ଓଡ଼ିଆ',
    'language.bengali': 'বাংলা',
    'language.telugu': 'తెలుగు',
    
    // Common
    'common.submit': 'जमा करें',
    'common.cancel': 'रद्द करें',
    'common.save': 'सहेजें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.view': 'देखें',
    'common.close': 'बंद करें'
  },
  or: {
    // Header
    'header.title': 'ଏଫଆରଏ ଆଟଲାସ',
    'header.dashboard': 'ଡ୍ୟାସବୋର୍ଡ',
    'header.atlas': 'ଇଣ୍ଟରାକ୍ଟିଭ ଆଟଲାସ',
    'header.claims': 'ଦାବି ପୋର୍ଟାଲ',
    'header.ai': 'ଏଆଇ ଆନାଲିଟିକ୍ସ',
    'header.userPortal': 'ଉପଯୋଗକର୍ତ୍ତା ପୋର୍ଟାଲ',
    'header.adminPortal': 'ପ୍ରଶାସକ ପୋର୍ଟାଲ',
    
    // Dashboard
    'dashboard.title': 'ଉପଯୋଗକର୍ତ୍ତା ଡ୍ୟାସବୋର୍ଡ',
    'dashboard.adminTitle': 'ପ୍ରଶାସକ ଡ୍ୟାସବୋର୍ଡ',
    'dashboard.subtitle': 'ଆପଣଙ୍କ ଏଫଆରଏ ଦାବିଗୁଡ଼ିକୁ ଟ୍ରାକ କରନ୍ତୁ ଏବଂ ବନ ଅଧିକାର ସୂଚନା ପ୍ରବେଶ କରନ୍ତୁ',
    'dashboard.adminSubtitle': 'ବନ ଅଧିକାର ଅଧିନିୟମ କାର୍ଯ୍ୟକାରିତାର ବ୍ୟାପକ ନିରୀକ୍ଷଣ ଏବଂ ପରିଚାଳନା',
    
    // Stats
    'stats.totalClaims': 'ମୋଟ ଏଫଆରଏ ଦାବି',
    'stats.myClaims': 'ମୋର ଦାବି',
    'stats.approvedClaims': 'ଅନୁମୋଦିତ ଦାବି',
    'stats.activeStakeholders': 'ସକ୍ରିୟ ହିତାଧିକାରୀ',
    'stats.forestCoverage': 'ବନ କଭରେଜ',
    'stats.pendingConflicts': 'ବିଚାରାଧୀନ ବିବାଦ',
    'stats.landArea': 'ଜମି କ୍ଷେତ୍ର (ହେକ୍ଟର)',
    'stats.pendingReview': 'ସମୀକ୍ଷା ବିଚାରାଧୀନ',
    
    // Quick Actions
    'quickActions.title': 'ଦ୍ରୁତ କାର୍ଯ୍ୟ',
    'quickActions.newClaim': 'ନୂତନ ଦାବି',
    'quickActions.uploadData': 'ଡାଟା ଅପଲୋଡ',
    'quickActions.manageUsers': 'ଉପଯୋଗକର୍ତ୍ତା ପରିଚାଳନା',
    'quickActions.surveyAreas': 'ସର୍ଭେ କ୍ଷେତ୍ର',
    'quickActions.analytics': 'ଆନାଲିଟିକ୍ସ',
    
    // Language Selection
    'language.title': 'ଭାଷା ଚୟନ',
    'language.select': 'ଭାଷା ବାଛନ୍ତୁ',
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.odia': 'ଓଡ଼ିଆ',
    'language.bengali': 'বাংলা',
    'language.telugu': 'తెలుగు',
    
    // Common
    'common.submit': 'ଦାଖଲ କରନ୍ତୁ',
    'common.cancel': 'ବାତିଲ କରନ୍ତୁ',
    'common.save': 'ସଞ୍ଚୟ କରନ୍ତୁ',
    'common.edit': 'ସମ୍ପାଦନା',
    'common.delete': 'ବିଲୋପ',
    'common.view': 'ଦେଖନ୍ତୁ',
    'common.close': 'ବନ୍ଦ କରନ୍ତୁ'
  },
  bn: {
    // Header
    'header.title': 'এফআরএ অ্যাটলাস',
    'header.dashboard': 'ড্যাশবোর্ড',
    'header.atlas': 'ইন্টারঅ্যাক্টিভ অ্যাটলাস',
    'header.claims': 'দাবি পোর্টাল',
    'header.ai': 'এআই অ্যানালিটিক্স',
    'header.userPortal': 'ব্যবহারকারী পোর্টাল',
    'header.adminPortal': 'প্রশাসক পোর্টাল',
    
    // Dashboard
    'dashboard.title': 'ব্যবহারকারী ড্যাশবোর্ড',
    'dashboard.adminTitle': 'প্রশাসক ড্যাশবোর্ড',
    'dashboard.subtitle': 'আপনার এফআরএ দাবিগুলি ট্র্যাক করুন এবং বন অধিকার তথ্য অ্যাক্সেস করুন',
    'dashboard.adminSubtitle': 'বন অধিকার আইন বাস্তবায়নের ব্যাপক পর্যবেক্ষণ এবং ব্যবস্থাপনা',
    
    // Stats
    'stats.totalClaims': 'মোট এফআরএ দাবি',
    'stats.myClaims': 'আমার দাবি',
    'stats.approvedClaims': 'অনুমোদিত দাবি',
    'stats.activeStakeholders': 'সক্রিয় স্টেকহোল্ডার',
    'stats.forestCoverage': 'বন কভারেজ',
    'stats.pendingConflicts': 'মুলতুবি দ্বন্দ্ব',
    'stats.landArea': 'জমির এলাকা (হেক্টর)',
    'stats.pendingReview': 'পর্যালোচনা মুলতুবি',
    
    // Quick Actions
    'quickActions.title': 'দ্রুত কর্ম',
    'quickActions.newClaim': 'নতুন দাবি',
    'quickActions.uploadData': 'ডেটা আপলোড',
    'quickActions.manageUsers': 'ব্যবহারকারী ব্যবস্থাপনা',
    'quickActions.surveyAreas': 'জরিপ এলাকা',
    'quickActions.analytics': 'অ্যানালিটিক্স',
    
    // Language Selection
    'language.title': 'ভাষা নির্বাচন',
    'language.select': 'ভাষা নির্বাচন করুন',
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.odia': 'ଓଡ଼ିଆ',
    'language.bengali': 'বাংলা',
    'language.telugu': 'తెలుగు',
    
    // Common
    'common.submit': 'জমা দিন',
    'common.cancel': 'বাতিল',
    'common.save': 'সংরক্ষণ',
    'common.edit': 'সম্পাদনা',
    'common.delete': 'মুছুন',
    'common.view': 'দেখুন',
    'common.close': 'বন্ধ করুন'
  },
  te: {
    // Header
    'header.title': 'ఎఫ్ఆర్ఎ అట్లాస్',
    'header.dashboard': 'డ్యాష్‌బోర్డ్',
    'header.atlas': 'ఇంటరాక్టివ్ అట్లాస్',
    'header.claims': 'క్లెయిమ్స్ పోర్టల్',
    'header.ai': 'ఎఐ అనలిటిక్స్',
    'header.userPortal': 'వినియోగదారు పోర్టల్',
    'header.adminPortal': 'అడ్మిన్ పోర్టల్',
    
    // Dashboard
    'dashboard.title': 'వినియోగదారు డ్యాష్‌బోర్డ్',
    'dashboard.adminTitle': 'అడ్మిన్ డ్యాష్‌బోర్డ్',
    'dashboard.subtitle': 'మీ ఎఫ్ఆర్ఎ క్లెయిమ్‌లను ట్రాక్ చేయండి మరియు అటవీ హక్కుల సమాచారాన్ని యాక్సెస్ చేయండి',
    'dashboard.adminSubtitle': 'అటవీ హక్కుల చట్టం అమలు యొక్క సమగ్ర పర్యవేక్షణ మరియు నిర్వహణ',
    
    // Stats
    'stats.totalClaims': 'మొత్తం ఎఫ్ఆర్ఎ క్లెయిమ్‌లు',
    'stats.myClaims': 'నా క్లెయిమ్‌లు',
    'stats.approvedClaims': 'ఆమోదించబడిన క్లెయిమ్‌లు',
    'stats.activeStakeholders': 'క్రియాశీల వాటాదారులు',
    'stats.forestCoverage': 'అటవీ కవరేజ్',
    'stats.pendingConflicts': 'పెండింగ్ వివాదాలు',
    'stats.landArea': 'భూమి వైశాల్యం (హెక్టార్లు)',
    'stats.pendingReview': 'సమీక్ష పెండింగ్',
    
    // Quick Actions
    'quickActions.title': 'త్వరిత చర్యలు',
    'quickActions.newClaim': 'కొత్త క్లెయిమ్',
    'quickActions.uploadData': 'డేటా అప్‌లోడ్',
    'quickActions.manageUsers': 'వినియోగదారుల నిర్వహణ',
    'quickActions.surveyAreas': 'సర్వే ప్రాంతాలు',
    'quickActions.analytics': 'అనలిటిక్స్',
    
    // Language Selection
    'language.title': 'భాష ఎంపిక',
    'language.select': 'భాషను ఎంచుకోండి',
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.odia': 'ଓଡ଼ିଆ',
    'language.bengali': 'বাংলা',
    'language.telugu': 'తెలుగు',
    
    // Common
    'common.submit': 'సమర్పించండి',
    'common.cancel': 'రద్దు చేయండి',
    'common.save': 'సేవ్ చేయండి',
    'common.edit': 'సవరించండి',
    'common.delete': 'తొలగించండి',
    'common.view': 'చూడండి',
    'common.close': 'మూసివేయండి'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('fra_language');
    if (savedLanguage && translations[savedLanguage as keyof typeof translations]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('fra_language', language);
  };

  const t = (key: string): string => {
    const languageTranslations = translations[currentLanguage as keyof typeof translations];
    return languageTranslations?.[key as keyof typeof languageTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};