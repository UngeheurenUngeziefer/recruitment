import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Users, Building2, Globe, MonitorSmartphone, BarChart3,
  Video, Group, ChevronRight, ChevronLeft, Check, Clock,
  DollarSign, Zap, ArrowRight, X
} from "lucide-react";

// ── Pricing config ──────────────────────────────────────────────
const BASE_PRICE = { B2B: 120, B2C: 45 };
const METHOD_MULTIPLIER = {
  interviews: 1.8,
  surveys: 1.0,
  usability: 2.0,
  focus_groups: 2.4,
};
const COUNTRY_SURCHARGE = { 1: 0, 2: 0.12, 3: 0.22 };
const TIMELINE = {
  interviews:    { base: 48, perParticipant: 4 },
  surveys:       { base: 12, perParticipant: 1 },
  usability:     { base: 48, perParticipant: 5 },
  focus_groups:  { base: 72, perParticipant: 3 },
};

const COUNTRIES = [
  "United States","United Kingdom","Germany","France","Netherlands","Australia",
  "Canada","Japan","Brazil","India","Singapore","UAE","Sweden","Denmark","Poland",
  "Spain","Italy","Mexico","South Korea","Nigeria",
];

const METHODS = [
  { id: "interviews",   label: "User Interviews",   icon: Video,            desc: "1-on-1 in-depth sessions" },
  { id: "surveys",      label: "Surveys",            icon: BarChart3,        desc: "Quantitative data at scale" },
  { id: "usability",    label: "Usability Tests",    icon: MonitorSmartphone,desc: "Task-based UX sessions" },
  { id: "focus_groups", label: "Focus Groups",       icon: Group,            desc: "Group discussions (4–6 people)" },
];

const PARTICIPANT_OPTIONS = [5, 10, 15, 20, 30, 50];

// ── Step indicators ──────────────────────────────────────────────
const STEPS = ["Respondent Type", "Participants", "Countries", "Method"];

function StepDot({ index, current, completed }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
          completed
            ? "bg-blue-600 border-blue-600 text-white"
            : current
            ? "bg-white border-blue-600 text-blue-600"
            : "bg-white border-gray-200 text-gray-400"
        }`}
      >
        {completed ? <Check className="w-4 h-4" /> : index + 1}
      </div>
      <span className={`text-[10px] font-medium hidden sm:block ${current ? "text-blue-600" : "text-gray-400"}`}>
        {STEPS[index]}
      </span>
    </div>
  );
}

// ── Live estimate sidebar ────────────────────────────────────────
function LiveEstimate({ state }) {
  const { price, timeline, isComplete } = useMemo(() => {
    const { type, participants, countries, method } = state;
    if (!type || !participants || !method || countries.length === 0) {
      return { price: null, timeline: null, isComplete: false };
    }
    const base = BASE_PRICE[type] * participants;
    const withMethod = base * METHOD_MULTIPLIER[method];
    const withCountries = withMethod * (1 + COUNTRY_SURCHARGE[Math.min(countries.length, 3)]);
    const t = TIMELINE[method];
    const hours = t.base + t.perParticipant * participants;
    return {
      price: Math.round(withCountries / 10) * 10,
      timeline: hours < 48 ? `${hours}h` : `${Math.round(hours / 24)} days`,
      isComplete: true,
    };
  }, [state]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 space-y-4">
      <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Live Estimate</p>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <DollarSign className="w-4 h-4 text-blue-500" />
            Estimated cost
          </div>
          <span className={`text-lg font-bold ${isComplete ? "text-gray-900" : "text-gray-300"}`}>
            {isComplete ? `$${price.toLocaleString()}` : "—"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4 text-blue-500" />
            Est. timeline
          </div>
          <span className={`text-lg font-bold ${isComplete ? "text-gray-900" : "text-gray-300"}`}>
            {isComplete ? timeline : "—"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users className="w-4 h-4 text-blue-500" />
            Participants
          </div>
          <span className={`text-sm font-semibold ${state.participants ? "text-gray-900" : "text-gray-300"}`}>
            {state.participants || "—"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Globe className="w-4 h-4 text-blue-500" />
            Countries
          </div>
          <span className={`text-sm font-semibold ${state.countries.length ? "text-gray-900" : "text-gray-300"}`}>
            {state.countries.length || "—"}
          </span>
        </div>
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-3 border-t border-blue-100"
        >
          <div className="flex items-center gap-1.5 text-xs text-blue-700">
            <Zap className="w-3.5 h-3.5" />
            <span className="font-medium">First respondents contacted within 1 hour of launch</span>
          </div>
        </motion.div>
      )}

      {!isComplete && (
        <p className="text-xs text-gray-400 pt-1">
          Complete all steps to see your estimate
        </p>
      )}
    </div>
  );
}

// ── Step components ──────────────────────────────────────────────
function StepType({ value, onChange }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">Who do you want to recruit?</h3>
        <p className="text-sm text-gray-500 mt-1">Select the type of respondents for your study</p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-2">
        {[
          { id: "B2B", icon: Building2, label: "B2B Respondents", desc: "Professionals, decision-makers, executives" },
          { id: "B2C", icon: Users, label: "B2C Respondents", desc: "Consumers, end-users, general population" },
        ].map((opt) => (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`group relative flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 ${
              value === opt.id
                ? "border-blue-600 bg-blue-50 shadow-sm shadow-blue-100"
                : "border-gray-100 bg-white hover:border-blue-200 hover:bg-blue-50/30"
            }`}
          >
            {value === opt.id && (
              <span className="absolute top-3 right-3 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </span>
            )}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              value === opt.id ? "bg-blue-600" : "bg-gray-100 group-hover:bg-blue-100"
            }`}>
              <opt.icon className={`w-6 h-6 ${value === opt.id ? "text-white" : "text-gray-500"}`} />
            </div>
            <div className="text-center">
              <p className={`font-semibold text-sm ${value === opt.id ? "text-blue-700" : "text-gray-800"}`}>{opt.label}</p>
              <p className="text-xs text-gray-500 mt-1">{opt.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepParticipants({ value, onChange }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">How many participants?</h3>
        <p className="text-sm text-gray-500 mt-1">Choose your target sample size</p>
      </div>
      <div className="grid grid-cols-3 gap-3 pt-2">
        {PARTICIPANT_OPTIONS.map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            className={`relative py-4 rounded-xl border-2 font-bold text-lg transition-all duration-200 ${
              value === n
                ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                : "border-gray-100 bg-white text-gray-700 hover:border-blue-200 hover:bg-blue-50/30"
            }`}
          >
            {value === n && (
              <span className="absolute top-2 right-2 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" />
              </span>
            )}
            {n}
          </button>
        ))}
      </div>
      <div className="pt-2">
        <label className="text-xs font-medium text-gray-600 block mb-2">Or enter custom amount</label>
        <input
          type="number"
          min={1}
          max={500}
          placeholder="e.g. 25"
          value={PARTICIPANT_OPTIONS.includes(value) ? "" : value || ""}
          onChange={(e) => {
            const v = parseInt(e.target.value);
            if (!isNaN(v) && v > 0) onChange(v);
          }}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}

function StepCountries({ value, onChange }) {
  const [search, setSearch] = useState("");
  const filtered = COUNTRIES.filter((c) => c.toLowerCase().includes(search.toLowerCase()));
  const toggle = (c) => {
    if (value.includes(c)) {
      onChange(value.filter((v) => v !== c));
    } else if (value.length < 3) {
      onChange([...value, c]);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">Target countries</h3>
        <p className="text-sm text-gray-500 mt-1">Select up to 3 countries for this estimate</p>
      </div>

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              {c}
              <button onClick={() => toggle(c)} className="hover:text-blue-900">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1">
        {filtered.map((c) => {
          const selected = value.includes(c);
          const disabled = !selected && value.length >= 3;
          return (
            <button
              key={c}
              onClick={() => !disabled && toggle(c)}
              disabled={disabled}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-left text-sm transition-all ${
                selected
                  ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                  : disabled
                  ? "border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed"
                  : "border-gray-100 bg-white text-gray-700 hover:border-blue-200 hover:bg-blue-50/30"
              }`}
            >
              <span className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border ${
                selected ? "bg-blue-600 border-blue-600" : "border-gray-300"
              }`}>
                {selected && <Check className="w-2.5 h-2.5 text-white" />}
              </span>
              {c}
            </button>
          );
        })}
      </div>
      {value.length >= 3 && (
        <p className="text-xs text-amber-600 font-medium">Maximum 3 countries for this estimate. Contact us for more.</p>
      )}
    </div>
  );
}

function StepMethod({ value, onChange }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">Research method</h3>
        <p className="text-sm text-gray-500 mt-1">What type of research are you running?</p>
      </div>
      <div className="grid grid-cols-2 gap-3 pt-2">
        {METHODS.map((m) => (
          <button
            key={m.id}
            onClick={() => onChange(m.id)}
            className={`group relative flex flex-col items-start gap-2 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              value === m.id
                ? "border-blue-600 bg-blue-50 shadow-sm"
                : "border-gray-100 bg-white hover:border-blue-200 hover:bg-blue-50/30"
            }`}
          >
            {value === m.id && (
              <span className="absolute top-2.5 right-2.5 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" />
              </span>
            )}
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
              value === m.id ? "bg-blue-600" : "bg-gray-100 group-hover:bg-blue-100"
            }`}>
              <m.icon className={`w-4.5 h-4.5 ${value === m.id ? "text-white" : "text-gray-500"}`} />
            </div>
            <div>
              <p className={`text-sm font-semibold ${value === m.id ? "text-blue-700" : "text-gray-800"}`}>{m.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{m.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Result screen ────────────────────────────────────────────────
function ResultScreen({ state, price, timeline, onReset }) {
  const methodLabel = METHODS.find((m) => m.id === state.method)?.label;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      <div className="text-center space-y-1 pt-2">
        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <Check className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Your estimate is ready</h3>
        <p className="text-sm text-gray-500">Based on your selections, here's what to expect</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Estimated Cost", value: `$${price.toLocaleString()}`, icon: DollarSign, color: "blue" },
          { label: "Est. Timeline", value: timeline, icon: Clock, color: "indigo" },
          { label: "Participants", value: state.participants, icon: Users, color: "violet" },
          { label: "Countries", value: state.countries.join(", "), icon: Globe, color: "sky" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className={`bg-${color}-50 border border-${color}-100 rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-1">
              <Icon className={`w-3.5 h-3.5 text-${color}-500`} />
              <span className={`text-[11px] font-semibold text-${color}-600 uppercase tracking-wide`}>{label}</span>
            </div>
            <p className="text-base font-bold text-gray-900 truncate">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-xs text-amber-700">
        <strong>Note:</strong> Final pricing may vary based on niche difficulty and screener complexity. We'll confirm before launch.
      </div>

      <div className="space-y-3">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm font-semibold h-11 rounded-xl">
          Get Detailed Proposal
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="w-full text-sm font-semibold h-11 rounded-xl border-gray-200">
          Start Project Now
        </Button>
        <button
          onClick={onReset}
          className="w-full text-xs text-gray-400 hover:text-gray-600 transition-colors pt-1"
        >
          ← Start over
        </button>
      </div>
    </motion.div>
  );
}

// ── Main Calculator ──────────────────────────────────────────────
export default function QuoteCalculator() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState({ type: null, participants: null, countries: [], method: null });

  const update = (key) => (val) => setState((s) => ({ ...s, [key]: val }));

  const canAdvance = [
    !!state.type,
    !!state.participants,
    state.countries.length > 0,
    !!state.method,
  ];

  const { price, timeline } = useMemo(() => {
    const { type, participants, countries, method } = state;
    if (!type || !participants || !method || !countries.length)
      return { price: 0, timeline: "" };
    const base = BASE_PRICE[type] * participants;
    const withMethod = base * METHOD_MULTIPLIER[method];
    const withCountries = withMethod * (1 + COUNTRY_SURCHARGE[Math.min(countries.length, 3)]);
    const t = TIMELINE[method];
    const hours = t.base + t.perParticipant * participants;
    return {
      price: Math.round(withCountries / 10) * 10,
      timeline: hours < 48 ? `${hours}h` : `${Math.round(hours / 24)} days`,
    };
  }, [state]);

  const isDone = step === 4;

  const reset = () => {
    setStep(0);
    setState({ type: null, participants: null, countries: [], method: null });
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-100/60 overflow-hidden">
      {!isDone && (
        <div className="border-b border-gray-100 px-6 py-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Quote Calculator</p>
              <h2 className="text-base font-bold text-gray-900 mt-0.5">Get your instant estimate</h2>
            </div>
            <span className="text-xs text-gray-400 font-medium">{step + 1} / 4</span>
          </div>

          {/* Progress bar + steps */}
          <div className="flex items-center gap-2">
            {STEPS.map((_, i) => (
              <React.Fragment key={i}>
                <StepDot index={i} current={i === step} completed={i < step} />
                {i < STEPS.length - 1 && (
                  <div className="flex-1 h-px rounded-full overflow-hidden bg-gray-100">
                    <motion.div
                      className="h-full bg-blue-500"
                      initial={{ width: "0%" }}
                      animate={{ width: i < step ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 lg:grid lg:grid-cols-5 lg:gap-6">
        {/* Main content */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {isDone ? (
              <ResultScreen key="done" state={state} price={price} timeline={timeline} onReset={reset} />
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {step === 0 && <StepType value={state.type} onChange={update("type")} />}
                {step === 1 && <StepParticipants value={state.participants} onChange={update("participants")} />}
                {step === 2 && <StepCountries value={state.countries} onChange={update("countries")} />}
                {step === 3 && <StepMethod value={state.method} onChange={update("method")} />}
              </motion.div>
            )}
          </AnimatePresence>

          {!isDone && (
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-50">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="text-gray-500 hover:text-gray-700"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              <Button
                size="sm"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canAdvance[step]}
                className="bg-blue-600 hover:bg-blue-700 px-6 rounded-full disabled:opacity-40"
              >
                {step === 3 ? "See My Estimate" : "Continue"}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}
        </div>

        {/* Sidebar estimate */}
        {!isDone && (
          <div className="hidden lg:block lg:col-span-2 mt-0">
            <LiveEstimate state={state} />
          </div>
        )}
      </div>
    </div>
  );
}