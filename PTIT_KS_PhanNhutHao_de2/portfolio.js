// Lưu trữ dữ liệu vào Local Storage
localStorage.setItem('headerData', JSON.stringify({
    navbarLogo: 'https://shtheme.com/demosd/jenna/wp-content/uploads/2023/07/logo-light.png',
    navbarItems: [
        { text: 'HOME', link: '#' },
        { text: 'ABOUT ME', link: '#' },
        { text: 'PROJECT', link: '#' },
        { text: 'SERVICES', link: '#' },
        { text: 'CONTACT', link: '#' }
    ],
    btnText: "LET'S TALK"
}));

localStorage.setItem('aboutData', JSON.stringify({
    name: 'JENNA ORTEGA',
    greeting: 'HAY! I’M Jenna',
    profession: "I'M A DESIGENR",
    professionDetail: 'UI UX DESIGN',
    aboutText: 'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.',
    socialLinks: [
        { icon: 'fab fa-facebook-f', color: '#1877F2', link: '#' },
        { icon: 'fab fa-dribbble', color: '#F26798', link: '#' },
        { icon: 'fab fa-linkedin-in', color: '#1275B1', link: '#' }
    ]
}));

localStorage.setItem('projectData', JSON.stringify([
    { title: 'Website Design', image: '/javascript/PTIT_KS_PhanNhutHao_de2/service-04.jpg', description: 'Web Design, App Design' },
    { title: 'Dashboard Design', image: '/javascript/PTIT_KS_PhanNhutHao_de2/service-04.jpg', description: 'Web Design, App Design' },
    { title: 'Moble App Design', image: '/javascript/PTIT_KS_PhanNhutHao_de2/service-04.jpg', description: 'Web Design, App Design' },
    { title: 'Website Design', image: '/javascript/PTIT_KS_PhanNhutHao_de2/service-04.jpg', description: 'Web Design, App Design' },
    { title: 'Website Design', image: '/javascript/PTIT_KS_PhanNhutHao_de2/service-04.jpg', description: 'Web Design, App Design' }
]));

localStorage.setItem('servicesData', JSON.stringify([
    { title: 'Website Design', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Set do elsumod tempor incididunt ut labore' },
    { title: 'Website Design', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Set do elsumod tempor incididunt ut labore' },
    { title: 'SEO Marketing', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Set do elsumod tempor incididunt ut labore' },
    { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Set do elsumod tempor incididunt ut labore' }
]));

// Render dữ liệu từ Local Storage vào các phần của trang
document.addEventListener('DOMContentLoaded', function() {
    // Render Header
    const headerData = JSON.parse(localStorage.getItem('headerData'));
    renderHeader(headerData);

    // Render Section About Us
    const aboutData = JSON.parse(localStorage.getItem('aboutData'));
    renderAbout(aboutData);

    // Render Section Recent Projects
    const projectData = JSON.parse(localStorage.getItem('projectData'));
    renderProjects(projectData);

    // Render Section Services
    const servicesData = JSON.parse(localStorage.getItem('servicesData'));
    renderServices(servicesData);
});

// Hàm render Header
function renderHeader(data) {
    const navbar = document.querySelector('.navbar-nav');
    const navbarBrand = document.querySelector('.navbar-brand');
    const btn = document.querySelector('.btn');

    navbarBrand.innerHTML = `<img src="${data.navbarLogo}" alt="Logo" width="250" height="50">`;
    data.navbarItems.forEach(item => {
        navbar.innerHTML += `<li class="nav-item"><a class="nav-link" href="${item.link}">${item.text}</a></li>`;
    });
    btn.textContent = data.btnText;
}

// Hàm render Section About Us
function renderAbout(data) {
    const hsTextBox = document.querySelector('.hs-text-box');
    const socialIcons = document.querySelector('.social-icons');

    hsTextBox.innerHTML = `
        <h6><span style="color:white">${data.name}</span></h6>
        <h1>${data.greeting}</h1>
        <h2>${data.profession} <span id="type-it">${data.professionDetail}</span></h2>
        <p class="text">${data.aboutText}</p>
    `;

    data.socialLinks.forEach(link => {
        socialIcons.innerHTML += `<a style="background: ${link.color};" href="${link.link}"><i class="${link.icon}"></i></a>`;
    });
}

// Hàm render Section Recent Projects
function renderProjects(data) {
    const brandSection = document.querySelector('.brand-section');

    data.forEach(project => {
        brandSection.innerHTML += `
            <div class="p-3 text-center d-flex align-items-center justify-content-center w-100">
                <img decoding="async" src="${project.image}" title="" alt="">
            </div>
        `;
    });
}

// Hàm render Section Services
function renderServices(data) {
    const cardMain = document.querySelector('.CardMain');

    data.forEach(service => {
        cardMain.innerHTML += `
            <div class="col mb-4">
                <div class="card text-bg-secondary" style="height: 15rem;">
                    <div class="card-body d-flex flex-column justify-content-end">
                        <h5 class="card-title">${service.title}</h5>
                        <p class="card-text">${service.description}</p>
                    </div>
                </div>
            </div>
        `;
    });
}
