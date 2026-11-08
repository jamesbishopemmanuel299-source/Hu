import React, { createContext, useContext, useState, useEffect } from 'react';
import { CompanyInfo, ServiceItem, ProjectItem } from '../types';
import { DEFAULT_COMPANY, PRESET_COMPANIES } from '../data/defaultContent';

interface ToastState {
  id: string;
  message: string;
  type?: 'success' | 'info';
}

interface BrandContextType {
  company: CompanyInfo;
  updateCompany: (updates: Partial<CompanyInfo>) => void;
  setPreset: (presetKey: string) => void;
  resetToDefault: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  // Modals & Drawers
  isConsultationOpen: boolean;
  openConsultation: (initialService?: string) => void;
  closeConsultation: () => void;
  consultationDefaultService: string;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  selectedService: ServiceItem | null;
  openServiceDetail: (service: ServiceItem) => void;
  closeServiceDetail: () => void;
  selectedProject: ProjectItem | null;
  openProjectDetail: (project: ProjectItem) => void;
  closeProjectDetail: () => void;
  // Toast notifications
  toasts: ToastState[];
  showToast: (message: string, type?: 'success' | 'info') => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [company, setCompany] = useState<CompanyInfo>(() => {
    try {
      const saved = localStorage.getItem('aethelgard_company');
      return saved ? JSON.parse(saved) : DEFAULT_COMPANY;
    } catch {
      return DEFAULT_COMPANY;
    }
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('aethelgard_theme');
      return saved ? saved === 'dark' : true; // Default luxury dark
    } catch {
      return true;
    }
  });

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationDefaultService, setConsultationDefaultService] = useState('');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toasts, setToasts] = useState<ToastState[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('aethelgard_company', JSON.stringify(company));
    } catch (e) {
      console.warn('Could not save company to localStorage', e);
    }
  }, [company]);

  useEffect(() => {
    try {
      localStorage.setItem('aethelgard_theme', isDark ? 'dark' : 'light');
    } catch (e) {
      console.warn('Could not save theme to localStorage', e);
    }

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const updateCompany = (updates: Partial<CompanyInfo>) => {
    setCompany((prev) => ({ ...prev, ...updates }));
    showToast('Company information updated live', 'info');
  };

  const setPreset = (presetKey: string) => {
    if (PRESET_COMPANIES[presetKey]) {
      setCompany(PRESET_COMPANIES[presetKey]);
      showToast(`Applied preset: ${PRESET_COMPANIES[presetKey].name}`, 'success');
    }
  };

  const resetToDefault = () => {
    setCompany(DEFAULT_COMPANY);
    showToast('Reset to default brand identity', 'info');
  };

  const openConsultation = (initialService?: string) => {
    setConsultationDefaultService(initialService || '');
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  const openServiceDetail = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
  };

  const openProjectDetail = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  return (
    <BrandContext.Provider
      value={{
        company,
        updateCompany,
        setPreset,
        resetToDefault,
        isDark,
        toggleTheme,
        isConsultationOpen,
        openConsultation,
        closeConsultation,
        consultationDefaultService,
        isCustomizerOpen,
        setIsCustomizerOpen,
        selectedService,
        openServiceDetail,
        closeServiceDetail,
        selectedProject,
        openProjectDetail,
        closeProjectDetail,
        toasts,
        showToast,
      }}
    >
      {children}
      {/* Toast container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg bg-neutral-900 text-neutral-100 border border-neutral-700/80 shadow-2xl text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
