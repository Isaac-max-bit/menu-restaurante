# Menú de restaurante con QR (React + Vite)

Al abrir el sitio se muestra un código QR; al escanearlo (o pulsar "Ver el menú") aparece la carta.

## Uso local
```bash
npm install
npm run dev
```

## Personalizar
- Carta y nombre del restaurante: `src/data/menu.js`
- Colores y tipografía: `src/index.css`
- Ruta base para GitHub Pages: `vite.config.js` (nombre exacto del repo)

## Despliegue
Sube el proyecto a GitHub, activa **Settings → Pages → Source: GitHub Actions** y haz `git push` a `main`.
