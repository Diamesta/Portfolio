<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    <!-- Halo violet principal -->
    <div
      class="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]"
    />

    <!-- Halo cyan -->
    <div
      class="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[130px]"
    />

    <!-- Halo rose -->
    <div
      class="absolute bottom-[-15%] left-[10%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[140px]"
    />

    <!-- Halo violet secondaire -->
    <div
      class="absolute bottom-[20%] right-[20%] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px]"
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
