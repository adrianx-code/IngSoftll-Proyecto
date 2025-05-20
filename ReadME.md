# 🎵 Track by Track

**Track by Track** es una aplicación web  interactiva creada para los fanáticos de la música. Ofrece a los usuarios la posibilidad de encontrar canciones, ver artistas populares y publicar críticas musicales. Esta plataforma utiliza Firebase para la autenticación de usuarios y Firestore como base de datos en la nube, garantizando una experiencia segura y dinámica.

---

[Ver vídeo de la presentación en YouTube](https://youtu.be/Lu1iUIWRasg)
---

[📄 Ver presentación en PDF](./presentacion/Track_by_track_presentation%20(1).pdf)
--- 

## 🚀 Funcionalidades

### 🔐 Autenticación de usuarios
- Registro y acceso mediante correo electrónico y contraseña.
- Gestión segura de sesiones utilizando Firebase Authentication.
- Almacenamiento de datos del usuario (nombre, correo, fecha de registro) en Firestore.

### 🏠 Página principal (`home.html`)
- Carrusel interactivo de artistas cargado dinámicamente desde Firestore.
- Barra de búsqueda para encontrar canciones rápidamente.
- Botón de cierre de sesión integrado.

### 🔍 Búsqueda de canciones
- Redirección a la página `intermediate.html` con los resultados de búsqueda.
- (Por implementar) Visualización de comentarios y publicación de reseñas para cada canción.

### 📄 Archivo de referencia
- `Album track.pdf`: incluye información de álbumes y listas de canciones de artistas como Michael Jackson, Bad Bunny, Bruno Mars y Billie Eilish. Útil como fuente de Firestore.

---

## 🧰 Tecnologías utilizadas

| Tecnología           | Descripción                                 |
|----------------------|---------------------------------------------|
| HTML, CSS, JavaScript| Estructura y comportamiento del sitio       |
| Bootstrap            | Componentes visuales responsivos            |
| Animate.css          | Animaciones de interfaz                     |
| Firebase Auth        | Registro e inicio de sesión de usuarios     |
| Firebase Firestore   | Almacenamiento de artistas y usuarios       |

---

## 📁 Estructura del proyecto

```
├── index.html            # Página de inicio de sesión y registro
├── home.html             # Página principal para usuarios autenticados
├── intermediate.html     # (Por desarrollar) Vista de detalle para cada canción
├── app.js                # Lógica para cargar artistas y búsqueda
├── register.js           # Registro e inicio de sesión con Firebase
├── styles.css            # Estilos personalizados
├── Album track.pdf       # Lista de álbumes y canciones
└── images/
    └── logo1.webp        # Logotipo del sitio
```

---

## ⚙️ Instrucciones de uso

1. **Copiar el enlace:**
```
 **track-by-track**
clone https://drewster64.github.io/2025-Software-Eng-II/index.html

```

2. **Abrir `https://drewster64.github.io/2025-Software-Eng-II/index.html` en tu navegador.**

3. **Registrar una cuenta y acceder a la plataforma.**

4. **Explorar artistas en la página principal .**

5. **Buscar canciones usando la "Search Bar".**

6. **Luego escribo el nombre de la cancion o album que quieras dar reseñas en la misma se puede comentar y clasificar con estrellas del 1 al 5.**

7. **Despues puedes volver a la pagina principal para buscar otros artistas, canciones o albumes en especificos.**
---


- **Reglas de seguridad:** Se recomienda configurar reglas en Firestore para restringir escritura solo a usuarios autenticados.

---

## 📬 Contacto

Proyecto desarrollado por Emanuel Franco Ruiz, Benyahir Martinez Hermina, Jose Barreto Cordova y John Valentin Jimenez.  
Para sugerencias o reportes: [trackbytrack@ejemplo.com]

---

© 2025 – Track by Track. Todos los derechos reservados.

---