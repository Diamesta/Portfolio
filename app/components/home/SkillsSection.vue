<script setup lang="ts">
import { skills } from '~/data/skills'
</script>

<template>
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
          v-for="competence in skills"
          :key="competence.titre"
          class="group h-full border border-purple-300/20 bg-gradient-to-br from-purple-400/[0.08] via-white/[0.03] to-cyan-400/[0.05] shadow-[0_8px_35px_rgba(0,0,0,0.35),0_0_30px_rgba(168,85,247,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_10px_45px_rgba(0,0,0,0.4),0_0_35px_rgba(34,211,238,0.18)]"
        >
          <div class="flex items-start gap-3">
            <div
              class="rounded-xl border border-white/10 bg-white/5 p-3"
            >
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
</template>
