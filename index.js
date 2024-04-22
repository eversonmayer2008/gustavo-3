

let inputBox = document.querySelector(".input-box"),
                searchIcon = document.querySelector(".icon"),
                closeIcon = document.querySelector(".close-icon");

            searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
            closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));

            document.getElementById('item-flutuante').addEventListener('mouseover', function() {
                document.getElementById('janela-flutuante').classList.add('show');
            });
            
            document.getElementById('item-flutuante').addEventListener('mouseout', function() {
                document.getElementById('janela-flutuante').classList.remove('show');
            });

            document.getElementById('janela-flutuante').addEventListener('mouseover', function() {
                document.getElementById('janela-flutuante').classList.add('show');
            });

            document.getElementById('janela-flutuante').addEventListener('mouseout', function() {
                document.getElementById('janela-flutuante').classList.remove('show');
            });

            document.getElementById('item-flutuante').addEventListener('click', function() {
                document.getElementById('janela-flutuante').classList.add('show');
            });
            let slideIndex = 0;
// Função para iniciar os carrosséis
function startCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach((carousel) => {
        let slideIndex = 0;
        const slides = carousel.querySelectorAll('.carousel-slide');
        
        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 10000); // Mude a imagem a cada 10 segundos
        }
        
        showSlides(); // Inicie o carrossel
    });
}

// Inicie os carrosséis
startCarousels();
