
		var slideIndex = 0;
		showSlides();

		function showSlides() {
			var i;
			var slides = document.getElementsByClassName("mySlides");
			var dots = document.getElementsByClassName("dot");
			for (i = 0; i < slides.length; i++) {
			   slides[i].style.display = "none";  
			}
			slideIndex++;
			if (slideIndex > slides.length) {slideIndex = 1}    
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " active";
			setTimeout(showSlides, 5000); // Change image every 5 seconds
		}
		
		
		
		function openModal() {
		  document.getElementById('myModal').style.display = "block";
		}

		function closeModal() {
		  document.getElementById('myModal').style.display = "none";
		}

		var ModalslideIndex = 1;
		showModalSlides(ModalslideIndex);

		function plusSlides(n) {
		  showModalSlides(ModalslideIndex += n);
		}
 
		function currentSlide(n) {
		  showModalSlides(ModalslideIndex = n);
		}

		function showModalSlides(n) {
		  var j;
		  var Modalslides = document.getElementsByClassName("myModalSlides");
		  var Modaldots = document.getElementsByClassName("demo");
		  var captionText = document.getElementById("caption");
		  if (n > Modalslides.length) {ModalslideIndex = 1}
		  if (n < 1) {ModalslideIndex = Modalslides.length}
		  for (j = 0; j < Modalslides.length; j++) {
			  Modalslides[j].style.display = "none";
		  }
		  for (j = 0; j < Modaldots.length; j++) {
			  Modaldots[j].className = Modaldots[j].className.replace(" activeModal", "");
		  }
		  Modalslides[ModalslideIndex-1].style.display = "block";
		  Modaldots[ModalslideIndex-1].className += " activeModal";
		  captionText.innerHTML = Modaldots[ModalslideIndex-1].alt;
		}