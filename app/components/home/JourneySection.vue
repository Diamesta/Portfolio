<template>
  <UPageSection
    id="parcours"
    title="Mon parcours"
    :ui="{
      container: 'flex min-h-svh flex-col justify-center gap-5 py-10 sm:gap-6 sm:py-12',
      header: 'mb-0',
      description: 'mt-1',
      title: 'bg-gradient-to-r from-purple-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent'
    }"
    description="Mon évolution vers les métiers de l'informatique."
    class="relative z-10 mx-auto min-h-svh snap-start px-6"
  >
    <div class="relative flex w-full flex-1 items-center pl-8 sm:pl-0">
      <!-- Ligne centrale -->
      <div
        class="absolute bottom-4 left-8 top-4 w-px bg-gradient-to-b from-purple-300/50 via-fuchsia-300/30 to-cyan-300/50 sm:left-1/2 sm:-translate-x-1/2"
      />

      <div class="relative flex w-full flex-col gap-5 sm:gap-6">
        <!-- Formation -->
        <div class="relative flex items-center sm:justify-start">
          <div
            class="relative z-10 w-full rounded-2xl border border-purple-300/15 bg-white/[0.035] p-4 shadow-[0_0_35px_rgba(168,85,247,0.06)] backdrop-blur-md sm:mr-auto sm:w-[44%] sm:p-5"
          >
            <div class="flex items-start gap-3">
              <div
                class="shrink-0 rounded-lg border border-purple-300/20 bg-purple-300/10 p-2"
              >
                <UIcon
                  name="i-lucide-graduation-cap"
                  class="size-5 text-purple-300"
                />
              </div>

              <div class="min-w-0">
                <p class="text-xs font-medium text-purple-300">
                  2026 – en cours
                </p>

                <h3 class="mt-0.5 text-base font-semibold text-white">
                  Technicienne Informatique de Proximité
                </h3>

                <p class="mt-0.5 text-xs text-slate-300">
                  Metz Numeric School
                </p>
              </div>
            </div>

            <p class="mt-3 text-xs leading-5 text-slate-400 sm:text-sm">
              Formation orientée vers la maintenance informatique,
              les systèmes, les réseaux et l'assistance aux utilisateurs.
            </p>
          </div>

          <!-- Point timeline -->
          <div
            class="absolute left-0 z-20 size-2.5 -translate-x-1/2 rounded-full bg-purple-300 shadow-[0_0_15px_rgba(216,180,254,0.8)] sm:left-1/2"
          />
        </div>

        <!-- Expérience -->
        <div class="relative flex items-center sm:justify-end">
          <div
            class="relative z-10 w-full rounded-2xl border border-cyan-300/15 bg-white/[0.035] p-4 shadow-[0_0_35px_rgba(34,211,238,0.05)] backdrop-blur-md sm:ml-auto sm:w-[44%] sm:p-5"
          >
            <div class="flex items-start gap-3">
              <div
                class="shrink-0 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-2"
              >
                <UIcon
                  name="i-lucide-briefcase-business"
                  class="size-5 text-cyan-300"
                />
              </div>

              <div class="min-w-0">
                <p class="text-xs font-medium text-cyan-300">
                  Expérience professionnelle
                </p>

                <h3 class="mt-0.5 text-base font-semibold text-white">
                  Hôtesse d'accueil
                </h3>

                <p class="mt-0.5 text-xs text-slate-300">
                  Burger King · 2025–2026
                </p>
              </div>
            </div>

            <p class="mt-3 text-xs leading-5 text-slate-400 sm:text-sm">
              Accueil, communication, organisation et travail en équipe.
              Des compétences utiles pour accompagner les utilisateurs
              et travailler dans un environnement professionnel.
            </p>
          </div>

          <!-- Point timeline -->
          <div
            class="absolute left-0 z-20 size-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)] sm:left-1/2"
          />
        </div>
      </div>
    </div>
  </UPageSection>
</template>
