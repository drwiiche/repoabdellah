import React from "react";

export type LogoVariant =
  | "official-light" // Official CDG gray (#354048) + CDG Capital green (#469041)
  | "official-dark"  // White CDG (#FFFFFF) + CDG Capital green (#469041)
  | "official-navy"  // Deep Sovereign Navy (#0D2538) + CDG Capital green (#469041)
  | "mono-white"     // Pure White (#FFFFFF)
  | "mono-navy"      // Pure Sovereign Navy (#0D2538)
  | "blind-emboss";  // Subtle cotton blind-emboss tone

interface CDGLogoProps {
  variant?: LogoVariant;
  className?: string;
  title?: string;
}

const VARIANT_COLORS: Record<LogoVariant, { content: string; brand: string }> = {
  "official-light": { content: "#354048", brand: "#469041" },
  "official-dark": { content: "#FFFFFF", brand: "#469041" },
  "official-navy": { content: "#0D2538", brand: "#469041" },
  "mono-white": { content: "#FFFFFF", brand: "#FFFFFF" },
  "mono-navy": { content: "#0D2538", brand: "#0D2538" },
  "blind-emboss": { content: "#DFDBD1", brand: "#DFDBD1" },
};

// Exact unmodified official CDG Capital SVG paths (viewBox="0 0 200 24")
const PATH_CDG_BODY =
  "M17.3074 0.00816497V4.77627H16.99C15.3706 4.77627 13.7511 4.77627 12.1357 4.77627C8.48055 4.77627 5.45587 7.37705 4.92428 10.9674C4.335 14.9504 7.32672 18.733 11.3692 19.1133C11.6495 19.1419 11.9338 19.1542 12.2181 19.1542C14.431 19.1542 16.6439 19.1542 18.8568 19.1542H19.2112V0.0572364C19.3142 0.0490578 19.3884 0.0408792 19.4584 0.0408792C23.3155 0.0408792 27.1726 0.00407569 31.0338 0.0531471C34.8785 0.106308 37.9856 1.7134 40.3922 4.67813C40.4334 4.7272 40.4705 4.77627 40.5117 4.82534C40.5241 4.83761 40.5406 4.84988 40.5612 4.87032C43.2768 1.47213 46.796 -0.216746 51.1888 0.0735935C53.7107 0.241254 55.9401 1.18997 57.881 2.78479C56.7313 3.92161 55.6022 5.03798 54.4442 6.17889C54.3741 6.13391 54.2711 6.0603 54.1681 5.99487C50.2616 3.35729 43.8702 5.14839 43.0048 10.8857C42.9141 11.5031 42.9306 12.1329 42.8812 12.7585C42.535 16.9214 40.5488 20.0947 36.976 22.2743C35.0887 23.4275 33.0036 23.9427 30.7907 23.9346C29.2454 23.9305 27.7001 23.9346 26.1548 23.9346H25.8333V19.1378C25.9364 19.1297 26.0394 19.1215 26.1465 19.1215C27.7742 19.1215 29.402 19.1419 31.0297 19.1092C34.6849 19.0356 37.6601 16.2876 38.0268 12.6809C38.406 8.93098 35.7439 5.49598 31.9857 4.90304C31.5736 4.83761 31.1492 4.82125 30.7289 4.82125C28.5819 4.81307 26.4309 4.82125 24.2839 4.82125H23.979V23.9427H23.5998C19.7963 23.9427 15.9928 23.9427 12.1893 23.9427C6.32536 23.9427 1.4257 19.9761 0.247148 14.2839C-0.964374 8.47298 2.50124 2.51898 8.16737 0.642004C9.41598 0.228986 10.6934 0.00407569 12.0121 -1.35957e-05C13.7058 -0.00410288 15.3953 -1.35957e-05 17.0848 -1.35957e-05C17.1466 -1.35957e-05 17.2126 0.00407569 17.3074 0.00816497Z";

const PATH_G_ARROW =
  "M41.678 20.6877C42.7494 19.3423 43.5406 17.8906 44.0763 16.2795C46.2768 18.9252 49.0007 19.9353 52.3179 18.8557C54.3948 18.181 55.7918 16.7211 56.6448 14.6765C56.4923 14.6642 56.377 14.6478 56.2657 14.6478C55.1036 14.6478 53.9457 14.6396 52.7836 14.6478C52.524 14.6478 52.4416 14.5824 52.4416 14.3166C52.4581 13.3761 52.4539 12.4314 52.4416 11.4868C52.4416 11.2701 52.491 11.1842 52.73 11.1842C55.6805 11.1924 58.6352 11.1924 61.5898 11.1842C61.8206 11.1842 61.8865 11.2701 61.8865 11.4868C61.8824 15.5475 61.8824 19.6122 61.8865 23.677C61.8865 23.8937 61.8288 23.9796 61.5939 23.9755C60.6049 23.9632 59.62 23.9714 58.631 23.9714C58.561 23.9714 58.4868 23.9632 58.3797 23.955V20.6713C58.3797 20.6713 58.3385 20.6345 58.322 20.6141C55.9814 22.7896 53.2369 23.9755 50.0268 23.9918C46.8043 24.0082 44.0475 22.855 41.678 20.6795";

const PATH_CAPITAL_C =
  "M86.8628 5.47962V0.911896H83.8752C83.8752 0.911896 83.8423 0.911896 83.8258 0.911896C82.2063 0.911896 80.5909 0.911896 78.9756 0.911896C77.7187 0.911896 76.4948 1.12863 75.2998 1.52529C69.885 3.31639 66.5719 9.00868 67.7216 14.5537C68.8466 19.9966 73.532 23.7873 79.1363 23.7873C80.7764 23.7873 82.4206 23.7873 84.0607 23.7873L86.8257 19.2196C85.1939 19.2196 80.8011 19.2196 79.1692 19.2196C78.8973 19.2196 78.6253 19.2073 78.3616 19.1787C74.5004 18.8148 71.6405 15.2039 72.2009 11.3927C72.7078 7.95773 75.6006 5.47554 79.091 5.47554C80.3725 5.47554 81.6541 5.47554 82.9316 5.47554H86.8628V5.47962Z";

const PATH_CAPITAL_A1 =
  "M97.272 0.965057C96.1429 0.965057 95.1086 1.59072 94.5894 2.5885L83.6362 23.7873H88.7172L97.2885 7.00493L100.968 14.3943H95.4177L93.5633 18.32H102.926L105.666 23.8241H110.863L99.9464 2.59259C99.4313 1.59072 98.397 0.960968 97.2638 0.960968";

const PATH_CAPITAL_P =
  "M133.729 2.94836C131.912 1.68068 129.53 1.04684 126.571 1.04684H112.808V23.8282H116.809V19.281H116.801V11.5808H116.809V5.01754H127.214C130.844 5.01754 132.658 6.44061 132.658 9.28675C132.658 10.6894 132.089 11.7649 130.943 12.5214C129.934 13.1675 128.693 13.4864 127.214 13.4864H118.667V17.4244H125.096C125.096 17.4244 128.875 17.2936 130.474 16.9542C132.402 16.443 133.927 15.5393 135.048 14.2511C136.255 12.873 136.861 11.2292 136.861 9.31129C136.861 6.51013 135.818 4.38779 133.733 2.94427";

const PATH_CAPITAL_I = "M142.362 1.10001H138.369V23.8242H142.362V1.10001Z";

const PATH_CAPITAL_T =
  "M164.717 1.02231H144.295V4.98073H152.26V23.8241H156.249V4.98073H164.717V1.02231Z";

const PATH_CAPITAL_A2 =
  "M185.857 23.8282L174.941 2.59668C174.426 1.59481 173.392 0.965057 172.259 0.965057C171.125 0.965057 170.095 1.59072 169.58 2.5885L158.627 23.7873H163.708L172.279 7.00493L175.959 14.3943H170.413L168.554 18.32H177.917L180.657 23.8241H185.853L185.857 23.8282Z";

const PATH_CAPITAL_L =
  "M190.798 19.8657V1.02231H186.805V19.8657V23.7465V23.8282H200V19.8657H190.798Z";

export const CDGLogo: React.FC<CDGLogoProps> = ({
  variant = "official-light",
  className = "h-7 w-auto",
  title = "CDG Capital — الشعار الرسمي المعتمد",
}) => {
  const { content, brand } = VARIANT_COLORS[variant];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 24"
      role="img"
      aria-label={title}
      className={`inline-block shrink-0 select-none ${className}`}
      style={{ direction: "ltr" }}
    >
      <title>{title}</title>
      <path d={PATH_CDG_BODY} fill={content} />
      <path d={PATH_G_ARROW} fill={brand} />
      <path d={PATH_CAPITAL_C} fill={brand} />
      <path d={PATH_CAPITAL_A1} fill={brand} />
      <path d={PATH_CAPITAL_P} fill={brand} />
      <path d={PATH_CAPITAL_I} fill={brand} />
      <path d={PATH_CAPITAL_T} fill={brand} />
      <path d={PATH_CAPITAL_A2} fill={brand} />
      <path d={PATH_CAPITAL_L} fill={brand} />
    </svg>
  );
};

export function getOfficialLogoSVGString(variant: LogoVariant = "official-light"): string {
  const { content, brand } = VARIANT_COLORS[variant];
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 24" width="800" height="96">
  <title>CDG Capital — Logo Officiel (Filiale du Groupe CDG)</title>
  <path d="${PATH_CDG_BODY}" fill="${content}" />
  <path d="${PATH_G_ARROW}" fill="${brand}" />
  <path d="${PATH_CAPITAL_C}" fill="${brand}" />
  <path d="${PATH_CAPITAL_A1}" fill="${brand}" />
  <path d="${PATH_CAPITAL_P}" fill="${brand}" />
  <path d="${PATH_CAPITAL_I}" fill="${brand}" />
  <path d="${PATH_CAPITAL_T}" fill="${brand}" />
  <path d="${PATH_CAPITAL_A2}" fill="${brand}" />
  <path d="${PATH_CAPITAL_L}" fill="${brand}" />
</svg>`;
}

export function downloadOfficialLogoSVG(variant: LogoVariant = "official-light") {
  const svg = getOfficialLogoSVGString(variant);
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `CDG-Capital-Official-Logo-${variant}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

interface PlateHeaderProps {
  plateNumber: string;
  sectionAr: string;
  sectionFr: string;
  theme?: "light" | "dark" | "paper";
  logoVariant?: LogoVariant;
  accentTag?: string;
  accentColor?: string;
}

export const PlateHeader: React.FC<PlateHeaderProps> = ({
  plateNumber,
  sectionAr,
  sectionFr,
  theme = "light",
  logoVariant,
  accentTag,
  accentColor = "#469041",
}) => {
  const isDark = theme === "dark";
  const borderClass = isDark
    ? "border-white/14"
    : theme === "paper"
      ? "border-[#B88456]/40"
      : "border-[#0D2538]/12";
  const textPrimary = isDark ? "text-white" : "text-[#0D2538]";
  const textMuted = isDark ? "text-white/60" : "text-[#0D2538]/55";
  const resolvedLogo: LogoVariant =
    logoVariant ?? (isDark ? "official-dark" : "official-light");

  return (
    <header
      className={`relative z-10 flex items-center justify-between gap-4 border-b pb-3.5 mb-5 ${borderClass}`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span
          className="font-mono-tech text-[10.5px] font-semibold tracking-[0.14em] px-2.5 py-1 rounded-[2px] shrink-0"
          style={{
            backgroundColor: isDark ? "rgba(255,255,255,0.09)" : "rgba(13,37,56,0.06)",
            color: isDark ? "#FFFFFF" : "#0D2538",
            borderRight: `2.5px solid ${accentColor}`,
          }}
        >
          {plateNumber}
        </span>
        <div className="flex items-center gap-2.5 min-w-0 truncate">
          <span className={`text-xs font-semibold shrink-0 ${textPrimary}`}>{sectionAr}</span>
          <span className={`hidden lg:inline text-xs ${textMuted}`}>·</span>
          <span className={`hidden lg:inline font-latin text-[10.5px] tracking-wide uppercase truncate ${textMuted}`}>
            {sectionFr}
          </span>
        </div>
        {accentTag && (
          <span
            className="hidden xl:inline-flex items-center shrink-0 text-[10px] font-medium px-2.5 py-0.5 rounded-full"
            style={{
              backgroundColor: `${accentColor}22`,
              color: isDark ? "#FFFFFF" : accentColor,
              border: `1px solid ${accentColor}55`,
            }}
          >
            {accentTag}
          </span>
        )}
      </div>

      <CDGLogo
        variant={resolvedLogo}
        className="h-[15px] w-auto opacity-95 shrink-0"
      />
    </header>
  );
};

interface PlateFooterProps {
  page: string;
  total?: string;
  note?: string;
  theme?: "light" | "dark" | "paper";
}

export const PlateFooter: React.FC<PlateFooterProps> = ({
  page,
  total = "12",
  note = "دليل الهوية البصرية المؤسساتية — CDG Capital · مجموعة صندوق الإيداع والتدبير",
  theme = "light",
}) => {
  const isDark = theme === "dark";
  const borderClass = isDark
    ? "border-white/12 text-white/50"
    : theme === "paper"
      ? "border-[#B88456]/35 text-[#0D2538]/55"
      : "border-[#0D2538]/10 text-[#0D2538]/50";

  return (
    <footer
      className={`relative z-10 mt-6 pt-3 border-t flex items-center justify-between gap-4 text-[10.5px] ${borderClass}`}
    >
      <span>{note}</span>
      <div className="flex items-center gap-4 font-mono-tech text-[10px] tracking-[0.14em]">
        <span className="hidden sm:inline">34°01&apos;15&quot;N · 06°50&apos;30&quot;W — RABAT</span>
        <span className="font-semibold">
          {page} / {total}
        </span>
      </div>
    </footer>
  );
};
