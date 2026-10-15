<script setup lang="ts">
const config = useRuntimeConfig()

defineProps<{
  project: {
    name: string
    logo: string
    logoAlt: string
    description: string
    technologies: string
    status: 'success' | 'info'
    statusColor: 'success' | 'info'
    order?: number
    type: string
    previewTitle?: string
    previewIcon?: string
    previewLabel?: string
    previewName?: string
    previewAccent?: string
    previewDescription?: string
    previewItems?: string[]
  }
}>()
</script>

<template>
  <UCard
    class="group h-full border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:shadow-[0_0_35px_rgba(168,85,247,0.12)]"
  >
    <!-- Aperçu Portfolio -->
    <div
      v-if="project.type === 'portfolio'"
      class="mb-4 overflow-hidden rounded-xl border border-purple-300/15 bg-[#0c1228] p-3"
    >
      <div
        class="flex items-center justify-between border-b border-white/10 pb-2"
      >
        <div class="flex items-center gap-2">
          <span class="size-1.5 rounded-full bg-purple-300" />

          <span class="text-xs font-semibold tracking-wide text-slate-200">
            {{ project.previewTitle }}
          </span>
        </div>

        <UIcon
          :name="project.previewIcon!"
          class="size-4 text-purple-300"
        />
      </div>

      <div class="py-4">
        <p class="text-[10px] uppercase tracking-[0.2em] text-cyan-300">
          {{ project.previewLabel }}
        </p>

        <div class="mt-2 text-xl font-black text-white">
          {{ project.previewName }}
          <span class="text-purple-300">
            {{ project.previewAccent }}
          </span>
        </div>

        <div class="mt-3 flex gap-1.5">
          <span class="h-1 w-12 rounded-full bg-purple-400" />
          <span class="h-1 w-8 rounded-full bg-cyan-300" />
          <span class="h-1 w-5 rounded-full bg-indigo-400" />
        </div>
      </div>

      <p class="text-[11px] leading-4 text-slate-400">
        {{ project.previewDescription }}
      </p>
    </div>

    <!-- Aperçu VeilleTech -->
    <div
      v-else-if="project.type === 'veilleTech'"
      class="mb-4 overflow-hidden rounded-xl border border-cyan-300/15 bg-[#0c1228] p-3"
    >
      <div
        class="flex items-center justify-between border-b border-white/10 pb-2"
      >
        <div class="flex items-center gap-2">
          <span class="size-1.5 rounded-full bg-cyan-300" />

          <span class="text-xs font-semibold tracking-wide text-slate-200">
            {{ project.previewTitle }}
          </span>
        </div>

        <UIcon
          :name="project.previewIcon!"
          class="size-4 text-cyan-300"
        />
      </div>

      <div
        class="grid grid-cols-3 gap-1.5 py-4 text-center text-[11px] text-slate-300"
      >
        <span
          v-for="item in project.previewItems"
          :key="item"
          class="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-2"
        >
          {{ item }}
        </span>
      </div>

      <p class="text-[11px] leading-4 text-slate-400">
        {{ project.previewDescription }}
      </p>
    </div>

    <!-- En-tête -->
    <template #header>
      <div class="flex items-center gap-3">
        <img
          :src="`${config.app.baseURL}${project.logo.replace(/^\//, '')}`"
          :alt="project.logoAlt"
          class="size-14 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
        >

        <div class="min-w-0">
          <h3 class="font-semibold text-white">
            {{ project.name }}
          </h3>

          <p class="text-xs text-muted">
            {{ project.technologies }}
          </p>
        </div>
      </div>
    </template>

    <!-- Description -->
    <p class="text-sm leading-5 text-muted">
      {{ project.description }}
    </p>

    <!-- Statut -->
    <template #footer>
      <div class="flex items-center justify-between gap-3">
        <UBadge
          :color="project.statusColor"
          variant="subtle"
        >
          {{ project.status }}
        </UBadge>
      </div>
    </template>
  </UCard>
</template>
