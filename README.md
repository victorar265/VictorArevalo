# Portafolio de Víctor Elías Arévalo Cancinos

Sitio estático (HTML, CSS y JavaScript), sin dependencias ni proceso de compilación.

## Estructura

```
index.html  sobre-mi.html  habilidades.html  proyectos.html  contacto.html
css/styles.css
js/main.js
recursos/
  victora.jpeg   (foto personal)
  bandat.mp4     (video de la banda transportadora)
  vpochi.mp4     (video de Pochi)
```

La carpeta `recursos` debe contener exactamente esos tres archivos, con esos nombres.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `portafolio`).
2. Sube todo el contenido de esta carpeta, incluida la carpeta `recursos` con sus tres archivos. Usa "Add file > Upload files" y arrastra las carpetas, o usa git.
3. Entra a Settings > Pages. En "Build and deployment" elige "Deploy from a branch", rama `main` y carpeta `/ (root)`. Guarda.
4. Espera uno o dos minutos. El sitio quedará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

Todas las rutas son relativas, así que funciona igual en la raíz de un dominio o dentro de un repositorio.
