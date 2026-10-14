<template>
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
        <div
          class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
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
        <div
          class="rounded-2xl border border-purple-300/20 bg-purple-400/[0.05] p-6 sm:p-8"
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

            <h3 class="text-lg font-semibold text-white">
              Ce qui me motive
            </h3>
          </div>

          <ul
            class="mt-4 grid gap-4 text-sm leading-6 text-slate-300 sm:mt-5 sm:grid-cols-3"
          >
            <li class="flex gap-3">
              <UIcon
                name="i-lucide-check-circle-2"
                class="mt-1 size-4 shrink-0 text-cyan-300"
              />

              <span>
                Comprendre et résoudre des problèmes techniques
              </span>
            </li>

            <li class="flex gap-3">
              <UIcon
                name="i-lucide-check-circle-2"
                class="mt-1 size-4 shrink-0 text-cyan-300"
              />

              <span>
                Apprendre en pratiquant
              </span>
            </li>

            <li class="flex gap-3">
              <UIcon
                name="i-lucide-check-circle-2"
                class="mt-1 size-4 shrink-0 text-cyan-300"
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
