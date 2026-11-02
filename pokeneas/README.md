# Pokeneas (Taller 02)

Express + Docker + Docker Swarm en GCP.

## Rutas
- `GET /api/pokenea` → JSON (id, nombre, altura, habilidad, containerId)
- `GET /` → imagen + frase filosófica + id del contenedor

## Ejecutar local
```
npm install
PORT=3000 node index.js
```
(en PowerShell: `$env:PORT=3000; node index.js`)

## Docker
```
docker build -t pokeneas .
docker run -d -p 80:80 pokeneas
```

## Configuración
- Imágenes en el bucket de GCP: ajusta `BUCKET_URL` en `src/data/pokeneas.js`.
- GitHub Secrets: `DOCKERHUB_USER` (depcito) y `DOCKERHUB_PASS` (access token).
