// ========== INITIALIZE AOS ========== 
AOS.init({
    duration: 1000,
    once: false,
    offset: 100
});

// ========== CUSTOM CURSOR ========== 
const cursor = document.querySelector('.custom-cursor');
const musicBtn = document.getElementById('musicBtn');
const scrollBtn = document.getElementById('scrollBtn');
const envelope = document.getElementById('envelope');
const candles = document.querySelectorAll('.candle');
const makeWishBtn = document.getElementById('makeWishBtn');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Sparkle effect on click
document.addEventListener('click', (e) => {
    if (e.target !== cursor) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkles = ['✨', '💕', '⭐', '🌟'];
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-burst';
    sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 800);
}

// ========== MUSIC CONTROL ========== 
const audio = document.getElementById('birthdayMusic');
let isPlaying = true; // Start as true since autoplay will play

// Initialize audio
if (audio) {
    audio.volume = 0.1; // Set volume to 10%
    
    // Auto unmute and play after a short delay
    setTimeout(() => {
        audio.muted = false;
        audio.play().catch(err => {
            console.log('Autoplay with sound failed, will play after user interaction:', err);
        });
    }, 500);
    
    // Try to autoplay and unmute after user interaction
    const tryAutoplay = () => {
        audio.muted = false;
        audio.play().catch(err => {
            console.log('Play after unmute failed:', err);
        });
        // Remove listeners after first user interaction
        document.removeEventListener('click', tryAutoplay);
        document.removeEventListener('touchstart', tryAutoplay);
    };
    
    // Listen for user interaction as backup
    document.addEventListener('click', tryAutoplay);
    document.addEventListener('touchstart', tryAutoplay);
    
    // Update button UI when audio plays/pauses
    audio.addEventListener('play', () => {
        isPlaying = true;
        musicBtn.innerHTML = '⏸️';
        musicBtn.parentElement.style.animation = 'pulse 1s ease-in-out infinite';
    });
    
    audio.addEventListener('pause', () => {
        isPlaying = false;
        musicBtn.innerHTML = '🔊';
        musicBtn.parentElement.style.animation = 'none';
    });
}

musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (!audio) {
        console.error('Audio element not found');
        return;
    }
    
    // Unmute when user clicks
    if (audio.muted) {
        audio.muted = false;
    }
    
    if (!isPlaying) {
        audio.currentTime = 0;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('Audio playing successfully');
                })
                .catch(err => {
                    console.error('Audio play failed:', err);
                });
        }
    } else {
        audio.pause();
        console.log('Audio paused');
    }
});

// ========== SMOOTH SCROLL TO NEXT SECTION ========== 
scrollBtn.addEventListener('click', () => {
    document.getElementById('memories').scrollIntoView({ behavior: 'smooth' });
});

// ========== ENVELOPE INTERACTION ========== 
envelope.addEventListener('click', function() {
    this.classList.toggle('open');
    
    if (this.classList.contains('open')) {
        setTimeout(() => {
            document.getElementById('letterContent').classList.remove('hidden');
            AOS.refresh();
        }, 300);
    } else {
        document.getElementById('letterContent').classList.add('hidden');
    }
});

// ========== BIRTHDAY CAKE - CANDLE BLOWING ========== 
let candlesBlown = 0;
const totalCandles = 3;

candles.forEach((candle, index) => {
    candle.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (!candle.classList.contains('blown')) {
            // Blow out the candle
            candle.classList.add('blown');
            candlesBlown++;
            
            // Create a puff of smoke effect
            createSmokeEffect(candle);
            
            // Check if all candles are blown
            if (candlesBlown === totalCandles) {
                triggerBirthdayExplosion();
            }
        }
    });
});

function createSmokeEffect(candle) {
    const smoke = document.createElement('div');
    smoke.style.cssText = `
        position: fixed;
        pointer-events: none;
        font-size: 2rem;
        opacity: 1;
        left: ${candle.getBoundingClientRect().left + 10}px;
        top: ${candle.getBoundingClientRect().top}px;
        animation: float 2s ease-out forwards;
        z-index: 100;
    `;
    smoke.textContent = '💨';
    document.body.appendChild(smoke);
    
    setTimeout(() => smoke.remove(), 2000);
}

function triggerBirthdayExplosion() {
    // Screen flash
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        opacity: 1;
        z-index: 9998;
        pointer-events: none;
    `;
    document.body.appendChild(flash);
    
    // Confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ec4899', '#f472b6', '#fda4d4', '#fbbf24', '#ffedd5']
    });
    
    // More confetti bursts
    setTimeout(() => {
        confetti({
            particleCount: 80,
            spread: 90,
            origin: { x: 0.1, y: 0.5 },
            colors: ['#ec4899', '#f472b6', '#fda4d4', '#fbbf24', '#ffedd5']
        });
        
        confetti({
            particleCount: 80,
            spread: 90,
            origin: { x: 0.9, y: 0.5 },
            colors: ['#ec4899', '#f472b6', '#fda4d4', '#fbbf24', '#ffedd5']
        });
    }, 100);
    
    // Fade out flash
    setTimeout(() => {
        flash.style.animation = 'fadeOut 0.3s ease-out forwards';
    }, 200);
    
    setTimeout(() => flash.remove(), 500);
    
    // Show "Make a Wish" button
    setTimeout(() => {
        makeWishBtn.classList.add('visible');
    }, 500);
}

// Make Wish Button
makeWishBtn.addEventListener('click', () => {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0 }
    });
    
    // Show a celebration message
    showCelebrationMessage();
});

function showCelebrationMessage() {
    const messages = [
        '🎉 Chúc bạn những ước mơ đều thành hiện thực! 🌟',
        '💖 Bạn xứng đáng có tất cả những điều tốt đẹp! 🌸',
        '✨ Hạnh phúc luôn đi cùng bạn! 🎂',
        '🎊 Một năm đầy yêu thương và vui vẻ! 💕'
    ];
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    const messageEl = document.createElement('div');
    messageEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ec4899, #f472b6);
        color: white;
        padding: 2rem 3rem;
        border-radius: 20px;
        font-size: 1.5rem;
        font-family: 'Pacifico', cursive;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: zoomInUp 0.6s ease-out, zoomOutDown 0.6s ease-in 2.4s forwards;
    `;
    messageEl.textContent = message;
    document.body.appendChild(messageEl);
    
    setTimeout(() => messageEl.remove(), 3000);
}

// ========== ADD ANIMATIONS ========== 
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
        }
    }
    
    @keyframes zoomInUp {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes zoomOutDown {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7);
        }
        50% {
            box-shadow: 0 0 0 10px rgba(236, 72, 153, 0);
        }
    }
`;
document.head.appendChild(style);

// ========== GSAP ANIMATIONS ========== 
// Animate elements on scroll with GSAP
gsap.registerPlugin(ScrollTrigger);

// Memory cards animation
gsap.utils.toArray('.memory-card').forEach((card) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    });
});

// ========== MOUSE POSITION FOR PARALLAX ========== 
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;
    
    gsap.to('.cake-container', {
        x: x * 0.5,
        y: y * 0.5,
        duration: 1,
        ease: 'power2.out'
    });
});

// ========== RESPONSIVE CHECK ========== 
function handleResponsive() {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
        // Adjust animations for mobile
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.setAttribute('data-aos-duration', '500');
        });
    }
}

handleResponsive();
window.addEventListener('resize', handleResponsive);

// ========== PAGE LOAD ANIMATION ========== 
window.addEventListener('load', () => {
    // Fade in the page
    document.body.style.opacity = '0';
    gsap.to('body', {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Add a subtle celebration when page loads
    setTimeout(() => {
        confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0 },
            duration: 1500
        });
    }, 500);
});

// ========== PREVENT RIGHT CLICK (OPTIONAL) ========== 
// Uncomment if you want to add a special message on right-click
document.addEventListener('contextmenu', function(e) {
    // e.preventDefault(); // Uncomment to disable right-click
    // You could show a custom message instead
});

// ========== EXTRA: KEYBOARD SHORTCUTS ========== 
document.addEventListener('keydown', (e) => {
    // Press 'M' to toggle music
    if (e.key === 'm' || e.key === 'M') {
        musicBtn.click();
    }
    
    // Press 'C' to open confetti celebration
    if (e.key === 'c' || e.key === 'C') {
        confetti({
            particleCount: 100,
            spread: 70
        });
    }
});

// ========== FOCUS MANAGEMENT ========== 
document.addEventListener('mouseleave', () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        musicBtn.innerHTML = '🔊';
    }
});

document.addEventListener('mouseenter', () => {
    // Optional: Resume music when returning to page
    // You might want to keep this commented out for better UX
});

console.log('🎉 Birthday Website Loaded! Happy Birthday! 🎂');
