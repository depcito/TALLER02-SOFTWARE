// Cambia BUCKET_URL por el nombre de tu bucket de GCP (o define BUCKET_URL como variable de entorno)
const BUCKET_URL = process.env.BUCKET_URL || 'https://storage.googleapis.com/pokeneas-depcito-img'

const pokeneas = [
  { id: 493, nombre: 'Arceus', altura: '3.2 m', habilidad: 'Multitype', imagen: 'pokenea1.png', frase: 'Quien lo crea todo sabe que cada comienzo nace de una pausa.' },
  { id: 392, nombre: 'Infernape', altura: '1.2 m', habilidad: 'Llamarada', imagen: 'pokenea2.png', frase: 'El fuego que no se alimenta de esfuerzo se apaga solo.' },
  { id: 448, nombre: 'Lucario', altura: '1.2 m', habilidad: 'Fuerza interior', imagen: 'pokenea3.png', frase: 'Escuchar el aura de los demás es el primer paso para entenderse a uno mismo.' },
  { id: 405, nombre: 'Luxray', altura: '1.4 m', habilidad: 'Intimidación', imagen: 'pokenea4.png', frase: 'Ver lo que otros ocultan no sirve si no se sabe guardar silencio.' },
  { id: 384, nombre: 'Rayquaza', altura: '7.0 m', habilidad: 'Cielo despejado', imagen: 'pokenea5.png', frase: 'Quien vive sobre las nubes aprende que toda tormenta es pasajera.' },
  { id: 486, nombre: 'Regigigas', altura: '3.7 m', habilidad: 'Inicio lento', imagen: 'pokenea6.png', frase: 'Lo que tarda en arrancar suele ser lo que más lejos llega.' },
  { id: 292, nombre: 'Shedinja', altura: '0.8 m', habilidad: 'Superguarda', imagen: 'pokenea7.png', frase: 'Cuando solo se tiene un hilo de vida, cada paso se vuelve consciente.' },
  { id: 285, nombre: 'Shroomish', altura: '0.4 m', habilidad: 'Efecto espora', imagen: 'pokenea8.png', frase: 'Ser pequeño no impide dar gracias ni sembrar vida.' },
].map((p) => ({ ...p, imagen: `${BUCKET_URL}/${p.imagen}` }))

module.exports = pokeneas
