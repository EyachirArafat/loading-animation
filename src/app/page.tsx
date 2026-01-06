"use client";

import { useState, useMemo, FC } from "react";
import "@/styles/loaders.css";
import "@/styles/loaders-026-050.css";
import "@/styles/loaders-051-075.css";
import "@/styles/loaders-076-100.css";
import "@/styles/loaders-101-125.css";
import "@/styles/loaders-126-150.css";
import { Loader } from "@/types";
import { categories, loaders } from "@/db";
import { getLoaderFullCode } from "@/db/loader-css";


// Loader Card Component
const LoaderCard: FC<{ loader: Loader }> = ({ loader }) => {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Get full HTML + CSS code
  const fullCode = getLoaderFullCode(loader.id, loader.name, loader.html);

  const handleCopyFull = async () => {
    await navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
        {/* Preview Area */}
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
          <div dangerouslySetInnerHTML={{ __html: loader.html }} />
        </div>

        {/* Info Bar */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">
                #{loader.id}
              </span>
            </div>
            <span className="text-[10px] text-zinc-500 capitalize">{loader.category}</span>
          </div>
          <h3 className="text-sm font-medium text-white mb-3 truncate">{loader.name}</h3>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleCopyFull}
              className={`flex-1 text-xs py-2 px-3 rounded-lg font-medium transition-all ${copied
                ? "bg-green-500/20 text-green-400"
                : "bg-white/5 text-zinc-400 hover:bg-indigo-500/20 hover:text-indigo-400"
                }`}
            >
              {copied ? "✓ Copied!" : "Copy Code"}
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="text-xs py-2 px-3 rounded-lg bg-white/5 text-zinc-400 hover:bg-white/10 transition-all"
              title="View Code"
            >
              {"</>"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-zinc-900 border border-white/10 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                  #{loader.id}
                </span>
                <h3 className="text-white font-medium">{loader.name}</h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleCopyFull}
                  className={`text-xs py-1.5 px-3 rounded-lg font-medium transition-all ${copied
                    ? "bg-green-500/20 text-green-400"
                    : "bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30"
                    }`}
                >
                  {copied ? "✓ Copied!" : "Copy"}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-zinc-400 hover:text-white transition-all text-xl px-2"
                >
                  ×
                </button>
              </div>
            </div>
            {/* Modal Body */}
            <div className="p-4 overflow-auto max-h-[60vh]">
              <pre className="text-xs text-indigo-300 whitespace-pre-wrap font-mono">{fullCode}</pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Main Page Component
export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtered loaders
  const filteredLoaders = useMemo(() => {
    return loaders.filter((loader) => {
      const matchesSearch =
        loader.name.toLowerCase().includes(search.toLowerCase()) ||
        loader.id.includes(search);
      const matchesCategory =
        activeCategory === "all" || loader.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  // Stats
  const stats = useMemo(() => ({
    total: loaders.length,
    categories: new Set(loaders.map((l) => l.category)).size,
  }), []);

  return (
    <div className="min-h-screen bg-[#09090b]">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm mb-6">
              <span className="animate-pulse">●</span>
              <span>{stats.total}+ Pure CSS Loaders</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              CSS Loading
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Animations</span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
              A curated collection of beautiful, lightweight loading animations built with pure CSS.
              Copy & paste ready for your next project.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search loaders by name or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="sticky top-0 z-40 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {categories.map((cat) => {
              const count = cat.id === "all"
                ? loaders.length
                : loaders.filter((l) => l.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat.id
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${activeCategory === cat.id ? "bg-white/20" : "bg-white/5"
                    }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Loaders Grid */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-zinc-400 text-sm">
            Showing <span className="text-white font-medium">{filteredLoaders.length}</span> loaders
            {search && <span> for "{search}"</span>}
          </p>
        </div>

        {/* Grid */}
        {filteredLoaders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredLoaders.map((loader) => (
              <LoaderCard key={loader.id} loader={loader} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-white mb-2">No loaders found</h3>
            <p className="text-zinc-400">Try adjusting your search or filter</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-500 text-sm">
            Built with ❤️ using Next.js & Pure CSS • {stats.total} Loaders • {stats.categories} Categories
          </p>
        </div>
      </footer>
    </div>
  );
}
