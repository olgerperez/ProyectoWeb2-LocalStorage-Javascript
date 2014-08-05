var x = 10;


function prepareBinding() {
    //$( "#test_button" ).bind( "click", function() { my_alert('text 2');});
    $("#btnGuardarCarrera").click(function() {
        guardarCarrera();
    });
    $("#btnGuardarEstudiante").click(function() {
        guardarEstdiantes();
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



function deleteStudent(element) {
    if (confirm('Are you sure you want to delete user')) {
        alert('User with name: ' + element.value + ' was deleted');
        document.location.href = 'index_success.html';
    } else {
        document.location.href = 'index.html';
    }

}

function crearTabla() {

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
            //tablaestu += '<td> <span><img src="Imagenes/edit.png" class="img-responsive" alt="Image"></span>  <span> <img src="Imagenes/delete.png" class="img-responsive" alt="Image"> </span></td>';
            //  tablaestu += '<td> <a href="Estudiantes.html">
            //                            <img src="Imagenes/delete.png" class="img-responsive" alt="Image">
            //                       </a>
            //                      <a href="Estudiantes.html">
            //                         <img src="Imagenes/edit.png" class="img-responsive" alt="Image">
            //                    </a> </td>';
            // tablaestu += "<td>";
            //tablaestu += "</td>";
            tablaestu += '<td><a type="button" class="btn btn-default editUser" id="' + estu[i].cedula + '"><span ><img src="Imagenes/editaaar.png" class="img-responsive" alt="Image" ></span></a>';
            tablaestu += '<a href="#" type="button" class="delete btn btn-default" id="' + estu[i].cedula + '"><span><img src="Imagenes/deleteee.png" class="img-responsive" alt="Image"></span></a></td>';

            document.getElementById("tablaestudiantes").innerHTML = tablaestu;
        }
    }
}
