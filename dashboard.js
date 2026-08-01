
/* ==========================================================================
   RECURSO PARA ESTUDIANTES - EVALUACIÓN JAVASCRIPT
   Dashboard de Torneos Gamer
   ========================================================================== */

// Actividad 3. Declarar el arreglo (10 puntos)
// Declarar un arreglo global vacío llamado torneos.
// Cada elemento deberá ser un objeto con las propiedades:
// nombre, categoria, participantes, valorInscripcion, email y recaudacion.

let torneos = [];

//Tarjetas Dimanicas
function generarTarjetas(torneos) {

    let lista = listaTorneos || torneos;
    let contenidoTarjetas = "";

    for (let i = 0; i < lista.length; i++) {

        let torneoR = lista[i];

        // Índice real dentro del arreglo "torneos" (importante cuando hay
        // una búsqueda activa: "lista" puede ser un arreglo filtrado)
        let indiceReal = torneos.indexOf(torneoR);

        contenidoTarjetas +=
            "<div class='tarjeta-torneo'>" +
            "<span class='tarjeta-categoria'>" + torneoR.categoria + "</span>" +
            "<h3 class='tarjeta-nombre'>" + torneoR.nombre + "</h3>" +
            "<p class='tarjeta-dato'>Participantes: <strong>" + torneoR.partisipartes + "</strong></p>" +
            "<p class='tarjeta-dato'>Inscripción: <strong>$" + torneoR.inscripcion + "</strong></p>" +
            "<p class='tarjeta-recaudacion'>Recaudación: $" + torneoR.Recaudacion + "</p>" +
            "<button type='button' class='btn-ver' onclick='verTorneo(" + indiceReal + ")'>VER</button>" +
            "</div>";

    }

    if (lista.length === 0) {
        contenidoTarjetas = "<p class='tarjetas-vacio'>No hay torneos para mostrar en tarjetas.</p>";
    }

    document.getElementById("contenedorTarjetas").innerHTML = contenidoTarjetas;

}

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
        let nuevoTorneo = {};
        existe.nombre = valorNombre;
        existe.categoria = valorCategoria;
        existe.partisipartes = valorPartisipartes;
        existe.inscripcion = valorInscripcion;
        existe.email = ValorEmail;
        existe.Recaudacion = recaudacionEstimada;
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
        let indiceReal = torneos.indexOf(torneoR);

        contenidoTabla +=
            "<tr>" +
            "<td>" + torneoR.nombre + "</td>" +
            "<td>" + torneoR.categoria + "</td>" +
            "<td>" + torneoR.partisipartes + "</td>" +
            "<td>" + torneoR.inscripcion + "</td>" +
            "<td>" + torneoR.email + "</td>" +
            "<td>" + torneoR.Recaudacion + "</td>" +
            "<td><button onclick=\"editar('" + torneoR.nombre + "')\">Editar</button>" +
            "<button onclick=\"eliminarTorneo()\">eliminar</button>" +
            "<button onclick=\"generarTarjetas('" + indiceReal + "')\">ver</button></td>"
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
function editar(nombre) {
    let existe = buscarTorneo(nombre)
    mostrarTextoEnCaja("txtNombreTorneo", existe.nombre);
    mostrarTextoEnCaja("txtCategoria", existe.categoria);
    mostrarTextoEnCaja("txtPartisipartes", existe.partisipartes);
    mostrarTextoEnCaja("txtValoInscripcion", existe.inscripcion);
    mostrarTextoEnCaja("txtEmail", existe.email);
}


function buscarTorneos() {
    let valorNombre = recuperaraTexto("txtNombreTorneo");
    let existe = buscarTorneo(valorNombre)
    if (existe == null) {
        alert("No exixte el torneo")
    } else {
        let contenidoTabla = "<table>";
        let cmpTabla = document.getElementById("conTabla");
        let indiceReal = torneos.indexOf(existe);

        contenidoTabla +=
            "<tr>" +
            "<td>" + existe.nombre + "</td>" +
            "<td>" + existe.categoria + "</td>" +
            "<td>" + existe.partisipartes + "</td>" +
            "<td>" + existe.inscripcion + "</td>" +
            "<td>" + existe.email + "</td>" +
            "<td>" + existe.Recaudacion + "</td>" +
            "<td><button onclick=\"editar('" + existe.nombre + "')\">Editar</button>" +
            "<button onclick=\"eliminarTorneo()\">eliminar</button>" +
            "<button onclick=\"generarTarjetas('" + indiceReal + "')\">ver</button></td>"
        "</tr>";
        contenidoTabla += "</table>";

        cmpTabla.innerHTML = contenidoTabla;
    }


}

function verTorneo(indice) {

    let torneoR = torneos[indice];
    if (!torneoR) return;

    let detalle =
        "<h3>" + torneoR.nombre + "</h3>" +
        "<p><strong>Categoría:</strong> " + torneoR.categoria + "</p>" +
        "<p><strong>Participantes:</strong> " + torneoR.partisipartes + "</p>" +
        "<p><strong>Valor de inscripción:</strong> $" + torneoR.inscripcion + "</p>" +
        "<p><strong>Email del organizador:</strong> " + torneoR.email + "</p>" +
        "<p><strong>Recaudación estimada:</strong> $" + torneoR.Recaudacion + "</p>";

    document.getElementById("modalContenido").innerHTML = detalle;
    document.getElementById("modalTorneo").classList.add("activo");

}

/**
 * Cierra la ventana modal.
 */
function cerrarModal() {
    document.getElementById("modalTorneo").classList.remove("activo");
}

/**
 * Actividad 6. Limpiar el formulario (5 puntos)
 * 30. Crear la función limpiarFormulario().
 */