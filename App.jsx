import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Calendar, 
  Users, 
  Settings, 
  Play, 
  CheckCircle, 
  MessageSquare,
  TrendingUp,
  MapPin,
  User,
  Award,
  LogOut,
  Smartphone,
  Activity,
  Zap,
  Flame,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

/**
 * LS Coaching App - Brand Visual Update
 * Culori: #f4a32e (Accent), #ffffff (Text), #737373 (Muted), #2c2b2b (Background)
 * Autor: Lică Sinc
 */

const App = () => {
  const [appState, setAppState] = useState('splash'); // splash, onboarding, home, profile
  const [onboardingStep, setOnboardingStep] = useState(0);

  const logoPath = "./assets/logo.png"; 

  const userData = {
    name: "Lică Sinc",
    initials: "LS",
    role: "Președinte Asociația Sebeșul Aleargă",
    location: "Sebeș, Alba",
    stats: { age: 37, height: 186, weight: 75, restingHR: 50 },
    personalBests: [
      { distance: "5K", time: "19:45" },
      { distance: "10K", time: "41:20" }
    ],
    medals: [
      { id: 1, name: "Fondator", icon: "🏆", color: "bg-[#f4a32e]/10 text-[#f4a32e]" },
      { id: 2, name: "Zlatna Finisher", icon: "⛰️", color: "bg-[#737373]/20 text-[#ffffff]" }
    ]
  };

  useEffect(() => {
    if (appState === 'splash') {
      const timer = setTimeout(() => {
        setAppState('onboarding');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  const BrandLogo = ({ size = "h-12 w-12", animate = false }) => (
    <div className={`${size} rounded-[1.5rem] bg-[#f4a32e] border-4 border-[#2c2b2b] flex items-center justify-center overflow-hidden shadow-xl ${animate ? 'animate-pulse' : ''}`}>
      <img 
        src={logoPath} 
        alt="LS Coaching Logo" 
        className="h-full w-full object-cover"
        onError={(e) => {
          e.target.style.display = 'none'; 
          e.target.parentElement.innerHTML = `<span class="text-[#2c2b2b] font-black text-2xl">${userData.initials}</span>`;
        }}
      />
    </div>
  );

  // --- ECRAN START (SPLASH) ---
  if (appState === 'splash') {
    return (
      <div className="h-screen w-full bg-[#2c2b2b] flex flex-col items-center justify-center space-y-6">
        <BrandLogo size="h-32 w-32" animate={true} />
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black tracking-tighter text-[#ffffff] uppercase italic">LS Coaching</h1>
          <p className="text-[#f4a32e] text-xs font-bold tracking-[0.4em] uppercase">Science of Endurance</p>
        </div>
        <div className="absolute bottom-12">
          <div className="flex space-x-2">
            <div className="h-1.5 w-1.5 bg-[#f4a32e] rounded-full animate-ping"></div>
            <div className="h-1.5 w-1.5 bg-[#737373] rounded-full"></div>
            <div className="h-1.5 w-1.5 bg-[#737373] rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  // --- ECRAN ONBOARDING ---
  if (appState === 'onboarding') {
    const slides = [
      {
        title: "ANTRENAMENT ȘTIINȚIFIC",
        desc: "Metodologia UESCA adaptată nevoilor tale de sănătate sau performanță.",
        icon: <Zap className="w-12 h-12 text-[#f4a32e]" />
      },
      {
        title: "COMUNITATE LOCALĂ",
        desc: "Acces direct la evenimentele asociației Sebeșul Aleargă din Alba.",
        icon: <Users className="w-12 h-12 text-[#f4a32e]" />
      },
      {
        title: "FEEDBACK DIGITAL",
        desc: "Monitorizare puls Karvonen și feedback de la propriul tău AI Coach.",
        icon: <ShieldCheck className="w-12 h-12 text-[#f4a32e]" />
      }
    ];

    return (
      <div className="h-screen w-full bg-[#2c2b2b] p-8 flex flex-col items-center justify-between">
        <div className="w-full flex justify-end">
          <button onClick={() => setAppState('home')} className="text-[#737373] font-bold text-sm uppercase tracking-widest">Sari peste</button>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-8 animate-in slide-in-from-bottom duration-500">
          <div className="p-10 bg-[#2c2b2b] rounded-[2.5rem] border-2 border-[#f4a32e]/20 shadow-[0_20px_50px_rgba(244,163,46,0.1)]">
            {slides[onboardingStep].icon}
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black leading-tight text-[#ffffff] uppercase italic tracking-tighter">{slides[onboardingStep].title}</h2>
            <p className="text-[#737373] text-lg font-medium leading-relaxed px-4">{slides[onboardingStep].desc}</p>
          </div>
        </div>

        <div className="w-full space-y-8">
          <div className="flex justify-center space-x-3">
            {slides.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-500 ${onboardingStep === i ? 'w-10 bg-[#f4a32e]' : 'w-4 bg-[#737373]'}`} />
            ))}
          </div>
          <button 
            onClick={() => {
              if (onboardingStep < slides.length - 1) setOnboardingStep(onboardingStep + 1);
              else setAppState('home');
            }}
            className="w-full bg-[#f4a32e] py-5 rounded-2xl font-black text-[#2c2b2b] text-lg shadow-xl shadow-[#f4a32e]/10 flex items-center justify-center space-x-2 active:scale-95 transition-transform uppercase tracking-tighter"
          >
            <span>{onboardingStep < slides.length - 1 ? 'Continuă' : 'Să începem!'}</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  // --- COMPONENTE INTERNE (DASHBOARD & PROFIL) ---
  const Dashboard = () => (
    <div className="space-y-6 pb-24 animate-in fade-in duration-700">
      <header className="flex justify-between items-center bg-[#2c2b2b] p-6 border-b border-[#737373]/10">
        <div className="flex items-center space-x-3">
          <BrandLogo size="h-10 w-10" />
          <div>
            <p className="text-[#f4a32e] text-[9px] uppercase tracking-[0.3em] font-black italic">LS Coaching</p>
            <h1 className="text-xl font-black text-[#ffffff] tracking-tighter">ANTRENAMENT</h1>
          </div>
        </div>
        <button onClick={() => setAppState('profile')} className="p-1">
          <div className="h-10 w-10 rounded-xl border-2 border-[#737373]/30 flex items-center justify-center text-[10px] font-black text-[#ffffff] uppercase tracking-tighter">
            {userData.initials}
          </div>
        </button>
      </header>

      <main className="p-6 space-y-6">
        {/* Antrenament Card */}
        <section className="bg-[#f4a32e] p-7 rounded-[2rem] shadow-2xl relative overflow-hidden group">
          <div className="relative z-10 text-[#2c2b2b]">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-[#2c2b2b]/10 text-[#2c2b2b] text-[9px] px-2 py-1 rounded-md font-bold uppercase tracking-widest border border-[#2c2b2b]/20">Program UESCA</span>
            </div>
            <h2 className="text-3xl font-black leading-none mb-4 italic uppercase tracking-tighter">Baza Aerobă<br/>Zona 2</h2>
            <div className="flex space-x-4 text-[10px] font-black mb-6 uppercase opacity-80">
              <span className="flex items-center"><Calendar size={14} className="mr-1" /> 35 MIN</span>
              <span className="flex items-center"><Zap size={14} className="mr-1" /> 131-144 BPM</span>
            </div>
            <button className="bg-[#2c2b2b] text-[#ffffff] w-full py-4 rounded-xl font-black flex items-center justify-center space-x-2 active:scale-95 transition-transform uppercase text-sm tracking-widest">
              <Play size={18} fill="currentColor" />
              <span>Start antrenament</span>
            </button>
          </div>
          <Activity className="absolute right-[-40px] top-[-40px] text-[#2c2b2b]/5 w-72 h-72 -rotate-12" />
        </section>

        {/* Statistici */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#2c2b2b] p-5 rounded-3xl border border-[#737373]/20">
             <div className="flex items-center text-[#f4a32e] mb-2 font-black text-[9px] uppercase tracking-widest">
               <Heart size={14} className="mr-1"/> REPAUS
             </div>
             <p className="text-3xl font-black text-[#ffffff]">{userData.stats.restingHR} <span className="text-xs font-medium text-[#737373]">BPM</span></p>
          </div>
          <div className="bg-[#2c2b2b] p-5 rounded-3xl border border-[#737373]/20">
             <div className="flex items-center text-[#f4a32e] mb-2 font-black text-[9px] uppercase tracking-widest">
               <Flame size={14} className="mr-1"/> STREAK
             </div>
             <p className="text-3xl font-black text-[#ffffff]">5 <span className="text-xs font-medium text-[#737373]">ZILE</span></p>
          </div>
        </div>

        {/* AI Insight */}
        <section className="bg-[#737373]/5 border border-[#737373]/10 p-5 rounded-[2rem] flex items-start space-x-4">
          <div className="bg-[#f4a32e]/10 p-3 rounded-xl text-[#f4a32e]">
            <MessageSquare size={20} />
          </div>
          <div>
            <h4 className="text-[10px] font-black text-[#737373] uppercase tracking-[0.2em] mb-1">LS AI Insights</h4>
            <p className="text-sm text-[#ffffff] leading-relaxed font-medium">
              Recuperarea de ieri a fost optimă. Astăzi te poți concentra pe tehnică în Zona 2.
            </p>
          </div>
        </section>
      </main>
    </div>
  );

  const ProfilePage = () => (
    <div className="space-y-6 pb-24 animate-in slide-in-from-right duration-500">
      <header className="p-8 bg-[#2c2b2b] flex flex-col items-center text-center space-y-5 rounded-b-[3.5rem] border-b border-[#737373]/10">
        <BrandLogo size="h-28 w-28" />
        <div>
          <h1 className="text-2xl font-black text-[#ffffff] uppercase italic tracking-tighter">{userData.name}</h1>
          <p className="text-[#f4a32e] text-xs font-bold uppercase tracking-[0.2em] mt-1">{userData.role}</p>
        </div>
      </header>

      <main className="p-6 space-y-6">
        <div className="bg-[#2c2b2b] p-6 rounded-[2.5rem] border border-[#737373]/20">
          <h3 className="text-[10px] font-black text-[#737373] uppercase tracking-widest mb-4">Profil Biometric</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center bg-[#737373]/5 py-3 rounded-2xl"><p className="text-xl font-black text-[#ffffff]">{userData.stats.age}</p><p className="text-[9px] text-[#737373] uppercase font-bold">Ani</p></div>
            <div className="text-center bg-[#737373]/5 py-3 rounded-2xl"><p className="text-xl font-black text-[#ffffff]">{userData.stats.height}</p><p className="text-[9px] text-[#737373] uppercase font-bold">CM</p></div>
            <div className="text-center bg-[#737373]/5 py-3 rounded-2xl"><p className="text-xl font-black text-[#ffffff]">{userData.stats.weight}</p><p className="text-[9px] text-[#737373] uppercase font-bold">KG</p></div>
          </div>
        </div>

        <button 
          onClick={() => setAppState('splash')}
          className="w-full py-5 text-[#737373] text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center space-x-2 border-2 border-[#737373]/20 rounded-[2rem] active:bg-[#ffffff]/5"
        >
          <LogOut size={16} />
          <span>Restartează Simularea</span>
        </button>
      </main>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-[#2c2b2b] text-[#ffffff] font-sans overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {appState === 'home' ? <Dashboard /> : <ProfilePage />}
      </div>

      <nav className="bg-[#2c2b2b]/90 backdrop-blur-xl border-t border-[#737373]/10 p-4 pb-8 flex justify-around items-center fixed bottom-0 w-full z-50">
        <button onClick={() => setAppState('home')} className={`flex flex-col items-center space-y-1 transition-all ${appState === 'home' ? 'text-[#f4a32e]' : 'text-[#737373]'}`}>
          <Activity size={24} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Activitate</span>
        </button>
        <button onClick={() => setAppState('profile')} className={`flex flex-col items-center space-y-1 transition-all ${appState === 'profile' ? 'text-[#f4a32e]' : 'text-[#737373]'}`}>
          <User size={24} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Cont</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
