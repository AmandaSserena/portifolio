document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 100,  // Número de partículas (estrelas)
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            shape: {
                type: "star", // Forma das partículas
            },
            opacity: {
                value: 0.8,
                random: true
            },
            size: {
                value: 5,
                random: true
            },
            move: {
                enable: true,
                speed: 1.5, // Velocidade do movimento das estrelas
                direction: "none",
                out_mode: "out", // Faz as estrelas reaparecerem na tela ao sair
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse" // Afasta as estrelas ao passar o mouse
                },
                onclick: {
                    enable: true,
                    mode: "push" // Faz as estrelas continuarem se movendo
                }
            },
            modes: {
                repulse: {
                    distance: 100, // Distância de afastamento das estrelas
                    duration: 0.4 // Tempo de efeito do afastamento
                },
                push: {
                    particles_nb: 4 // Adiciona mais movimento ao clicar
                }
            }
        },
        retina_detect: true
    });
});


document.addEventListener("scroll", function() {
    const fadeElements = document.querySelectorAll(".fade");
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            element.classList.add("show");
        }
    });
});