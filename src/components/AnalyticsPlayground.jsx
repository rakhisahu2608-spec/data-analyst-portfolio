import React, { useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import {
  BarChart3, TrendingUp, Filter, RefreshCw, AlertCircle,
  Activity, DollarSign, Clock, CheckCircle
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AnalyticsPlayground() {
  const { playgroundData } = portfolioData;
  const [activeMetric, setActiveMetric] = useState('revenue');
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [refreshKey, setRefreshKey] = useState(0);

  // Filter multiplier based on selected segment
  const segmentMultiplier = selectedSegment === 'all' ? 1.0 : selectedSegment === 'enterprise' ? 0.65 : 0.45;

  const dynamicChartData = playgroundData.monthlyMetrics.map((item) => ({
    ...item,
    revenue: Math.round(item.revenue * segmentMultiplier),
    claims: Math.round(item.claims * (selectedSegment === 'enterprise' ? 0.6 : 1.1)),
    conversion: parseFloat((item.conversion * (selectedSegment === 'enterprise' ? 1.25 : 0.95)).toFixed(1))
  }));

  const metricConfigs = {
    revenue: {
      label: "Gross Revenue Trend ($)",
      dataKey: "revenue",
      color: "#10b981",
      fill: "url(#colorRevenue)",
      formatValue: (v) => `$${v.toLocaleString()}`,
      insight: "Consistent MoM acceleration driven by repeat customer cohort expansion."
    },
    claims: {
      label: "Insurance Claims Volume",
      dataKey: "claims",
      color: "#06b6d4",
      fill: "url(#colorClaims)",
      formatValue: (v) => `${v} claims`,
      insight: "Claim frequency down 38% after implementing real-time risk score gating."
    },
    conversion: {
      label: "Funnel Conversion Rate (%)",
      dataKey: "conversion",
      color: "#8b5cf6",
      fill: "url(#colorConversion)",
      formatValue: (v) => `${v}%`,
      insight: "Checkout redesign and form simplification yielded a +2.0% absolute lift."
    }
  };

  const currentConfig = metricConfigs[activeMetric];

  // Custom tooltip for high-tech aesthetic
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-950/95 border border-slate-700/80 p-3 rounded-lg shadow-xl backdrop-blur-md font-mono text-xs">
          <p className="text-slate-400 mb-1">{`Period: ${label} 2026`}</p>
          <p className="font-bold text-emerald-400">
            {`${currentConfig.label}: `}
            <span className="text-white">{currentConfig.formatValue(payload[0].value)}</span>
          </p>
          <p className="text-[10px] text-slate-500 mt-1">Status: Confirmed telemetry</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="analytics-playground" className="py-24 relative bg-[#080c14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="text-slate-500">//</span>
              <span>03. EXECUTIVE_BI_SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Interactive Analytics Dashboard
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>LIVE INTERACTIVE QUERY ENGINE</span>
          </div>
        </div>

        {/* Dashboard Container */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
          
          {/* Dashboard Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            
            {/* Metric Selectors */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-500 mr-1 hidden sm:inline">METRIC:</span>
              <button
                onClick={() => setActiveMetric('revenue')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeMetric === 'revenue'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                REVENUE TREND
              </button>
              <button
                onClick={() => setActiveMetric('claims')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeMetric === 'claims'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                CLAIMS VOLUME
              </button>
              <button
                onClick={() => setActiveMetric('conversion')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeMetric === 'conversion'
                    ? 'bg-purple-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                CONVERSION RATE
              </button>
            </div>

            {/* Segment Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={selectedSegment}
                onChange={(e) => setSelectedSegment(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500"
              >
                <option value="all">Segment: All Demographics</option>
                <option value="enterprise">Segment: Enterprise &amp; B2B</option>
                <option value="consumer">Segment: Direct Consumers</option>
              </select>
            </div>
          </div>

          {/* Quick KPI Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Total Calculated Revenue</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white">
                {selectedSegment === 'all' ? '$482,400' : selectedSegment === 'enterprise' ? '$313,560' : '$217,080'}
              </div>
              <div className="text-[11px] font-mono text-emerald-400 mt-1">
                +26.8% vs Previous Period
              </div>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Claim Cycle Time (Avg)</span>
                <Clock className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white">
                2.4 Days
              </div>
              <div className="text-[11px] font-mono text-cyan-400 mt-1">
                -38% Resolution Latency
              </div>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Funnel Conversion</span>
                <TrendingUp className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white">
                {selectedSegment === 'enterprise' ? '6.1%' : '4.85%'}
              </div>
              <div className="text-[11px] font-mono text-purple-400 mt-1">
                +1.6% Optimization Lift
              </div>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Data Integrity Check</span>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white">
                99.9%
              </div>
              <div className="text-[11px] font-mono text-emerald-400 mt-1">
                Zero Schema Drifts Detected
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Primary Time-Series Chart */}
            <div className="lg:col-span-8 bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentConfig.color }} />
                  <span className="text-xs font-mono text-slate-300 font-semibold uppercase">
                    {currentConfig.label}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Granularity: Monthly Aggregation
                </span>
              </div>

              {/* Area Chart Container */}
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dynamicChartData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                      </linearGradient>
                      <linearGradient id="colorClaims" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.0}/>
                      </linearGradient>
                      <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="month"
                      stroke="#475569"
                      tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#475569"
                      tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey={currentConfig.dataKey}
                      stroke={currentConfig.color}
                      strokeWidth={2.5}
                      fill={currentConfig.fill}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Data Story Insight Tag */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <AlertCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>
                  <strong className="text-slate-200">Key Analyst Insight:</strong> {currentConfig.insight}
                </span>
              </div>
            </div>

            {/* Secondary Channel Distribution */}
            <div className="lg:col-span-4 bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-slate-300 font-semibold mb-1 uppercase">
                  Revenue Share by Channel
                </div>
                <div className="text-[11px] font-mono text-slate-500 mb-6">
                  Cross-Segment Attribution
                </div>

                <div className="space-y-4">
                  {playgroundData.categoryShare.map((cat, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-300">{cat.name}</span>
                        <span className="text-slate-400 font-bold">{cat.value}%</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${cat.value}%`,
                            backgroundColor: cat.color
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-500">
                  Calculated using multi-touch attribution &amp; SQL window partition queries.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
