<template>
<UPageSection
  id="contact"
  title="Me contacter"
  :ui="{
    container: 'flex min-h-svh flex-col gap-4 py-20 sm:gap-6 sm:py-6 lg:flex lg:py-8',
    header: 'mb-0',
    description: 'mt-2',
    title: 'bg-gradient-to-r from-purple-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent'
  }"
  description="Vous recherchez une stagiaire en informatique ? Échangeons autour de mon parcours et de ma recherche de stage."
  class="relative z-10 mx-auto max-w-7xl px-6"
>
  <div class="flex w-full flex-1 items-center justify-center">
  <div class="rounded-2xl border border-purple-400/20 bg-white/[0.03] p-8 text-center sm:p-12">
    <UIcon
      name="i-lucide-mail"
      class="mx-auto size-10 text-cyan-300"
    />
    <h3 class="mt-4 text-xl font-semibold text-white">
      Construisons la suite ensemble
    </h3>
    <p class="mx-auto mt-3 max-w-xl leading-7 text-slate-300">
      Je suis actuellement en formation de Technicienne Informatique de Proximité
      et je recherche un stage pour mettre en pratique mes compétences.
    </p>
    <div class="mt-5 flex flex-col items-center gap-2 text-sm text-slate-400">
  <p>Disponible pour échanger autour de ma recherche de stage.</p>
  <p class="text-slate-500">
    Nancy · Épinal · Metz et alentours
  </p>
</div>
    
<div class="mt-6 flex flex-wrap justify-center gap-3">
  <a
    href="https://github.com/Diamesta"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition-colors hover:border-cyan-300/50 hover:bg-white/10"
  >
    <UIcon name="i-lucide-github" class="size-5" />
    GitHub
    <UIcon name="i-lucide-external-link" class="size-4 text-slate-400" />
  </a>

  <a
    href="https://www.linkedin.com/in/kaylee-chapon-0061882a5/"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 rounded-xl border border-purple-300/20 bg-purple-400/10 px-5 py-3 font-medium text-purple-100 transition-colors hover:border-purple-300/50 hover:bg-purple-400/20"
  >
    <UIcon name="i-lucide-linkedin" class="size-5" />
    LinkedIn
    <UIcon name="i-lucide-external-link" class="size-4 text-purple-200" />
  </a>
</div>
  </div>
  </div>
</UPageSection>
</template>