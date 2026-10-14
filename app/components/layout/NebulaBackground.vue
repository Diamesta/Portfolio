
<script setup lang="ts">
const props = defineProps<{
  section: 'home' | 'about' | 'journey' | 'skills' | 'projects' | 'contact'
}>()

const sectionStyles = computed(() => {
  switch (props.section) {
    case 'about':
      return {
        primary: 'bg-cyan-500/20',
        secondary: 'bg-purple-500/15',
        accent: 'bg-fuchsia-500/10',
        extra: 'bg-cyan-400/10',
      }

    case 'journey':
      return {
        primary: 'bg-violet-500/20',
        secondary: 'bg-cyan-500/12',
        accent: 'bg-purple-500/10',
        extra: 'bg-fuchsia-500/10',
      }

    case 'skills':
      return {
        primary: 'bg-purple-500/20',
        secondary: 'bg-fuchsia-500/15',
        accent: 'bg-cyan-500/10',
        extra: 'bg-violet-500/10',
      }

    case 'projects':
      return {
        primary: 'bg-fuchsia-500/20',
        secondary: 'bg-cyan-500/15',
        accent: 'bg-purple-500/10',
        extra: 'bg-fuchsia-400/10',
      }

    case 'contact':
      return {
        primary: 'bg-cyan-500/20',
        secondary: 'bg-purple-500/15',
        accent: 'bg-fuchsia-500/10',
        extra: 'bg-violet-500/10',
      }

    default:
      return {
        primary: 'bg-purple-600/20',
        secondary: 'bg-cyan-500/15',
        accent: 'bg-fuchsia-500/10',
        extra: 'bg-violet-500/10',
      }
  }
})
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    <!-- Halo principal -->
    <div
      class="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[140px] transition-colors duration-1000 ease-out"
      :class="sectionStyles.primary"
    />

    <!-- Halo secondaire -->
    <div
      class="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full blur-[130px] transition-colors duration-1000 ease-out"
      :class="sectionStyles.secondary"
    />

    <!-- Halo rose -->
    <div
      class="absolute bottom-[-15%] left-[10%] h-[500px] w-[500px] rounded-full blur-[140px] transition-colors duration-1000 ease-out"
      :class="sectionStyles.accent"
    />

    <!-- Halo supplémentaire -->
    <div
      class="absolute bottom-[20%] right-[20%] h-[350px] w-[350px] rounded-full blur-[120px] transition-colors duration-1000 ease-out"
      :class="sectionStyles.extra"
    />

    <!-- Texture d'étoiles -->
    <div
      class="absolute inset-0 opacity-30"
      style="
        background-image:
          radial-gradient(circle at 20% 30%, rgba(255,255,255,0.7) 1px, transparent 1px),
          radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 1px, transparent 1px),
          radial-gradient(circle at 40% 70%, rgba(255,255,255,0.6) 1px, transparent 1px),
          radial-gradient(circle at 70% 80%, rgba(255,255,255,0.4) 1px, transparent 1px);
        background-size: 180px 180px, 240px 240px, 200px 200px, 260px 260px;
      "
    />

    <!-- Voile sombre -->
    <div class="absolute inset-0 bg-[#080b1a]/60" />
  </div>
</template>
