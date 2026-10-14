<script setup lang="ts">
import { navigation } from '~/data/navigation'

const props = defineProps<{
  activeSection: string
  mobileMenuOpen: boolean
}>()

const emit = defineEmits<{
  'update:mobileMenuOpen': [value: boolean]
}>()

function scrollToSection(id: string) {
  const section = document.getElementById(id)

  if (!section) return

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  emit('update:mobileMenuOpen', false)
}
</script>

<template>
  <aside
    class="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-purple-300/15 bg-[#080b1a]/95 px-5 py-7 backdrop-blur-xl lg:flex"
  >
    <h2 class="text-lg font-semibold tracking-tight text-white">
      Kaylee Chapon
    </h2>

    <p class="mt-1 text-xs leading-relaxed text-slate-400">
      Technicienne Informatique de Proximité
    </p>

    <div class="mt-3 flex items-center gap-2 text-xs text-slate-400">
      <span
        class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]"
      />
      <span>En formation</span>
    </div>

    <div
      class="mt-3 inline-flex items-center rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-3 py-1.5 text-xs text-violet-200"
    >
      Disponible pour un stage
    </div>

    <div
      class="my-6 h-px bg-gradient-to-r from-purple-400/40 via-cyan-400/20 to-transparent"
    />

    <nav class="space-y-2">
      <button
        v-for="item in navigation"
        :key="item.id"
        type="button"
        class="group relative flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-sm transition-all duration-300"
        :class="
          props.activeSection === item.id
            ? 'bg-white/[0.07] text-cyan-200 shadow-[0_0_20px_rgba(167,139,250,0.12)]'
            : 'text-slate-400 hover:bg-white/[0.035] hover:text-slate-200'
        "
        @click="scrollToSection(item.id)"
      >
        <span
          class="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300"
          :class="
            props.activeSection === item.id
              ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]'
              : 'bg-transparent'
          "
        />

        <UIcon
          :name="item.icon"
          class="h-4 w-4 shrink-0 transition-colors duration-300"
          :class="
            props.activeSection === item.id
              ? 'text-cyan-300'
              : 'text-slate-500 group-hover:text-slate-300'
          "
        />

        <span>{{ item.label }}</span>
      </button>
    </nav>

    <div class="mt-auto pt-6">
      <div
        class="group overflow-hidden rounded-2xl border border-purple-300/25 bg-gradient-to-b from-purple-500/10 via-[#0c1228] to-cyan-500/10 shadow-[0_8px_30px_rgba(0,0,0,0.3),0_0_20px_rgba(168,85,247,0.12)] transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.22)]"
      >
        <div class="relative overflow-hidden">
          <img
            src="/images/axolotl-nebuleuse.png"
            alt="Mascotte axolotl de l'univers Nébuleuse"
            class="relative z-10 mx-auto aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          >
        </div>

        <div class="px-4 pb-4 text-center">
          <p class="text-sm font-semibold text-purple-200">
            Mon univers
          </p>

          <p class="mt-1 text-xs leading-5 text-slate-400">
            Une touche de magie dans mon univers informatique.
          </p>
        </div>
      </div>

      <p class="mt-4 text-center text-xs text-slate-500">
        Univers créé avec ♡ par Diamesta
      </p>
    </div>
  </aside>

  <button
    type="button"
    class="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/25 bg-[#0c1228]/90 text-slate-300 shadow-[0_8px_30px_rgba(0,0,0,0.35),0_0_18px_rgba(168,85,247,0.08)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/[0.06] hover:text-cyan-200 hover:shadow-[0_0_24px_rgba(103,232,249,0.12)] lg:hidden"
    aria-label="Ouvrir le menu"
    @click="emit('update:mobileMenuOpen', true)"
  >
    <UIcon
      name="i-lucide-menu"
      class="h-5 w-5"
    />
  </button>

  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-300 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <aside
      v-if="props.mobileMenuOpen"
      class="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-purple-300/20 bg-[#080b1a]/95 px-6 py-8 shadow-[10px_0_45px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden"
    >
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold tracking-tight text-white">
            Kaylee Chapon
          </h2>

          <p class="mt-1 text-xs leading-relaxed text-slate-400">
            Technicienne Informatique de Proximité
          </p>

          <div class="mt-3 flex items-center gap-2 text-xs text-slate-400">
            <span
              class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]"
            />
            <span>En formation</span>
          </div>

          <div
            class="mt-3 inline-flex items-center rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-3 py-1.5 text-xs text-violet-200"
          >
            Disponible pour un stage
          </div>
        </div>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Fermer le menu"
          @click="emit('update:mobileMenuOpen', false)"
        >
          <UIcon
            name="i-lucide-x"
            class="h-5 w-5"
          />
        </button>
      </div>

      <nav class="mt-10 space-y-2">
        <button
          v-for="item in navigation"
          :key="item.id"
          type="button"
          class="group relative block w-full rounded-xl px-4 py-3 text-left text-sm transition-all duration-300"
          :class="
            props.activeSection === item.id
              ? 'bg-white/[0.07] text-cyan-200 shadow-[0_0_20px_rgba(167,139,250,0.12)]'
              : 'text-slate-400 hover:bg-white/[0.035] hover:text-slate-200'
          "
          @click="scrollToSection(item.id)"
        >
          <span
            class="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full transition-all duration-300"
            :class="
              props.activeSection === item.id
                ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]'
                : 'bg-transparent'
            "
          />

          <div class="flex items-center gap-3">
            <UIcon
              :name="item.icon"
              class="h-4 w-4 shrink-0 transition-colors duration-300"
              :class="
                props.activeSection === item.id
                  ? 'text-cyan-300'
                  : 'text-slate-500 group-hover:text-slate-300'
              "
            />

            <span>{{ item.label }}</span>
          </div>
        </button>
      </nav>

      <div class="mt-auto pt-6">
        <div
          class="group overflow-hidden rounded-2xl border border-purple-300/25 bg-gradient-to-b from-purple-500/10 via-[#0c1228] to-cyan-500/10 shadow-[0_8px_30px_rgba(0,0,0,0.3),0_0_20px_rgba(168,85,247,0.12)]"
        >
          <img
            src="/images/axolotl-nebuleuse.png"
            alt="Mascotte axolotl de l'univers Nébuleuse"
            class="mx-auto aspect-square w-full object-contain"
            loading="lazy"
          >

          <div class="px-4 pb-4 text-center">
            <p class="text-sm font-semibold text-purple-200">
              Mon univers
            </p>

            <p class="mt-1 text-xs leading-5 text-slate-400">
              Une touche de magie dans mon univers informatique.
            </p>
          </div>
        </div>

        <p class="mt-4 text-center text-xs text-slate-500">
          Univers créé avec ♡ par Diamesta
        </p>
      </div>
    </aside>
  </Transition>

  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <button
      v-if="props.mobileMenuOpen"
      type="button"
      aria-label="Fermer le menu"
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
      @click="emit('update:mobileMenuOpen', false)"
    />
  </Transition>
</template>
