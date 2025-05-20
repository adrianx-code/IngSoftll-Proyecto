import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC8OziYZn9iiiIH19SfXf1tw6UOoYA1apA",
    authDomain: "try1-8c82b.firebaseapp.com",
    projectId: "try1-8c82b",
    storageBucket: "try1-8c82b.appspot.com",
    messagingSenderId: "722840528217",
    appId: "1:722840528217:web:85547781c2230e8b1d5848"
};

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);
const auth = getAuth(app);

// Cargar artistas en el carrusel desde Firestore
async function cargarArtistas() {
    console.log("🔄 Cargando artistas desde Firestore...");
  
    const artistasRef = collection(db, "artistas");
    const snapshot = await getDocs(artistasRef);
    const carouselInner = document.querySelector(".carousel-inner");
  
    if (!carouselInner) {
        console.error("⚠️ No se encontró el elemento .carousel-inner en el HTML.");
        return;
    }
  
    let first = true;
    carouselInner.innerHTML = ""; 
  
    snapshot.forEach((doc) => {
        const artista = doc.data();
        console.log("✅ Artista encontrado:", artista);

        if (!artista.image || !artista.name) {
            console.warn("⚠️ Documento inválido en artistas:", doc.id, artista);
            return;
        }
  
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (first) {
            item.classList.add("active");
            first = false;
        }
  
        item.innerHTML = `
            <div class="d-flex flex-column align-items-center">
                <img src="${artista.image}" alt="${artista.name}" class="d-block mx-auto img-fluid rounded" style="width: 500px; height: 500px; object-fit: cover;">
                <div class="mt-2">
                    <span class="btn fw-bold" style="color: white; font-size: 185%">${artista.name}</span>
                </div>
            </div>
        `;
  
        carouselInner.appendChild(item);
    });
  
    console.log("Carrusel actualizado con los artistas.");
}

// 🔍 Redirigir a intermediate.html con la búsqueda
function buscarCancion() {
    const searchInput = document.getElementById("search-input");
    const query = searchInput.value.trim();

    if (query) {
        const currentPath = window.location.pathname;
        const basePath = currentPath.includes("/2025-Software-Eng-II")
            ? "/2025-Software-Eng-II"
            : "";

        // Redirige a intermediate.html en vez de songs.html
        window.location.href = `${basePath}/intermediate/intermediate.html?nombre=${encodeURIComponent(query)}`;
    }
}

// Escuchar evento del formulario de búsqueda
document.getElementById("search-form").addEventListener("submit", function(e) {
    e.preventDefault();
    buscarCancion();
});

// 🔒 Logout con Firebase Auth
document.addEventListener("DOMContentLoaded", () => {
    cargarArtistas(); // Cargar artistas al iniciar

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            try {
                await signOut(auth);
                alert("Sesión cerrada exitosamente.");
                window.location.href = "index.html";
            } catch (error) {
                console.error("Error al cerrar sesión:", error);
                alert("Error al cerrar sesión.");
            }
        });
    }
});