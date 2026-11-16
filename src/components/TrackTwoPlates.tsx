import React, { useState } from "react";
import { CDGLogo, PlateFooter, PlateHeader } from "./CDGLogo";
import { Grid12Overlay, MoroccoTopographyWatermark } from "./VisualPatterns";

const YIELD_POINTS = [
  { label: "Q1 23", x: 35, y: 128, val: "212.0B", yield: "4.05%" },
  { label: "Q3 23", x: 105, y: 112, val: "224.6B", yield: "3.91%" },
  { label: "Q1 24", x: 175, y: 98, val: "236.1B", yield: "3.78%" },
  { label: "Q3 24", x: 245, y: 84, val: "247.8B", yield: "3.64%" },
  { label: "Q1 25", x: 315, y: 63, val: "256.9B", yield: "3.51%" },
  { label: "Q4 25", x: 385, y: 36, val: "268.4B", yield: "3.42%" },
];

/* ============================================================================
   PLATE 07 — TRACK 02 SYSTEM: ANALYTICAL PRECISION & INTERNATIONAL STANDARDS
   ============================================================================ */
export const TrackTwoSystemPlate: React.FC = () => {
  // Strictly ONE active Signal Point (#5AB0FF) across the chart at all times
  const [signalIdx, setSignalIdx] = useState<number>(5);
  const activePoint = YIELD_POINTS[signalIdx];

  const financialRows = [
    { code: "AUM-25", metric: "الأصول تحت التدبير والحفظ (MAD)", value: "268.4 مليار", var: "+12.8%", signal: true },
    { code: "GB-SOV", metric: "معدل تغطية السندات الخضراء والسيادية", value: "3.8×", var: "+64 bps", signal: false },
    { code: "CET1-R", metric: "نسبة الملاءة الرأسمالية الأساسية (Basel III)", value: "16.8%", var: "مستقر", signal: false },
    { code: "VAR-99", metric: "مؤشر ضبط مخاطر السوق اليومي (VaR 99%)", value: "0.24%", var: "-11 bps", signal: false },
  ];

  return (
    <section
      id="track-2"
      className="brand-plate relative bg-white p-8 sm:p-11 flex flex-col justify-between overflow-hidden"
    >
      {/* 1px Kingdom of Morocco Topographic Contour Watermark */}
      <div className="absolute inset-0">
        <MoroccoTopographyWatermark
          strokeColor="#0D2538"
          opacity={0.11}
          showLabels={false}
        />
      </div>

      {/* Visible 12-Column Architectural Grid Overlay */}
      <Grid12Overlay showNumbers={true} className="opacity-90" />

      <PlateHeader
        plateNumber="PLATE 07 · AXE 02"
        sectionAr="المسار الثاني: الدقة التحليلية والمعايير الدولية"
        sectionFr="Rigueur Analytique & Standards Internationaux"
        accentTag="النظام البصري 02"
        accentColor="#2A6AD0"
      />

      {/* Headline with Single Signal Point (#5AB0FF) + Coordinates */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5 items-end">
        <div className="lg:col-span-8">
          <div className="font-mono-tech text-[10px] text-[#2A6AD0] tracking-[0.14em] mb-1.5 flex flex-wrap items-center gap-3">
            <span>↗ GRID: 12 COLUMNS VISIBLE</span>
            <span>·</span>
            <span>WATERMARK: MOROCCO TOPO 1PX</span>
            <span>·</span>
            <span>34°01&apos;15&quot;N 06°50&apos;30&quot;W</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2538] leading-snug flex items-center gap-3">
            <span className="signal-dot-lg" title="Signal Point #5AB0FF" />
            <span>صرامة البيانات السيادية وشفافية أسواق الرساميل الدولية</span>
          </h2>
          <p className="text-[13px] text-[#0D2538]/75 mt-1.5 leading-relaxed">
            نظام بصري هندسي يخاطب المستثمرين المؤسساتيين ووكالات التصنيف العالمية؛ يرتكز على{" "}
            <strong className="text-[#0D2538]">شبكة ظاهرة من 12 عموداً</strong> مدعومة بعلامات{" "}
            (<span className="font-mono-tech">↗</span>) وإحداثيات جغرافية دقيقة، فوق علامة مائية رفيعة{" "}
            (<span className="font-mono-tech">1px</span>) لتضاريس المملكة المغربية، مع{" "}
            <strong className="text-[#2A6AD0]">نقطة تركيز وحيدة (#5AB0FF)</strong> لعزل المؤشر الأهم.
          </p>
        </div>

        {/* Signal Point Rule Badge */}
        <div className="lg:col-span-4 bg-[#0D2538] text-white p-3.5 border-r-[3px] border-[#5AB0FF]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold flex items-center gap-2">
              <span className="signal-dot" />
              قاعدة نقطة التركيز (Signal Point)
            </span>
            <span className="font-mono-tech text-[10px] text-[#5AB0FF] font-semibold">#5AB0FF</span>
          </div>
          <p className="text-[10.5px] text-white/75 leading-snug">
            تُستخدم دائرة وحيدة فقط باللون <span className="font-mono-tech">#5AB0FF</span> لمرافقة
            العنوان الرئيسي وعزل مؤشر رقمي واحد حاسم داخل كل منحنى أو جدول مالي.
          </p>
        </div>
      </div>

      {/* Main 12-Col Specification Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1">
        {/* Right (5 cols): 1px Morocco Topography + 12-Col Grid + Coordinates Spec */}
        <div className="lg:col-span-5 border border-[#0D2538]/18 bg-white/90 backdrop-blur-[1px] p-4 flex flex-col justify-between relative">
          <div className="flex items-center justify-between text-[11px] border-b border-[#0D2538]/12 pb-2 mb-2.5">
            <span className="font-bold text-[#0D2538]">
              01. العلامة المائية الطبوغرافية (1px) والإحداثيات
            </span>
            <span className="font-mono-tech text-[9.5px] text-[#0D2538]/60">STROKE: 1.0 PX ↗</span>
          </div>

          {/* Dedicated High-Clarity 1px Topographic Blueprint Specimen */}
          <div className="relative h-48 border border-[#0D2538]/14 bg-[#F9FAFC] overflow-hidden">
            {/* Micro 12-column rule header */}
            <div
              className="absolute top-0 inset-x-0 grid grid-cols-12 border-b border-[#0D2538]/12 bg-white/85 z-10"
              dir="ltr"
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="font-mono-tech text-[7.5px] text-center py-0.5 text-[#0D2538]/55 border-r last:border-r-0 border-[#0D2538]/10"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              ))}
            </div>

            <MoroccoTopographyWatermark
              strokeColor="#0D2538"
              opacity={0.55}
              showLabels={true}
              className="w-full h-full pt-3"
            />

            {/* Single Signal Point marking Rabat Sovereign Headquarters */}
            <div
              className="absolute"
              style={{ left: "51.5%", top: "24%" }}
              title="Rabat HQ"
            >
              <span className="signal-dot" />
            </div>

            {/* Corner Registration Marks (↗) */}
            <span className="absolute bottom-1.5 left-2 font-mono-tech text-[9px] text-[#0D2538]/65">
              ↗ DATUM WGS84 · MA
            </span>
            <span className="absolute bottom-1.5 right-2 font-mono-tech text-[9px] text-[#469041] font-semibold">
              1PX HAIRLINE
            </span>
          </div>

          {/* Exact Moroccan Financial Corridor Coordinates */}
          <div className="mt-3 grid grid-cols-2 gap-2 font-mono-tech text-[9px] text-[#0D2538]/80">
            {[
              { hub: "RABAT HQ ↗", gps: "34°01'15\"N · 06°50'30\"W" },
              { hub: "CASABLANCA ↗", gps: "33°34'23\"N · 07°35'23\"W" },
              { hub: "TANGER MED ↗", gps: "35°53'18\"N · 05°30'12\"W" },
              { hub: "DAKHLA ATL. ↗", gps: "23°42'53\"N · 15°56'13\"W" },
            ].map((c) => (
              <div key={c.hub} className="border border-[#0D2538]/12 bg-[#FAFBFD] px-2.5 py-1.5">
                <div className="font-semibold text-[#0D2538]">{c.hub}</div>
                <div className="text-[#2A6AD0] text-[8.5px]">{c.gps}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Left (7 cols): Financial Curve & Table Isolating Single #5AB0FF Signal Point */}
        <div className="lg:col-span-7 border border-[#0D2538]/18 bg-white/92 backdrop-blur-[1px] p-4 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0D2538]/12 pb-2 mb-2.5">
            <span className="text-[11px] font-bold text-[#0D2538]">
              02. الرسوم البيانية والجداول المالية — عزل المؤشر الحاسم بنقطة (#5AB0FF)
            </span>
            <span className="no-print text-[9.5px] text-[#2A6AD0]">
              انقر على أي فترة لنقل نقطة التركيز الوحيدة
            </span>
          </div>

          {/* Precision Sovereign Curve SVG */}
          <div className="relative bg-[#F9FAFC] border border-[#0D2538]/10 p-3 mb-3">
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="font-semibold text-[#0D2538]">
                تطور الأصول المُدارة ومنحنى العائد المرجعي السيادي (2023–2025)
              </span>
              <span className="font-mono-tech text-[10.5px] font-bold text-[#0D2538] flex items-center gap-1.5 bg-white px-2 py-0.5 border border-[#5AB0FF]">
                <span className="w-2 h-2 rounded-full bg-[#5AB0FF]" />
                {activePoint.label}: {activePoint.val} MAD ({activePoint.yield})
              </span>
            </div>

            <svg viewBox="0 0 420 152" className="w-full h-[122px]" style={{ direction: "ltr" }}>
              {/* Hairline horizontal grid */}
              {[35, 68, 101, 134].map((gy) => (
                <line
                  key={gy}
                  x1="20"
                  y1={gy}
                  x2="405"
                  y2={gy}
                  stroke="#0D2538"
                  strokeOpacity="0.09"
                  strokeWidth="1"
                />
              ))}
              {/* Secondary benchmark dashed curve (#469041) */}
              <path
                d="M 35 134 L 105 124 L 175 114 L 245 104 L 315 89 L 385 72"
                fill="none"
                stroke="#469041"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              {/* Area fill under primary curve */}
              <path
                d="M 35 128 L 105 112 L 175 98 L 245 84 L 315 63 L 385 36 L 385 134 L 35 134 Z"
                fill="#2A6AD0"
                fillOpacity="0.07"
              />
              {/* Primary Institutional Curve (#0D2538) */}
              <path
                d="M 35 128 L 105 112 L 175 98 L 245 84 L 315 63 L 385 36"
                fill="none"
                stroke="#0D2538"
                strokeWidth="1.8"
              />

              {/* Standard restrained nodes vs. THE SINGLE #5AB0FF SIGNAL POINT */}
              {YIELD_POINTS.map((pt, i) => {
                const isSignal = i === signalIdx;
                return (
                  <g
                    key={pt.label}
                    onClick={() => setSignalIdx(i)}
                    className="cursor-pointer"
                  >
                    {isSignal && (
                      <>
                        <line
                          x1={pt.x}
                          y1={16}
                          x2={pt.x}
                          y2={134}
                          stroke="#5AB0FF"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />
                        <circle cx={pt.x} cy={pt.y} r="9" fill="#5AB0FF" fillOpacity="0.24" />
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="4.8"
                          fill="#5AB0FF"
                          stroke="#0D2538"
                          strokeWidth="1.2"
                        />
                        <text
                          x={pt.x - 24}
                          y={pt.y - 11}
                          fontFamily="IBM Plex Mono, monospace"
                          fontSize="8.5"
                          fontWeight="600"
                          fill="#0D2538"
                        >
                          {pt.val}
                        </text>
                      </>
                    )}
                    {!isSignal && (
                      <circle cx={pt.x} cy={pt.y} r="2.4" fill="#FFFFFF" stroke="#0D2538" strokeWidth="1.3" />
                    )}
                    <text
                      x={pt.x}
                      y="147"
                      textAnchor="middle"
                      fontFamily="IBM Plex Mono, monospace"
                      fontSize="8"
                      fill={isSignal ? "#0D2538" : "#64748B"}
                      fontWeight={isSignal ? "600" : "400"}
                    >
                      {pt.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Institutional Risk & Performance Table with Single #5AB0FF Isolated Indicator */}
          <div className="overflow-x-auto">
            <table className="w-full text-[10.5px] border-collapse">
              <thead>
                <tr className="border-b border-[#0D2538] text-[#0D2538]/65 text-right">
                  <th className="py-1.5 font-mono-tech text-[9px]">REF ↗</th>
                  <th className="py-1.5 font-semibold">المؤشر المالي والمعياري</th>
                  <th className="py-1.5 font-semibold text-left">القيمة المسجلة</th>
                  <th className="py-1.5 font-semibold text-left">التغير السنوي</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0D2538]/10">
                {financialRows.map((r) => (
                  <tr
                    key={r.code}
                    className={r.signal ? "bg-[#5AB0FF]/[0.09] font-semibold" : ""}
                  >
                    <td className="py-1.5 font-mono-tech text-[9px] text-[#0D2538]/65">{r.code}</td>
                    <td className="py-1.5 text-[#0D2538] flex items-center gap-2">
                      {r.signal && <span className="signal-dot" />}
                      <span>{r.metric}</span>
                    </td>
                    <td className="py-1.5 text-left font-mono-tech text-[#0D2538] font-semibold">
                      {r.value}
                    </td>
                    <td
                      className={`py-1.5 text-left font-mono-tech text-[9.5px] ${
                        r.signal ? "text-[#2A6AD0] font-bold" : "text-[#469041]"
                      }`}
                    >
                      {r.var}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <PlateFooter page="07" />
    </section>
  );
};

/* ============================================================================
   PLATE 08 — TRACK 02 REALISTIC MOCKUPS (Investor Report Spread, Terminal, Cards)
   ============================================================================ */
export const TrackTwoMockupsPlate: React.FC = () => {
  return (
    <section
      id="track-2-mockups"
      className="brand-plate bg-[#EEF1F5] p-8 sm:p-11 flex flex-col justify-between"
    >
      <PlateHeader
        plateNumber="PLATE 08 · MOCKUPS 02"
        sectionAr="المسار الثاني: النماذج التطبيقية لأسواق الرساميل والمستثمرين"
        sectionFr="Applications — Rapport Investisseurs, Écran Marchés & Cartes"
        accentTag="تطبيقات المسار الثاني"
        accentColor="#5AB0FF"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* MOCKUP 1: Open Two-Page Institutional Investor Report Spread */}
        <div className="lg:col-span-7 bg-[#DFE5EC] border border-[#0D2538]/12 p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] mb-3">
            <span className="font-bold text-[#0D2538]">
              01. التقرير السنوي لأسواق الرساميل والمستثمرين الدوليين (صفحتان متقابلتان)
            </span>
            <span className="font-mono-tech text-[9.5px] text-[#0D2538]/60">SPREAD 420 × 297 MM</span>
          </div>

          {/* Realistic Open Spread Book Mockup */}
          <div
            className="relative bg-white grid grid-cols-1 sm:grid-cols-2 min-h-[345px] border border-[#0D2538]/15 overflow-hidden my-auto"
            style={{
              boxShadow: "0 22px 38px -16px rgba(13,37,56,0.34), 0 2px 6px rgba(13,37,56,0.1)",
            }}
          >
            {/* Continuous 1px Morocco Topography Watermark across open spread */}
            <div className="absolute inset-0">
              <MoroccoTopographyWatermark strokeColor="#0D2538" opacity={0.14} />
            </div>

            {/* Visible 12-Column Grid Across Entire Spread */}
            <Grid12Overlay showNumbers={true} />

            {/* Central Book Binding Spine Shadow */}
            <div
              className="hidden sm:block pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 z-20"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(13,37,56,0.12) 48%, rgba(255,255,255,0.6) 53%, transparent 100%)",
              }}
            />

            {/* Right Page (RTL Page 1): Sovereign Editorial Cover/Intro */}
            <div className="relative z-10 p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-l border-[#0D2538]/10">
              <div className="flex items-center justify-between pt-2">
                <CDGLogo variant="official-light" className="h-[13px] w-auto" />
                <span className="font-mono-tech text-[8px] text-[#0D2538]/60">↗ SEC. 02</span>
              </div>

              <div className="my-5">
                <div className="font-mono-tech text-[8px] text-[#2A6AD0] mb-1.5">
                  34°01&apos;15&quot;N · 06°50&apos;30&quot;W — RABAT CAPITAL MARKETS
                </div>
                <h3 className="text-lg font-bold text-[#0D2538] leading-snug flex items-start gap-2">
                  <span className="signal-dot mt-1.5" />
                  <span>آفاق السيولة السيادية وإدارة المخاطر 2026</span>
                </h3>
                <p className="text-[10px] text-[#0D2538]/72 mt-2 leading-relaxed">
                  قراءة تحليلية معمقة لمنحنى أسعار الفائدة، إصدارات السندات الخضراء، ومعايير الامتثال
                  الدولي الموجهة للمستثمرين المؤسساتيين.
                </p>
              </div>

              <div className="border-t border-[#0D2538]/15 pt-2.5 grid grid-cols-2 gap-2">
                <div>
                  <div className="font-mono-tech text-[8px] text-[#0D2538]/55">SOVEREIGN BOOK ↗</div>
                  <div className="font-mono-tech text-sm font-bold text-[#0D2538]">268.4B MAD</div>
                </div>
                <div>
                  <div className="font-mono-tech text-[8px] text-[#0D2538]/55">RISK GOVERNANCE</div>
                  <div className="font-mono-tech text-sm font-bold text-[#469041]">ISO / BASEL III</div>
                </div>
              </div>
            </div>

            {/* Left Page (RTL Page 2): Precision Data Visualization & Yield Matrix */}
            <div className="relative z-10 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between pt-2 font-mono-tech text-[8px] text-[#0D2538]/60">
                <span>MOROCCO SOVEREIGN CURVE (10Y)</span>
                <span>P. 24 ↗</span>
              </div>

              {/* Crisp Mini Financial Chart with Single Signal Point */}
              <div className="bg-white/85 border border-[#0D2538]/15 p-3 my-2">
                <div className="flex justify-between items-center text-[9px] mb-1">
                  <span className="font-bold text-[#0D2538]">تغطية الإصدارات المؤسساتية</span>
                  <span className="font-mono-tech text-[9px] font-bold text-[#0D2538] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#5AB0FF]" />
                    3.8× PEAK
                  </span>
                </div>
                <svg viewBox="0 0 220 82" className="w-full h-[74px]" style={{ direction: "ltr" }}>
                  <line x1="8" y1="20" x2="212" y2="20" stroke="#0D2538" strokeOpacity="0.08" />
                  <line x1="8" y1="45" x2="212" y2="45" stroke="#0D2538" strokeOpacity="0.08" />
                  <line x1="8" y1="70" x2="212" y2="70" stroke="#0D2538" strokeOpacity="0.14" />
                  <polyline
                    fill="none"
                    stroke="#0D2538"
                    strokeWidth="1.5"
                    points="14,64 52,55 90,58 128,42 166,35 202,18"
                  />
                  {/* Isolated Single Signal Point */}
                  <circle cx="202" cy="18" r="7" fill="#5AB0FF" fillOpacity="0.28" />
                  <circle cx="202" cy="18" r="3.8" fill="#5AB0FF" stroke="#0D2538" strokeWidth="1" />
                </svg>
              </div>

              {/* Compact Metrics Table */}
              <div className="space-y-1 text-[9px] font-mono-tech border-t border-[#0D2538]/15 pt-2">
                <div className="flex justify-between items-center bg-[#5AB0FF]/14 px-2 py-1 font-bold text-[#0D2538]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#5AB0FF]" />
                    GREEN BOND 2032
                  </span>
                  <span>3.42% · 3.8×</span>
                </div>
                <div className="flex justify-between px-2 py-0.5 text-[#0D2538]/75">
                  <span>INFRA TRANCHE A</span>
                  <span>3.68% · 2.9×</span>
                </div>
                <div className="flex justify-between px-2 py-0.5 text-[#0D2538]/75">
                  <span>OPCVM INST. ALPHA</span>
                  <span className="text-[#469041]">+6.14% YTD</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[10.5px] text-[#0D2538]/65 mt-3">
            تبقى الشبكة الهندسية (12 عموداً) وخطوط التضاريس الطبوغرافية (<span className="font-mono-tech">1px</span>)
            مرئية بشفافية 10%–14% لضمان قراءة فورية صارمة لمديري الصناديق والمحللين الدوليين.
          </p>
        </div>

        {/* Left Column: MOCKUP 2 (Dark Investor Digital Banner) + MOCKUP 3 (Cards) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-5">
          {/* MOCKUP 2: International Investor Roadshow Digital Screen */}
          <div className="bg-[#DCE2EA] border border-[#0D2538]/12 p-4">
            <div className="flex items-center justify-between text-[11px] mb-2.5">
              <span className="font-bold text-[#0D2538]">
                02. لافتة رقمية لمنتديات المستثمرين الدوليين
              </span>
              <span className="font-mono-tech text-[9px] text-[#0D2538]/60">LED WALL</span>
            </div>

            <div className="bg-[#07131E] p-2 rounded-[3px] shadow-xl">
              <div className="relative h-[178px] bg-[#0D2538] text-white p-4 flex flex-col justify-between overflow-hidden border border-white/10">
                {/* 1px White Morocco Topographic Watermark */}
                <MoroccoTopographyWatermark
                  strokeColor="#8AC4FF"
                  opacity={0.18}
                  className="absolute inset-0 w-full h-full"
                />
                {/* Visible 12-Col Dark Grid */}
                <Grid12Overlay dark={true} showNumbers={false} />

                <div className="relative z-10 flex items-center justify-between">
                  <CDGLogo variant="official-dark" className="h-[13px] w-auto" />
                  <span className="font-mono-tech text-[8px] text-white/60">
                    RABAT · LONDON · PARIS ↗
                  </span>
                </div>

                <div className="relative z-10 my-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="signal-dot" />
                    <span className="text-sm font-bold text-white">
                      معايير دولية لأسواق الرساميل المغربية
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3 mt-1.5 font-mono-tech">
                    <span className="text-xl font-bold text-[#5AB0FF]">268.4B MAD</span>
                    <span className="text-[9.5px] text-[#9FE39A]">↗ +12.8% YoY · ASSETS</span>
                  </div>
                </div>

                <div className="relative z-10 border-t border-white/15 pt-1.5 flex justify-between font-mono-tech text-[8px] text-white/55">
                  <span>34°01&apos;15&quot;N · 06°50&apos;30&quot;W</span>
                  <span>INSTITUTIONAL INVESTOR DAY 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* MOCKUP 3: Capital Markets Executive Card (Front & Back) */}
          <div className="bg-[#E3E8EE] border border-[#0D2538]/12 p-4 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] mb-2.5">
              <span className="font-bold text-[#0D2538]">03. بطاقة قطاع أسواق الرساميل الدولية</span>
              <span className="font-mono-tech text-[9px] text-[#0D2538]/60">12-COL MICRO</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-auto">
              {/* Card Front */}
              <div className="relative h-[126px] bg-white border border-[#0D2538]/15 p-3.5 flex flex-col justify-between shadow-md overflow-hidden">
                <MoroccoTopographyWatermark
                  strokeColor="#0D2538"
                  opacity={0.14}
                  className="absolute inset-0 w-full h-full"
                />
                <div className="relative z-10 flex items-center justify-between">
                  <CDGLogo variant="official-light" className="h-[10px] w-auto" />
                  <span className="font-mono-tech text-[8px] text-[#2A6AD0]">↗</span>
                </div>
                <div className="relative z-10 my-auto">
                  <div className="text-[11.5px] font-bold text-[#0D2538] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#5AB0FF] shrink-0" />
                    <span>كريم الإدريسي</span>
                  </div>
                  <div className="text-[8.5px] text-[#0D2538]/70 pr-3.5">
                    مدير أسواق الرساميل وعلاقات المستثمرين
                  </div>
                </div>
                <div className="relative z-10 border-t border-[#0D2538]/12 pt-1 font-mono-tech text-[7.5px] text-[#0D2538]/65 flex justify-between">
                  <span>34°01&apos;15&quot;N 06°50&apos;30&quot;W</span>
                  <span>RABAT</span>
                </div>
              </div>

              {/* Card Back */}
              <div className="relative h-[126px] bg-[#0D2538] text-white p-3.5 flex flex-col justify-between shadow-md overflow-hidden">
                <MoroccoTopographyWatermark
                  strokeColor="#FFFFFF"
                  opacity={0.14}
                  className="absolute inset-0 w-full h-full"
                />
                <Grid12Overlay dark={true} showNumbers={false} />
                <div className="relative z-10 flex justify-between font-mono-tech text-[7.5px] text-white/45">
                  <span>01 ···· 12</span>
                  <span className="text-[#5AB0FF]">●</span>
                </div>
                <div className="relative z-10 my-auto self-center">
                  <CDGLogo variant="official-dark" className="h-[13px] w-auto" />
                </div>
                <div className="relative z-10 font-mono-tech text-[7.5px] text-white/65 flex justify-between">
                  <span>CDGCAPITAL.MA</span>
                  <span>CAPITAL MARKETS ↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PlateFooter page="08" />
    </section>
  );
};
