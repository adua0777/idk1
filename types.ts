@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --color-env-green: #10b981;
  --color-env-dark: #0f172a;
  --color-env-purple: #7c3aed;
}

@layer base {
  body {
    @apply bg-env-dark text-slate-200 font-sans antialiased;
    background: radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                #0f172a;
    min-height: 100vh;
  }
}

.glass {
  @apply bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl;
}

.glass-hover {
  @apply transition-all duration-300 hover:bg-white/10 hover:border-white/20;
}

.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-env-purple to-env-green;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  @apply bg-env-dark;
}
::-webkit-scrollbar-thumb {
  @apply bg-white/10 rounded-full hover:bg-white/20 transition-colors;
}
