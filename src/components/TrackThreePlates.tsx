import React, { useState } from "react";
import { CDGLogo, PlateFooter, PlateHeader } from "./CDGLogo";
import {
  ArchitecturalTile,
  PrimitiveShape,
  TonSurTonMosaic,
  TonSurTonPalette,
} from "./VisualPatterns";

/* ============================================================================
   PLATE 09 — TRACK 03 SYSTEM: ARCHITECTURAL SOVEREIGNTY & INFRASTRUCTURE
   ============================================================================ */
export const TrackThreeSystemPlate: React.FC = () => {
  const [palette, setPalette] = useState<TonSurTonPalette>("navy");

  const primitives: Array<{
    shape: PrimitiveShape;
    ar: string;
    fr: string;
    meaning: string;
  }> = [
    { shape: "square", ar: "01. المربع", fr: "Carré", meaning: "القاعدة والرسوخ المالي" },
    { shape: "quarter", ar: "02. ربع الدائرة", fr: "Quart de cercle", meaning: "التحول والتدفق" },
    { shape: "arch", ar: "03. القوس", fr: "Arche", meaning: "العبور المعماري المعاصر" },
    { shape: "circle", ar: "04. الدائرة", fr: "Cercle", meaning: "التكامل والاستدامة" },
  ];

  const sectors = [
    {
      title: "الطاقة المتجددة",
      sub: "مركبات الطاقة الشمسية والريحية",
      img: "./images/track3-solar-energy.jpg",
      shape: "circle" as PrimitiveShape,
    },
    {
      title: "السكك الحديدية",
      sub: "المنشآت الفنية والخطوط فائقة السرعة",
      img: "./images/track3-rail-viaduct.jpg",
      shape: "arch" as PrimitiveShape,
    },
    {
      title: "تحلية المياه",
      sub: "محطات تحلية مياه البحر والأمن المائي",
      img: "./images/track3-desalination.jpg",
      shape: "quarter" as PrimitiveShape,
    },
    {
      title: "التعليم والبحث",
      sub: "الأقطاب الجامعية المغربية المعاصرة",
      img: "./images/track3-education-campus.jpg",
      shape: "square" as PrimitiveShape,
    },
  ];

  return (
    <section
      id="track-3"
      className="brand-plate cotton-paper p-8 sm:p-11 flex flex-col justify-between"
    >
      <PlateHeader
        plateNumber="PLATE 09 · AXE 03"
        sectionAr="المسار الثالث: السيادة المعمارية والبنية التحتية"
        sectionFr="Souveraineté Architecturale, Matières & Infrastructures"
        theme="paper"
        accentTag="النظام البصري 03"
        accentColor="#B88456"
      />

      {/* Intro */}
      <div className="mb-4 flex flex-col lg:flex-row lg:items-end justify-between gap-3">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-[28px] font-bold text-[#0D2538] leading-snug">
            معمار مغربي تجريدي معاصر يجسّد متانة تمويل المشاريع المهيكلة الكبرى
          </h2>
          <p className="text-[12.5px] text-[#0D2538]/76 mt-1 leading-relaxed">
            بعيداً عن أي زخرفة فلكلورية تقليدية، تنطلق الهوية من <strong>وحدة مربعة أساسية</strong>{" "}
            تتفرع إلى أربعة أشكال صافية (مربع، ربع دائرة، قوس، دائرة) بتناغم أحادي الدرجة{" "}
            (<strong>Ton-sur-ton</strong>)، مدعومة بملمس الورق الفاخر، لمعان الزليج العميق، خطوط
            نحاسية دقيقة (<span className="font-mono-tech">1pt</span>)، والنقش البارز الجاف (
            <strong>Blind Embossing</strong>).
          </p>
        </div>
        <div className="copper-rule-h w-28 shrink-0 hidden lg:block mb-2" />
      </div>

      {/* Top Row: 4 Geometric Primitives + Ton-sur-ton Modular System + Materiality Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* 1. Base Square Unit & 4 Shapes + Ton-sur-ton Matrix */}
        <div className="lg:col-span-7 bg-white/85 copper-border p-4 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-[#0D2538]">
              01. الوحدة المربعة (1U) والأشكال الأربعة · تكوين Ton-sur-ton
            </span>
            <div className="no-print flex items-center gap-1 text-[10px]">
              {(
                [
                  { id: "navy", label: "كحلي #0D2538" },
                  { id: "green", label: "أخضر #469041" },
                  { id: "emboss", label: "نقش جاف" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setPalette(tab.id)}
                  className={`px-2 py-0.5 border transition cursor-pointer ${
                    palette === tab.id
                      ? "bg-[#0D2538] text-white border-[#0D2538]"
                      : "border-[#0D2538]/20 text-[#0D2538]/70 hover:text-[#0D2538]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center">
            {/* 4 Individual Primitives Derived from Base Square */}
            <div className="sm:col-span-7 grid grid-cols-2 gap-2.5">
              {primitives.map((p) => (
                <div
                  key={p.shape}
                  className="flex items-center gap-2.5 p-2 bg-[#F6F4EF] border border-[#B88456]/40"
                >
                  <div className="w-12 h-12 shrink-0">
                    <ArchitecturalTile
                      shape={p.shape}
                      bgColor="#0D2538"
                      fgColor="#1A4566"
                      copperStroke={true}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-[#0D2538]">{p.ar}</div>
                    <div className="font-latin text-[9px] text-[#B88456] font-semibold">{p.fr}</div>
                    <div className="text-[9.5px] text-[#0D2538]/68 leading-tight">{p.meaning}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Assembled Ton-sur-ton Composition */}
            <div className="sm:col-span-5">
              <TonSurTonMosaic
                palette={palette}
                cols={4}
                count={12}
                className="copper-border shadow-inner"
              />
              <div className="mt-1.5 flex justify-between font-mono-tech text-[8.5px] text-[#0D2538]/60">
                <span>TON-SUR-TON MODULAR</span>
                <span>FILET CUIVRÉ 1PT</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Tactile Materiality Board: Zellige Sheen + Blind Embossing + 1pt Copper */}
        <div className="lg:col-span-5 bg-white/85 copper-border p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs mb-3">
            <span className="font-bold text-[#0D2538]">02. لوحة المواد والملمس الفاخر</span>
            <span className="font-mono-tech text-[9.5px] text-[#B88456] font-semibold">
              MATÉRIOTHÈQUE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 flex-1">
            {/* Material A: Contemporary Deep Zellige Glaze + 1pt Copper */}
            <div className="relative overflow-hidden copper-border min-h-[126px] flex flex-col justify-end">
              <img
                src="./images/track3-zellige-material.jpg"
                alt="لمعان الزليج المعاصر والخطوط النحاسية"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 p-2.5 bg-gradient-to-t from-[#0D2538]/92 via-[#0D2538]/60 to-transparent text-white">
                <div className="text-[10.5px] font-bold">لمعان الزليج العميق + نحاس 1pt</div>
                <div className="text-[8.5px] text-white/75">أخضر #469041 وكحلي #0D2538</div>
              </div>
            </div>

            {/* Material B: Heavy Cotton Stock + Blind Embossing Relief */}
            <div className="relative cotton-paper border border-[#0D2538]/12 p-3 min-h-[126px] flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-2 w-20 h-20 mx-auto my-auto">
                <div className="blind-emboss rounded-tl-full" />
                <div className="blind-emboss rounded-full" />
                <div className="blind-emboss" />
                <div className="blind-deboss rounded-t-full" />
              </div>
              <div className="copper-rule-h w-full my-1" />
              <div>
                <div className="text-[10.5px] font-bold text-[#0D2538]">
                  النقش البارز الجاف (Blind Emboss)
                </div>
                <div className="text-[8.5px] text-[#0D2538]/65">ورق قطني فاخر 350–600g + خط 1pt</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: 4 Sovereign Sectors Shot in Sharp Grazing Light (Lumière rasante) */}
      <div>
        <div className="flex items-center justify-between text-xs mb-2.5">
          <span className="font-bold text-[#0D2538]">
            03. تصوير المنشآت الهندسية الكبرى بإضاءة جانبية حادة (Lumière rasante)
          </span>
          <span className="font-mono-tech text-[9.5px] text-[#0D2538]/60">
            ÉNERGIE · RAIL · DESSALEMENT · ÉDUCATION
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          {sectors.map((s) => (
            <figure
              key={s.title}
              className="relative h-36 overflow-hidden copper-border bg-[#0D2538] flex flex-col justify-between group"
            >
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover contrast-[1.08]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D2538]/92 via-[#0D2538]/20 to-transparent" />
              <div className="relative z-10 p-2 flex justify-end">
                <div className="w-6 h-6 shadow">
                  <ArchitecturalTile
                    shape={s.shape}
                    bgColor="#0D2538"
                    fgColor="#469041"
                    copperStroke={true}
                  />
                </div>
              </div>
              <figcaption className="relative z-10 p-2.5 text-white border-t border-[#B88456]/55 bg-[#0D2538]/65 backdrop-blur-[1px]">
                <div className="text-[11.5px] font-bold leading-tight">{s.title}</div>
                <div className="text-[9px] text-white/75 mt-0.5 truncate">{s.sub}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <PlateFooter page="09" theme="paper" />
    </section>
  );
};

/* ============================================================================
   PLATE 10 — TRACK 03 REALISTIC MOCKUPS (Embossed Report, Infra Totem, Cotton Card)
   ============================================================================ */
export const TrackThreeMockupsPlate: React.FC = () => {
  return (
    <section
      id="track-3-mockups"
      className="brand-plate bg-[#EAE5DC] p-8 sm:p-11 flex flex-col justify-between"
    >
      <PlateHeader
        plateNumber="PLATE 10 · MOCKUPS 03"
        sectionAr="المسار الثالث: النماذج التطبيقية للسيادة المعمارية والبنية التحتية"
        sectionFr="Applications — Rapport Infrastructures, Affichage & Papeterie Gaufrée"
        theme="paper"
        accentTag="تطبيقات المسار الثالث"
        accentColor="#B88456"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* MOCKUP 1: Sovereign Infrastructure Financing Hardcover Report (Cotton + Blind Emboss + Copper 1pt + Zellige Spine) */}
        <div className="lg:col-span-5 bg-[#DFD9CE] border border-[#B88456]/35 p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] mb-3">
            <span className="font-bold text-[#0D2538]">
              01. تقرير تمويل المشاريع الكبرى (نقش جاف + نحاس 1pt)
            </span>
            <span className="font-mono-tech text-[9.5px] text-[#8E6139]">GMUND COTTON</span>
          </div>

          <div className="my-auto flex items-center justify-center py-1">
            <div
              className="relative flex flex-row-reverse w-[275px] sm:w-[292px] h-[386px]"
              style={{
                boxShadow:
                  "-22px 26px 38px -12px rgba(13,37,56,0.38), -4px 6px 12px rgba(13,37,56,0.16)",
              }}
            >
              {/* Front Cotton Hardcover with 1pt Copper Frame & Blind Embossed Modular Band */}
              <div className="relative flex-1 cotton-paper p-5 flex flex-col justify-between overflow-hidden">
                {/* Inner 1pt Copper Architectural Border */}
                <div className="pointer-events-none absolute inset-3 copper-border" />

                {/* Top Official Logo */}
                <div className="relative z-10 px-1.5 pt-1 flex items-center justify-between">
                  <CDGLogo variant="official-light" className="h-[14px] w-auto" />
                  <span className="font-mono-tech text-[8.5px] text-[#9E6C40] font-semibold">
                    2025
                  </span>
                </div>

                {/* Title + 1pt Copper Rule */}
                <div className="relative z-10 px-1.5 mt-3">
                  <div className="text-[8.5px] text-[#9E6C40] font-semibold tracking-wide">
                    التقرير السنوي لتمويل البنيات التحتية
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0D2538] leading-snug mt-0.5">
                    هندسة السيادة،
                    <br />
                    تمويل الأثر الدائم.
                  </h3>
                  <div className="copper-rule-h w-full mt-2.5" />
                </div>

                {/* Blind Embossed 4-Shape Relief Row on Cotton Paper */}
                <div className="relative z-10 px-1.5 grid grid-cols-4 gap-2 my-2">
                  <div className="aspect-square blind-emboss" />
                  <div className="aspect-square blind-emboss rounded-tl-full" />
                  <div className="aspect-square blind-emboss rounded-t-full" />
                  <div className="aspect-square blind-emboss rounded-full" />
                </div>

                {/* Grazing-Light Monumental Viaduct Photograph Framed in 1pt Copper */}
                <div className="relative z-10 mx-1.5 h-[138px] copper-border overflow-hidden">
                  <img
                    src="./images/track3-rail-viaduct.jpg"
                    alt="تمويل البنية التحتية للسكك الحديدية"
                    className="w-full h-full object-cover contrast-[1.08]"
                  />
                  <div className="absolute bottom-0 inset-x-0 px-2 py-1 bg-[#0D2538]/80 text-[7.5px] text-white/85 flex justify-between">
                    <span>الطاقة · السكك الحديدية · تحلية المياه · التعليم</span>
                    <span className="font-mono-tech text-[#E4B88D]">MAROC</span>
                  </div>
                </div>
              </div>

              {/* Glazed Deep Zellige Hardcover Cloth Spine (Right RTL binding) */}
              <div className="w-5 h-full bg-[#0D2538] zellige-sheen border-r border-[#B88456] relative overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-[1pt] bg-[#B88456]" />
                <div className="h-1/3 bg-[#469041]/85 border-b border-[#B88456]" />
              </div>
            </div>
          </div>

          <p className="text-[10.5px] text-[#0D2538]/70 mt-3 leading-snug">
            غلاف من ورق قطني عاجي (<span className="font-mono-tech">450g</span>) بنقش بارز جاف عميق
            للأشكال الأربعة، مع ختم نحاسي حراري (<span className="font-mono-tech">1pt</span>) وكعب
            بلمعة الزليج.
          </p>
        </div>

        {/* Left Column: MOCKUP 2 (Architectural Banner) + MOCKUP 3 (Blind-Embossed Cotton Cards) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          {/* MOCKUP 2: Sovereign Infrastructure Digital & Architectural Banner */}
          <div className="bg-[#DFD9CE] border border-[#B88456]/35 p-5">
            <div className="flex items-center justify-between text-[11px] mb-3">
              <span className="font-bold text-[#0D2538]">
                02. اللافتة المؤسساتية لتمويل المشاريع الكبرى (طاقة · مياه · سكك · تعليم)
              </span>
              <span className="font-mono-tech text-[9.5px] text-[#8E6139]">LUMIÈRE RASANTE</span>
            </div>

            <div className="bg-[#1B1917] p-2 rounded-[3px] shadow-[0_18px_32px_-12px_rgba(13,37,56,0.42)]">
              <div className="relative h-[208px] bg-[#0D2538] copper-border overflow-hidden grid grid-cols-12 text-white">
                {/* Right (7 cols): Editorial Copy + Official Logo + Copper 1pt Rules */}
                <div className="col-span-7 p-4 sm:p-5 flex flex-col justify-between relative z-10 border-l border-[#B88456]/65 zellige-sheen">
                  <CDGLogo variant="official-dark" className="h-[14px] w-auto self-start" />

                  <div className="my-auto py-1">
                    <div className="text-[9px] text-[#E4B88D] tracking-wide mb-1">
                      التمويل المهيكل للبنيات التحتية السيادية
                    </div>
                    <h4 className="text-base sm:text-lg font-bold leading-snug">
                      نشيّد ركائز الاقتصاد الوطني
                      <br />
                      بمتانة مالية عابرة للأجيال.
                    </h4>
                  </div>

                  <div className="border-t border-[#B88456]/55 pt-2 flex items-center justify-between gap-2 text-[9px] text-white/85">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#E4B88D]" />
                      الطاقة
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-tl-full bg-[#469041]" />
                      تحلية المياه
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-t-full bg-[#E4B88D]" />
                      السكك الحديدية
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 bg-[#469041]" />
                      التعليم
                    </span>
                  </div>
                </div>

                {/* Left (5 cols): Split Grazing-Light Solar Photo + Ton-sur-ton 4-Shape Mosaic */}
                <div className="col-span-5 grid grid-rows-3 relative">
                  <div className="row-span-2 relative overflow-hidden border-b border-[#B88456]/70">
                    <img
                      src="./images/track3-solar-energy.jpg"
                      alt="مركب نور للطاقة الشمسية بإضاءة جانبية حادة"
                      className="w-full h-full object-cover contrast-[1.1]"
                    />
                  </div>
                  <div className="row-span-1">
                    <TonSurTonMosaic palette="green" cols={4} count={4} withCopper={true} className="h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOCKUP 3: Luxury 600gsm Blind-Embossed Cotton & Glazed Zellige Business Cards */}
          <div className="bg-[#E3DDD3] border border-[#B88456]/35 p-5 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] mb-3">
              <span className="font-bold text-[#0D2538]">
                03. البطاقة المؤسساتية الفاخرة — ورق قطني منقوش على الجاف وخط نحاسي (1pt)
              </span>
              <span className="font-mono-tech text-[9.5px] text-[#8E6139]">600G + FOIL 1PT</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
              {/* Front: Pure Cotton Stock + Blind Embossed 4 Shapes + 1pt Copper Line + Logo */}
              <div className="relative h-[142px] cotton-paper copper-border p-4 flex flex-col justify-between shadow-[0_14px_26px_-10px_rgba(13,37,56,0.28)] overflow-hidden">
                {/* Tactile Blind-Embossed Geometric Strip on Left */}
                <div className="absolute top-3 bottom-3 left-3 w-14 grid grid-cols-1 grid-rows-3 gap-1.5">
                  <div className="blind-emboss rounded-tl-full" />
                  <div className="blind-emboss rounded-t-full" />
                  <div className="blind-emboss rounded-full" />
                </div>

                <div className="relative z-10 pr-0.5 max-w-[72%]">
                  <CDGLogo variant="official-light" className="h-[12px] w-auto" />
                </div>

                <div className="relative z-10 max-w-[72%]">
                  <div className="text-[12px] font-bold text-[#0D2538]">يوسف المنصوري</div>
                  <div className="text-[9px] text-[#8E6139] font-semibold">
                    مدير تمويل المشاريع الكبرى والبنيات التحتية
                  </div>
                  <div className="copper-rule-h w-full my-1.5" />
                  <div className="font-mono-tech text-[8px] text-[#0D2538]/75">
                    y.mansouri@cdgcapital.ma
                  </div>
                </div>
              </div>

              {/* Back: Deep Navy Ton-sur-ton Glazed Zellige Sheen + 1pt Copper Inlay + Official Logo */}
              <div className="relative h-[142px] bg-[#0D2538] copper-border zellige-sheen overflow-hidden shadow-[0_14px_26px_-10px_rgba(13,37,56,0.4)] grid grid-cols-12">
                <div className="col-span-5 border-l border-[#B88456]/70">
                  <TonSurTonMosaic palette="navy" cols={2} count={6} withCopper={true} className="h-full" />
                </div>
                <div className="col-span-7 p-4 flex flex-col justify-between text-white">
                  <span className="font-mono-tech text-[7.5px] text-[#E4B88D] self-end">
                    INFRASTRUCTURES
                  </span>
                  <CDGLogo variant="official-dark" className="h-[12px] w-auto my-auto" />
                  <div className="text-[8px] text-white/65 border-t border-[#B88456]/45 pt-1.5">
                    ساحة مولاي الحسن · الرباط، المملكة المغربية
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PlateFooter page="10" theme="paper" />
    </section>
  );
};
