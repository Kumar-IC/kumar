# Omar Ibarra — Bio/Portfolio

Sitio estático (HTML, CSS y JS) optimizado para tu bio profesional: servicios, proyectos y contacto.
Incluye cabecera con degradado + onda + avatar circular, animaciones suaves, modo oscuro y SEO básico.

## Estructura
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/` (coloca aquí tu foto `avatar.png` y covers de proyectos)
- `assets/icons/` (SVG de redes)

## Cómo usar
1. Abre `index.html` en tu navegador para verlo localmente.
2. Cambia los enlaces de redes en el HTML o en los `data-*` del botón de contacto.
3. Reemplaza `assets/img/avatar.png` por tu foto (PNG recortado en círculo o fondo transparente).
4. Edita la lista de servicios y proyectos en el HTML.

## Deploy gratis (elige uno)

### GitHub Pages
1. Crea un repo en GitHub y sube estos archivos.
2. Ve a **Settings → Pages → Deploy from Branch** y selecciona la rama principal.
3. La web quedará publicada en `https://<tu-usuario>.github.io/<repo>/`.

### Netlify
1. Crea una cuenta en Netlify.
2. Importa tu repo → Framework: *None*, Directorio base: raíz del repo.
3. Deploy automático en cada commit.

### Vercel
1. Crea una cuenta y pulsa **New Project**.
2. Importa el repo y deploy. (Proyecto estático, sin build necesaria).

## Personalización rápida
- Colores del degradado: en `:root` (`--brand-1` y `--brand-2`) dentro de `styles.css`.
- Foto y textos: `index.html`.
- Animaciones: `main.js` y clases `.reveal`.

© 2025 Omar Ibarra — Nave Espacial
