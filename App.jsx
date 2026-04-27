import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Calendar, 
  Users, 
  Play, 
  MessageSquare, 
  TrendingUp, 
  MapPin, 
  User, 
  Award, 
  LogOut, 
  Activity, 
  Zap, 
  Flame, 
  ChevronRight, 
  ShieldCheck,
  Trophy,
  ArrowRight,
  Clock
} from 'lucide-react';

/**
 * LS COACHING APP - 2027 Visual Identity
 * Culori: #f4a32e (Accent), #ffffff (Text), #737373 (Secundar), #2c2b2b (Fundal)
 * Versiune consolidată pentru rulare directă pe mobil (Simulator 9:16)
 */

// --- LOGICA BIOMETRICĂ (Formula Karvonen) ---
const getZones = (hrRest, hrMax) => {
  const hrr = hrMax - hrRest;
  return [
    { zone: 1, min: 0.50, max: 0.60, label: "Recuperare" },
    { zone: 2, min: 0.60, max: 0.70, label: "Baza Aerobă" },
    { zone: 3, min: 0.70, max: 0.80, label: "Tempo" },
    { zone: 4, min: 0.80, max: 0.90, label: "Prag Lactat" },
    { zone: 5, min: 0.90, max: 1.00, label: "Anaerob" }
  ].map(z => ({
    ...z,
    minHR: Math.round((hrr * z.min) + hrRest),
    maxHR: Math.round((hrr * z.max) + hrRest)
  }));
};

const LSCoachingApp = () => {
  const [appState, setAppState] = useState('splash'); // splash, onboarding, home, profile
  const [onboardingStep, setOnboardingStep] = useState(0);

  // Datele profilului lui Lică Sinc
  const userData = {
    name: "Lică Sinc",
    initials: "LS",
    role: "Președinte Sebeșul Aleargă, UESCA Coach",
    location: "Sebeș, RO",
    stats: { age: 37, height: 186, weight: 75, restingHR: 47, maxHR: 185 },
    personalBests: [
      { distance: "5K", time: "18:03" },
      { distance: "10K", time: "38:08" },
      { distance: "Semi", time: "1:32:15" }
    ],
    medals: [
      { id: 1, name: "Fondator", icon: "🏆", color: "bg-[#f4a32e]/10 text-[#f4a32e]" },
      { id: 2, name: "Ultramarathon Finisher", icon: "⛰️", color: "bg-[#737373]/20 text-white" }
    ]
  };

  const zones = getZones(userData.stats.restingHR, userData.stats.maxHR);
  const z2Range = `${zones[1].minHR}-${zones[1].maxHR} BPM`;

  // Simulator Splash Screen
  useEffect(() => {
    if (appState === 'splash') {
      const timer = setTimeout(() => setAppState('onboarding'), 3000);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  // Componentă Brand Logo
  const BrandLogo = ({ size = "h-12 w-12", animate = false }) => (
    <div className={`${size} rounded-[1.5rem] bg-[#f4a32e] border-4 border-[#2c2b2b] flex items-center justify-center overflow-hidden shadow-2xl ${animate ? 'animate-pulse' : ''}`}>
      <span className="text-[#2c2b2b] font-black text-2xl tracking-tighter italic">{userData.initials}</span>
    </div>
  );

  // --- COMPONENTE ECRANE ---

  const SplashScreen = () => (
    <div className="h-screen w-full bg-[#2c2b2b] flex flex-col items-center justify-center p-6 text-center">
      <BrandLogo size="h-40 w-40" animate={true} />
      <div className="mt-12 space-y-3">
        <h1 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">LS Coaching</h1>
        <div className="h-1 w-12 bg-[#f4a32e] mx-auto rounded-full"></div>
        <p className="text-[#f4a32e] text-xs font-bold tracking-[0.5em] uppercase opacity-80">Science of Endurance</p>
      </div>
    </div>
  );

  const Onboarding = () => {
    const slides = [
      { title: "ANTRENAMENT ȘTIINȚIFIC", desc: "Planuri bazate pe metodologia UESCA și formula Karvonen pentru rezultate reale.", icon: <Zap className="w-16 h-16 text-[#f4a32e]" /> },
      { title: "COMUNITATE LOCALĂ", desc: "Acces direct la evenimentele Asociației Sebeșul Aleargă.", icon: <Users className="w-16 h-16 text-[#f4a32e]" /> },
      { title: "FEEDBACK", desc: "Monitorizare și feedback de la propriul tău Coach.", icon: <ShieldCheck className="w-16 h-16 text-[#f4a32e]" /> }
    ];

    return (
      <div className="h-screen w-full bg-[#2c2b2b] p-10 flex flex-col items-center justify-between overflow-hidden">
        <div className="w-full flex justify-end pt-4">
          <button onClick={() => setAppState('home')} className="text-[#737373] font-black text-xs uppercase tracking-widest">Sari peste</button>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-12 animate-in slide-in-from-bottom duration-700">
          <div className="p-12 bg-[#2c2b2b] rounded-[3.5rem] border-2 border-[#f4a32e]/20 shadow-[0_0_80px_rgba(244,163,46,0.15)]">
            {slides[onboardingStep].icon}
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-white italic leading-tight uppercase tracking-tighter">{slides[onboardingStep].title}</h2>
            <p className="text-[#737373] text-lg font-semibold leading-relaxed px-4">{slides[onboardingStep].desc}</p>
          </div>
        </div>

        <div className="w-full space-y-8 pb-10">
          <div className="flex justify-center space-x-4">
            {slides.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${onboardingStep === i ? 'w-12 bg-[#f4a32e]' : 'w-4 bg-[#737373]'}`} />
            ))}
          </div>
          <button 
            onClick={() => onboardingStep < slides.length - 1 ? setOnboardingStep(onboardingStep + 1) : setAppState('home')}
            className="w-full bg-[#f4a32e] py-6 rounded-[2rem] font-black text-[#2c2b2b] text-xl shadow-2xl flex items-center justify-center space-x-3 active:scale-95 transition-transform uppercase tracking-tighter"
          >
            <span>{onboardingStep < slides.length - 1 ? 'Continuă' : 'SĂ ÎNCEPEM!'}</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    );
  };

  const Dashboard = () => (
    <div className="space-y-6 pb-32 animate-in fade-in duration-1000">
      <header className="flex justify-between items-center bg-[#2c2b2b]/95 backdrop-blur-xl p-6 sticky top-0 z-50 border-b border-[#737373]/10">
        <div className="flex items-center space-x-3">
          <BrandLogo size="h-10 w-10" />
          <div>
            <p className="text-[#f4a32e] text-[8px] uppercase tracking-[0.4em] font-black italic">LS Coaching</p>
            <h1 className="text-xl font-black text-white tracking-tighter mt-1 uppercase italic leading-none">Dashboard</h1>
          </div>
        </div>
        <button onClick={() => setAppState('profile')} className="h-11 w-11 rounded-2xl border-2 border-[#737373]/40 flex items-center justify-center text-[10px] font-black text-white bg-[#2c2b2b] active:scale-90 transition-transform">
          {userData.initials}
        </button>
      </header>

      <main className="px-6 space-y-6">
        {/* Antrenament Activ Card */}
        <section className="bg-[#f4a32e] p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group border-b-8 border-[#2c2b2b]/10">
          <div className="relative z-10 text-[#2c2b2b]">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-[#2c2b2b]/10 text-[#2c2b2b] text-[9px] px-2.5 py-1.5 rounded-lg font-black uppercase tracking-widest border border-[#2c2b2b]/10 italic">Plan UESCA</span>
            </div>
            <h2 className="text-4xl font-black leading-none italic uppercase tracking-tighter">Baza Aerobă<br/>Zona 2</h2>
            <div className="flex space-x-4 text-[10px] font-black mt-8 mb-10 uppercase opacity-90 text-[#2c2b2b]">
              <span className="flex items-center bg-white/30 px-3 py-2 rounded-xl italic">
                <Clock size={14} className="mr-1" /> 35 MINUTE
              </span>
              <span className="flex items-center bg-white/30 px-3 py-2 rounded-xl italic">
                <Heart size={14} className="mr-1" /> {z2Range}
              </span>
            </div>
            <button className="bg-[#2c2b2b] text-white w-full py-5 rounded-[1.5rem] font-black flex items-center justify-center space-x-3 active:scale-95 transition-transform uppercase text-sm tracking-widest shadow-2xl">
              <Play size={20} fill="currentColor" />
              <span>START SESIUNE</span>
            </button>
          </div>
          <Activity className="absolute right-[-60px] top-[-50px] text-[#2c2b2b]/5 w-96 h-96 -rotate-12" />
        </section>

        {/* Statistici Biometrice Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#2c2b2b] p-7 rounded-[2.5rem] border border-[#737373]/20 shadow-inner">
             <div className="flex items-center text-[#f4a32e] mb-3 font-black text-[10px] uppercase tracking-widest"><Heart size={18} className="mr-2"/> REPAUS</div>
             <p className="text-4xl font-black tracking-tighter text-white">{userData.stats.restingHR} <span className="text-[10px] font-bold text-[#737373] uppercase tracking-tighter">bpm</span></p>
          </div>
          <div className="bg-[#2c2b2b] p-7 rounded-[2.5rem] border border-[#737373]/20 shadow-inner">
             <div className="flex items-center text-[#f4a32e] mb-3 font-black text-[10px] uppercase tracking-widest"><Flame size={18} className="mr-2"/> STREAK</div>
             <p className="text-4xl font-black tracking-tighter text-white">5 <span className="text-[10px] font-bold text-[#737373] uppercase tracking-tighter">zile</span></p>
          </div>
        </div>

        {/* AI Insight Box */}
        <section className="bg-white/5 border border-[#737373]/20 p-7 rounded-[2.5rem] flex items-start space-x-5">
          <div className="bg-[#f4a32e] p-4 rounded-2xl text-[#2c2b2b] shadow-lg shadow-[#f4a32e]/20">
            <MessageSquare size={22} />
          </div>
          <div className="space-y-1">
            <h4 className="text-[10px] font-black text-[#f4a32e] uppercase tracking-[0.4em]">LS Insights</h4>
            <p className="text-sm text-white leading-relaxed font-semibold italic opacity-90">
              "Recuperarea a fost optimă. Astăzi te poți concentra pe tehnică în Zona 2. Menține cadența!"
            </p>
          </div>
        </section>
      </main>
    </div>
  );

  const Profile = () => (
    <div className="space-y-6 pb-32 animate-in slide-in-from-right duration-500 min-h-screen overflow-y-auto bg-[#2c2b2b]">
      <header className="p-12 bg-[#2c2b2b] flex flex-col items-center text-center space-y-6 rounded-b-[4.5rem] border-b border-[#737373]/20 shadow-2xl">
        <BrandLogo size="h-32 w-32" />
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">{userData.name}</h1>
          <p className="text-[#f4a32e] text-xs font-black uppercase tracking-[0.4em]">{userData.role}</p>
          <p className="text-[#737373] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center pt-2">
            <MapPin size={12} className="mr-1" /> {userData.location}
          </p>
        </div>
      </header>

      <main className="px-6 space-y-10 mt-6">
        <div className="bg-[#2c2b2b] p-8 rounded-[3rem] border border-[#737373]/20 grid grid-cols-3 gap-3 shadow-inner">
          <div className="text-center bg-white/5 py-6 rounded-3xl border border-[#737373]/10">
            <p className="text-2xl font-black text-white tracking-tighter">{userData.stats.age}</p>
            <p className="text-[9px] text-[#737373] uppercase font-black tracking-tighter">Ani</p>
          </div>
          <div className="text-center bg-white/5 py-6 rounded-3xl border border-[#737373]/10">
            <p className="text-2xl font-black text-white tracking-tighter">{userData.stats.height}</p>
            <p className="text-[9px] text-[#737373] uppercase font-black tracking-tighter">CM</p>
          </div>
          <div className="text-center bg-white/5 py-6 rounded-3xl border border-[#737373]/10">
            <p className="text-2xl font-black text-white tracking-tighter">{userData.stats.weight}</p>
            <p className="text-[9px] text-[#737373] uppercase font-black tracking-tighter">KG</p>
          </div>
        </div>

        <section className="space-y-5 px-2">
          <h3 className="text-xs font-black text-[#737373] uppercase tracking-widest flex items-center italic">
             <TrendingUp size={16} className="mr-3 text-[#f4a32e]" /> Recorduri Personale
          </h3>
          <div className="space-y-3">
            {userData.personalBests.map((pb, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-[2rem] flex justify-between items-center border border-[#737373]/10 transition-all active:bg-white/10">
                <span className="font-black text-white uppercase text-sm italic tracking-tighter">{pb.distance}</span>
                <div className="flex items-center space-x-3">
                  <span className="font-black text-[#f4a32e] text-xl tracking-tighter">{pb.time}</span>
                  <ArrowRight size={14} className="text-[#737373]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <button 
          onClick={() => setAppState('splash')}
          className="w-full py-6 text-[#737373] text-[11px] font-black uppercase tracking-[0.5em] flex items-center justify-center space-x-3 border-2 border-[#737373]/20 rounded-[2.5rem] active:bg-white/5 transition-colors mb-20"
        >
          <LogOut size={18} />
          <span>Restartează Aplicația</span>
        </button>
      </main>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-[#2c2b2b] text-white font-sans overflow-hidden select-none">
      <div className="flex-1 overflow-y-auto">
        {appState === 'splash' && <SplashScreen />}
        {appState === 'onboarding' && <Onboarding />}
        {appState === 'home' && <Dashboard />}
        {appState === 'profile' && <Profile />}
      </div>

      {(appState === 'home' || appState === 'profile') && (
        <nav className="bg-[#2c2b2b]/95 backdrop-blur-2xl border-t border-[#737373]/20 px-10 py-6 pb-12 flex justify-around items-center fixed bottom-0 w-full z-50 shadow-[0_-15px_40px_rgba(0,0,0,0.4)]">
          <button 
            onClick={() => setAppState('home')} 
            className={`flex flex-col items-center space-y-2 transition-all duration-300 ${appState === 'home' ? 'text-[#f4a32e] scale-125' : 'text-[#737373] grayscale opacity-40'}`}
          >
            <Activity size={30} strokeWidth={appState === 'home' ? 2.5 : 2} />
            <span className="text-[9px] font-black uppercase tracking-widest">Activitate</span>
          </button>
          <button 
            onClick={() => setAppState('profile')} 
            className={`flex flex-col items-center space-y-2 transition-all duration-300 ${appState === 'profile' ? 'text-[#f4a32e] scale-125' : 'text-[#737373] grayscale opacity-40'}`}
          >
            <User size={30} strokeWidth={appState === 'profile' ? 2.5 : 2} />
            <span className="text-[9px] font-black uppercase tracking-widest">Profil</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default function App() {
  return <LSCoachingApp />;
}
