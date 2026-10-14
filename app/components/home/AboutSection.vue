```vue
<template>
  <UPageSection
    id="apropos"
    :ui="{
      container: 'flex min-h-svh flex-col justify-center gap-8 py-16 sm:gap-10 lg:py-20',
      header: 'mb-0',
      description: 'mt-3',
      title: 'bg-gradient-to-r from-purple-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent'
    }"
    title="À propos de moi"
    description="Un peu plus sur mon parcours et ma façon d'aborder l'informatique."
    class="relative z-10 mx-auto min-h-svh w-full max-w-7xl snap-start px-6"
  >
    <div class="flex w-full flex-1 items-center">
      <div class="grid w-full gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <!-- Présentation -->
        <div
          class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(168,85,247,0.06)] backdrop-blur-sm transition-all duration-500 hover:border-purple-300/20 hover:bg-white/[0.05] sm:p-8 lg:p-10"
        >
          <div class="mb-6 flex items-center gap-3">
            <div
              class="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3"
            >
              <UIcon
                name="i-lucide-user-round"
                class="size-6 text-cyan-300"
              />
            </div>

            <h3 class="text-xl font-semibold text-white">
              Qui suis-je ?
            </h3>
          </div>

          <div class="space-y-4">
            <p class="leading-7 text-slate-300 sm:leading-8">
              Je m'appelle Kaylee Chapon et je me forme actuellement aux métiers
              du support informatique. J'aime découvrir comment fonctionnent les
              systèmes, comprendre l'origine des problèmes techniques et apprendre
              à les résoudre étape par étape.
            </p>

            <p class="leading-7 text-slate-300 sm:leading-8">
              À travers ma formation et mes projets personnels, je développe
              progressivement mes compétences en maintenance, systèmes, réseaux
              et développement web. Mon objectif est de mettre ces connaissances
              en pratique sur le terrain et de continuer à progresser.
            </p>
          </div>
        </div>

        <!-- Motivation -->
        <div
          class="rounded-3xl border border-purple-300/20 bg-purple-400/[0.05] p-6 shadow-[0_0_50px_rgba(168,85,247,0.08)] backdrop-blur-sm transition-all duration-500 hover:border-cyan-300/20 hover:bg-purple-400/[0.08] sm:p-8 lg:p-10"
        >
          <div class="flex items-center gap-3">
            <div
              class="rounded-xl border border-purple-300/20 bg-purple-400/10 p-3"
            >
              <UIcon
                name="i-lucide-sparkles"
                class="size-6 text-purple-300"
              />
            </div>

            <h3 class="text-xl font-semibold text-white">
              Ce qui me motive
            </h3>
          </div>

          <ul
            class="mt-6 space-y-5 text-sm leading-6 text-slate-300 sm:text-base"
          >
            <li class="flex gap-3">
              <UIcon
                name="i-lucide-check-circle-2"
                class="mt-1 size-5 shrink-0 text-cyan-300"
              />

              <span>
                Comprendre et résoudre des problèmes techniques
              </span>
            </li>

            <li class="flex gap-3">
              <UIcon
                name="i-lucide-check-circle-2"
                class="mt-1 size-5 shrink-0 text-cyan-300"
              />

              <span>
                Apprendre en pratiquant
              </span>
            </li>

            <li class="flex gap-3">
              <UIcon
                name="i-lucide-check-circle-2"
                class="mt-1 size-5 shrink-0 text-cyan-300"
              />

              <span>
                Créer des projets personnels
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
```
