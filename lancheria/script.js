let currentImageIndex = 0;
const images = ['prato1.jpg', 'prato2.jpg', 'prato3.jpg'];

// Abre o modal
function openModal(index) {
    currentImageIndex = index;
    document.getElementById("photoModal").style.display = "flex";
    document.getElementById("modalImage").src = images[index];
}

// Fecha o modal
function closeModal() {
    document.getElementById("photoModal").style.display = "none";
}

// Alterna imagem no modal
function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById("modalImage").src = images[currentImageIndex];
}

// Expande/colapsa categorias do menu
function toggleMenu(category) {
    const element = document.getElementById(category);
    element.classList.toggle('hidden');
}
