function redirect(page) {
  if (page === 'signup') {
    window.location.href = 'inscription.html'; // ou le bon chemin
  } else if (page === 'login') {
    window.location.href = 'connexion.html'; // ou le bon chemin
  }
}

// connexion
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche l'envoi du formulaire

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // Vérification des champs
  if (!email || !password) {
    alert('Veuillez remplir tous les champs');
    return;
  }

  // Simulation de la vérification de l'email et du mot de passe (à remplacer par une vérification réelle)
  if (email === 'user@example.com' && password === '123456') {
    // Rediriger l'utilisateur vers la page d'accueil ou le tableau de bord
    window.location.href = 'dashboard.html'; // Remplace par le bon chemin
  } else {
    alert('Email ou mot de passe incorrect');
  }
});

//profil utilisateur

// Fonction pour changer la photo de profil
function changeProfileImage() {
  const fileInput = document.getElementById('upload-photo');
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('profile-image').src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Fonction pour gérer la soumission du formulaire
document.getElementById('profile-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Les modifications ont été enregistrées avec succès !');
});

//pour avoir la navbar partout

fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  });

//pour faire le pied de page

// footer-loader.js
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  });

  // publication d'objet

 // Importation de la navbar et du footer
fetch("navbar.html")
.then(res => res.text())
.then(data => {
  document.getElementById("navbar-container").innerHTML = data;
});

fetch("footer.html")
.then(res => res.text())
.then(data => {
  document.getElementById("footer-container").innerHTML = data;
});

// Publication d’objet
document.getElementById("publication-form").addEventListener("submit", function(e) {
e.preventDefault();

const title = document.getElementById("title").value.trim();
const description = document.getElementById("description").value.trim();
const category = document.getElementById("category").value;
const photo = document.getElementById("photo").files[0];

if (!photo) {
  alert("Veuillez sélectionner une photo.");
  return;
}

// Prévisualisation (ou envoi vers backend)
console.log({
  title,
  description,
  category,
  photoName: photo.name
});

alert("Objet publié avec succès !");
this.reset();
});
// Ça veut dire que l'utilisateur est maintenant connecté
localStorage.setItem("isLoggedIn", "true");







// function loginUser(event) {
//   event.preventDefault();
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   // Simulation de vérification
//   if (email === "test@example.com" && password === "123456") {
//     // Sauvegarde de l'état de connexion (ici simulé avec le localStorage)
//     localStorage.setItem("connectedUser", email);
//     // Redirection vers le profil
//     window.location.href = "profil.html";
//   } else {
//     alert("Email ou mot de passe incorrect.");
//   }
//   return false;
// }


//profil

// Fonction pour vérifier la connexion au chargement de la page
// window.onload = function () {
//   const user = localStorage.getItem("connectedUser");
//   if (user) {
//     document.getElementById("user-info").innerText = "Connecté en tant que : " + user;
//   } else {
//     alert("Vous devez être connecté.");
//     window.location.href = "connexion.html"; // Redirection vers la page de connexion si l'utilisateur n'est pas connecté
//   }
// };

// // Exemple de données utilisateur (à remplacer par une vraie API ou localStorage)
// const utilisateur = {
//   nom: "Jean Kouassi",
//   email: "jean.kouassi@example.com",
//   ville: "Yamoussoukro"
// };

// const objets = [
//   { titre: "Vélo recyclé", description: "Un vieux vélo restauré." },
//   { titre: "Canettes aluminium", description: "Lot de 50 canettes." },
//   { titre: "Bouteilles plastique", description: "10kg de bouteilles triées." }
// ];

// // Afficher les infos utilisateur
// document.getElementById('nom').textContent = utilisateur.nom;
// document.getElementById('email').textContent = "Email : " + utilisateur.email;
// document.getElementById('ville').textContent = "Ville : " + utilisateur.ville;

// // Afficher les objets recyclés/en vente
// const container = document.getElementById('liste-objets');
// objets.forEach(objet => {
//   const div = document.createElement('div');
//   div.className = 'objet';
//   div.innerHTML = `<h4>${objet.titre}</h4><p>${objet.description}</p>`;
//   container.appendChild(div);
// });

// // Fonction de déconnexion
// function logout() {
//   localStorage.removeItem("connectedUser"); // Supprimer l'utilisateur de localStorage
//   alert("Déconnexion réussie !");
//   window.location.href = "index.html"; // Redirection vers la page d'accueil après déconnexion
// }
