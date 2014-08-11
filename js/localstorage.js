function prepareBinding() {
    //$( "#test_button" ).bind( "click", function() { my_alert('text 2');});
    $("#btnGuardarCarrera").click(function() {
        guardarCarrera();
    });
    $("#btnGuardarEstudiante").click(function() {
        guardarEstdiantes();
    });
    $("#btnGuardarUsuario").click(function() {
        guardarUsuario();
    });
}

function fnCargarCarreras() {

    var carreras = JSON.parse(localStorage.getItem('Carreras'));
    var seleccionarCarrera;

    for (var i = 0; i < carreras.length; i++) {

        seleccionarCarrera += '<option value="' + carreras[i].carrera + '">' + carreras[i].carrera + '</option>';
        document.getElementById("selectCarreras").innerHTML = seleccionarCarrera;
    }
}




function guardarCarrera() {
    // obtener datos del form
    var codigo = document.getElementById('codigo').value,
        nombre = document.getElementById('nombre').value;


    if (codigo.length == 0 || nombre.length == 0) {
        alert("NO PUEDE INGRESAR UNA CARRERA CON CAMPOS EN BLANCOS")
    } else {


        // crear objeto estudiante
        var carrera = {
            "codigo": codigo,
            "carrera": nombre
        };

        // leer los estudiantes de localstorage
        var carreras = JSON.parse(localStorage.getItem('Carreras'));
        if (carreras === null) {
            carreras = [];
        }

        // agregar el estudiante
        carreras.push(carrera);

        // volver guardar en localstoraage
        localStorage.setItem('Carreras', JSON.stringify(carreras));
    }
}

function guardarEstdiantes() {
    // obtener datos del form
    var cedula = document.getElementById('cedula').value,
        nombre = document.getElementById('nombre').value,
        apellidos = document.getElementById('apellidos').value,
        imagen = document.getElementById('imagen').files[0].name,
        nivel = document.getElementById('nivel').value,
        carrera = document.getElementById('selectCarreras').value;

    if (cedula.length == 0 || nombre.length == 0 || apellidos.length == 0 || imagen.length == 0 || nivel.length == 0 || carrera == 0) {
        alert("NO PUEDE INGRESAR UNA CARRERA CON CAMPOS EN BLANCOS")
    } else {

        // crear objeto estudiante
        var estudiante = {
            "cedula": cedula,
            "nombre": nombre,
            "apellidos": apellidos,
            "imagen": imagen,
            "nivel": nivel,
            "carrera": carrera
        };

        // leer los estudiantes de localstorage
        var estu = JSON.parse(localStorage.getItem('Estudiantes'));
        if (estu === null) {
            estu = [];
        }

        // agregar el estudiante
        estu.push(estudiante);

        // volver guardar en localstoraage
        localStorage.setItem('Estudiantes', JSON.stringify(estu));

        //    document.getElementById('cedula').value = "";
        //   document.getElementById('nombre').value = "";
        //   document.getElementById('apellidos').value = "";
        //   document.getElementById('imagen').value = "";
        //   document.getElementById('nivel').value = "";
        alert("ESTUDIANTE AGREGADO CON EXITO")

    }
}


function guardarUsuario() {
    // obtener datos del form
    var cedula = document.getElementById('cedula').value,
        nombre = document.getElementById('nombre').value,
        apellidos = document.getElementById('apellidos').value,
        contraseña = document.getElementById('contraseña').value,
        role = document.getElementById('selectRole').value;



    if (cedula.length == 0 || nombre.length == 0 || apellidos.length == 0 || contraseña.length == 0 || role == 0) {
        alert("NO PUEDE INGRESAR UN USUARIO CON CAMPOS EN BLANCOS")
    } else {


        // crear objeto estudiante
        var usuario = {
            "cedula": cedula,
            "nombre": nombre,
            "apellidos": apellidos,
            "contraseña": contraseña,
            "role": role
        };

        // leer los estudiantes de localstorage
        var user = JSON.parse(localStorage.getItem('Usuarios'));
        if (user === null) {
            user = [];
        }

        // agregar el userdiante
        user.push(usuario);

        // volver guardar en localstoraage
        localStorage.setItem('Usuarios', JSON.stringify(user));

        //    document.getElementById('cedula').value = "";
        //   document.getElementById('nombre').value = "";
        //   document.getElementById('apellidos').value = "";
        //   document.getElementById('imagen').value = "";
        //   document.getElementById('nivel').value = "";
        alert("USUARIO AGREGADO CON EXITO")

    }
}



function deleteStudent(element) {
    if (confirm('Are you sure you want to delete user')) {
        alert('User with name: ' + element.value + ' was deleted');
        document.location.href = 'index_success.html';
    } else {
        document.location.href = 'index.html';
    }

}

function crearTablaEstudiantes() {

    var headingTable = "<tr><th>Imagen</th><th>Cédula</th><th>Nombre</th><th>Apellidos</th><th>Carrera</th><th>Ingles</th><th></th></tr>";
    var estu = JSON.parse(localStorage.getItem('Estudiantes'));
    var tablaestu = headingTable;
    debugger;
    for (var i = 0; i < estu.length; i++) {
        if (estu != undefined) {
            tablaestu += "<tr>";
            tablaestu += '<td > <img alt="Imagen" src="Imagenes/' + estu[i].imagen + '" width="40" height="35"' + ' /></td>';
            tablaestu += '<td>' + estu[i].cedula + '</td>';
            tablaestu += '<td>' + estu[i].nombre + '</td>';
            tablaestu += '<td>' + estu[i].apellidos + '</td>';
            tablaestu += '<td>' + estu[i].carrera + '</td>';
            tablaestu += '<td>' + estu[i].nivel + '</td>';
            tablaestu += '<td><a type="button" class="btn btn-default editUser" id="' + estu[i].cedula + '"><span ><img src="Imagenes/editaaar.png" class="img-responsive" alt="Image" ></span></a>';
            tablaestu += '<a href="#" type="button" class="delete btn btn-default" id="' + estu[i].cedula + '"><span><img src="Imagenes/deleteee.png" class="img-responsive" alt="Image"></span></a></td>';

            document.getElementById("tablaestudiantes").innerHTML = tablaestu;
        }
    }
}

function crearTablaUsuarios() {

    var headingTable = "<tr><th>Cédula</th><th>Nombre</th><th>Apellidos</th><th>Role</th><th>Contraseña</th><th></th></tr>";
    var user = JSON.parse(localStorage.getItem('Usuarios'));
    var tablausuarios = headingTable;
    debugger;
    for (var i = 0; i < user.length; i++) {
        if (user != undefined) {
            tablausuarios += "<tr>";
            tablausuarios += '<td>' + user[i].cedula + '</td>';
            tablausuarios += '<td>' + user[i].nombre + '</td>';
            tablausuarios += '<td>' + user[i].apellidos + '</td>';
            tablausuarios += '<td>' + user[i].role + '</td>';
            tablausuarios += '<td>' + "**************" + '</td>';
            tablausuarios += '<td><a type="button" class="btn btn-default editUser" id="' + user[i].cedula + '"><span ><img src="Imagenes/editaaar.png" class="img-responsive" alt="Image" ></span></a>';
            tablausuarios += '<a href="#" type="button" class="delete btn btn-default" id="' + user[i].cedula + '"><span><img src="Imagenes/deleteee.png" class="img-responsive" alt="Image"></span></a></td>';

            document.getElementById("tablausuarios").innerHTML = tablausuarios;
        }
    }
}

function crearTablaCarreras() {

    var headingTable = "<tr><th>Codigo</th><th>Nombre</th><th></th></tr>";
    var carrer = JSON.parse(localStorage.getItem('Carreras'));
    var tablacarrera = headingTable;
    debugger;
    for (var i = 0; i < carrer.length; i++) {
        if (carrer != undefined) {
            tablacarrera += "<tr>";
            tablacarrera += '<td>' + carrer[i].codigo + '</td>';
            tablacarrera += '<td>' + carrer[i].carrera + '</td>';
        
            tablacarrera += '<td><a type="button" class="btn btn-default editUser" id="' + carrer[i].codigo + '"><span ><img src="Imagenes/editaaar.png" class="img-responsive" alt="Image" ></span></a>';
            tablacarrera += '<a href="#" type="button" class="delete btn btn-default" id="' + carrer[i].codigo + '"><span><img src="Imagenes/deleteee.png" class="img-responsive" alt="Image"></span></a></td>';

            document.getElementById("tablacarreras").innerHTML = tablacarrera;
        }
    }
}
