```vue
<script setup lang="ts">
import { projects } from '~/data/projects'

type Project = {
  name: string
  logo: string
  logoAlt: string
  description: string
  technologies: string
  status: 'success' | 'info'
  statusColor: 'success' | 'info'
  order?: number
  type: string
  previewTitle: string
  previewIcon: string
  previewDescription?: string
  previewItems?: string[]
  [key: string]: unknown
}

const typedProjects = projects as Project[]
</script>

<template>
  <UPageSection
    id="projets"
    title="Mes projets"
    :ui="{
      container: 'flex min-h-svh flex-col justify-center gap-10 py-10 sm:gap-12 sm:py-12',
      header: 'mb-0',
      description: 'mt-1',
      title: 'bg-gradient-to-r from-purple-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent'
    }"
    description="Des projets personnels pour mettre en pratique mes connaissances et progresser dans le développement informatique."
    class="relative z-10 mx-auto min-h-svh snap-start px-6"
  >
    <div class="flex w-full flex-1 items-center justify-center">
      <div class="grid w-full max-w-6xl gap-5 md:grid-cols-2">
        <ProjectCard
          v-for="project in typedProjects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
  </UPageSection>
</template>
```
