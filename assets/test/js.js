const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const navBox = document.querySelector('.hamburger-box');
const navBar = document.querySelector('.hamburger-inner');

let navBarBe = window.getComputedStyle(navBar,'::before');
let navBarAf = window.getComputedStyle(navBar,'::after');

const allNavItem = document.querySelectorAll('.nav-link');
const footerYear = document.querySelector('.footer__year');

const allSections = document.querySelectorAll('.section'); 
const navLinks = document.querySelectorAll('.nav__desktop-link');


const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	allNavItem.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
			navBtn.classList.remove('is-active');
		});
	});
};


window.onscroll = () => {
	allSections.forEach((sec) => {
		const top = window.scrollY;
		const offset = sec.offsetTop - 66;
		const height = sec.offsetHeight;
		const id = sec.getAttribute('id');
		const currentSection = window.scrollY;

		// 
	});
};


// const navBar = document.getElementById('hamburger-inner');

// let navBarBe = window.getComputedStyle(navBar,'::before');
// let navBarAf = window.getComputedStyle(navBar,'::after');
// const currentSection = window.scrollY;
		
// if (sec.classList.contains('white-section') && sec.offsetTop <= currentSection + 40) {
// 	navBar.classList.add('black-bars')
	// navBarBe.style.setProperty('--barsColor','#000')
	// navBarBe.classList.add('black-bars')
	// navBarAf.classList.add('black-bars')
	// console.log(sec, 'add');
	// console.log(currentSection);
// } else if (!sec.classList.contains('white-section') && sec.offsetTop <= currentSection + 40) {
	// console.log(sec, 'remove');
	// navBar.classList.remove('black-bars')
	// navBarBe.style.setProperty('--barsColor', '#fff')
	// navBarBe.classList.remove('black-bars')
	// navBarAf.classList.remove('black-bars')
// }


// 
// const handleObserver = () => {
//     const currentSection = window.scrollY;

//     allSections.forEach((section) => {
		
// 	console.log(window.scrollY, section);

//         if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
//             navBars.classList.add('black-bars')
//         } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
//             navBars.classList.remove('black-bars')
//         }
//     })
// }