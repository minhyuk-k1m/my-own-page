/**
 * ============================================================================
 * MINHYUK PORTFOLIO — DATA & MODULAR COMPONENT ARCHITECTURE
 * 1. PORTFOLIO_DATA 객체를 수정하면 화면 전체 텍스트·프로젝트·스킬이 자동 반영됩니다.
 * 2. 각 섹션은 독립된 렌더 함수(Component)로 분리되어 있습니다.
 * ============================================================================
 */

const PORTFOLIO_DATA = {
  profile: {
    name: '김민혁',
    englishName: 'Minhyuk',
    role: 'Student Creator & Problem Solver',
    headline: '문제를 해결하는 학생, 김민혁입니다.',
    headlines: [
      "문제를 해결하는 학생,\n김민혁입니다.",
      "학생 개발자,\n김민혁입니다.",
      "안녕하세요,\n김민혁입니다.",
      "열정적인 해결사,\n김민혁입니다.",
      "차세대 선구자,\n김민혁입니다.",
      "금호인,\n김민혁입니다."
    ],
    subheadline: '디자인, 개발, 프로젝트 경험을 통해 가치를 만듭니다.',
    heroBadge: 'Academic · Project · Competency Portfolio',
    avatarImg: 'assets/images/profile_ava.jpg',
    avatarFallback: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    email: 'minhyuk.contact@gmail.com',
    location: 'Gwangju, Republic of Korea',
    school: '금호고등학교 재학'
  },

  /* ==========================================
     대표 프로젝트 데이터 (오래된 순부터 순차 배치)
     1. 서울 투어 가이드 (2026.06)
     2. 보캅마스터 (2026.07)
     3. 오늘 뭐 먹지? (2026.08)
     4. 금호고 스쿨메이트 (2026.10)
     ========================================== */
  projects: [
    {
      id: 'seoul-tour-guide',
      title: '서울 투어 가이드 (SEOUL TOUR GUIDE)',
      category: 'Tourism Information Web',
      period: '2026.06',
      summary: '서울특별시를 방문하는 여행객들에게 핵심 명소와 관광 정보를 한눈에 제공하는 큐레이션 웹 서비스입니다.',
      thumbnail: 'assets/images/seoultourguide.jpg',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1000&q=80',
      tags: ['Antigravity', 'Javascript', 'HTML'],
      liveUrl: 'https://minhyuk-k1m.github.io/SEOUL-TOUR-GUIDE/',
      problem: '서울의 방대한 관광 정보가 여러 블로그와 사이트에 흩어져 있어, 처음 방문하는 여행자가 핵심 코스와 명소 특징을 빠르게 파악하기 어려웠습니다.',
      role: '콘텐츠 큐레이션, 레이아웃 디자인, 웹 앱 개발 및 배포',
      tools: ['Antigravity', 'Javascript', 'HTML'],
      process: [
        '서울 주요 권역 및 테마별 대표 명소 정보를 선정하고 시각적 위계가 뚜렷한 카드 레이아웃으로 재구성',
        '사진 중심의 비주얼 프리젠테이션과 핵심 요약 설명을 결합해 정보 탐색 피로도 감소',
        '데스크톱과 모바일 환경 모두에서 깨짐 없이 탐색 가능한 반응형 그리드 적용'
      ],
      outcome: '처음 시행한 프로젝트 치고 반응이 좋았으며, 앞으로 더 확대해 나갈 계획임.'
    },
    {
      id: 'vocabmaster',
      title: '보캅마스터 (VOCABMASTER)',
      category: 'EdTech Study Tool',
      period: '2026.07',
      summary: '언제 어디서나 나만의 단어를 정리하고 암기 효율을 높일 수 있는 디지털 단어장 웹 애플리케이션입니다.',
      thumbnail: 'assets/images/vocabmaster.jpg',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80',
      tags: ['Antigravity', 'Javascript', 'HTML'],
      liveUrl: 'https://minhyuk-k1m.github.io/Vocabmaster/',
      problem: '종이 단어장은 휴대와 검색이 불편하고, 기존 대형 어학 앱은 기능이 복잡해 학생이 시험 범위나 개인 학습 단어를 빠르게 등록하고 복습하기에 진입장벽이 높았습니다.',
      role: '콘텐츠 큐레이션, 레이아웃 디자인, 웹 앱 개발 및 배포',
      tools: ['Antigravity', 'Javascript', 'HTML'],
      process: [
        '단어 추가·수정·삭제 및 암기 여부 체크에 집중한 미니멀 학습 인터페이스 설계',
        '별도의 서버 로그인 없이도 브라우저에서 즉시 데이터를 유지할 수 있도록 클라이언트 저장소 구조화',
        '이동 중 스마트폰 한 손 조작으로도 편리하게 단어를 넘겨볼 수 있는 반응형 카드 UI 구현'
      ],
      outcome: '학습자의 시선 분산을 최소화한 깔끔한 UI를 통해 자기주도적 어휘 학습 효율을 높이는 개인 맞춤형 에듀테크 웹 도구를 구축했습니다.'
    },
    {
      id: 'menu-recommender',
      title: '오늘 뭐 먹지? (Menu Recommender)',
      category: 'Lifestyle Web Application',
      period: '2026.08',
      summary: '사소하지만 제일 고통스러운 일상의 메뉴 선택 고민을 빠르게 해결해 주는 맞춤형 추천 웹 앱입니다.',
      thumbnail: 'assets/images/today_menu.jpg',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
      tags: ['Antigravity', 'Javascript', 'HTML'],
      liveUrl: 'https://minhyuk-k1m.github.io/menu-recommender/',
      problem: '매일 반복되는 "오늘 뭐 먹지?"라는 고민에 불필요하게 많은 시간이 소모되며, 사용자의 상황이나 취향에 맞춰 즉각적이고 재미있게 메뉴를 제안해 주는 가벼운 웹 도구가 필요했습니다.',
      role: '콘텐츠 큐레이션, 레이아웃 디자인, 웹 앱 개발 및 배포',
      tools: ['Antigravity', 'Javascript', 'HTML'],
      process: [
        '한식·중식·일식·양식·분식 등 카테고리 및 상황별 메뉴 데이터베이스 구조화',
        '복잡한 가입이나 설정 없이 접속 즉시 클릭 한 번으로 결과를 확인할 수 있는 직관적인 사용자 흐름(User Flow) 설계',
        '선택의 즐거움을 높이는 부드러운 전환 애니메이션과 모바일 친화적 버튼 레이아웃 적용'
      ],
      outcome: '누구나 링크 하나로 접속해 식사 메뉴를 추천받을 수 있는 직관적인 웹 애플리케이션을 배포하여 일상 속 사소하지만 중요한 문제를 해결했습니다.'
    },
    {
      id: 'kumho-schoolmate',
      title: '금호고 스쿨메이트 (KUMHO SCHOOLMATE)',
      category: 'Smart School Web Platform',
      period: '2026.10',
      summary: '금호고등학교 학생과 교실 전자칠판을 위한 올인원 학사·시간표·급식·날씨 플랫폼입니다.',
      thumbnail: 'assets/images/kumho_schoolmate.jpg',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
      tags: ['Antigravity', 'Javascript', 'HTML'],
      liveUrl: 'https://kumho-schoolmate.com',
      problem: '학교 생활 중 시간표, 오늘의 급식, 학사 일정, 실시간 날씨 정보를 확인하려면 각각 다른 앱이나 게시판을 찾아야 하는 번거로움이 있었고, 교실 전자칠판에서 한눈에 볼 수 있는 통합 대시보드가 부족했습니다.',
      role: '콘텐츠 큐레이션, 레이아웃 디자인, 웹 앱 개발 및 배포',
      tools: ['Antigravity', 'Javascript', 'HTML'],
      process: [
        '교실 전자칠판(대화면)과 학생 개인 스마트폰(모바일) 두 가지 사용 환경을 동시에 고려한 반응형 정보 구조(IA) 설계',
        '급식 식단·알레르기 정보, 학급별 시간표, 주요 학사 일정, 실시간 날씨 데이터를 한 화면에 직관적으로 배치',
        '가독성이 뛰어난 카드형 레이아웃과 빠른 로딩 속도를 위한 경량 프론트엔드 아키텍처 구현'
      ],
      outcome: '실제 도메인(kumho-schoolmate.com)으로 배포하여 학생들이 등교 후 교실과 모바일에서 매일 편리하게 학사·급식·시간표 정보를 확인할 수 있는 실용적인 교내 웹 서비스로 완성했습니다.'
    }
  ],

  /* ==========================================
     ABOUT & 역량 / 경력 데이터 (모던 스크롤 섹션 분리 구조)
     ========================================== */
  about: {
    introLead: '만나서 반갑습니다. AI와 웹 기술을 토대로 일상의 문제를 정의하고, 직접 작동하는 결과물로 구현하며 성장하고 있는 고등학생 김민혁입니다.',
    introBody: '저의 목표는 아이디어를 단순한 구상에서 끝내지 않고, 실질적인 웹 서비스와 프로젝트로 세상 밖에 내놓아 사람들에게 긍정적인 영향을 주는 것입니다. 작은 불편함을 관찰하는 시선과 끝까지 완성해내는 실행력을 가장 중요하게 생각합니다.',
    highlights: [
      { label: 'Focus', value: '실생활 문제 해결형 웹 앱 제작', icon: 'fa-solid fa-bullseye' },
      { label: 'Workflow', value: 'AI 기반 바이브코딩 & 빠른 실행', icon: 'fa-solid fa-bolt' },
      { label: 'Mindset', value: '꾸준한 기록과 사용자 중심 개선', icon: 'fa-solid fa-layer-group' }
    ],
    interests: [
      {
        badge: 'UI/UX & Product',
        icon: 'fa-solid fa-compass-drafting',
        title: '사용자 중심 웹 애플리케이션 기획 및 UI/UX 설계'
      },
      {
        badge: 'AI Web App',
        icon: 'fa-solid fa-wand-magic-sparkles',
        title: 'AI 도구를 활용한 웹 앱 개발 및 문제 해결'
      },
      {
        badge: 'Practical Solution',
        icon: 'fa-solid fa-lightbulb',
        title: '학교·일상 현장의 불편함을 개선하는 실용적 소프트웨어 개발'
      }
    ],
    currentlyLearning: [
      {
        step: '01',
        badge: 'Vibe Coding',
        icon: 'fa-solid fa-rocket',
        title: 'Antigravity 툴을 이용한 바이브코딩 기술'
      },
      {
        step: '02',
        badge: 'Languages',
        icon: 'fa-solid fa-code',
        title: 'C, PYTHON 등 컴퓨터 프로그래밍 언어'
      },
      {
        step: '03',
        badge: 'Mathematics',
        icon: 'fa-solid fa-square-root-variable',
        title: '기초 인공지능 수학'
      },
      {
        step: '04',
        badge: 'CS Fundamentals',
        icon: 'fa-solid fa-microchip',
        title: '컴퓨터 과학'
      }
    ],
    collaborationValues: [
      {
        badge: 'Work Ethic',
        icon: 'fa-solid fa-shield-halved',
        title: '성실함 (Work Ethic)',
        desc: '참여하는 모든 프로젝트와 역할에 책임감을 가지고 약속한 끝까지 성실하게 완수합니다.'
      },
      {
        badge: 'Mutual Respect',
        icon: 'fa-solid fa-comments',
        title: '상호 존중 (Respect)',
        desc: '열린 자세로 다양한 의견에 귀 기울이고 소통하며 더 나은 해답을 찾습니다'
      },
      {
        badge: 'Resilience',
        icon: 'fa-solid fa-arrows-rotate',
        title: '회복 탄력성 (Resilience)',
        desc: '예상치 못한 오류나 실패를 마주하더라도 원인을 분석하고 배움의 발판으로 삼아 다시 도전합니다.'
      }
    ],
    /* 좌에서 우로 이어지는 가로형 화살표 연표 (과거 -> 현재 순) */
    timeline: [
      {
        period: '2018 - 2020',
        keyword: '블록 코딩 입문 · 창작 시작',
        organization: '태봉초등학교 (Taebong Elementary School)',
        role: '블록 코딩 입문 및 창작 프로그램 제작·공유',
        desc: '초등학교 2학년 때 취미로 코딩을 시작하여 엔트리(Entry) 기반의 작품을 스스로 기획·제작하고 공유하며 창작의 즐거움을 배움.',
        positionPercent: 16.67
      },
      {
        period: '2021 - 2025',
        keyword: '피지컬 컴퓨팅 & C언어 알고리즘',
        organization: '금호중앙중학교 (Kumho Jungang Middle School)',
        role: 'Micro:bit 피지컬 컴퓨팅 및 C언어 알고리즘 학습',
        desc: 'Micro:bit를 통해 하드웨어·회로의 기본 원리를 익히고, C언어 학습으로 프로그래밍의 기초 논리와 문제 해결력을 배양함.',
        positionPercent: 50
      },
      {
        period: '2026 - Present',
        keyword: 'AI 웹 앱 개발 · 실전 배포',
        organization: '금호고등학교 (Kumho High School)',
        role: 'AI 활용 웹 애플리케이션 개발 및 실전 프로젝트 배포',
        desc: '금호고 스쿨메이트, 오늘 뭐 먹지?, 보캅마스터 등 실생활 문제를 해결하는 웹 서비스를 기획·개발하여 운영 중.',
        positionPercent: 83.33
      }
    ]
  },

  /* ==========================================
     CONTACT & SNS 데이터 (GitHub & Instagram @minlnxuk_ 만 표시)
     ========================================== */
  contact: {
    title: "Let's Work Together",
    description: '프로젝트 협업, 학업 및 개발 관련 이야기, 혹은 웹사이트에 대한 피드백 등 어떤 연락이든 환영합니다. 아래 이메일이나 문의 폼, 또는 SNS로 편하게 연락해 주세요.',
    email: 'career.minhyuk@gmail.com',
    socials: [
      {
        name: 'GitHub',
        handle: 'github.com/minhyuk-k1m',
        url: 'https://github.com/minhyuk-k1m',
        icon: 'fa-brands fa-github'
      },
      {
        name: 'Instagram',
        handle: '@minlnxuk_',
        url: 'https://www.instagram.com/minlnxuk_/',
        icon: 'fa-brands fa-instagram'
      }
    ]
  }
};


/* ============================================================================
   COMPONENT RENDERERS
   ============================================================================ */

/**
 * 1. Hero Section Component (Centered Typography-First Layout, No Profile Photo Card)
 */
function renderHeroComponent() {
  const container = document.getElementById('heroContainer');
  if (!container) return;

  const { profile, projects } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div class="flex flex-col items-center text-center fade-up">
      <!-- Top Eyebrow Status Pill (금호고등학교 재학 제거, 역할만 깔끔하게 표시) -->
      <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-light border border-brand-border text-brand text-xs sm:text-sm font-semibold tracking-wide mb-9">
        <span class="w-2 h-2 rounded-full bg-brand"></span>
        <span>${profile.role}</span>
      </div>

      <!-- Extra-Large Centered Headline with Typewriter Motion -->
      <h1 class="font-display text-5xl sm:text-7xl lg:text-[84px] font-extrabold text-ink tracking-tight leading-[1.15] mb-8 min-h-[124px] sm:min-h-[172px] lg:min-h-[202px] flex items-center justify-center">
        <span>
          <span id="heroTypingText"></span><span id="heroTypingCursor" class="typing-cursor inline-block w-[4px] h-[0.88em] bg-brand ml-1.5 align-middle" aria-hidden="true"></span>
        </span>
      </h1>

      <!-- Centered Subheadline -->
      <p class="text-lg sm:text-xl md:text-2xl text-inkSub font-normal leading-relaxed max-w-2xl mx-auto mb-11">
        ${profile.subheadline}
      </p>

      <!-- Centered Core Focus Pills (View Projects / Contact Me 버튼 제거 후 핵심 역량 배지 배치) -->
      <div class="flex flex-wrap items-center justify-center gap-3.5 mb-12">
        <div class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface border border-line shadow-2xs">
          <span class="w-7 h-7 rounded-lg bg-brand-light text-brand flex items-center justify-center text-xs shrink-0">
            <i class="fa-solid fa-lightbulb"></i>
          </span>
          <span class="text-xs sm:text-sm font-medium text-ink">일상의 문제를 발견하고 정의하는 기획력</span>
        </div>
        <div class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface border border-line shadow-2xs">
          <span class="w-7 h-7 rounded-lg bg-brand-light text-brand flex items-center justify-center text-xs shrink-0">
            <i class="fa-solid fa-code"></i>
          </span>
          <span class="text-xs sm:text-sm font-medium text-ink">직접 동작하는 웹 서비스로 구현하는 실행력</span>
        </div>
      </div>

      <!-- Centered 3-Column Summary Metrics Card (Count-up Animation) -->
      <div class="w-full max-w-2xl bg-surface rounded-2xl border border-line px-6 py-7 shadow-2xs grid grid-cols-3 divide-x divide-line" id="heroMetricsContainer">
        <div class="px-2 sm:px-4">
          <div class="font-display text-2xl sm:text-4xl font-extrabold text-ink metric-counter" data-target="${projects.length}" data-suffix="+">0+</div>
          <div class="text-xs sm:text-sm text-inkMuted mt-1">Live Web Projects</div>
        </div>
        <div class="px-2 sm:px-4">
          <div class="font-display text-2xl sm:text-4xl font-extrabold text-ink metric-counter" data-target="3" data-suffix=" Core">0 Core</div>
          <div class="text-xs sm:text-sm text-inkMuted mt-1">성실 · 존중 · 회복탄력성</div>
        </div>
        <div class="px-2 sm:px-4">
          <div class="font-display text-2xl sm:text-4xl font-extrabold text-brand metric-counter" data-target="8" data-suffix="+년">0+년</div>
          <div class="text-xs sm:text-sm text-inkMuted mt-1">2018~ 코딩 &amp; 성장 여정</div>
        </div>
      </div>
    </div>
  `;
}


/**
 * 2. Featured Projects Grid Component
 */
function renderProjectsComponent() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.projects.map((project, idx) => {
    const tagsHtml = project.tags.map(tag => `
      <span class="font-mono text-[11px] font-medium px-2 py-0.5 rounded bg-bgSub text-inkSub border border-line">
        ${tag}
      </span>
    `).join('');

    return `
      <article class="project-card bg-surface rounded-xl border border-line overflow-hidden flex flex-col fade-up delay-${(idx % 3) * 100}">
        <!-- Thumbnail Wrapper -->
        <a href="#project/${project.id}" class="block relative aspect-[16/10] overflow-hidden bg-bgSub border-b border-line focus-ring" aria-label="${project.title} 상세 보기">
          <img
            src="${project.thumbnail}"
            alt="${project.title}"
            onerror="this.onerror=null; this.src='${project.fallbackThumbnail}';"
            class="project-thumb w-full h-full object-cover"
          >
          <span class="absolute top-2.5 left-2.5 font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-surface/90 backdrop-blur-sm text-ink border border-line shadow-2xs">
            ${project.period}
          </span>
        </a>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-[11px] font-mono font-semibold text-brand uppercase tracking-wider mb-1">
              ${project.category}
            </div>
            <h3 class="font-display text-lg font-bold text-ink mb-1.5 leading-snug">
              <a href="#project/${project.id}" class="hover:text-brand transition-colors focus-ring rounded">
                ${project.title}
              </a>
            </h3>
            <p class="text-inkSub text-[13.5px] leading-relaxed mb-4">
              ${project.summary}
            </p>
          </div>

          <div>
            <!-- Tech Tags -->
            <div class="flex flex-wrap gap-1 mb-4">
              ${tagsHtml}
            </div>

            <!-- Card Footer Actions -->
            <div class="pt-3 border-t border-line flex items-center justify-between gap-3">
              <a href="#project/${project.id}" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline focus-ring rounded py-1">
                <span>자세히 보기</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </a>

              ${project.liveUrl ? `
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-inkMuted hover:text-ink transition-colors focus-ring rounded py-1" title="배포된 사이트 새 창으로 열기">
                  <span>Live Site</span>
                  <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}


/**
 * 3. Project Detail Page Component (문제 정의 · 내 역할 · 사용 도구 · 과정 · 결과)
 */
function renderProjectDetailPage(projectId) {
  const container = document.getElementById('projectDetailContainer');
  if (!container) return;

  const projects = PORTFOLIO_DATA.projects;
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const project = projects[currentIndex];

  if (!project) {
    window.location.hash = '#projects';
    return;
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const toolsHtml = project.tools.map(tool => `
    <span class="font-mono text-xs font-medium px-3 py-1.5 rounded-lg bg-brand-light text-brand border border-brand-border">
      ${tool}
    </span>
  `).join('');

  const processHtml = project.process.map((step, i) => `
    <li class="flex items-start gap-3.5">
      <span class="w-6 h-6 rounded-full bg-brand text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
        ${i + 1}
      </span>
      <span class="text-inkSub text-base leading-relaxed">${step}</span>
    </li>
  `).join('');

  container.innerHTML = `
    <!-- Top Back Navigation -->
    <div class="mb-8 flex items-center justify-between gap-4">
      <a href="#projects" class="inline-flex items-center gap-2 text-sm font-semibold text-inkSub hover:text-brand transition-colors focus-ring rounded-lg px-3 py-2 bg-surface border border-line">
        <i class="fa-solid fa-arrow-left text-xs"></i>
        <span>프로젝트 목록으로 돌아가기</span>
      </a>
      <span class="font-mono text-xs font-semibold text-inkMuted">${project.period} · ${project.category}</span>
    </div>

    <!-- Project Title & Summary Header -->
    <div class="bg-surface rounded-2xl border border-line p-7 sm:p-10 shadow-sm mb-8">
      <span class="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-brand bg-brand-light px-3 py-1 rounded-full mb-3">
        Project Case Study
      </span>
      <h1 class="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
        ${project.title}
      </h1>
      <p class="text-lg text-inkSub leading-relaxed mb-6">
        ${project.summary}
      </p>

      <div class="flex flex-wrap items-center gap-4 pt-6 border-t border-line">
        ${project.liveUrl ? `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white text-sm font-semibold focus-ring">
            <span>배포된 사이트 방문하기</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          </a>
        ` : ''}
      </div>
    </div>

    <!-- Main Thumbnail Showcase -->
    <div class="rounded-2xl overflow-hidden border border-line bg-surface shadow-sm mb-8 aspect-[16/10]">
      <img
        src="${project.thumbnail}"
        alt="${project.title} 화면 이미지"
        onerror="this.onerror=null; this.src='${project.fallbackThumbnail}';"
        class="w-full h-full object-cover"
      >
    </div>

    <!-- Case Study 5 Structured Blocks: 문제 정의 / 내 역할 / 사용 도구 / 과정 / 결과 -->
    <div class="space-y-6">
      
      <!-- 1. 문제 정의 (Problem) -->
      <div class="bg-surface rounded-2xl border border-line p-7 sm:p-8">
        <div class="flex items-center gap-2.5 text-brand font-display font-bold text-lg mb-3">
          <i class="fa-solid fa-circle-question"></i>
          <h2>1. 문제 정의 (Problem)</h2>
        </div>
        <p class="text-inkSub text-base leading-relaxed">
          ${project.problem}
        </p>
      </div>

      <!-- 2. 내 역할 (My Role) & 3. 사용 도구 (Tools) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-surface rounded-2xl border border-line p-7 sm:p-8">
          <div class="flex items-center gap-2.5 text-brand font-display font-bold text-lg mb-3">
            <i class="fa-solid fa-user-check"></i>
            <h2>2. 내 역할 (My Role)</h2>
          </div>
          <p class="text-ink font-semibold text-base leading-relaxed">
            ${project.role}
          </p>
        </div>

        <div class="bg-surface rounded-2xl border border-line p-7 sm:p-8">
          <div class="flex items-center gap-2.5 text-brand font-display font-bold text-lg mb-3">
            <i class="fa-solid fa-screwdriver-wrench"></i>
            <h2>3. 사용 도구 및 기술 (Tools)</h2>
          </div>
          <div class="flex flex-wrap gap-2">
            ${toolsHtml}
          </div>
        </div>
      </div>

      <!-- 4. 과정 (Process) -->
      <div class="bg-surface rounded-2xl border border-line p-7 sm:p-8">
        <div class="flex items-center gap-2.5 text-brand font-display font-bold text-lg mb-4">
          <i class="fa-solid fa-diagram-project"></i>
          <h2>4. 해결 과정 (Process)</h2>
        </div>
        <ul class="space-y-3.5">
          ${processHtml}
        </ul>
      </div>

      <!-- 5. 결과 (Outcome) -->
      <div class="bg-brand-light/70 rounded-2xl border border-brand-border p-7 sm:p-8">
        <div class="flex items-center gap-2.5 text-brand font-display font-bold text-lg mb-3">
          <i class="fa-solid fa-trophy"></i>
          <h2>5. 결과 및 성과 (Outcome)</h2>
        </div>
        <p class="text-ink text-base leading-relaxed font-medium">
          ${project.outcome}
        </p>
      </div>

    </div>

    <!-- Bottom Prev / Next Project Navigation -->
    <div class="mt-10 pt-8 border-t border-line flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
      ${prevProject ? `
        <a href="#project/${prevProject.id}" class="flex-1 bg-surface border border-line rounded-xl p-4 hover:border-brand transition-colors focus-ring">
          <div class="text-xs font-mono text-inkMuted mb-1">← 이전 프로젝트</div>
          <div class="font-bold text-ink text-sm sm:text-base">${prevProject.title}</div>
        </a>
      ` : '<div class="flex-1"></div>'}

      ${nextProject ? `
        <a href="#project/${nextProject.id}" class="flex-1 bg-surface border border-line rounded-xl p-4 hover:border-brand transition-colors text-right focus-ring">
          <div class="text-xs font-mono text-inkMuted mb-1">다음 프로젝트 →</div>
          <div class="font-bold text-ink text-sm sm:text-base">${nextProject.title}</div>
        </a>
      ` : '<div class="flex-1"></div>'}
    </div>
  `;
}


/**
 * 4. About Section Component (깔끔하게 통합된 카드 구조 + 가로형 화살표 연표)
 */
let aboutTimelineTimers = [];
let aboutTimelineCurrentIndex = 0;
let aboutTimelineResizeBound = false;

function clearAboutTimelineTimers() {
  aboutTimelineTimers.forEach(id => clearTimeout(id));
  aboutTimelineTimers = [];
}

function addAboutTimelineTimer(fn, delay) {
  const id = setTimeout(fn, delay);
  aboutTimelineTimers.push(id);
  return id;
}

function renderAboutComponent() {
  const container = document.getElementById('aboutContainer');
  if (!container) return;

  const { profile, about } = PORTFOLIO_DATA;

  // Section 2 Left: 관심 분야 (단일 카드 내부의 깔끔한 리스트)
  const interestsListHtml = about.interests.map(item => `
    <li class="flex items-center gap-4 p-4 rounded-2xl bg-bgMain border border-line/80">
      <div class="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center shrink-0">
        <i class="${item.icon} text-sm"></i>
      </div>
      <span class="font-medium text-ink text-[15px] sm:text-base leading-snug">
        ${item.title}
      </span>
    </li>
  `).join('');

  // Section 2 Right: 현재 배우고 있는 기술 (단일 카드 내부의 깔끔한 리스트)
  const learningListHtml = about.currentlyLearning.map(item => `
    <li class="flex items-center gap-4 p-4 rounded-2xl bg-bgMain border border-line/80">
      <div class="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center shrink-0">
        <i class="${item.icon} text-sm"></i>
      </div>
      <span class="font-medium text-ink text-[15px] sm:text-base leading-snug">
        ${item.title}
      </span>
    </li>
  `).join('');

  // Section 3: 협업 방식 및 핵심 가치관 (불필요한 영문 배지/하단 문구 없이 깔끔하게 정리)
  const valuesItemsHtml = about.collaborationValues.map(val => `
    <div class="p-6 sm:p-7 rounded-2xl bg-bgMain border border-line/90 flex flex-col">
      <div class="flex items-center gap-3 mb-3.5">
        <div class="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center shrink-0">
          <i class="${val.icon} text-sm"></i>
        </div>
        <h3 class="font-display text-lg font-bold text-ink">
          ${val.title}
        </h3>
      </div>
      <p class="text-inkSub text-sm sm:text-[15px] leading-relaxed">
        ${val.desc}
      </p>
    </div>
  `).join('');

  // Section 4: 가로형 화살표 연표 말풍선 (불필요한 Step 문구·아이콘 제거, 꼬리 중앙 정렬)
  const timelineMilestonesHtml = about.timeline.map((item, idx) => `
    <div
      class="timeline-milestone relative flex flex-col items-center justify-end ${idx === 0 ? 'is-active' : ''}"
      data-timeline-index="${idx}"
      tabindex="0"
      role="button"
      aria-label="${item.period} ${item.keyword}"
    >
      <div class="timeline-bubble w-full text-left">
        <div class="mb-1.5">
          <span class="inline-block font-mono text-xs font-bold text-brand bg-brand-light px-2.5 py-0.5 rounded-full">
            ${item.period}
          </span>
        </div>

        <div class="font-display font-bold text-ink text-sm sm:text-base leading-snug">
          ${item.keyword}
        </div>

        <div class="timeline-bubble-details border-t border-line/80 pt-3">
          <div class="text-xs font-bold text-brand mb-1">
            ${item.organization}
          </div>
          <div class="font-bold text-ink text-sm mb-1.5">
            ${item.role}
          </div>
          <p class="text-xs sm:text-[13.5px] text-inkSub leading-relaxed">
            ${item.desc}
          </p>
        </div>
      </div>
    </div>
  `).join('');

  const timelineTrackAnchorsHtml = about.timeline.map((_, idx) => `
    <div
      class="timeline-track-anchor ${idx === 0 ? 'is-active' : ''}"
      data-anchor-index="${idx}"
    ></div>
  `).join('');

  container.innerHTML = `
    <!-- SECTION 1: 프로필 & 자기소개 -->
    <div class="fade-up scroll-mt-28">
      <div class="bg-surface rounded-3xl border border-line p-7 sm:p-10 md:p-12 shadow-sm">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <!-- Left: Profile Photo & Name (불필요한 버튼 제거, 소속·역할 한 줄 표시) -->
          <div class="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div class="w-48 sm:w-56 lg:w-64 aspect-square rounded-2xl overflow-hidden bg-bgSub border border-line mb-5">
              <img
                src="${profile.avatarImg}"
                alt="${profile.name} 프로필"
                onerror="this.onerror=null; this.src='${profile.avatarFallback}';"
                class="w-full h-full object-cover"
              >
            </div>
            <h2 class="font-display text-2xl font-extrabold text-ink mb-1">${profile.name} (${profile.englishName})</h2>
            <p class="text-sm text-inkMuted whitespace-nowrap">${profile.school} · ${profile.role}</p>
          </div>

          <!-- Right: Clean Bio -->
          <div class="lg:col-span-7">
            <h3 class="font-display text-xl sm:text-2xl font-extrabold text-ink mb-4">
              자기소개
            </h3>
            <p class="text-ink font-medium text-base sm:text-lg leading-relaxed mb-4">
              ${about.introLead}
            </p>
            <p class="text-inkSub text-[15.5px] sm:text-base leading-relaxed">
              ${about.introBody}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 2: 관심 분야 & 현재 배우고 있는 기술 (하나의 통합 카드로 깔끔하게 정리) -->
    <div class="fade-up scroll-mt-28">
      <div class="bg-surface rounded-3xl border border-line p-7 sm:p-10 md:p-12 shadow-sm">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-line">
          <!-- Left: 관심 분야 -->
          <div>
            <h2 class="font-display text-xl sm:text-2xl font-extrabold text-ink mb-6 flex items-center gap-2.5">
              <i class="fa-solid fa-compass text-brand text-lg"></i>
              <span>관심 분야</span>
            </h2>
            <ul class="space-y-3.5">
              ${interestsListHtml}
            </ul>
          </div>

          <!-- Right: 현재 배우고 있는 기술 -->
          <div class="pt-8 lg:pt-0 lg:pl-12">
            <h2 class="font-display text-xl sm:text-2xl font-extrabold text-ink mb-6 flex items-center gap-2.5">
              <i class="fa-solid fa-seedling text-brand text-lg"></i>
              <span>현재 배우고 있는 기술</span>
            </h2>
            <ul class="space-y-3.5">
              ${learningListHtml}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 3: 협업 방식 및 핵심 가치관 (하나의 통합 카드로 깔끔하게 정리) -->
    <div class="fade-up scroll-mt-28">
      <div class="bg-surface rounded-3xl border border-line p-7 sm:p-10 md:p-12 shadow-sm">
        <h2 class="font-display text-xl sm:text-2xl font-extrabold text-ink mb-7 flex items-center gap-2.5">
          <i class="fa-solid fa-handshake-simple text-brand text-lg"></i>
          <span>협업 방식 및 핵심 가치관</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${valuesItemsHtml}
        </div>
      </div>
    </div>

    <!-- SECTION 4: 경력 및 성장 과정 (가로형 화살표 연표) -->
    <div class="fade-up scroll-mt-28" id="aboutTimelineSection">
      <div class="bg-surface rounded-3xl border border-line p-7 sm:p-10 md:p-12 shadow-sm">
        <h2 class="font-display text-xl sm:text-2xl font-extrabold text-ink mb-8 flex items-center gap-2.5">
          <i class="fa-solid fa-route text-brand text-lg"></i>
          <span>경력 및 성장 과정</span>
        </h2>

        <!-- Horizontal Arrow Timeline Wrapper -->
        <div class="relative pt-2 pb-4" id="horizontalTimelineWrapper">
          <!-- 3 Speech Bubbles Row (가장 긴 말풍선 펼침 높이를 기준으로 고정) -->
          <div id="timelineBubblesRow" class="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 items-end" style="height: 335px;">
            ${timelineMilestonesHtml}
          </div>

          <!-- Horizontal Arrow Track positioned directly beneath the Speech Bubble tails -->
          <div class="mt-5">
            <div class="timeline-arrow-track w-full" id="timelineArrowTrack">
              <!-- Progress Fill Bar -->
              <div
                id="timelineProgressFill"
                class="timeline-progress-fill"
                style="width: 16%;"
              ></div>

              <!-- Static Anchor Points directly under each speech bubble tail -->
              ${timelineTrackAnchorsHtml}

              <!-- Moving Indicator Dot -->
              <div
                id="timelineMovingDot"
                class="timeline-moving-dot"
                style="left: 16%;"
                aria-hidden="true"
              ></div>

              <!-- Right Arrowhead -->
              <div class="timeline-arrow-head" aria-hidden="true"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  initAboutHorizontalTimeline();
}

/**
 * 각 말풍선 꼬리(가로 중앙)의 정확한 좌표를 계산하여 화살표 트랙 위의 점 위치를 동기화하고,
 * 각 말풍선에서 정확히 5초(5000ms) 동안 머무른 뒤 다음 말풍선 꼬리 아래로 천천히 이동합니다.
 * 마지막 말풍선이 끝나면 화살표 끝(100%)까지 이동한 뒤 자연스럽게 처음(0%)으로 돌아와 다시 진행합니다.
 */
/**
 * 모든 말풍선을 전부 펼쳤을 때 가장 길이가 긴 말풍선의 높이를 실측하여,
 * 접힌 상태 높이(--bubble-collapsed-h), 펼쳐진 상태 높이(--bubble-expanded-h),
 * 그리고 타임라인 전체 행 높이(#timelineBubblesRow)를 가장 긴 말풍선 기준으로 고정합니다.
 */
function measureAndLockAboutTimelineHeights() {
  const wrapper = document.getElementById('horizontalTimelineWrapper');
  const row = document.getElementById('timelineBubblesRow');
  if (!wrapper || !row) return;

  // 숨겨진 상태(display: none)에서는 실측 생략
  if (wrapper.offsetParent === null) return;

  const bubbles = Array.from(wrapper.querySelectorAll('.timeline-bubble'));
  const detailsList = Array.from(wrapper.querySelectorAll('.timeline-bubble-details'));
  if (!bubbles.length) return;

  // 트랜지션 일시 중지 후 정확한 자연 높이 측정
  bubbles.forEach(b => {
    b.style.transition = 'none';
  });
  detailsList.forEach(d => {
    d.style.transition = 'none';
  });

  // 1. 기본(접힌) 상태에서 가장 긴 말풍선 높이 측정
  let maxCollapsedH = 88;
  bubbles.forEach((b, i) => {
    const d = detailsList[i];
    b.style.height = 'auto';
    b.style.padding = '1rem 1.2rem';
    if (d) {
      d.style.maxHeight = '0px';
      d.style.opacity = '0';
      d.style.marginTop = '0px';
    }
    const h = b.scrollHeight;
    if (h > maxCollapsedH) maxCollapsedH = h;
  });

  // 2. 전부 펼쳤을 때 가장 길이가 긴 말풍선 높이 측정
  let maxExpandedH = 260;
  bubbles.forEach((b, i) => {
    const d = detailsList[i];
    b.style.height = 'auto';
    b.style.padding = '1.25rem 1.35rem';
    if (d) {
      d.style.maxHeight = 'none';
      d.style.opacity = '1';
      d.style.marginTop = '0.75rem';
    }
    const h = b.scrollHeight;
    if (h > maxExpandedH) maxExpandedH = h;
  });

  // 여유 버퍼 추가 (텍스트 잘림 완전 방지)
  const lockedCollapsedH = maxCollapsedH + 4;
  const lockedExpandedH = maxExpandedH + 10;

  wrapper.style.setProperty('--bubble-collapsed-h', `${lockedCollapsedH}px`);
  wrapper.style.setProperty('--bubble-expanded-h', `${lockedExpandedH}px`);
  wrapper.style.setProperty('--bubble-details-max-h', `${lockedExpandedH}px`);
  row.style.height = `${Math.ceil(lockedExpandedH * 1.03) + 16}px`;

  // 인라인 측정 스타일 제거 및 리플로우 후 트랜지션 복원
  bubbles.forEach(b => {
    b.style.height = '';
    b.style.padding = '';
  });
  detailsList.forEach(d => {
    d.style.maxHeight = '';
    d.style.opacity = '';
    d.style.marginTop = '';
  });

  void wrapper.offsetWidth;

  bubbles.forEach(b => {
    b.style.transition = '';
  });
  detailsList.forEach(d => {
    d.style.transition = '';
  });
}

function getAboutTimelineCentersPercent() {
  const wrapper = document.getElementById('horizontalTimelineWrapper');
  const track = document.getElementById('timelineArrowTrack');
  if (!wrapper || !track) return [15.5, 50, 84.5];

  measureAndLockAboutTimelineHeights();

  const milestones = Array.from(wrapper.querySelectorAll('.timeline-milestone'));
  const anchors = Array.from(track.querySelectorAll('.timeline-track-anchor'));
  const trackRect = track.getBoundingClientRect();

  const centersPercent = milestones.map((el, idx) => {
    const rect = el.getBoundingClientRect();
    if (trackRect.width > 0 && rect.width > 0) {
      const centerX = (rect.left + rect.width / 2) - trackRect.left;
      return (centerX / trackRect.width) * 100;
    }
    return idx === 0 ? 15.5 : idx === 1 ? 50 : 84.5;
  });

  anchors.forEach((anchorEl, idx) => {
    if (centersPercent[idx] !== undefined) {
      anchorEl.style.left = `${centersPercent[idx]}%`;
    }
  });

  return centersPercent;
}

function syncAboutTimelinePositions(activeIndex) {
  const wrapper = document.getElementById('horizontalTimelineWrapper');
  const track = document.getElementById('timelineArrowTrack');
  const dot = document.getElementById('timelineMovingDot');
  const fill = document.getElementById('timelineProgressFill');
  if (!wrapper || !track || !dot || !fill) return;

  const milestones = Array.from(wrapper.querySelectorAll('.timeline-milestone'));
  const anchors = Array.from(track.querySelectorAll('.timeline-track-anchor'));
  if (!milestones.length) return;

  const centersPercent = getAboutTimelineCentersPercent();
  const safeIndex = ((activeIndex % milestones.length) + milestones.length) % milestones.length;
  const targetPercent = centersPercent[safeIndex];

  anchors.forEach((anchorEl, idx) => {
    anchorEl.classList.toggle('is-active', idx === safeIndex);
  });

  dot.style.left = `${targetPercent}%`;
  fill.style.width = `${targetPercent}%`;
}

function setAboutTimelineStep(index, immediate = false) {
  const wrapper = document.getElementById('horizontalTimelineWrapper');
  const track = document.getElementById('timelineArrowTrack');
  const dot = document.getElementById('timelineMovingDot');
  const fill = document.getElementById('timelineProgressFill');
  if (!wrapper || !track || !dot || !fill) return;

  const milestones = Array.from(wrapper.querySelectorAll('.timeline-milestone'));
  const anchors = Array.from(track.querySelectorAll('.timeline-track-anchor'));
  if (!milestones.length) return;

  const safeIndex = ((index % milestones.length) + milestones.length) % milestones.length;
  aboutTimelineCurrentIndex = safeIndex;

  clearAboutTimelineTimers();
  dot.classList.remove('no-transition');
  fill.classList.remove('no-transition');
  dot.style.opacity = '1';
  fill.style.opacity = '1';

  if (immediate) {
    milestones.forEach((el, idx) => {
      el.classList.toggle('is-active', idx === safeIndex);
    });
    syncAboutTimelinePositions(safeIndex);

    // 현재 말풍선에서 5초(5000ms) 동안 멈추었다가 다음 단계로 진행
    addAboutTimelineTimer(() => {
      advanceToNextAboutMilestone();
    }, 5000);
  } else {
    // 1. 먼저 이전 말풍선을 부드럽게 접으면서 점을 다음 말풍선 꼬리 아래로 천천히 이동 (1.75s)
    milestones.forEach(el => el.classList.remove('is-active'));
    anchors.forEach(a => a.classList.remove('is-active'));

    const centersPercent = getAboutTimelineCentersPercent();
    const targetPercent = centersPercent[safeIndex];
    dot.style.left = `${targetPercent}%`;
    fill.style.width = `${targetPercent}%`;

    // 2. 점이 말풍선 꼬리 아래에 도착할 무렵(1.35초 후) 말풍선을 천천히 펼치고, 그 상태 그대로 5초(5000ms) 동안 정지
    addAboutTimelineTimer(() => {
      milestones.forEach((el, idx) => {
        el.classList.toggle('is-active', idx === safeIndex);
      });
      anchors.forEach((a, idx) => {
        a.classList.toggle('is-active', idx === safeIndex);
      });

      addAboutTimelineTimer(() => {
        advanceToNextAboutMilestone();
      }, 5000);
    }, 1350);
  }
}

function advanceToNextAboutMilestone() {
  const wrapper = document.getElementById('horizontalTimelineWrapper');
  const track = document.getElementById('timelineArrowTrack');
  const dot = document.getElementById('timelineMovingDot');
  const fill = document.getElementById('timelineProgressFill');
  if (!wrapper || !track || !dot || !fill) return;

  const milestones = Array.from(wrapper.querySelectorAll('.timeline-milestone'));
  const anchors = Array.from(track.querySelectorAll('.timeline-track-anchor'));
  if (!milestones.length) return;

  // 마지막 말풍선(3번째)이 끝난 경우:
  // 1. 말풍선을 천천히 접고 화살표 끝(100%)까지 이동하는 모션 수행
  // 2. 화살표 끝에 도달한 뒤 자연스럽게 처음(0%)으로 돌아와 첫 번째 말풍선으로 다시 진행
  if (aboutTimelineCurrentIndex >= milestones.length - 1) {
    clearAboutTimelineTimers();

    // 마지막 말풍선 접기 + 화살표 끝(100%)까지 천천히 이동
    milestones.forEach(el => el.classList.remove('is-active'));
    anchors.forEach(a => a.classList.remove('is-active'));
    dot.style.left = '100%';
    fill.style.width = '100%';

    // 화살표 끝(100%)에 도달한 후 부드럽게 페이드아웃하며 시작점(0%)으로 리셋
    addAboutTimelineTimer(() => {
      dot.style.opacity = '0';
      fill.style.opacity = '0';

      addAboutTimelineTimer(() => {
        dot.classList.add('no-transition');
        fill.classList.add('no-transition');
        dot.style.left = '0%';
        fill.style.width = '0%';

        // 강제 리플로우 후 트랜지션 복구 및 시작점(0%)에서 페이드인하며 첫 번째 말풍선으로 자연스럽게 이동
        void dot.offsetWidth;
        dot.classList.remove('no-transition');
        fill.classList.remove('no-transition');
        dot.style.opacity = '1';
        fill.style.opacity = '1';

        addAboutTimelineTimer(() => {
          setAboutTimelineStep(0, false);
        }, 120);
      }, 550);
    }, 1750);
  } else {
    setAboutTimelineStep(aboutTimelineCurrentIndex + 1, false);
  }
}

function initAboutHorizontalTimeline() {
  const wrapper = document.getElementById('horizontalTimelineWrapper');
  const section = document.getElementById('aboutTimelineSection');
  if (!wrapper) return;

  const milestones = Array.from(wrapper.querySelectorAll('.timeline-milestone'));
  if (!milestones.length) return;

  // 말풍선 클릭 시 해당 말풍선으로 즉시 이동 후 5초 정지 타이머 재시작 (마우스 호버로 자동 이동이 멈추지 않도록 유지)
  milestones.forEach((el, idx) => {
    el.addEventListener('click', () => {
      setAboutTimelineStep(idx, false);
    });

    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setAboutTimelineStep(idx, false);
      }
    });
  });

  if (!aboutTimelineResizeBound) {
    aboutTimelineResizeBound = true;
    window.addEventListener('resize', () => {
      syncAboutTimelinePositions(aboutTimelineCurrentIndex);
    });
  }

  // 스크롤하여 경력 섹션이 화면에 보일 때 첫 번째 말풍선 꼬리 아래에서 시작하여 5초 후 자동 이동
  if (section && 'IntersectionObserver' in window) {
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAboutTimelineStep(0, true);
        }
      });
    }, { threshold: 0.25 });
    timelineObserver.observe(section);
  }

  setAboutTimelineStep(0, true);
}


/**
 * 5. Contact Section Component (SNS: ONLY GitHub & Instagram @minlnxuk_)
 */
function renderContactComponent() {
  const container = document.getElementById('contactContainer');
  if (!container) return;

  const { contact } = PORTFOLIO_DATA;

  const socialsHtml = contact.socials.map(social => `
    <a
      href="${social.url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${social.name}"
      class="flex items-center gap-3.5 p-4 rounded-xl bg-surface border border-line hover:border-brand hover:bg-brand-light/40 transition-all focus-ring group"
    >
      <span class="w-10 h-10 rounded-lg bg-brand-light text-brand group-hover:bg-brand group-hover:text-white transition-colors flex items-center justify-center text-lg">
        <i class="${social.icon}"></i>
      </span>
      <div>
        <div class="text-sm font-bold text-ink">${social.name}</div>
        <div class="text-xs font-mono text-inkMuted">${social.handle}</div>
      </div>
    </a>
  `).join('');

  container.innerHTML = `
    <!-- Left Column: Title, Guide, Email, GitHub & Instagram Links -->
    <div class="lg:col-span-5 fade-up">
      <span class="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-brand bg-brand-light px-3 py-1 rounded-full mb-3">
        Get In Touch
      </span>
      <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-4">
        ${contact.title}
      </h2>
      <p class="text-inkSub text-base leading-relaxed mb-8">
        ${contact.description}
      </p>

      <!-- Direct Email Box -->
      <div class="p-5 rounded-2xl bg-surface border border-line mb-6">
        <div class="text-xs font-mono uppercase tracking-wider text-inkMuted mb-1">Direct Email</div>
        <a href="mailto:${contact.email}" class="font-display text-lg font-bold text-brand hover:underline break-all focus-ring rounded">
          ${contact.email}
        </a>
      </div>

      <!-- SNS Links (Strictly GitHub & Instagram @minlnxuk_) -->
      <div class="space-y-3">
        <div class="text-xs font-mono uppercase tracking-wider text-inkMuted font-semibold">Social Channels</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          ${socialsHtml}
        </div>
      </div>
    </div>

    <!-- Right Column: Contact Form -->
    <div class="lg:col-span-7 fade-up delay-100">
      <form id="contactForm" class="bg-surface rounded-2xl border border-line p-7 sm:p-9 shadow-sm space-y-5">
        <div>
          <label for="senderName" class="block text-sm font-semibold text-ink mb-2">이름</label>
          <input
            type="text"
            id="senderName"
            name="senderName"
            required
            autocomplete="name"
            spellcheck="false"
            placeholder="홍길동"
            class="w-full px-4 py-3 rounded-xl bg-bgMain border border-line text-ink placeholder:text-inkMuted text-sm focus:bg-surface transition-colors"
          >
        </div>

        <div>
          <label for="senderEmail" class="block text-sm font-semibold text-ink mb-2">이메일</label>
          <input
            type="email"
            id="senderEmail"
            name="senderEmail"
            required
            inputmode="email"
            autocomplete="email"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            lang="en"
            placeholder="example@email.com"
            class="w-full px-4 py-3 rounded-xl bg-bgMain border border-line text-ink placeholder:text-inkMuted text-sm focus:bg-surface transition-colors"
          >
        </div>

        <div>
          <label for="senderMessage" class="block text-sm font-semibold text-ink mb-2">메시지</label>
          <textarea
            id="senderMessage"
            name="senderMessage"
            rows="5"
            required
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            placeholder="나누고 싶은 이야기나 문의 내용을 편하게 작성해 주세요."
            class="w-full px-4 py-3 rounded-xl bg-bgMain border border-line text-ink placeholder:text-inkMuted text-sm focus:bg-surface transition-colors resize-y break-words"
          ></textarea>
        </div>

        <button
          type="submit"
          class="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand text-white text-sm font-semibold focus-ring"
        >
          <span>메시지 보내기</span>
          <i class="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </form>
    </div>
  `;

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalHtml = submitBtn.innerHTML;
      const senderName = (document.getElementById('senderName')?.value || '').trim();
      const senderEmail = (document.getElementById('senderEmail')?.value || '').trim();
      const senderMessage = (document.getElementById('senderMessage')?.value || '').trim();

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>전송 중...</span>';

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: senderName,
            email: senderEmail,
            message: senderMessage,
            _subject: `[포트폴리오 새 메시지] ${senderName}님의 문의가 도착했습니다`,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const result = await response.json().catch(() => ({}));

        if (response.ok && (result.success === 'true' || result.success === true)) {
          form.reset();
          showToast(`${contact.email}로 메시지와 알림이 즉시 전송되었습니다!`);
        } else {
          // 최초 1회 이메일 인증 전이거나 네트워크 제한 시 메일 앱으로도 즉시 연결 보장
          const subject = encodeURIComponent(`[포트폴리오 문의] ${senderName}님의 메시지`);
          const body = encodeURIComponent(`보낸 사람: ${senderName} (${senderEmail})\n\n메시지 내용:\n${senderMessage}`);
          window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
          form.reset();
          showToast(`${contact.email}로 알림 메일 전송을 요청했습니다.`);
        }
      } catch (err) {
        const subject = encodeURIComponent(`[포트폴리오 문의] ${senderName}님의 메시지`);
        const body = encodeURIComponent(`보낸 사람: ${senderName} (${senderEmail})\n\n메시지 내용:\n${senderMessage}`);
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
        form.reset();
        showToast(`${contact.email}로 메일 전송 창을 열었습니다.`);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;
      }
    });
  }
}


/**
 * 6. Footer Component (Copyright + Email + GitHub & Instagram @minlnxuk_)
 */
function renderFooterComponent() {
  const container = document.getElementById('footerContainer');
  if (!container) return;

  const { profile, contact } = PORTFOLIO_DATA;

  const socialIconsHtml = contact.socials.map(social => `
    <a
      href="${social.url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${social.name} (${social.handle})"
      title="${social.name} (${social.handle})"
      class="w-9 h-9 rounded-lg bg-surface border border-line text-inkSub hover:text-brand hover:border-brand flex items-center justify-center transition-colors focus-ring"
    >
      <i class="${social.icon}"></i>
    </a>
  `).join('');

  container.innerHTML = `
    <div class="text-sm text-inkSub text-center sm:text-left">
      <p class="font-semibold text-ink">&copy; 2026 ${profile.englishName} (${profile.name}). All rights reserved.</p>
      <p class="text-xs text-inkMuted mt-0.5">Designed &amp; built with clarity and purpose.</p>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-4">
      <a href="mailto:${contact.email}" class="text-sm font-medium text-inkSub hover:text-brand transition-colors focus-ring rounded px-1">
        ${contact.email}
      </a>
      <div class="flex items-center gap-2">
        ${socialIconsHtml}
      </div>
    </div>
  `;
}


/* ============================================================================
   INTERACTIONS, ROUTER & INITIALIZATION
   ============================================================================ */

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add('is-shown');
  setTimeout(() => {
    toast.classList.remove('is-shown');
  }, 3200);
}

function observeFadeUpElements() {
  const elements = document.querySelectorAll('.fade-up');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  elements.forEach(el => observer.observe(el));
}

function handleRouteChange() {
  const hash = window.location.hash || '#home';
  const homeView = document.getElementById('homePageView');
  const projectsView = document.getElementById('projectsPageView');
  const aboutView = document.getElementById('aboutPageView');
  const contactView = document.getElementById('contactPageView');
  const detailView = document.getElementById('projectDetailView');

  // Close left navigation drawer whenever route changes
  closeLeftNavDrawerImmediately();

  if (hash === '#projects') {
    // 1. Projects Page View (페이드 효과 없이 즉시 전환)
    if (homeView) homeView.classList.add('hidden');
    if (aboutView) aboutView.classList.add('hidden');
    if (contactView) contactView.classList.add('hidden');
    if (detailView) detailView.classList.add('hidden');
    if (projectsView) {
      projectsView.classList.remove('hidden');
      projectsView.querySelectorAll('.fade-up').forEach(el => el.classList.add('is-visible'));
    }
    window.scrollTo(0, 0);
    updateActiveNavItem('projects');
  } else if (hash === '#about') {
    // 2. About Page View (페이드 효과 없이 즉시 전환 + 스크롤에 따른 섹션별 순차 Fade-in 인터랙션)
    if (homeView) homeView.classList.add('hidden');
    if (projectsView) projectsView.classList.add('hidden');
    if (contactView) contactView.classList.add('hidden');
    if (detailView) detailView.classList.add('hidden');
    window.scrollTo(0, 0);
    if (aboutView) {
      aboutView.querySelectorAll('.fade-up').forEach(el => el.classList.remove('is-visible'));
      aboutView.classList.remove('hidden');
      observeFadeUpElements();
      window.requestAnimationFrame(() => {
        setAboutTimelineStep(0, true);
      });
    }
    updateActiveNavItem('about');
  } else if (hash === '#contact') {
    // 3. Contact Page View (독립 페이지 - 페이드 효과 없이 즉시 전환)
    if (homeView) homeView.classList.add('hidden');
    if (projectsView) projectsView.classList.add('hidden');
    if (aboutView) aboutView.classList.add('hidden');
    if (detailView) detailView.classList.add('hidden');
    if (contactView) {
      contactView.classList.remove('hidden');
      contactView.querySelectorAll('.fade-up').forEach(el => el.classList.add('is-visible'));
    }
    window.scrollTo(0, 0);
    updateActiveNavItem('contact');
  } else if (hash.startsWith('#project/')) {
    // 4. Individual Project Detail View (페이드 효과 없이 즉시 전환)
    const projectId = hash.replace('#project/', '').trim();
    if (homeView) homeView.classList.add('hidden');
    if (projectsView) projectsView.classList.add('hidden');
    if (aboutView) aboutView.classList.add('hidden');
    if (contactView) contactView.classList.add('hidden');
    if (detailView) {
      detailView.classList.remove('hidden');
      renderProjectDetailPage(projectId);
    }
    window.scrollTo(0, 0);
    updateActiveNavItem('projects');
  } else {
    // 5. Home View (처음 진입을 제외하면 페이드 효과 없이 즉시 전환, 타이핑 문구 무작위 갱신)
    const wasSubPageVisible =
      (projectsView && !projectsView.classList.contains('hidden')) ||
      (aboutView && !aboutView.classList.contains('hidden')) ||
      (contactView && !contactView.classList.contains('hidden')) ||
      (detailView && !detailView.classList.contains('hidden'));

    if (projectsView) projectsView.classList.add('hidden');
    if (aboutView) aboutView.classList.add('hidden');
    if (contactView) contactView.classList.add('hidden');
    if (detailView) detailView.classList.add('hidden');
    if (homeView) {
      homeView.classList.remove('hidden');
      if (wasSubPageVisible) {
        initHeroTypewriter();
      }
    }
    window.scrollTo(0, 0);
    updateActiveNavItem('home');
  }
}

function updateActiveNavItem(sectionId) {
  document.querySelectorAll('.logo-drawer-item').forEach(link => {
    const navTarget = link.getAttribute('data-nav');
    const isActive = navTarget === sectionId;
    link.classList.toggle('active', isActive);
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}

let closeLeftNavTimer = null;

function openLeftNavDrawer() {
  if (closeLeftNavTimer) clearTimeout(closeLeftNavTimer);
  const drawer = document.getElementById('leftNavDrawer');
  const backdrop = document.getElementById('leftNavBackdrop');
  const trigger = document.getElementById('headerLogoBtn');
  if (drawer) drawer.classList.add('is-open');
  if (backdrop) backdrop.classList.add('is-open');
  if (trigger) trigger.setAttribute('aria-expanded', 'true');
}

function scheduleCloseLeftNav() {
  if (closeLeftNavTimer) clearTimeout(closeLeftNavTimer);
  closeLeftNavTimer = setTimeout(() => {
    closeLeftNavDrawerImmediately();
  }, 500);
}

function closeLeftNavDrawerImmediately() {
  if (closeLeftNavTimer) clearTimeout(closeLeftNavTimer);
  const drawer = document.getElementById('leftNavDrawer');
  const backdrop = document.getElementById('leftNavBackdrop');
  const trigger = document.getElementById('headerLogoBtn');
  if (drawer) drawer.classList.remove('is-open');
  if (backdrop) backdrop.classList.remove('is-open');
  if (trigger) trigger.setAttribute('aria-expanded', 'false');
}

function initLeftNavDrawer() {
  const trigger = document.getElementById('headerLogoBtn');
  const logoContainer = document.getElementById('logoNavContainer');
  const drawer = document.getElementById('leftNavDrawer');
  const backdrop = document.getElementById('leftNavBackdrop');

  if (!drawer) return;

  // 1. Mouse hover on logo triggers drawer smoothly
  if (logoContainer) {
    logoContainer.addEventListener('mouseenter', () => {
      openLeftNavDrawer();
    });
    logoContainer.addEventListener('mouseleave', () => {
      scheduleCloseLeftNav();
    });
  }

  // 2. Mouse hover inside drawer keeps it open; mouseleave schedules close
  drawer.addEventListener('mouseenter', () => {
    if (closeLeftNavTimer) clearTimeout(closeLeftNavTimer);
  });
  drawer.addEventListener('mouseleave', () => {
    scheduleCloseLeftNav();
  });

  // 3. Click on logo button toggles drawer
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = drawer.classList.contains('is-open');
      if (isOpen) {
        closeLeftNavDrawerImmediately();
      } else {
        openLeftNavDrawer();
      }
    });
  }

  // 4. Backdrop click closes drawer
  if (backdrop) {
    backdrop.addEventListener('click', closeLeftNavDrawerImmediately);
  }

  // 5. Drawer menu links close drawer immediately; clicking Home re-runs random headline if already on Home
  drawer.querySelectorAll('.logo-drawer-item').forEach(item => {
    item.addEventListener('click', () => {
      const targetNav = item.getAttribute('data-nav');
      const currentHash = window.location.hash || '#home';
      closeLeftNavDrawerImmediately();
      if (targetNav === 'home' && (currentHash === '#home' || currentHash === '')) {
        initHeroTypewriter();
        window.scrollTo(0, 0);
      }
    });
  });

  // 6. Escape key closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLeftNavDrawerImmediately();
    }
  });
}

function initHeaderAndScrollSpy() {
  const header = document.getElementById('siteHeader');

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (header) {
      header.classList.toggle('is-scrolled', scrollY > 16);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  // Unified into initLeftNavDrawer()
}

/* ============================================================================
   HERO MOTIONS: RANDOM HEADLINE TYPEWRITER & COUNT-UP ANIMATION
   ============================================================================ */
let typewriterTimer = null;
let lastHeadlineIndex = -1;

function pickRandomHeadline() {
  const list = PORTFOLIO_DATA.profile.headlines;
  if (!Array.isArray(list) || list.length === 0) {
    return "문제를 해결하는 학생,\n김민혁입니다.";
  }
  if (list.length === 1) return list[0];

  let nextIdx = Math.floor(Math.random() * list.length);
  if (lastHeadlineIndex !== -1 && nextIdx === lastHeadlineIndex) {
    nextIdx = (nextIdx + 1 + Math.floor(Math.random() * (list.length - 1))) % list.length;
  }
  lastHeadlineIndex = nextIdx;
  return list[nextIdx];
}

function initHeroTypewriter() {
  const targetEl = document.getElementById('heroTypingText');
  const cursorEl = document.getElementById('heroTypingCursor');
  if (!targetEl) return;

  if (typewriterTimer) clearTimeout(typewriterTimer);

  const fullText = pickRandomHeadline();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const parts = fullText.split('\n');
    targetEl.innerHTML = `${parts[0]}<br><span class="text-brand">김민혁</span>입니다.`;
    if (cursorEl) cursorEl.style.display = 'none';
    return;
  }

  if (cursorEl) cursorEl.style.display = 'inline-block';

  let charIndex = 0;
  targetEl.innerHTML = '';

  function typeNextChar() {
    if (charIndex <= fullText.length) {
      const currentRaw = fullText.slice(0, charIndex);
      let formattedHtml = currentRaw;

      if (currentRaw.includes('\n')) {
        const parts = currentRaw.split('\n');
        const line1 = parts[0];
        const line2 = parts[1] || '';

        let nameFormatted = '';
        if (line2.length <= 3) {
          nameFormatted = `<span class="text-brand">${line2}</span>`;
        } else {
          nameFormatted = `<span class="text-brand">${line2.slice(0, 3)}</span>${line2.slice(3)}`;
        }
        formattedHtml = `${line1}<br>${nameFormatted}`;
      }

      targetEl.innerHTML = formattedHtml;
      charIndex++;

      if (charIndex <= fullText.length) {
        const isBreak = currentRaw.endsWith('\n');
        const delay = isBreak ? 240 : 65;
        typewriterTimer = setTimeout(typeNextChar, delay);
      } else {
        // 타이핑 완료 시 깜빡이는 입력 커서 선 즉시 제거
        if (cursorEl) cursorEl.style.display = 'none';
      }
    }
  }

  typewriterTimer = setTimeout(typeNextChar, 200);
}

function initHeroCounters() {
  const counterEls = document.querySelectorAll('.metric-counter');
  if (!counterEls.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counterEls.forEach(el => {
      const target = el.getAttribute('data-target') || '0';
      const suffix = el.getAttribute('data-suffix') || '';
      el.textContent = target + suffix;
    });
    return;
  }

  counterEls.forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1500;
    let startTimestamp = null;

    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      el.textContent = current + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    setTimeout(() => {
      window.requestAnimationFrame(step);
    }, 350);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeroComponent();
  renderProjectsComponent();
  renderAboutComponent();
  renderContactComponent();
  renderFooterComponent();

  initHeroTypewriter();
  initHeroCounters();

  observeFadeUpElements();
  initLeftNavDrawer();
  initHeaderAndScrollSpy();
  initMobileMenu();

  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange();
});
