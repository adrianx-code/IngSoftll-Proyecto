import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8OziYZn9iiiIH19SfXf1tw6UOoYA1apA",
  authDomain: "try1-8c82b.firebaseapp.com",
  projectId: "try1-8c82b",
  storageBucket: "try1-8c82b.appspot.com",
  messagingSenderId: "722840528217",
  appId: "1:722840528217:web:85547781c2230e8b1d5848"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// REGISTRO DE USUARIO (NO REDIRIGE)
document.addEventListener("DOMContentLoaded", () => {
  const registerBtn = document.getElementById("register-btn");
  if (registerBtn) {
    registerBtn.addEventListener("click", async () => {
      const name = document.getElementById("signup-name").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
          createdAt: new Date()
        });

        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
      } catch (error) {
        console.error("Error en el registro:", error);
        alert("Error: " + error.message);
      }
    });
  } else {
    console.error('El botón de registro no se encontró en el DOM.');
  }
});

// INICIO DE SESIÓN (REDIRIGE AL INDEX)
document.getElementById("login-btn").addEventListener("click", async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  localStorage.setItem("loggedInUser",email);

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("¡Inicio de sesión exitoso! Redirigiendo...");
    window.location.href = "home.html"; // 🔹 Solo redirige al iniciar sesión
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    alert("Error: " + error.message);
  }
});

