// Cambia BUCKET por el nombre de tu bucket de GCP (o define BUCKET_URL como variable de entorno)
const BUCKET_URL = process.env.BUCKET_URL || 'https://storage.googleapis.com/pokeneas-depcito-img'

const pokeneas = [
  { id: 1, nombre: 'Paisachu', altura: '1.10 m', habilidad: 'Arepa eléctrica', imagen: 'pokenea1.png', frase: 'Más vale arepa en mano que ciento volando.' },
  { id: 2, nombre: 'Medellinbasaur', altura: '1.30 m', habilidad: 'Metro veloz', imagen: 'pokenea2.png', frase: 'Pensar es el primer paso; arrancar, el segundo.' },
  { id: 3, nombre: 'Silletamon', altura: '0.90 m', habilidad: 'Florecer', imagen: 'pokenea3.png', frase: 'Cargar con belleza también es una forma de fortaleza.' },
  { id: 4, nombre: 'Guatapeon', altura: '1.50 m', habilidad: 'Escalar piedra', imagen: 'pokenea4.png', frase: 'Los que suben con paciencia ven el mejor paisaje.' },
  { id: 5, nombre: 'Trovador', altura: '1.20 m', habilidad: 'Canto de carriel', imagen: 'pokenea5.png', frase: 'Quien canta su vida, la vive dos veces.' },
  { id: 6, nombre: 'Bandejachu', altura: '1.00 m', habilidad: 'Hambre voraz', imagen: 'pokenea6.png', frase: 'El que no se llena de preguntas se queda con hambre de saber.' },
  { id: 7, nombre: 'Arrieromon', altura: '1.60 m', habilidad: 'Cargar sin quejarse', imagen: 'pokenea7.png', frase: 'El camino se hace andando, y se aprende tropezando.' },
  { id: 8, nombre: 'Cafetino', altura: '0.80 m', habilidad: 'Despertar al mundo', imagen: 'pokenea8.png', frase: 'Lo bueno se toma con calma, pero se empieza temprano.' },
].map((p) => ({ ...p, imagen: `${BUCKET_URL}/${p.imagen}` }))

module.exports = pokeneas
