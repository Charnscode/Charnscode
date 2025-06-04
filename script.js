document.getElementById('generateButton').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const animeFav = document.getElementById('animeFav').value;
  const specialSkill = document.getElementById('specialSkill').value;

  if (username && animeFav && specialSkill) {
    // Afficher les informations sur la carte
    document.getElementById('cardUsername').textContent = username;
    document.getElementById('cardAnimeFav').textContent = animeFav;
    document.getElementById('cardSpecialSkill').textContent = specialSkill;

    // Afficher la carte et le bouton intermédiaire
    document.getElementById('otakuCard').classList.remove('hidden');
    document.getElementById('intermediateButton').classList.remove('hidden');
  } else {
    alert('Veuillez remplir tous les champs pour générer votre carte.');
  }
});

document.getElementById('intermediateButton').addEventListener('click', function() {
  // Rediriger vers le lien http://127.0.0.1:8080
  window.location.href = 'http://127.0.0.1:8080';
});