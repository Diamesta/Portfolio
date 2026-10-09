import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],
  app: {
  baseURL: '/Portfolio/',
  head: {
    title: 'Kaylee Chapon — Technicienne Informatique de Proximité',
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/Portfolio/favicon.png'
      }
    ],
    meta: [
      {
        name: 'description',
        content: 'Portfolio de Kaylee Chapon, Technicienne Informatique de Proximité en formation.'
      }
    ]
  }
},

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})