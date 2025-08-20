<!DOCTYPE html>
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/addons/p5.sound.min.js"></script>
</head>
<body>
<script>
// Variáveis globais
let button;
let osc;
let particles = [];

// Configuração inicial
function setup() {
  createCanvas(800, 600);
  textAlign(CENTER);
  textFont('Arial'); // Fonte legível
  createHeader();
  createDescription();
  createButton();
  // Inicializar partículas
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle());
  }
}

// Função para criar o título
function createHeader() {
  fill(255, 204, 0); // Dourado para destaque
  textSize(36);
  textStyle(BOLD);
  text('Bem-vindo ao Mundo do Jazz', width / 2, 100);
  textSize(20);
  textStyle(NORMAL);
}

// Função para criar a descrição
function createDescription() {
  fill(255); // Texto branco para contraste
  text('O Jazz é um estilo musical que nasceu no final do século XIX nos EUA,', width / 2, 200);
  text('com raízes na música afro-americana. É conhecido pela improvisação,', width / 2, 230);
  text('ritmos swing e harmonias complexas.', width / 2, 260);
  text('Pressione a tecla "Espaço" ou clique no botão para ouvir uma nota de jazz!', width / 2, 290);
  text('Use as teclas "1" ou "2" para mudar o tom da nota.', width / 2, 320);
}

// Função para criar o botão interativo
function createButton() {
  button = createButton('Tocar Nota de Jazz');
  button.position(width / 2 - 80, 350);
  button.size(160, 40);
  button.style('font-size', '16px');
  button.style('background-color', '#1E90FF'); // Azul vibrante
  button.style('color', '#FFFFFF'); // Texto branco
  button.style('border', '2px solid #FFFFFF');
  button.style('transition', 'background-color 0.3s'); // Transição suave
  button.attribute('aria-label', 'Botão para tocar uma nota de jazz'); // Suporte a leitores de tela
  button.attribute('role', 'button');
  button.attribute('tabindex', '0'); // Foco por teclado
  button.mousePressed(playJazzNote);
  button.mouseOver(() => button.style('background-color', '#FF4500')); // Laranja ao passar o mouse
  button.mouseOut(() => button.style('background-color', '#1E90FF')); // Volta ao azul
}

// Função para tocar uma nota musical
function playJazzNote(freq = 440) {
  osc = new p5.Oscillator('sine');
  osc.setType('sine');
  osc.freq(freq); // Frequência ajustável
  osc.amp(0.5);
  osc.start();
  osc.stop(0.5); // Toca por 0.5 segundos
}

// Classe para partículas animadas
class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.size = random(5, 15);
    this.color = color(random(100, 255), 100, random(100, 255)); // Tons de roxo e azul
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    // Reposicionar partículas ao sair da tela
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

// Função de desenho contínuo
function draw() {
  background(25, 25, 112); // Fundo azul escuro (midnight blue)
  // Desenhar partículas
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
  createHeader();
  createDescription();
}

// Suporte a navegação por teclado
function keyPressed() {
  if (key === ' ') { // Tecla espaço para nota padrão
    playJazzNote(440);
  } else if (key === '1') { // Tecla 1 para nota mais grave
    playJazzNote(392); // Nota G4
  } else if (key === '2') { // Tecla 2 para nota mais aguda
    playJazzNote(523.25); // Nota C5
  }
}
</script>
</body>
</html>
