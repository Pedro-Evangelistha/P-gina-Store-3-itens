// Seleciona o botão "anterior" com base no ID 'prev'
const prevButton = document.getElementById('prev')

// Seleciona o botão "próximo" com base no ID 'next'
const nextButton = document.getElementById('next')

// Seleciona todos os elementos com a classe 'item' (provavelmente os slides do carrossel)
const items = document.querySelectorAll('.item')

// Seleciona todos os elementos com a classe 'dot' (indicadores de navegação)
const dots = document.querySelectorAll('.dot')

// Seleciona o elemento que exibe o número atual do slide
const numberIndicator = document.querySelector('.numbers')

// Seleciona a lista que contém os slides (possivelmente usada para futuras interações ou estilizações)
const list = document.querySelector('.list')

// Define o slide ativo inicial como o primeiro (índice 0)
let active = 0

// Armazena o total de slides
const total = items.length 

// Variável usada para controlar o temporizador do carrossel automático
let timer

// Função que atualiza o carrossel com base na direção passada: +1 (próximo) ou -1 (anterior)
function update(direction) {
    // Remove a classe 'active' do slide e indicador atualmente ativos
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    // Se a direção for positiva, avança para o próximo slide
    if (direction > 0) {
        active = active + 1

        // Se passar do último slide, volta para o primeiro
        if (active === total) {
            active = 0
        }
    } 
    // Se a direção for negativa, volta para o slide anterior
    else if (direction < 0) {
        active = active - 1

        // Se passar do primeiro slide, vai para o último
        if (active < 0) {
            active = total - 1
        }
    }

    // Adiciona a classe 'active' ao novo slide e indicador correspondentes
    items[active].classList.add('active')
    dots[active].classList.add('active')

    // Atualiza o número do slide na interface, formatado com dois dígitos
    numberIndicator.textContent = String(active + 1).padStart(2, '0')

    // Reinicia o temporizador do carrossel automático para evitar mudança imediata após clique
    clearInterval(timer)
    timer = setInterval(() => {
        update(1)
    }, 5000)
}

// Adiciona o evento de clique ao botão "anterior" para mover o carrossel para trás
prevButton.addEventListener('click', () => {
    update(-1)
})

// Adiciona o evento de clique ao botão "próximo" para avançar no carrossel
nextButton.addEventListener('click', () => {
    update(+1)
})

// Inicia o carrossel automático ao carregar a página, trocando de slide a cada 5 segundos
timer = setInterval(() => {
    update(1)
}, 5000)
