window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}

/* effet menu */

var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var header = document.querySelector('header');

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('hide');
  } else {
    header.classList.add('hide');
  }

  prevScrollPos = currentScrollPos;
};


/* phrase déroulante */





const intros = document.querySelectorAll('.intro');

intros.forEach(intro => {
  const introContent = intro.querySelector('.intro-content');

  introContent.addEventListener('click', () => {
    intro.classList.toggle('active');
  });
});
