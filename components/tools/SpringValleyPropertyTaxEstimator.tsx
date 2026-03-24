"use client";

import { useMemo, useState } from "react";
import {
  estimateAnnualPropertyTaxIllustrative,
  estimateMonthlyFromAnnual,
  springValleyTaxExampleMarketValue,
  springValleyEffectiveRatePercentDisplay,
  propertyTaxDisclaimerShort,
} from "@/lib/spring-valley-property-tax";

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function SpringValleyPropertyTaxEstimator() {
  const [rawValue, setRawValue] = useState(String(springValleyTaxExampleMarketValue));

  const marketValue = useMemo(() => {
    const n = Number.parseFloat(rawValue.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [rawValue]);

  const annual = estimateAnnualPropertyTaxIllustrative(marketValue);
  const monthly = estimateMonthlyFromAnnual(annual);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-xl font-bold text-slate-900 md:text-2xl mb-2">
        Estimate property tax (illustrative)
      </h2>
      <p className="text-sm text-slate-600 mb-6">
        Spring Valley, NV — effective rate {springValleyEffectiveRatePercentDisplay} (third-party
        estimate). Adjust value to see a rough annual and monthly figure.
      </p>

      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <div>
          <label htmlFor="sv-tax-city" className="block text-sm font-medium text-slate-700 mb-1">
            City
          </label>
          <input
            id="sv-tax-city"
            type="text"
            readOnly
            value="Spring Valley"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800"
            aria-readonly="true"
          />
        </div>
        <div>
          <label htmlFor="sv-tax-state" className="block text-sm font-medium text-slate-700 mb-1">
            State
          </label>
          <input
            id="sv-tax-state"
            type="text"
            readOnly
            value="NV"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800"
            aria-readonly="true"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="sv-tax-value" className="block text-sm font-medium text-slate-700 mb-1">
            Estimated market value ($)
          </label>
          <input
            id="sv-tax-value"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={rawValue}
            onChange={(e) => setRawValue(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            aria-describedby="sv-tax-value-hint"
          />
          <p id="sv-tax-value-hint" className="mt-1 text-xs text-slate-500">
            Enter a whole-dollar estimate (e.g. list price or appraised value for comparison).
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3 rounded-xl bg-slate-50 p-4 border border-slate-100">
        <div className="text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Annual tax</p>
          <p className="text-2xl font-bold text-slate-900">{marketValue ? formatCurrency(annual) : "—"}</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Monthly (÷12)</p>
          <p className="text-2xl font-bold text-slate-900">{marketValue ? formatCurrency(monthly) : "—"}</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rate used</p>
          <p className="text-2xl font-bold text-blue-700">{springValleyEffectiveRatePercentDisplay}</p>
        </div>
      </div>

      <p className="mt-6 text-xs text-slate-500 leading-relaxed">{propertyTaxDisclaimerShort}</p>
    </div>
  );
}
