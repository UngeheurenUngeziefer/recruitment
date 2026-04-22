import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight, Mail, Send, Users, Building2 } from "lucide-react";

const COUNTRIES = [
  "United States",
  "Canada",
  "Australia",
  "United Kingdom",
  "Germany",
  "France",
  "Netherlands",
  "Spain",
  "Italy",
  "Poland",
  "Czech Republic",
  "Romania",
  "India",
  "Brazil",
  "Nigeria",
  "South Africa",
];

const COUNTRY_RATES = [
  {
    label: "USA, Canada, Australia, UK",
    countries: ["United States", "Canada", "Australia", "United Kingdom"],
    min: 3,
    max: 4,
  },
  {
    label: "Western Europe",
    countries: ["Germany", "France", "Netherlands", "Spain", "Italy"],
    min: 2,
    max: 3,
  },
  {
    label: "Poland & Eastern Europe",
    countries: ["Poland", "Czech Republic", "Romania"],
    min: 1,
    max: 2,
  },
  {
    label: "India, Brazil, Africa, etc.",
    countries: ["India", "Brazil", "Nigeria", "South Africa"],
    min: 0.5,
    max: 1,
  },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formatMoney = (value) =>
  value % 1 === 0
    ? `$${value.toLocaleString()}`
    : `$${value.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`;

const getCountryRate = (country) => COUNTRY_RATES.find((group) => group.countries.includes(country)) ?? COUNTRY_RATES[3];

function StepType({ value, onChange }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">Who do you want to recruit?</h3>
        <p className="text-sm text-gray-500 mt-1">Choose B2B or B2C to continue.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { id: "B2B", icon: Building2, label: "B2B", desc: "Business professionals and decision-makers" },
          { id: "B2C", icon: Users, label: "B2C", desc: "Consumers and general population" },
        ].map((option) => {
          const isSelected = value === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onChange(option.id)}
              className={`relative border-2 rounded-2xl p-4 text-left transition-all ${
                isSelected
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-100 bg-white hover:border-blue-200 hover:bg-blue-50/40"
              }`}
            >
              {isSelected && (
                <span className="absolute top-3 right-3 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </span>
              )}
              <div className={`w-10 h-10 rounded-lg mb-3 flex items-center justify-center ${isSelected ? "bg-blue-600" : "bg-gray-100"}`}>
                <option.icon className={`w-5 h-5 ${isSelected ? "text-white" : "text-gray-500"}`} />
              </div>
              <p className={`font-semibold ${isSelected ? "text-blue-700" : "text-gray-900"}`}>{option.label}</p>
              <p className="text-xs text-gray-500 mt-1">{option.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function B2BStep({ values, onChange }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">Instant Quote — B2B Request</h3>
        <p className="text-sm text-gray-500 mt-1">Please describe your target audience and research goals</p>
      </div>

      <textarea
        value={values.audienceGoals}
        onChange={(e) => onChange("audienceGoals", e.target.value)}
        placeholder="Example: CFOs at SaaS companies (50-500 employees) to test messaging priorities"
        className="w-full min-h-28 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <p className="text-xs text-gray-500 -mt-1">
        This will help us estimate the timeline and cost of your project
      </p>

      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1.5">Email (required)</label>
        <input
          type="email"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="you@company.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1.5">Short message</label>
        <textarea
          value={values.shortMessage}
          onChange={(e) => onChange("shortMessage", e.target.value)}
          placeholder="Any specifics we should know?"
          className="w-full min-h-20 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

function B2CConfigStep({ values, onChange, estimate }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">Quantitative research setup</h3>
        <p className="text-sm text-gray-500 mt-1">Set responses and country. Pricing is calculated automatically.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1.5">Number of responses needed</label>
          <input
            type="number"
            min={1}
            max={100000}
            value={values.responses || ""}
            onChange={(e) => onChange("responses", Number(e.target.value) || 0)}
            placeholder="e.g. 500"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1.5">Selected country</label>
          <select
            value={values.country}
            onChange={(e) => onChange("country", e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select country</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-2">
        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Country pricing matrix</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {COUNTRY_RATES.map((group) => (
            <div key={group.label} className="text-xs text-gray-600 bg-white border border-blue-100/70 rounded-lg px-3 py-2">
              <strong className="text-gray-800">{group.label}:</strong> {formatMoney(group.min)}–{formatMoney(group.max)} / response
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">
        <p className="text-xs text-green-700 font-semibold uppercase tracking-wide mb-1">Estimated total</p>
        <p className="text-xl font-bold text-gray-900">
          {estimate ? `${formatMoney(estimate.minTotal)} – ${formatMoney(estimate.maxTotal)}` : "—"}
        </p>
      </div>
    </div>
  );
}

function B2CFinalStep({ values, onChange, estimate }) {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-bold text-gray-900">Tell us about your project and let’s discuss collaboration</h3>
        <p className="text-sm text-gray-500">Review your estimate and submit your request.</p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Type</span>
          <span className="font-semibold text-gray-900">B2C</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Responses</span>
          <span className="font-semibold text-gray-900">{values.responses || "—"}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Country</span>
          <span className="font-semibold text-gray-900">{values.country || "—"}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Estimated total</span>
          <span className="font-semibold text-gray-900">
            {estimate ? `${formatMoney(estimate.minTotal)} – ${formatMoney(estimate.maxTotal)}` : "—"}
          </span>
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1.5">Email (required)</label>
        <input
          type="email"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="you@company.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1.5">Short message</label>
        <textarea
          value={values.shortMessage}
          onChange={(e) => onChange("shortMessage", e.target.value)}
          placeholder="Anything else we should consider?"
          className="w-full min-h-20 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

function Confirmation({ type, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full flex flex-col items-center justify-center text-center px-6"
    >
      <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-4">
        <Check className="w-7 h-7 text-green-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">Request sent successfully</h3>
      <p className="text-sm text-gray-500 mt-2 max-w-md">
        Thanks! We received your {type} request and will contact you shortly with next steps and a detailed estimate.
      </p>
      <Button
        variant="outline"
        className="mt-6 rounded-xl border-gray-200"
        onClick={onReset}
      >
        Create another request
      </Button>
    </motion.div>
  );
}

export default function QuoteCalculator() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    type: null,
    audienceGoals: "",
    responses: 0,
    country: "",
    email: "",
    shortMessage: "",
  });

  const estimate = useMemo(() => {
    if (!state.responses || !state.country) return null;
    const rate = getCountryRate(state.country);
    return {
      minTotal: Number((state.responses * rate.min).toFixed(1)),
      maxTotal: Number((state.responses * rate.max).toFixed(1)),
    };
  }, [state.responses, state.country]);

  const b2cFlow = ["Respondent Type", "Setup", "Final Step"];
  const b2bFlow = ["Respondent Type", "Final Step"];
  const steps = state.type === "B2C" ? b2cFlow : b2bFlow;

  const contentCanContinue = {
    0: Boolean(state.type),
    1:
      state.type === "B2B"
        ? Boolean(state.audienceGoals.trim())
        : Boolean(state.responses > 0 && state.country),
  };

  const setField = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const reset = () => {
    setSubmitted(false);
    setStep(0);
    setErrors({});
    setState({
      type: null,
      audienceGoals: "",
      responses: 0,
      country: "",
      email: "",
      shortMessage: "",
    });
  };

  const validateAndSubmit = () => {
    const nextErrors = {};
    if (!state.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(state.email)) {
      nextErrors.email = "Please enter a valid email";
    }

    if (state.type === "B2B" && !state.audienceGoals.trim()) {
      nextErrors.audienceGoals = "Please describe your target audience and goals";
    }

    if (state.type === "B2C" && (!state.responses || !state.country)) {
      nextErrors.b2c = "Please complete responses and country before submitting";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
  };

  const isLastStepBeforeSubmit = (state.type === "B2B" && step === 1) || (state.type === "B2C" && step === 2);

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-100/60 overflow-hidden h-[680px] flex flex-col">
      {!submitted && (
        <div className="border-b border-gray-100 px-6 py-5 flex-shrink-0">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Instant Quote</p>
              <h2 className="text-base font-bold text-gray-900 mt-0.5">Configure and submit your request</h2>
            </div>
            <span className="text-xs text-gray-400 font-medium">
              {step + 1} / {steps.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {steps.map((label, index) => (
              <React.Fragment key={label}>
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                      index < step
                        ? "bg-blue-600 border-blue-600 text-white"
                        : index === step
                        ? "bg-white border-blue-600 text-blue-600"
                        : "bg-white border-gray-200 text-gray-400"
                    }`}
                  >
                    {index < step ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className={`text-[10px] font-medium hidden sm:block ${index === step ? "text-blue-600" : "text-gray-400"}`}>
                    {label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-px rounded-full overflow-hidden bg-gray-100">
                    <motion.div
                      className="h-full bg-blue-500"
                      initial={{ width: "0%" }}
                      animate={{ width: index < step ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 p-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          {submitted ? (
            <Confirmation key="submitted" type={state.type} onReset={reset} />
          ) : (
            <motion.div
              key={`${state.type || "none"}-${step}`}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {step === 0 && <StepType value={state.type} onChange={(value) => setField("type", value)} />}
              {state.type === "B2B" && step === 1 && <B2BStep values={state} onChange={setField} />}
              {state.type === "B2C" && step === 1 && (
                <B2CConfigStep values={state} onChange={setField} estimate={estimate} />
              )}
              {state.type === "B2C" && step === 2 && (
                <B2CFinalStep values={state} onChange={setField} estimate={estimate} />
              )}

              {errors.audienceGoals && <p className="text-xs text-red-600">{errors.audienceGoals}</p>}
              {errors.b2c && <p className="text-xs text-red-600">{errors.b2c}</p>}
              {errors.email && (
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <Mail className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!submitted && (
        <div className="px-6 py-4 border-t border-gray-100 flex-shrink-0 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setStep((current) => Math.max(0, current - 1))}
            disabled={step === 0}
            className="text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Button>

          {isLastStepBeforeSubmit ? (
            <Button
              size="sm"
              onClick={validateAndSubmit}
              className="bg-blue-600 hover:bg-blue-700 px-6 rounded-full"
            >
              Send Us a Request
              <Send className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={() => setStep((current) => current + 1)}
              disabled={!contentCanContinue[step]}
              className="bg-blue-600 hover:bg-blue-700 px-6 rounded-full disabled:opacity-40"
            >
              Continue
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
