<template>
  <section
    id="accueil"
    class="relative mx-auto max-w-7xl px-6 pb-8 pt-17 sm:py-12"
  >
    <div
      class="max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_40px_rgba(168,85,247,0.06)] backdrop-blur-sm sm:p-10"
    >
      <div
        class="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-400/[0.08] px-4 py-2 text-sm text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.12)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
      >
        <span class="h-2 w-2 rounded-full bg-cyan-300" />
        En formation · Disponible pour un stage
      </div>

      <p class="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        Bienvenue dans mon univers
      </p>

      <h1
        class="mt-8 text-5xl font-black tracking-tight text-white drop-shadow-[0_0_18px_rgba(192,132,252,0.18)] sm:mt-16 sm:text-7xl"
      >
        Kaylee
        <span
          class="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent"
        >
          Chapon
        </span>
      </h1>

      <h2 class="mt-4 text-xl font-medium text-slate-200 sm:mt-6 sm:text-2xl">
        Future Technicienne Informatique de Proximité
      </h2>

      <p class="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:mt-5 sm:text-lg">
        Passionnée par l'informatique et les nouvelles technologies, je développe
        mes compétences en systèmes, réseaux et maintenance. Découvrez mon parcours,
        mes apprentissages et mes projets.
      </p>

      <div class="mt-8 flex flex-wrap gap-4">
        <a
          href="#projets"
          class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          Découvrir mes projets

          <UIcon
            name="i-lucide-arrow-right"
            class="size-5"
          />
        </a>

        <a
          href="#competences"
          class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-300/50 hover:bg-white/10"
        >
          Mes compétences
        </a>

        <a
          href="/Portfolio/documents/cv-kaylee-chapon.pdf"
          download="CV-Kaylee-Chapon.pdf"
          class="inline-flex items-center gap-2 rounded-xl border border-purple-300/30 bg-purple-400/10 px-6 py-3 font-semibold text-purple-100 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-purple-400/20 hover:shadow-lg hover:shadow-purple-500/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          <UIcon
            name="i-lucide-download"
            class="size-5"
          />
          Télécharger mon CV
        </a>
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-4 sm:mt-8">
      <span
        class="rounded-lg border border-purple-300/20 bg-purple-300/5 px-3 py-2 text-sm text-purple-200"
      >
        Systèmes
      </span>

      <span
        class="rounded-lg border border-cyan-300/20 bg-cyan-300/5 px-3 py-2 text-sm text-cyan-200"
      >
        Réseaux
      </span>

      <span
        class="rounded-lg border border-indigo-300/20 bg-indigo-300/5 px-3 py-2 text-sm text-indigo-200"
      >
        Maintenance informatique
      </span>
    </div>
  </section>
</template>
