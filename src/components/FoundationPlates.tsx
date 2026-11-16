import React, { useState } from "react";
import { Check, Copy, Download, ShieldCheck, X } from "lucide-react";
import {
  CDGLogo,
  PlateFooter,
  PlateHeader,
  downloadOfficialLogoSVG,
} from "./CDGLogo";
import { StarArrowMatrix } from "./VisualPatterns";

/* ============================================================================
   PLATE 01 — SOVEREIGN BRAND BOOK COVER
   ============================================================================ */
export const CoverPlate: React.FC = () => {
  return (
    <section
      id="cover"
      className="brand-plate relative min-h-[760px] flex flex-col justify-between p-8 sm:p-12 lg:p-14 text-white film-grain"
      style={{
        background:
          "linear-gradient(108deg, #0D2538 0%, #0E2B43 38%, #154564 66%, #24684D 85%, #469041 100%)",
      }}
    >
      {/* Celestial Dual-Reading Ascending Arrow Matrix */}
      <div className="absolute inset-0 overflow-hidden">
        <StarArrowMatrix cols={34} rows={18} opacity={0.72} />
      </div>

      {/* Subtle Blue-Green Editorial Optical Aura */}
      <div
        className="pointer-events-none absolute -top-28 left-1/4 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #2A6AD0 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 w-[540px] h-[540px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #469041 0%, transparent 70%)" }}
      />

      {/* Precision Architectural Frame Rules */}
      <div className="pointer-events-none absolute inset-5 sm:inset-7 border border-white/12" />
      <span className="pointer-events-none absolute top-8 left-9 font-mono-tech text-[10px] text-white/45">
        ↗ 34°01&apos;15&quot;N · 06°50&apos;30&quot;W
      </span>

      {/* Top Row: Official Unmodified Logo & Edition Code */}
      <div className="relative z-10 flex flex-wrap items-start justify-between gap-6 pt-2">
        <div className="flex flex-col gap-2.5">
          <CDGLogo variant="official-dark" className="h-8 sm:h-10 w-auto" />
          <span className="text-[11px] text-white/65 tracking-wide">
            فرع مملوك بنسبة 100% لمجموعة صندوق الإيداع والتدبير · Filiale du Groupe CDG
          </span>
        </div>

        <div className="text-left font-mono-tech text-[10.5px] text-white/65 space-y-1">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.05] px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#469041]" />
            <span>BRAND IDENTITY SYSTEM · ED. 2026</span>
          </div>
          <div className="pr-1 text-white/45">REF. CDGC-ID-03 / RABAT, MAROC</div>
        </div>
      </div>

      {/* Center Hero Title Block */}
      <div className="relative z-10 my-auto py-12 max-w-4xl">
        <div className="inline-flex items-center gap-3 mb-5 text-xs font-medium tracking-wide text-[#9FE39A]">
          <span className="w-8 h-[1px] bg-[#469041]" />
          <span>الدليل المرجعي الشامل للهوية المؤسساتية وتطبيقاتها</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold leading-[1.16] tracking-tight text-white mb-5">
          نظام الهوية البصرية
          <br />
          <span className="font-light text-white/92">المؤسساتية المتكاملة</span>
        </h1>

        <p className="font-latin text-sm sm:text-base uppercase tracking-[0.22em] text-white/65 mb-6">
          Système d&apos;Identité Visuelle Institutionnelle &amp; Architecture d&apos;Expression
        </p>

        <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed font-normal">
          منظومة بصرية واستراتيجية مصممة بدقة لترجمة الدور السيادي والمالي لعلامة{" "}
          <strong className="font-semibold text-white">CDG Capital</strong> عبر ثلاثة مسارات
          تعبيرية متكاملة، مع الحفاظ التام والمطلق على الشعار الأصلي المعتمد ولوحة الألوان
          الأساسية للمؤسسة.
        </p>
      </div>

      {/* Bottom Three-Track Architectural Index + Core Palette Strip */}
      <div className="relative z-10 border-t border-white/18 pt-6 grid grid-cols-1 md:grid-cols-4 gap-5 items-end">
        <div className="border-r-2 border-[#469041] pr-3.5">
          <div className="font-mono-tech text-[10px] text-[#9FE39A] mb-1">AXE 01 ↗</div>
          <div className="text-sm font-semibold text-white">الرؤية البشرية والوضوح الاستراتيجي</div>
          <div className="text-[11px] text-white/60 mt-0.5">
            بورتريهات مغربية · هالة ضوئية · قبة أسهم ↗
          </div>
        </div>

        <div className="border-r-2 border-[#5AB0FF] pr-3.5">
          <div className="font-mono-tech text-[10px] text-[#5AB0FF] mb-1">AXE 02 ●</div>
          <div className="text-sm font-semibold text-white">الدقة التحليلية والمعايير الدولية</div>
          <div className="text-[11px] text-white/60 mt-0.5">
            طبوغرافيا 1px · شبكة 12 عموداً · نقطة #5AB0FF
          </div>
        </div>

        <div className="border-r-2 border-[#B88456] pr-3.5">
          <div className="font-mono-tech text-[10px] text-[#E4B88D] mb-1">AXE 03 ◻</div>
          <div className="text-sm font-semibold text-white">السيادة المعمارية والبنية التحتية</div>
          <div className="text-[11px] text-white/60 mt-0.5">
            وحدة رباعية Ton-sur-ton · زليج ونحاس 1pt · نقش جاف
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <span className="font-mono-tech text-[9.5px] text-white/55 tracking-widest">
            PRIMARY CHROMATIC DNA
          </span>
          <div className="flex items-center gap-1.5" style={{ direction: "ltr" }}>
            {[
              { hex: "#0D2538", border: true },
              { hex: "#2A6AD0", border: false },
              { hex: "#469041", border: false },
            ].map((c) => (
              <div
                key={c.hex}
                className={`flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono-tech bg-black/25 backdrop-blur-sm ${
                  c.border ? "border border-white/25" : "border border-white/15"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-[1px]"
                  style={{ backgroundColor: c.hex }}
                />
                <span>{c.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   PLATE 02 — BRAND FOUNDATION, STRATEGY & TABLE OF CONTENTS
   ============================================================================ */
export const StrategyPlate: React.FC = () => {
  const toc = [
    { num: "01–02", title: "الغلاف والأساس الاستراتيجي للعلامة", sub: "Brand Context & Positioning" },
    { num: "03", title: "الشعار الأصلي المعتمد وقواعد الحماية وبنية العلامة", sub: "Official Logo Integrity & Architecture" },
    { num: "04", title: "المنظومة اللونية الأساسية والتايبوغرافيا المؤسساتية", sub: "Color Palette & Typographic System" },
    { num: "05–06", title: "المسار الأول: الرؤية البشرية والوضوح الاستراتيجي + النماذج", sub: "Human Vision & Editorial Mockups" },
    { num: "07–08", title: "المسار الثاني: الدقة التحليلية والمعايير الدولية + النماذج", sub: "Analytical Rigor & Capital Markets Mockups" },
    { num: "09–10", title: "المسار الثالث: السيادة المعمارية والبنية التحتية + النماذج", sub: "Architectural Sovereignty & Tactile Mockups" },
    { num: "11–12", title: "الهوية اللفظية، هندسة الرسائل، وحوكمة التطبيق", sub: "Brand Voice, Messaging & Standards" },
  ];

  const tracksSummary = [
    {
      id: "01",
      name: "الرؤية البشرية والوضوح الاستراتيجي",
      audience: "التقارير المؤسساتية، القيادة، التواصل الاستراتيجي، استقطاب الكفاءات",
      signature: "بورتريهات عفوية بحبيبات طبيعية + هالة (#2A6AD0/#469041) + قبة أسهم (↗)",
      color: "#469041",
    },
    {
      id: "02",
      name: "الدقة التحليلية والمعايير الدولية",
      audience: "أسواق الرساميل، المستثمرون الدوليون، السندات السيادية، إدارة المخاطر",
      signature: "طبوغرافيا المغرب (1px) + شبكة 12 عموداً وإحداثيات + نقطة تركيز (#5AB0FF)",
      color: "#2A6AD0",
    },
    {
      id: "03",
      name: "السيادة المعمارية والبنية التحتية",
      audience: "تمويل المشاريع الكبرى (الطاقة، السكك الحديدية، تحلية المياه، التعليم)",
      signature: "4 أشكال هندسية Ton-sur-ton + ورق قطني وزليج ونحاس 1pt + إضاءة جانبية حادة",
      color: "#0D2538",
    },
  ];

  return (
    <section
      id="foundation"
      className="brand-plate bg-white p-8 sm:p-11 flex flex-col justify-between"
    >
      <PlateHeader
        plateNumber="PLATE 02"
        sectionAr="الأساس الاستراتيجي وهندسة الهوية"
        sectionFr="Fondements Stratégiques & Sommaire"
        accentTag="Brand Strategy"
        accentColor="#469041"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
        {/* Right Column (RTL): Brand Essence & Strategic Statement */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <div>
            <span className="font-mono-tech text-[10.5px] uppercase tracking-[0.16em] text-[#469041] font-semibold">
              01 — IDENTITY STRATEGY STATEMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2538] mt-1.5 mb-3 leading-snug">
              الطرف المؤسساتي الموثوق لتحويل الادخار الوطني إلى أثر سيادي مستدام
            </h2>
            <p className="text-[13.5px] text-[#0D2538]/78 leading-[1.8]">
              بصفتها بنك التمويل والاستثمار المملوك بالكامل لمجموعة صندوق الإيداع والتدبير (CDG)
              برأسمال قدره <strong className="text-[#0D2538]">1.86 مليار درهم</strong> منذ تأسيسها
              بالرباط عام 2006، تضطلع <strong className="text-[#0D2538]">CDG Capital</strong>{" "}
              بمسؤولية مزدوجة: التدبير الآمن والرشيد للادخار طويل الأمد، وتوجيهه نحو هيكلة وتمويل
              المشاريع الوطنية الكبرى وتطوير أسواق الرساميل. يترجم هذا النظام البصري توازن المؤسسة
              الفريد بين <strong>الالتزام الإنساني</strong>، <strong>الصرامة التحليلية الدولية</strong>،
              و<strong>الرسوخ المعماري السيادي</strong>.
            </p>
          </div>

          {/* Mission / Vision / Signature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="bg-[#F6F4EF] p-4 border-t-2 border-[#0D2538]">
              <div className="text-[11px] font-bold text-[#0D2538] mb-1.5">الرسالة · Mission</div>
              <p className="text-[12px] text-[#0D2538]/75 leading-relaxed">
                تعبئة وتأمين الادخار المؤسساتي وهيكلة حلول تمويل واستثمار مسؤولة تخدم الأولويات
                الاستراتيجية للمملكة المغربية.
              </p>
            </div>
            <div className="bg-[#F6F4EF] p-4 border-t-2 border-[#2A6AD0]">
              <div className="text-[11px] font-bold text-[#0D2538] mb-1.5">التموضع · Position</div>
              <p className="text-[12px] text-[#0D2538]/75 leading-relaxed">
                همزة الوصل المرجعية بين السيادة الاقتصادية الوطنية وأرقى معايير الحوكمة وإدارة
                المخاطر في الأسواق المالية الدولية.
              </p>
            </div>
            <div className="bg-[#0D2538] text-white p-4 border-t-2 border-[#469041]">
              <div className="text-[11px] font-semibold text-[#9FE39A] mb-1.5">
                الشخصية والتوقيع
              </div>
              <p className="text-[12px] text-white/85 leading-relaxed mb-2">
                سيادية · دقيقة · مستشرفة · ملتزمة · معاصرة
              </p>
              <div className="font-latin text-[11px] italic text-white/70 border-t border-white/15 pt-1.5">
                « L&apos;Avenir, avec passion » — المستقبل، بشغف
              </div>
            </div>
          </div>

          {/* Three Strategic Tracks Architecture Matrix */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold text-[#0D2538]">
                مصفوفة المسارات البصرية الثلاثة المعتمدة
              </span>
              <span className="font-mono-tech text-[10px] text-[#0D2538]/50">
                UNIFIED LOGO · 3 VISUAL EXPRESSIONS
              </span>
            </div>
            <div className="space-y-2">
              {tracksSummary.map((t) => (
                <div
                  key={t.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center p-3 border border-[#0D2538]/10 bg-[#FAF9F6]"
                >
                  <div className="sm:col-span-4 flex items-center gap-2.5">
                    <span
                      className="font-mono-tech text-[11px] font-bold text-white w-7 h-7 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.id}
                    </span>
                    <span className="text-[12.5px] font-bold text-[#0D2538] leading-tight">
                      {t.name}
                    </span>
                  </div>
                  <div className="sm:col-span-4 text-[11.5px] text-[#0D2538]/70 leading-snug">
                    {t.audience}
                  </div>
                  <div className="sm:col-span-4 text-[11px] font-medium text-[#0D2538]/85 bg-white px-2.5 py-1.5 border border-[#0D2538]/8 leading-snug">
                    {t.signature}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left Column (RTL): Editorial Table of Contents & Core Métiers */}
        <div className="lg:col-span-5 bg-[#0D2538] text-white p-6 flex flex-col justify-between relative overflow-hidden">
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-1.5"
            style={{
              background: "linear-gradient(90deg, #469041 0%, #2A6AD0 55%, #0D2538 100%)",
            }}
          />
          <div>
            <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4">
              <span className="text-sm font-bold">فهرس دليل الهوية البصرية</span>
              <span className="font-mono-tech text-[10px] text-[#9FE39A]">SOMMAIRE · 12 PLATES</span>
            </div>

            <ol className="divide-y divide-white/10">
              {toc.map((item) => (
                <li key={item.num} className="py-2.5 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[12.5px] font-medium text-white leading-snug">
                      {item.title}
                    </div>
                    <div className="font-latin text-[10px] text-white/50 mt-0.5">{item.sub}</div>
                  </div>
                  <span className="font-mono-tech text-[11px] text-[#9FE39A] shrink-0 pt-0.5">
                    {item.num}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* 4 Pillars of Business */}
          <div className="mt-5 pt-4 border-t border-white/15">
            <div className="text-[10.5px] text-white/55 mb-2">
              المهن الأربعة الأساسية · Les 4 Métiers Institutionnels
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { ar: "الاستشارة", fr: "Conseil" },
                { ar: "التمويل", fr: "Financement" },
                { ar: "الاستثمار", fr: "Investissement" },
                { ar: "الأسواق", fr: "Marchés" },
              ].map((m) => (
                <div key={m.fr} className="bg-white/[0.06] border border-white/10 py-2 px-1">
                  <div className="text-[11.5px] font-semibold text-white">{m.ar}</div>
                  <div className="font-latin text-[9px] text-white/55">{m.fr}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PlateFooter page="02" />
    </section>
  );
};

/* ============================================================================
   PLATE 03 — OFFICIAL UNMODIFIED LOGO INTEGRITY, ANATOMY & ARCHITECTURE
   ============================================================================ */
export const LogoPlate: React.FC = () => {
  const donts = [
    {
      label: "يُمنع تمديد أو ضغط نسب الشعار",
      render: (
        <div className="scale-x-75 scale-y-125">
          <CDGLogo variant="official-light" className="h-4 w-auto" />
        </div>
      ),
    },
    {
      label: "يُمنع تغيير الألوان المعتمدة أو التدرج داخله",
      render: (
        <div className="hue-rotate-180 saturate-200">
          <CDGLogo variant="official-light" className="h-4 w-auto" />
        </div>
      ),
    },
    {
      label: "يُمنع تدوير الشعار أو إمالته بأي زاوية",
      render: (
        <div className="-rotate-12">
          <CDGLogo variant="official-light" className="h-4 w-auto" />
        </div>
      ),
    },
    {
      label: "يُمنع إضافة ظلال خارجية أو توهج للشعار",
      render: (
        <div style={{ filter: "drop-shadow(3px 5px 4px rgba(13,37,56,0.55))" }}>
          <CDGLogo variant="official-light" className="h-4 w-auto" />
        </div>
      ),
    },
    {
      label: "يُمنع إعادة كتابة CAPITAL بخط بديل",
      render: (
        <div className="font-latin text-xs font-serif tracking-widest text-[#354048]" dir="ltr">
          CDG <span className="text-[#469041] italic">CAPITAL</span>
        </div>
      ),
    },
    {
      label: "يُمنع وضعه على خلفية مزدحمة ضعيفة التباين",
      render: (
        <div
          className="px-2 py-1"
          style={{
            background:
              "repeating-linear-gradient(45deg, #469041, #469041 5px, #85929E 5px, #85929E 10px)",
          }}
        >
          <CDGLogo variant="official-light" className="h-3.5 w-auto" />
        </div>
      ),
    },
  ];

  return (
    <section
      id="logo"
      className="brand-plate bg-white p-8 sm:p-11 flex flex-col justify-between"
    >
      <PlateHeader
        plateNumber="PLATE 03"
        sectionAr="الشعار الأصلي المعتمد وقواعد الحماية الصارمة"
        sectionFr="Logotype Officiel, Zone de Protection & Architecture"
        accentTag="عدم التعديل المطلق"
        accentColor="#469041"
      />

      {/* Sacred Rule Banner */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 bg-[#0D2538] text-white px-5 py-3 border-r-4 border-[#469041]">
        <div className="flex items-center gap-2.5 text-xs sm:text-[13px]">
          <ShieldCheck className="w-4 h-4 text-[#469041] shrink-0" />
          <span>
            <strong>قاعدة إلزامية مطلقة:</strong> يُحافظ على الشعار الأصلي المعتمد لعلامة{" "}
            <span className="font-latin font-semibold">CDG Capital</span> كما هو تماماً بمساراته
            الهندسية ونسبه وخطوطه الأصلية (نسبة العرض إلى الارتفاع{" "}
            <span className="font-mono-tech text-[#9FE39A]">200 : 24</span>) دون أي تعديل أو إعادة رسم.
          </span>
        </div>
        <button
          type="button"
          onClick={() => downloadOfficialLogoSVG("official-light")}
          className="no-print inline-flex items-center gap-1.5 text-[11px] font-semibold bg-[#469041] hover:bg-[#3b7c37] text-white px-3 py-1.5 transition cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>تنزيل الشعار الأصلي SVG</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* Master Construction & Clear Space Diagram */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          <div
            className="relative border border-[#0D2538]/14 bg-[#FAF9F7] p-7 sm:p-9 flex flex-col items-center justify-center min-h-[235px]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(13,37,56,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,37,56,0.04) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          >
            <span className="absolute top-2.5 right-3 text-[10.5px] font-semibold text-[#0D2538]/65">
              مساحة الأمان الإلزامية (1X من جميع الجهات · X = ارتفاع كتلة CDG)
            </span>
            <span className="absolute top-2.5 left-3 font-mono-tech text-[10px] text-[#2A6AD0]">
              RATIO 8.33 : 1 · UNMODIFIED MASTER
            </span>

            {/* Outer Clear Space Frame */}
            <div className="relative p-7 sm:p-8 border border-dashed border-[#2A6AD0]/65 bg-white/80 mt-3">
              {/* X indicators */}
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#FAF9F7] px-1.5 font-mono-tech text-[9.5px] font-semibold text-[#2A6AD0]">
                1X
              </span>
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#FAF9F7] px-1.5 font-mono-tech text-[9.5px] font-semibold text-[#2A6AD0]">
                1X
              </span>
              <span className="absolute top-1/2 -left-3 -translate-y-1/2 bg-[#FAF9F7] px-1 font-mono-tech text-[9.5px] font-semibold text-[#2A6AD0]">
                1X
              </span>
              <span className="absolute top-1/2 -right-3 -translate-y-1/2 bg-[#FAF9F7] px-1 font-mono-tech text-[9.5px] font-semibold text-[#2A6AD0]">
                1X
              </span>

              {/* Inner exact logo bounding box */}
              <div className="border border-[#469041]/40 px-1 py-0.5">
                <CDGLogo variant="official-light" className="h-9 sm:h-11 w-auto" />
              </div>
            </div>

            {/* DNA Callouts */}
            <div className="mt-5 w-full grid grid-cols-3 gap-3 text-[11px] pt-3 border-t border-[#0D2538]/10">
              <div>
                <span className="font-mono-tech text-[10px] font-bold text-[#0D2538]">[A] ∞ D+G</span>
                <p className="text-[#0D2538]/70 mt-0.5 leading-snug">
                  تداخل حرفي D و G يشكّل رمز اللانهاية تعبيراً عن الاستدامة والأفق طويل الأمد.
                </p>
              </div>
              <div>
                <span className="font-mono-tech text-[10px] font-bold text-[#469041]">[B] ↗ G-ARROW</span>
                <p className="text-[#0D2538]/70 mt-0.5 leading-snug">
                  قاعدة حرف G الخضراء (#469041) منبع السهم الصاعد (↗) الملهم للمسارين 01 و02.
                </p>
              </div>
              <div>
                <span className="font-mono-tech text-[10px] font-bold text-[#2A6AD0]">[C] WORDMARK</span>
                <p className="text-[#0D2538]/70 mt-0.5 leading-snug">
                  رسم حروف CAPITAL الهندسي الأصلي ثابت النسب والتباعد في جميع المقاسات.
                </p>
              </div>
            </div>
          </div>

          {/* Minimum Size & Brand Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-5 border border-[#0D2538]/12 p-4 bg-[#FAF9F7]">
              <div className="text-xs font-bold text-[#0D2538] mb-2">
                الحد الأدنى للقياس · Taille Minimale
              </div>
              <div className="flex items-end justify-between gap-3 pt-2">
                <div>
                  <CDGLogo variant="official-light" className="w-[112px] h-auto mb-1.5" />
                  <div className="font-mono-tech text-[10px] text-[#0D2538]/70">
                    PRINT: 32 mm · DIGITAL: 120 px
                  </div>
                </div>
                <span className="text-[10.5px] text-[#469041] font-semibold bg-[#469041]/10 px-2 py-0.5">
                  مقروئية تامة
                </span>
              </div>
            </div>

            <div className="sm:col-span-7 border border-[#0D2538]/12 p-4 bg-[#FAF9F7]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#0D2538]">
                  بنية العلامة · Branded House (One CDG)
                </span>
                <span className="font-mono-tech text-[9.5px] text-[#0D2538]/50">FILIALES</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]" dir="ltr">
                {[
                  { sub: "BOURSE", ar: "الوساطة بالبورصة" },
                  { sub: "GESTION", ar: "تدبير الأصول" },
                  { sub: "REAL ESTATE", ar: "هيئات OPCI" },
                  { sub: "INFRA", ar: "البنيات التحتية" },
                ].map((f) => (
                  <div key={f.sub} className="bg-white border border-[#0D2538]/10 p-2">
                    <CDGLogo variant="official-light" className="h-[9px] w-auto" />
                    <div className="font-latin text-[8px] font-bold tracking-[0.14em] text-[#354048] mt-1">
                      {f.sub}
                    </div>
                    <div className="font-arabic text-[9.5px] text-[#0D2538]/60 mt-0.5" dir="rtl">
                      {f.ar}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Left Column: 4 Approved Variations + 6 Don'ts */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-5">
          {/* 4 Approved Variations */}
          <div>
            <div className="text-xs font-bold text-[#0D2538] mb-2.5">
              النسخ اللونية الأربع المعتمدة حصرياً
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="border border-[#0D2538]/15 bg-white p-4 flex flex-col justify-between h-24">
                <CDGLogo variant="official-light" className="h-5 w-auto self-center my-auto" />
                <span className="text-[10px] text-[#0D2538]/65">01. النسخة الأساسية (خلفيات فاتحة)</span>
              </div>
              <div className="bg-[#0D2538] p-4 flex flex-col justify-between h-24">
                <CDGLogo variant="official-dark" className="h-5 w-auto self-center my-auto" />
                <span className="text-[10px] text-white/70">02. النسخة المعكوسة (كحلي #0D2538)</span>
              </div>
              <div className="bg-[#469041] p-4 flex flex-col justify-between h-24">
                <CDGLogo variant="mono-white" className="h-5 w-auto self-center my-auto" />
                <span className="text-[10px] text-white/85">03. أحادي أبيض (أخضر / صور داكنة)</span>
              </div>
              <div className="cotton-paper border border-[#B88456]/45 p-4 flex flex-col justify-between h-24">
                <CDGLogo variant="mono-navy" className="h-5 w-auto self-center my-auto" />
                <span className="text-[10px] text-[#0D2538]/70">04. أحادي كحلي / نقش بارز جاف</span>
              </div>
            </div>
          </div>

          {/* 6 Incorrect Usages */}
          <div>
            <div className="text-xs font-bold text-[#0D2538] mb-2.5">
              الممارسات المحظورة · Usages Interdits
            </div>
            <div className="grid grid-cols-2 gap-2">
              {donts.map((d, i) => (
                <div
                  key={i}
                  className="border border-red-700/20 bg-red-50/30 p-2.5 flex flex-col justify-between h-[76px] relative"
                >
                  <span className="absolute top-1.5 left-1.5 w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                    <X className="w-2.5 h-2.5" />
                  </span>
                  <div className="my-auto flex items-center justify-center overflow-hidden">
                    {d.render}
                  </div>
                  <div className="text-[9.5px] text-[#0D2538]/75 leading-tight truncate">
                    {d.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PlateFooter page="03" />
    </section>
  );
};

/* ============================================================================
   PLATE 04 — MASTER COLOR PALETTE & TYPOGRAPHIC SYSTEM
   ============================================================================ */
export const ColorTypographyPlate: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1600);
  };

  const primaryColors = [
    {
      nameAr: "الأخضر المؤسسي",
      nameFr: "Vert CDG Capital",
      hex: "#469041",
      rgb: "70 · 144 · 65",
      cmyk: "72 · 14 · 92 · 2",
      pantone: "PMS 7739 C",
      contrast: "AA Large · 3.9:1",
      role: "لون السهم الصاعد وكلمة CAPITAL والوضوح الاستراتيجي والتمويل المستدام.",
      darkText: false,
    },
    {
      nameAr: "الأزرق الحيوي",
      nameFr: "Bleu Dynamique",
      hex: "#2A6AD0",
      rgb: "42 · 106 · 208",
      cmyk: "83 · 56 · 0 · 0",
      pantone: "PMS 2727 C",
      contrast: "AA · 5.1:1",
      role: "الحيوية المالية، الهالة الضوئية لبورتريهات المسار الأول، ومنحنيات المقارنة.",
      darkText: false,
    },
    {
      nameAr: "الأزرق الداكن العميق",
      nameFr: "Bleu Nuit Souverain",
      hex: "#0D2538",
      rgb: "13 · 37 · 56",
      cmyk: "94 · 72 · 45 · 52",
      pantone: "PMS 539 C",
      contrast: "AAA · 15.6:1",
      role: "الركيزة السيادية للخلفيات الليلية، النصوص الرئيسية، والعمق المؤسساتي.",
      darkText: false,
    },
  ];

  const functionalColors = [
    {
      name: "نقطة التركيز · Signal Point",
      hex: "#5AB0FF",
      spec: "RGB 90·176·255 | المسار 02 حصراً",
      textClass: "text-[#0D2538]",
    },
    {
      name: "نحاسي معماري · Filet Cuivré 1pt",
      hex: "#B88456",
      spec: "PMS 876 C | خطوط 1pt بالمسار 03",
      textClass: "text-white",
    },
    {
      name: "ورق قطني فاخر · Vélin Ivoire",
      hex: "#F6F4EF",
      spec: "Gmund 350g | النقش البارز الجاف",
      textClass: "text-[#0D2538] border border-[#0D2538]/15",
    },
    {
      name: "رمادي الشعار الأصلي · Gris CDG",
      hex: "#354048",
      spec: "PMS 432 C | كتلة CDG على الأبيض",
      textClass: "text-white",
    },
  ];

  return (
    <section
      id="colors-type"
      className="brand-plate bg-white p-8 sm:p-11 flex flex-col justify-between"
    >
      <PlateHeader
        plateNumber="PLATE 04"
        sectionAr="لوحة الألوان المؤسساتية والنظام التايبوغرافي"
        sectionFr="Palette Chromatique & Système Typographique"
        accentTag="Core System"
        accentColor="#2A6AD0"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 flex-1">
        {/* Right Column: Color Architecture */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-[#0D2538]">
                لوحة الألوان الأساسية المعتمدة (Primary Triad)
              </h2>
              <span className="no-print text-[10.5px] text-[#0D2538]/50">
                انقر على أي لون لنسخ رمز HEX
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {primaryColors.map((c) => (
                <button
                  key={c.hex}
                  type="button"
                  onClick={() => handleCopy(c.hex)}
                  className="text-right group border border-[#0D2538]/12 overflow-hidden flex flex-col justify-between bg-white hover:shadow-md transition cursor-pointer"
                >
                  <div
                    className="h-28 p-3.5 flex flex-col justify-between text-white w-full"
                    style={{ backgroundColor: c.hex }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-[10px] bg-black/20 px-2 py-0.5">
                        {c.contrast}
                      </span>
                      <span className="no-print opacity-75 group-hover:opacity-100">
                        {copiedHex === c.hex ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </span>
                    </div>
                    <div className="font-mono-tech text-base font-semibold tracking-wider">
                      {copiedHex === c.hex ? "COPIED ✓" : c.hex}
                    </div>
                  </div>

                  <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[13px] font-bold text-[#0D2538]">{c.nameAr}</div>
                      <div className="font-latin text-[10.5px] text-[#0D2538]/55">{c.nameFr}</div>
                      <p className="text-[11px] text-[#0D2538]/72 mt-1.5 leading-relaxed">
                        {c.role}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#0D2538]/10 font-mono-tech text-[9.5px] text-[#0D2538]/65 space-y-0.5">
                      <div>RGB: {c.rgb}</div>
                      <div>CMYK: {c.cmyk}</div>
                      <div>{c.pantone}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Functional Track Accents */}
          <div>
            <div className="text-xs font-bold text-[#0D2538] mb-2">
              الألوان الوظيفية الخاصة بالمسارات والمواد (Track-Specific Accents)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {functionalColors.map((fc) => (
                <button
                  key={fc.hex}
                  type="button"
                  onClick={() => handleCopy(fc.hex)}
                  className={`p-3 text-right transition cursor-pointer ${fc.textClass}`}
                  style={{ backgroundColor: fc.hex }}
                >
                  <div className="font-mono-tech text-xs font-bold mb-1">
                    {copiedHex === fc.hex ? "COPIED ✓" : fc.hex}
                  </div>
                  <div className="text-[10.5px] font-semibold leading-tight">{fc.name}</div>
                  <div className="text-[9px] opacity-75 mt-1 leading-tight">{fc.spec}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Chromatic Proportion Bars per Track */}
          <div className="bg-[#FAF9F7] border border-[#0D2538]/10 p-3.5 space-y-2">
            <div className="text-[11px] font-bold text-[#0D2538]">
              نسب التوزيع اللوني المعيارية حسب كل مسار بصري
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div className="flex items-center gap-2">
                <span className="w-24 shrink-0 font-semibold">المسار 01:</span>
                <div className="flex-1 h-4 flex overflow-hidden font-mono-tech text-[8.5px] text-white" dir="ltr">
                  <div className="bg-[#0D2538] flex items-center justify-center" style={{ width: "52%" }}>52% #0D2538</div>
                  <div className="bg-[#469041] flex items-center justify-center" style={{ width: "30%" }}>30% #469041</div>
                  <div className="bg-[#2A6AD0] flex items-center justify-center" style={{ width: "18%" }}>18%</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-24 shrink-0 font-semibold">المسار 02:</span>
                <div className="flex-1 h-4 flex overflow-hidden font-mono-tech text-[8.5px] border border-[#0D2538]/15" dir="ltr">
                  <div className="bg-white text-[#0D2538] flex items-center justify-center" style={{ width: "55%" }}>55% #FFFFFF</div>
                  <div className="bg-[#0D2538] text-white flex items-center justify-center" style={{ width: "26%" }}>26% #0D2538</div>
                  <div className="bg-[#2A6AD0] text-white flex items-center justify-center" style={{ width: "14%" }}>14%</div>
                  <div className="bg-[#5AB0FF] text-[#0D2538] font-bold flex items-center justify-center" style={{ width: "5%" }}>5%</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-24 shrink-0 font-semibold">المسار 03:</span>
                <div className="flex-1 h-4 flex overflow-hidden font-mono-tech text-[8.5px] border border-[#0D2538]/15" dir="ltr">
                  <div className="bg-[#F6F4EF] text-[#0D2538] flex items-center justify-center" style={{ width: "44%" }}>44% #F6F4EF</div>
                  <div className="bg-[#0D2538] text-white flex items-center justify-center" style={{ width: "30%" }}>30% #0D2538</div>
                  <div className="bg-[#469041] text-white flex items-center justify-center" style={{ width: "20%" }}>20%</div>
                  <div className="bg-[#B88456] text-white flex items-center justify-center" style={{ width: "6%" }}>6%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Column: Typographic System */}
        <div className="lg:col-span-5 border border-[#0D2538]/12 bg-[#FAF9F7] p-5 flex flex-col justify-between">
          <div>
            <span className="font-mono-tech text-[10px] text-[#2A6AD0] font-semibold tracking-wider">
              TYPOGRAPHIC ARCHITECTURE · AR / FR / DATA
            </span>
            <h3 className="text-lg font-bold text-[#0D2538] mt-1 mb-3">
              المنظومة التايبوغرافية الثلاثية
            </h3>

            {/* Primary Arabic Font */}
            <div className="bg-white border border-[#0D2538]/10 p-3.5 mb-3">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs font-bold text-[#469041]">
                  الخط العربي الرئيسي — IBM Plex Sans Arabic
                </span>
                <span className="font-mono-tech text-[9.5px] text-[#0D2538]/50">300 · 400 · 600 · 700</span>
              </div>
              <div className="text-2xl font-bold text-[#0D2538] leading-snug">
                أبجد هوز — سيادة مالية ورؤية مستدامة
              </div>
              <div className="text-[11.5px] text-[#0D2538]/65 mt-1">
                هندسي معاصر، عالي المقروئية في التقارير المالية والشاشات والطباعة الفاخرة.
              </div>
            </div>

            {/* Secondary Latin & Technical Mono */}
            <div className="grid grid-cols-2 gap-2.5 mb-3.5" dir="ltr">
              <div className="bg-white border border-[#0D2538]/10 p-3">
                <div className="font-mono-tech text-[9px] text-[#2A6AD0] mb-1">LATIN EDITORIAL</div>
                <div className="font-latin text-base font-bold text-[#0D2538]">Plus Jakarta Sans</div>
                <div className="font-latin text-[11px] text-[#0D2538]/65 mt-0.5">
                  Aa Bb Cc · Banque des Institutionnels
                </div>
              </div>
              <div className="bg-white border border-[#0D2538]/10 p-3">
                <div className="font-mono-tech text-[9px] text-[#469041] mb-1">DATA &amp; GPS MONO</div>
                <div className="font-mono-tech text-sm font-semibold text-[#0D2538]">IBM Plex Mono</div>
                <div className="font-mono-tech text-[10.5px] text-[#0D2538]/65 mt-0.5">
                  268.4B MAD · 34°01&apos;N ↗
                </div>
              </div>
            </div>

            {/* Hierarchy Scale Table */}
            <div className="text-[11px] divide-y divide-[#0D2538]/10 border-t border-b border-[#0D2538]/12">
              {[
                { lvl: "H1 عنوان رئيسي", spec: "Bold · 36–56pt · LH 1.18", sample: "الوضوح الاستراتيجي", cls: "text-base font-bold" },
                { lvl: "H2 عنوان فرعي", spec: "SemiBold · 20–28pt · LH 1.3", sample: "تمويل البنيات المهيكلة", cls: "text-sm font-semibold" },
                { lvl: "Body متن تحريري", spec: "Regular · 10.5–14pt · LH 1.75", sample: "تدبير رشيد للادخار طويل الأمد", cls: "text-xs font-normal" },
                { lvl: "KPI مؤشر رقمي", spec: "Mono 600 · Tabular Nums", sample: "+18.4% · AAA · 3.42%", cls: "font-mono-tech text-xs font-semibold text-[#2A6AD0]" },
              ].map((row) => (
                <div key={row.lvl} className="py-2 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-[#0D2538]">{row.lvl}</div>
                    <div className="font-mono-tech text-[9px] text-[#0D2538]/50">{row.spec}</div>
                  </div>
                  <div className={row.cls}>{row.sample}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 text-[10.5px] text-[#0D2538]/65 bg-white px-3 py-2 border-r-2 border-[#0D2538]">
            <strong>قاعدة الأرقام:</strong> تُعتمد الأرقام العربية المشرقية الموحدة (1، 2، 3) بخاصية{" "}
            <span className="font-mono-tech">tabular-nums</span> في جميع الجداول المالية والإحداثيات.
          </div>
        </div>
      </div>

      <PlateFooter page="04" />
    </section>
  );
};
