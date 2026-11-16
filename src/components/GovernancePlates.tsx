import React from "react";
import { CheckCircle2 } from "lucide-react";
import { CDGLogo, PlateFooter, PlateHeader } from "./CDGLogo";
import { StarArrowMatrix } from "./VisualPatterns";

/* ============================================================================
   PLATE 11 — VERBAL IDENTITY, MESSAGING & BRAND GOVERNANCE (Brand-Building-Skills)
   ============================================================================ */
export const VerbalGovernancePlate: React.FC = () => {
  const toneAxes = [
    { left: "عفوي عابر", right: "مؤسساتي رصين", pos: 86, color: "#0D2538" },
    { left: "إنشائي عام", right: "تحليلي موثّق بالأرقام", pos: 90, color: "#2A6AD0" },
    { left: "بيروقراطي جامد", right: "إنساني ملتزم وواضح", pos: 78, color: "#469041" },
    { left: "دعائي مبالغ", right: "سيادي واثق ومتزن", pos: 88, color: "#B88456" },
  ];

  const complianceRules = [
    "استخدام الشعار الأصلي المعتمد لـ CDG Capital بملفه المتجهي دون أي تعديل في الشكل أو الخطوط أو النسب.",
    "الالتزام الحصري بالثلاثية اللونية الأساسية: الأخضر (#469041)، الأزرق الحيوي (#2A6AD0)، والأزرق العميق (#0D2538).",
    "المسار 01: صور مغربية عفوية بحبيبات طبيعية + هالة (#2A6AD0/#469041) + خلفية أسهم (↗) + تدرج أفقي (#0D2538→#469041).",
    "المسار 02: طبوغرافيا المغرب بسماكة 1px + شبكة 12 عموداً ظاهرة مع (↗) وإحداثيات + نقطة وحيدة فقط بلون (#5AB0FF).",
    "المسار 03: أربعة أشكال هندسية فقط (مربع، ربع دائرة، قوس، دائرة) Ton-sur-ton + ورق فاخر وزليج ونحاس 1pt ونقش جاف.",
    "حظر تام للصور النمطية الجاهزة (Stock Clichés) والزخارف الفلكلورية التقليدية وتعدد نقاط التركيز في الرسم الواحد.",
  ];

  return (
    <section
      id="governance"
      className="brand-plate bg-white p-8 sm:p-11 flex flex-col justify-between"
    >
      <PlateHeader
        plateNumber="PLATE 11"
        sectionAr="الهوية اللفظية، هندسة الرسائل، وحوكمة المعايير"
        sectionFr="Identité Verbale, Architecture de Message & Gouvernance"
        accentTag="Voice & Standards"
        accentColor="#0D2538"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* Right Column: Brand Voice, Vocabulary & Before/After */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-4">
          <div>
            <span className="font-mono-tech text-[10px] text-[#469041] font-semibold">
              VERBAL IDENTITY &amp; TONE SPECTRUM
            </span>
            <h2 className="text-xl font-bold text-[#0D2538] mt-1 mb-1.5">
              جوهر الصوت المؤسسي: ثقة السيادة، دقة الأرقام، والتزام الأثر
            </h2>
            <p className="text-[12px] text-[#0D2538]/72 leading-relaxed">
              تتحدث CDG Capital بلغة الخبير المؤسساتي الموثوق: جمل متماسكة، مصطلحات مالية معيارية
              دقيقة، وربط دائم بين الأداء المالي والأثر التنموي طويل الأمد للمملكة.
            </p>
          </div>

          {/* Tone Spectrum */}
          <div className="bg-[#FAF9F7] border border-[#0D2538]/10 p-3.5 space-y-2.5">
            {toneAxes.map((ax) => (
              <div key={ax.right} className="space-y-1">
                <div className="flex justify-between text-[10.5px]">
                  <span className="font-bold text-[#0D2538]">{ax.right}</span>
                  <span className="text-[#0D2538]/45">{ax.left}</span>
                </div>
                <div className="relative h-1.5 bg-[#0D2538]/10 rounded-full" dir="ltr">
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white shadow"
                    style={{ left: `${100 - ax.pos}%`, backgroundColor: ax.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Vocabulary Do / Don't */}
          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="border border-[#469041]/30 bg-[#469041]/[0.04] p-3">
              <div className="font-bold text-[#469041] mb-1.5">مفردات نعتمدها ✓</div>
              <p className="text-[#0D2538]/80 leading-relaxed">
                الطرف الموثوق · الأفق طويل الأمد · التمويل المهيكل · ضبط المخاطر · الأثر الوطني
                المستدام · الشفافية المعيارية · الوضوح الاستراتيجي.
              </p>
            </div>
            <div className="border border-red-700/20 bg-red-50/30 p-3">
              <div className="font-bold text-red-700 mb-1.5">مفردات نستبعدها ✕</div>
              <p className="text-[#0D2538]/75 leading-relaxed">
                عوائد خيالية · حلول ثورية خارقة · أرباح سريعة · شعارات ترويجية مبالغة · لغة مضاربية
                قصيرة الأجل · كليشيهات إنشائية غير مبرهنة.
              </p>
            </div>
          </div>

          {/* Before / After Editorial Example */}
          <div className="border-r-[3px] border-[#2A6AD0] bg-[#F4F7FB] p-3 text-[11px]">
            <div className="text-[#0D2538]/55 line-through mb-1">
              قبل: «نقدم أفضل الحلول البنكية الثورية لتمويل جميع مشاريعكم بسرعة فائقة.»
            </div>
            <div className="text-[#0D2538] font-semibold">
              بعد: «نهيكل حلول تمويل طويلة الأمد بمعايير حوكمة دولية لمواكبة المشاريع المهيكلة
              للمملكة.»
            </div>
          </div>
        </div>

        {/* Left Column: Brand Guidelines Checklist & Technical Print Specs */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-4">
          <div className="bg-[#0D2538] text-white p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/15 pb-2.5 mb-3">
                <span className="text-xs font-bold">
                  قائمة التحقق الإلزامية قبل النشر والطباعة (Brand Compliance)
                </span>
                <span className="font-mono-tech text-[9.5px] text-[#9FE39A]">QA · 6/6</span>
              </div>

              <ul className="space-y-2.5">
                {complianceRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[11.5px] text-white/88 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-[#469041] shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pre-Press Technical Specification Matrix */}
            <div className="mt-4 pt-3 border-t border-white/15 grid grid-cols-3 gap-2.5 text-[10px]">
              <div className="bg-white/[0.06] p-2.5">
                <div className="font-mono-tech text-[9px] text-[#9FE39A] mb-0.5">PRINT DPI</div>
                <div className="font-semibold">300 DPI · CMYK + PMS</div>
                <div className="text-white/55 text-[9px]">FOGRA39 / FOGRA51</div>
              </div>
              <div className="bg-white/[0.06] p-2.5">
                <div className="font-mono-tech text-[9px] text-[#5AB0FF] mb-0.5">HAIRLINES</div>
                <div className="font-semibold">1px Topo · 1pt Cuivre</div>
                <div className="text-white/55 text-[9px]">PMS 876 C Metallic</div>
              </div>
              <div className="bg-white/[0.06] p-2.5">
                <div className="font-mono-tech text-[9px] text-[#E4B88D] mb-0.5">FINISHING</div>
                <div className="font-semibold">Blind Emboss 0.6mm</div>
                <div className="text-white/55 text-[9px]">Vélin Coton 350–600g</div>
              </div>
            </div>
          </div>

          {/* Design Principles Summary Bar */}
          <div className="grid grid-cols-3 gap-2.5 text-[10.5px]">
            <div className="border border-[#0D2538]/12 p-3 bg-[#FAF9F7]">
              <div className="font-bold text-[#469041]">01. الأصالة الصادقة</div>
              <div className="text-[#0D2538]/68 mt-0.5 leading-tight">
                الإنسان المغربي المعاصر بحقيقته وملمسه الطبيعي.
              </div>
            </div>
            <div className="border border-[#0D2538]/12 p-3 bg-[#FAF9F7]">
              <div className="font-bold text-[#2A6AD0]">02. الانضباط الشفاف</div>
              <div className="text-[#0D2538]/68 mt-0.5 leading-tight">
                كل خط وشبكة ونقطة تؤدي وظيفة تحليلية دقيقة.
              </div>
            </div>
            <div className="border border-[#0D2538]/12 p-3 bg-[#FAF9F7]">
              <div className="font-bold text-[#0D2538]">03. الديمومة السيادية</div>
              <div className="text-[#0D2538]/68 mt-0.5 leading-tight">
                تجريد معماري ومواد نبيلة تعبّر عن المدى الطويل.
              </div>
            </div>
          </div>
        </div>
      </div>

      <PlateFooter page="11" />
    </section>
  );
};

/* ============================================================================
   PLATE 12 — SOVEREIGN BACK COVER & INSTITUTIONAL COLOPHON
   ============================================================================ */
export const BackCoverPlate: React.FC = () => {
  return (
    <section
      id="colophon"
      className="brand-plate relative min-h-[680px] bg-[#0D2538] text-white p-10 sm:p-14 flex flex-col justify-between overflow-hidden film-grain"
    >
      {/* Subtle Horizontal Ambient Base Glow */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-2"
        style={{
          background:
            "linear-gradient(90deg, #469041 0%, #2A6AD0 45%, #5AB0FF 65%, #B88456 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-35">
        <StarArrowMatrix cols={30} rows={15} />
      </div>

      {/* Top Metadata */}
      <div className="relative z-10 flex items-center justify-between text-[10.5px] text-white/55 font-mono-tech border-b border-white/12 pb-4">
        <span>CHARTE D&apos;IDENTITÉ VISUELLE INSTITUTIONNELLE</span>
        <span>PLATE 12 / 12 · COLOPHON ↗</span>
      </div>

      {/* Center Official Sovereign Lockup */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center py-12">
        <CDGLogo variant="official-dark" className="h-10 sm:h-12 w-auto mb-6" />
        <div className="w-16 copper-rule-h mb-5" />
        <p className="text-lg sm:text-xl font-light text-white/92 tracking-wide mb-1.5">
          المستقبل، بشغف والتزام
        </p>
        <p className="font-latin text-xs uppercase tracking-[0.28em] text-[#9FE39A]">
          L&apos;Avenir, avec passion
        </p>
      </div>

      {/* Bottom Official Coordinates & Contacts */}
      <div className="relative z-10 border-t border-white/14 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[11px] text-white/70">
        <div>
          <div className="text-white font-semibold mb-1">المقر الاجتماعي · Siège Social</div>
          <div>ساحة مولاي الحسن، عمارة المامونية — الرباط</div>
          <div className="font-latin text-[10px] text-white/55">
            Place Moulay El Hassan, Immeuble Mamounia, Rabat
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-1">حوكمة الهوية المؤسساتية</div>
          <div>مديرية التواصل والعلامة — CDG Capital S.A.</div>
          <div className="font-mono-tech text-[10px] text-[#9FE39A] mt-0.5">
            www.cdgcapital.ma · +212 5 37 66 52 52
          </div>
        </div>

        <div className="sm:text-left font-mono-tech text-[10px] space-y-1">
          <div className="text-white">34°01&apos;15&quot;N · 06°50&apos;30&quot;W ↗</div>
          <div className="text-white/55">#469041 · #2A6AD0 · #0D2538 · #5AB0FF</div>
          <div className="text-white/45">CAPITAL SOCIAL: 1.860.000.000 MAD</div>
        </div>
      </div>
    </section>
  );
};
