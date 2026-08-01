
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
    let valorNombre = recuperaraTexto("txtNombreTorneo").trim();
    let valorCategoria = recuperaraTexto("txtCategoria").trim();
    let valorPartisipartes = recuperarInt("txtPartisipartes");
    let valorInscripcion = recuperarInt("txtValoInscripcion");
    let ValorEmail = recuperaraTexto("txtEmail").trim();


    // Limpiar mensajes de error anteriores
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCategoria").textContent = "";
    document.getElementById("errorParticipantes").textContent = "";
    document.getElementById("errorInscripcion").textContent = "";
    document.getElementById("errorEmail").textContent = "";


    // Validar nombre
    if (valorNombre.length < 4) {
        document.getElementById("errorNombre").textContent =
            "El nombre debe tener al menos 4 caracteres.";
        return;
    }


    // Validar categoría
    if (valorCategoria === "") {
        document.getElementById("errorCategoria").textContent =
            "Debe seleccionar una categoría.";
        return;
    }


    // Validar participantes
    if (Number.isNaN(valorPartisipartes) || valorPartisipartes < 1 || valorPartisipartes > 100) {
        document.getElementById("errorParticipantes").textContent =
            "Los participantes deben estar entre 1 y 100.";
        return;
    }


    // Validar valor de inscripción
    if (Number.isNaN(valorInscripcion) || valorInscripcion <= 0) {
        document.getElementById("errorInscripcion").textContent =
            "El valor de inscripción debe ser mayor que 0.";
        return;
    }


    // Validar email
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ValorEmail);
    if (!emailValido) {
        document.getElementById("errorEmail").textContent =
            "Ingrese un email válido.";
        return;
    }

    // 19. Calcular la recaudación estimada
    // participantes × valor de inscripción
    let recaudacionEstimada = valorPartisipartes * valorInscripcion;


    // 20. Crear el objeto nuevoTorneo con los datos obtenidos

    let existe = buscarTorneo(valorNombre);
    if (existe == null) {
        let nuevoTorneo = {};
        nuevoTorneo.nombre = valorNombre;
        nuevoTorneo.categoria = valorCategoria;
        nuevoTorneo.partisipartes = valorPartisipartes;
        nuevoTorneo.inscripcion = valorInscripcion;
        nuevoTorneo.email = ValorEmail;
        nuevoTorneo.Recaudacion = recaudacionEstimada;
        torneos.push(nuevoTorneo);
        mostrarTorneos();
        limpiarFormulario();

    } else {
        nuevoTorneo.nombre = valorNombre;
        nuevoTorneo.categoria = valorCategoria;
        nuevoTorneo.partisipartes = valorPartisipartes;
        nuevoTorneo.inscripcion = valorInscripcion;
        nuevoTorneo.email = ValorEmail;
        nuevoTorneo.Recaudacion = recaudacionEstimada;
        mostrarTorneos();
        limpiarFormulario();
    }



}


/**
 * Actividad 5. Mostrar los torneos (15 puntos)
 * 24. Crear la función mostrarTorneos() sin parámetros.
 */
function mostrarTorneos() {

    // 25. Crear una variable vacía para concatenar el HTML
    let contenidoTabla = "<table>";


    // 26. Recorrer el arreglo torneos utilizando obligatoriamente un ciclo for
    let cmpTabla = document.getElementById("conTabla");


    for (let i = 0; i < torneos.length; i++) {

        let torneoR = torneos[i];

        contenidoTabla +=
            "<tr>" +
            "<td>" + torneoR.nombre + "</td>" +
            "<td>" + torneoR.categoria + "</td>" +
            "<td>" + torneoR.partisipartes + "</td>" +
            "<td>" + torneoR.inscripcion + "</td>" +
            "<td>" + torneoR.email + "</td>" +
            "<td>" + torneoR.Recaudacion + "</td>" +
            "<td><button onclick=\"registrarTorneo()\">Editar</button>" +
            "<button onclick=\"eliminarTorneo()\">eliminar</button></td>"
        "</tr>";

    }


    contenidoTabla += "</table>";


    // 29. Insertar el HTML final en el cuerpo de la tabla
    // usando innerHTML
    cmpTabla.innerHTML = contenidoTabla;

}


/**
 * Actividad 6. Limpiar el formulario (5 puntos)
 * 30. Crear la función limpiarFormulario().
 */
function limpiarFormulario() {

    // 31. Vaciar los campos del formulario
    mostrarTextoEnCaja("txtNombreTorneo", "");
    mostrarTextoEnCaja("txtCategoria", "");
    mostrarTextoEnCaja("txtPartisipartes", "");
    mostrarTextoEnCaja("txtValoInscripcion", "");
    mostrarTextoEnCaja("txtEmail", "");


    // Limpiar también los mensajes de error
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCategoria").textContent = "";
    document.getElementById("errorParticipantes").textContent = "";
    document.getElementById("errorInscripcion").textContent = "";
    document.getElementById("errorEmail").textContent = "";

}
function buscarTorneo(nombre) {
    let torneo;
    let torneroEcontrado = null;
    for (let i = 0; i < torneos.length; i++) {
        torneo = torneos[i];
        if (torneo.nombre == nombre) {
            torneroEcontrado = torneo
            break
        }
    }
    return torneroEcontrado
}

function eliminarTorneo(indice) {
    torneos.splice(indice, 1);
    mostrarTorneos();
}