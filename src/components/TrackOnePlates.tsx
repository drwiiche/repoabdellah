import React, { useState } from "react";
import { Sparkles, ZoomIn } from "lucide-react";
import { CDGLogo, PlateFooter, PlateHeader } from "./CDGLogo";
import { StarArrowMatrix } from "./VisualPatterns";

/* ============================================================================
   PLATE 05 — TRACK 01 SYSTEM: HUMAN VISION & STRATEGIC CLARITY
   ============================================================================ */
export const TrackOneSystemPlate: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<1 | 3 | 6>(1);

  const portraits = [
    {
      src: "./images/track1-portrait-female.jpg",
      name: "بورتريه قيادي 01",
      caption: "هالة حواف مزدوجة (#2A6AD0 + #469041) · حبيبات 35mm طبيعية",
      pos: "object-[50%_20%]",
    },
    {
      src: "./images/track1-portrait-male.jpg",
      name: "بورتريه استراتيجي 02",
      caption: "تعبير عفوي ملتزم · إضاءة محيطية تحريرية بعيدة عن الصور الجاهزة",
      pos: "object-[50%_18%]",
    },
    {
      src: "./images/track1-portrait-analyst.jpg",
      name: "بورتريه الكفاءات 03",
      caption: "نظرة استشرافية نحو الأفق · ملمس بشرة وحبيبات فيلمية أصلية",
      pos: "object-[50%_20%]",
    },
  ];

  return (
    <section
      id="track-1"
      className="brand-plate relative p-8 sm:p-11 flex flex-col justify-between text-white film-grain"
      style={{
        background:
          "linear-gradient(90deg, #3D8239 0%, #1F5C4E 22%, #123954 54%, #0D2538 85%, #0B1F30 100%)",
      }}
    >
      {/* Subtle full-plate dual-reading background */}
      <div className="absolute inset-0 overflow-hidden">
        <StarArrowMatrix cols={32} rows={16} opacity={0.42} />
      </div>

      <PlateHeader
        plateNumber="PLATE 05 · AXE 01"
        sectionAr="المسار الأول: الرؤية البشرية والوضوح الاستراتيجي"
        sectionFr="Vision Humaine & Clarté Stratégique"
        theme="dark"
        logoVariant="mono-white"
        accentTag="النظام البصري 01"
        accentColor="#469041"
      />

      {/* Intro Row */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5 items-end">
        <div className="lg:col-span-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            توقيع تحريري إنساني يجمع صدق البورتريه المغربي بصفاء الأفق الاستراتيجي
          </h2>
          <p className="text-[13px] text-white/78 mt-1.5 leading-relaxed max-w-3xl">
            يُحتفى بالكفاءات المغربية المعاصرة عبر تصوير فوتوغرافي عفوي وملتزم يحافظ على{" "}
            <strong className="text-white">ملمس الحبيبات الفوتوغرافية الطبيعية (Natural Film Grain)</strong>{" "}
            دون تنميق مصطنع، تحيط بحوافه <strong className="text-[#9FE39A]">هالة ضوئية متوهجة</strong>{" "}
            تمزج الأزرق الحيوي (<span className="font-mono-tech">#2A6AD0</span>) بالأخضر المضيء (
            <span className="font-mono-tech">#469041</span>) فوق قبة سماوية مزدوجة القراءة.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end text-[10.5px]">
          <span className="px-2.5 py-1 bg-white/10 border border-white/15">ISO 400 Natural Grain</span>
          <span className="px-2.5 py-1 bg-[#2A6AD0]/30 border border-[#5AB0FF]/35">Rim Halo #2A6AD0 + #469041</span>
          <span className="px-2.5 py-1 bg-[#469041]/30 border border-[#9FE39A]/35">Dual-Read Matrix ↗</span>
        </div>
      </div>

      {/* Main Content Grid: Portraits Triptych + Dual-Reading Background Inspector */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* 1. Editorial Moroccan Portraits with Blue-Green Luminous Rim Halo */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#9FE39A]" />
              01. المعالجة الفوتوغرافية والهالة الضوئية المحيطية (Blue-Green Rim Aura)
            </span>
            <span className="font-mono-tech text-[10px] text-white/55">ZERO STOCK CLICHÉS</span>
          </div>

          <div className="grid grid-cols-3 gap-3.5 flex-1">
            {portraits.map((p) => (
              <figure
                key={p.name}
                className="relative overflow-hidden bg-[#0D2538] portrait-halo film-grain flex flex-col justify-end min-h-[255px] group"
              >
                {/* Optical Blue-Green Rim Glow Layer */}
                <div className="pointer-events-none absolute -inset-2 portrait-halo-ring z-10 mix-blend-screen opacity-80" />
                <img
                  src={p.src}
                  alt={p.name}
                  className={`absolute inset-0 w-full h-full object-cover ${p.pos} contrast-[1.04]`}
                />
                {/* Rim highlight border */}
                <div
                  className="pointer-events-none absolute inset-0 z-10"
                  style={{
                    boxShadow:
                      "inset 2px 2px 18px rgba(42,106,208,0.45), inset -2px -2px 18px rgba(70,144,65,0.48)",
                  }}
                />
                <figcaption className="relative z-20 p-3 bg-gradient-to-t from-[#0D2538] via-[#0D2538]/82 to-transparent pt-10">
                  <div className="text-[11.5px] font-bold text-white">{p.name}</div>
                  <div className="text-[9.5px] text-white/72 leading-snug mt-0.5">{p.caption}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* 2. Dual-Reading Celestial Vault / Ascending Arrow (↗) Matrix + Horizontal Lighting */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
          {/* Dual-Reading Box */}
          <div className="border border-white/18 bg-[#0D2538]/85 backdrop-blur-sm p-4 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="text-xs font-bold text-white">
                02. البنية مزدوجة القراءة (قبة سماوية ↔ مصفوفة ↗)
              </span>
              <div className="no-print flex items-center gap-1 font-mono-tech text-[9.5px]">
                <ZoomIn className="w-3 h-3 text-[#9FE39A]" />
                {([1, 3, 6] as const).map((z) => (
                  <button
                    key={z}
                    type="button"
                    onClick={() => setZoomLevel(z)}
                    className={`px-1.5 py-0.5 border transition cursor-pointer ${
                      zoomLevel === z
                        ? "bg-[#469041] border-[#469041] text-white font-bold"
                        : "border-white/20 text-white/65 hover:text-white"
                    }`}
                  >
                    {z}×
                  </button>
                ))}
              </div>
            </div>

            <div className="relative h-44 overflow-hidden border border-white/15 track1-gradient-ltr">
              {/* Far view / Interactive zoom view */}
              <StarArrowMatrix
                cols={zoomLevel === 1 ? 26 : zoomLevel === 3 ? 14 : 8}
                rows={zoomLevel === 1 ? 12 : zoomLevel === 3 ? 7 : 4}
                arrowScale={zoomLevel === 1 ? 0.9 : zoomLevel === 3 ? 1.8 : 2.8}
                showSubtleGrid={zoomLevel > 1}
                opacity={0.95}
              />

              {/* Permanent 6x Macro Optical Callout Lens (visible on screen & in PDF print!) */}
              <div className="absolute top-1/2 left-5 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-[#9FE39A] bg-[#0D2538]/95 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
                <div
                  className="grid grid-cols-4 gap-2.5 p-3"
                  style={{ direction: "ltr" }}
                >
                  {Array.from({ length: 16 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`font-mono-tech text-[12px] leading-none font-semibold ${
                        idx % 5 === 0
                          ? "text-[#9FE39A]"
                          : idx % 3 === 0
                            ? "text-[#80B5FF]"
                            : "text-white/75"
                      }`}
                    >
                      ↗
                    </span>
                  ))}
                </div>
                <span className="absolute bottom-2.5 font-mono-tech text-[7.5px] font-semibold bg-[#469041] text-white px-2 py-0.5 rounded-full shadow">
                  ZOOM 6× ↗
                </span>
              </div>

              <div className="absolute bottom-2 right-2.5 bg-[#0D2538]/80 border border-white/15 px-2 py-0.5 text-[9.5px] text-white/85">
                من بعيد: سماء مرصعة بالنجوم · عن قرب: مصفوفة أسهم (↗) بزاوية 45°
              </div>
            </div>

            <p className="text-[11px] text-white/72 leading-relaxed mt-2.5">
              تُبنى المصفوفة على شبكة متساوية التباعد (خطوة <span className="font-mono-tech">12pt</span>)
              من أسهم الارتفاع (<span className="font-mono-tech">↗</span>) المستخلصة من حرف{" "}
              <span className="font-mono-tech">G</span> في الشعار، بتفاوت مدروس في الشفافية (10%–95%) يخلق
              إيحاء القبة السماوية الملهمة.
            </p>
          </div>

          {/* 3. Horizontal Strategic Illumination Spectrum */}
          <div className="border border-white/18 bg-[#0D2538]/85 p-3.5">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-bold text-white">03. التدرج الضوئي الأفقي الناعم (الإضاءة)</span>
              <span className="font-mono-tech text-[9.5px] text-[#9FE39A]">LINEAR 90°</span>
            </div>
            <div
              className="h-9 w-full border border-white/20 flex items-center justify-between px-3 font-mono-tech text-[10px] font-semibold"
              dir="ltr"
              style={{
                background:
                  "linear-gradient(90deg, #0D2538 0%, #143D59 38%, #216658 68%, #469041 100%)",
              }}
            >
              <span>#0D2538 · 0% (NUIT PROFONDE)</span>
              <span>→</span>
              <span>#469041 · 100% (CLARTÉ)</span>
            </div>
          </div>
        </div>
      </div>

      <PlateFooter page="05" theme="dark" />
    </section>
  );
};

/* ============================================================================
   PLATE 06 — TRACK 01 REALISTIC MOCKUPS (Annual Report, Digital Billboard, Cards)
   ============================================================================ */
export const TrackOneMockupsPlate: React.FC = () => {
  return (
    <section
      id="track-1-mockups"
      className="brand-plate bg-[#F3F2EE] p-8 sm:p-11 flex flex-col justify-between"
    >
      <PlateHeader
        plateNumber="PLATE 06 · MOCKUPS 01"
        sectionAr="المسار الأول: النماذج التطبيقية الواقعية"
        sectionFr="Applications — Rapport Annuel, Affichage Digital & Cartes"
        accentTag="تطبيقات المسار الأول"
        accentColor="#469041"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* MOCKUP 1: Realistic Hardcover Annual Report 2025 */}
        <div className="lg:col-span-5 bg-[#E4E3DE] border border-[#0D2538]/10 p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px] mb-3">
            <span className="font-bold text-[#0D2538]">01. التقرير السنوي المدمج (غلاف مقوى A4)</span>
            <span className="font-mono-tech text-[9.5px] text-[#0D2538]/55">210 × 297 MM</span>
          </div>

          {/* Studio Book Presentation */}
          <div className="my-auto flex items-center justify-center py-2">
            <div
              className="relative flex flex-row-reverse w-[275px] sm:w-[295px] h-[385px]"
              style={{
                boxShadow:
                  "-22px 26px 38px -12px rgba(13,37,56,0.42), -4px 8px 14px rgba(13,37,56,0.2)",
              }}
            >
              {/* Book Cover Front */}
              <div
                className="relative flex-1 h-full overflow-hidden flex flex-col justify-between p-5 text-white film-grain"
                style={{
                  background:
                    "linear-gradient(90deg, #469041 0%, #1D5A52 34%, #10334E 66%, #0D2538 100%)",
                }}
              >
                {/* Celestial Arrow Matrix */}
                <div className="absolute inset-0">
                  <StarArrowMatrix cols={16} rows={20} arrowScale={0.85} opacity={0.82} />
                </div>

                {/* Editorial Portrait integrated with luminous blue-green rim halo */}
                <div className="absolute bottom-0 left-0 w-[76%] h-[72%] overflow-hidden">
                  <div
                    className="pointer-events-none absolute -inset-3 z-10 rounded-full blur-xl opacity-75"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 30%, rgba(42,106,208,0.65), rgba(70,144,65,0.55) 55%, transparent 75%)",
                    }}
                  />
                  <img
                    src="./images/track1-portrait-female.jpg"
                    alt="غلاف التقرير السنوي لـ CDG Capital"
                    className="relative z-10 w-full h-full object-cover object-[50%_15%] mix-blend-lighten opacity-95"
                    style={{
                      maskImage:
                        "radial-gradient(ellipse 88% 88% at 42% 55%, black 52%, transparent 98%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 88% 88% at 42% 55%, black 52%, transparent 98%)",
                    }}
                  />
                </div>

                {/* Book Spine Fold Crease Highlight */}
                <div className="pointer-events-none absolute top-0 bottom-0 right-2.5 w-[2px] bg-gradient-to-b from-white/25 via-black/35 to-white/15 z-30" />

                {/* Top Official Logo */}
                <div className="relative z-20 flex items-center justify-between pr-2">
                  <CDGLogo variant="official-dark" className="h-[15px] w-auto" />
                  <span className="font-mono-tech text-[9px] text-[#9FE39A] border border-[#9FE39A]/40 px-1.5 py-0.5">
                    2025 ↗
                  </span>
                </div>

                {/* Cover Title Typography */}
                <div className="relative z-20 pr-2 mt-4">
                  <div className="text-[9px] text-[#9FE39A] tracking-wide mb-1">
                    التقرير السنوي المدمج · Rapport Annuel Intégré
                  </div>
                  <h3 className="text-xl font-bold leading-[1.22] text-white">
                    وضوح الرؤية،
                    <br />
                    أثر الإنسان.
                  </h3>
                  <div className="w-8 h-[1.5px] bg-[#469041] mt-2.5" />
                </div>

                {/* Cover Footer */}
                <div className="relative z-20 pr-2 mt-auto pt-3 border-t border-white/20 flex items-center justify-between text-[8px] text-white/80 bg-gradient-to-t from-[#0D2538]/75 to-transparent">
                  <span>المستقبل، بشغف · L&apos;Avenir, avec passion</span>
                  <span className="font-mono-tech">CDGCAPITAL.MA</span>
                </div>
              </div>

              {/* Hardcover Book Spine (Right side for Arabic RTL binding) */}
              <div className="w-3.5 h-full bg-gradient-to-l from-[#081826] via-[#0D2538] to-[#163B56] border-r border-white/15" />
            </div>
          </div>

          <p className="text-[10.5px] text-[#0D2538]/68 mt-3 leading-snug">
            طباعة أوفست عالية الدقة على ورق مطفي غير مصقول للحفاظ على الحبيبات الفوتوغرافية الطبيعية، مع
            ورنيش انتقائي خفيف على مصفوفة الأسهم السماوية (<span className="font-mono-tech">↗</span>).
          </p>
        </div>

        {/* Right Column: MOCKUP 2 (Widescreen Digital Billboard) + MOCKUP 3 (Institutional Cards) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          {/* MOCKUP 2: Architectural Digital Billboard / Lobby Screen */}
          <div className="bg-[#DFDED8] border border-[#0D2538]/10 p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] mb-3">
              <span className="font-bold text-[#0D2538]">
                02. اللافتة الرقمية المؤسساتية وشاشات العرض العريضة (DOOH &amp; Digital Banner)
              </span>
              <span className="font-mono-tech text-[9.5px] text-[#0D2538]/55">16:9 · 4K LED</span>
            </div>

            {/* Realistic Anodized Aluminum Digital Screen Bezel */}
            <div className="bg-[#161B22] p-2.5 rounded-[4px] shadow-[0_18px_32px_-12px_rgba(13,37,56,0.45)] border border-white/10">
              <div
                className="relative h-[205px] overflow-hidden flex items-center justify-between p-6 text-white film-grain"
                style={{
                  background:
                    "linear-gradient(90deg, #469041 0%, #206452 28%, #123B58 60%, #0D2538 100%)",
                }}
              >
                {/* Star-Arrow Dual Reading Field */}
                <div className="absolute inset-0">
                  <StarArrowMatrix cols={26} rows={10} opacity={0.85} />
                </div>

                {/* Blue-Green Halo Portrait on Left */}
                <div className="absolute top-0 bottom-0 left-0 w-[45%] overflow-hidden">
                  <div
                    className="pointer-events-none absolute -inset-2 z-20 mix-blend-screen"
                    style={{
                      background:
                        "radial-gradient(circle at 65% 32%, rgba(42,106,208,0.52), transparent 55%), radial-gradient(circle at 22% 68%, rgba(70,144,65,0.55), transparent 55%)",
                    }}
                  />
                  <img
                    src="./images/track1-portrait-male.jpg"
                    alt="حملة CDG Capital الرقمية"
                    className="relative z-10 w-full h-full object-cover object-[50%_18%] contrast-[1.06]"
                    style={{
                      maskImage:
                        "linear-gradient(to right, black 64%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, black 64%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Editorial Message on Right */}
                <div className="relative z-20 max-w-[58%] flex flex-col justify-between h-full">
                  <CDGLogo variant="official-dark" className="h-[15px] w-auto self-start" />

                  <div>
                    <span className="inline-block text-[9.5px] text-[#9FE39A] mb-1 font-medium">
                      الرؤية الاستراتيجية 2030 · كفاءات ملتزمة
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold leading-snug text-white">
                      حين يلتقي الالتزام الإنساني
                      <br />
                      بوضوح القرار الاستثماري.
                    </h4>
                  </div>

                  <div className="flex items-center gap-3 text-[9.5px] text-white/75 font-mono-tech">
                    <span>CDGCAPITAL.MA</span>
                    <span className="text-[#9FE39A]">↗ GROUPE CDG</span>
                  </div>
                </div>
              </div>
              {/* Screen Stand Indicator */}
              <div className="flex items-center justify-center pt-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#469041]/80" />
              </div>
            </div>
          </div>

          {/* MOCKUP 3: Executive Institutional Business Cards (Recto / Verso) */}
          <div className="bg-[#E8E7E2] border border-[#0D2538]/10 p-5 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] mb-3">
              <span className="font-bold text-[#0D2538]">
                03. البطاقة المؤسساتية التنفيذية — الوجه والظهر (Carte de Visite Direction)
              </span>
              <span className="font-mono-tech text-[9.5px] text-[#0D2538]/55">85 × 55 MM · 400G</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
              {/* Front (Recto): Celestial Arrow Matrix + Official Logo */}
              <div
                className="relative h-[142px] p-5 flex flex-col justify-between text-white overflow-hidden shadow-[0_14px_26px_-10px_rgba(13,37,56,0.38)] film-grain"
                style={{
                  background:
                    "linear-gradient(95deg, #469041 0%, #1A5252 38%, #0D2538 82%)",
                }}
              >
                <div className="absolute inset-0">
                  <StarArrowMatrix cols={14} rows={8} arrowScale={0.85} opacity={0.85} />
                </div>
                <div className="relative z-10 flex justify-between items-center text-[8.5px] text-white/60 font-mono-tech">
                  <span>RECTO</span>
                  <span>↗</span>
                </div>
                <div className="relative z-10 my-auto">
                  <CDGLogo variant="official-dark" className="h-[17px] w-auto" />
                </div>
                <div className="relative z-10 text-[9px] text-white/80 flex items-center justify-between">
                  <span>المستقبل، بشغف</span>
                  <span className="font-latin text-[8.5px] text-white/65">Filiale du Groupe CDG</span>
                </div>
              </div>

              {/* Back (Verso): Clean Executive Identity with Luminous Bottom Gradient Edge */}
              <div className="relative h-[142px] bg-white p-5 flex flex-col justify-between shadow-[0_14px_26px_-10px_rgba(13,37,56,0.22)] border border-[#0D2538]/10 overflow-hidden">
                <div
                  className="absolute bottom-0 left-0 right-0 h-[4px]"
                  style={{
                    background: "linear-gradient(90deg, #469041 0%, #2A6AD0 50%, #0D2538 100%)",
                  }}
                />
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[13px] font-bold text-[#0D2538]">سلمى بناني</div>
                    <div className="text-[9.5px] font-medium text-[#469041]">
                      مديرة الاستراتيجية والتمويل المستدام
                    </div>
                  </div>
                  <CDGLogo variant="official-light" className="h-[11px] w-auto" />
                </div>

                <div className="text-[9px] text-[#0D2538]/72 space-y-0.5 border-t border-[#0D2538]/10 pt-2">
                  <div>ساحة مولاي الحسن، عمارة المامونية — الرباط، المغرب</div>
                  <div className="font-mono-tech text-[8.5px] text-[#0D2538]/80 flex justify-between">
                    <span>s.bennani@cdgcapital.ma</span>
                    <span>+212 5 37 66 52 52</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PlateFooter page="06" />
    </section>
  );
};
