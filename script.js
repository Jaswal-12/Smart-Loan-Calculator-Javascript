const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");

function createProfileCard() {
  const profileCard = document.createElement("div");
  profileCard.className = "profile-card";

  const profileImage = document.createElement("img");
  profileImage.src = "https://i.pravatar.cc/150?img=" + Math.floor(Math.random() * 70);

  const profileDescription = document.createElement("p");
  profileDescription.textContent =
    "A passionate Web Developer with experience in JavaScript and React.";

  profileCard.appendChild(profileImage);
  profileCard.appendChild(profileDescription);

  appContainer.appendChild(profileCard);
}

// Button click pe card banega
generateBtn.addEventListener("click", createProfileCard);