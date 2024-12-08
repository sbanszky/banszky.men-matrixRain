import React, { useState, useEffect } from 'react';
import { IpMatrix } from './components/IpMatrix';
import { IpDisplay } from './components/IpDisplay';
import { NetworkStats } from './components/NetworkStats';
import { Terminal } from 'lucide-react';

function App() {
  const [ip, setIp] = useState('192.168.1.1');

  useEffect(() => {
    const interval = setInterval(() => {
      const newIp = Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * 256))
        .join('.');
      setIp(newIp);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-[#00FF41] overflow-hidden">
      <IpMatrix />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
        <div className="flex items-center space-x-3 mb-8">
          <Terminal className="w-8 h-8" />
          <h1 className="text-3xl font-mono font-bold">Status: Online, but currently booked.</h1>
        </div>

        <IpDisplay ip={ip} />
        
        <NetworkStats />

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-[#00FF41]/70 text-sm font-mono">
            System Status: Operational | Last Update: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;