document.addEventListener('DOMContentLoaded', () => {
    // --- Inicialização do AOS (Animate On Scroll) ---
    AOS.init({
        duration: 1200, // Duração da animação em milissegundos
        once: true,     // Animar apenas uma vez por elemento
    });
    
    // --- Menu Responsivo ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Alterna a classe 'show' no menu ao clicar no botão
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Fecha o menu ao clicar em um link (útil para navegação mobile)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    });

    // --- (Opcional) Validação Básica de Formulário de Contato ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Aqui você enviaria os dados para um servidor
                alert('Mensagem enviada com sucesso! Obrigado pelo contato, ' + name + '!');
                contactForm.reset(); // Limpa o formulário
            } else {
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
    }
});