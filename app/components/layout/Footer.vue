<template>
  <footer class="relative z-10 border-t border-white/10 px-6 py-6">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-sm text-slate-400 sm:flex-row sm:gap-3"
    >
      <p>
        © {{ new Date().getFullYear() }} Kaylee Chapon
      </p>

      <a
        href="#accueil"
        class="transition-colors hover:text-cyan-300"
      >
        Retour en haut ↑
      </a>
    </div>
  </footer>
</template>
