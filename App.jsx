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
  ChevronRight,
  LogOut,
  Smartphone,
  Activity,
  Zap,
  Flame
} from 'lucide-react';

/**
 * LS Coaching App - Versiunea Completă cu Navigare (Dashboard + Profil)
 * Aceasta este interfața pe care o vor folosi clienții tăi în 2027.
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Datele tale reale pentru profilul de Coach/Admin
  const userData = {
    name: "Lică Sinc",
    initials: "LS",
    role: "Președinte Asociația Sebeșul Aleargă",
    location: "Sebeș, Alba",
    stats: {
      age: 37,
      height: 186,
      weight: 75,
      restingHR: 50
    },
    personalBests: [
      { distance: "5K", time: "19:45" },
      { distance: "10K", time: "41:20" },
      { distance: "Semi-Maraton", time: "1:32:15" }
    ],
    medals: [
      { id: 1, name: "Fondator", icon: "🏆", color: "bg-yellow-500/20 text-yellow-500" },
      { id: 2, name: "Zlatna Finisher", icon: "⛰️", color: "bg-blue-500/20 text-blue-500" },
      { id: 3, name: "1000 KM Club", icon: "👟", color: "bg-emerald-500/20 text-emerald-500" }
    ]
  };

  // --- COMPONENTA DASHBOARD (ECRANUL PRINCIPAL) ---
  const Dashboard = () => (
    <div className="space-y-6 pb-24">
      <header className="flex justify-between items-center bg-slate-900/50 backdrop-blur-md p-6 border-b border-slate-800">
        <div>
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">LS Coaching AI</p>
          <h1 className="text-2xl font-bold">Salut, {userData.name.split(' ')[0]}!</h1>
        </div>
        <button 
          onClick={() => setCurrentPage('profile')}
          className="h-12 w-12 rounded-2xl bg-blue-600 border-2 border-blue-400 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/20 transition-transform active:scale-90"
        >
          {userData.initials}
        </button>
      </header>

      <main className="p-6 space-y-6 animate-in fade-in duration-500">
        {/* Statistici Rapide */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/40 p-4 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center text-rose-500 mb-2">
              <Heart size={16} className="mr-2" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Puls Repaus</span>
            </div>
            <p className="text-3xl font-black">{userData.stats.restingHR} <span className="text-sm font-normal text-slate-500">BPM</span></p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center text-orange-500 mb-2">
              <Flame size={16} className="mr-2" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Streak</span>
            </div>
            <p className="text-3xl font-black">5 <span className="text-sm font-normal text-slate-500">Zile</span></p>
          </div>
        </div>

        {/* Antrenamentul Zilei */}
        <section className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-white/20 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest backdrop-blur-md">Plan UESCA</span>
            </div>
            <h2 className="text-2xl font-black leading-tight mb-2">Baza Aerobă<br/>(Zona 2)</h2>
            <div className="flex space-x-4 text-xs font-semibold mb-6 opacity-90">
              <span className="flex items-center bg-black/10 px-2 py-1 rounded-lg"><Calendar size={14} className="mr-1" /> 35 min</span>
              <span className="flex items-center bg-black/10 px-2 py-1 rounded-lg"><Zap size={14} className="mr-1" /> 131-144 BPM</span>
            </div>
            <button className="bg-white text-blue-700 w-full py-4 rounded-2xl font-black flex items-center justify-center space-x-2 shadow-xl active:scale-95 transition-transform">
              <Play size={20} fill="currentColor" />
              <span>ÎNCEPE ANTRENAMENTUL</span>
            </button>
          </div>
          <Activity className="absolute right-[-30px] top-[-30px] text-white/5 w-64 h-64 -rotate-12" />
        </section>

        {/* AI Coaching Insights */}
        <section className="bg-slate-900 border border-slate-800 p-5 rounded-3xl flex items-start space-x-4">
          <div className="bg-blue-500/20 p-3 rounded-2xl text-blue-400">
            <MessageSquare size={24} />
          </div>
          <div>
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">LS AI Insights</h4>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              "Am observat că ai recuperat bine după tura de ieri din Parcul Arini. Astăzi menținem intensitatea scăzută."
            </p>
          </div>
        </section>
      </main>
    </div>
  );

  // --- COMPONENTA PROFIL (PERSONALIZATĂ) ---
  const ProfilePage = () => (
    <div className="space-y-6 pb-24 animate-in slide-in-from-right duration-300">
      <header className="p-8 bg-slate-900 flex flex-col items-center text-center space-y-4 rounded-b-[3rem] border-b border-slate-800">
        <div className="h-24 w-24 rounded-[2rem] bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-3xl font-black shadow-2xl border-4 border-slate-900">
          {userData.initials}
        </div>
        <div>
          <h1 className="text-2xl font-black">{userData.name}</h1>
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">{userData.role}</p>
        </div>
        <div className="flex space-x-2">
          <span className="bg-slate-800 text-slate-400 px-3 py-1 rounded-full text-[10px] font-bold border border-slate-700 flex items-center">
             <MapPin size={10} className="mr-1" /> {userData.location}
          </span>
          <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold border border-blue-500/20 uppercase">
             UESCA Student
          </span>
        </div>
      </header>

      <main className="p-6 space-y-8">
        {/* Parametri Fizici */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800 text-center">
            <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Vârstă</p>
            <p className="text-xl font-black">{userData.stats.age}</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800 text-center">
            <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Înălțime</p>
            <p className="text-xl font-black">{userData.stats.height}<span className="text-xs ml-0.5">cm</span></p>
          </div>
          <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800 text-center">
            <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Greutate</p>
            <p className="text-xl font-black">{userData.stats.weight}<span className="text-xs ml-0.5">kg</span></p>
          </div>
        </div>

        {/* Recorduri Personale (PB) */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center">
              <TrendingUp size={16} className="mr-2" /> Recorduri Personale
            </h3>
          </div>
          <div className="space-y-3">
            {userData.personalBests.map((pb, idx) => (
              <div key={idx} className="bg-slate-800/30 p-5 rounded-3xl flex justify-between items-center border border-slate-700/30">
                <span className="font-black text-slate-100">{pb.distance}</span>
                <span className="font-mono text-blue-400 font-black text-lg">{pb.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Realizări / Medalii */}
        <section>
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center mb-4">
            <Award size={16} className="mr-2" /> Realizări Sebeșul Aleargă
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {userData.medals.map(medal => (
              <div key={medal.id} className={`${medal.color} p-4 rounded-3xl flex flex-col items-center space-y-2 border border-white/5`}>
                <span className="text-3xl">{medal.icon}</span>
                <span className="text-[8px] font-black leading-tight uppercase tracking-tighter">{medal.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Buton Deconectare */}
        <button className="w-full py-5 text-rose-500 text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2 border-2 border-rose-500/10 rounded-3xl bg-rose-500/5 mt-4">
          <LogOut size={18} />
          <span>Închide Sesiunea</span>
        </button>
      </main>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-white font-sans overflow-hidden">
      {/* Container Principal pentru Scroll */}
      <div className="flex-1 overflow-y-auto">
        {currentPage === 'home' ? <Dashboard /> : <ProfilePage />}
      </div>

      {/* Navigare Stil Mobile (Fixed) */}
      <nav className="bg-slate-900/80 backdrop-blur-2xl border-t border-slate-800 p-4 pb-8 flex justify-around items-center fixed bottom-0 w-full z-50">
        <button 
          onClick={() => setCurrentPage('home')} 
          className={`flex flex-col items-center space-y-1 transition-all ${currentPage === 'home' ? 'text-blue-400 scale-110' : 'text-slate-500 opacity-50'}`}
        >
          <Activity size={24} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Acasă</span>
        </button>
        <button 
          onClick={() => setCurrentPage('profile')} 
          className={`flex flex-col items-center space-y-1 transition-all ${currentPage === 'profile' ? 'text-blue-400 scale-110' : 'text-slate-500 opacity-50'}`}
        >
          <User size={24} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Profil</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
