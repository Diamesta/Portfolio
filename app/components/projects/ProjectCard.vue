<script setup lang="ts">
defineProps<{
  project: {
    name: string
    logo: string
    logoAlt: string
    description: string
    technologies: string
    status: 'success' | 'info'
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
  <UCard>
    <!-- Aperçu Portfolio -->
    <div
      v-if="project.type === 'portfolio'"
      class="mb-5 overflow-hidden rounded-xl border border-purple-300/15 bg-[#0c1228] p-4"
    >
      <div
        class="flex items-center justify-between border-b border-white/10 pb-3"
      >
        <div class="flex items-center gap-2">
          <span class="size-2 rounded-full bg-purple-300" />

          <span class="text-xs font-semibold tracking-wide text-slate-200">
            {{ project.previewTitle }}
          </span>
        </div>

        <UIcon
          :name="project.previewIcon!"
          class="size-5 text-purple-300"
        />
      </div>

      <div class="py-6">
        <p class="text-xs uppercase tracking-[0.25em] text-cyan-300">
          {{ project.previewLabel }}
        </p>

        <div class="mt-3 text-2xl font-black text-white">
          {{ project.previewName }}
          <span class="text-purple-300">
            {{ project.previewAccent }}
          </span>
        </div>

        <div class="mt-4 flex gap-2">
          <span class="h-1.5 w-16 rounded-full bg-purple-400" />
          <span class="h-1.5 w-10 rounded-full bg-cyan-300" />
          <span class="h-1.5 w-6 rounded-full bg-indigo-400" />
        </div>
      </div>

      <p class="text-xs text-slate-400">
        {{ project.previewDescription }}
      </p>
    </div>

    <!-- Aperçu VeilleTech -->
    <div
      v-else-if="project.type === 'veilleTech'"
      class="mb-5 overflow-hidden rounded-xl border border-cyan-300/15 bg-[#0c1228] p-4"
    >
      <div
        class="flex items-center justify-between border-b border-white/10 pb-3"
      >
        <div class="flex items-center gap-2">
          <span class="size-2 rounded-full bg-cyan-300" />

          <span class="text-xs font-semibold tracking-wide text-slate-200">
            {{ project.previewTitle }}
          </span>
        </div>

        <UIcon
          :name="project.previewIcon!"
          class="size-5 text-cyan-300"
        />
      </div>

      <div
        class="grid grid-cols-3 gap-2 py-5 text-center text-xs text-slate-300 sm:gap-3"
      >
        <span
          v-for="item in project.previewItems"
          :key="item"
          class="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-3"
        >
          {{ item }}
        </span>
      </div>

      <p class="text-xs text-slate-400">
        {{ project.previewDescription }}
      </p>
    </div>

    <!-- En-tête -->
    <template #header>
      <div class="flex items-center gap-3">
        <img
          :src="project.logo"
          :alt="project.logoAlt"
          class="size-20 object-contain transition-transform duration-300 group-hover:scale-105"
        >

        <div>
          <h3 class="font-semibold text-white">
            {{ project.name }}
          </h3>

          <p class="text-sm text-muted">
            {{ project.technologies }}
          </p>
        </div>
      </div>
    </template>

    <!-- Description -->
    <p class="text-sm leading-6 text-muted">
      {{ project.description }}
    </p>

    <!-- Statut -->
    <template #footer>
      <div class="flex flex-wrap items-center justify-between gap-3">
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
