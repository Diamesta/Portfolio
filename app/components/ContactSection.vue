```vue
<template>
  <UPageSection
    id="contact"
    title="Me contacter"
    :ui="{
      container: 'flex min-h-svh flex-col justify-center gap-8 py-12 sm:gap-10 sm:py-16',
      header: 'mb-0',
      description: 'mt-2',
      title: 'bg-gradient-to-r from-purple-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent'
    }"
    description="Vous recherchez une stagiaire en informatique ? Échangeons autour de mon parcours et de ma recherche de stage."
    class="relative z-10 mx-auto min-h-svh snap-start px-6"
  >
    <div class="flex w-full flex-1 items-center justify-center">
      <div
        class="w-full max-w-3xl rounded-3xl border border-purple-400/20 bg-white/[0.035] p-6 text-center shadow-[0_0_60px_rgba(168,85,247,0.08)] backdrop-blur-md sm:p-10"
      >
        <div
          class="mx-auto flex size-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10"
        >
          <UIcon
            name="i-lucide-mail"
            class="size-7 text-cyan-300"
          />
        </div>

        <h3 class="mt-5 text-xl font-semibold text-white sm:text-2xl">
          Construisons la suite ensemble
        </h3>

        <p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          Je suis actuellement en formation de Technicienne Informatique de
          Proximité et je recherche un stage pour mettre en pratique mes
          compétences.
        </p>

        <div class="mt-5 space-y-1 text-sm text-slate-400">
          <p>
            Disponible pour échanger autour de ma recherche de stage.
          </p>

          <p class="text-slate-500">
            Nancy · Épinal · Metz et alentours
          </p>
        </div>

        <div class="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/Diamesta"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all hover:border-cyan-300/50 hover:bg-white/10 hover:-translate-y-0.5"
          >
            <UIcon
              name="i-lucide-github"
              class="size-5"
            />

            GitHub

            <UIcon
              name="i-lucide-external-link"
              class="size-4 text-slate-400"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/kaylee-chapon-0061882a5/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-xl border border-purple-300/20 bg-purple-400/10 px-5 py-3 text-sm font-medium text-purple-100 transition-all hover:border-purple-300/50 hover:bg-purple-400/20 hover:-translate-y-0.5"
          >
            <UIcon
              name="i-lucide-linkedin"
              class="size-5"
            />

            LinkedIn

            <UIcon
              name="i-lucide-external-link"
              class="size-4 text-purple-200"
            />
          </a>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
```
