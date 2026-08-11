'use strict';

/* ==========================================================================
   MEMBER DATA
   ========================================================================== */
const MEMBERS = [
  {
    id: 'm1',
    name: 'Huỳnh Nguyễn Chí Nghĩa',
    major: 'Công nghệ thông tin',
    avatar: 'avt2.jpg',
    shortBio:
      'Tôi là sinh viên ngành Thiết kế Đồ họa (Graphic Design), định hướng phát triển trong lĩnh vực thiết kế và dựng hình 3D. Tôi tập trung vào 3D modeling, environment design, lighting, material và rendering bằng Blender, đồng thời sử dụng Adobe Photoshop, Illustrator và Figma để hỗ trợ quá trình phát triển và trình bày dự án. Thông qua các đồ án học tập và dự án cá nhân, tôi đã rèn luyện khả năng xây dựng ý tưởng, triển khai mô hình và hoàn thiện sản phẩm 3D với bố cục và hình ảnh nhất quán. Tôi mong muốn tiếp tục học hỏi, tích lũy kinh nghiệm thực tế và phát triển chuyên môn trong môi trường thiết kế sáng tạo.',
  
skills: [
  { name: 'C# / .NET', level: 88 },
  { name: 'ASP.NET MVC / Web API', level: 85 },
  { name: 'SQL Server / Entity Framework', level: 80 },
  { name: 'JavaScript / TypeScript', level: 85 },
   { name: 'Blender', level:  75 },
    ],

experience: [
  {
    period: '1/2026 — 5/2026',
    title: 'Thực tập sinh Back-end Developer',
    org: 'TEKNIX TECHNOLOGY Ninh Kiều',
    desc: 'Tham gia vận hành hệ thống Microservices, phát triển và vận hành Backend cho các hệ thống thương mại, đồng thời tiếp cận và làm việc với các framework được sử dụng trong môi trường thực tế.'
  },
  {
    period: '2024 — Nay',
    title: 'Freelancer Hỗ trợ Lập trình C#, IOT, Game',
    org: 'FU-Coder',
    desc: 'Hỗ trợ sinh viên trong các dự án JavaScript/TypeScript, C#, phát triển Web thương mại, lập trình IoT và phát triển Game.'
  },
],



projects: [
  {
    title: 'FU-Ticket — Nền tảng bán vé sự kiện',
    desc: 'Nền tảng hỗ trợ người dùng mua vé và nhà tổ chức quản lý sự kiện. Dự án áp dụng kiến trúc Microservices và các công nghệ Backend hiện đại nhằm chuẩn hóa quy trình phát triển, vận hành và tích hợp hệ thống.',
    tags: ['React', 'Node.js', 'Microservices'],
  },
  {
    title: 'Smart Bus — Hệ thống giám sát xe đưa đón',
    desc: 'Hệ thống giám sát xe đưa đón học sinh mầm non và tiểu học, sử dụng ESP32 kết hợp các cảm biến để theo dõi trạng thái và môi trường trong xe, hỗ trợ phát hiện và hạn chế các sự cố như bỏ quên trẻ.',
    tags: ['ESP32', 'IoT', 'Python', 'Sensors'],
  },
  {
    title: 'Lumora Studio — Thương mại điện tử nội thất 3D',
    desc: 'Website thương mại điện tử về nội thất tích hợp trải nghiệm 3D trực quan bằng Babylon.js. Tập trung tối ưu hiệu năng, giao diện ổn định và nâng cao trải nghiệm người dùng.',
    tags: ['Vue.js', 'Vite', 'Babylon.js', '3D'],
  },
],



    contact: [
      { label: 'Email', value: 'nghiahn1308@gmail.com', icon: '@',  href: ''},
      { label: 'Điện thoại', value: '0389 371 488', icon: '#', href: 'tel:0389371488' },
       { label: 'Github', value: 'Nghiahnc', icon: '#', href: 'https://github.com/nghiahnc' },
    ],
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
  },
  {
    id: 'm2',
    name: 'Lý Thị Thanh Trúc',
    major: 'Thiết Kế Đồ Họa',
    avatar: 'avt1.jpeg',
    shortBio:
      'Tôi là sinh viên ngành Thiết kế Đồ họa (Graphic Design), định hướng phát triển trong lĩnh vực thiết kế và dựng hình 3D. Tôi tập trung vào 3D modeling, environment design, lighting, material và rendering bằng Blender, đồng thời sử dụng Adobe Photoshop, Illustrator và Figma để hỗ trợ quá trình phát triển và trình bày dự án. Thông qua các đồ án học tập và dự án cá nhân, tôi đã rèn luyện khả năng xây dựng ý tưởng, triển khai mô hình và hoàn thiện sản phẩm 3D với bố cục và hình ảnh nhất quán. Tôi mong muốn tiếp tục học hỏi, tích lũy kinh nghiệm thực tế và phát triển chuyên môn trong môi trường thiết kế sáng tạo.',
  
    skills: [
      { name: 'Blender / Maya', level: 80 },
      { name: 'Adobe Photoshop', level: 88 },
      { name: 'Adobe Illustrator', level: 78 },
      { name: 'Figma và Canva', level: 85 },
    ],
    experience: [
      {
        period: 'Tháng 1 2026- tháng 3 2026',
        title: 'Intern',
        org: 'Công ty truyền thông GDL Đà Lạt',
        desc: 'Thiết kế nội dung truyền thông cho Facebook, Instagram và TikTok. Tham gia sản xuất nội dung, chỉnh sửa hình ảnh và video ngắn. Phối hợp cùng đội ngũ sáng tạo để phát triển ý tưởng cho các chiến dịch truyền thông.',
      },
    ],



    projects: [
      {
        title: 'Rừng thông núi voi',
        desc: 'Tham gia thực hiện nội dung truyền thông cho địa điểm du lịch Rừng Thông Núi Voi (Đà Lạt). Phụ trách chụp ảnh, làm mẫu trong các buổi ghi hình và viết nội dung (content) cho các bài đăng trên nền tảng mạng xã hội. Phối hợp với đội ngũ sáng tạo để xây dựng hình ảnh thương hiệu và tăng mức độ tương tác của nội dung.',
      tags: ['Photography', 'Content Writing', 'Social Media', 'Brand Communication'],
      },
    ],




contact: [
  {
    label: 'Email',
    value: 'Lythithanhtruc.2004@gmail.com',
    icon: '',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=Lythithanhtruc.2004@gmail.com'
  },
  { label: 'Điện thoại', value: '0942 371 913', icon: '#', href: 'tel:0942371913' },
],

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
  }, {
    id: 'm3',
    name: 'Bùi Thị Bích Trăm  ',
    major: 'Kinh Doanh Quốc Tế',
    avatar: 'avt3.png',

shortBio:
  'Tôi là sinh viên ngành Kinh doanh Quốc tế, định hướng phát triển trong lĩnh vực Marketing và Truyền thông. Tôi có kinh nghiệm xây dựng nội dung cho Facebook, TikTok và Website, viết nội dung chuẩn SEO, lên ý tưởng và kịch bản video, đồng thời thiết kế ấn phẩm truyền thông bằng Canva. Bên cạnh đó, kinh nghiệm chăm sóc khách hàng giúp tôi phát triển khả năng giao tiếp, nắm bắt nhu cầu và xử lý tình huống. Tôi mong muốn tiếp tục tích lũy kinh nghiệm thực tế, phát triển tư duy marketing và tạo ra những nội dung có giá trị cho doanh nghiệp.',


 skills: [
  { name: 'Content Marketing', level: 85 },
  { name: 'Social Media', level: 85 },
  { name: 'TikTok / Content Writing', level: 82 },
  { name: 'Canva', level: 88 },
],

experience: [
  {
    period: '04/2023 - 09/2025',
    title: 'Nhân viên chăm sóc khách hàng',
    org: 'Trung Tâm Lông Mày Bích Ngân Brows – Cần Thơ',
    desc: `Tư vấn và hỗ trợ khách hàng trước và sau khi sử dụng dịch vụ.
Ghi nhận phản hồi, giải đáp thắc mắc và xử lý yêu cầu của khách hàng.
Phát triển kỹ năng giao tiếp, chăm sóc khách hàng và xử lý tình huống trong môi trường chuyên nghiệp.`,
  },

  {
    period: '01/2026 - 04/2026',
    title: 'Thực tập sinh Marketing',
    org: 'Công ty Cổ phần Thực phẩm Phạm Nghĩa',
    desc: `Lên ý tưởng và viết nội dung cho các kênh truyền thông của doanh nghiệp như Facebook, TikTok và Website, tập trung vào quảng bá sản phẩm và chương trình bán hàng.
Lên ý tưởng, xây dựng kịch bản và tham gia quay video TikTok theo định hướng bán hàng, giới thiệu sản phẩm, combo sản phẩm và chương trình khuyến mãi.
Viết bài chuẩn SEO cho Website dựa trên nghiên cứu từ khóa, nội dung đối thủ và kết quả tìm kiếm Google; triển khai nội dung phù hợp với sản phẩm của doanh nghiệp.
Thiết kế các ấn phẩm truyền thông trên Canva phục vụ Social Media, TikTok, chương trình Sampling và tuyển dụng theo guideline thương hiệu.
Nghiên cứu nội dung và xu hướng trên các nền tảng Social Media để phát triển ý tưởng mới, truyền tải USP và tăng nhận diện cho sản phẩm PHAM NGHIA FOOD.`,
  },
],




projects: [
  {
    title: 'marketing và truyền thông cho Công Ty – PHAM NGHIA FOOD',
    desc: 'Tham gia thực hiện các hoạt động marketing và truyền thông cho Công ty Cổ phần Thực phẩm Phạm Nghĩa. Phụ trách lên ý tưởng và viết nội dung cho Facebook, TikTok và Website; xây dựng kịch bản và tham gia quay video TikTok quảng bá sản phẩm, combo và chương trình khuyến mãi. Thực hiện nội dung chuẩn SEO dựa trên nghiên cứu từ khóa và đối thủ, thiết kế ấn phẩm truyền thông trên Canva, đồng thời nghiên cứu xu hướng Social Media để phát triển nội dung, truyền tải USP và tăng nhận diện thương hiệu PHAM NGHIA FOOD.',
    tags: ['Content Marketing', 'SEO', 'TikTok', 'Social Media', 'Canva'],
  },
],






    contact: [
      { label: 'Email', value: 'trambuithibich.cs191654@gmail.com', icon: '', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=trambuithibich.cs191654@gmail.com' },
      { label: 'Điện thoại', value: '0937 888 014', icon: '#', href: 'tel:0937888014' },
         
    ],
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
  }, {
    id: 'm4',
    name: 'Võ Thị Thảo Vân',
    major: 'Thiết Kế Đồ Họa',
    avatar: 'avt4.jpeg',

shortBio:
  'Tôi là sinh viên ngành Thiết kế Đồ họa, định hướng phát triển trong lĩnh vực Graphic Design, Branding và thiết kế nội dung cho các nền tảng số. Tôi có kinh nghiệm thiết kế Social Post, Banner, hình ảnh sản phẩm và các ấn phẩm truyền thông bằng Photoshop, Illustrator và Figma/Canva. Bên cạnh thiết kế 2D, tôi có kinh nghiệm thực hiện các dự án 3D với Blender, tập trung vào modeling, texturing và dựng hình. Thông qua quá trình thực tập và làm freelance, tôi đã rèn luyện khả năng phát triển ý tưởng, tiếp nhận feedback và triển khai thiết kế phù hợp với định hướng thương hiệu và mục tiêu truyền thông. Tôi mong muốn tiếp tục phát triển chuyên môn và tích lũy kinh nghiệm trong môi trường thiết kế sáng tạo.',


    skills: [
      { name: 'Blender / Maya', level: 80 },
      { name: 'Adobe Photoshop', level: 88 },
      { name: 'Adobe Illustrator', level: 78 },
      { name: 'Figma và Canva', level: 85 },
    ],
    experience: [
      {
        period: 'Tháng 1 2026- tháng 4 2026',
        title: 'Graphic Designer Intern',
        org: 'Công ty TNHH Dược Phẩm iCare',
        desc: 'Thiết kế Social Post và Banner quảng cáo cho fanpage, website và các nền tảng số. Thực hiện thiết kế hình ảnh sản phẩm, bố cục nội dung và ấn phẩm truyền thông theo định hướng nhận diện thương hiệu.',
      },
      {
        period: '01.2024 — Hiện tại',
        title: 'Freelance',
        org: 'Freelance',
        desc: 'Thiết kế logo, branding và social post theo yêu cầu khách hàng. Làm việc trực tiếp với khách hàng, tiếp nhận feedback và điều chỉnh thiết kế theo mục tiêu truyền thông. Thực hiện thêm một số dự án 3D quy mô nhỏ, tập trung vào modeling, texturing và dựng hình.',
      },
    ],



    projects: [
      {
        title: 'iCare Pharma – Social Media Design',
        desc: 'Thiết kế bộ ấn phẩm Social Media cho iCare Pharma, tập trung vào hình ảnh sản phẩm, bố cục trực quan và nhận diện thương hiệu. Thực hiện hơn 80 banner đăng trên fanpage, đạt hơn 11.000 lượt xem, đồng thời trang trí sàn thương mại điện tử trên Shopee Mall, Shopee Mekong và TikTok Shop.',
        tags: ['Graphic Design', 'Social Media', 'Branding', 'Photoshop', 'Illustrator'],
      },
    ],





    contact: [
      { label: 'Email', value: 'VanVTTCE181174@fpt.edu.vn', icon: '@',  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=VanVTTCE181174@fpt.edu.vn' },
      { label: 'Điện thoại', value: '0327 706 203', icon: '#', href: 'tel:0327706203' },
    ],
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
  },
];

/* ==========================================================================
   TEAM TASKS — những task nhóm có thể nhận
   ========================================================================== */
const TEAM_TASKS = [

    {
    icon: '',
    title: 'Branding & Nhận diện thương hiệu số',
    desc: 'Thiết kế bộ nhận diện thương hiệu, visual identity và tài liệu truyền thông số cho doanh nghiệp và sản phẩm.',
    basis: 'Dựa trên dự án nhận diện thương hiệu Local Coffee và bộ component Mộc UI, kết hợp tư duy thẩm mỹ và dữ liệu hành vi.',
    tags: ['Branding', 'Illustration', 'Figma', 'Design Token'],
  },
    {
    icon: '',
    title: 'Phát triển Web / App Full-stack',
    desc: 'Xây dựng ứng dụng từ giao diện đến máy chủ: front-end (React, Vue), back-end (Node.js, API .Net) và triển khai ứng dụng.',
    basis: 'Dựa trên kỹ năng JavaScript/TypeScript, .Net, Thiết kế giao diện, kinh nghiệm thực tế tại các công ty phần mềm của các thành viên.',
    tags: ['React', 'Vue', 'Node.js', '.Net', 'Figma','Microservices'],
  },
 
      {
  icon: '',
title: 'Lập trình Nhúng & IoT',
desc: 'Phát triển các ứng dụng nhúng và mô hình IoT, lập trình vi điều khiển, kết nối cảm biến và điều khiển thiết bị.',
basis: 'Dựa trên kinh nghiệm thực hành với ESP32, Arduino và phát triển các mô hình phần cứng kết hợp phần mềm.',
tags: ['ESP32', 'Arduino', 'Embedded', 'IoT'],

  },
  {
    icon: '',
    title: 'DevOps, CI/CD',
    desc: 'Sử dụng GitHub Actions để tự động hóa build và triển khai, kết hợp Docker trong quá trình phát triển và tích hợp các dịch vụ/API.',
    basis: 'Dựa trên kỹ năng CI/CD, Docker, kinh nghiệm tích lũy tại TekNix Ninh Kiều',
    tags: ['Docker', 'GitHub Actions'],
  },
  {
icon: '',
title: 'Thiết kế & Dựng hình 3D',
desc: 'Dựng mô hình, môi trường và tài nguyên 3D, xử lý vật liệu và tối ưu hóa asset phục vụ game và các sản phẩm tương tác.',
basis: 'Dựa trên kinh nghiệm sử dụng Blender và quy trình xây dựng, xử lý và tối ưu tài nguyên 3D.',
tags: ['Blender', '3D Modeling', 'Texturing', '3D Asset'],
  },
 {
    icon: '',
    title: 'UI/UX Design & Design System',
    desc: 'Nghiên cứu người dùng, tạo prototype Figma, xây dựng design system nhất quán cho sản phẩm số đa nền tảng.',
    basis: 'Dựa trên kỹ năng Figma , Prototyping , kinh nghiệm thiết kế sản phẩm số tại Studio.',
    tags: ['Figma', 'UX Research', 'Design System', 'Prototyping'],
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