/**
 * MINHYUK PORTFOLIO — EDDIEEDDIE.COM EDITORIAL INTERACTIVE ENGINE
 * Preserves 100% of Portfolio Data (Hero 4 Slides, About, 3 Core Values, 4 Works, 3 Timeline Items)
 * + Hero Mouse Parallax, Interactive Philosophy Stage, 3D Mockup Cards, Scroll Ring & Pixel-Cat Runner
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     1. DEFAULT PORTFOLIO CMS DATA MODEL
     ========================================== */
  const DEFAULT_DATA = {
    heroSlides: [
      {
        badge: 'Welcome 01',
        title: '환영합니다.',
        desc: '이곳은 고등학생 김민혁 개인이 제작한 포트폴리오 겸 작업물 공유 사이트입니다.',
        img: 'assets/images/hero-1.jpg'
      },
      {
        badge: 'Coexistence 02',
        title: 'AI와 인간은 서로에게 적이 아니다.',
        desc: 'AI가 모든걸 대체하는 세상에서, 저는 AI를 두려워하기보다 AI와 공존할 방법을 찾았습니다.',
        img: 'assets/images/hero-2.jpg'
      },
      {
        badge: 'Vision 03',
        title: '공존을 뛰어넘어 삶의 일부가 되도록',
        desc: 'AI기술의 발전에 힘 입어 전보다 더 나은 삶을 꿈 꿉니다.',
        img: 'assets/images/hero-3.jpg'
      },
      {
        badge: 'Pioneer 04',
        title: '미래 사회를 이끄는 선구자',
        desc: '기술 발전은 그냥 이루어지지 않습니다. 저는 이런 미래를 먼저 개척하는 선구자가 되고 싶습니다.',
        img: 'assets/images/hero-4.jpg'
      }
    ],
    about: {
      avatarImg: 'assets/images/profile_ava.jpg',
      avatarFallback: 'assets/images/profile_ava.svg',
      titlePrefix: '나는 ',
      highlightTxt: '성장',
      titleSuffix: '합니다',
      lead: '만나서 반갑습니다. 저는 AI기술을 토대로 미래를 향한 비전을 세우고 하나하나 배우며 성장하고 있는 고등학생 김민혁입니다.',
      body: '저의 비전은 단순한 구상에서 끝나는 것이 아닌 실질적 구현을 통해 세상 밖으로 나옵니다. 아직 미숙하지만 수많은 연습을 통해 사람들에게 긍정적인 영향을 주는 것이 목표입니다.',
      tags: ['AI 비전', '고등학생 크리에이터', '지속적인 성장', '실질적 구현', '긍정적 영향력']
    },
    features: [
      {
        step: '01',
        eyebrow: '01 · WORKETHIC (성실함)',
        stageHtml: '어떤 일을 하든지 <span class="stage-pill-highlight">성실함</span>은 반드시 필요한 덕목이며, 모든 일에 책임을 다합니다<span class="accent-period">.</span><i class="stage-caret" aria-hidden="true"></i>',
        title: '1. 성실함(WORKETHIC)',
        desc: '어떤 일을 하든지 성실함은 반드시 필요한 덕목 중 하나라고 생각합니다. 저는 제가 참여하는 모든 일에 책임을 가지고 성실히 업무를 수행해 나가는 장점을 가지고 있습니다.'
      },
      {
        step: '02',
        eyebrow: '02 · RESPECT (상호 존중)',
        stageHtml: '모든 갈등은 존중의 부재에서 시작됩니다. 나와 다른 의견에도 귀 기울이는 <span class="stage-pill-highlight">상호 존중</span>의 자세를 가집니다<span class="accent-period">.</span><i class="stage-caret" aria-hidden="true"></i>',
        title: '2. 상호 존중(RESPECT)',
        desc: '비욘 나티코 린네블라드의 "내가 틀릴 수도 있습니다" 라는 책을 읽고 깊은 감명을 받은 기억이 있습니다. 모든 갈등은 상호 존중의 부재에서 일어난다는 것을 인지하고 나와 다른 의견에도 귀 기울이고 존중하는 자세를 가집니다.'
      },
      {
        step: '03',
        eyebrow: '03 · RESILIENCE (회복 탄력성)',
        stageHtml: '계획대로 되지 않더라도 실패를 통해 배우고 다시 도약하는 <span class="stage-pill-highlight">회복 탄력성</span>으로 성장합니다<span class="accent-period">.</span><i class="stage-caret" aria-hidden="true"></i>',
        title: '3. 회복 탄력성(RESILIENCE)',
        desc: '실패를 통해 배우고 성장하는 것 또한 매우 중요하다고 생각합니다. 저는 제가 계획한 일이 예상대로 되지 않더라도 이를 통해 배우고 앞으로를 기약합니다.'
      }
    ],
    works: [
      {
        id: '1',
        category: 'Web App',
        chromeTitle: 'SEOUL TOUR GUIDE',
        title: '서울 투어 가이드(SEOUL TOUR GUIDE)',
        img: 'assets/images/seoultourguide.jpg',
        desc: '서울특별시를 관광하고자 하는 모든 사람들에게 관광 정보를 제공합니다.',
        link: 'https://minhyuk-k1m.github.io/SEOUL-TOUR-GUIDE/',
        client: 'Seoul Tour Project',
        year: '2026.06',
        role: 'Full Stack Creator'
      },
      {
        id: '2',
        category: 'Web App',
        chromeTitle: 'VOCABMASTER',
        title: 'VOCABMASTER(보캅마스터)',
        img: 'assets/images/vocabmaster.jpg',
        desc: '언제나 함께하는 나만의 작은 단어장',
        link: 'https://minhyuk-k1m.github.io/Vocabmaster/',
        client: 'VocabMaster Project',
        year: '2026.07',
        role: 'Web Application Dev'
      },
      {
        id: '3',
        category: 'Web App',
        chromeTitle: '오늘 뭐 먹지?',
        title: '오늘 뭐 먹지?',
        img: 'assets/images/today_menu.jpg',
        desc: '사소하지만 제일 고통스러운 일상의 고민을 해결하세요.',
        link: 'https://minhyuk-k1m.github.io/menu-recommender/',
        client: 'Menu Recommender Project',
        year: '2026.08',
        role: 'AI Web Application Dev'
      },
      {
        id: '4',
        category: 'Web App',
        chromeTitle: 'KUMHO SCHOOLMATE',
        title: '금호고 스쿨메이트(KUMHO SCHOOLMATE)',
        img: 'assets/images/kumho_schoolmate.jpg',
        desc: '금호고등학교 학생과 교실 전자칠판을 위한 올인원 학사·시간표·급식·날씨 플랫폼',
        link: 'https://kumho-schoolmate.com',
        client: 'Kumho High School',
        year: '2026.10',
        role: 'All-in-One Smart School Platform Dev'
      }
    ],
    timeline: [
      {
        step: '01',
        date: '2018 - 2020',
        role: '취미로 첫 코딩 시작, 엔트리를 이용한 프로그램 만들기',
        company: '태봉초등학교 (Taebong Elementary School)',
        desc: '초등학교 2학년 때 취미로 코딩을 시작하였고, 엔트리를 이용한 블록코딩으로 작품을 만든 후 공유하였음.'
      },
      {
        step: '02',
        date: '2021 - 2025',
        role: 'MICROBIT, C언어 학습 및 심화 구현하기',
        company: '금호중앙중학교 (Kumho Jungang Middle School)',
        desc: 'microbit를 이용하여 회로의 기본적 원리를 학습했고 그 후 C언어를 배워 기본 코딩 능력을 배양하였음.'
      },
      {
        step: '03',
        date: '2026 - Present',
        role: '인공지능을 활용한 웹 앱 개발하기',
        company: '금호고등학교 (Kumho High School)',
        desc: 'Google Antigravity를 이용한 웹 앱 개발을 통해 떠오르는 아이디어를 실제로 구현해내고 있음.'
      }
    ]
  };

  const STORAGE_KEY = 'minhyuk_portfolio_cms_v200_eddie_style';
  let portfolioData = loadData();

  function sanitizeImgPath(pathStr, defaultPath) {
    if (!pathStr || typeof pathStr !== 'string') return defaultPath;
    let clean = pathStr.replace(/^\.\//, '');
    if (clean.endsWith('.svg') && !clean.includes('profile')) {
      return defaultPath;
    }
    return clean;
  }

  function formatTitleWithAccentPeriod(titleStr) {
    if (!titleStr) return '';
    if (titleStr.endsWith('.')) {
      return titleStr.slice(0, -1) + '<span class="accent-period">.</span>';
    }
    return titleStr + '<span class="accent-period">.</span>';
  }

  function loadData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.heroSlides) {
          parsed.heroSlides.forEach((s, idx) => {
            s.img = sanitizeImgPath(s.img, DEFAULT_DATA.heroSlides[idx % 4]?.img || 'assets/images/hero-1.jpg');
          });
        }
        if (!parsed.works || parsed.works.length < DEFAULT_DATA.works.length) {
          parsed.works = JSON.parse(JSON.stringify(DEFAULT_DATA.works));
        } else {
          parsed.works.forEach((w, idx) => {
            w.img = sanitizeImgPath(w.img, DEFAULT_DATA.works[idx % DEFAULT_DATA.works.length]?.img || 'assets/images/kumho_schoolmate.jpg');
          });
        }
        if (parsed.about) {
          parsed.about.avatarImg = sanitizeImgPath(parsed.about.avatarImg, 'assets/images/profile_ava.jpg');
        }
        return parsed;
      }
    } catch (e) {
      console.error('Failed to load storage data:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }


  /* ==========================================
     2. DYNAMIC SITE RENDERING (eddieeddie.com Markup)
     ========================================== */
  function renderSite() {
    renderHero();
    renderFeatures();
    renderWorks();
    renderAbout();
    renderTimeline();
    initScrollObserve();
    initScrollSpy();
  }

  // 1) HERO VISION SLIDER RENDER
  let currentSlideIndex = 0;
  let slideTimer = null;
  let isAnimating = false;
  let isMotionPaused = false;

  function renderHero() {
    const track = document.getElementById('sliderTrack');
    const counterTotal = document.getElementById('carouselTotal');
    if (!track) return;

    const slides = portfolioData.heroSlides || DEFAULT_DATA.heroSlides;
    const realTotal = slides.length;
    if (counterTotal) counterTotal.textContent = String(realTotal).padStart(2, '0');

    if (realTotal === 0) return;

    let html = '';
    slides.forEach((s, idx) => {
      const cleanImg = sanitizeImgPath(s.img, 'assets/images/hero-1.jpg');
      html += `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}">
          <img src="${cleanImg}" alt="${s.title}" class="hero-slide-img">
          <div class="hero-slide-overlay">
            <div class="hero-slide-content">
              <span class="hero-badge">${s.badge}</span>
              <h2 class="hero-slide-title">${formatTitleWithAccentPeriod(s.title)}</h2>
              <p class="hero-slide-desc">${s.desc}</p>
            </div>
          </div>
        </div>
      `;
    });

    const firstSlide = slides[0];
    const cleanFirstImg = sanitizeImgPath(firstSlide.img, 'assets/images/hero-1.jpg');
    html += `
      <div class="hero-slide">
        <img src="${cleanFirstImg}" alt="${firstSlide.title}" class="hero-slide-img">
        <div class="hero-slide-overlay">
          <div class="hero-slide-content">
            <span class="hero-badge">${firstSlide.badge}</span>
            <h2 class="hero-slide-title">${formatTitleWithAccentPeriod(firstSlide.title)}</h2>
            <p class="hero-slide-desc">${firstSlide.desc}</p>
          </div>
        </div>
      </div>
    `;

    track.innerHTML = html;
    currentSlideIndex = 0;
    startAutoPlay(realTotal);
  }

  function goToSlide(targetIndex, realTotal) {
    const track = document.getElementById('sliderTrack');
    const counterCurrent = document.getElementById('carouselCurrent');
    if (!track || realTotal === 0 || isAnimating) return;

    isAnimating = true;
    currentSlideIndex = targetIndex;

    const slideWidthPercent = 100 / (realTotal + 1);
    const offsetPercentage = -(currentSlideIndex * slideWidthPercent);

    track.style.transition = 'transform 0.85s cubic-bezier(0.25, 1, 0.35, 1)';
    track.style.transform = `translateX(${offsetPercentage}%)`;

    const displayIndex = (currentSlideIndex % realTotal) + 1;
    if (counterCurrent) counterCurrent.textContent = String(displayIndex).padStart(2, '0');

    resetProgressBar();

    setTimeout(() => {
      if (currentSlideIndex === realTotal) {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0%)';
        currentSlideIndex = 0;
      }
      isAnimating = false;
    }, 850);
  }

  function startAutoPlay(realTotal) {
    stopAutoPlay();
    if (isMotionPaused) return;
    resetProgressBar();
    if (realTotal <= 1) return;
    slideTimer = setInterval(() => {
      if (!isMotionPaused) {
        goToSlide(currentSlideIndex + 1, realTotal);
      }
    }, 4500);
  }

  function stopAutoPlay() {
    if (slideTimer) clearInterval(slideTimer);
    const progressFill = document.getElementById('carouselProgress');
    if (progressFill) {
      progressFill.style.transition = 'none';
      progressFill.style.width = '0%';
    }
  }

  function resetProgressBar() {
    const progressFill = document.getElementById('carouselProgress');
    if (!progressFill || isMotionPaused) return;
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
    void progressFill.offsetWidth;
    progressFill.style.transition = 'width 4500ms linear';
    progressFill.style.width = '100%';
  }

  const btnPrev = document.getElementById('carouselPrev');
  const btnNext = document.getElementById('carouselNext');
  if (btnPrev && btnNext) {
    btnPrev.onclick = () => {
      const realTotal = (portfolioData.heroSlides || []).length;
      if (currentSlideIndex === 0) {
        const track = document.getElementById('sliderTrack');
        const slideWidthPercent = 100 / (realTotal + 1);
        track.style.transition = 'none';
        track.style.transform = `translateX(-${realTotal * slideWidthPercent}%)`;
        currentSlideIndex = realTotal;
        void track.offsetWidth;
        goToSlide(realTotal - 1, realTotal);
      } else {
        goToSlide(currentSlideIndex - 1, realTotal);
      }
      startAutoPlay(realTotal);
    };

    btnNext.onclick = () => {
      const realTotal = (portfolioData.heroSlides || []).length;
      goToSlide(currentSlideIndex + 1, realTotal);
      startAutoPlay(realTotal);
    };
  }

  // Mobile Touch Swipe Gesture Support
  let touchStartX = 0;
  let touchEndX = 0;
  const sliderContainer = document.querySelector('.hero-slider-container');

  if (sliderContainer) {
    sliderContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const realTotal = (portfolioData.heroSlides || []).length;
    const swipeThreshold = 35;
    if (touchStartX - touchEndX > swipeThreshold) {
      goToSlide(currentSlideIndex + 1, realTotal);
      startAutoPlay(realTotal);
    } else if (touchEndX - touchStartX > swipeThreshold) {
      if (currentSlideIndex === 0) {
        const track = document.getElementById('sliderTrack');
        const slideWidthPercent = 100 / (realTotal + 1);
        track.style.transition = 'none';
        track.style.transform = `translateX(-${realTotal * slideWidthPercent}%)`;
        currentSlideIndex = realTotal;
        void track.offsetWidth;
        goToSlide(realTotal - 1, realTotal);
      } else {
        goToSlide(currentSlideIndex - 1, realTotal);
      }
      startAutoPlay(realTotal);
    }
  }


  /* ==========================================
     2B. HERO STAGE PARALLAX & MOTION TOGGLE
     ========================================== */
  const heroStage = document.getElementById('eddieHeroStage');
  const visitorCursor = document.getElementById('visitorCursor');
  const motionToggleBtn = document.getElementById('motionToggleBtn');

  if (heroStage) {
    heroStage.addEventListener('mousemove', (e) => {
      if (isMotionPaused) return;
      const rect = heroStage.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const normX = (relX / rect.width - 0.5) * 2;
      const normY = (relY / rect.height - 0.5) * 2;

      heroStage.style.setProperty('--portrait-x', `${(normX * 14).toFixed(1)}px`);
      heroStage.style.setProperty('--portrait-y', `${(normY * 10).toFixed(1)}px`);

      if (visitorCursor && window.innerWidth > 768) {
        visitorCursor.classList.add('visible');
        visitorCursor.style.transform = `translate3d(${relX + 14}px, ${relY + 14}px, 0)`;
      }
    });

    heroStage.addEventListener('mouseleave', () => {
      heroStage.style.setProperty('--portrait-x', '0px');
      heroStage.style.setProperty('--portrait-y', '0px');
      if (visitorCursor) {
        visitorCursor.classList.remove('visible');
      }
    });
  }

  if (motionToggleBtn) {
    motionToggleBtn.addEventListener('click', () => {
      isMotionPaused = !isMotionPaused;
      document.body.classList.toggle('motion-paused', isMotionPaused);
      motionToggleBtn.setAttribute('aria-pressed', String(isMotionPaused));
      motionToggleBtn.textContent = isMotionPaused ? 'Resume motion' : 'Pause motion';

      const realTotal = (portfolioData.heroSlides || []).length;
      if (isMotionPaused) {
        stopAutoPlay();
      } else {
        startAutoPlay(realTotal);
      }
    });
  }


  /* ==========================================
     3. PHILOSOPHY / CORE VALUES RENDER & INTERACTIVE STAGE
     ========================================== */
  let activePhilosophyStep = 0;

  function renderFeatures() {
    const container = document.getElementById('featuresContainer');
    if (!container) return;
    const list = portfolioData.features || DEFAULT_DATA.features;

    let html = '';
    list.forEach((f, idx) => {
      const stepNum = f.step || String(idx + 1).padStart(2, '0');
      const isActive = idx === activePhilosophyStep;
      html += `
        <div class="feature-card ${isActive ? 'active' : ''} reveal delay-${(idx % 3) + 1}" role="tab" aria-selected="${isActive}" tabindex="0" data-step="${idx}">
          <span class="step-number">${stepNum}</span>
          <h3 class="feature-title">${f.title}</h3>
          <p class="feature-desc">${f.desc}</p>
          <i class="step-bar" aria-hidden="true"></i>
        </div>
      `;
    });
    container.innerHTML = html;

    const cards = container.querySelectorAll('.feature-card');
    cards.forEach((card) => {
      const activateStep = () => {
        const idx = parseInt(card.getAttribute('data-step'), 10) || 0;
        activePhilosophyStep = idx;
        cards.forEach((c, cIdx) => {
          const selected = cIdx === idx;
          c.classList.toggle('active', selected);
          c.setAttribute('aria-selected', String(selected));
        });
        updatePhilosophyStage(idx);
      };

      card.addEventListener('click', activateStep);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateStep();
        }
      });
    });

    updatePhilosophyStage(activePhilosophyStep);
  }

  function updatePhilosophyStage(stepIndex) {
    const list = portfolioData.features || DEFAULT_DATA.features;
    const item = list[stepIndex] || DEFAULT_DATA.features[stepIndex] || DEFAULT_DATA.features[0];
    const defaultItem = DEFAULT_DATA.features[stepIndex] || DEFAULT_DATA.features[0];

    const eyebrowEl = document.getElementById('stageEyebrow');
    const sentenceEl = document.getElementById('stageSentence');

    if (eyebrowEl) {
      eyebrowEl.textContent = item.eyebrow || defaultItem.eyebrow;
    }
    if (sentenceEl) {
      sentenceEl.innerHTML = item.stageHtml || defaultItem.stageHtml;
    }
  }


  /* ==========================================
     4. SELECTED WORKS RENDER (3D Browser Mockup Cards)
     ========================================== */
  function renderWorks() {
    const container = document.getElementById('worksContainer');
    if (!container) return;
    const list = portfolioData.works || DEFAULT_DATA.works;

    let html = '';
    list.forEach((w, idx) => {
      const targetLink = w.link ? w.link : '#';
      const createdDate = w.year || '2026.08';
      const defaultWork = DEFAULT_DATA.works[idx % DEFAULT_DATA.works.length] || DEFAULT_DATA.works[0];
      const cleanImg = sanitizeImgPath(w.img, defaultWork.img);
      const chromeTitle = w.chromeTitle || defaultWork.chromeTitle || w.title;

      html += `
        <article class="work-card reveal delay-${(idx % 2) + 1}" data-category="${w.category}" data-id="${w.id}" data-link="${targetLink}">
          <div class="work-img-box">
            <img src="${cleanImg}" alt="" class="mockup-backdrop" aria-hidden="true">
            <div class="mockup-screen">
              <div class="mockup-chrome" aria-hidden="true">
                <i></i><i></i><i></i>
                <span>${chromeTitle}</span>
              </div>
              <div class="mockup-viewport">
                <img src="${cleanImg}" alt="${w.title}">
              </div>
            </div>
            <span class="work-date-badge">${createdDate}</span>
          </div>
          <div class="work-info">
            <div class="work-title-row">
              <h3 class="work-title">
                ${w.title}
                <span class="work-arrow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(-45deg)">
                    <path d="M4 12h15M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </h3>
              <p class="work-desc">${w.desc}</p>
            </div>
            <div class="work-meta-row">
              <span class="work-category">${w.category}</span>
              <span>${createdDate}</span>
              <span>Live deployed</span>
            </div>
          </div>
        </article>
      `;
    });
    container.innerHTML = html;

    const cards = container.querySelectorAll('.work-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const linkUrl = card.getAttribute('data-link');
        if (linkUrl && linkUrl !== '#' && linkUrl.trim() !== '') {
          window.open(linkUrl, '_blank', 'noopener,noreferrer');
        } else {
          const id = card.getAttribute('data-id');
          openWorkModal(id);
        }
      });
    });
  }


  /* ==========================================
     5. ABOUT ME SECTION RENDER ("About Minhyuk.")
     ========================================== */
  function renderAbout() {
    const container = document.getElementById('aboutContainer');
    if (!container) return;
    const a = portfolioData.about || DEFAULT_DATA.about;

    let tagsHtml = '';
    (a.tags || []).forEach(t => {
      tagsHtml += `<span class="skill-tag">${t}</span>`;
    });

    const primaryImg = sanitizeImgPath(a.avatarImg, 'assets/images/profile_ava.jpg');
    const avatarEl = document.getElementById('profileAvatarImg');
    if (avatarEl) {
      avatarEl.src = primaryImg;
    }

    const suffixClean = (a.titleSuffix || '합니다').replace(/\.$/, '');

    container.innerHTML = `
      <div class="about-left-heading reveal">
        <span class="stage-eyebrow">ABOUT ME</span>
        <h2 id="about-title" class="about-big-title">
          About<br>Minhyuk<span class="accent-period">.</span>
        </h2>
        <p class="about-subtitle-motto">
          ${a.titlePrefix || '나는 '}<span class="highlight-txt">${a.highlightTxt || '성장'}</span>${suffixClean}<span class="accent-period">.</span>
        </p>
      </div>

      <div class="about-text-content reveal delay-1">
        <p class="about-lead">${a.lead || ''}</p>
        <p class="about-body">${a.body || ''}</p>

        <div class="skills-tags-wrapper">
          ${tagsHtml}
        </div>

        <a href="#timeline" class="editorial-text-link">
          나의 성장과정 보기
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(-45deg)">
            <path d="M4 12h15M13 6l6 6-6 6"></path>
          </svg>
        </a>
      </div>
    `;
  }


  /* ==========================================
     6. TIMELINE / ROADMAP RENDER (Editorial Grid)
     ========================================== */
  function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    const list = portfolioData.timeline || DEFAULT_DATA.timeline;

    let html = '';
    list.forEach((t, idx) => {
      const stepNum = t.step || String(idx + 1).padStart(2, '0');
      html += `
        <div class="timeline-item reveal delay-${(idx % 3) + 1}">
          <div class="timeline-meta-col">
            <span class="timeline-step-num">${stepNum}</span>
            <div class="timeline-date">${t.date}</div>
            <div class="timeline-company">${t.company}</div>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-role">${t.role}</h3>
            <p class="timeline-desc">${t.desc}</p>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }


  /* ==========================================
     7. SCROLL REVEAL, SCROLL SPY & CIRCULAR PROGRESS RING
     ========================================== */
  function initScrollObserve() {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-links .nav-link');
    const sections = [
      document.getElementById('hero'),
      document.getElementById('features'),
      document.getElementById('works'),
      document.getElementById('about'),
      document.getElementById('timeline'),
      document.getElementById('contact')
    ].filter(Boolean);

    const navbar = document.querySelector('.navbar');
    const scrollProgressBtn = document.getElementById('scrollProgressBtn');
    const scrollProgressRing = document.getElementById('scrollProgressRing');
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveNav();
          ticking = false;
        });
        ticking = true;
      }
    }

    function updateActiveNav() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(1, documentHeight - windowHeight);
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

      // Navbar scrolled border
      if (navbar) {
        navbar.classList.toggle('scrolled', scrollY > 24);
      }

      // Circular scroll progress button
      if (scrollProgressBtn) {
        scrollProgressBtn.classList.toggle('visible', scrollY > 280);
      }
      if (scrollProgressRing) {
        scrollProgressRing.style.strokeDashoffset = String((1 - progress).toFixed(4));
      }

      // Bottom of page -> Contact
      if (windowHeight + scrollY >= documentHeight - 60) {
        setActiveLink('contact');
        return;
      }

      let currentSectionId = 'hero';
      const offset = 200;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - offset) {
          currentSectionId = section.getAttribute('id');
        }
      });

      setActiveLink(currentSectionId);
    }

    function setActiveLink(sectionId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${sectionId}`);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveNav();
  }


  /* ==========================================
     8. PORTFOLIO FILTERING & WORK MODAL
     ========================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      const workCards = document.querySelectorAll('.work-card');

      workCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === cardCat) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px) scale(0.98)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 260);
        }
      });
    });
  });

  const portfolioModal = document.getElementById('portfolioModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openWorkModal(id) {
    const work = (portfolioData.works || []).find(w => String(w.id) === String(id));
    if (!work || !portfolioModal) return;

    document.getElementById('modalCategory').textContent = work.category;
    document.getElementById('modalTitle').textContent = work.title;
    document.getElementById('modalImg').src = sanitizeImgPath(work.img, 'assets/images/seoultourguide.jpg');
    document.getElementById('modalDesc').textContent = work.desc;
    document.getElementById('modalClient').textContent = work.client || 'Client';
    document.getElementById('modalYear').textContent = work.year || '2026.08';
    document.getElementById('modalRole').textContent = work.role || 'Design & Development';

    portfolioModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (modalCloseBtn) {
    modalCloseBtn.onclick = () => {
      portfolioModal.classList.remove('active');
      document.body.style.overflow = '';
    };
  }


  /* ==========================================
     9. PIXEL-CAT RUNNER MINI-GAME (eddieeddie.com Footer Signature)
     ========================================== */
  function initRunnerGame() {
    const container = document.getElementById('runnerContainer');
    const canvas = document.getElementById('runnerCanvas');
    const overlay = document.getElementById('runnerOverlay');
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const GROUND_Y = H - 38;

    let state = 'idle'; // 'idle' | 'running' | 'gameover'
    let score = 0;
    let highScore = 0;
    let speed = 6.2;
    let frameCount = 0;

    const cat = {
      x: 84,
      y: GROUND_Y - 32,
      w: 32,
      h: 32,
      vy: 0,
      gravity: 0.72,
      jumpPower: -13.2,
      grounded: true
    };

    let obstacles = [];

    function resetGame() {
      score = 0;
      speed = 6.2;
      frameCount = 0;
      cat.y = GROUND_Y - cat.h;
      cat.vy = 0;
      cat.grounded = true;
      obstacles = [];
    }

    function jump() {
      if (state === 'idle' || state === 'gameover') {
        resetGame();
        state = 'running';
        container.setAttribute('data-state', 'running');
        requestAnimationFrame(loop);
        return;
      }
      if (state === 'running' && cat.grounded) {
        cat.vy = cat.jumpPower;
        cat.grounded = false;
      }
    }

    function drawPixelCat(x, y, step) {
      ctx.save();
      ctx.fillStyle = '#eeeeee';
      // Ears
      ctx.fillRect(x + 4, y, 5, 5);
      ctx.fillRect(x + 19, y, 5, 5);
      // Head & Body
      ctx.fillRect(x + 4, y + 5, 22, 18);
      // Tail
      const tailOffset = step % 2 === 0 ? -2 : 2;
      ctx.fillRect(x - 4, y + 8 + tailOffset, 8, 4);
      // Eyes (Pink accent)
      ctx.fillStyle = '#dd83ad';
      ctx.fillRect(x + 18, y + 9, 3, 3);
      // Legs
      ctx.fillStyle = '#eeeeee';
      if (!cat.grounded) {
        ctx.fillRect(x + 6, y + 23, 5, 7);
        ctx.fillRect(x + 19, y + 21, 5, 7);
      } else if (step % 2 === 0) {
        ctx.fillRect(x + 6, y + 23, 5, 9);
        ctx.fillRect(x + 18, y + 23, 5, 5);
      } else {
        ctx.fillRect(x + 6, y + 23, 5, 5);
        ctx.fillRect(x + 18, y + 23, 5, 9);
      }
      ctx.restore();
    }

    function drawScene() {
      ctx.clearRect(0, 0, W, H);

      // Ground line
      ctx.strokeStyle = '#292929';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(W, GROUND_Y);
      ctx.stroke();

      // Score readout
      ctx.font = '600 13px monospace';
      ctx.fillStyle = '#a0a0a0';
      ctx.textAlign = 'right';
      const hiStr = String(Math.floor(highScore)).padStart(5, '0');
      const scStr = String(Math.floor(score)).padStart(5, '0');
      ctx.fillText(`HI ${hiStr}   ${scStr}`, W - 28, 34);

      // Obstacles
      obstacles.forEach(ob => {
        ctx.fillStyle = ob.accent ? '#dd83ad' : '#eeeeee';
        ctx.fillRect(ob.x, ob.y, ob.w, ob.h);
      });

      // Cat
      const legStep = state === 'running' ? Math.floor(frameCount / 6) : 0;
      drawPixelCat(cat.x, cat.y, legStep);
    }

    function loop() {
      if (state !== 'running') return;
      frameCount++;
      score += 0.15;
      speed = Math.min(13, 6.2 + score * 0.006);

      // Cat physics
      cat.vy += cat.gravity;
      cat.y += cat.vy;
      if (cat.y >= GROUND_Y - cat.h) {
        cat.y = GROUND_Y - cat.h;
        cat.vy = 0;
        cat.grounded = true;
      }

      // Spawn obstacles
      const lastOb = obstacles[obstacles.length - 1];
      const minGap = 240 + Math.random() * 220;
      if (!lastOb || W - lastOb.x > minGap) {
        if (Math.random() < 0.045 || !lastOb) {
          const h = 22 + Math.floor(Math.random() * 22);
          const w = 14 + Math.floor(Math.random() * 12);
          obstacles.push({
            x: W + 20,
            y: GROUND_Y - h,
            w,
            h,
            accent: Math.random() < 0.35
          });
        }
      }

      // Move & check collisions
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const ob = obstacles[i];
        ob.x -= speed;

        // AABB collision with slight forgiveness
        if (
          cat.x + 6 < ob.x + ob.w &&
          cat.x + cat.w - 6 > ob.x &&
          cat.y + 4 < ob.y + ob.h &&
          cat.y + cat.h > ob.y
        ) {
          state = 'gameover';
          if (score > highScore) highScore = score;
          container.setAttribute('data-state', 'gameover');
          if (overlay) {
            overlay.innerHTML = `
              <b>Game over · Score ${Math.floor(score)}</b>
              <span>Tap or press space to run again.</span>
            `;
          }
          drawScene();
          return;
        }

        if (ob.x + ob.w < -20) {
          obstacles.splice(i, 1);
        }
      }

      drawScene();
      requestAnimationFrame(loop);
    }

    // Initial idle render
    drawScene();

    container.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      canvas.focus({ preventScroll: true });
      jump();
    });

    canvas.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    });
  }


  /* ==========================================
     10. GENERAL UTILS, CONTACT FORM & MOBILE DRAWER
     ========================================== */
  const toast = document.getElementById('toast');
  function showToast(message) {
    if (!toast) return;
    const toastMsg = document.getElementById('toastMsg');
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.onsubmit = (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.btn-submit');
      const orig = submitBtn.innerHTML;
      submitBtn.textContent = '메시지 전송 중...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = orig;
        submitBtn.disabled = false;
        contactForm.reset();
        showToast('성공적으로 메시지가 전달되었습니다. 감사합니다!');
      }, 1200);
    };
  }

  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.querySelector('.nav-links');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-links a');

  function closeMobileDrawer() {
    if (navMenu) navMenu.classList.remove('mobile-active');
    if (mobileToggle) mobileToggle.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle && navMenu) {
    mobileToggle.onclick = () => {
      const isExpanded = navMenu.classList.toggle('mobile-active');
      mobileToggle.classList.toggle('active', isExpanded);
      if (navOverlay) navOverlay.classList.toggle('active', isExpanded);
      document.body.style.overflow = isExpanded ? 'hidden' : '';
    };
  }

  if (navOverlay) {
    navOverlay.onclick = closeMobileDrawer;
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // Initialize Site & Runner Game
  renderSite();
  initRunnerGame();

});
