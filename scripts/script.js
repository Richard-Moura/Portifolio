const botao = document.getElementById('botao-tema');
const body = document.body;
// Constante que define a classe usada no CSS para o tema escuro
const CLASSE_TEMA = 'dark'; 

// Função para aplicar o tema e atualizar o ícone
function aplicarTema(isEscuro) {
    if (isEscuro) {
        body.classList.add(CLASSE_TEMA);
        // Ícone de Sol para indicar que pode voltar ao Claro
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>'; 
    } else {
        body.classList.remove(CLASSE_TEMA);
        // Ícone de Lua para indicar que pode ir para o Escuro
        botao.innerHTML = '<i class="fa-solid fa-moon"></i>'; 
    }
}

// 1. Persistência no Carregamento: Verifica o localStorage
const temaSalvo = localStorage.getItem('tema'); 
aplicarTema(temaSalvo === CLASSE_TEMA);


// 2. Listener de Alternância (Click no botão)
botao.addEventListener('click', () => {
    // Alterna a classe e armazena o novo estado (true/false)
    const isEscuro = body.classList.toggle(CLASSE_TEMA); 
    
    // Aplica o tema e atualiza o ícone
    aplicarTema(isEscuro); 
    
    // Salva o novo estado no localStorage
    localStorage.setItem('tema', isEscuro ? CLASSE_TEMA : 'claro');
});


// 3. Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20; 
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});