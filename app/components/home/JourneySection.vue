<template>
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
        <UCard
          class="h-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
        >
          <div class="flex items-start gap-4">
            <div
              class="rounded-xl border border-purple-300/20 bg-purple-300/10 p-3"
            >
              <UIcon
                name="i-lucide-graduation-cap"
                class="size-6 text-purple-300"
              />
            </div>

            <div>
              <p class="text-sm text-cyan-300">
                2026 – en cours
              </p>

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

        <UCard
          class="h-full border border-white/10 bg-white/[0.03]"
        >
          <div class="flex items-start gap-4">
            <div
              class="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3"
            >
              <UIcon
                name="i-lucide-briefcase-business"
                class="size-6 text-cyan-300"
              />
            </div>

            <div>
              <p class="text-sm text-cyan-300">
                Expérience professionnelle
              </p>

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
</template>
