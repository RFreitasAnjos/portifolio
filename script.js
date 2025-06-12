// Cria o botão de mudança de cor
const changeColorButton = document.createElement('button');
changeColorButton.id = 'changeColorButton';
changeColorButton.innerHTML = '	&#8224;';
changeColorButton.style.display = 'absolute';
changeColorButton.style.top = '10px';
changeColorButton.style.right = '10px';
changeColorButton.title = 'Alterar para modo monocromático';

// Cria o botão de rolagem para baixo
const downPage = document.createElement('button');
downPage.id = 'downPage';
downPage.innerHTML = '&#9660;'; // ícone de seta para baixo (▼)
downPage.classList.add('scroll-down');
downPage.style.display = 'none'; // Esconde por padrão

// Cria o botão burger
const burgerButton = document.createElement('button');
burgerButton.id = 'burgerButton';
burgerButton.innerHTML = '&#9776;'; // ícone de menu (☰)
burgerButton.style.display = 'none'; // Esconde por padrão

const hero = document.querySelector('.hero');
if (hero) {
    hero.appendChild(downPage);
}

// Adiciona o botão de mudança de cor ao body
if (document.body) {
    document.body.appendChild(changeColorButton);
}

// Adiciona o evento de clique para mudar a cor do fundo
let toggled = false;
changeColorButton.addEventListener('click', function() {
    toggled = !toggled;
    const root = document.documentElement;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');
    // Define a nova cor
    if (toggled) {
        root.style.setProperty('--primary-color', '#000000');
        root.style.setProperty('--secondary-color', '#222');
        root.style.setProperty('--background-color-about','#111');
        root.style.setProperty('--background-color-project', '#111');
        root.style.setProperty('--text-color', '#000');
        root.style.setProperty('--text-color-light', '#fff');
        hero.style.background = 'url(/assets/img.jpg) no-repeat center center/cover';
        heroImage.style.display = 'none'; // Esconde a imagem do herói 
        heroContent.style.margin = '433px'// Esconde o conteúdo do herói
    } else {
        root.style.setProperty('--primary-color', '#e1922d');
        root.style.setProperty('--secondary-color', '#cd8122');
        root.style.setProperty('--background-color-about','#b87017');
        root.style.setProperty('--background-color-project', '#fcecd4');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--text-color-light', '#fff');
        heroImage.style.display = 'block'; // Mostra a imagem do herói
        heroContent.style.margin = '0'; // Restaura o conteúdo do herói
        hero.style.background = 'none'; // Restaura o fundo do herói
    }
});

downPage.addEventListener('click', function() {
    if(window.innerWidth <= 768) {
        // Rola para a próxima seção se estiver em mobile
        const nextSection = document.querySelector('.about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Adiciona o botão ao header
const header = document.querySelector('header');
if (header) {
    header.appendChild(changeColorButton);
    header.appendChild(burgerButton);
}

// Seleciona a nav do header
const nav = document.querySelector('header nav');
if (nav) {
    nav.style.transition = 'max-height 0.3s ease';
    nav.style.overflow = 'hidden';
    nav.style.maxHeight = 'none'; // Mostra por padrão
}

// Função para verificar largura da tela
function checkMobile() {
    if (window.innerWidth <= 768) {
        burgerButton.style.display = 'block';
        downPage.style.display = 'block';
        if (nav) nav.style.maxHeight = '0';
    } else {
        burgerButton.style.display = 'none';
        downPage.style.display = 'none';
        if (nav) nav.style.maxHeight = 'none';
    }
}

// Evento de clique no burger
burgerButton.addEventListener('click', function() {
    if (nav) {
        if (nav.style.maxHeight === '0px' || nav.style.maxHeight === '0') {
            nav.style.maxHeight = 18 + 'px';
        } else {
            nav.style.maxHeight = '0';
        }
    }
});

// Atualiza ao redimensionar
window.addEventListener('resize', checkMobile);

// Chama ao carregar
checkMobile();