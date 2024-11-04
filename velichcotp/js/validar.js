 
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

            // Verifica si el formulario es válido
            if (this.checkValidity() === false) {
                // Si no es válido, muestra la validación Bootstrap
                event.stopPropagation();
                this.classList.add('was-validated');
            } else {
                // Si es válido, muestra el mensaje de éxito
                document.getElementById('successMessage').classList.remove('d-none');

                // Redirige al usuario después de 6 segundos
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 6000);
            }
        });
 