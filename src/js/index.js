const navMobile = document.querySelector('.nav__mobile');
const navBtn = document.querySelector('.hamburger');
const navBox = document.querySelector('.hamburger-box');
const navBar = document.querySelector('.hamburger-inner');

const mobNavLinks = document.querySelectorAll('.nav__mobile-link');
const allMobSec = document.querySelectorAll('.nav-sec');
const deskNavLinks = document.querySelectorAll('.nav__desktop-link');
const allDesSec = document.querySelectorAll('.section');

const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav__mobile--active');
	
	mobNavLinks.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__mobile--active');
			navBtn.classList.remove('is-active');
		});
	});
};

window.onscroll = () => {
	const top = window.scrollY;
	const totalScr = document.documentElement.scrollHeight - window.innerHeight;
	
	allMobSec.forEach((sec) => {
		const currentSection = window.scrollY;
		if (
			sec.classList.contains('white-section') &&
			sec.offsetTop <= currentSection + 30
			) {
				navBar.classList.add('black-bars');
			} else if (
				!sec.classList.contains('white-section') &&
				sec.offsetTop <= currentSection + 30
				) {			navBar.classList.remove('black-bars');
			}
		});

		allDesSec.forEach((sec) => {
			const offset = sec.offsetTop - 66;
			const height = sec.offsetHeight;
			const id = sec.getAttribute('id');
	
		if (top >= offset && top < offset + height) {
			deskNavLinks.forEach((link) => {
				link.classList.remove('nav__active');
				if (top + 200 > totalScr) {
					document
						.querySelector('.nav__desktop-link[href*=contact]')
						.classList.add('nav__active');
				} else {
					document
					.querySelector('.nav__desktop-link[href*=' + id + ']')
					.classList.add('nav__active');
				}
			});
		}
		})

		allMobSec.forEach((sec) => {
			const offset = sec.offsetTop - 66;
			const height = sec.offsetHeight;
			const id = sec.getAttribute('id');
	
		if (top >= offset && top < offset + height) {
			mobNavLinks.forEach((link) => {
				link.classList.remove('nav__active');
				if (top + 100 > totalScr) {
					document
						.querySelector('.nav__mobile-link[href*=contact]')
						.classList.add('nav__active');
				} else {
					document
					.querySelector('.nav__mobile-link[href*=' + id + ']')
					.classList.add('nav__active');
				}
			});
		}
		})
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

navBtn.addEventListener('click', handleNav);
