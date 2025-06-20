let defaultTechniques = [
  { name: "Vorslag", checked: false },
  { name: "Nachraisen", checked: false },
  { name: "Winden: Binnen Oberhangen", checked: false },
  { name: "Winden: Binnen Unterhangen", checked: false },
  { name: "Winden: Buiten Oberhangen", checked: false },
  { name: "Winden: Buiten Unterhangen", checked: false },
  { name: "Duplieren Oberhangen", checked: false },
  { name: "Duplieren Unterhangen", checked: false },
  { name: "Absetzen", checked: false },
  { name: "Ansetzen", checked: false },
  { name: "Ablaufen", checked: false },
  { name: "Umslagen", checked: false },
  { name: "Zucken", checked: false },
  { name: "Durchwechsel", checked: false },
  { name: "Abnemen", checked: false },
  { name: "Raisen", checked: false },
  { name: "Ubergreifen", checked: false },
  { name: "Neder Stossen", checked: false },
  { name: "Mutatio Gladii", checked: false },
  { name: "Bucker Nemen", checked: false },
  { name: "Schwert Nemen", checked: false },
  { name: "Schieldslac Binnen", checked: false },
  { name: "Schieldslac Buiten", checked: false },
  { name: "Zornhaw", checked: false },
  { name: "Sturtzhaw", checked: false },
  { name: "Twerhaw", checked: false },
  { name: "Krumphaw", checked: false },
  { name: "Schaitelhaw", checked: false },
  { name: "Schnitten Ober", checked: false },
  { name: "Schnitten Unter", checked: false },
  { name: "Einlaufen", checked: false },
  { name: "Ringen", checked: false },
  { name: "Uberlaufen", checked: false },
  { name: "Halbschwert", checked: false }
];


// Load from localStorage or initialize default array
let techniques = JSON.parse(localStorage.getItem('techniques')) || [...defaultTechniques]

// Reference the bingo grid container
const grid = document.getElementById('bingoGrid');

// Clear any existing content
grid.innerHTML = '';

function renderGrid(){
    techniques.forEach((technique, index) => {
  const square = document.createElement('div');
  square.className = 'square';
  square.textContent = technique.name;

  if (technique.checked) {
    square.classList.add('checked');
  }

  square.addEventListener('click', () => {
    technique.checked = !technique.checked;
    square.classList.toggle('checked');
    // Save updated state to localStorage
    localStorage.setItem('techniques', JSON.stringify(techniques));
  });

  grid.appendChild(square);
});
}

function resetTechniques() {
    techniques = techniques.map((value) => ({name:value.name, checked: false}))
    
    // Save updated state to localStorage
    localStorage.setItem('techniques', JSON.stringify(techniques));

    // Reset and render grid
    grid.innerHTML = '';
    renderGrid();
}

document.getElementById('resetButton').addEventListener('click', resetTechniques);
renderGrid();