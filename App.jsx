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
  MapPin
} from 'lucide-react';

/**
 * LS Coaching Dashboard - Interfața Principală (v1.0)
 * Aceasta este componenta principală care va rula pe dispozitivele clienților în 2027.
 * Integrează logica de antrenament UESCA cu identitatea asociației "Sebeșul Aleargă".
 */

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Date simulate pentru utilizator (Exemplu: Lică Sinc)
  const userData = {
    name: "Lică Sinc",
    restingHR: 50,
    maxHR: 185,
    weeklyGoal: 40,
    currentWeeklyKm: 12.5,
    streak: 5,
    todayWorkout: {
      type: "AEROBIC_BASE",
      title: "Baza Aerobă (Zona 2)",
      duration: "30 min",
      range: "131-144 BPM",
      description: "Ritm relaxat, ideal pentru construirea motorului aerob conform metodologiei UESCA."
    }
  };

  const communityEvents = [
    { id: 1, title: "Alergare de grup - Parcul Arini", time: "Sâmbătă, 09:00", location: "Sebeș" },
    { id: 2, title: "Zlatna Trail - Recunoaștere Traseu", time: "Duminică, 10:00", location: "Zlatna" }
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-white font-sans overflow-hidden">
      
      {/* Header cu branding-ul LS Coaching */}
      <header className="p-6 pb-2 flex justify-between items-center bg-slate-900/50 backdrop-blur-md border-b border-slate-800/50">
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-widest">LS Coaching</p>
          <h1 className="text-2xl font-bold">{userData.name}</h1>
        </div>
        <div className="h-12 w-12 rounded-full bg-blue-600 border-2 border-blue-400 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/20">
          LS
        </div>
      </header>

      {/* Zona principală de conținut (Scrollable) */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* Statistici Rapide (Puls și Progres) */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-2xl flex flex-col space-y-2 border border-slate-700/50">
            <div className="flex items-center text-rose-500">
              <Heart size={16} className="mr-1" />
              <span className="text-xs font-semibold uppercase">Repaus</span>
            </div>
            <span className="text-2xl font-bold">{userData.restingHR} <span className="text-xs text-slate-400">BPM</span></span>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-2xl flex flex-col space-y-2 border border-slate-700/50">
            <div className="flex items-center text-blue-500">
              <TrendingUp size={16} className="mr-1" />
              <span className="text-xs font-semibold uppercase">Săptămână</span>
            </div>
            <span className="text-2xl font-bold">{userData.currentWeeklyKm} / {userData.weeklyGoal} <span className="text-xs text-slate-400">KM</span></span>
          </div>
        </section>

        {/* Card Antrenament Astăzi (Elementul Central) */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl shadow-xl shadow-blue-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <span className="bg-white/20 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">Antrenament Astăzi</span>
              <h2 className="text-xl font-bold mt-1">{userData.todayWorkout.title}</h2>
            </div>
            <button className="bg-white text-blue-700 p-3 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg">
              <Play size={20} fill="currentColor" />
            </button>
          </div>
          
          <div className="flex space-x-6 text-sm mb-4 relative z-10">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1 opacity-70" />
              <span>{userData.todayWorkout.duration}</span>
            </div>
            <div className="flex items-center">
              <Heart size={16} className="mr-1 opacity-70" />
              <span>{userData.todayWorkout.range}</span>
            </div>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed relative z-10">
            {userData.todayWorkout.description}
          </p>
        </section>

        {/* Sugestie Automată LS AI Coach */}
        <section className="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl flex items-start space-x-3">
          <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
            <MessageSquare size={20} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">LS Coach</h4>
            <p className="text-sm text-slate-200 mt-1 italic">
              "Pulsul tău de repaus este excelent astăzi. Poți menține intensitatea planificată."
            </p>
          </div>
        </section>

        {/* Comunitatea Sebeșul Aleargă - Evenimente Viitoare */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Sebeșul Aleargă</h3>
            <span className="text-blue-400 text-sm font-semibold">Vezi toate</span>
          </div>
          {communityEvents.map(event => (
            <div key={event.id} className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center justify-between hover:border-slate-600 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-slate-800 h-10 w-10 rounded-xl flex items-center justify-center text-slate-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5 className="font-semibold text-sm">{event.title}</h5>
                  <p className="text-xs text-slate-500">{event.time} • {event.location}</p>
                </div>
              </div>
              <CheckCircle size={20} className="text-slate-800" />
            </div>
          ))}
        </section>

        <div className="h-20"></div> {/* Spacing pentru bara de navigare */}
      </main>

      {/* Meniu Navigare (Simulat pentru Mobile) */}
      <nav className="bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 p-4 pb-8 flex justify-around items-center fixed bottom-0 w-full">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center space-y-1 ${activeTab === 'home' ? 'text-blue-400' : 'text-slate-500'}`}>
          <TrendingUp size={24} />
          <span className="text-[10px] font-medium uppercase">Acasă</span>
        </button>
        <button onClick={() => setActiveTab('plan')} className={`flex flex-col items-center space-y-1 ${activeTab === 'plan' ? 'text-blue-400' : 'text-slate-500'}`}>
          <Calendar size={24} />
          <span className="text-[10px] font-medium uppercase">Plan</span>
        </button>
        <button onClick={() => setActiveTab('community')} className={`flex flex-col items-center space-y-1 ${activeTab === 'community' ? 'text-blue-400' : 'text-slate-500'}`}>
          <Users size={24} />
          <span className="text-[10px] font-medium uppercase">Grup</span>
        </button>
        <button onClick={() => setActiveTab('settings')} className={`flex flex-col items-center space-y-1 ${activeTab === 'settings' ? 'text-blue-400' : 'text-slate-500'}`}>
          <Settings size={24} />
          <span className="text-[10px] font-medium uppercase">Setări</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
