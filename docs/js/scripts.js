
        //ventana
        function mostrarCajonB() {
            document.getElementById("cajonB").style.display = "block";
        }

        function ocultarCajonB() {
            document.getElementById("cajonB").style.display = "none";
        }

        function mostrarCajonP() {
            document.getElementById("cajonP").style.display = "block";
        }

        function ocultarCajonP() {
            document.getElementById("cajonP").style.display = "none";
        }

        function mostrarCajonR() {
            document.getElementById("cajonR").style.display = "block";
        }

        function ocultarCajonR() {
            document.getElementById("cajonR").style.display = "none";
        }

        //Carrusel
        let slideIndexB = 0;
        let slideIndexP = 0;
        let slideIndexR = 0;
        showSlidesB();
        showSlidesP();
        showSlidesR();

        function showSlidesB() {
            let i;
            let slides = document.getElementsByClassName("mySlidesB");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndexB++;
            if (slideIndexB > slides.length) {slideIndexB = 1}
            slides[slideIndexB-1].style.display = "block";
            setTimeout(showSlidesB, 4000);
        }

        function showSlidesP() {
            let i;
            let slides = document.getElementsByClassName("mySlidesP");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndexP++;
            if (slideIndexP > slides.length) {slideIndexP = 1}
            slides[slideIndexP-1].style.display = "block";
            setTimeout(showSlidesP, 4000);
        }

        function showSlidesR() {
            let i;
            let slides = document.getElementsByClassName("mySlidesR");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndexR++;
            if (slideIndexR > slides.length) {slideIndexR = 1}
            slides[slideIndexR-1].style.display = "block";
            setTimeout(showSlidesR, 4000);
        }

        function enlargeImage(img) {
            img.style.transform = "scale(1.1)";
          }
        
          function shrinkImage(img) {
            img.style.transform = "scale(1)";
          }