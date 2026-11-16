import React from "react";

/* ============================================================================
   1. TRACK 01 — DUAL-READING CELESTIAL STARRY VAULT / ASCENDING ARROW (↗) MATRIX
   From afar: inspiring star-studded night dome.
   Up close: regular geometric matrix of ascending (↗) arrows from logo DNA.
   ============================================================================ */
interface StarArrowMatrixProps {
  cols?: number;
  rows?: number;
  className?: string;
  arrowScale?: number;
  opacity?: number;
  showSubtleGrid?: boolean;
}

export const StarArrowMatrix: React.FC<StarArrowMatrixProps> = ({
  cols = 28,
  rows = 14,
  className = "w-full h-full",
  arrowScale = 1,
  opacity = 1,
  showSubtleGrid = false,
}) => {
  const cell = 28;
  const width = cols * cell;
  const height = rows * cell;

  // Deterministic celestial luminance modulation across regular geometric grid
  const arrows: Array<{
    cx: number;
    cy: number;
    alpha: number;
    color: string;
    bright: boolean;
  }> = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const nx = c / Math.max(1, cols - 1);
      const ny = r / Math.max(1, rows - 1);
      // Milky-way diagonal rising arc from bottom-left to top-right (↗)
      const bandDist = Math.abs(ny - (0.85 - nx * 0.68));
      const bandBoost = Math.max(0, 1 - bandDist * 2.15);
      // Deterministic pseudo-star sparkle on regular lattice nodes
      const hash = Math.sin(r * 127.1 + c * 311.7) * 43758.5453;
      const frac = hash - Math.floor(hash);

      const baseAlpha = 0.1 + bandBoost * 0.34;
      const sparkle = frac > 0.86 ? 0.48 : frac > 0.68 ? 0.24 : 0;
      const alpha = Math.min(0.95, baseAlpha + sparkle);
      const bright = frac > 0.87 && bandDist < 0.42;

      const color =
        frac > 0.9
          ? "#E8F6FF"
          : nx > 0.62
            ? "#9BE296"
            : nx < 0.35
              ? "#9AC8FF"
              : "#D7F0E4";

      arrows.push({
        cx: c * cell + cell / 2,
        cy: r * cell + cell / 2,
        alpha,
        color,
        bright,
      });
    }
  }

  const s = 2.55 * arrowScale;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {showSubtleGrid && (
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.45">
          {Array.from({ length: cols + 1 }).map((_, i) => (
            <line key={`vc-${i}`} x1={i * cell} y1={0} x2={i * cell} y2={height} />
          ))}
          {Array.from({ length: rows + 1 }).map((_, j) => (
            <line key={`hr-${j}`} x1={0} y1={j * cell} x2={width} y2={j * cell} />
          ))}
        </g>
      )}

      {arrows.map((a, idx) => (
        <g
          key={idx}
          transform={`translate(${a.cx.toFixed(1)}, ${a.cy.toFixed(1)})`}
          opacity={a.alpha.toFixed(2)}
        >
          {a.bright && (
            <circle r={s * 1.9} fill={a.color} opacity={0.18} />
          )}
          {/* Precision ascending arrow (↗) derived from CDG Capital logo G-arrow DNA */}
          <path
            d={`M ${(-s * 0.85).toFixed(2)} ${(s * 0.85).toFixed(2)} L ${(s * 0.85).toFixed(2)} ${(-s * 0.85).toFixed(2)} M ${(-s * 0.15).toFixed(2)} ${(-s * 0.85).toFixed(2)} L ${(s * 0.85).toFixed(2)} ${(-s * 0.85).toFixed(2)} L ${(s * 0.85).toFixed(2)} ${(s * 0.15).toFixed(2)}`}
            fill="none"
            stroke={a.color}
            strokeWidth={a.bright ? 1.15 * Math.sqrt(arrowScale) : 0.82 * Math.sqrt(arrowScale)}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );
};

/* ============================================================================
   2. TRACK 02 — 1PX TOPOGRAPHIC CONTOUR WATERMARK OF THE KINGDOM OF MOROCCO
   Atlas Mountains (High, Middle, Anti-Atlas), Rif Arc, Atlantic Coast & Sahara
   ============================================================================ */
interface MoroccoTopographyProps {
  className?: string;
  strokeColor?: string;
  opacity?: number;
  showLabels?: boolean;
}

export const MoroccoTopographyWatermark: React.FC<MoroccoTopographyProps> = ({
  className = "w-full h-full",
  strokeColor = "#0D2538",
  opacity = 0.13,
  showLabels = false,
}) => {
  return (
    <svg
      viewBox="0 0 900 520"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Moroccan Atlantic-to-Mediterranean Sovereign Coastline & Continental Shelf Isolines */}
        <path d="M 555 24 C 542 48, 520 68, 492 86 C 462 106, 434 132, 405 162 C 378 190, 355 224, 326 258 C 296 294, 255 328, 212 368 C 170 407, 132 452, 95 504" />
        <path
          d="M 532 18 C 518 44, 494 64, 464 84 C 432 104, 404 130, 374 160 C 344 190, 322 224, 292 258 C 260 294, 218 330, 175 370 C 134 409, 98 454, 62 504"
          strokeDasharray="6 4"
          opacity="0.65"
        />
        <path
          d="M 505 14 C 490 40, 465 62, 432 82 C 398 104, 370 130, 338 162 C 308 192, 286 226, 254 260 C 222 296, 178 332, 135 372 C 95 412, 62 456, 28 504"
          opacity="0.45"
        />
        {/* Mediterranean Rif Coastline extending East */}
        <path d="M 555 24 C 588 34, 625 42, 668 38 C 712 34, 752 26, 796 28" />
        <path d="M 564 42 C 598 54, 636 60, 678 56 C 720 52, 760 44, 808 46" opacity="0.7" />

        {/* Rif Mountain Chain Contours (North — Tangier / Chefchaouen / Al Hoceima) */}
        <path d="M 552 56 C 586 46, 646 52, 688 68 C 708 76, 696 94, 664 96 C 624 98, 574 86, 548 72 Z" />
        <path d="M 576 64 C 604 56, 644 60, 672 72 C 682 78, 672 88, 648 88 C 618 88, 586 80, 572 72 Z" />
        <path d="M 602 70 C 622 66, 646 68, 658 75 C 652 82, 626 82, 602 76 Z" />

        {/* Gharb & Saïs Basin Flowing Contours (Rabat — Fès — Meknès) */}
        <path d="M 468 108 C 518 96, 582 104, 646 116 C 708 128, 768 118, 838 102" />
        <path d="M 442 134 C 504 118, 578 122, 652 136 C 722 148, 786 138, 858 122" />

        {/* Middle Atlas Elevation Contours (Ifrane / Khénifra / Boulemane — 3,340m) */}
        <path d="M 536 168 C 566 132, 634 112, 694 124 C 734 132, 738 164, 702 188 C 660 214, 588 222, 548 204 C 526 194, 522 182, 536 168 Z" />
        <path d="M 558 170 C 584 142, 636 126, 680 136 C 710 142, 712 164, 684 182 C 652 202, 598 208, 566 194 C 550 186, 548 178, 558 170 Z" />
        <path d="M 582 172 C 602 152, 640 140, 668 148 C 686 154, 686 168, 666 178 C 644 190, 608 194, 588 184 Z" />
        <path d="M 608 172 C 622 160, 646 154, 658 160 C 664 166, 650 176, 626 178 C 612 178, 604 176, 608 172 Z" />

        {/* High Atlas Grand Sovereign Spine (Jbel Toubkal 4,167m — Mgoun — Ayachi) */}
        <path d="M 358 274 C 402 228, 488 196, 584 178 C 672 162, 758 156, 822 172 C 858 182, 854 216, 804 236 C 736 264, 636 284, 536 308 C 454 328, 384 328, 356 306 C 344 296, 346 286, 358 274 Z" />
        <path d="M 384 276 C 424 236, 502 208, 590 192 C 668 178, 742 172, 796 186 C 824 194, 820 218, 778 234 C 718 256, 628 274, 538 294 C 466 310, 406 312, 382 296 C 372 288, 374 282, 384 276 Z" />
        <path d="M 412 276 C 448 244, 518 220, 598 206 C 664 194, 724 188, 768 198 C 788 204, 784 220, 750 232 C 698 250, 618 264, 540 282 C 478 296, 428 298, 410 286 Z" />
        <path d="M 444 274 C 476 250, 536 232, 606 218 C 658 208, 706 204, 738 212 C 750 216, 744 226, 716 234 C 674 246, 606 258, 542 270 C 492 280, 456 282, 444 274 Z" />
        {/* Jbel Toubkal Peak Concentric Isolines (4,167m) */}
        <path d="M 476 268 C 498 254, 538 246, 566 250 C 580 252, 574 264, 548 268 C 520 274, 486 276, 476 268 Z" />
        <path d="M 502 264 C 516 256, 538 254, 550 258 C 546 264, 522 268, 502 264 Z" />
        {/* M'Goun Secondary Summit Isolines (4,071m) */}
        <path d="M 618 234 C 638 224, 674 220, 694 224 C 702 228, 692 236, 668 240 C 644 244, 620 242, 618 234 Z" />

        {/* Anti-Atlas & Souss-Draa Valley Contours */}
        <path d="M 318 348 C 362 320, 434 308, 508 316 C 556 322, 562 350, 522 368 C 474 388, 392 396, 336 382 C 308 374, 302 360, 318 348 Z" />
        <path d="M 346 352 C 382 332, 438 322, 492 328 C 526 332, 528 350, 498 362 C 460 376, 398 382, 356 372 C 338 366, 336 358, 346 352 Z" />
        <path d="M 382 354 C 408 342, 450 338, 478 342 C 492 346, 486 356, 462 360 C 434 366, 396 366, 382 354 Z" />

        {/* Southern Moroccan Saharan Plateaus & Atlantic Dakhla Isolines */}
        <path d="M 218 408 C 312 396, 428 402, 556 386 C 668 372, 774 342, 876 318" />
        <path d="M 176 446 C 284 432, 418 436, 562 418 C 684 402, 788 376, 886 354" />
        <path d="M 138 484 C 258 468, 408 470, 568 452 C 698 436, 802 414, 892 394" />
        <path d="M 594 318 C 658 298, 748 286, 848 272" opacity="0.75" />
        <path d="M 582 352 C 662 332, 762 316, 868 296" opacity="0.75" />

        {/* Subtle Coordinate Graticule Crosshairs */}
        <line x1="0" y1="130" x2="900" y2="130" strokeDasharray="2 6" opacity="0.45" />
        <line x1="0" y1="260" x2="900" y2="260" strokeDasharray="2 6" opacity="0.45" />
        <line x1="0" y1="390" x2="900" y2="390" strokeDasharray="2 6" opacity="0.45" />
        <line x1="450" y1="0" x2="450" y2="520" strokeDasharray="2 6" opacity="0.45" />
        <line x1="650" y1="0" x2="650" y2="520" strokeDasharray="2 6" opacity="0.45" />
        <line x1="250" y1="0" x2="250" y2="520" strokeDasharray="2 6" opacity="0.45" />

        {/* Geographic Reference Nodes */}
        <circle cx="468" cy="108" r="3" />
        <circle cx="428" cy="142" r="2.5" />
        <circle cx="548" cy="28" r="2.5" />
        <circle cx="152" cy="432" r="2.5" />
        <circle cx="524" cy="260" r="2" />
      </g>

      {showLabels && (
        <g
          fill={strokeColor}
          fontFamily="IBM Plex Mono, monospace"
          fontSize="8.5"
          letterSpacing="0.08em"
        >
          <text x="478" y="104">RABAT · 34°01&apos;15&quot;N 06°50&apos;30&quot;W ↗</text>
          <text x="310" y="140">CASABLANCA · 33°34&apos;N</text>
          <text x="560" y="22">TANGER · 35°45&apos;N ↗</text>
          <text x="534" y="258">HAUT ATLAS · 4,167M</text>
          <text x="612" y="168">MOYEN ATLAS · 3,340M</text>
          <text x="164" y="434">DAKHLA · 23°42&apos;N 15°56&apos;W ↗</text>
          <text x="38" y="252">OCÉAN ATLANTIQUE · 0M</text>
        </g>
      )}
    </svg>
  );
};

/* ============================================================================
   3. TRACK 02 — VISIBLE 12-COLUMN SWISS FINANCIAL GRID OVERLAY
   ============================================================================ */
interface Grid12OverlayProps {
  dark?: boolean;
  showNumbers?: boolean;
  className?: string;
}

export const Grid12Overlay: React.FC<Grid12OverlayProps> = ({
  dark = false,
  showNumbers = true,
  className = "",
}) => {
  const lineCol = dark ? "border-white/[0.08]" : "border-[#0D2538]/[0.075]";
  const numCol = dark ? "text-white/35" : "text-[#0D2538]/35";

  return (
    <div
      className={`pointer-events-none absolute inset-0 grid grid-cols-12 gap-2 px-4 select-none ${className}`}
      style={{ direction: "ltr" }}
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`h-full border-x ${lineCol} flex flex-col justify-between py-1.5`}
        >
          {showNumbers && (
            <span className={`font-mono-tech text-[8px] px-1 ${numCol}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          {showNumbers && (i === 0 || i === 5 || i === 11) && (
            <span className={`font-mono-tech text-[9px] px-1 self-end ${numCol}`}>↗</span>
          )}
        </div>
      ))}
    </div>
  );
};

/* ============================================================================
   4. TRACK 03 — ARCHITECTURAL BASE SQUARE UNIT & 4 PURE GEOMETRIC PRIMITIVES
   1: Square (مربع) | 2: Quarter-Circle (ربع دائرة) | 3: Arch (قوس) | 4: Circle (دائرة)
   ============================================================================ */
export type PrimitiveShape = "square" | "quarter" | "arch" | "circle";

interface ArchitecturalTileProps {
  shape: PrimitiveShape;
  rotation?: 0 | 90 | 180 | 270;
  bgColor: string;
  fgColor: string;
  copperStroke?: boolean;
  embossed?: boolean;
  className?: string;
}

export const ArchitecturalTile: React.FC<ArchitecturalTileProps> = ({
  shape,
  rotation = 0,
  bgColor,
  fgColor,
  copperStroke = false,
  embossed = false,
  className = "w-full h-full",
}) => {
  const stroke = copperStroke ? "#B88456" : "none";
  const strokeWidth = copperStroke ? 1.15 : 0;

  return (
    <svg
      viewBox="0 0 100 100"
      className={`block select-none ${className}`}
      aria-hidden="true"
    >
      {embossed && (
        <defs>
          <filter id="embossRelief" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="-1.4" dy="-1.4" stdDeviation="1.1" floodColor="#FFFFFF" floodOpacity="0.92" />
            <feDropShadow dx="1.6" dy="1.6" stdDeviation="1.3" floodColor="#0D2538" floodOpacity="0.14" />
          </filter>
        </defs>
      )}
      <rect width="100" height="100" fill={bgColor} />
      <g
        transform={`rotate(${rotation} 50 50)`}
        filter={embossed ? "url(#embossRelief)" : undefined}
      >
        {shape === "square" && (
          <rect
            x="16"
            y="16"
            width="68"
            height="68"
            fill={fgColor}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        )}
        {shape === "quarter" && (
          <path
            d="M 0 100 L 0 0 A 100 100 0 0 1 100 100 Z"
            fill={fgColor}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        )}
        {shape === "arch" && (
          <path
            d="M 14 100 L 14 50 A 36 36 0 0 1 86 50 L 86 100 Z"
            fill={fgColor}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        )}
        {shape === "circle" && (
          <circle
            cx="50"
            cy="50"
            r="36"
            fill={fgColor}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        )}
      </g>
      {copperStroke && (
        <rect
          x="0.5"
          y="0.5"
          width="99"
          height="99"
          fill="none"
          stroke="#B88456"
          strokeOpacity="0.55"
          strokeWidth="1"
        />
      )}
    </svg>
  );
};

export type TonSurTonPalette = "navy" | "green" | "emboss";

const TON_SUR_TON_COLORS: Record<
  TonSurTonPalette,
  { bgs: string[]; fgs: string[]; copper: boolean; emboss: boolean }
> = {
  navy: {
    bgs: ["#0D2538", "#102C42", "#0B1F30", "#13334C"],
    fgs: ["#163B57", "#1C4869", "#14354F", "#215378"],
    copper: true,
    emboss: false,
  },
  green: {
    bgs: ["#2B5E28", "#347030", "#255223", "#3D8038"],
    fgs: ["#469041", "#539F4E", "#3B7D37", "#5EAD59"],
    copper: true,
    emboss: false,
  },
  emboss: {
    bgs: ["#F5F2EC", "#F2EFE8", "#F7F5F0", "#EFECE4"],
    fgs: ["#F8F6F1", "#F5F3ED", "#FAF8F4", "#F3F0E9"],
    copper: false,
    emboss: true,
  },
};

const MOSAIC_PATTERN: Array<{ shape: PrimitiveShape; rot: 0 | 90 | 180 | 270 }> = [
  { shape: "quarter", rot: 0 },
  { shape: "quarter", rot: 90 },
  { shape: "arch", rot: 0 },
  { shape: "square", rot: 0 },
  { shape: "circle", rot: 0 },
  { shape: "quarter", rot: 270 },
  { shape: "quarter", rot: 180 },
  { shape: "arch", rot: 0 },
  { shape: "square", rot: 0 },
  { shape: "arch", rot: 0 },
  { shape: "circle", rot: 0 },
  { shape: "quarter", rot: 0 },
  { shape: "arch", rot: 0 },
  { shape: "circle", rot: 0 },
  { shape: "quarter", rot: 180 },
  { shape: "square", rot: 0 },
];

export const TonSurTonMosaic: React.FC<{
  palette?: TonSurTonPalette;
  cols?: 4 | 3 | 2;
  count?: number;
  withCopper?: boolean;
  className?: string;
}> = ({ palette = "navy", cols = 4, count = 12, withCopper, className = "" }) => {
  const cfg = TON_SUR_TON_COLORS[palette];
  const gridCols =
    cols === 4 ? "grid-cols-4" : cols === 3 ? "grid-cols-3" : "grid-cols-2";

  return (
    <div
      className={`grid ${gridCols} overflow-hidden ${palette !== "emboss" ? "zellige-sheen" : ""} ${className}`}
    >
      {MOSAIC_PATTERN.slice(0, count).map((item, idx) => (
        <div key={idx} className="aspect-square relative">
          <ArchitecturalTile
            shape={item.shape}
            rotation={item.rot}
            bgColor={cfg.bgs[idx % cfg.bgs.length]}
            fgColor={cfg.fgs[(idx + 1) % cfg.fgs.length]}
            copperStroke={withCopper ?? cfg.copper}
            embossed={cfg.emboss}
          />
        </div>
      ))}
    </div>
  );
};
