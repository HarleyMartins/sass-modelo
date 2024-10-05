// Lógica do Slider
const slider = document.getElementById("slider")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
let currentIndex = 0

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 3 // 3 é o número de slides
  updateSliderPosition()
})

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 3) % 3 // Ajuste circular
  updateSliderPosition()
})
