import React, { useState } from 'react';
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
  Flame
} from 'lucide-react';

/**
 * LS Coaching App - Versiunea cu Logo Integrat
 * Autor: Lică Sinc
 * Orizont: 2027
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Calea către logo-ul tău pe GitHub (ajustează extensia dacă e nevoie)
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
      { id: 1, name: "Fondator", icon: "🏆", color: "bg-yellow-500/20 text-yellow-500" },
      { id: 2, name: "Zlatna Finisher", icon: "⛰️", color: "bg-blue-500/20 text-blue-500" }
    ]
  };

  // Componentă Logo reutilizabilă
  const BrandLogo = ({ size = "h-12 w-12" }) => (
    <div className={`${size} rounded-2xl bg-blue-600 border-2 border-blue-400 flex items-center justify-center overflow-hidden shadow-lg shadow-blue-500/20`}>
      <img 
        src={logoPath} 
        alt="LS Coaching Logo" 
        className="h-full w-full object-cover"
        onError={(e) => {
          e.target.style.display = 'none'; // Ascunde imaginea dacă lipsește
          e.target.parentElement.innerHTML = `<span class="text-white font-bold text-lg">${userData.initials}</span>`;
        }}
      />
    </div>
  );

  const Dashboard = () => (
    <div className="space-y-6 pb-24">
      <header className="flex justify-between items-center bg-slate-900/50 backdrop-blur-md p-6 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <BrandLogo size="h-10 w-10" />
          <div>
            <p className="text-slate-400 text-[9px] uppercase tracking-[0.2em] font-black">LS Coaching</p>
            <h1 className="text-xl font-bold italic tracking-tight">DASHBOARD</h1>
          </div>
        </div>
        <button onClick={() => setCurrentPage('profile')} className="p-1">
          <div className="h-10 w-10 rounded-full border-2 border-slate-700 p-0.5">
             <div className="h-full w-full bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold">LS</div>
          </div>
        </button>
      </header>

      <main className="p-6 space-y-6 animate-in fade-in duration-500">
        <section className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="bg-white/20 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Plan UESCA</span>
            <h2 className="text-2xl font-black mt-2">Baza Aerobă (Z2)</h2>
            <div className="flex space-x-4 text-xs font-semibold mt-3 mb-6">
              <span className="flex items-center bg-black/10 px-2 py-1 rounded-lg"><Calendar size={14} className="mr-1" /> 35 min</span>
              <span className="flex items-center bg-black/10 px-2 py-1 rounded-lg"><Zap size={14} className="mr-1" /> 131-144 BPM</span>
            </div>
            <button className="bg-white text-blue-700 w-full py-4 rounded-2xl font-black flex items-center justify-center space-x-2 shadow-xl active:scale-95 transition-transform">
              <Play size={20} fill="currentColor" />
              <span>START SESIUNE</span>
            </button>
          </div>
        </section>

        {/* Statistici rapide */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800">
             <div className="flex items-center text-rose-500 mb-1"><Heart size={14} className="mr-1"/> <span className="text-[9px] font-bold">REPAUS</span></div>
             <p className="text-2xl font-black">{userData.stats.restingHR} <span className="text-[10px] text-slate-500">BPM</span></p>
          </div>
          <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800">
             <div className="flex items-center text-orange-500 mb-1"><Flame size={14} className="mr-1"/> <span className="text-[9px] font-bold">STREAK</span></div>
             <p className="text-2xl font-black">5 <span className="text-[10px] text-slate-500">ZILE</span></p>
          </div>
        </div>
      </main>
    </div>
  );

  const ProfilePage = () => (
    <div className="space-y-6 pb-24 animate-in slide-in-from-right duration-300">
      <header className="p-8 bg-slate-900 flex flex-col items-center text-center space-y-4 rounded-b-[3rem] border-b border-slate-800">
        <BrandLogo size="h-24 w-24" />
        <div>
          <h1 className="text-2xl font-black">{userData.name}</h1>
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">UESCA Coach in training</p>
        </div>
      </header>

      <main className="p-6 space-y-6">
        <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800 space-y-4">
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Detalii PFA 2027</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500">Specializare</span>
              <span className="text-sm font-bold">Alergare Montană & Sănătate</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-slate-500">Locație</span>
              <span className="text-sm font-bold">Sebeș, RO</span>
            </div>
          </div>
        </div>

        <button className="w-full py-5 text-rose-500 text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2 border-2 border-rose-500/10 rounded-3xl bg-rose-500/5">
          <LogOut size={18} />
          <span>Ieșire din cont</span>
        </button>
      </main>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-white font-sans overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {currentPage === 'home' ? <Dashboard /> : <ProfilePage />}
      </div>

      <nav className="bg-slate-900/80 backdrop-blur-2xl border-t border-slate-800 p-4 pb-8 flex justify-around items-center fixed bottom-0 w-full z-50">
        <button onClick={() => setCurrentPage('home')} className={`flex flex-col items-center space-y-1 transition-all ${currentPage === 'home' ? 'text-blue-400 scale-110' : 'text-slate-500 opacity-50'}`}>
          <Activity size={24} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Activitate</span>
        </button>
        <button onClick={() => setCurrentPage('profile')} className={`flex flex-col items-center space-y-1 transition-all ${currentPage === 'profile' ? 'text-blue-400 scale-110' : 'text-slate-500 opacity-50'}`}>
          <User size={24} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Cont</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
