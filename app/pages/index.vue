<script setup lang="ts">
const activeSection = ref('accueil')
const mobileMenuOpen = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries.find(entry => entry.isIntersecting)

      if (window.scrollY < 100) {
        activeSection.value = 'accueil'
        return
      }

      if (visibleSection) {
        activeSection.value = visibleSection.target.id
      }
    },
    {
      threshold: [0.2, 0.4, 0.6],
      rootMargin: '-20% 0px -55% 0px'
    }
  )

  document
    .querySelectorAll('section[id]')
    .forEach(section => observer?.observe(section))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    class="relative isolate h-svh overflow-x-hidden overflow-y-auto bg-[#080b1a] text-white lg:pl-64"
  >
    <NebulaBackground />

    <Sidebar
      :active-section="activeSection"
      :mobile-menu-open="mobileMenuOpen"
      @update:mobile-menu-open="mobileMenuOpen = $event"
    />

    <main>
      <HeadSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>
