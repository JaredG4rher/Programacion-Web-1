document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('registroForm');
    const resultadoDiv = document.getElementById('resultado');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío tradicional del formulario
        
        // Limpiar errores anteriores
        limpiarErrores();
        
        // Validar campos
        if (!validarFormulario()) {
            return;
        }
        
        // Obtener valores del formulario
        const datos = obtenerDatosFormulario();
        
        // Mostrar los datos en el div de resultado
        mostrarResultado(datos);
    });
    
    function limpiarErrores() {
        const errores = document.querySelectorAll('.error');
        errores.forEach(error => error.textContent = '');
    }
    
    function validarFormulario() {
        let valido = true;
        
        // Validar nombre
        const nombre = document.getElementById('nombre').value.trim();
        if (nombre === '') {
            document.getElementById('nombreError').textContent = 'El nombre es requerido';
            valido = false;
        } else if (nombre.length < 3) {
            document.getElementById('nombreError').textContent = 'El nombre debe tener al menos 3 caracteres';
            valido = false;
        }
        
        // Validar email
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            document.getElementById('emailError').textContent = 'El email es requerido';
            valido = false;
        } else if (!validarEmail(email)) {
            document.getElementById('emailError').textContent = 'Ingrese un email válido';
            valido = false;
        }
        
        // Validar edad
        const edad = document.getElementById('edad').value;
        if (edad === '') {
            document.getElementById('edadError').textContent = 'La edad es requerida';
            valido = false;
        } else if (edad < 18 || edad > 99) {
            document.getElementById('edadError').textContent = 'La edad debe estar entre 18 y 99';
            valido = false;
        }
        
        return valido;
    }
    
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function obtenerDatosFormulario() {
        // Obtener valores de inputs básicos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const edad = document.getElementById('edad').value;
        const genero = document.getElementById('genero').value;
        
        // Obtener intereses seleccionados (checkboxes)
        const interesesCheckboxes = document.querySelectorAll('input[name="intereses"]:checked');
        const intereses = Array.from(interesesCheckboxes).map(cb => cb.value);
        
        // Obtener opción de suscripción (radio buttons)
        const suscripcion = document.querySelector('input[name="suscripcion"]:checked').value;
        
        return {
            nombre,
            email,
            edad,
            genero,
            intereses,
            suscripcion
        };
    }
    
    function mostrarResultado(datos) {
        let html = '<h2>Datos Registrados:</h2>';
        html += `<p><strong>Nombre:</strong> ${datos.nombre}</p>`;
        html += `<p><strong>Email:</strong> ${datos.email}</p>`;
        html += `<p><strong>Edad:</strong> ${datos.edad}</p>`;
        html += `<p><strong>Género:</strong> ${datos.genero || 'No especificado'}</p>`;
        
        html += `<p><strong>Intereses:</strong> `;
        if (datos.intereses.length > 0) {
            html += datos.intereses.join(', ');
        } else {
            html += 'Ninguno seleccionado';
        }
        html += `</p>`;
        
        html += `<p><strong>Suscripción a notificaciones:</strong> `;
        html += datos.suscripcion === 'si' ? 'Sí' : 'No';
        html += `</p>`;
        
        resultadoDiv.innerHTML = html;
    }
});