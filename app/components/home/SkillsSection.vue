```vue
<script setup lang="ts">
import { skills } from '~/data/skills'
</script>

<template>
  <UPageSection
    id="competences"
    title="Mes compétences"
    :ui="{
      container: 'flex min-h-svh flex-col justify-center gap-5 py-10 sm:gap-6 sm:py-12',
      header: 'mb-0',
      description: 'mt-1',
      title: 'bg-gradient-to-r from-purple-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent'
    }"
    description="Les connaissances que je développe au fil de ma formation et de mes projets."
    class="relative z-10 mx-auto min-h-svh snap-start px-6"
  >
    <div class="flex w-full flex-1 items-center justify-center">
      <div class="grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="competence in skills"
          :key="competence.titre"
          class="group min-h-32 border border-purple-300/15 bg-gradient-to-br from-purple-400/[0.07] via-white/[0.025] to-cyan-400/[0.04] p-5 shadow-[0_0_25px_rgba(168,85,247,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
        >
          <div class="flex items-start gap-3">
            <div
              class="shrink-0 rounded-lg border border-white/10 bg-white/5 p-2"
            >
              <UIcon
                :name="competence.icon"
                class="size-5"
                :class="competence.couleur"
              />
            </div>

            <div class="min-w-0">
              <h3 class="text-sm font-semibold text-white">
                {{ competence.titre }}
              </h3>

              <p class="mt-1 text-xs leading-5 text-slate-400">
                {{ competence.texte }}
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UPageSection>
</template>
```
