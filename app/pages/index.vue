<script setup>
const activeSection = ref('accueil')
const mobileMenuOpen = ref(false)

const sections = [
  { id: 'apropos', label: 'À propos' },
  { id: 'parcours', label: 'Mon parcours' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' }
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)

      if (window.scrollY < 100) {
  activeSection.value = 'accueil'
  return
}

if (visibleSection) {
  activeSection.value = visibleSection.target.id
}
    },
    {
      threshold: [0.2, 0.4, 0.6],
      rootMargin: '-20% 0px -55% 0px'
    }
  )

  document
    .querySelectorAll('section[id]')
    .forEach(section => observer.observe(section))
})
</script>


<template>
  <div class="relative isolate min-h-screen overflow-hidden bg-[#080b1a] text-white lg:pl-64">

    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      <!-- Halos lumineux -->
      <div class="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]"></div>

      <div class="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]"></div>

      <div class="absolute top-2/3 -left-40 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px]"></div>

      <!-- Lueur centrale très douce -->
      <div class="absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/[0.06] blur-[140px]"></div>

      <!-- Texture étoilée discrète -->
      <div
        class="absolute inset-0 opacity-40"
        style="background-image: radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.9), transparent 2px), radial-gradient(1px 1px at 90px 80px, rgba(190,170,255,0.9), transparent 2px), radial-gradient(1.5px 1.5px at 160px 40px, rgba(160,230,255,0.9), transparent 2px); background-size: 200px 140px;"
      ></div>

      <!-- Voile pour conserver un fond sombre lisible -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#080b1a]/10 via-transparent to-[#080b1a]/40"></div>

    </div>


<!-- Barre latérale -->
<aside
  class="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-purple-300/15 bg-[#080b1a]/95 px-5 py-7 backdrop-blur-xl lg:flex"
>
<h2 class="text-lg font-semibold tracking-tight text-white">
  Kaylee Chapon
</h2>
  <p class="mt-1 text-xs leading-relaxed text-slate-400">
  Technicienne Informatique de Proximité
</p>
 <div class="mt-3 flex items-center gap-2 text-xs text-slate-400">
  <span class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]"></span>
  <span>En formation</span>
</div>

  <div
  class="mt-3 inline-flex items-center rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-3 py-1.5 text-xs text-violet-200"
>
  Disponible pour un stage
</div>

  <div class="my-6 h-px bg-gradient-to-r from-purple-400/40 via-cyan-400/20 to-transparent" />
  

  <!-- Navigation -->
  <nav class="space-y-2">
  <!-- Accueil -->
  <a
    href="#accueil"
    class="group relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-all duration-300"
    :class="
      activeSection === 'accueil'
        ? 'bg-white/[0.07] text-cyan-200 shadow-[0_0_20px_rgba(167,139,250,0.12)]'
        : 'text-slate-400 hover:bg-white/[0.035] hover:text-slate-200'
    "
  >
    <span
      class="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300"
      :class="
        activeSection === 'accueil'
          ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]'
          : 'bg-transparent'
      "
    />

    <UIcon
      name="i-lucide-house"
      class="h-4 w-4 shrink-0 transition-colors duration-300"
      :class="
        activeSection === 'accueil'
          ? 'text-cyan-300'
          : 'text-slate-500 group-hover:text-slate-300'
      "
    />

    <span>Accueil</span>
  </a>

  <!-- À propos -->
  <a
    href="#apropos"
    class="group relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-all duration-300"
    :class="
      activeSection === 'apropos'
        ? 'bg-white/[0.07] text-cyan-200 shadow-[0_0_20px_rgba(167,139,250,0.12)]'
        : 'text-slate-400 hover:bg-white/[0.035] hover:text-slate-200'
    "
  >
    <span
      class="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300"
      :class="
        activeSection === 'apropos'
          ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]'
          : 'bg-transparent'
      "
    />

    <UIcon
      name="i-lucide-user-round"
      class="h-4 w-4 shrink-0 transition-colors duration-300"
      :class="
        activeSection === 'apropos'
          ? 'text-cyan-300'
          : 'text-slate-500 group-hover:text-slate-300'
      "
    />

    <span>À propos</span>
  </a>

  <!-- Parcours -->
  <a
    href="#parcours"
    class="group relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-all duration-300"
    :class="
      activeSection === 'parcours'
        ? 'bg-white/[0.07] text-cyan-200 shadow-[0_0_20px_rgba(167,139,250,0.12)]'
        : 'text-slate-400 hover:bg-white/[0.035] hover:text-slate-200'
    "
  >
    <span
      class="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300"
      :class="
        activeSection === 'parcours'
          ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]'
          : 'bg-transparent'
      "
    />

    <UIcon
      name="i-lucide-route"
      class="h-4 w-4 shrink-0 transition-colors duration-300"
      :class="
        activeSection === 'parcours'
          ? 'text-cyan-300'
          : 'text-slate-500 group-hover:text-slate-300'
      "
    />

    <span>Mon parcours</span>
  </a>

  <!-- Compétences -->
  <a
    href="#competences"
    class="group relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-all duration-300"
    :class="
      activeSection === 'competences'
        ? 'bg-white/[0.07] text-cyan-200 shadow-[0_0_20px_rgba(167,139,250,0.12)]'
        : 'text-slate-400 hover:bg-white/[0.035] hover:text-slate-200'
    "
  >
    <span
      class="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300"
      :class="
        activeSection === 'competences'
          ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]'
          : 'bg-transparent'
      "
    />

    <UIcon
      name="i-lucide-cpu"
      class="h-4 w-4 shrink-0 transition-colors duration-300"
      :class="
        activeSection === 'competences'
          ? 'text-cyan-300'
          : 'text-slate-500 group-hover:text-slate-300'
      "
    />

    <span>Compétences</span>
  </a>

  <!-- Projets -->
  <a
    href="#projets"
    class="group relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-all duration-300"
    :class="
      activeSection === 'projets'
        ? 'bg-white/[0.07] text-cyan-200 shadow-[0_0_20px_rgba(167,139,250,0.12)]'
        : 'text-slate-400 hover:bg-white/[0.035] hover:text-slate-200'
    "
  >
    <span
      class="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300"
      :class="
        activeSection === 'projets'
          ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]'
          : 'bg-transparent'
      "
    />

    <UIcon
      name="i-lucide-folder-git-2"
      class="h-4 w-4 shrink-0 transition-colors duration-300"
      :class="
        activeSection === 'projets'
          ? 'text-cyan-300'
          : 'text-slate-500 group-hover:text-slate-300'
      "
    />

    <span>Projets</span>
  </a>

  <!-- Contact -->
  <a
    href="#contact"
    class="group relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-all duration-300"
    :class="
      activeSection === 'contact'
        ? 'bg-white/[0.07] text-cyan-200 shadow-[0_0_20px_rgba(167,139,250,0.12)]'
        : 'text-slate-400 hover:bg-white/[0.035] hover:text-slate-200'
    "
  >
    <span
      class="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300"
      :class="
        activeSection === 'contact'
          ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]'
          : 'bg-transparent'
      "
    />

    <UIcon
      name="i-lucide-mail"
      class="h-4 w-4 shrink-0 transition-colors duration-300"
      :class="
        activeSection === 'contact'
          ? 'text-cyan-300'
          : 'text-slate-500 group-hover:text-slate-300'
      "
    />

    <span>Contact</span>
  </a>
</nav>

  
<!-- Mascotte axolotl -->
<div class="mt-auto pt-6">
  <div
    class="group overflow-hidden rounded-2xl border border-purple-300/25 bg-gradient-to-b from-purple-500/10 via-[#0c1228] to-cyan-500/10 shadow-[0_8px_30px_rgba(0,0,0,0.3),0_0_20px_rgba(168,85,247,0.12)] transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.22)]"
  >
    <div class="relative overflow-hidden">
      <img
        src="/images/axolotl-nebuleuse.png"
        alt="Mascotte axolotl de l'univers Nébuleuse"
        class="relative z-10 mx-auto aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="px-4 pb-4 text-center">
      <p class="text-sm font-semibold text-purple-200">
        Mon univers
      </p>
      <p class="mt-1 text-xs leading-5 text-slate-400">
        Une touche de magie dans mon univers informatique.
      </p>
    </div>
  </div>

  <p class="mt-4 text-center text-xs text-slate-500">
    Univers créé avec ♡ par Diamesta
  </p>
  </div>
</aside>

<!-- Bouton menu mobile -->
<button
  type="button"
  class="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/25 bg-[#0c1228]/90 text-slate-300 shadow-[0_8px_30px_rgba(0,0,0,0.35),0_0_18px_rgba(168,85,247,0.08)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/[0.06] hover:text-cyan-200 hover:shadow-[0_0_24px_rgba(103,232,249,0.12)] lg:hidden"
  aria-label="Ouvrir le menu"
  @click="mobileMenuOpen = true"
>
  <UIcon name="i-lucide-menu" class="h-5 w-5" />
</button>

<!-- Sidebar mobile -->
<Transition
  enter-active-class="transition-transform duration-300 ease-out"
  enter-from-class="-translate-x-full"
  enter-to-class="translate-x-0"
  leave-active-class="transition-transform duration-300 ease-in"
  leave-from-class="translate-x-0"
  leave-to-class="-translate-x-full"
>
  <aside
    v-if="mobileMenuOpen"
class="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-purple-300/20 bg-[#080b1a]/95 px-6 py-8 shadow-[10px_0_45px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden"  >
    <!-- Fermeture -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-white">
  Kaylee Chapon
</h2>

<p class="mt-1 text-xs leading-relaxed text-slate-400">
  Technicienne Informatique de Proximité
</p>

<div class="mt-3 flex items-center gap-2 text-xs text-slate-400">
  <span class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]"></span>
  <span>En formation</span>
</div>

<div
  class="mt-3 inline-flex items-center rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-3 py-1.5 text-xs text-violet-200"
>
  Disponible pour un stage
</div>
      </div>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white"
        aria-label="Fermer le menu"
        @click="mobileMenuOpen = false"
      >
        <UIcon name="i-lucide-x" class="h-5 w-5" />
      </button>
    </div>

    <!-- Navigation -->
<nav class="mt-10 space-y-2">
  <a
    v-for="item in [
      { id: 'accueil', label: 'Accueil', icon: 'i-lucide-house' },
      { id: 'apropos', label: 'À propos', icon: 'i-lucide-user-round' },
      { id: 'parcours', label: 'Mon parcours', icon: 'i-lucide-route' },
      { id: 'competences', label: 'Compétences', icon: 'i-lucide-cpu' },
      { id: 'projets', label: 'Projets', icon: 'i-lucide-folder-git-2' },
      { id: 'contact', label: 'Contact', icon: 'i-lucide-mail' }
    ]"
    :key="item.id"
    :href="`#${item.id}`"
    class="group relative block rounded-xl px-4 py-3 text-sm transition-all duration-300"
    :class="
      activeSection === item.id
        ? 'bg-white/[0.07] text-cyan-200 shadow-[0_0_20px_rgba(167,139,250,0.12)]'
        : 'text-slate-400 hover:bg-white/[0.035] hover:text-slate-200'
    "
    @click="
      activeSection = item.id;
      mobileMenuOpen = false;
    "
  >
    <span
      class="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300"
      :class="
        activeSection === item.id
          ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]'
          : 'bg-transparent'
      "
    />

    <div class="flex items-center gap-3">
      <UIcon
        :name="item.icon"
        class="h-4 w-4 shrink-0 transition-colors duration-300"
        :class="
          activeSection === item.id
            ? 'text-cyan-300'
            : 'text-slate-500 group-hover:text-slate-300'
        "
      />

      <span>{{ item.label }}</span>
    </div>
  </a>
</nav>

    <!-- Mascotte axolotl -->
<div class="mt-auto pt-6">
  <div
    class="group overflow-hidden rounded-2xl border border-purple-300/25 bg-gradient-to-b from-purple-500/10 via-[#0c1228] to-cyan-500/10 shadow-[0_8px_30px_rgba(0,0,0,0.3),0_0_20px_rgba(168,85,247,0.12)] transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.22)]"
  >
    <div class="relative overflow-hidden">
      <img
        src="/images/axolotl-nebuleuse.png"
        alt="Mascotte axolotl de l'univers Nébuleuse"
        class="relative z-10 mx-auto aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="px-4 pb-4 text-center">
      <p class="text-sm font-semibold text-purple-200">
        Mon univers
      </p>

      <p class="mt-1 text-xs leading-5 text-slate-400">
        Une touche de magie dans mon univers informatique.
      </p>
    </div>
  </div>

  <p class="mt-4 text-center text-xs text-slate-500">
    Univers créé avec ♡ par Diamesta
  </p>
</div>
  </aside>
</Transition>

<!-- Fond derrière le menu -->
<Transition
  enter-active-class="transition-opacity duration-300"
  enter-from-class="opacity-0"
  enter-to-class="opacity-100"
  leave-active-class="transition-opacity duration-200"
  leave-from-class="opacity-100"
  leave-to-class="opacity-0"
>
  <button
    v-if="mobileMenuOpen"
    type="button"
    aria-label="Fermer le menu"
    class="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
    @click="mobileMenuOpen = false"
  />
</Transition>


<section id="accueil" class="relative mx-auto max-w-7xl px-6 pb-8 pt-17 sm:py-12">
  <div class="max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_40px_rgba(168,85,247,0.06)] backdrop-blur-sm sm:p-10">
<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-400/[0.08] px-4 py-2 text-sm text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.12)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">      <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
      En formation · Disponible pour un stage
    </div>

    <p class="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
      Bienvenue dans mon univers
    </p>

<h1 class="mt-8 text-5xl font-black tracking-tight text-white drop-shadow-[0_0_18px_rgba(192,132,252,0.18)] sm:mt-16 sm:text-7xl">      Kaylee
      <span class="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
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
        <UIcon name="i-lucide-arrow-right" class="size-5" />
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

       <UIcon name="i-lucide-download" class="size-5" />
      Télécharger mon CV
      </a>
    </div>
  </div>

<div class="mt-4 flex flex-wrap gap-4 sm:mt-8">
      <span class="rounded-lg border border-purple-300/20 bg-purple-300/5 px-3 py-2 text-sm text-purple-200">
      Systèmes
    </span>
    <span class="rounded-lg border border-cyan-300/20 bg-cyan-300/5 px-3 py-2 text-sm text-cyan-200">
      Réseaux
    </span>
    <span class="rounded-lg border border-indigo-300/20 bg-indigo-300/5 px-3 py-2 text-sm text-indigo-200">
      Maintenance informatique
    </span>
  </div>
</section>


<UPageSection
  id="apropos"
  :ui="{
    container: 'flex min-h-svh flex-col gap-4 pt-6 pb-2 sm:gap-40 sm:pt-8 sm:pb-4 lg:flex lg:pt-10 lg:pb-6',
    header: 'mb-0',
    description: 'mt-2',
    title: 'bg-gradient-to-r from-purple-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent'
  }"
  title="À propos de moi"
  description="Un peu plus sur mon parcours et ma façon d'aborder l'informatique."
  class="relative z-10 mx-auto max-w-7xl px-6"
>
  <div class="flex w-full flex-1 items-start justify-center">
    <div class="flex w-full flex-col gap-4">

    <!-- Présentation -->
<div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
  <p class="leading-7 text-slate-300 sm:leading-8">
    Je m'appelle Kaylee Chapon et je me forme actuellement aux métiers
    du support informatique. J'aime découvrir comment fonctionnent les
    systèmes, comprendre l'origine des problèmes techniques et apprendre
    à les résoudre étape par étape.
  </p>

  <p class="mt-4 leading-7 text-slate-300 sm:leading-8">
    À travers ma formation et mes projets personnels, je développe
    progressivement mes compétences en maintenance, systèmes, réseaux
    et développement web. Mon objectif est de mettre ces connaissances
    en pratique sur le terrain et de continuer à progresser.
  </p>
</div>

    <!-- Motivation -->
    <div class="rounded-2xl border border-purple-300/20 bg-purple-400/[0.05] p-6 sm:p-8">

      <div class="flex items-center gap-3">
        <div class="rounded-xl border border-purple-300/20 bg-purple-400/10 p-3">
          <UIcon name="i-lucide-sparkles" class="size-6 text-purple-300" />
        </div>

        <h3 class="text-lg font-semibold text-white">
          Ce qui me motive
        </h3>
      </div>

      <ul class="mt-4 grid gap-4 text-sm leading-6 text-slate-300 sm:mt-5 sm:grid-cols-3">
        <li class="flex gap-3">
          <UIcon
            name="i-lucide-check-circle-2"
            class="mt-1 size-4 shrink-0 text-cyan-300"
          />
          <span>Comprendre et résoudre des problèmes techniques</span>
        </li>

        <li class="flex gap-3">
          <UIcon
            name="i-lucide-check-circle-2"
            class="mt-1 size-4 shrink-0 text-cyan-300"
          />
          <span>Apprendre en pratiquant</span>
        </li>

        <li class="flex gap-3">
          <UIcon
            name="i-lucide-check-circle-2"
            class="mt-1 size-4 shrink-0 text-cyan-300"
          />
          <span>Créer des projets personnels</span>
        </li>
      </ul>

    </div>

    </div>
  </div>
</UPageSection>


<UPageSection
  id="parcours"
  title="Mon parcours"
  :ui="{
    container: 'flex min-h-svh flex-col gap-2 pt-20 pb-4 sm:gap-6 sm:py-6 lg:flex lg:py-8',
    header: 'mb-0',
    description: 'mt-2',
    title: 'bg-gradient-to-r from-purple-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent'
  }"
  description="Mon évolution vers les métiers de l'informatique."
  class="relative z-10 mx-auto max-w-7xl px-6"
>
  <div class="flex w-full flex-1 items-center justify-center">
    <div class="grid w-full gap-5 md:grid-cols-2">
    <UCard class="h-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
      <div class="flex items-start gap-4">
        <div class="rounded-xl border border-purple-300/20 bg-purple-300/10 p-3">
          <UIcon name="i-lucide-graduation-cap" class="size-6 text-purple-300" />
        </div>
        <div>
          <p class="text-sm text-cyan-300">2026 – en cours</p>
          <h3 class="mt-1 font-semibold text-white">
            Technicienne Informatique de Proximité
          </h3>
          <p class="mt-1 text-sm text-slate-300">
            Metz Numeric School
          </p>
          <p class="mt-3 text-sm leading-6 text-slate-400">
            Formation orientée vers la maintenance informatique,
            les systèmes, les réseaux et l'assistance aux utilisateurs.
          </p>
        </div>
      </div>
    </UCard>

    <UCard class="h-full border border-white/10 bg-white/[0.03]">
      <div class="flex items-start gap-4">
        <div class="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3">
          <UIcon name="i-lucide-briefcase-business" class="size-6 text-cyan-300" />
        </div>
        <div>
          <p class="text-sm text-cyan-300">Expérience professionnelle</p>
          <h3 class="mt-1 font-semibold text-white">
            Hôtesse d'accueil
          </h3>
          <p class="mt-1 text-sm text-slate-300">
            Burger King · 2025–2026
          </p>
          <p class="mt-3 text-sm leading-6 text-slate-400">
            Accueil, communication, organisation et travail en équipe.
            Des compétences utiles pour accompagner les utilisateurs.
          </p>
        </div>
      </div>
    </UCard>
    </div>
  </div>
</UPageSection>
    
<UPageSection
  id="competences"
  title="Mes compétences"
  :ui="{
    container: 'flex min-h-svh flex-col gap-4 py-4 sm:gap-6 sm:py-6 lg:flex lg:py-8',
    header: 'mb-0',
    description: 'mt-2',
    title: 'bg-gradient-to-r from-purple-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent'
  }"
  description="Les connaissances que je développe au fil de ma formation et de mes projets."
  class="relative z-10 mx-auto max-w-7xl px-6"
>
  <div class="flex w-full flex-1 items-center justify-center">
    <div class="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <UCard
      v-for="competence in [
        {
          icon: 'i-lucide-monitor',
          titre: 'Matériel informatique',
          texte: 'Composants, mémoire vive, stockage et périphériques.',
          couleur: 'text-cyan-300'
        },
        {
          icon: 'i-lucide-network',
          titre: 'Réseaux',
          texte: 'Découverte des réseaux et des communications informatiques.',
          couleur: 'text-purple-300'
        },
        {
          icon: 'i-lucide-terminal',
          titre: 'Systèmes et Linux',
          texte: 'Terminal, commandes Linux et gestion des fichiers.',
          couleur: 'text-indigo-300'
        },
        {
          icon: 'i-lucide-wrench',
          titre: 'Maintenance',
          texte: 'Diagnostic et découverte des méthodes de dépannage.',
          couleur: 'text-cyan-300'
        },
        {
          icon: 'i-lucide-code',
          titre: 'Développement web',
          texte: 'Création de projets avec Vue.js, Nuxt et Tailwind CSS.',
          couleur: 'text-purple-300'
        },
        {
          icon: 'i-lucide-book-open',
          titre: 'Apprentissage continu',
          texte: 'Pratique, expérimentation et progression technique.',
          couleur: 'text-indigo-300'
        }
      ]"
      :key="competence.titre"
class="group h-full border border-purple-300/20 bg-gradient-to-br from-purple-400/[0.08] via-white/[0.03] to-cyan-400/[0.05] shadow-[0_8px_35px_rgba(0,0,0,0.35),0_0_30px_rgba(168,85,247,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_10px_45px_rgba(0,0,0,0.4),0_0_35px_rgba(34,211,238,0.18)]"    >
      <div class="flex items-start gap-3">
        <div class="rounded-xl border border-white/10 bg-white/5 p-3">
          <UIcon
            :name="competence.icon"
            class="size-6"
            :class="competence.couleur"
          />
        </div>

        <div class="min-w-0">
          <h3 class="font-semibold text-white">
            {{ competence.titre }}
          </h3>

          <p class="mt-1 text-sm leading-5 text-slate-300">
            {{ competence.texte }}
          </p>
        </div>
      </div>
    </UCard>
    </div>
  </div>
</UPageSection>

<UPageSection
  id="projets"
  title="Mes projets"
  :ui="{
    container: 'flex min-h-svh flex-col gap-4 py-4 sm:gap-6 sm:py-6 lg:flex lg:py-8',
    header: 'mb-0',
    description: 'mt-2',
    title: 'bg-gradient-to-r from-purple-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent'
  }"
  description="Des projets personnels pour mettre en pratique mes connaissances et progresser dans le développement informatique."
>
  <div class="flex w-full flex-1 items-center justify-center">
    <div class="grid w-full gap-4 md:grid-cols-2 md:gap-6">

      <!-- PatchWatch -->
      <UCard
        class="group h-full border border-cyan-300/20 bg-gradient-to-br from-cyan-400/[0.07] via-white/[0.03] to-purple-400/[0.06] shadow-[0_8px_35px_rgba(0,0,0,0.35),0_0_30px_rgba(34,211,238,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/50 hover:shadow-[0_10px_45px_rgba(0,0,0,0.4),0_0_35px_rgba(168,85,247,0.18)]"
      >
        <div class="mb-5 overflow-hidden rounded-xl border border-cyan-300/15 bg-[#0c1228] p-4">
          <div class="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div class="flex items-center gap-2">
              <span class="size-2 rounded-full bg-cyan-300"></span>
              <span class="text-xs font-semibold tracking-wide text-slate-200">
                PATCHWATCH
              </span>
            </div>

            <span class="text-xs text-slate-400">
              Aperçu du concept
            </span>
          </div>

          <div class="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
            <div class="rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <UIcon name="i-lucide-gamepad-2" class="size-5 text-cyan-300" />
              <p class="mt-2 text-xs text-slate-300">Jeux suivis</p>
              <p class="mt-1 text-xs font-semibold text-white">À venir</p>
            </div>

            <div class="rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <UIcon name="i-lucide-newspaper" class="size-5 text-purple-300" />
              <p class="mt-2 text-xs text-slate-300">Actualités</p>
              <p class="mt-1 text-xs font-semibold text-purple-200">
                Centralisées
              </p>
            </div>

            <div class="rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <UIcon name="i-lucide-bell" class="size-5 text-cyan-300" />
              <p class="mt-2 text-xs text-slate-300">Alertes</p>
              <p class="mt-1 text-xs font-semibold text-cyan-200">
                Prévues
              </p>
            </div>
          </div>

          <p class="mt-3 text-xs leading-5 text-slate-400">
            Maquette illustrative — interface et fonctionnalités en cours de définition.
          </p>
        </div>

        <template #header>
          <div class="flex items-center gap-3">
            <div class="rounded-xl bg-primary/10 p-3">
              <UIcon name="i-lucide-monitor" class="size-6 text-primary" />
            </div>

            <div>
              <h3 class="font-semibold">PatchWatch</h3>
              <p class="text-sm text-muted">Projet informatique</p>
            </div>
          </div>
        </template>

        <p class="text-sm leading-6 text-muted">
          Un projet autour du suivi des mises à jour et de la maintenance
          informatique, dont l’interface est en cours de conception.
        </p>

        <template #footer>
          <div class="flex flex-wrap items-center justify-between gap-3">
            <UBadge color="info" variant="subtle">
              En conception
            </UBadge>

            <span class="inline-flex items-center gap-2 text-sm text-slate-400">
              <UIcon name="i-lucide-code-2" class="size-4" />
              Développement en cours
            </span>
          </div>
        </template>
      </UCard>

      <!-- Portfolio -->
      <UCard
        class="group h-full border border-cyan-300/20 bg-gradient-to-br from-cyan-400/[0.07] via-white/[0.03] to-purple-400/[0.06] shadow-[0_0_18px_rgba(34,211,238,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
      >
        <div class="mb-5 overflow-hidden rounded-xl border border-purple-300/15 bg-[#0c1228] p-4">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="flex items-center gap-2">
              <span class="size-2 rounded-full bg-purple-300"></span>

              <span class="text-xs font-semibold tracking-wide text-slate-200">
                KAYLEE CHAPON
              </span>
            </div>

            <UIcon name="i-lucide-sparkles" class="size-5 text-purple-300" />
          </div>

          <div class="py-6">
            <p class="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Bienvenue dans mon univers
            </p>

            <div class="mt-3 text-2xl font-black text-white">
              Portfolio
              <span class="text-purple-300">Nébuleuse.</span>
            </div>

            <div class="mt-4 flex gap-2">
              <span class="h-1.5 w-16 rounded-full bg-purple-400"></span>
              <span class="h-1.5 w-10 rounded-full bg-cyan-300"></span>
              <span class="h-1.5 w-6 rounded-full bg-indigo-400"></span>
            </div>
          </div>

          <p class="text-xs text-slate-400">
            Aperçu du design — portfolio en développement.
          </p>
        </div>

        <template #header>
          <div class="flex items-center gap-3">
            <div class="rounded-xl bg-primary/10 p-3">
              <UIcon name="i-lucide-sparkles" class="size-6 text-primary" />
            </div>

            <div>
              <h3 class="font-semibold">Portfolio Nébuleuse</h3>
              <p class="text-sm text-muted">Vue.js · Nuxt · Nuxt UI</p>
            </div>
          </div>
        </template>

        <p class="text-sm leading-6 text-muted">
          Mon portfolio personnel, conçu pour présenter mon parcours,
          mes compétences et mes réalisations dans une interface personnalisée.
        </p>

        <template #footer>
          <UBadge color="primary" variant="subtle">
            En développement
          </UBadge>
        </template>
      </UCard>

    </div>
  </div>
</UPageSection>
<contact/>

<footer class="relative z-10 border-t border-white/10 px-6 py-6">
  <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-sm text-slate-400 sm:flex-row sm:gap-3">
    <p>
      © {{ new Date().getFullYear() }} Kaylee Chapon
    </p>
    <a
      href="#accueil"
      class="transition-colors hover:text-cyan-300"
      @click="activeSection = 'accueil'"
    >
      Retour en haut ↑
    </a>
  </div>
</footer>
  </div>
</template>
