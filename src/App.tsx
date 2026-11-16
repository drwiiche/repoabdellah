import { useState } from "react";
import { Download, FileCode2, FileDown, Layers, Printer } from "lucide-react";
import { CDGLogo, downloadOfficialLogoSVG } from "./components/CDGLogo";
import {
  ColorTypographyPlate,
  CoverPlate,
  LogoPlate,
  StrategyPlate,
} from "./components/FoundationPlates";
import {
  TrackOneMockupsPlate,
  TrackOneSystemPlate,
} from "./components/TrackOnePlates";
import {
  TrackTwoMockupsPlate,
  TrackTwoSystemPlate,
} from "./components/TrackTwoPlates";
import {
  TrackThreeMockupsPlate,
  TrackThreeSystemPlate,
} from "./components/TrackThreePlates";
import {
  BackCoverPlate,
  VerbalGovernancePlate,
} from "./components/GovernancePlates";

type ViewFilter = "all" | "foundation" | "track1" | "track2" | "track3" | "governance";

export function App() {
  const [filter, setFilter] = useState<ViewFilter>("all");
  const [printPreview, setPrintPreview] = useState(false);

  const handleDirectPrint = () => {
    if (filter !== "all") {
      setFilter("all");
      setTimeout(() => window.print(), 180);
    } else {
      window.print();
    }
  };

  const handleDownloadHTML = () => {
    const htmlContent = "<!doctype html>\n" + document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CDG-Capital-Brand-Identity-System.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const navItems: Array<{ id: ViewFilter; label: string; href: string; dot?: string }> = [
    { id: "all", label: "الدليل الكامل (12)", href: "#cover" },
    { id: "foundation", label: "الأساس والشعار والألوان", href: "#foundation" },
    { id: "track1", label: "المسار 01: الرؤية البشرية", href: "#track-1", dot: "#469041" },
    { id: "track2", label: "المسار 02: الدقة التحليلية", href: "#track-2", dot: "#5AB0FF" },
    { id: "track3", label: "المسار 03: السيادة المعمارية", href: "#track-3", dot: "#B88456" },
    { id: "governance", label: "الصوت والحوكمة", href: "#governance" },
  ];

  const showFoundation = filter === "all" || filter === "foundation";
  const showTrack1 = filter === "all" || filter === "track1";
  const showTrack2 = filter === "all" || filter === "track2";
  const showTrack3 = filter === "all" || filter === "track3";
  const showGov = filter === "all" || filter === "governance";

  return (
    <div className={`min-h-screen ${printPreview ? "print-preview-mode bg-[#D6D3CB]" : "bg-[#E7E5DE]"}`}>
      {/* ===================================================================
          EXECUTIVE NON-PRINT NAVIGATION & PRINT / PDF EXPORT BAR
          =================================================================== */}
      <nav className="no-print sticky top-0 z-50 bg-[#0D2538]/96 backdrop-blur-md text-white border-b border-white/12 shadow-lg">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Official Brand Logo */}
          <a
            href="#cover"
            onClick={() => setFilter("all")}
            className="flex items-center gap-3 group"
          >
            <CDGLogo variant="official-dark" className="h-[18px] w-auto" />
            <span className="hidden xl:inline-block text-[11px] text-white/60 border-r border-white/20 pr-3">
              دليل الهوية البصرية المؤسساتية
            </span>
          </a>

          {/* Action Suite: PDF Download + Direct A4 Print + Standalone HTML + Official SVG */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="./CDG-Capital-Brand-Identity-Book.pdf"
              download="CDG-Capital-Brand-Identity-Book.pdf"
              className="inline-flex items-center gap-1.5 bg-[#469041] hover:bg-[#3c7d38] text-white text-xs font-semibold px-3.5 py-2 transition shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>تحميل PDF للطباعة</span>
            </a>

            <button
              type="button"
              onClick={handleDirectPrint}
              className="inline-flex items-center gap-1.5 bg-[#2A6AD0] hover:bg-[#235ab3] text-white text-xs font-semibold px-3 py-2 transition cursor-pointer"
              title="طباعة فورية بمقاس A4 أفقي أو حفظ كـ PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>طباعة A4</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadHTML}
              className="hidden sm:inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/18 border border-white/15 text-white text-[11.5px] font-medium px-2.5 py-2 transition cursor-pointer"
              title="تنزيل نسخة HTML قابلة للطباعة"
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>HTML</span>
            </button>

            <button
              type="button"
              onClick={() => downloadOfficialLogoSVG("official-light")}
              className="hidden md:inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/18 border border-white/15 text-white text-[11.5px] font-medium px-2.5 py-2 transition cursor-pointer"
              title="تنزيل الشعار الرسمي الأصلي دون تعديل بصيغة SVG"
            >
              <Download className="w-3.5 h-3.5" />
              <span>الشعار SVG</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setFilter("all");
                setPrintPreview((v) => !v);
              }}
              className={`hidden lg:inline-flex items-center gap-1.5 text-[11px] px-2.5 py-2 border transition cursor-pointer ${
                printPreview
                  ? "bg-white text-[#0D2538] border-white font-semibold"
                  : "border-white/15 text-white/75 hover:text-white"
              }`}
              title="معاينة فواصل صفحات الطباعة A4"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>معاينة A4</span>
            </button>
          </div>
        </div>

        {/* Secondary Chapter Filter Tabs */}
        <div className="border-t border-white/10 bg-[#091B29]/90">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-1.5 flex items-center gap-1.5 overflow-x-auto text-[11.5px]">
            {navItems.map((item) => {
              const active = filter === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    if (item.id !== "all") {
                      e.preventDefault();
                      setFilter(item.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      setFilter("all");
                    }
                  }}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1 transition ${
                    active
                      ? "bg-white/14 text-white font-semibold border-b-2 border-[#469041]"
                      : "text-white/68 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.dot && (
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: item.dot }}
                    />
                  )}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ===================================================================
          12 PRINT-READY A4 LANDSCAPE BRAND IDENTITY BOOK PLATES
          =================================================================== */}
      <main className="print-container px-3 sm:px-6 py-6 sm:py-9 flex flex-col gap-7 sm:gap-9">
        {filter === "all" && <CoverPlate />}

        {showFoundation && (
          <>
            <StrategyPlate />
            <LogoPlate />
            <ColorTypographyPlate />
          </>
        )}

        {showTrack1 && (
          <>
            <TrackOneSystemPlate />
            <TrackOneMockupsPlate />
          </>
        )}

        {showTrack2 && (
          <>
            <TrackTwoSystemPlate />
            <TrackTwoMockupsPlate />
          </>
        )}

        {showTrack3 && (
          <>
            <TrackThreeSystemPlate />
            <TrackThreeMockupsPlate />
          </>
        )}

        {showGov && (
          <>
            <VerbalGovernancePlate />
            <BackCoverPlate />
          </>
        )}
      </main>

      {/* Non-Print Bottom Export Bar */}
      <div className="no-print max-w-[1280px] mx-auto px-4 sm:px-6 pb-10">
        <div className="bg-[#0D2538] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-[#469041]">
          <div>
            <div className="text-sm font-bold">
              نسخة جاهزة للطباعة والاعتماد المؤسسي — CDG Capital Brand Book (12 صفحة A4)
            </div>
            <div className="text-xs text-white/65 mt-0.5">
              مُعدة بدقة متجهية كاملة شاملة الشعار الأصلي دون تعديل، المسارات البصرية الثلاثة، والنماذج التطبيقية الواقعية.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="./CDG-Capital-Brand-Identity-Book.pdf"
              download="CDG-Capital-Brand-Identity-Book.pdf"
              className="inline-flex items-center gap-2 bg-[#469041] hover:bg-[#3b7c37] text-white text-xs font-semibold px-4 py-2.5 transition"
            >
              <FileDown className="w-4 h-4" />
              <span>تحميل ملف PDF الكامل (A4)</span>
            </a>
            <button
              type="button"
              onClick={handleDirectPrint}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-4 py-2.5 transition cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة فورية</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
