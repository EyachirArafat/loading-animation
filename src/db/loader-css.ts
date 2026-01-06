// CSS for each loader - Full working code
export const loaderCSS: Record<string, string> = {
    "001": `.loader-001 {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(99, 102, 241, 0.2);
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }`,

    "002": `.loader-002 {
  display: flex;
  gap: 6px;
}
.loader-002 span {
  width: 12px;
  height: 12px;
  background: #6366f1;
  border-radius: 50%;
  animation: bounce002 1.4s ease-in-out infinite;
}
.loader-002 span:nth-child(2) { animation-delay: 0.2s; }
.loader-002 span:nth-child(3) { animation-delay: 0.4s; }
@keyframes bounce002 {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}`,

    "003": `.loader-003 {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: morph003 4s ease-in-out infinite;
}
@keyframes morph003 {
  0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
  50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
  75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
}`,

    "015": `.loader-015 {
  position: relative;
  width: 50px;
  height: 55px;
  animation: heartbeat015 1.2s ease-in-out infinite;
}
.loader-015::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #f87171 0%, #ef4444 20%, #dc2626 40%, #b91c1c 70%, #991b1b 100%);
  clip-path: path('M25 5 C15 0, 5 5, 5 15 C5 25, 10 35, 25 50 C40 35, 45 25, 45 15 C45 5, 35 0, 25 5 M20 5 L20 0 L25 0 L25 5 M30 5 L30 0 L35 2 L32 7');
  filter: drop-shadow(2px 3px 4px rgba(0,0,0,0.3));
}
.loader-015::after {
  content: '';
  position: absolute;
  top: 12px;
  left: 10px;
  width: 12px;
  height: 8px;
  background: rgba(255,255,255,0.25);
  border-radius: 50%;
  transform: rotate(-30deg);
}
@keyframes heartbeat015 {
  0%, 60%, 100% { transform: scale(1); }
  10% { transform: scale(1.12); }
  20% { transform: scale(1); }
  30% { transform: scale(1.08); }
}`,
};

// Get full code template
export const getLoaderFullCode = (id: string, name: string, html: string): string => {
    const css = loaderCSS[id] || `/* CSS for loader-${id} - Check loaders.css files */`;

    return `<!DOCTYPE html>
<html>
<head>
  <title>${name} Loader</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #0a0a0f;
    }
    
    ${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
};
