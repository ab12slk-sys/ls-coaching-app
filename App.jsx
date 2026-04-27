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
 * LS Coaching App - Mobile Optimized Version (9:16)
 * Culori Brand: #f4a32e, #ffffff, #737373, #2c2b2b
 * Această versiune este optimizată pentru vizualizarea pe telefon.
 */

const App = () => {
  const [appState, setAppState] = useState('splash');
  const [onboardingStep, setOnboardingStep] = useState(0);

  const logoPath = "./assets/logo.png"; 

  const userData = {
    name: "Lică Sinc",
    initials: "LS",
    role: "Președinte Sebeșul Aleargă",
    location: "Sebeș, RO",
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
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  const BrandLogo = ({ size = "h-12 w-12", animate = false }) => (
    <div className={`${size} rounded-3xl bg-[#f4a32e] border-4 border-[#2c2b2b] flex items-center justify-center overflow-hidden shadow-2xl ${animate ? 'animate-pulse' : ''}`}>
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

  // --- SPLASH SCREEN ---
  if (appState === 'splash') {
    return (
      <div className="h-screen w-full bg-[#2c2b2b] flex flex-col items-center justify-center p-6 text-center">
        <BrandLogo size="h-32 w-32" animate={true} />
        <div className="mt-8 space-y-2">
          <h1 className="text-4xl font-black text-white tracking-tighter italic uppercase">LS Coaching</h1>
          <p className="text-[#f4a32e] text-xs font-bold tracking-[0.5em] uppercase">Science of Endurance</p>
        </div>
      </div>
    );
  }

  // --- ONBOARDING ---
  if (appState === 'onboarding') {
    const slides = [
      {
        title: "ANTRENAMENT ȘTIINȚIFIC",
        desc: "Metodologia UESCA adaptată nevoilor tale de sănătate sau performanță.",
        icon: <Zap className="w-16 h-16 text-[#f4a32e]" />
      },
      {
        title: "COMUNITATE LOCALĂ",
        desc: "Acces direct la evenimentele asociației Sebeșul Aleargă din Alba.",
        icon: <Users className="w-16 h-16 text-[#f4a32e]" />
      },
      {
        title: "FEEDBACK DIGITAL",
        desc: "Monitorizare puls Karvonen și feedback de la propriul tău AI Coach.",
        icon: <ShieldCheck className="w-16 h-16 text-[#f4a32e]" />
      }
    ];

    return (
      <div className="h-screen w-full bg-[#2c2b2b] p-10 flex flex-col items-center justify-between">
        <div className="w-full flex justify-end pt-4">
          <button onClick={() => setAppState('home')} className="text-[#737373] font-black text-xs uppercase tracking-widest">Sari peste</button>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-10 animate-in slide-in-from-bottom duration-700">
          <div className="p-12 bg-[#2c2b2b] rounded-[3rem] border-2 border-[#f4a32e]/30 shadow-[0_0_60px_rgba(244,163,46,0.15)]">
            {slides[onboardingStep].icon}
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-white italic leading-tight uppercase tracking-tighter">{slides[onboardingStep].title}</h2>
            <p className="text-[#737373] text-lg font-semibold leading-relaxed">{slides[onboardingStep].desc}</p>
          </div>
        </div>

        <div className="w-full space-y-8 pb-8">
          <div className="flex justify-center space-x-3">
            {slides.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${onboardingStep === i ? 'w-12 bg-[#f4a32e]' : 'w-4 bg-[#737373]'}`} />
            ))}
          </div>
          <button 
            onClick={() => {
              if (onboardingStep < slides.length - 1) setOnboardingStep(onboardingStep + 1);
              else setAppState('home');
            }}
            className="w-full bg-[#f4a32e] py-6 rounded-3xl font-black text-[#2c2b2b] text-xl shadow-2xl shadow-[#f4a32e]/20 flex items-center justify-center space-x-3 active:scale-95 transition-transform uppercase tracking-tighter"
          >
            <span>{onboardingStep < slides.length - 1 ? 'Continuă' : 'SĂ ÎNCEPEM!'}</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    );
  }

  // --- DASHBOARD ---
  const Dashboard = () => (
    <div className="space-y-6 pb-28 animate-in fade-in duration-1000">
      <header className="flex justify-between items-center bg-[#2c2b2b]/80 backdrop-blur-xl p-6 sticky top-0 z-50 border-b border-[#737373]/10">
        <div className="flex items-center space-x-3">
          <BrandLogo size="h-10 w-10" />
          <div>
            <p className="text-[#f4a32e] text-[8px] uppercase tracking-[0.4em] font-black italic leading-none">LS Coaching</p>
            <h1 className="text-xl font-black text-white tracking-tighter mt-1">DASHBOARD</h1>
          </div>
        </div>
        <button onClick={() => setAppState('profile')} className="relative">
          <div className="h-11 w-11 rounded-2xl border-2 border-[#737373]/40 flex items-center justify-center text-[10px] font-black text-white uppercase tracking-tighter bg-[#2c2b2b]">
            {userData.initials}
          </div>
          <div className="absolute -top-1 -right-1 h-3 w-3 bg-[#f4a32e] rounded-full border-2 border-[#2c2b2b]"></div>
        </button>
      </header>

      <main className="px-6 space-y-6">
        {/* Card Antrenament Z2 */}
        <section className="bg-[#f4a32e] p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-b-8 border-[#2c2b2b]/10">
          <div className="relative z-10 text-[#2c2b2b]">
            <span className="bg-[#2c2b2b]/10 text-[#2c2b2b] text-[9px] px-2.5 py-1.5 rounded-lg font-black uppercase tracking-widest border border-[#2c2b2b]/10">Sesiune UESCA</span>
            <h2 className="text-4xl font-black leading-none mt-4 italic uppercase tracking-tighter">Baza Aerobă</h2>
            <div className="flex space-x-5 text-xs font-black mt-6 mb-8 uppercase opacity-90">
              <span className="flex items-center bg-white/20 px-3 py-2 rounded-xl"><Calendar size={14} className="mr-2" /> 35 MIN</span>
              <span className="flex items-center bg-white/20 px-3 py-2 rounded-xl"><Zap size={14} className="mr-2" /> 131-144 BPM</span>
            </div>
            <button className="bg-[#2c2b2b] text-white w-full py-5 rounded-2xl font-black flex items-center justify-center space-x-3 active:scale-95 transition-transform uppercase text-sm tracking-widest shadow-2xl">
              <Play size={20} fill="currentColor" />
              <span>START SESIUNE</span>
            </button>
          </div>
          <Activity className="absolute right-[-50px] top-[-50px] text-[#2c2b2b]/5 w-80 h-80 -rotate-12" />
        </section>

        {/* Statistici Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#2c2b2b] p-6 rounded-[2rem] border border-[#737373]/20 shadow-inner">
             <div className="flex items-center text-[#f4a32e] mb-3 font-black text-[10px] uppercase tracking-widest">
               <Heart size={16} className="mr-2"/> REPAUS
             </div>
             <p className="text-4xl font-black text-white">{userData.stats.restingHR} <span className="text-xs font-bold text-[#737373]">BPM</span></p>
          </div>
          <div className="bg-[#2c2b2b] p-6 rounded-[2rem] border border-[#737373]/20 shadow-inner">
             <div className="flex items-center text-[#f4a32e] mb-3 font-black text-[10px] uppercase tracking-widest">
               <Flame size={16} className="mr-2"/> STREAK
             </div>
             <p className="text-4xl font-black text-white">5 <span className="text-xs font-bold text-[#737373]">ZILE</span></p>
          </div>
        </div>

        {/* AI Insight */}
        <section className="bg-[#ffffff]/5 border border-[#737373]/20 p-6 rounded-[2.5rem] flex items-start space-x-4">
          <div className="bg-[#f4a32e] p-3 rounded-2xl text-[#2c2b2b] shadow-lg shadow-[#f4a32e]/20">
            <MessageSquare size={20} />
          </div>
          <div className="space-y-1">
            <h4 className="text-[10px] font-black text-[#f4a32e] uppercase tracking-[0.3em]">LS AI Insights</h4>
            <p className="text-sm text-white leading-relaxed font-semibold italic">
              "Recuperarea a fost optimă. Astăzi te poți concentra pe tehnică în Zona 2. Menține cadența!"
            </p>
          </div>
        </section>
      </main>
    </div>
  );

  const ProfilePage = () => (
    <div className="space-y-6 pb-28 animate-in slide-in-from-right duration-500">
      <header className="p-10 bg-[#2c2b2b] flex flex-col items-center text-center space-y-6 rounded-b-[4rem] border-b border-[#737373]/20">
        <BrandLogo size="h-32 w-32" />
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-white uppercase italic tracking-tighter">{userData.name}</h1>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-[#f4a32e] text-xs font-black uppercase tracking-[0.3em]">{userData.role}</p>
            <p className="text-[#737373] text-[10px] font-bold uppercase tracking-widest flex items-center">
              <MapPin size={12} className="mr-1" /> {userData.location}
            </p>
          </div>
        </div>
      </header>

      <main className="px-6 space-y-6">
        <div className="bg-[#2c2b2b] p-8 rounded-[2.5rem] border border-[#737373]/20 space-y-6">
          <h3 className="text-xs font-black text-[#737373] uppercase tracking-widest text-center">BIOMETRIE CORPORALĂ</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center bg-[#ffffff]/5 py-5 rounded-3xl border border-[#737373]/10">
              <p className="text-2xl font-black text-white">{userData.stats.age}</p>
              <p className="text-[9px] text-[#737373] uppercase font-black">Ani</p>
            </div>
            <div className="text-center bg-[#ffffff]/5 py-5 rounded-3xl border border-[#737373]/10">
              <p className="text-2xl font-black text-white">{userData.stats.height}</p>
              <p className="text-[9px] text-[#737373] uppercase font-black">CM</p>
            </div>
            <div className="text-center bg-[#ffffff]/5 py-5 rounded-3xl border border-[#737373]/10">
              <p className="text-2xl font-black text-white">{userData.stats.weight}</p>
              <p className="text-[9px] text-[#737373] uppercase font-black">KG</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setAppState('splash')}
          className="w-full py-6 text-[#737373] text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-center space-x-3 border-2 border-[#737373]/20 rounded-[2.5rem] active:bg-[#ffffff]/5 transition-colors"
        >
          <LogOut size={18} />
          <span>Restartează Aplicația</span>
        </button>
      </main>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-[#2c2b2b] text-white font-sans overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {appState === 'home' ? <Dashboard /> : appState === 'profile' ? <ProfilePage /> : null}
      </div>

      {(appState === 'home' || appState === 'profile') && (
        <nav className="bg-[#2c2b2b]/95 backdrop-blur-2xl border-t border-[#737373]/20 px-8 py-5 pb-10 flex justify-around items-center fixed bottom-0 w-full z-50">
          <button onClick={() => setAppState('home')} className={`flex flex-col items-center space-y-1.5 transition-all duration-300 ${appState === 'home' ? 'text-[#f4a32e] scale-110' : 'text-[#737373] grayscale'}`}>
            <Activity size={28} strokeWidth={appState === 'home' ? 2.5 : 2} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Activitate</span>
          </button>
          <button onClick={() => setAppState('profile')} className={`flex flex-col items-center space-y-1.5 transition-all duration-300 ${appState === 'profile' ? 'text-[#f4a32e] scale-110' : 'text-[#737373] grayscale'}`}>
            <User size={28} strokeWidth={appState === 'profile' ? 2.5 : 2} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Cont</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default App;
