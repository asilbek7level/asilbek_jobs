(function () {
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

    const links = [
        { href: 'index.html', id: 'index.html', label: 'Bosh sahifa' },
        { href: 'sohalar.html', id: 'sohalar.html', label: 'Sohalar' },
        { href: 'test.html', id: 'test.html', label: 'Test' },
        { href: 'bozor.html', id: 'bozor.html', label: 'Bozor' },
        { href: 'qollanma.html', id: 'qollanma.html', label: 'Qo\'llanma' },
        { href: 'metodologiya.html', id: 'metodologiya.html', label: 'Metod' },
        { href: 'biz-haqimizda.html', id: 'biz-haqimizda.html', label: 'Biz haqimizda' }
    ];

    const related = ['soha.html', 'natija.html', 'qollanma-qaror.html', 'qollanma-riasec.html', 'qollanma-amaliyot.html'];
    const activeHref = related.includes(path)
        ? (path.startsWith('qollanma') ? 'qollanma.html' : path === 'soha.html' ? 'sohalar.html' : path === 'natija.html' ? 'test.html' : path)
        : path;

    document.getElementById('site-header').innerHTML = `
        <nav class="navbar" id="navbar">
            <a href="index.html" class="logo">
                <div class="logo-icon">7L</div>
                <span class="logo-text">7Level</span>
            </a>
            <ul class="nav-links" id="navLinks">
                ${links.map(l => `<li><a href="${l.href}" class="${activeHref === l.id ? 'active' : ''}">${l.label}</a></li>`).join('')}
            </ul>
            <a class="nav-btn" href="test.html">Testni boshlash</a>
            <button class="mobile-menu-btn" type="button" id="menuBtn" aria-label="Menyu">
                <i class="fas fa-bars"></i>
            </button>
        </nav>
    `;

    document.getElementById('site-footer').innerHTML = `
        <footer>
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="logo">
                        <div class="logo-icon">7L</div>
                        <span class="logo-text">7Level</span>
                    </a>
                    <p>Kasb tanlash — bir martalik “to‘g‘ri javob” emas, o‘zini, variantlarni va bozorni bilish sikli. 7Level shu siklga yordam beradi.</p>
                    <div class="social-links">
                        <a href="https://instagram.com/suyunboyev_7o1" aria-label="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://youtube.com/@asilbeksuyunboyev" aria-label="YouTube" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a href="mailto:suyunboyevasilbek7@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Platforma</h4>
                    <a href="sohalar.html">Sohalar</a>
                    <a href="test.html">Yo‘nalish testi</a>
                    <a href="bozor.html">Bozor</a>
                    <a href="qollanma.html">Qo‘llanmalar</a>
                </div>
                <div class="footer-col">
                    <h4>Tushunish</h4>
                    <a href="metodologiya.html">Qanday ishlaydi</a>
                    <a href="qollanma-riasec.html">RIASEC</a>
                    <a href="qollanma-qaror.html">CASVE qaror sikli</a>
                    <a href="biz-haqimizda.html">Biz haqimizda</a>
                </div>
                <div class="footer-col">
                    <h4>Eslatma</h4>
                    <a href="metodologiya.html">Bu tibbiy/psixologik tashxis emas</a>
                    <a href="bozor.html">Maoshlar — orientir</a>
                    <a href="qollanma-amaliyot.html">Tekshirib ko‘ring</a>
                </div>
                <div class="footer-col">
                    <h4>Bog'lanish</h4>
                    <a href="mailto:suyunboyevasilbek7@gmail.com">Email</a>
                    <a href="https://instagram.com/suyunboyev_7o1" target="_blank">Instagram</a>
                    <a href="https://youtube.com/@asilbeksuyunboyev" target="_blank">YouTube</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 7Level. Ta\'limiy vosita. Rasmiy MBTI, O*NET yoki Strong testi emas.</p>
            </div>
        </footer>
    `;

    document.getElementById('menuBtn').addEventListener('click', () => {
        document.getElementById('navLinks').classList.toggle('open');
    });

    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
})();
