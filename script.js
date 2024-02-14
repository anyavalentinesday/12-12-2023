const pages = document.querySelectorAll('.page');
let currentPageIndex = 0;

const startDate = new Date('2023-12-12');

function updateCounter() {
    const currentDate = new Date();
    const diff = currentDate - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('time-counter').innerText = `Building our forever for \n${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds..`;
}

function updatePageCounter() {
    document.getElementById('page-counter').innerText = `Page ${currentPageIndex + 1} of ${pages.length}`;
}

function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
    currentPageIndex = index;
    updatePageCounter();
}

function nextPage() {
    if (currentPageIndex < pages.length - 1) {
        showPage(currentPageIndex + 1);
    }
}

function goBack() {
    if (currentPageIndex > 0) {
        showPage(currentPageIndex - 1);
    }
}

document.getElementById('next-page-btn').addEventListener('click', nextPage);
document.getElementById('go-back-btn').addEventListener('click', goBack);

showPage(currentPageIndex);
updateCounter();
setInterval(updateCounter, 1000);

const audio = document.getElementById("myAudio");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function changeVolume(volume) {
  audio.volume = volume;
}


