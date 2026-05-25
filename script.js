// ========== DOM ELEMENTS ==========
const cards = document.querySelectorAll('.card-deck');
const readings = document.getElementById('readings');
const nextBtn = document.getElementById('next-btn');
const blowBtn = document.getElementById('blow-btn');
const wishesMsg = document.getElementById('wishes-msg');
const oracleText = document.getElementById('oracle-text');
const oracleCaret = document.querySelector('.type-caret');
const memoryNodes = document.querySelectorAll('.memory-item');

// ========== STATE ==========
const flippedCards = new Set();

// ========== CARD FLIP ==========
cards.forEach(card => {
    card.addEventListener('click', () => {
        const cardNum = card.getAttribute('data-card');
        const cardInner = card.querySelector('.card-inner');

        if (flippedCards.has(cardNum)) return;

        flippedCards.add(cardNum);
        card.classList.add('is-flipped');

        gsap.to(cardInner, {
            rotationY: 180,
            duration: 0.9,
            ease: 'power3.out'
        });

        playSound();
        showReading(cardNum);

        if (flippedCards.size === cards.length) {
            showNextButton();
        }
    });
});

// ========== SHOW READINGS ==========
function showReading(cardNum) {
    const reading = readings.querySelector(`[data-card="${cardNum}"]`);

    if (readings.classList.contains('hidden')) {
        readings.classList.remove('hidden');
    }

    if (reading.classList.contains('hidden')) {
        reading.classList.remove('hidden');
        gsap.fromTo(reading,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        );
    }
}

// ========== SHOW NEXT BUTTON ==========
function showNextButton() {
    if (!nextBtn || !nextBtn.classList.contains('hidden')) return;

    nextBtn.classList.remove('hidden');
    gsap.fromTo(nextBtn,
        { opacity: 0, scale: 0.9, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
}

// ========== NEXT BUTTON ACTION ==========
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: '#birth-chart', offsetY: 80 },
            ease: 'power3.inOut'
        });
    });
}

// ========== BLOW CANDLE ==========
if (blowBtn) {
    blowBtn.addEventListener('click', () => {
        if (blowBtn.dataset.blown === 'true') return;
        blowBtn.dataset.blown = 'true';

        const flames = document.querySelectorAll('.flame');
        flames.forEach((flame, index) => {
            gsap.to(flame, {
                opacity: 0,
                scale: 0.6,
                duration: 0.5,
                delay: index * 0.1,
                ease: 'power2.in'
            });
        });

        blowBtn.disabled = true;
        blowBtn.style.opacity = '0.6';

        setTimeout(() => {
            triggerConfetti();
            showWishesMessage();
        }, 350);
    });
}

// ========== CONFETTI EFFECT ==========
function triggerConfetti() {
    const duration = 2500;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        confetti(Object.assign({}, defaults, {
            particleCount: 45,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#ffd700', '#ffed4e']
        }));

        confetti(Object.assign({}, defaults, {
            particleCount: 45,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#ffd700', '#ffed4e']
        }));
    }, 250);
}

// ========== SHOW WISHES MESSAGE ==========
function showWishesMessage() {
    if (!wishesMsg) return;

    wishesMsg.classList.remove('hidden');
    gsap.fromTo(wishesMsg,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
}

// ========== TYPEWRITER EFFECT ==========
function typeWriter(element, caret, text, speed = 28) {
    let index = 0;
    element.textContent = '';

    const timer = setInterval(() => {
        element.textContent += text.charAt(index);
        index += 1;

        if (index >= text.length) {
            clearInterval(timer);
            if (caret) {
                caret.style.display = 'none';
            }
        }
    }, speed);
}

if (oracleText) {
    const oracleObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter(oracleText, oracleCaret, oracleText.dataset.text || '', 28);
                oracleObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });

    oracleObserver.observe(oracleText);
}

// ========== STORY SECTION ==========
const storyBook = document.getElementById('storyBook');
const bookPages = document.querySelector('.book-pages');
const closeBtn = document.getElementById('closeBook');

if (storyBook && bookPages && closeBtn) {
    // Open book on click
    storyBook.addEventListener('click', () => {
        storyBook.classList.add('open');
        bookPages.classList.add('open');
        closeBtn.classList.add('visible');
        document.body.style.overflow = 'hidden';
    });

    // Close book on button click
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        storyBook.classList.remove('open');
        bookPages.classList.remove('open');
        closeBtn.classList.remove('visible');
        document.body.style.overflow = 'auto';
    });

    // Close book on page click outside content
    bookPages.addEventListener('click', (e) => {
        if (e.target === bookPages) {
            storyBook.classList.remove('open');
            bookPages.classList.remove('open');
            closeBtn.classList.remove('visible');
            document.body.style.overflow = 'auto';
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && bookPages.classList.contains('open')) {
            storyBook.classList.remove('open');
            bookPages.classList.remove('open');
            closeBtn.classList.remove('visible');
            document.body.style.overflow = 'auto';
        }
    });
}

// ========== ALIAS SECTION ==========
const aliasReveal = document.getElementById('aliasReveal');
const aliasPanel = document.getElementById('aliasPanel');
const aliasAudioBtn = document.getElementById('aliasAudio');
const aliasAudioFile = document.getElementById('aliasAudioFile');
const aliasAudioLabel = aliasAudioBtn ? aliasAudioBtn.querySelector('span') : null;

if (aliasAudioFile) {
    aliasAudioFile.volume = 0.1;
}

if (aliasReveal && aliasPanel) {
    aliasReveal.addEventListener('click', () => {
        aliasPanel.classList.add('show');
        aliasPanel.setAttribute('aria-hidden', 'false');
        aliasReveal.setAttribute('aria-expanded', 'true');

        if (aliasAudioFile && aliasAudioFile.paused) {
            aliasAudioFile.play().then(() => {
                if (aliasAudioBtn) {
                    aliasAudioBtn.classList.add('playing');
                }
                if (aliasAudioLabel) {
                    aliasAudioLabel.textContent = 'Đang phát nhạc';
                }
            }).catch(() => {
                if (aliasAudioLabel) {
                    aliasAudioLabel.textContent = 'Nhấp để phát nhạc';
                }
            });
        }
    });
}

if (aliasAudioBtn && aliasAudioFile) {
    aliasAudioBtn.addEventListener('click', () => {
        if (aliasAudioFile.paused) {
            aliasAudioFile.play();
            aliasAudioBtn.classList.add('playing');
            if (aliasAudioLabel) {
                aliasAudioLabel.textContent = 'Đang phát nhạc';
            }
        } else {
            aliasAudioFile.pause();
            aliasAudioBtn.classList.remove('playing');
            if (aliasAudioLabel) {
                aliasAudioLabel.textContent = 'Nhấp để phát nhạc';
            }
        }
    });

    aliasAudioFile.addEventListener('ended', () => {
        aliasAudioBtn.classList.remove('playing');
        if (aliasAudioLabel) {
            aliasAudioLabel.textContent = 'Nhấp để phát nhạc';
        }
    });
}

// ========== MEMORY NODES ==========
if (memoryNodes.length) {
    const memoryObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                memoryObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    memoryNodes.forEach(node => memoryObserver.observe(node));
}

// Parallax disabled to keep the background stable on scroll.

// ========== SOUND EFFECTS ==========
function playSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(420, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(620, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.18, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.12);
    } catch (e) {
        console.log('Audio context not available');
    }
}

// ========== ACCESSIBILITY ==========
cards.forEach((card, index) => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', index);
    card.setAttribute('aria-label', `Lá bài Tarot số ${index + 1}`);
});