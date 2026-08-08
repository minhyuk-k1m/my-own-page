/**
 * SKY & MINT GREEN PORTFOLIO CMS & INTERACTIVE LOGIC
 * Standardized Subpath-compatible Image Paths & Self-Healing Cache Sync
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
      titleSuffix: '합니다.',
      lead: '만나서 반갑습니다. 저는 AI기술을 토대로 미래를 향한 비전을 세우고 하나하나 배우며 성장하고 있는 고등학생 김민혁입니다.',
      body: '저의 비전은 단순한 구상에서 끝나는 것이 아닌 실질적 구현을 통해 세상 밖으로 나옵니다. 아직 미숙하지만 수많은 연습을 통해 사람들에게 긍정적인 영향을 주는 것이 목표입니다.',
      tags: ['AI 비전', '고등학생 크리에이터', '지속적인 성장', '실질적 구현', '긍정적 영향력']
    },
    features: [
      {
        icon: 'fa-award',
        title: '1. 성실함(WORKETHIC)',
        desc: '어떤 일을 하든지 성실함은 반드시 필요한 덕목 중 하나라고 생각합니다. 저는 제가 참여하는 모든 일에 책임을 가지고 성실히 업무를 수행해 나가는 장점을 가지고 있습니다.'
      },
      {
        icon: 'fa-handshake-angle',
        title: '2. 상호 존중(RESPECT)',
        desc: '비욘 나티코 린네블라드의 "내가 틀릴 수도 있습니다" 라는 책을 읽고 깊은 감명을 받은 기억이 있습니다. 모든 갈등은 상호 존중의 부재에서 일어난다는 것을 인지하고 나와 다른 의견에도 귀 기울이고 존중하는 자세를 가집니다.'
      },
      {
        icon: 'fa-seedling',
        title: '3. 회복 탄력성(RESILIENCE)',
        desc: '실패를 통해 배우고 성장하는 것 또한 매우 중요하다고 생각합니다. 저는 제가 계획한 일이 예상대로 되지 않더라도 이를 통해 배우고 앞으로를 기약합니다.'
      }
    ],
    works: [
      {
        id: '1',
        category: 'Web App',
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
        title: 'VOCABMASTER(보캅마스터)',
        img: 'assets/images/vocabmaster.jpg',
        desc: '언제나 함께하는 나만의 작은 단어장',
        link: 'https://minhyuk-k1m.github.io/Vocabmaster/',
        client: 'VocabMaster Project',
        year: '2026.07',
        role: 'Web Application Dev'
      }
    ],
    timeline: [
      {
        date: '2018 - 2020',
        role: '취미로 첫 코딩 시작, 엔트리를 이용한 프로그램 만들기',
        company: '태봉초등학교 (Taebong Elementary School)',
        desc: '초등학교 2학년 때 취미로 코딩을 시작하였고, 엔트리를 이용한 블록코딩으로 작품을 만든 후 공유하였음.'
      },
      {
        date: '2021 - 2025',
        role: 'MICROBIT, C언어 학습 및 심화 구현하기',
        company: '금호중앙중학교 (Kumho Jungang Middle School)',
        desc: 'microbit를 이용하여 회로의 기본적 원리를 학습했고 그 후 C언어를 배워 기본 코딩 능력을 배양하였음.'
      },
      {
        date: '2026 - Present',
        role: '인공지능을 활용한 웹 앱 개발하기',
        company: '금호고등학교 (Kumho High School)',
        desc: 'Google Antigravity를 이용한 웹 앱 개발을 통해 떠오르는 아이디어를 실제로 구현해내고 있음.'
      }
    ]
  };

  const STORAGE_KEY = 'minhyuk_portfolio_cms_v100_final';
  let portfolioData = loadData();

  function sanitizeImgPath(pathStr, defaultPath) {
    if (!pathStr || typeof pathStr !== 'string') return defaultPath;
    let clean = pathStr.replace(/^\.\//, '');
    if (clean.endsWith('.svg') && !clean.includes('profile')) {
      return defaultPath;
    }
    return clean;
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
        if (parsed.works) {
          parsed.works.forEach((w, idx) => {
            w.img = sanitizeImgPath(w.img, DEFAULT_DATA.works[idx % 2]?.img || 'assets/images/seoultourguide.jpg');
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

  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));
      renderSite();
      showToast('성공적으로 모든 수정사항이 저장되었습니다!');
    } catch (e) {
      console.error('Failed to save storage data:', e);
      showToast('저장 중 용량 초과 또는 오류가 발생했습니다.');
    }
  }

  function resetData() {
    portfolioData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    localStorage.removeItem(STORAGE_KEY);
    renderSite();
    showToast('기본 데이터로 원상복원 되었습니다.');
  }


  /* ==========================================
     2. DYNAMIC SITE RENDERING
     ========================================== */
  function renderSite() {
    renderHero();
    renderAbout();
    renderFeatures();
    renderWorks();
    renderTimeline();
    initScrollObserve();
  }

  // 1) HERO SLIDER RENDER
  let currentSlideIndex = 0;
  let slideTimer = null;
  let isAnimating = false;

  function renderHero() {
    const track = document.getElementById('sliderTrack');
    const counterTotal = document.getElementById('carouselTotal');
    if (!track) return;

    const slides = portfolioData.heroSlides || [];
    const realTotal = slides.length;
    if (counterTotal) counterTotal.textContent = String(realTotal).padStart(2, '0');

    if (realTotal === 0) {
      track.innerHTML = '<div class="hero-slide active"><div class="hero-slide-overlay"><h2 class="hero-slide-title">배너가 없습니다</h2></div></div>';
      return;
    }

    let html = '';
    slides.forEach(s => {
      const cleanImg = sanitizeImgPath(s.img, 'assets/images/hero-1.jpg');
      html += `
        <div class="hero-slide">
          <img src="${cleanImg}" alt="${s.title}" class="hero-slide-img">
          <div class="hero-slide-overlay">
            <div class="hero-slide-content">
              <span class="hero-badge">${s.badge}</span>
              <h2 class="hero-slide-title">${s.title}</h2>
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
            <h2 class="hero-slide-title">${firstSlide.title}</h2>
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
    resetProgressBar();
    if (realTotal <= 1) return;
    slideTimer = setInterval(() => {
      goToSlide(currentSlideIndex + 1, realTotal);
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
    if (!progressFill) return;
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

  // 2) ABOUT SECTION RENDER
  function renderAbout() {
    const container = document.getElementById('aboutContainer');
    if (!container) return;
    const a = portfolioData.about || DEFAULT_DATA.about;

    let tagsHtml = '';
    (a.tags || []).forEach(t => {
      tagsHtml += `<span class="skill-tag"><i class="fa-solid fa-sparkles"></i> ${t}</span>`;
    });

    const primaryImg = sanitizeImgPath(a.avatarImg, 'assets/images/profile_ava.jpg');

    container.innerHTML = `
      <div class="about-img-wrapper reveal">
        <div class="about-img-card">
          <img src="${primaryImg}" id="profileAvatarImg" alt="김민혁 프로필 캐릭터">
        </div>
      </div>

      <div class="about-text-content reveal delay-1">
        <div class="section-tag">
          <i class="fa-solid fa-user-sparkles"></i>
          <span>About Me</span>
        </div>

        <h2 class="section-title">
          ${a.titlePrefix || '나는 '}<span class="highlight-txt">${a.highlightTxt || '성장'}</span>${a.titleSuffix || '합니다.'}
        </h2>

        <p class="about-lead">${a.lead || ''}</p>
        <p class="about-body">${a.body || ''}</p>

        <div class="skills-tags-wrapper">
          ${tagsHtml}
        </div>
      </div>
    `;
  }

  // 3) FEATURES RENDER
  function renderFeatures() {
    const container = document.getElementById('featuresContainer');
    if (!container) return;
    const list = portfolioData.features || DEFAULT_DATA.features;

    let html = '';
    list.forEach((f, idx) => {
      html += `
        <div class="feature-card reveal delay-${(idx % 3) + 1}">
          <div class="feature-icon">
            <i class="fa-solid ${f.icon}"></i>
          </div>
          <h3 class="feature-title">${f.title}</h3>
          <p class="feature-desc">${f.desc}</p>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // 4) WORKS RENDER
  function renderWorks() {
    const container = document.getElementById('worksContainer');
    if (!container) return;
    const list = portfolioData.works || DEFAULT_DATA.works;

    let html = '';
    list.forEach((w, idx) => {
      const targetLink = w.link ? w.link : '#';
      const createdDate = w.year || '2026.08';
      const cleanImg = sanitizeImgPath(w.img, idx === 0 ? 'assets/images/seoultourguide.jpg' : 'assets/images/vocabmaster.jpg');

      html += `
        <div class="work-card reveal delay-${(idx % 3) + 1}" data-category="${w.category}" data-id="${w.id}" data-link="${targetLink}">
          <div class="work-img-box">
            <span class="work-date-badge"><i class="fa-regular fa-calendar-days" style="margin-right:0.25rem;"></i>${createdDate}</span>
            <img src="${cleanImg}" alt="${w.title}">
            <div class="work-overlay">
              <div class="work-view-icon" title="작품 링크로 접속"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            </div>
          </div>
          <div class="work-info">
            <span class="work-category">${w.category}</span>
            <h3 class="work-title">${w.title}</h3>
            <p class="work-desc">${w.desc}</p>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;

    const cards = container.querySelectorAll('.work-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const linkUrl = card.getAttribute('data-link');
        if (linkUrl && linkUrl !== '#' && linkUrl.trim() !== '') {
          window.open(linkUrl, '_blank');
        } else {
          const id = card.getAttribute('data-id');
          openWorkModal(id);
        }
      });
    });
  }

  // 5) TIMELINE RENDER
  function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    const list = portfolioData.timeline || DEFAULT_DATA.timeline;

    let html = '';
    list.forEach((t, idx) => {
      html += `
        <div class="timeline-item reveal delay-${(idx % 3) + 1}">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-date">${t.date}</div>
            <h3 class="timeline-role">${t.role}</h3>
            <div class="timeline-company">${t.company}</div>
            <p class="timeline-desc">${t.desc}</p>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

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


  /* ==========================================
     3. PORTFOLIO FILTERING & WORK MODAL
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
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
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
     8. GENERAL UTILS & INITIALIZATION
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
  if (mobileToggle && navMenu) {
    mobileToggle.onclick = () => navMenu.classList.toggle('mobile-active');
  }

  // Init Site
  renderSite();

});
