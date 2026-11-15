<script setup>
import { ref } from 'vue'

// UI and Navigation States
const menuOpen = ref(false)
const activeFilter = ref('All')

// Interactive Footer Reactive States
const emailInput = ref('')
const subscribed = ref(false)

// Core Program Array Data
const programs = [
  {
    number: '01',
    title: 'Education & Skill Development',
    short: 'Opening doors through learning and practical skills.',
    description: 'We support access to education and opportunities to develop practical skills that help refugees and host communities build confidence, knowledge and brighter futures.',
    icon: '✳',
    tone: 'blue',
  },
  {
    number: '02',
    title: 'Livelihood & Economic Empowerment',
    short: 'Creating pathways to dignity and self-reliance.',
    description: 'We promote inclusive livelihood opportunities and economic empowerment so individuals and families can strengthen their independence and build sustainable sources of income.',
    icon: '↗',
    tone: 'red',
  },
  {
    number: '03',
    title: 'Health, Protection & Advocacy',
    short: 'Promoting wellbeing, safety and equal participation.',
    description: 'We work to advance health, protection and advocacy, amplifying community voices and supporting dignity, inclusion and access to essential services.',
    icon: '♡',
    tone: 'dark',
  },
]

// Real Community Stories Data (Dynamic Base URL for Local & GitHub Pages)
const base = import.meta.env.BASE_URL

const stories = [
  {
    category: 'Education',
    title: 'CODE Comprehensive School',
    description: 'The pride of Refugee Education in Kenya. Celebrating the completion of our first school block structure with the learners and donors.',
    image: `${base}images/school-exterior.jpg`,
    alt: 'CODE Comprehensive School building exterior',
    tag: 'Education',
  },
  {
    category: 'Education',
    title: 'Clean and conducive classrooms',
    description: 'Supporting newcomers and over-aged refugee students with an Accelerated Education Program (AEP) to continue their learning journey.',
    image: `${base}images/classroom-inside.jpg`,
    alt: 'Learners sitting inside the completed school classroom',
    tag: 'Education',
  },
  {
    category: 'Community',
    title: 'Tree Planting session on site',
    description: 'Community members and teams coming together on-site to plant trees, taking practical steps towards a green and healthy environment.',
    image: `${base}images/tree-planting.jpg`,
    alt: 'Community members planting tree seedlings together',
    tag: 'Community',
  },
  {
    category: 'Livelihoods',
    title: 'Women Empowerment program',
    description: 'Empowering refugee women through tailoring skill development, cloth production, and independent business options for sustainable livelihoods.',
    image: `${base}images/women-tailoring.jpg`,
    alt: 'Women taking part in sewing and tailoring skills training',
    tag: 'Livelihoods',
  },
  {
    category: 'Advocacy',
    title: 'Participating in Regional Forums',
    description: 'Taking part in important regional community conversations and partnerships in Kampala, Uganda to advocate for inclusive growth.',
    image: `${base}images/regional-forum.jpg`,
    alt: 'Participants attending the regional forum assembly',
    tag: 'Advocacy',
  },
  {
    category: 'Community',
    title: 'Finishing the school interiors',
    description: 'Putting a smile on refugee student faces by wrapping up the interior floor treatments and hands printing marks on the classroom walls.',
    image: `${base}images/community-celebration.jpg`,
    alt: 'Finished classroom interior showing the clean painted walls and window grids',
    tag: 'Community',
  }
]

// Gallery Filter Lists & Filters Logic
const filters = ['All', 'Education', 'Community', 'Livelihoods', 'Advocacy']
const filteredStories = () => activeFilter.value === 'All'
  ? stories
  : stories.filter((story) => story.tag === activeFilter.value)

// Mobile Navigation Helper Link Closer
function closeMenu() {
  menuOpen.value = false
}

// Action Handler for Hidden Iframe Form Submission
const handleFormSubmit = () => {
  setTimeout(() => {
    subscribed.value = true
    emailInput.value = ''
  }, 500)
}

// Action Handler for Smooth Scroll-to-Top Navigation Click
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>



<template>
  <div class="min-h-screen overflow-hidden bg-white text-slate-900">
        <header class="site-header">
      <div class="container-wide flex h-20 items-center justify-between gap-5">
        <a href="#home" class="brand flex items-center gap-3" @click="closeMenu">
          <!-- Real Logo Asset Integration -->
          <img 
            src="/images/logo.jpg" 
            alt="CODE Society of Kenya Logo" 
            class="h-11 w-auto object-contain rounded-md shadow-sm" 
          />
          <span class="leading-tight">
            <span class="block text-lg font-black tracking-tight text-slate-950 sm:text-xl">CODE SOCIETY</span>
            <span class="block text-[10px] font-bold tracking-[.23em] text-slate-500">OF KENYA</span>
          </span>
        </a>

        <button class="menu-toggle" aria-label="Toggle navigation" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
          <span></span><span></span><span></span>
        </button>

        <nav class="main-nav" :class="{ 'nav-open': menuOpen }">
          <a href="#home" @click="closeMenu">Home</a>
          <a href="#about" @click="closeMenu">About</a>
          <a href="#programs" @click="closeMenu">Our work</a>
          <a href="#stories" @click="closeMenu">Stories</a>
          <a href="#contact" @click="closeMenu">Contact</a>
          <a class="nav-cta" href="#contact" @click="closeMenu">Get in touch <span>↗</span></a>
        </nav>
      </div>
    </header>


    <main>
      <section id="home" class="hero-section">
        <div class="container-wide hero-grid">
          <div class="hero-copy">
            <div class="eyebrow"><span class="eyebrow-dot"></span> REFUGEE-LED · COMMUNITY-BASED</div>
            <h1>Empowering communities.<br /><span>Transforming lives.</span></h1>
            <p class="hero-lead">Building sustainable futures with refugees and host communities across Kenya.</p>
            <p class="hero-support">We create inclusive opportunities through education, livelihoods, health and advocacy — so everyone can learn, thrive and contribute.</p>
            <div class="hero-actions">
              <a href="#about" class="button-primary">Discover our work <span>↗</span></a>
              <a href="#stories" class="button-link">Read our stories <span>→</span></a>
            </div>
            <div class="hero-note"><span class="note-line"></span> DIGNITY · SELF-RELIANCE · INCLUSION</div>
          </div>

          <div class="hero-visual">
            <div class="hero-photo-wrap">
              <img src="/images/community-hero.jpg" alt="CODE Society community members working together" @error="$event.target.style.display='none'" />
              <div class="hero-photo-fallback">
                <span class="fallback-symbol">C<span>O</span>D</span>
                <span>COMMUNITY IN ACTION</span>
              </div>
            </div>
            <div class="hero-stamp">
              <span class="stamp-top">OUR PURPOSE</span>
              <strong>People.<br />Possibility.<br />Progress.</strong>
              <span class="stamp-bottom">CODE SOCIETY OF KENYA</span>
            </div>
            <div class="hero-accent"></div>
          </div>
        </div>
        <div class="hero-bottom container-wide">
          <span>01 / COMMUNITY</span><span class="hero-bottom-line"></span><span>ROOTED IN PEOPLE. DRIVEN BY POSSIBILITY.</span>
        </div>
      </section>

      <section id="about" class="section-pad about-section">
        <div class="container-wide about-grid">
          <div>
            <p class="section-kicker">WHO WE ARE <span>—</span> 01</p>
            <h2 class="section-heading">Communities are strongest when <em>everyone</em> has a chance to thrive.</h2>
          </div>
          <div class="about-copy">
            <p class="about-intro">CODE Society of Kenya is a refugee-led, community-based organization registered in Kenya, dedicated to empowering refugees and host communities through education, livelihoods, health, and advocacy.</p>
            <p>Our mission is to create inclusive opportunities that promote dignity, self-reliance, and sustainable development. Our vision is a society where every individual, regardless of background or displacement status, has equal opportunities to learn, thrive, and contribute to building resilient communities.</p>
            <a href="#programs" class="text-arrow">Explore what we do <span>↗</span></a>
          </div>
        </div>

        <div class="container-wide purpose-grid">
          <article class="purpose-card mission-card">
            <div class="purpose-icon">◎</div>
            <p class="mini-label">OUR MISSION</p>
            <h3>Opportunity with dignity.</h3>
            <p>To create inclusive opportunities that promote dignity, self-reliance, and sustainable development.</p>
          </article>
          <article class="purpose-card vision-card">
            <div class="purpose-icon">✳</div>
            <p class="mini-label">OUR VISION</p>
            <h3>A society where everyone can thrive.</h3>
            <p>Equal opportunities for every individual to learn, thrive and contribute to resilient communities.</p>
          </article>
          <div class="purpose-aside">
            <span class="aside-number">CSK</span>
            <p><strong>CODE Society of Kenya</strong> continues a dedicated journey of community development, promoting self-reliance, dignity, and sustainable empowerment across all branches.</p>
          </div>

        </div>
      </section>

      <section id="programs" class="section-pad programs-section">
        <div class="container-wide">
          <div class="section-topline">
            <div>
              <p class="section-kicker">WHAT WE DO <span>—</span> 02</p>
              <h2 class="section-heading">Turning shared purpose<br /><em>into practical action.</em></h2>
            </div>
            <p class="section-side-copy">Our work focuses on three connected areas that support dignity, opportunity and stronger communities.</p>
          </div>
          <div class="program-grid">
            <article v-for="(program, index) in programs" :key="program.number" class="program-card" :class="`program-${program.tone}`">
              <div class="program-card-top"><span class="program-number">{{ program.number }}</span><span class="program-icon">{{ program.icon }}</span></div>
              <p class="mini-label">OUR PROGRAM {{ index + 1 }}</p>
              <h3>{{ program.title }}</h3>
              <p class="program-short">{{ program.short }}</p>
              <p class="program-description">{{ program.description }}</p>
              <a href="#contact" class="program-link">Partner with us <span>↗</span></a>
            </article>
          </div>
        </div>
      </section>

      <section id="stories" class="section-pad stories-section">
        <div class="container-wide">
          <div class="section-topline stories-heading">
            <div>
              <p class="section-kicker">FROM OUR COMMUNITIES <span>—</span> 03</p>
              <h2 class="section-heading">Real work. <em>Real stories.</em></h2>
            </div>
            <p class="section-side-copy">Every photograph holds a moment of learning, collaboration and progress. Explore moments from our community work.</p>
          </div>
          <div class="filter-row" aria-label="Filter stories">
            <button v-for="filter in filters" :key="filter" class="filter-button" :class="{ active: activeFilter === filter }" @click="activeFilter = filter">{{ filter }}</button>
          </div>
          <div class="stories-grid">
            <article v-for="(story, index) in filteredStories()" :key="story.title" class="story-card">
              <div class="story-image" :class="`story-image-${index % 4}`">
                <img :src="story.image" :alt="story.alt" @error="$event.target.style.display='none'" />
                <span class="story-image-label">{{ story.category }}</span>
                <span class="story-image-number">0{{ index + 1 }}</span>
              </div>
              <div class="story-content">
                <p class="story-category">{{ story.category }}</p>
                <h3>{{ story.title }}</h3>
                <p>{{ story.description }}</p>
              </div>
            </article>
          </div>
          <p class="gallery-note">These story cards are an initial draft. Replace the sample image files with your original project photographs before publishing.</p>
        </div>
      </section>

      <section class="statement-section">
        <div class="container-wide statement-inner">
          <p class="section-kicker">OUR COMMITMENT</p>
          <h2>Empowering Communities.<br /><em>Transforming Lives.</em><br />Building Sustainable Futures.</h2>
          <a href="#contact" class="button-light">Let’s work together <span>↗</span></a>
          <div class="statement-mark">CSK<span>•</span></div>
        </div>
      </section>

      <section id="contact" class="section-pad contact-section">
        <div class="container-wide contact-grid">
          <div>
            <p class="section-kicker">START A CONVERSATION <span>—</span> 04</p>
            <h2 class="section-heading">Let’s build a future <em>together.</em></h2>
            <p class="contact-lead">Connect with CODE Society of Kenya to learn more about our work, explore partnerships or get involved.</p>
            <a class="button-primary" href="https://wa.me/254769862185" target="_blank" rel="noreferrer">Chat with us on WhatsApp <span>↗</span></a>
          </div>
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-label">PHONE / WHATSAPP</span>
              <a href="tel:+254769862185">+254 769 862 185</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">EMAIL</span>
              <a href="mailto:codecbo@gmail.com">codecbo@gmail.com</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">MAIN OFFICE</span>
              <p>Joska Estate, Mavoko Constituency,<br />Machakos County, Kenya</p>
            </div>
            <div class="contact-item">
              <span class="contact-label">BRANCH OFFICE</span>
              <p>KIVULI Center, Kabiria Road,<br />Dagoretti Constituency, Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>
    </main>

  <footer class="site-footer">
  <div class="container-wide footer-main">
    <!-- Updated with real logo asset for footer matching the screen capture -->
    <a href="#home" class="footer-brand flex items-center gap-3 mb-4">
      <img 
        src="/images/logo.jpg" 
        alt="CODE Society of Kenya Logo" 
        class="h-8 w-auto object-contain rounded-sm" 
      />
      <span><strong>CODE SOCIETY</strong><small>OF KENYA</small></span>
    </a>
    <p>Empowering communities. Transforming lives.<br />Building sustainable futures.</p>
    <div class="footer-links">
      <a href="#about">About</a>
      <a href="#programs">Our work</a>
      <a href="#stories">Stories</a>
      <a href="#contact">Contact</a>
    </div>

    <!-- Interactive Newsletter Area (Ad-Blocker Proof Submission) -->
    <div class="mt-6 max-w-sm">
      <p class="text-xs text-slate-400 mb-2 uppercase tracking-wider font-semibold">Stay Updated</p>
      
      <!-- Invisible target frame so the page never redirects -->
      <iframe name="hidden_confirm" id="hidden_confirm" style="display:none;"></iframe>

      <form 
        v-if="!subscribed"
        action="https://web3forms.com" 
        method="POST" 
        target="hidden_confirm"
        @submit="handleFormSubmit"
        class="flex gap-2"
      >
        <input type="hidden" name="access_key" value="32733d9b-a14b-4d09-826d-ecc4fbbef1e8">
        <input type="hidden" name="subject" value="New Newsletter Subscription - CODE Society">
        
        <input 
          type="email" 
          name="email"
          v-model="emailInput" 
          placeholder="Your email address" 
          required
          class="bg-slate-900/60 border border-slate-700 text-white rounded-lg px-3 py-1.5 text-sm w-full focus:outline-none focus:border-sky-500 transition-colors"
        />
        <button 
          type="submit"
          class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-4 py-1.5 rounded-lg text-sm transition-all active:scale-95 cursor-pointer"
        >
          Join
        </button>
      </form>
      
      <!-- Custom Success Alert Message Box (Toggled by subscribed state) -->
      <div v-else class="text-emerald-400 text-xs bg-emerald-950/40 border border-emerald-900 px-3 py-2 rounded-lg animate-fade-in">
        Thank you for subscribing! Your email has been registered safely. 🌟
      </div>
    </div>
  </div>

  <div class="container-wide footer-bottom flex flex-col sm:flex-row justify-between items-center gap-4">
    <div class="text-slate-400">
      <span>© {{ new Date().getFullYear() }} CODE Society of Kenya. All rights reserved.</span>
      <span class="mx-2 hidden sm:inline">·</span>
      <span class="block sm:inline mt-1 sm:mt-0 text-slate-500">
        Engineered by 
        <a 
          href="https://www.linkedin.com/in/irahambaye-taylor-6470711aa/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-sky-400 hover:text-sky-300 underline underline-offset-4 transition-colors"
        >
          IRAHAMBAYE Taylor
        </a>
      </span>
    </div>

    <!-- Interactive Smooth Scroll Button -->
    <button 
      @click="scrollToTop"
      class="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
    >
      Back to top ↑
    </button>
  </div>
</footer>



  </div>
</template>
