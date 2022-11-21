document.querySelector(".btn-prev").onclick = function () {
	let lists = document.querySelectorAll(".item");
	document.querySelector(".slide").prepend(lists[lists.length - 1]);
};

document.querySelector(".btn-next").onclick = function () {
	let lists = document.querySelectorAll(".item");
	document.querySelector(".slide").appendChild(lists[0]);
};
const navLink = document.querySelectorAll(".nav-link");

const removeActiveNav = (id) => {
	for (let i = 0; i < navLink.length; i++) {
		if (i !== id) {
			navLink[i].classList.remove("active");
		}
	}
};

for (let i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener("click", () => {
		navLink[i].classList.toggle("active");
		removeActiveNav(i);
	});
}

const navMenu = document.querySelector(".nav-menu");
navMenu.addEventListener("click", () => navMenu.classList.toggle("active"));

const setImgMobile = () => {
	const arrImg = document.querySelectorAll(".img-food");
	for (let value of arrImg) {
		value.style.width = widthMobile - 32 + "px";
	}
};

const setImgIpad = () => {
	const arrImg = document.querySelectorAll(".img-food");
	const widthContainer = document.querySelector(".container").offsetWidth;
	for (let value of arrImg) {
		value.style.width = widthContainer / 2 + "px";
	}
};

const widthMobile = document.querySelector("body").offsetWidth;

widthMobile < 992 ? setImgIpad() : "";
widthMobile < 576 ? setImgMobile() : "";
