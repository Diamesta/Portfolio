
<script setup lang="ts">
const activeSection = ref('accueil')
const mobileMenuOpen = ref(false)

const sections = [
  'accueil',
  'apropos',
  'parcours',
  'competences',
  'projets',
  'contact',
]

const nebulaSection = computed(() => {
  switch (activeSection.value) {
    case 'apropos':
      return 'about'
    case 'parcours':
      return 'journey'
    case 'competences':
      return 'skills'
    case 'projets':
      return 'projects'
    case 'contact':
      return 'contact'
    default:
      return 'home'
  }
})

let observer: IntersectionObserver | null = null
let scrollContainer: HTMLElement | null = null
let isScrolling = false

function scrollToSection(id: string) {
  const section = document.getElementById(id)

  if (!section) return

  isScrolling = true

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

  window.setTimeout(() => {
    isScrolling = false
  }, 900)
}

function handleWheel(event: WheelEvent) {
  if (isScrolling) {
    event.preventDefault()
    return
  }

  if (Math.abs(event.deltaY) < 10) return

  const currentIndex = sections.indexOf(activeSection.value)

  if (event.deltaY > 0 && currentIndex < sections.length - 1) {
    event.preventDefault()
    scrollToSection(sections[currentIndex + 1])
  }

  if (event.deltaY < 0 && currentIndex > 0) {
    event.preventDefault()
    scrollToSection(sections[currentIndex - 1])
  }
}

onMounted(() => {
  scrollContainer = document.querySelector('.portfolio-scroll')

  observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries.find(entry => entry.isIntersecting)

      if ((scrollContainer?.scrollTop ?? 0) < 100) {
        activeSection.value = 'accueil'
      } else if (visibleSection) {
        activeSection.value = visibleSection.target.id
      }

      entries.forEach((entry) => {
        entry.target.classList.toggle(
          'is-visible',
          entry.isIntersecting,
        )
      })
    },
    {
      root: scrollContainer,
      threshold: 0.35,
    },
  )

  document
    .querySelectorAll('.portfolio-scroll section[id]')
    .forEach(section => observer?.observe(section))

  scrollContainer?.addEventListener('wheel', handleWheel, {
    passive: false,
  })
})

onBeforeUnmount(() => {
  scrollContainer?.removeEventListener('wheel', handleWheel)
  observer?.disconnect()
})
</script>

<template>
  <div
    class="portfolio-scroll relative isolate h-svh overflow-x-hidden overflow-y-auto bg-[#080b1a] text-white lg:pl-64"
  >
    <NebulaBackground :section="nebulaSection" />

    <Sidebar
      :active-section="activeSection"
      :mobile-menu-open="mobileMenuOpen"
      @update:mobile-menu-open="mobileMenuOpen = $event"
    />

    <main class="relative">
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
