/* ==========================================================================
   RECURSO PARA ESTUDIANTES - EVALUACIÓN JAVASCRIPT
   Dashboard de Torneos Gamer
   ========================================================================== */

// Actividad 3. Declarar el arreglo (10 puntos)
// Declarar un arreglo global vacío llamado torneos.
// Cada elemento deberá ser un objeto con las propiedades:
// nombre, categoria, participantes, valorInscripcion, email y recaudacion.
let torneos = [];

/**
 * Actividad 4. Registrar y validar un torneo (30 puntos)
 * 12. Crear la función registrarTorneo() sin parámetros.
 */
function registrarTorneo() {
    // 13. Obtener los valores de todos los campos con document.getElementById()
    let valorNombre = recuperaraTexto("txtNombreTorneo");
    let valorCategoria = recuperaraTexto("txtCategoria");
    let valorPartisipartes = recuperarInt("txtPartisipartes");
    let valorInscripcion = recuperarInt("txtValoInscripcion");
    let ValorEmail = recuperaraTexto("txtEmail");
    // 14. Validar que el nombre tenga al menos 4 caracteres
    if (valorNombre.length < 4) {
        alert("el nombre tiene menos de 4 caracteres")
        return
    } else {

    }
    // 15. Validar que se haya seleccionado una categoría
    if (valorCategoria == null || valorCategoria == "") {
        alert("No hay una categoria seleccionada")
        return
    } else {

    }
    // 16. Validar que los participantes sean un entero entre 1 y 100
    if (valorPartisipartes >= 1 && valorPartisipartes <= 100) {

    } else {
        alert("tiene que estar entre 1 y 100")
        return
    }
    // 17. Validar que el valor de inscripción sea mayor que 0
    if (valorInscripcion > 0) {

    } else {
        alert("tiene que ser mayor que 0")
        return
    }
    // 18. Validar que el email no esté vacío. No se requiere validación avanzada de formato.
    if (ValorEmail == "" || ValorEmail == null) {
        alert("no tiene que estar vacio")
        return
    } else {

    }


    // Si alguna validación falla, mostrar mensajes de error y detener la ejecución

    // 19. Calcular la recaudación estimada con: participantes × valor de inscripción
    let recaudacionEstimada = valorPartisipartes * valorInscripcion;
    // 20. Crear el objeto nuevoTorneo con los datos obtenidos
    let nuevoTorneo = {}

    nuevoTorneo.nombre = valorNombre;
    nuevoTorneo.categoria = valorCategoria;
    nuevoTorneo.partisipartes = valorPartisipartes;
    nuevoTorneo.inscripcion = valorInscripcion;
    nuevoTorneo.email = ValorEmail;
    nuevoTorneo.Recaudacion = recaudacionEstimada;
    // 21. Agregar el objeto al arreglo con push()
    torneos.push(nuevoTorneo)
    alert("Torneo agregrado")
    // 22. Llamar a mostrarTorneos() y limpiarFormulario()
    mostrarTorneos();
    // 23. Mostrar un mensaje de registro exitoso
    limpiarFormulario();
}

/**
 * Actividad 5. Mostrar los torneos (15 puntos)
 * 24. Crear la función mostrarTorneos() sin parámetros.
 */
function mostrarTorneos() {
    // 25. Crear una variable vacía para concatenar el HTML
    let contenidoTabla = "<table>";
    // 26. Recorrer el arreglo torneos utilizando obligatoriamente un ciclo for
    let cmpTabla = document.getElementById("conTabla")
    for (let i = 0; i < torneos.length; i++) {
        let torneoR = torneos[i];
        contenidoTabla += "<tr><td>" + torneoR.nombre + "</td>" +
            "<td>" + torneoR.categoria + "</td>" +
            "<td>" + torneoR.partisipartes + "</td>" +
            "<td>" + torneoR.inscripcion + "</td>" +
            "<td>" + torneoR.email + "</td>" +
            "<td>" + torneoR.Recaudacion + "</td>" +
            "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla
    // 27. En cada vuelta, obtener el objeto actual y construir una fila de la tabla (<tr>...</tr>)

    // 28. Mostrar todos los datos y la recaudación calculada

    // 29. Insertar el HTML final en el cuerpo de la tabla sin duplicar filas (usando innerHTML)
}

/**
 * Actividad 6. Limpiar el formulario (5 puntos)
 * 30. Crear la función limpiarFormulario().
 */
function limpiarFormulario() {
    // 31. Vaciar los campos del formulario, restablecer la categoría y limpiar los mensajes de error
    mostrarTextoEnCaja("txtNombreTorneo", "")
    mostrarTextoEnCaja("txtCategoria", "")
    mostrarTextoEnCaja("txtPartisipartes", "")
    mostrarTextoEnCaja("txtValoInscripcion", "")
    mostrarTextoEnCaja("txtEmail", "")
}   
