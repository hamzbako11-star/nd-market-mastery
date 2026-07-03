import { useState, useRef, useEffect } from 'react';
import { Play, RotateCcw, TrendingUp, TrendingDown, Eye, Check, Info, ExternalLink, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Candle {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

const GENERATED_CANDLES: Record<string, Record<string, Candle[]>> = {
  EURUSD: {
    '1H': [
      { time: '08:00', open: 1.0820, high: 1.0845, low: 1.0815, close: 1.0835, volume: 120 },
      { time: '09:00', open: 1.0835, high: 1.0840, low: 1.0822, close: 1.0825, volume: 150 },
      { time: '10:00', open: 1.0825, high: 1.0855, low: 1.0810, close: 1.0850, volume: 210 }, // Sweep low then high
      { time: '11:00', open: 1.0850, high: 1.0865, low: 1.0845, close: 1.0860, volume: 180 }, // BOS
      { time: '12:00', open: 1.0860, high: 1.0870, low: 1.0850, close: 1.0852, volume: 140 }, // Pullback
      { time: '13:00', open: 1.0852, high: 1.0858, low: 1.0835, close: 1.0840, volume: 160 }, // Liquidity Sweep
      { time: '14:00', open: 1.0840, high: 1.0868, low: 1.0838, close: 1.0865, volume: 280 }, // Reversal (CHoCH)
      { time: '15:00', open: 1.0865, high: 1.0895, low: 1.0860, close: 1.0890, volume: 320 }, // Institutional expansion
      { time: '16:00', open: 1.0890, high: 1.0910, low: 1.0885, close: 1.0905, volume: 220 },
      { time: '17:00', open: 1.0905, high: 1.0912, low: 1.0898, close: 1.0900, volume: 110 },
    ],
    '4H': [
      { time: 'Mon 04:00', open: 1.0780, high: 1.0810, low: 1.0770, close: 1.0805, volume: 450 },
      { time: 'Mon 08:00', open: 1.0805, high: 1.0825, low: 1.0795, close: 1.0815, volume: 520 },
      { time: 'Mon 12:00', open: 1.0815, high: 1.0850, low: 1.0810, close: 1.0842, volume: 780 },
      { time: 'Mon 16:00', open: 1.0842, high: 1.0848, low: 1.0812, close: 1.0820, volume: 610 },
      { time: 'Tue 00:00', open: 1.0820, high: 1.0835, low: 1.0815, close: 1.0830, volume: 320 },
      { time: 'Tue 04:00', open: 1.0830, high: 1.0845, low: 1.0825, close: 1.0840, volume: 410 },
      { time: 'Tue 08:00', open: 1.0840, high: 1.0895, low: 1.0835, close: 1.0885, volume: 920 }, // Expansion
      { time: 'Tue 12:00', open: 1.0885, high: 1.0920, low: 1.0875, close: 1.0915, volume: 1100 },
      { time: 'Tue 16:00', open: 1.0915, high: 1.0930, low: 1.0905, close: 1.0910, volume: 850 },
      { time: 'Wed 00:00', open: 1.0910, high: 1.0918, low: 1.0895, close: 1.0902, volume: 430 },
    ]
  },
  GBPUSD: {
    '1H': [
      { time: '08:00', open: 1.2650, high: 1.2680, low: 1.2645, close: 1.2670, volume: 180 },
      { time: '09:00', open: 1.2670, high: 1.2675, low: 1.2650, close: 1.2655, volume: 190 },
      { time: '10:00', open: 1.2655, high: 1.2690, low: 1.2630, close: 1.2685, volume: 290 },
      { time: '11:00', open: 1.2685, high: 1.2710, low: 1.2680, close: 1.2705, volume: 240 },
      { time: '12:00', open: 1.2705, high: 1.2715, low: 1.2690, close: 1.2692, volume: 160 },
      { time: '13:00', open: 1.2692, high: 1.2698, low: 1.2670, close: 1.2675, volume: 220 },
      { time: '14:00', open: 1.2675, high: 1.2708, low: 1.2665, close: 1.2702, volume: 340 },
      { time: '15:00', open: 1.2702, high: 1.2745, low: 1.2695, close: 1.2738, volume: 460 },
      { time: '16:00', open: 1.2738, high: 1.2760, low: 1.2730, close: 1.2755, volume: 310 },
      { time: '17:00', open: 1.2755, high: 1.2762, low: 1.2745, close: 1.2748, volume: 150 },
    ],
    '4H': [
      { time: 'Mon 04:00', open: 1.2580, high: 1.2620, low: 1.2570, close: 1.2610, volume: 550 },
      { time: 'Mon 08:00', open: 1.2610, high: 1.2635, low: 1.2595, close: 1.2625, volume: 620 },
      { time: 'Mon 12:00', open: 1.2625, high: 1.2665, low: 1.2620, close: 1.2655, volume: 880 },
      { time: 'Mon 16:00', open: 1.2655, high: 1.2660, low: 1.2622, close: 1.2630, volume: 710 },
      { time: 'Tue 00:00', open: 1.2630, high: 1.2645, low: 1.2620, close: 1.2640, volume: 420 },
      { time: 'Tue 04:00', open: 1.2640, high: 1.2655, low: 1.2635, close: 1.2650, volume: 510 },
      { time: 'Tue 08:00', open: 1.2650, high: 1.2715, low: 1.2640, close: 1.2705, volume: 1050 },
      { time: 'Tue 12:00', open: 1.2705, high: 1.2750, low: 1.2690, close: 1.2740, volume: 1240 },
      { time: 'Tue 16:00', open: 1.2740, high: 1.2765, low: 1.2730, close: 1.2735, volume: 950 },
      { time: 'Wed 00:00', open: 1.2735, high: 1.2742, low: 1.2715, close: 1.2720, volume: 530 },
    ]
  },
  XAUUSD: {
    '1H': [
      { time: '08:00', open: 2320.5, high: 2328.0, low: 2318.0, close: 2325.2, volume: 380 },
      { time: '09:00', open: 2325.2, high: 2327.5, low: 2321.0, close: 2322.0, volume: 420 },
      { time: '10:00', open: 2322.0, high: 2332.0, low: 2315.0, close: 2330.5, volume: 610 },
      { time: '11:00', open: 2330.5, high: 2338.2, low: 2328.0, close: 2336.0, volume: 540 },
      { time: '12:00', open: 2336.0, high: 2339.5, low: 2332.0, close: 2333.5, volume: 430 },
      { time: '13:00', open: 2333.5, high: 2335.0, low: 2325.0, close: 2327.2, volume: 490 },
      { time: '14:00', open: 2327.2, high: 2338.0, low: 2324.5, close: 2336.5, volume: 720 },
      { time: '15:00', open: 2336.5, high: 2352.0, low: 2333.0, close: 2348.5, volume: 980 },
      { time: '16:00', open: 2348.5, high: 2358.0, low: 2345.5, close: 2355.0, volume: 820 },
      { time: '17:00', open: 2355.0, high: 2359.5, low: 2352.0, close: 2353.2, volume: 450 },
    ],
    '4H': [
      { time: 'Mon 04:00', open: 2305.0, high: 2318.0, low: 2301.0, close: 2314.5, volume: 1100 },
      { time: 'Mon 08:00', open: 2314.5, high: 2322.0, low: 2310.5, close: 2318.0, volume: 1250 },
      { time: 'Mon 12:00', open: 2318.0, high: 2334.0, low: 2316.0, close: 2330.5, volume: 1950 },
      { time: 'Mon 16:00', open: 2330.5, high: 2333.0, low: 2320.0, close: 2322.2, volume: 1420 },
      { time: 'Tue 00:00', open: 2322.2, high: 2327.5, low: 2319.5, close: 2324.0, volume: 920 },
      { time: 'Tue 04:00', open: 2324.0, high: 2329.0, low: 2322.0, close: 2326.5, volume: 1150 },
      { time: 'Tue 08:00', open: 2326.5, high: 2348.5, low: 2324.0, close: 2344.0, volume: 2200 },
      { time: 'Tue 12:00', open: 2344.0, high: 2362.5, low: 2340.0, close: 2358.5, volume: 2850 },
      { time: 'Tue 16:00', open: 2358.5, high: 2368.0, low: 2353.0, close: 2356.2, volume: 1900 },
      { time: 'Wed 00:00', open: 2356.2, high: 2359.5, low: 2350.5, close: 2351.0, volume: 1050 },
    ]
  }
};

const SIMULATION_STEPS: Candle[] = [
  { time: 'Sim +1H', open: 1.0900, high: 1.0925, low: 1.0890, close: 1.0915, volume: 240 },
  { time: 'Sim +2H', open: 1.0915, high: 1.0940, low: 1.0910, close: 1.0932, volume: 260 },
  { time: 'Sim +3H', open: 1.0932, high: 1.0965, low: 1.0925, close: 1.0955, volume: 380 }, // Hit take profit for longs!
  { time: 'Sim +4H', open: 1.0955, high: 1.0960, low: 1.0870, close: 1.0875, volume: 450 }, // Massive reversal down, hit SL for late longs or hit TP for shorts!
  { time: 'Sim +5H', open: 1.0875, high: 1.0880, low: 1.0840, close: 1.0848, volume: 320 },
];

export default function InteractiveChart({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [viewMode, setViewMode] = useState<'simulation' | 'tradingview'>('simulation');
  const [pair, setPair] = useState<'EURUSD' | 'GBPUSD' | 'XAUUSD'>('EURUSD');
  const [timeframe, setTimeframe] = useState<'1H' | '4H'>('1H');
  const [tool, setTool] = useState<'none' | 'long' | 'short'>('none');
  const [candles, setCandles] = useState<Candle[]>(GENERATED_CANDLES.EURUSD['1H']);
  const [simStep, setSimStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simResult, setSimResult] = useState<'win' | 'loss' | 'none'>('none');
  
  // Custom drag state for SL and TP levels in pixels or values
  const [entryPrice, setEntryPrice] = useState<number>(1.0860);
  const [stopLoss, setStopLoss] = useState<number>(1.0835);
  const [takeProfit, setTakeProfit] = useState<number>(1.0915);
  const [activePreset, setActivePreset] = useState<'long' | 'short' | 'none'>('none');

  // Sync candle data on pair/timeframe change
  useEffect(() => {
    setCandles(GENERATED_CANDLES[pair][timeframe]);
    setSimStep(0);
    setIsSimulating(false);
    setSimResult('none');
    
    // Set appropriate values based on pair
    if (pair === 'EURUSD') {
      setEntryPrice(1.0860);
      setStopLoss(1.0835);
      setTakeProfit(1.0915);
    } else if (pair === 'GBPUSD') {
      setEntryPrice(1.2700);
      setStopLoss(1.2665);
      setTakeProfit(1.2770);
    } else {
      setEntryPrice(2335.0);
      setStopLoss(2323.0);
      setTakeProfit(2358.0);
    }
    setActivePreset('none');
  }, [pair, timeframe]);

  // Handle setting predefined positions
  const handleSetupTrade = (type: 'long' | 'short') => {
    setActivePreset(type);
    if (type === 'long') {
      if (pair === 'EURUSD') {
        setEntryPrice(1.0860);
        setStopLoss(1.0835);
        setTakeProfit(1.0925);
      } else if (pair === 'GBPUSD') {
        setEntryPrice(1.2700);
        setStopLoss(1.2660);
        setTakeProfit(1.2780);
      } else {
        setEntryPrice(2335.0);
        setStopLoss(2320.0);
        setTakeProfit(2360.0);
      }
    } else {
      // Short
      if (pair === 'EURUSD') {
        setEntryPrice(1.0900);
        setStopLoss(1.0930);
        setTakeProfit(1.0840);
      } else if (pair === 'GBPUSD') {
        setEntryPrice(1.2750);
        setStopLoss(1.2790);
        setTakeProfit(1.2670);
      } else {
        setEntryPrice(2353.0);
        setStopLoss(2365.0);
        setTakeProfit(2325.0);
      }
    }
    setSimResult('none');
    setSimStep(0);
    setCandles(GENERATED_CANDLES[pair][timeframe]);
  };

  const playSimulation = () => {
    if (activePreset === 'none') {
      alert("Please select a Long or Short Trade Position Setup first below the chart!");
      return;
    }
    setIsSimulating(true);
    setSimResult('none');
    setSimStep(0);
    
    // Scale simulation candles relative to the asset base
    const baseAssetCandles = GENERATED_CANDLES[pair][timeframe];
    setCandles(baseAssetCandles);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      setSimStep(currentStep);

      // Create a simulated candle based on pair scaling
      let multiplier = 1;
      if (pair === 'GBPUSD') multiplier = 1.15;
      else if (pair === 'XAUUSD') multiplier = 2100;

      const baseSimCandle = SIMULATION_STEPS[currentStep - 1];
      let newCandle: Candle;
      
      if (pair === 'XAUUSD') {
        // Gold simulation candles
        const diffOpen = baseSimCandle.open - 1.0900;
        const diffHigh = baseSimCandle.high - 1.0900;
        const diffLow = baseSimCandle.low - 1.0900;
        const diffClose = baseSimCandle.close - 1.0900;
        newCandle = {
          time: `Sim +${currentStep}H`,
          open: 2350 + (diffOpen * 400),
          high: 2350 + (diffHigh * 400),
          low: 2350 + (diffLow * 400),
          close: 2350 + (diffClose * 400),
          volume: baseSimCandle.volume * 4
        };
      } else if (pair === 'GBPUSD') {
        const diffOpen = baseSimCandle.open - 1.0900;
        const diffHigh = baseSimCandle.high - 1.0900;
        const diffLow = baseSimCandle.low - 1.0900;
        const diffClose = baseSimCandle.close - 1.0900;
        newCandle = {
          time: `Sim +${currentStep}H`,
          open: 1.2740 + (diffOpen * 1.1),
          high: 1.2740 + (diffHigh * 1.1),
          low: 1.2740 + (diffLow * 1.1),
          close: 1.2740 + (diffClose * 1.1),
          volume: baseSimCandle.volume * 1.2
        };
      } else {
        newCandle = { ...baseSimCandle };
      }

      setCandles(prev => [...prev, newCandle]);

      // Check hits
      const checkTradeOutcome = (currentCandle: Candle) => {
        if (activePreset === 'long') {
          // If high reaches takeProfit
          if (currentCandle.high >= takeProfit) {
            setSimResult('win');
            playSythSound(true);
            clearInterval(interval);
            setIsSimulating(false);
            return true;
          }
          // If low reaches stopLoss
          if (currentCandle.low <= stopLoss) {
            setSimResult('loss');
            playSythSound(false);
            clearInterval(interval);
            setIsSimulating(false);
            return true;
          }
        } else if (activePreset === 'short') {
          // If low reaches takeProfit (downwards)
          if (currentCandle.low <= takeProfit) {
            setSimResult('win');
            playSythSound(true);
            clearInterval(interval);
            setIsSimulating(false);
            return true;
          }
          // If high reaches stopLoss (upwards)
          if (currentCandle.high >= stopLoss) {
            setSimResult('loss');
            playSythSound(false);
            clearInterval(interval);
            setIsSimulating(false);
            return true;
          }
        }
        return false;
      };

      const ended = checkTradeOutcome(newCandle);

      if (!ended && currentStep >= 5) {
        clearInterval(interval);
        setIsSimulating(false);
        // evaluate final exit
        const finalClose = newCandle.close;
        if (activePreset === 'long') {
          setSimResult(finalClose >= entryPrice ? 'win' : 'loss');
          playSythSound(finalClose >= entryPrice);
        } else {
          setSimResult(finalClose <= entryPrice ? 'win' : 'loss');
          playSythSound(finalClose <= entryPrice);
        }
      }
    }, 1200);
  };

  const playSythSound = (isWin: boolean) => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      if (isWin) {
        // Positive chord
        const notes = [261.63, 329.63, 392.00, 523.25]; // C major
        notes.forEach((freq, i) => {
          const osc = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          osc.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
          osc.type = 'sine';
          gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8 + (i * 0.1));
          osc.start(audioCtx.currentTime + (i * 0.05));
          osc.stop(audioCtx.currentTime + 1.0 + (i * 0.1));
        });
      } else {
        // Sad buzzer
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(120, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(80, audioCtx.currentTime + 0.5);
        osc.type = 'sawtooth';
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.6);
      }
    } catch (e) {
      console.log('AudioContext blocked or unsupported', e);
    }
  };

  const handleReset = () => {
    setCandles(GENERATED_CANDLES[pair][timeframe]);
    setSimStep(0);
    setSimResult('none');
    setIsSimulating(false);
  };

  // Compute SVG dimensions and mapping values
  const allHighs = candles.map(c => c.high);
  const allLows = candles.map(c => c.low);
  const maxPrice = Math.max(...allHighs, activePreset !== 'none' ? Math.max(takeProfit, stopLoss, entryPrice) : -Infinity) * 1.002;
  const minPrice = Math.min(...allLows, activePreset !== 'none' ? Math.min(takeProfit, stopLoss, entryPrice) : Infinity) * 0.998;
  const priceRange = maxPrice - minPrice;

  const svgWidth = 800;
  const svgHeight = 400;

  const getX = (index: number) => {
    return (index * (svgWidth / (candles.length + 1))) + 50;
  };

  const getY = (price: number) => {
    return svgHeight - ((price - minPrice) / priceRange) * (svgHeight - 80) - 40;
  };

  // Calculate Risk Reward
  const risk = Math.abs(entryPrice - stopLoss);
  const reward = Math.abs(takeProfit - entryPrice);
  const riskRewardRatio = (reward / (risk || 1)).toFixed(2);

  // TradingView widget parameters
  const tvSymbol = pair === 'EURUSD' ? 'OANDA:EURUSD' : pair === 'GBPUSD' ? 'OANDA:GBPUSD' : 'OANDA:XAUUSD';
  const tvInterval = timeframe === '1H' ? '60' : '240';

  return (
    <div id="interactive-chart-section" className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl p-4 md:p-6 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow background */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-900/5 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-800 mb-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-neutral-500 tracking-wider">ND TERMINAL v4.12</span>
          <div className="px-2 py-0.5 rounded bg-blue-950 border border-blue-900/50 text-[10px] text-blue-400 font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            LIVE SIMULATOR
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Pair Select */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-0.5 flex">
            {(['EURUSD', 'GBPUSD', 'XAUUSD'] as const).map(p => (
              <button
                key={p}
                id={`pair-select-${p.toLowerCase()}`}
                onClick={() => !isSimulating && setPair(p)}
                disabled={isSimulating}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-all ${
                  pair === p
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-neutral-400 hover:text-white disabled:opacity-50'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Timeframe Select */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-0.5 flex">
            {(['1H', '4H'] as const).map(tf => (
              <button
                key={tf}
                id={`tf-select-${tf.toLowerCase()}`}
                onClick={() => !isSimulating && setTimeframe(tf)}
                disabled={isSimulating}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-all ${
                  timeframe === tf
                    ? 'bg-neutral-800 text-white shadow'
                    : 'text-neutral-400 hover:text-white disabled:opacity-50'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mode Tab Switcher */}
      <div className="flex flex-wrap gap-2 pb-4 mb-4 border-b border-neutral-800/60">
        <button
          id="mode-tab-simulation"
          onClick={() => setViewMode('simulation')}
          className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all ${
            viewMode === 'simulation'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
          }`}
        >
          📊 Order Flow Sandbox
        </button>
        <button
          id="mode-tab-tradingview"
          onClick={() => setViewMode('tradingview')}
          className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all ${
            viewMode === 'tradingview'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
          }`}
        >
          📈 TradingView Real Live
        </button>
      </div>

      {/* Main Graph Grid */}
      <div className={`relative border rounded-xl overflow-hidden backdrop-blur-sm ${
        theme === 'dark' ? 'bg-neutral-950/80 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
      }`}>
        {viewMode === 'simulation' ? (
          <>
            {/* Sim Result Overlays */}
        <AnimatePresence>
          {simResult !== 'none' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-neutral-950/85 backdrop-blur-md"
            >
              <div className={`p-6 rounded-2xl border flex flex-col items-center text-center max-w-sm shadow-2xl ${
                simResult === 'win'
                  ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-100'
                  : 'bg-red-950/60 border-red-500/50 text-red-100'
              }`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                  simResult === 'win' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {simResult === 'win' ? (
                    <TrendingUp size={32} className="stroke-[2.5]" />
                  ) : (
                    <TrendingDown size={32} className="stroke-[2.5]" />
                  )}
                </div>
                <h3 className="text-xl font-bold font-sans tracking-tight mb-2">
                  {simResult === 'win' ? 'TAKE PROFIT HIT!' : 'STOP LOSS HIT'}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4 font-sans">
                  {simResult === 'win'
                    ? `Brilliant execution! Price swept structural liquidity and filled your TP zone, achieving a stellar +${riskRewardRatio}R return.`
                    : `Price breached the invalidation level. Losses are structured constraints in high-probability trading models.`
                  }
                </p>
                <div className="flex gap-2 w-full">
                  <button
                    id="sim-result-reset-btn"
                    onClick={handleReset}
                    className="flex-1 py-2 px-4 rounded-lg text-xs font-medium bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 transition-all flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw size={14} /> Close Output
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Floating Stats inside Chart */}
        <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-400">
            <div>O: <span className="text-emerald-500">{candles[candles.length - 1]?.open.toFixed(pair === 'XAUUSD' ? 1 : 4)}</span></div>
            <div>H: <span className="text-emerald-500">{candles[candles.length - 1]?.high.toFixed(pair === 'XAUUSD' ? 1 : 4)}</span></div>
            <div>L: <span className="text-red-500">{candles[candles.length - 1]?.low.toFixed(pair === 'XAUUSD' ? 1 : 4)}</span></div>
            <div>C: <span className="text-emerald-500">{candles[candles.length - 1]?.close.toFixed(pair === 'XAUUSD' ? 1 : 4)}</span></div>
          </div>
          <div className="text-[10px] font-mono text-neutral-500 hidden md:block">
            Indicators: Volume (20, SMA) • MACD (12, 26, 9) • ND Liquidity Sweep
          </div>
        </div>

        {/* SVG CANDLESTICK GRAPH */}
        <div className="w-full h-[400px]">
          <svg className="w-full h-full select-none" viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="none">
            
            {/* Horizontal Grid lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const y = 40 + i * ((svgHeight - 80) / 5);
              const priceVal = maxPrice - (i * (priceRange / 5));
              return (
                <g key={i}>
                  <line
                    x1="40"
                    y1={y}
                    x2={svgWidth - 20}
                    y2={y}
                    stroke="#1f1f1f"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <text
                    x={svgWidth - 10}
                    y={y + 4}
                    fill="#525252"
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    {priceVal.toFixed(pair === 'XAUUSD' ? 1 : 4)}
                  </text>
                </g>
              );
            })}

            {/* Vertical Time Lines */}
            {candles.map((candle, idx) => {
              if (idx % 2 !== 0) return null;
              const x = getX(idx);
              return (
                <g key={idx}>
                  <line
                    x1={x}
                    y1="40"
                    x2={x}
                    y2={svgHeight - 40}
                    stroke="#161616"
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={svgHeight - 15}
                    fill="#525252"
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {candle.time}
                  </text>
                </g>
              );
            })}

            {/* DRAW TRADE POSITION SETUP SL & TP BOXES */}
            {activePreset !== 'none' && (
              <g>
                {/* Take Profit Area (Green box) */}
                {activePreset === 'long' ? (
                  <rect
                    x="50"
                    y={getY(takeProfit)}
                    width={svgWidth - 100}
                    height={Math.abs(getY(takeProfit) - getY(entryPrice))}
                    fill="rgba(16, 185, 129, 0.08)"
                    stroke="rgba(16, 185, 129, 0.4)"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                ) : (
                  <rect
                    x="50"
                    y={getY(entryPrice)}
                    width={svgWidth - 100}
                    height={Math.abs(getY(entryPrice) - getY(takeProfit))}
                    fill="rgba(16, 185, 129, 0.08)"
                    stroke="rgba(16, 185, 129, 0.4)"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                )}

                {/* Stop Loss Area (Red box) */}
                {activePreset === 'long' ? (
                  <rect
                    x="50"
                    y={getY(entryPrice)}
                    width={svgWidth - 100}
                    height={Math.abs(getY(entryPrice) - getY(stopLoss))}
                    fill="rgba(239, 68, 68, 0.08)"
                    stroke="rgba(239, 68, 68, 0.4)"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                ) : (
                  <rect
                    x="50"
                    y={getY(stopLoss)}
                    width={svgWidth - 100}
                    height={Math.abs(getY(stopLoss) - getY(entryPrice))}
                    fill="rgba(239, 68, 68, 0.08)"
                    stroke="rgba(239, 68, 68, 0.4)"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                )}

                {/* Level indicators labels on the right margin */}
                {/* Take Profit line and text */}
                <line x1="40" y1={getY(takeProfit)} x2={svgWidth - 10} y2={getY(takeProfit)} stroke="#10b981" strokeWidth="1.5" strokeDasharray="4" />
                <text x="55" y={getY(takeProfit) - 5} fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  TP: {takeProfit.toFixed(pair === 'XAUUSD' ? 1 : 4)}
                </text>

                {/* Entry Price line and text */}
                <line x1="40" y1={getY(entryPrice)} x2={svgWidth - 10} y2={getY(entryPrice)} stroke="#3b82f6" strokeWidth="2" />
                <text x="55" y={getY(entryPrice) - 5} fill="#3b82f6" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  ENTRY: {entryPrice.toFixed(pair === 'XAUUSD' ? 1 : 4)}
                </text>

                {/* Stop Loss line and text */}
                <line x1="40" y1={getY(stopLoss)} x2={svgWidth - 10} y2={getY(stopLoss)} stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4" />
                <text x="55" y={getY(stopLoss) + 12} fill="#ef4444" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  SL: {stopLoss.toFixed(pair === 'XAUUSD' ? 1 : 4)}
                </text>
              </g>
            )}

            {/* Candlestick drawing loop */}
            {candles.map((candle, idx) => {
              const x = getX(idx);
              const oY = getY(candle.open);
              const cY = getY(candle.close);
              const hY = getY(candle.high);
              const lY = getY(candle.low);
              
              const isBullish = candle.close >= candle.open;
              const candleColor = isBullish ? '#00C853' : '#FF1744';
              const bodyHeight = Math.max(1, Math.abs(oY - cY));
              const topBodyY = Math.min(oY, cY);

              return (
                <g key={idx} className="transition-all duration-300">
                  {/* Wick */}
                  <line
                    x1={x}
                    y1={hY}
                    x2={x}
                    y2={lY}
                    stroke={candleColor}
                    strokeWidth="1.5"
                  />
                  {/* Body */}
                  <rect
                    x={x - 6}
                    y={topBodyY}
                    width="12"
                    height={bodyHeight}
                    fill={isBullish ? 'rgba(0, 200, 83, 0.25)' : 'rgba(255, 23, 68, 0.25)'}
                    stroke={candleColor}
                    strokeWidth="1.5"
                    rx="1"
                  />
                </g>
              );
            })}

            {/* Drawing simulation entry highlight circles */}
            {activePreset !== 'none' && candles.length > GENERATED_CANDLES[pair][timeframe].length && (
              <g>
                {/* Visual line tracing simulated moves */}
                <circle
                  cx={getX(candles.length - 1)}
                  cy={getY(candles[candles.length - 1].close)}
                  r="5"
                  fill="#3b82f6"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  className="animate-ping"
                />
                <circle
                  cx={getX(candles.length - 1)}
                  cy={getY(candles[candles.length - 1].close)}
                  r="4"
                  fill="#3b82f6"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              </g>
            )}
          </svg>
        </div>
        </>
      ) : (
        /* TRADINGVIEW REAL CHART */
        <div className="w-full h-[400px] relative">
          <iframe
            title="TradingView Real-Time Chart"
            src={`https://s.tradingview.com/widgetembed/?symbol=${tvSymbol}&interval=${tvInterval}&theme=${theme}&style=1&timezone=Etc%2FUTC&studies=%5B%5D&locale=en`}
            className="w-full h-full border-0 absolute inset-0 bg-neutral-950"
            style={{ minHeight: '400px' }}
            allowFullScreen
          />
        </div>
      )}
    </div>

      {/* Trade Presets & Controls */}
      {viewMode === 'simulation' ? (
        <>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4 bg-neutral-900/60 p-4 border border-neutral-800 rounded-xl">
            {/* Preset Selectors */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase">1. Position Setup</span>
              <div className="flex gap-2">
                <button
                  id="trade-preset-long-btn"
                  onClick={() => handleSetupTrade('long')}
                  disabled={isSimulating}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    activePreset === 'long'
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-950/40'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:text-white disabled:opacity-50'
                  }`}
                >
                  <TrendingUp size={14} /> Buy Setup (Long)
                </button>
                <button
                  id="trade-preset-short-btn"
                  onClick={() => handleSetupTrade('short')}
                  disabled={isSimulating}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    activePreset === 'short'
                      ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-950/40'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:text-white disabled:opacity-50'
                  }`}
                >
                  <TrendingDown size={14} /> Sell Setup (Short)
                </button>
              </div>
            </div>

            {/* Trade Info display */}
            <div className="flex items-center justify-around border-y md:border-y-0 md:border-x border-neutral-800 py-2 md:py-0">
              <div className="text-center">
                <div className="text-[9px] font-mono text-neutral-500 tracking-wider uppercase">Risk-Reward</div>
                <div className="text-sm font-bold font-mono text-white">
                  {activePreset !== 'none' ? `1 : ${riskRewardRatio}` : '—'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-[9px] font-mono text-neutral-500 tracking-wider uppercase">Risk Model</div>
                <div className="text-sm font-bold font-mono text-emerald-400">
                  {activePreset !== 'none' ? 'Strict 1.0%' : '—'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-[9px] font-mono text-neutral-500 tracking-wider uppercase">Setup Quality</div>
                <div className="text-sm font-bold font-mono text-blue-400">
                  {activePreset !== 'none' ? 'A+ Institutional' : '—'}
                </div>
              </div>
            </div>

            {/* Simulation Actions */}
            <div className="flex gap-2">
              <button
                id="run-trade-sim-btn"
                onClick={playSimulation}
                disabled={isSimulating || activePreset === 'none'}
                className="flex-1 py-2.5 px-4 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white border border-blue-500 hover:border-blue-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-950/50 flex items-center justify-center gap-2"
              >
                <Play size={14} className={isSimulating ? 'animate-pulse' : ''} />
                {isSimulating ? 'Simulating Market...' : 'Run Trade Simulation'}
              </button>
              
              <button
                id="reset-trade-sim-btn"
                onClick={handleReset}
                disabled={isSimulating}
                className="p-2.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition-all disabled:opacity-50 flex items-center justify-center"
                title="Reset simulation"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {/* Concept Hint Footer */}
          <div className="mt-3 flex items-start gap-2 bg-blue-950/20 border border-blue-900/30 p-3 rounded-lg text-[11px] text-blue-300 leading-relaxed font-sans">
            <Info size={14} className="shrink-0 text-blue-400 mt-0.5" />
            <div>
              {activePreset === 'none' ? (
                <span><strong>Pro Lesson:</strong> Select a Buy or Sell setup above to reveal institutional concepts. Note how the Buy position aligns exactly inside a high-probability demand zone, and the Sell position aligns with a supply block sweep.</span>
              ) : activePreset === 'long' ? (
                <span><strong>Long Context:</strong> The entry is placed immediately after an liquidity sweep (sweeping equal lows) followed by a strong bullish Change of Character (CHoCH). Stop Loss sits strictly below structural invalidation. Risk-to-Reward is optimized for high probability.</span>
              ) : (
                <span><strong>Short Context:</strong> The entry targets premium supply blocks after price completes a major institutional sweep of equal highs. This captures high-probability downside order flow directly into Fair Value Gaps (FVG) resting below.</span>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* TradingView Info Panel */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4 bg-neutral-900/60 p-4 border border-neutral-800 rounded-xl">
            <div className="flex flex-col gap-1 md:col-span-2">
              <span className="text-[10px] font-mono tracking-wider text-blue-500 font-bold uppercase">1. Live Market Feed</span>
              <p className="text-xs leading-relaxed text-neutral-400">
                You are connected directly to the institutional feed of <strong>{pair}</strong> ({timeframe} Timeframe). Use TradingView's professional indicators, order blocks, and drawing tools to map live liquidity setups in real-time.
              </p>
            </div>
            <div className="flex justify-end gap-2 w-full md:col-span-1">
              <a
                href={`https://www.tradingview.com/symbols/${tvSymbol}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto text-center py-2.5 px-4 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white border border-blue-500 hover:border-blue-400 transition-all shadow-lg flex items-center justify-center gap-1.5"
              >
                Analyze on TradingView <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Educational Note */}
          <div className="mt-3 flex items-start gap-2 bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-lg text-[11px] text-emerald-300 leading-relaxed font-sans">
            <Info size={14} className="shrink-0 text-emerald-400 mt-0.5" />
            <div>
              <span><strong>TradingView Mastery Tip:</strong> Use the live chart tools to spot <i>Fair Value Gaps (FVG)</i>, <i>Change of Character (CHoCH)</i>, and <i>Market Structure Break (MSB)</i>. The live market offers infinite opportunities when aligned with disciplined risk management models.</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
