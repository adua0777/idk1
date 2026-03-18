import React from 'react';
import { motion } from 'motion/react';
import { MOCK_CHART_DATA } from '../constants';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend
} from 'recharts';

const Charts = () => {
  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Biểu đồ Chỉ số</h2>
          <p className="text-slate-400">Theo dõi diễn biến các chỉ số BOD, COD và pH trong ngày.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* BOD & COD Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-6 h-[450px]"
          >
            <h3 className="font-display font-bold text-xl text-white mb-6">Diễn biến BOD & COD (mg/L)</h3>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={MOCK_CHART_DATA}>
                <defs>
                  <linearGradient id="colorBod" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCod" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend iconType="circle" />
                <Area type="monotone" dataKey="bod" name="BOD" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorBod)" />
                <Area type="monotone" dataKey="cod" name="COD" stroke="#7c3aed" strokeWidth={3} fillOpacity={1} fill="url(#colorCod)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* pH Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-6 h-[450px]"
          >
            <h3 className="font-display font-bold text-xl text-white mb-6">Biến thiên độ pH</h3>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={MOCK_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis domain={[6, 8]} stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
                <Legend iconType="circle" />
                <Line type="stepAfter" dataKey="ph" name="pH" stroke="#f59e0b" strokeWidth={4} dot={{ r: 6, fill: '#f59e0b', strokeWidth: 2, stroke: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'BOD Trung bình', value: '270 mg/L', trend: '+5%', color: 'text-env-green' },
            { label: 'COD Trung bình', value: '490 mg/L', trend: '-2%', color: 'text-env-purple' },
            { label: 'pH Trung bình', value: '7.05', trend: 'Ổn định', color: 'text-amber-500' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h4 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h4>
                <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-slate-500">{stat.trend}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Charts;
