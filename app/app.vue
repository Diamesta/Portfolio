<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/Portfolio/favicon.png'
    }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})

const title = 'Kaylee Chapon — Technicienne Informatique de Proximité'

const description = 'Portfolio de Kaylee Chapon, Technicienne Informatique de Proximité en formation, à la recherche d’un stage.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://diamesta.github.io/Portfolio/images/portfolio-preview.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
