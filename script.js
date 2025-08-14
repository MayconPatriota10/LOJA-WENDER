document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const contactLink = document.querySelector('a[href="#contact"]');
    const socialIcons = document.querySelectorAll('.social-icon');

    // Abrir modal do carrinho
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        updateCart();
    });

    // Fechar modal
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Atualizar carrinho (vazio por enquanto)
    function updateCart() {
        cartItems.innerHTML = '<p>Seu carrinho está vazio.</p>';
        cartTotal.textContent = '0.00';
    }

    // Finalizar compra (exemplo)
    checkoutBtn.addEventListener('click', () => {
        alert('Nenhum item no carrinho.');
        cartModal.style.display = 'none';
    });

    // Rolar suavemente para o rodapé e animar ícones sociais
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        const footer = document.getElementById('contact');
        footer.scrollIntoView({ behavior: 'smooth' });

        // Animação sequencial dos ícones, repetida 3 vezes
        for (let i = 0; i < 3; i++) {
            socialIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.classList.add('blink');
                    setTimeout(() => {
                        icon.classList.remove('blink');
                    }, 1000); // Cada ícone pisca por 1s (2 piscadas de 0.5s)
                }, (i * 3333) + (index * 1000)); // Sequência: 0s, 1s, 2s por repetição
            });
        }
    });
});