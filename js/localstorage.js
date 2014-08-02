var x = 10;


function prepareBinding() {
    //$( "#test_button" ).bind( "click", function() { my_alert('text 2');});
    $("#btnGuardarCarrera").click(function() {
        guardarCarrera();
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



function deleteStudent(element) {
    if (confirm('Are you sure you want to delete user')) {
        alert('User with name: ' + element.value + ' was deleted');
        document.location.href = 'index_success.html';
    } else {
        document.location.href = 'index.html';
    }

}

function fnCreateTable() {

    var headingTable = "<tr><th>Cédula</th><th>Nombre</th><th>Función</th></tr>";
    var users = JSON.parse(localStorage.getItem('Users'));
    var tableUsers = headingTable;
    debugger;
    for (var i = 1; i < users.length; i++) {
        if (users != undefined) {
            tableUsers += "<tr>";
            tableUsers += '<td><a href="#">' + users[i].ID + '</a></td>';
            tableUsers += '<td>' + users[i].name + " " + users[i].lastname + '</td>';
            tableUsers += '<td>' + users[i].role + '</td>';
            tableUsers += "<td>";
            tableUsers += '<div class="btn-group">';
            tableUsers += '<button type="button" class="btn btn-primary dropdown-toggle">Opciones</button>';
            tableUsers += '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span><span class="sr-only">Toggle Dropdown</span></button>';
            tableUsers += '<ul class="dropdown-menu" role="menu"><li><a class="clsShowUser" id="' + users[i].ID +
                '" data-toggle="modal" data-target="#' + users[i].ID + '" href="#"><img src="../../assets/img/showP.png" width="45" height="35" ></a></li><li><a class="clsEditUser" id="' + users[i].ID +
                '" href="#"><img src="../../assets/img/editP.png" width="45" height="35"></a></li><li><a class="clsDeleteUser" id="' + users[i].ID + '" href="#"><img src="../../assets/img/deleteP.png" width="45" height="35"></a></li></ul>';
            tableUsers += '</div>';
            tableUsers += "</td>";
            tableUsers += "</tr>";

            document.getElementById("tableUser").innerHTML = tableUsers;
        }
    }
}
