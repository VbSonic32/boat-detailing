// ── Nav scroll effect
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
	nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((e) => {
			if (e.isIntersecting) {
				e.target.classList.add('visible');
				observer.unobserve(e.target);
			}
		});
	},
	{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);
reveals.forEach((el) => observer.observe(el));

// ── Particles
(function createParticles() {
	const container = document.getElementById('particles');
	const count = 12;
	for (let i = 0; i < count; i++) {
		const p = document.createElement('div');
		p.className = 'particle';
		const size = Math.random() * 3 + 1;
		p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 90 + 5}%;
      top: ${Math.random() * 80 + 5}%;
      opacity: ${Math.random() * 0.25 + 0.05};
      animation-delay: ${Math.random() * 4}s;
      animation-duration: ${Math.random() * 3 + 3}s;
    `;
		container.appendChild(p);
	}
})();

// ── Mobile menu
let menuOpen = false;
function toggleMobileMenu() {
	menuOpen = !menuOpen;
	document.getElementById('mobileMenu').classList.toggle('open', menuOpen);
	const hb1 = document.getElementById('hb1');
	const hb2 = document.getElementById('hb2');
	const hb3 = document.getElementById('hb3');
	if (menuOpen) {
		hb1.style.transform = 'translateY(7px) rotate(45deg)';
		hb2.style.opacity = '0';
		hb3.style.transform = 'translateY(-7px) rotate(-45deg)';
	} else {
		hb1.style.transform = '';
		hb2.style.opacity = '';
		hb3.style.transform = '';
	}
}
function closeMobileMenu() {
	menuOpen = false;
	document.getElementById('mobileMenu').classList.remove('open');
	document.getElementById('hb1').style.transform = '';
	document.getElementById('hb2').style.opacity = '';
	document.getElementById('hb3').style.transform = '';
}

// ── Form
function handleSubmit(e) {
	e.preventDefault();
	const btn = e.target.querySelector('button[type=submit]');
	btn.textContent = 'Sending…';
	btn.disabled = true;
	setTimeout(() => {
		btn.textContent = '✓ Request Sent!';
		btn.style.background = '#2d7a4f';
		const msg = document.getElementById('formMsg');
		msg.textContent =
			"We'll be in touch within 24 hours. Thanks for choosing Lakeshore Detail Co.!";
		msg.style.display = 'block';
		e.target
			.querySelectorAll('input, select, textarea')
			.forEach((el) => (el.disabled = true));
	}, 1200);
}
