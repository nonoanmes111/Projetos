// Configuração inicial do p5.js
function setup() {
  createCanvas(800, 600);
  background(255); // Fundo branco para alto contraste
  textAlign(CENTER);
  textSize(20);
  textFont('Arial'); // Fonte legível

  // Criar elementos interativos
  createHeader();
  createDescription();
  createButton();
}

// Variáveis globais
let button;
let osc;

// Função para criar o título
function createHeader() {
  fill(0); // Texto preto para alto contraste
  textSize(32);
  textStyle(BOLD);
  text('Bem-vindo ao Mundo do Jazz', width / 2, 100);
  textSize(20);
  textStyle(NORMAL);
}

// Função para criar a descrição do jazz
function createDescription() {
  fill(0);
  text('O Jazz é um estilo musical que nasceu no final do século XIX nos EUA,', width / 2, 200);
  text('com raízes na música afro-americana. É conhecido pela improvisação,', width / 2, 230);
  text('ritmos swing e harmonias complexas.', width / 2, 260);
  text('Pressione a tecla "Espaço" ou clique no botão para ouvir uma nota de jazz!', width / 2, 290);
}

// Função para criar o botão interativo
function createButton() {
  button = createButton('Tocar Nota de Jazz');
  button.position(width / 2 - 80, 350);
  button.size(160, 40);
  button.style('font-size', '16px');
  button.style('background-color', '#000000'); // Preto para alto contraste
  button.style('color', '#FFFFFF'); // Texto branco
  button.style('border', '2px solid #FFFFFF');
  button.attribute('aria-label', 'Botão para tocar uma nota de jazz'); // Suporte a leitores de tela
  button.mousePressed(playJazzNote);
}

// Função para tocar uma nota musical
function playJazzNote() {
  osc = new p5.Oscillator('sine');
  osc.setType('sine');
  osc.freq(440); // Nota A4, comum em jazz
  osc.amp(0.5);
  osc.start();
  osc.stop(0.5); // Toca por 0.5 segundos
}

// Função de desenho contínuo
function draw() {
  // Atualiza o fundo para manter alto contraste
  background(255);
  createHeader();
  createDescription();
}

// Suporte a navegação por teclado
function keyPressed() {
  if (key === ' ') { // Tecla espaço para ativar a nota
    playJazzNote();
  }
}
