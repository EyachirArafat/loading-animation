"use client";

import { useState } from "react";
import "@/styles/loaders.css";
import "@/styles/loaders-026-050.css";
import "@/styles/loaders-051-075.css";
import "@/styles/loaders-076-100.css";
import "@/styles/loaders-101-125.css";

// All 100 unique loaders with unique names
const loaders = [
  // 001-025
  { id: "001", name: "Classic Spinner", html: '<div class="loader-001"></div>' },
  { id: "002", name: "Bouncing Dots", html: '<div class="loader-002"><span></span><span></span><span></span></div>' },
  { id: "003", name: "Morphing Blob", html: '<div class="loader-003"></div>' },
  { id: "004", name: "Wave Bars", html: '<div class="loader-004"><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "005", name: "Dual Ring", html: '<div class="loader-005"></div>' },
  { id: "006", name: "Pulsing Ripple", html: '<div class="loader-006"><span></span><span></span></div>' },
  { id: "007", name: "Gradient Spinner", html: '<div class="loader-007"></div>' },
  { id: "008", name: "Folding Cube", html: '<div class="loader-008"><span></span><span></span><span></span><span></span></div>' },
  { id: "009", name: "Hexagon Pulse", html: '<div class="loader-009"></div>' },
  { id: "010", name: "Matrix Grid", html: '<div class="loader-010"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "011", name: "Triangle Spin", html: '<div class="loader-011"></div>' },
  { id: "012", name: "Elastic Ball", html: '<div class="loader-012"></div>' },
  { id: "013", name: "Neon Circle", html: '<div class="loader-013"></div>' },
  { id: "014", name: "Hourglass Flip", html: '<div class="loader-014"></div>' },
  { id: "015", name: "Heartbeat", html: '<div class="loader-015"></div>' },
  { id: "016", name: "Sound Equalizer", html: '<div class="loader-016"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "017", name: "Ping Pong Ball", html: '<div class="loader-017"></div>' },
  { id: "018", name: "Pacman Chomp", html: '<div class="loader-018"></div>' },
  { id: "019", name: "Planet Orbit", html: '<div class="loader-019"></div>' },
  { id: "020", name: "Chat Typing", html: '<div class="loader-020"><span></span><span></span><span></span></div>' },
  { id: "021", name: "Rising Sun", html: '<div class="loader-021"></div>' },
  { id: "022", name: "Gear Cog", html: '<div class="loader-022"></div>' },
  { id: "023", name: "Radar Sweep", html: '<div class="loader-023"></div>' },
  { id: "024", name: "Comet Trail", html: '<div class="loader-024"></div>' },
  { id: "025", name: "Galaxy Swirl", html: '<div class="loader-025"><span></span><span></span><span></span></div>' },
  // 026-050
  { id: "026", name: "Dual Planet", html: '<div class="loader-026"></div>' },
  { id: "027", name: "Cog Wheel", html: '<div class="loader-027"></div>' },
  { id: "028", name: "Fire Flame", html: '<div class="loader-028"><span></span><span></span><span></span></div>' },
  { id: "029", name: "Lightning Bolt", html: '<div class="loader-029"></div>' },
  { id: "030", name: "Audio Wave", html: '<div class="loader-030"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "031", name: "Hungry Ghost", html: '<div class="loader-031"></div>' },
  { id: "032", name: "Sand Timer", html: '<div class="loader-032"></div>' },
  { id: "033", name: "Messenger Dots", html: '<div class="loader-033"><span></span><span></span><span></span></div>' },
  { id: "034", name: "Pulsing Heart", html: '<div class="loader-034"></div>' },
  { id: "035", name: "Blinking Eye", html: '<div class="loader-035"></div>' },
  { id: "036", name: "Nested Squares", html: '<div class="loader-036"><span></span><span></span><span></span></div>' },
  { id: "037", name: "Shooting Star", html: '<div class="loader-037"></div>' },
  { id: "038", name: "WiFi Signal", html: '<div class="loader-038"><span></span><span></span><span></span></div>' },
  { id: "039", name: "DNA Strand", html: '<div class="loader-039"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "040", name: "Arc Spinner", html: '<div class="loader-040"></div>' },
  { id: "041", name: "Gold Coins", html: '<div class="loader-041"><span></span><span></span><span></span><span></span></div>' },
  { id: "042", name: "Nested Hexagons", html: '<div class="loader-042"><span></span><span></span><span></span></div>' },
  { id: "043", name: "Squash Ring", html: '<div class="loader-043"></div>' },
  { id: "044", name: "Orbit Dots", html: '<div class="loader-044"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "045", name: "Glowing Bars", html: '<div class="loader-045"><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "046", name: "Newton Cradle", html: '<div class="loader-046"><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "047", name: "Shape Morph", html: '<div class="loader-047"></div>' },
  { id: "048", name: "Particle Burst", html: '<div class="loader-048"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "049", name: "Card Flip", html: '<div class="loader-049"><span></span><span></span><span></span></div>' },
  { id: "050", name: "Liquid Fill", html: '<div class="loader-050"></div>' },
  // 051-075
  { id: "051", name: "Diamond Spin", html: '<div class="loader-051"></div>' },
  { id: "052", name: "Electron Orbit", html: '<div class="loader-052"></div>' },
  { id: "053", name: "Stretch Bar", html: '<div class="loader-053"></div>' },
  { id: "054", name: "Flower Petals", html: '<div class="loader-054"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "055", name: "Diamond Grid", html: '<div class="loader-055"><span></span><span></span><span></span><span></span></div>' },
  { id: "056", name: "Line Bounce", html: '<div class="loader-056"></div>' },
  { id: "057", name: "Spiral Ring", html: '<div class="loader-057"></div>' },
  { id: "058", name: "Coin Flip", html: '<div class="loader-058"></div>' },
  { id: "059", name: "Cascade Circles", html: '<div class="loader-059"><span></span><span></span><span></span></div>' },
  { id: "060", name: "Cross Spinner", html: '<div class="loader-060"></div>' },
  { id: "061", name: "Float Squares", html: '<div class="loader-061"><span></span><span></span><span></span></div>' },
  { id: "062", name: "Gradient Wave", html: '<div class="loader-062"></div>' },
  { id: "063", name: "Star Pulse", html: '<div class="loader-063"></div>' },
  { id: "064", name: "Triple Ring", html: '<div class="loader-064"><span></span><span></span><span></span></div>' },
  { id: "065", name: "Dot Snake", html: '<div class="loader-065"><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "066", name: "Half Arc", html: '<div class="loader-066"></div>' },
  { id: "067", name: "Cube Matrix", html: '<div class="loader-067"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "068", name: "Moon Orbit", html: '<div class="loader-068"><span></span><span></span></div>' },
  { id: "069", name: "Dashed Ring", html: '<div class="loader-069"></div>' },
  { id: "070", name: "Slider Ball", html: '<div class="loader-070"></div>' },
  { id: "071", name: "3D Card Flip", html: '<div class="loader-071"><span></span></div>' },
  { id: "072", name: "Breathing Orb", html: '<div class="loader-072"></div>' },
  { id: "073", name: "Chase Squares", html: '<div class="loader-073"><span></span><span></span><span></span><span></span></div>' },
  { id: "074", name: "Horizon Sun", html: '<div class="loader-074"></div>' },
  { id: "075", name: "Segment Spin", html: '<div class="loader-075"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  // 076-100
  { id: "076", name: "Dotted Ring", html: '<div class="loader-076"></div>' },
  { id: "077", name: "Pendulum Swing", html: '<div class="loader-077"></div>' },
  { id: "078", name: "Grow Bars", html: '<div class="loader-078"><span></span><span></span><span></span><span></span></div>' },
  { id: "079", name: "Hex Rotate", html: '<div class="loader-079"></div>' },
  { id: "080", name: "Bounce Ball", html: '<div class="loader-080"></div>' },
  { id: "081", name: "Wave Dots", html: '<div class="loader-081"><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "082", name: "Text Loading", html: '<div class="loader-082">Loading</div>' },
  { id: "083", name: "Scissor Cut", html: '<div class="loader-083"></div>' },
  { id: "084", name: "Helix Bars", html: '<div class="loader-084"><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "085", name: "Sonar Ping", html: '<div class="loader-085"></div>' },
  { id: "086", name: "Orbit Glow", html: '<div class="loader-086"></div>' },
  { id: "087", name: "Gradient Blob", html: '<div class="loader-087"></div>' },
  { id: "088", name: "Triple Bounce", html: '<div class="loader-088"><span></span><span></span><span></span></div>' },
  { id: "089", name: "Quad Dots", html: '<div class="loader-089"><span></span><span></span><span></span><span></span></div>' },
  { id: "090", name: "Pulse Bars", html: '<div class="loader-090"><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "091", name: "Plus Rotate", html: '<div class="loader-091"></div>' },
  { id: "092", name: "Circle Chase", html: '<div class="loader-092"><span></span><span></span><span></span></div>' },
  { id: "093", name: "Progress Slide", html: '<div class="loader-093"></div>' },
  { id: "094", name: "Flip Squares", html: '<div class="loader-094"><span></span><span></span><span></span></div>' },
  { id: "095", name: "Neon Glow Ring", html: '<div class="loader-095"></div>' },
  { id: "096", name: "Dual Gears", html: '<div class="loader-096"></div>' },
  { id: "097", name: "Meteor Spin", html: '<div class="loader-097"></div>' },
  { id: "098", name: "Binary Grid", html: '<div class="loader-098"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "099", name: "Oscillate Bars", html: '<div class="loader-099"><span></span><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "100", name: "Galaxy Core", html: '<div class="loader-100"><span></span><span></span><span></span></div>' },
  // 101-125 (Completely Unique Designs)
  { id: "101", name: "Typewriter", html: '<div class="loader-101"></div>' },
  { id: "102", name: "Paper Plane", html: '<div class="loader-102"></div>' },
  { id: "103", name: "Fingerprint", html: '<div class="loader-103"><span></span><span></span><span></span></div>' },
  { id: "104", name: "Pendulum Clock", html: '<div class="loader-104"></div>' },
  { id: "105", name: "Scissors", html: '<div class="loader-105"></div>' },
  { id: "106", name: "Washing Machine", html: '<div class="loader-106"></div>' },
  { id: "107", name: "Heart Monitor", html: '<div class="loader-107"></div>' },
  { id: "108", name: "Percentage", html: '<div class="loader-108">%</div>' },
  { id: "109", name: "Bouncing Letters", html: '<div class="loader-109"><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div>' },
  { id: "110", name: "Pie Chart", html: '<div class="loader-110"></div>' },
  { id: "111", name: "Coffee Cup", html: '<div class="loader-111"></div>' },
  { id: "112", name: "Sandglass 3D", html: '<div class="loader-112"></div>' },
  { id: "113", name: "Cassette Tape", html: '<div class="loader-113"></div>' },
  { id: "114", name: "Vinyl Record", html: '<div class="loader-114"></div>' },
  { id: "115", name: "TV Static", html: '<div class="loader-115"></div>' },
  { id: "116", name: "Compass", html: '<div class="loader-116"></div>' },
  { id: "117", name: "Fan Blades", html: '<div class="loader-117"><span></span><span></span><span></span></div>' },
  { id: "118", name: "Stopwatch", html: '<div class="loader-118"></div>' },
  { id: "119", name: "Metronome", html: '<div class="loader-119"></div>' },
  { id: "120", name: "Newton Balls", html: '<div class="loader-120"><span></span><span></span><span></span><span></span><span></span></div>' },
  { id: "121", name: "Slot Machine", html: '<div class="loader-121"><span></span><span></span><span></span></div>' },
  { id: "122", name: "Dice Roll", html: '<div class="loader-122"></div>' },
  { id: "123", name: "Hourglass Sand", html: '<div class="loader-123"></div>' },
  { id: "124", name: "Lighthouse", html: '<div class="loader-124"></div>' },
  { id: "125", name: "Blinking Cursor", html: '<div class="loader-125"></div>' },
];

function LoaderCard({ id, name, html }: { id: string; name: string; html: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="animation-card group">
      <div className="animation-preview" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="flex items-center justify-between mt-3">
        <div>
          <span className="text-xs text-zinc-500">#{id}</span>
          <h3 className="text-sm font-medium text-white">{name}</h3>
        </div>
        <button onClick={handleCopy} className={`copy-btn text-xs ${copied ? "copied" : ""}`}>
          {copied ? "✓" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = loaders.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase()) || l.id.includes(search)
  );

  return (
    <div className="min-h-screen grid-bg">
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-[#0a0a0f]/80">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Loading Animations</h1>
            <p className="text-zinc-400 text-sm mt-1">{loaders.length} Unique Loaders</p>
          </div>
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="search-input" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((l) => <LoaderCard key={l.id} {...l} />)}
        </div>
        {filtered.length === 0 && <div className="text-center py-20 text-zinc-400">No loaders found.</div>}
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-zinc-500 text-sm">Pure CSS Animations</footer>
    </div>
  );
}
