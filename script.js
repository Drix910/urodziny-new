// Funkcja do otwierania/zamykania okienka z życzeniami
function toggleWishesPopup() {
    const popup = document.getElementById("wishesPopup");
    popup.classList.toggle("show");
}

function explodeCake() {
    const cake = document.querySelector(".cake");
    const wishes = document.getElementById("wishes");

    // Odtworzenie dźwięków
    document.getElementById("confettiSound").play();
    setTimeout(() => {
        document.getElementById("birthdaySong").play();
    }, 1000); // Opóźnienie, by zaczęło grać po efekcie

    // Animacja wybuchu tortu
    cake.style.animation = "explode 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";

    // Konfetti
    createConfetti(300, {
        x: cake.offsetLeft + cake.offsetWidth / 2,
        y: cake.offsetTop + cake.offsetHeight / 2
    }, 2000);

    // Animacja tekstu
    setTimeout(() => {
        cake.style.display = "none";
        wishes.classList.add("show");
        document.querySelector("#personalWish").textContent = "Dla Ciebie Iza! 🍾";
        document.querySelector("#wishes p").textContent =
            "W tym dniu twoich 16 urodzin chciałbym ci życzyć wszystkiego co najlepsze - szczęścia, spełnienia marzeń, zdrowia oraz dalszej tułaczki ze mną u boku.";
    }, 1000);
}

// Funkcja do uruchamiania confetti
function startConfetti(event) {
    // Confetti z przycisku (40 cząstek)
    createConfetti(75, { 
        x: event.clientX, 
        y: event.clientY 
    }, 3000);
}

// Funkcja do generowania confetti
function createConfetti(amount, origin, duration) {
    const colors = ["#ff6b81", "#ff4757", "#feca57", "#1dd1a1", "#54a0ff"];
    
    for (let i = 0; i < amount; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        
        // Losowe parametry
        const angle = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 80 + 40;
        
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${origin.x}px`;
        confetti.style.top = `${origin.y}px`;
        confetti.style.setProperty("--tx", Math.cos(angle) * speed);
        confetti.style.setProperty("--ty", Math.sin(angle) * speed);
        confetti.style.animation = `confetti-explode ${duration / 1000}s ease-out`;
        
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), duration);
    }
}
