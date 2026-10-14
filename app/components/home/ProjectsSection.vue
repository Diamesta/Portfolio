<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
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
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
  </UPageSection>
</template>
