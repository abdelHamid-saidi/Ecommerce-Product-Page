// Navigation active
document.querySelectorAll("li").forEach((element) => {
	element.addEventListener("click", () => {
		const active = document.querySelector(".active");
		if (active) active.classList.remove("active");
		element.classList.add("active");
	});
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const blc = document.getElementById("blc");
const blur = document.getElementById("blur");

hamburger.addEventListener("click", () => {
	const isActive = hamburger.classList.contains("is-active");
	if (!isActive) {
		blur.style.display = 'block';
		setTimeout(() => {
			blur.style.opacity = '1';
			hamburger.classList.add("is-active");
			blc.style.left = '0';
		}, 100);
	} else {
		blur.style.opacity = '0';
		setTimeout(() => {
			blur.style.display = 'none';
		}, 300);
		hamburger.classList.remove("is-active");
		blc.style.left = '-230px';
	}
});

// Image gallery
const imgs = document.querySelectorAll(".imgs");
const imgs2 = document.querySelectorAll(".imgs2");
const imgp = document.getElementById("imgp");
const imgp2 = document.getElementById("imgp2");
const blur2 = document.getElementById("blur2");
const close = document.getElementById("close");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const plus = document.getElementById("plus");
const moins = document.getElementById("moins");
const cont = document.getElementById("cont");
const photos2 = document.getElementById("photos2");

let currentIndex = 0;
let count = 0;

function updateActiveImage(index, list, className, target) {
	document.querySelector(`.${className}`)?.classList.remove(className);
	list[index].classList.add(className);
	target.src = list[index].src;
}

imgs.forEach((img, index) => {
	img.addEventListener("click", () => {
		currentIndex = index;
		updateActiveImage(index, imgs, "imact", imgp);
	});
});

imgs2.forEach((img, index) => {
	img.addEventListener("click", () => {
		updateActiveImage(index, imgs2, "imact2", imgp2);
	});
});

imgp.addEventListener("click", () => {
	blur2.style.display = 'flex';
	imgp2.src = imgp.src;
	updateActiveImage(currentIndex, imgs2, "imact2", imgp2);
	setTimeout(() => blur2.style.opacity = '1', 100);
});

close.addEventListener("click", () => {
	blur2.style.opacity = '0';
	setTimeout(() => blur2.style.display = 'none', 300);
});

next.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % imgs.length;
	updateActiveImage(currentIndex, imgs2, "imact2", imgp2);
});

prev.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
	updateActiveImage(currentIndex, imgs2, "imact2", imgp2);
});

// Compteur
plus.addEventListener("click", () => {
	if (count < 25) cont.textContent = ++count;
});

moins.addEventListener("click", () => {
	if (count > 0) cont.textContent = --count;
});

// Panier
const pan = document.getElementById("pan");
const cart = document.getElementById("cart");
const btn = document.getElementById("btn");
const vidcart = document.getElementById("vidcart");
const concart = document.getElementById("concart");
const pann = document.getElementById("pann");
const crtsvg = document.getElementById("crtsvg");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

let itemCount = 0;

pan.addEventListener("click", () => {
	cart.style.display = (cart.style.display === 'block') ? 'none' : 'block';
});

btn.addEventListener("click", () => {
	if (count === 0) return alert("Select number of items");
	itemCount += count;
	p1.textContent = `$125.00 x ${itemCount}`;
	p2.textContent = `$${125 * itemCount}.00`;
	pann.textContent = itemCount;
	concart.style.display = 'block';
	pann.style.display = 'flex';
	vidcart.style.display = 'none';
});

crtsvg.addEventListener("click", () => {
	itemCount = 0;
	concart.style.display = 'none';
	pann.style.display = 'none';
	vidcart.style.display = 'flex';
});

// Slideshow principal
const next1 = document.getElementById("next1");
const prev1 = document.getElementById("prev1");

next1.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % imgs.length;
	updateActiveImage(currentIndex, imgs, "imact", imgp);
});

prev1.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
	updateActiveImage(currentIndex, imgs, "imact", imgp);
});

// Loader
const load = document.getElementById("box");
setTimeout(() => {
	load.style.opacity = '0';
	setTimeout(() => load.style.display = 'none', 500);
}, 1000);
