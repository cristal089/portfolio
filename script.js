// ============================================
// FILTROS DO PORTFÓLIO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona active ao botão clicado
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.animation = 'pixel-fade-in 0.6s ease-out';
                    }, 10);
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === filterValue) {
                        item.classList.remove('hidden');
                        item.style.animation = 'none';
                        setTimeout(() => {
                            item.style.animation = 'pixel-fade-in 0.6s ease-out';
                        }, 10);
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
});

// ============================================
// NAVEGAÇÃO SUAVE E HIGHLIGHT ATIVO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveSection() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.style.color = '';
                    link.style.borderBottom = '';
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.color = 'var(--mario-red)';
                        link.style.borderBottom = '2px solid var(--mario-red)';
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Chama uma vez no carregamento
});

// ============================================
// ANIMAÇÕES AO SCROLL
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.sobre-content, .portfolio-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ============================================
// EFEITO DE HOVER NOS CARDS DO PORTFÓLIO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ============================================
// PREVENIR FLASH DE CONTEÚDO NÃO ESTILIZADO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    window.addEventListener('load', function() {
        document.body.style.transition = 'opacity 0.3s';
        document.body.style.opacity = '1';
    });
});

// ============================================
// EFEITO DE PARTÍCULAS PIXEL (OPCIONAL)
// ============================================
function createPixelParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '-10px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9998';
    particle.style.transition = 'opacity 0.5s';
    
    document.body.appendChild(particle);
    
    const duration = Math.random() * 3000 + 2000;
    const leftMovement = (Math.random() - 0.5) * 200;
    
    particle.animate([
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${leftMovement}px, ${window.innerHeight + 20}px) rotate(360deg)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'linear'
    }).onfinish = () => {
        particle.remove();
    };
}

// Criar partículas ocasionalmente (descomente para ativar)
// setInterval(createPixelParticle, 5000);

// ============================================
// MODAL DE IMAGEM (ZOOM)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');
    const portfolioImages = document.querySelectorAll('.portfolio-image img');

    // Abrir modal ao clicar em qualquer imagem
    portfolioImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Prevenir scroll do body
        });
    });

    // Fechar modal com botão X
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeModal();
        });
    }

    // Fechar modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll do body
    }
});

