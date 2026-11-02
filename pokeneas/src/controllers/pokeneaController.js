const os = require('os')
const pokeneas = require('../data/pokeneas')

const random = () => pokeneas[Math.floor(Math.random() * pokeneas.length)]

exports.getJson = (req, res) => {
  const { id, nombre, altura, habilidad } = random()
  res.json({ id, nombre, altura, habilidad, containerId: os.hostname() })
}

exports.getView = (req, res) => {
  const { nombre, imagen, frase } = random()
  res.send(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pokenea</title>
  <style>
    body { font-family: sans-serif; text-align: center; margin: 40px; background: #f4f4f4; }
    img { max-width: 320px; border-radius: 12px; }
    blockquote { font-size: 1.3em; font-style: italic; }
    small { color: #666; }
  </style>
</head>
<body>
  <h1>${nombre}</h1>
  <img src="${imagen}" alt="${nombre}">
  <blockquote>${frase}</blockquote>
  <small>Container Id: ${os.hostname()}</small>
</body>
</html>`)
}
