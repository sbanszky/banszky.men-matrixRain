import React from 'react';
import { Activity, Wifi, Globe, Shield } from 'lucide-react';

export const NetworkStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
      {[
        { icon: Activity, label: 'Network Status', value: 'Active', color: 'text-green-400' },
        { icon: Wifi, label: 'Connected Nodes', value: '2,547', color: 'text-blue-400' },
        { icon: Globe, label: 'Global Ping', value: '23ms', color: 'text-purple-400' },
        { icon: Shield, label: 'Security Level', value: 'Maximum', color: 'text-red-400' },
      ].map(({ icon: Icon, label, value, color }) => (
        <div key={label} className="bg-black/50 p-4 rounded-lg border border-[#00FF41]/30 backdrop-blur-sm">
          <Icon className={`w-6 h-6 ${color} mb-2`} />
          <p className="text-[#00FF41]/70 text-sm">{label}</p>
          <p className="text-[#00FF41] font-mono text-lg">{value}</p>
        </div>
      ))}
    </div>
  );
};