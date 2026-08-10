'use strict';

/* ==========================================================================
   MEMBER DATA
   ========================================================================== */
const MEMBERS = [
  {
    id: 'm1',
    name: 'Nguyễn Văn A',
    major: 'Công nghệ thông tin',
    avatar: 'avatar1.png',
    shortBio:
      'Lập trình viên front-end với niềm đam mê xây dựng giao diện mượt mà, chú trọng chi tiết và trải nghiệm người dùng. Thích biến những ý tưởng phức tạp thành sản phẩm đơn giản, dễ dùng.',
    education: [
      {
        period: '2021 — 2025',
        title: 'Kỹ sư Công nghệ thông tin',
        org: 'Đại học Bách Khoa TP.HCM',
        desc: 'Chuyên ngành Kỹ thuật phần mềm. Tốt nghiệp loại Giỏi, GPA 3.6/4.0.',
      },
      {
        period: '2018 — 2021',
        title: 'Chuyên Toán — Tin',
        org: 'THPT Chuyên Lê Hồng Phong',
        desc: 'Thành viên đội tuyển Tin học của trường, giải Ba học sinh giỏi cấp thành phố.',
      },
    ],
    skills: [
      { name: 'JavaScript / TypeScript', level: 92 },
      { name: 'React & Vue', level: 88 },
      { name: 'UI/UX Design', level: 78 },
      { name: 'Node.js', level: 70 },
    ],
    experience: [
      {
        period: '2024 — Hiện tại',
        title: 'Front-end Developer',
        org: 'Công ty TNHH Giải pháp Số Việt',
        desc: 'Phát triển và tối ưu giao diện cho hệ thống quản trị nội bộ, phục vụ hơn 2.000 người dùng.',
      },
      {
        period: '2023 — 2024',
        title: 'Thực tập sinh Front-end',
        org: 'Startup EduTech',
        desc: 'Xây dựng thư viện component dùng chung, giảm 30% thời gian phát triển tính năng mới.',
      },
    ],
    projects: [
      {
        title: 'EduConnect',
        desc: 'Nền tảng học trực tuyến kết nối giảng viên và sinh viên, hỗ trợ lớp học ảo.',
        tags: ['React', 'WebRTC', 'Node.js'],
      },
      {
        title: 'Smart Attendance',
        desc: 'Ứng dụng điểm danh bằng nhận diện khuôn mặt cho phòng đào tạo.',
        tags: ['Python', 'OpenCV', 'Flask'],
      },
      {
        title: 'Portfolio Builder',
        desc: 'Công cụ kéo-thả giúp sinh viên tự tạo trang hồ sơ cá nhân.',
        tags: ['Vue', 'Vite'],
      },
    ],
    contact: [
      { label: 'Email', value: 'khang.nguyen@example.com', icon: '@', href: 'mailto:khang.nguyen@example.com' },
      { label: 'Điện thoại', value: '0901 234 567', icon: '#', href: 'tel:0901234567' },
      { label: 'GitHub', value: 'github.com/khangnguyen', icon: '</', href: 'https://github.com' },
      { label: 'LinkedIn', value: 'linkedin.com/in/khangnguyen', icon: 'in', href: 'https://linkedin.com' },
    ],
  },
  {
    id: 'm2',
    name: 'Trần Văn B',
    major: 'Khoa học máy tính',
    avatar: 'avatar2.png',
    shortBio:
      'Kỹ sư backend yêu thích hệ thống có khả năng mở rộng và dữ liệu lớn. Luôn tìm cách tối ưu hiệu năng và độ tin cậy của hệ thống.',
    education: [
      {
        period: '2020 — 2024',
        title: 'Cử nhân Khoa học máy tính',
        org: 'Đại học Khoa học Tự nhiên, ĐHQG-HCM',
        desc: 'Định hướng Hệ thống thông tin. Đề tài tốt nghiệp về xử lý dữ liệu thời gian thực.',
      },
    ],
    skills: [
      { name: 'Java & Spring Boot', level: 90 },
      { name: 'Golang', level: 75 },
      { name: 'PostgreSQL / Redis', level: 85 },
      { name: 'Kiến trúc Microservices', level: 80 },
    ],
    experience: [
      {
        period: '2024 — Hiện tại',
        title: 'Backend Developer',
        org: 'Ví điện tử FinPay',
        desc: 'Thiết kế và vận hành hệ thống xử lý giao dịch, đảm bảo thời gian hoạt động 99.9%.',
      },
      {
        period: '2022 — 2024',
        title: 'Trợ giảng môn Cấu trúc dữ liệu',
        org: 'Đại học Khoa học Tự nhiên',
        desc: 'Hướng dẫn thực hành cho hơn 150 sinh viên mỗi học kỳ.',
      },
    ],
    projects: [
      {
        title: 'PayStream',
        desc: 'Hệ thống xử lý thanh toán thời gian thực với khả năng chịu lỗi cao.',
        tags: ['Golang', 'Kafka', 'Docker'],
      },
      {
        title: 'DataLake Mini',
        desc: 'Kho dữ liệu thu nhỏ phục vụ phân tích hành vi người dùng.',
        tags: ['Spark', 'PostgreSQL'],
      },
    ],
    contact: [
      { label: 'Email', value: 'ngoc.tran@example.com', icon: '@', href: 'mailto:ngoc.tran@example.com' },
      { label: 'Điện thoại', value: '0912 345 678', icon: '#', href: 'tel:0912345678' },
      { label: 'GitHub', value: 'github.com/baongoctran', icon: '</', href: 'https://github.com' },
    ],
  },
  {
    id: 'm3',
    name: 'Lê Thị C',
    major: 'Thiết kế đồ họa & UI/UX',
    avatar: 'avatar3.png',
    shortBio:
      'Nhà thiết kế tập trung vào trải nghiệm người dùng, kết hợp tư duy thẩm mỹ với dữ liệu hành vi để tạo ra sản phẩm vừa đẹp vừa hiệu quả.',
    education: [
      {
        period: '2021 — 2025',
        title: 'Cử nhân Thiết kế Truyền thông',
        org: 'Đại học Kiến trúc TP.HCM',
        desc: 'Chuyên sâu về UI/UX và thiết kế trải nghiệm số.',
      },
    ],
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'Thiết kế hệ thống (Design System)', level: 87 },
      { name: 'Prototyping', level: 90 },
      { name: 'HTML/CSS cơ bản', level: 60 },
    ],
    experience: [
      {
        period: '2023 — Hiện tại',
        title: 'Product Designer',
        org: 'Studio Sáng tạo Mộc',
        desc: 'Thiết kế giao diện cho 6 sản phẩm số, phối hợp chặt chẽ với đội ngũ kỹ thuật.',
      },
    ],
    projects: [
      {
        title: 'Hệ thống thiết kế Mộc UI',
        desc: 'Bộ component và nguyên tắc thiết kế dùng chung cho các sản phẩm nội bộ.',
        tags: ['Figma', 'Design Tokens'],
      },
      {
        title: 'Ứng dụng đặt lịch khám bệnh',
        desc: 'Thiết kế trải nghiệm đặt lịch trực quan cho người dùng lớn tuổi.',
        tags: ['UX Research', 'Prototyping'],
      },
      {
        title: 'Bộ nhận diện thương hiệu Local Coffee',
        desc: 'Thiết kế bộ nhận diện thương hiệu cho chuỗi quán cà phê địa phương.',
        tags: ['Branding', 'Illustration'],
      },
    ],
    contact: [
      { label: 'Email', value: 'phuonganh.le@example.com', icon: '@', href: 'mailto:phuonganh.le@example.com' },
      { label: 'Behance', value: 'behance.net/phuonganhle', icon: '◆', href: 'https://behance.net' },
      { label: 'Instagram', value: '@anh.designs', icon: 'IG', href: 'https://instagram.com' },
    ],
  },
  {
    id: 'm4',
    name: 'Phạm Văn D',
    major: 'Kỹ thuật phần mềm',
    avatar: 'avatar4.png',
    shortBio:
      'Kỹ sư full-stack thích khám phá công nghệ mới, đặc biệt quan tâm đến DevOps và tự động hoá quy trình phát triển phần mềm.',
    education: [
      {
        period: '2020 — 2024',
        title: 'Kỹ sư Kỹ thuật phần mềm',
        org: 'Đại học Công nghệ, ĐHQG Hà Nội',
        desc: 'Đồ án tốt nghiệp: Hệ thống CI/CD tự động cho ứng dụng vi dịch vụ.',
      },
    ],
    skills: [
      { name: 'Docker & Kubernetes', level: 84 },
      { name: 'CI/CD', level: 88 },
      { name: 'Python', level: 80 },
      { name: 'AWS', level: 75 },
    ],
    experience: [
      {
        period: '2024 — Hiện tại',
        title: 'DevOps Engineer',
        org: 'Trung tâm Dữ liệu Đám mây VNC',
        desc: 'Xây dựng pipeline triển khai tự động, giảm 40% thời gian phát hành phiên bản mới.',
      },
      {
        period: '2023',
        title: 'Thực tập sinh Kỹ thuật hệ thống',
        org: 'Ngân hàng số Timo',
        desc: 'Hỗ trợ giám sát hệ thống và tối ưu chi phí hạ tầng đám mây.',
      },
    ],
    projects: [
      {
        title: 'AutoDeploy',
        desc: 'Công cụ triển khai tự động hỗ trợ đa môi trường cho các đội phát triển nhỏ.',
        tags: ['Kubernetes', 'GitHub Actions'],
      },
      {
        title: 'Monitor Dash',
        desc: 'Bảng điều khiển giám sát hạ tầng thời gian thực.',
        tags: ['Grafana', 'Prometheus'],
      },
    ],
    contact: [
      { label: 'Email', value: 'duchuy.pham@example.com', icon: '@', href: 'mailto:duchuy.pham@example.com' },
      { label: 'Điện thoại', value: '0987 654 321', icon: '#', href: 'tel:0987654321' },
      { label: 'GitHub', value: 'github.com/duchuypham', icon: '</', href: 'https://github.com' },
    ],
  },
];

/* ==========================================================================
   TEAM TASKS — những task nhóm có thể nhận
   ========================================================================== */
const TEAM_TASKS = [
  {
    icon: '',
    title: 'Phát triển Web / App Full-stack',
    desc: 'Xây dựng ứng dụng từ giao diện đến máy chủ: front-end (React, Vue), back-end (Node.js, Spring Boot) và triển khai cloud.',
    basis: 'Dựa trên kỹ năng JavaScript/TypeScript (92%), Java & Spring Boot (90%), kinh nghiệm thực tế tại các công ty phần mềm của các thành viên.',
    tags: ['React', 'Vue', 'Node.js', 'Spring Boot'],
  },
  {
    icon: '',
    title: 'Thiết kế & tối ưu hệ thống dữ liệu',
    desc: 'Thiết kế schema, tối ưu query, xây dựng data pipeline và kho dữ liệu phục vụ phân tích hành vi người dùng.',
    basis: 'Dựa trên kỹ năng PostgreSQL/Redis (85%), Golang (75%), dự án DataLake Mini và PayStream xử lý giao dịch 99.9% uptime.',
    tags: ['PostgreSQL', 'Redis', 'Kafka', 'Spark'],
  },
  {
    icon: '',
    title: 'UI/UX Design & Design System',
    desc: 'Nghiên cứu người dùng, tạo prototype Figma, xây dựng design system nhất quán cho sản phẩm số đa nền tảng.',
    basis: 'Dựa trên kỹ năng Figma (95%), Prototyping (90%), kinh nghiệm thiết kế 6 sản phẩm số tại Studio Sáng tạo Mộc.',
    tags: ['Figma', 'UX Research', 'Design System', 'Prototyping'],
  },
  {
    icon: '',
    title: 'DevOps, CI/CD & Hạ tầng đám mây',
    desc: 'Thiết lập pipeline tự động hóa triển khai, giám sát hệ thống và quản lý hạ tầng trên AWS/GCP với Docker & Kubernetes.',
    basis: 'Dựa trên kỹ năng CI/CD (88%), Docker & Kubernetes (84%), kinh nghiệm giảm 40% thời gian phát hành tại Trung tâm Dữ liệu VNC.',
    tags: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
  },
  {
    icon: '',
    title: 'Tư vấn kiến trúc & Microservices',
    desc: 'Tư vấn lựa chọn kiến trúc phần mềm phù hợp, thiết kế hệ thống vi dịch vụ có khả năng mở rộng và chịu lỗi cao.',
    basis: 'Dựa trên kỹ năng Kiến trúc Microservices (80%), đề tài tốt nghiệp về hệ thống CI/CD vi dịch vụ và kinh nghiệm hệ thống tài chính FinPay.',
    tags: ['Microservices', 'System Design', 'Golang', 'Java'],
  },
  {
    icon: '',
    title: 'Branding & Nhận diện thương hiệu số',
    desc: 'Thiết kế bộ nhận diện thương hiệu, visual identity và tài liệu truyền thông số cho doanh nghiệp và sản phẩm.',
    basis: 'Dựa trên dự án nhận diện thương hiệu Local Coffee và bộ component Mộc UI, kết hợp tư duy thẩm mỹ và dữ liệu hành vi.',
    tags: ['Branding', 'Illustration', 'Figma', 'Design Tokens'],
  },
];

/* ==========================================================================
   CV SECTION DEFINITIONS
   ========================================================================== */
const CV_SECTIONS = [
  { key: 'intro',      label: 'Giới thiệu' },
  { key: 'personal',   label: 'Thông tin cá nhân' },
  { key: 'experience', label: 'Kinh nghiệm' },
  { key: 'projects',   label: 'Dự án' },
  { key: 'skills',     label: 'Kỹ năng' },
  { key: 'contact',    label: 'Liên hệ' },
];

/* ==========================================================================
   STATE
   ========================================================================== */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const VIEW_TRANSITION_MS = prefersReducedMotion ? 0 : 240;

let selectedIndex = -1;      // which member is currently in CV view
let isTransitioning = false; // guard against double-clicks/taps

/* ==========================================================================
   DOM REFERENCES
   ========================================================================== */
const el = {
  showcaseView: document.getElementById('showcaseView'),
  teamGrid:     document.getElementById('teamGrid'),
  cvView:       document.getElementById('cvView'),
  cvAvatarImg:  document.getElementById('cvAvatarImg'),
  cvName:       document.getElementById('cvName'),
  cvMajor:      document.getElementById('cvMajor'),
  cvIdTagText:  document.getElementById('cvIdTagText'),
  cvSideNav:    document.getElementById('cvSideNav'),
  cvContent:    document.getElementById('cvContent'),
  backBtn:      document.getElementById('backBtn'),
};

/* ==========================================================================
   HELPERS
   ========================================================================== */
function pad2(n) {
  return String(n).padStart(2, '0');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* ==========================================================================
   CV CONTENT RENDERING
   ========================================================================== */
function buildSectionHtml(member, key) {
  switch (key) {
    case 'intro':
      return `<p>${escapeHtml(member.shortBio)}</p>`;

    case 'personal':
      return `
        <div class="info-grid">
          <div class="info-item">
            <div class="info-item__label">Họ và tên</div>
            <div class="info-item__value">${escapeHtml(member.name)}</div>
          </div>
          <div class="info-item">
            <div class="info-item__label">Chuyên ngành</div>
            <div class="info-item__value">${escapeHtml(member.major)}</div>
          </div>
          <div class="info-item">
            <div class="info-item__label">Email</div>
            <div class="info-item__value">${escapeHtml(member.contact.find(c => c.label === 'Email')?.value || '—')}</div>
          </div>
          <div class="info-item">
            <div class="info-item__label">Điện thoại</div>
            <div class="info-item__value">${escapeHtml(member.contact.find(c => c.label === 'Điện thoại')?.value || '—')}</div>
          </div>
        </div>
      `;

    case 'education':
      return `
        <div class="timeline">
          ${member.education.map(e => `
            <div class="timeline-item">
              <div class="timeline-item__period">${escapeHtml(e.period)}</div>
              <div class="timeline-item__title">${escapeHtml(e.title)}</div>
              <div class="timeline-item__org">${escapeHtml(e.org)}</div>
              <div class="timeline-item__desc">${escapeHtml(e.desc)}</div>
            </div>`).join('')}
        </div>
      `;

    case 'skills':
      return `
        <div class="skill-list">
          ${member.skills.map(s => `
            <div class="skill-row">
              <div class="skill-row__top">
                <span class="skill-row__name">${escapeHtml(s.name)}</span>
                <span class="skill-row__level">${s.level}%</span>
              </div>
              <div class="skill-bar"><div class="skill-bar__fill" style="--fill:${s.level}%"></div></div>
            </div>`).join('')}
        </div>
      `;

    case 'experience':
      return `
        <div class="timeline">
          ${member.experience.map(e => `
            <div class="timeline-item">
              <div class="timeline-item__period">${escapeHtml(e.period)}</div>
              <div class="timeline-item__title">${escapeHtml(e.title)}</div>
              <div class="timeline-item__org">${escapeHtml(e.org)}</div>
              <div class="timeline-item__desc">${escapeHtml(e.desc)}</div>
            </div>`).join('')}
        </div>
      `;

    case 'projects':
      return `
        <div class="project-grid">
          ${member.projects.map(p => `
            <div class="project-card">
              <div class="project-card__title">${escapeHtml(p.title)}</div>
              <div class="project-card__desc">${escapeHtml(p.desc)}</div>
              <div class="project-card__tags">
                ${p.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
              </div>
            </div>`).join('')}
        </div>
      `;

    case 'contact':
      return `
        <div class="contact-list">
          ${member.contact.map(c => `
            <a class="contact-item" href="${c.href}" ${c.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
              <span class="contact-item__icon" aria-hidden="true">${escapeHtml(c.icon)}</span>
              <span>${escapeHtml(c.value)}</span>
            </a>`).join('')}
        </div>
      `;

    default:
      return '';
  }
}

/**
 * Renders the CV as a set of tab panels: only one section is visible at a
 * time, and the sidebar nav (always on screen) switches between them.
 * This keeps every important detail one click away instead of requiring
 * long scrolling.
 */
function renderCvContent(index) {
  const member = MEMBERS[index];

  el.cvAvatarImg.src = member.avatar;
  el.cvAvatarImg.alt = `Ảnh đại diện của ${member.name}`;
  el.cvName.textContent = member.name;
  el.cvMajor.textContent = member.major;
  el.cvIdTagText.textContent = `ID · ${pad2(index + 1)} / ${pad2(MEMBERS.length)}`;

  el.cvSideNav.innerHTML = CV_SECTIONS.map(
    (s, i) => `
    <li>
      <button type="button" class="cv-nav-btn" data-key="${s.key}">
        <span class="idx">${pad2(i + 1)}</span>${escapeHtml(s.label)}
      </button>
    </li>
  `
  ).join('');

  el.cvContent.innerHTML = CV_SECTIONS.map(
    (s, i) => `
    <section class="cv-section" id="sec-${s.key}" data-key="${s.key}">
      <div class="cv-section__head">
        <span class="cv-section__idx">${pad2(i + 1)}</span>
        <h3 class="cv-section__title">${escapeHtml(s.label)}</h3>
      </div>
      <div class="cv-section__body">${buildSectionHtml(member, s.key)}</div>
    </section>
  `
  ).join('');
}

function revealSections() {
  const sections = el.cvContent.querySelectorAll('.cv-section');
  if (prefersReducedMotion) {
    sections.forEach((s) => s.classList.add('is-visible'));
    return;
  }
  sections.forEach((s, i) => {
    s.style.animationDelay = `${i * 50}ms`;
  });
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      sections.forEach((s) => s.classList.add('is-visible'));
    });
  });
}

function setActiveNav(key) {
  el.cvSideNav.querySelectorAll('.cv-nav-btn').forEach((b) => {
    b.classList.toggle('is-active', b.dataset.key === key);
  });
}

// Clicking a nav item scrolls smoothly to that section — every section
// stays visible, nothing gets hidden.
el.cvSideNav.addEventListener('click', (e) => {
  const btn = e.target.closest('.cv-nav-btn');
  if (!btn) return;
  const target = document.getElementById(`sec-${btn.dataset.key}`);
  target?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  setActiveNav(btn.dataset.key);
});

// Scroll-spy: highlight whichever section is currently in view.
let sectionObserver = null;
function observeSections() {
  sectionObserver?.disconnect();
  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((en) => en.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveNav(visible.target.dataset.key);
    },
    { rootMargin: '-110px 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
  );
  el.cvContent.querySelectorAll('.cv-section').forEach((s) => sectionObserver.observe(s));
}

/* ==========================================================================
   TEAM GRID RENDERING
   ========================================================================== */
function renderTeamGrid() {
  el.teamGrid.innerHTML = '';
  MEMBERS.forEach((member, index) => {
    const card = document.createElement('article');
    card.className = 'member-card';
    card.setAttribute('role', 'listitem');
    card.dataset.index = String(index);

    card.innerHTML = `
      <span class="member-card__num" aria-hidden="true">${pad2(index + 1)}</span>
      <div class="member-card__avatar-wrap">
        <div class="member-card__avatar-ring" aria-hidden="true"></div>
        <img
          class="member-card__avatar"
          src="${member.avatar}"
          alt="Ảnh đại diện của ${escapeHtml(member.name)}"
          loading="${index < 2 ? 'eager' : 'lazy'}"
        >
      </div>
      <h2 class="member-card__name">${escapeHtml(member.name)}</h2>
      <p class="member-card__major">${escapeHtml(member.major)}</p>
      <button
        class="btn btn--card-cv"
        type="button"
        aria-label="Xem CV của ${escapeHtml(member.name)}"
      >
        <span class="btn__label">Xem CV</span>
        <span class="btn__icon" aria-hidden="true">→</span>
      </button>
    `;

    card.querySelector('.btn--card-cv').addEventListener('click', () => goToCv(index));

    el.teamGrid.appendChild(card);
  });
}

function getCardEl(index) {
  return el.teamGrid.querySelector(`[data-index="${index}"]`);
}

/* ==========================================================================
   VIEW TRANSITIONS — simple crossfade + slide, no multi-phase choreography
   ========================================================================== */
function goToCv(index) {
    if (isTransitioning) return;

    isTransitioning = true;
    selectedIndex = index;

    renderCvContent(index);
    el.cvAvatarImg.classList.add('is-visible');

    // window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: 'auto'
    // });

    // el.showcaseView.classList.remove('is-entering');
    // el.showcaseView.classList.add('is-leaving');

    setTimeout(() => {
        el.showcaseView.hidden = true;

        el.cvView.hidden = false;

        void el.cvView.offsetWidth;

        el.cvView.classList.remove('is-leaving');
        el.cvView.classList.add('is-entering');

        revealSections();
        observeSections();
        setActiveNav(CV_SECTIONS[0].key);

        // Tua tới CV content
        const cvContent = document.getElementById('cvView');

        if (cvContent) {
            cvContent.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        el.backBtn.focus({ preventScroll: true });

        isTransitioning = false;
    }, VIEW_TRANSITION_MS);
}

function goToShowcase() {
  if (isTransitioning) return;
  isTransitioning = true;

  sectionObserver?.disconnect();

  el.cvView.classList.remove('is-entering');
  el.cvView.classList.add('is-leaving');
  el.cvAvatarImg.classList.remove('is-visible');

  setTimeout(() => {
    el.cvView.hidden = true;

    el.showcaseView.hidden = false;
    void el.showcaseView.offsetWidth;
    el.showcaseView.classList.remove('is-leaving');
    el.showcaseView.classList.add('is-entering');
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const cardEl = getCardEl(selectedIndex);
    cardEl?.querySelector('.btn--card-cv')?.focus({ preventScroll: true });

    isTransitioning = false;
  }, VIEW_TRANSITION_MS);
}

/* ==========================================================================
   EVENTS
   ========================================================================== */
el.backBtn.addEventListener('click', goToShowcase);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !el.cvView.hidden) {
    goToShowcase();
  }
});

/* ==========================================================================
   TEAM TASKS RENDERING
   ========================================================================== */
function renderTeamTasks() {
  const container = document.getElementById('teamTasksGrid');
  if (!container) return;

  container.innerHTML = TEAM_TASKS.map((task, i) => `
    <article class="task-card" style="--delay:${i * 60}ms">
      <div class="task-card__icon" aria-hidden="true">${task.icon}</div>
      <h3 class="task-card__title">${escapeHtml(task.title)}</h3>
      <p class="task-card__desc">${escapeHtml(task.desc)}</p>
      <div class="task-card__basis">
        <span class="task-card__basis-label">Cơ sở</span>
        <p class="task-card__basis-text">${escapeHtml(task.basis)}</p>
      </div>
      <div class="task-card__tags">
        ${task.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   INIT
   ========================================================================== */
function init() {
  renderTeamGrid();
  renderTeamTasks();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

init();