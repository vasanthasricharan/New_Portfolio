setTimeout(() => {
    const welcome = document.getElementById("welcome-content");
    const portfolio = document.getElementById("portfolio");

    welcome.style.display = "none";
    portfolio.style.display = "block";

    setTimeout(() => {
        portfolio.classList.add("visible");
    }, 50);
}, 5000);


const sentences = [
    "Electronics and Communication Student...",
    "VLSI Enthusiast"
];

let i = 0;
let j = 0;
let isDeleting = false;
const speed = 100;
const pause = 1000;

const textElement = document.getElementById("typewriter");

function type() {
    const current = sentences[i];

    if (!isDeleting) {
        textElement.textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, pause);
            return;
        }
    } else {
        textElement.textContent = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % sentences.length;
        }
    }

    setTimeout(type, speed);
}

type();

function revealOnScroll() {
    const reveals = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('visible');
            el.classList.remove('hidden');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

const sectionOrder = ['projects', 'certificates', 'techstack'];
let currentVisible = 'projects';

function showContent(targetId, event) {
    const buttons = document.querySelectorAll('.box-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const current = document.getElementById(currentVisible);
    const next = document.getElementById(targetId);

    if (targetId === currentVisible) {
        current.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
        void current.offsetWidth;
        current.classList.add('slide-out-left');
        return;
    }

    const isForward = sectionOrder.indexOf(targetId) > sectionOrder.indexOf(currentVisible);

    current.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
    next.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right', 'active');

    void current.offsetWidth;
    void next.offsetWidth;

    current.classList.add(isForward ? 'slide-out-left' : 'slide-out-right');
    current.classList.remove('active');

    next.style.opacity = 0;
    next.classList.add('active', isForward ? 'slide-in-right' : 'slide-in-left');

    currentVisible = targetId;
}

const form = document.getElementById('contactForm');
const messagesList = document.getElementById('messagesList');
const showMessagesBtn = document.getElementById('showMessagesBtn');
const contactSection = document.getElementById('contactSection');
const messagesSection = document.getElementById('messagesSection');
const backBtn = document.getElementById('backBtn');

// Handle form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (name && email && comment) {
        const li = document.createElement('li');
        li.style.marginBottom = "10px";
        li.style.padding = "10px";
        li.style.border = "1px solid white";
        li.style.borderRadius = "8px";
        li.innerHTML = `<strong>${name}</strong> (${email}): <br>${comment}`;
        messagesList.appendChild(li);

        form.reset();
    }
});

// Show messages view
showMessagesBtn.addEventListener('click', () => {
    contactSection.style.display = "none";
    messagesSection.style.display = "block";
});

// Back to form view
backBtn.addEventListener('click', () => {
    messagesSection.style.display = "none";
    contactSection.style.display = "block";
});



// Function to show the full-size certificate in a modal
function showCertificate(imageSrc) {
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('modal-image');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('certificate-modal');
    modal.style.display = 'none';
}

// Add event listeners to each certificate item
document.querySelectorAll('.certificate-item img').forEach(img => {
    img.addEventListener('click', (event) => {
        showCertificate(event.target.src);
    });
});

// Add event listener to the close button
document.querySelector('.close').addEventListener('click', closeModal);