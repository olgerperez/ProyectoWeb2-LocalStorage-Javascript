//FUNCION PARA LLAMAR LOS CLICK SIN NECESIDAD DE UTILIZAR EL ONCLICK 
function prepareBinding() {
    $("#btnGuardarCarrera").click(function() {
        guardarCarrera();
    });
    $("#btnGuardarEstudiante").click(function() {
        guardarEstdiantes();
    });
    $("#btnGuardarUsuario").click(function() {
        guardarUsuario();
    });
    $("#btnEdi").click(function() {
        editarEstudiantesNuevo();
    });
    $("#inputimagen").click(function() {
        cambiarimagen();
    });
    $('a[name="editar"]').click(function() {
        editarEstudiante(this.id);
    });
    $('a[name="editarcarrera"]').click(function() {
        editarCarrera(this.id);
    });
    $('a[name="editarusuario"]').click(function() {
        editarUsuario(this.id);
    });
    $('a[name="eliminar"]').click(function() {
        borrarEstudiante(this.id);
    });
    $('a[name="eliminarusuario"]').click(function() {
        borrarUsuario(this.id);
    });
    $('a[name="eliminarcarrera"]').click(function() {
        borrarCarrera(this.id);
    });
    $("#iniciar").click(function() {
        iniciarsesion();
    });
    $("#btnEditarCarrera").click(function() {
        editarCarrerasNuevo();
    });
    $("#btnEditarUsuario").click(function() {
        editarUsuariosNuevo();
    });
}

//FUNCION PARA CARGAR LAS CARRERAS EN AGREGAR O EDITAR ESTUDIANTE
function fnCargarCarreras() {

    var carreras = JSON.parse(localStorage.getItem('Carreras'));
    var seleccionarCarrera;

    for (var i = 0; i < carreras.length; i++) {

        seleccionarCarrera += '<option value="' + carreras[i].carrera + '">' + carreras[i].carrera + '</option>';
        document.getElementById("selectCarreras").innerHTML = seleccionarCarrera;
    }
}


//FUNCION PARA GUARDAR LA CARRERA
function guardarCarrera() {
    // obtener datos del form
    var codigo = document.getElementById('codigo').value,
        nombre = document.getElementById('nombre').value;


    if (codigo.length == 0 || nombre.length == 0) {
        alert("NO PUEDE INGRESAR UNA CARRERA CON CAMPOS EN BLANCOS")
    } else {


        // crear objeto CARRERA
        var carrera = {
            "codigo": codigo,
            "carrera": nombre
        };

        // leer la carrera de localstorage
        var carreras = JSON.parse(localStorage.getItem('Carreras'));
        if (carreras === null) {
            carreras = [];
        }

        // agregar la carrera
        carreras.push(carrera);

        // volver guardar en localstoraage
        localStorage.setItem('Carreras', JSON.stringify(carreras));
    }
}

//FUNCION PARA GUARDAR ESTUDIANTES 
function guardarEstdiantes() {
    // obtener datos del form
    var cedula = document.getElementById('cedula').value,
        nombre = document.getElementById('nombre').value,
        apellidos = document.getElementById('apellidos').value,
        imagen = document.getElementById('imagen').files[0].name,
        nivel = document.getElementById('nivel').value,
        carrera = document.getElementById('selectCarreras').value;

    //VALIDACIONES PARA VERIFICAR QUE NINGUN CAMPO VENGA EN BLANCO
    if (cedula.length == 0 || nombre.length == 0 || apellidos.length == 0 || imagen.length == 0 || nivel.length == 0 || carrera == 0) {
        alert("NO PUEDE INGRESAR UN ESTUDIANTE CON CAMPOS EN BLANCOS")
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

        alert("ESTUDIANTE AGREGADO CON EXITO")

    }
}

//FUNCION PARA AGRAR EL USUARIO
function guardarUsuario() {
    // obtener datos del form
    var cedula = document.getElementById('cedula').value,
        nombre = document.getElementById('nombre').value,
        apellidos = document.getElementById('apellidos').value,
        contraseña = document.getElementById('contraseña').value,
        role = document.getElementById('selectRole').value;


    //CONDICION PARA VERIFICAR QUE NO VENGAN CAMPOS EN BLANCO
    if (cedula.length == 0 || nombre.length == 0 || apellidos.length == 0 || contraseña.length == 0 || role == 0) {
        alert("NO PUEDE INGRESAR UN USUARIO CON CAMPOS EN BLANCOS")
    } else {


        // crear objeto USUARIO
        var usuario = {
            "cedula": cedula,
            "nombre": nombre,
            "apellidos": apellidos,
            "contraseña": contraseña,
            "role": role
        };

        // leer los USUARIOS de localstorage
        var user = JSON.parse(localStorage.getItem('Usuarios'));
        if (user === null) {
            user = [];
        }

        // agregar el USUARIO
        user.push(usuario);

        // volver guardar en localstoraage
        localStorage.setItem('Usuarios', JSON.stringify(user));

        //ALERTA
        alert("USUARIO AGREGADO CON EXITO")
    }
}


//FUNCION PARA CREAR LA TABLA ESTUDIANTES CARGANDO LOS DATOS DESDE LOCAL STORAGE
//SE LE PONEN EL NOMBRE DE LA CEDULA A LAS ETIQUETAS A PARA FACILITAR EL EDITAR Y ELIMNAR
function crearTablaEstudiantes() {

    var encabezado = "<tr><th>Imagen</th><th>Cédula</th><th>Nombre</th><th>Apellidos</th><th>Carrera</th><th>Ingles</th><th></th></tr>";
    var estu = JSON.parse(localStorage.getItem('Estudiantes'));
    var tablaestu = encabezado;

    for (var i = 0; i < estu.length; i++) {
        if (estu != undefined) {
            tablaestu += "<tr>";
            tablaestu += '<td > <img alt="Imagen" src="Imagenes/' + estu[i].imagen + '" width="40" height="35"' + ' /></td>';
            tablaestu += '<td>' + estu[i].cedula + '</td>';
            tablaestu += '<td>' + estu[i].nombre + '</td>';
            tablaestu += '<td>' + estu[i].apellidos + '</td>';
            tablaestu += '<td>' + estu[i].carrera + '</td>';
            tablaestu += '<td>' + estu[i].nivel + '</td>';
            tablaestu += '<td><a href="EditarEstudiante.html" class="btn btn-default editUser" name="editar" id="' + estu[i].cedula + '"><span ><img src="Imagenes/editaaar.png" class="img-responsive" alt="Image" ></span></a>';
            tablaestu += '<a href="Estudiantes.html" class="delete btn btn-default" name="eliminar" id="' + estu[i].cedula + '"><span><img src="Imagenes/deleteee.png" class="img-responsive" alt="Image"></span></a></td>';

            document.getElementById("tablaestudiantes").innerHTML = tablaestu;
        }
    }
}

//FUNCION PARA CREAR LA TABLA USUARIOS CARGANDO LOS DATOS DESDE LOCAL STORAGE
//SE LE PONEN EL NOMBRE DE LA CEDULA A LAS ETIQUETAS A PARA FACILITAR EL EDITAR Y ELIMNAR
function crearTablaUsuarios() {

    var headingTable = "<tr><th>Cédula</th><th>Nombre</th><th>Apellidos</th><th>Role</th><th>Contraseña</th><th></th></tr>";
    var user = JSON.parse(localStorage.getItem('Usuarios'));
    var tablausuarios = headingTable;

    for (var i = 0; i < user.length; i++) {
        if (user != undefined) {
            tablausuarios += "<tr>";
            tablausuarios += '<td>' + user[i].cedula + '</td>';
            tablausuarios += '<td>' + user[i].nombre + '</td>';
            tablausuarios += '<td>' + user[i].apellidos + '</td>';
            tablausuarios += '<td>' + user[i].role + '</td>';
            tablausuarios += '<td>' + "**************" + '</td>';
            tablausuarios += '<td><a href="EditarUsuario.html" type="button" class="btn btn-default editUser"  name="editarusuario" id="' + user[i].cedula + '"><span ><img src="Imagenes/editaaar.png" class="img-responsive" alt="Image" ></span></a>';
            tablausuarios += '<a href="Usuarios.html" type="button" class="delete btn btn-default" name="eliminarusuario" id="' + user[i].cedula + '"><span><img src="Imagenes/deleteee.png" class="img-responsive" alt="Image"></span></a></td>';

            document.getElementById("tablausuarios").innerHTML = tablausuarios;
        }
    }
}

//FUNCION PARA CREAR LA TABLA CARRERAS CARGANDO LOS DATOS DESDE LOCAL STORAGE
//SE LE PONEN EL NOMBRE DE LA ID A LAS ETIQUETAS A PARA FACILITAR EL EDITAR Y ELIMNAR
function crearTablaCarreras() {

    var headingTable = "<tr><th>Codigo</th><th>Nombre</th><th></th></tr>";
    var carrer = JSON.parse(localStorage.getItem('Carreras'));
    var tablacarrera = headingTable;

    for (var i = 0; i < carrer.length; i++) {
        if (carrer != undefined) {
            tablacarrera += "<tr>";
            tablacarrera += '<td>' + carrer[i].codigo + '</td>';
            tablacarrera += '<td>' + carrer[i].carrera + '</td>';

            tablacarrera += '<td><a href="EditarCarrera.html" type="button" class="btn btn-default editUser" name="editarcarrera" id="' + carrer[i].codigo + '"><span ><img src="Imagenes/editaaar.png" class="img-responsive" alt="Image" ></span></a>';
            tablacarrera += '<a href="Carreras.html" type="button" class="delete btn btn-default" name="eliminarcarrera" id="' + carrer[i].codigo + '"><span><img src="Imagenes/deleteee.png" class="img-responsive" alt="Image"></span></a></td>';

            document.getElementById("tablacarreras").innerHTML = tablacarrera;
        }
    }
}

//FUNCION PARA PASAR POR PARAMETRO DE LA CEDULA DEL ESTUDIANTE POR LOCAL STORAGE
function editarEstudiante(cedula) {
    localStorage.setItem('IdEstudiante', cedula);
}
//FUNCION PARA PASAR POR PARAMETRO DE LA CEDULA DEL USUARIO POR LOCAL STORAGE
function editarUsuario(cedula) {
    localStorage.setItem('IdUsuarioEditar', cedula);
}
//FUNCION PARA PASAR POR PARAMETRO DEL ID DE LA CARRERA POR LOCAL STORAGE
function editarCarrera(id) {
    localStorage.setItem('IdCarrera', id);
}
//FUNCION QUE OBTIENE LE VALOR DEL ID DE ESTUDIANTE DE LOCAL STORAGE Y LOS CARGA EN LOS CAMPOS PARA EDITARLO
function editarCargarEstudiantes() {

    var idtemp = localStorage.getItem('IdEstudiante');

    var estu = JSON.parse(localStorage.getItem('Estudiantes'));
    var cedu;

    for (var i = 0; i < estu.length; i++) {
        if (estu != undefined) {

            cedu = estu[i].cedula;

            if (cedu == idtemp) {

                var nombreEstu = estu[i].nombre;
                var apellidos = estu[i].apellidos;
                var imagen = estu[i].imagen;
                var nivel = estu[i].nivel;
                var carrera = estu.carrera;

                document.getElementById('cedula').value = cedu;
                document.getElementById('nombre').value = nombreEstu;
                document.getElementById('apellidos').value = apellidos;
                document.getElementById('nivel').value = nivel;
                //document.getElementById('inputimage').value = "HOLA";

                //COLOCA LA IMAGEN 
                var image = '<img src="Imagenes/' + imagen + '"  alt="Image width="140" height="135">'

                document.getElementById("imagen").innerHTML = image;
            }
        }
    }
}

//FUNCION QUE OBTIENE LE VALOR DEL ID DE USUARIO DE LOCAL STORAGE Y LOS CARGA EN LOS CAMPOS PARA EDITARLO
function editarCargarUsuarios() {

    var idtemp = localStorage.getItem('IdUsuarioEditar');

    var user = JSON.parse(localStorage.getItem('Usuarios'));
    var cedu;

    for (var i = 0; i < user.length; i++) {
        if (user != undefined) {

            cedu = user[i].cedula;

            if (cedu == idtemp) {

                var nombreuser = user[i].nombre;
                var apellidos = user[i].apellidos;
                var contra = user[i].contraseña;

                document.getElementById('cedula').value = cedu;
                document.getElementById('nombre').value = nombreuser;
                document.getElementById('apellidos').value = apellidos;
                document.getElementById('contraseña').value = contra;
            }
        }
    }
}

//FUNCION QUE OBTIENE LE VALOR DEL ID DE LA CARREA DE LOCAL STORAGE Y LOS CARGA EN LOS CAMPOS PARA EDITARLO
function editarCargarCarrera() {

    var idtemp = localStorage.getItem('IdCarrera');

    var car = JSON.parse(localStorage.getItem('Carreras'));
    var idcarrera;

    for (var i = 0; i < car.length; i++) {
        if (car != undefined) {

            idcarrera = car[i].codigo;

            if (idcarrera == idtemp) {

                var codigocarrera = car[i].codigo;
                var nombrecarrera = car[i].carrera;

                document.getElementById('codigo').value = codigocarrera;
                document.getElementById('nombre').value = nombrecarrera;

            }
        }
    }
}

//FUNCION PARA EDITAR EL ESTUDIANTE OBTIENE EL ID Y LO COMPARA LUEGO LOS GUARDA
function editarEstudiantesNuevo() {

    var idtemp = localStorage.getItem('IdEstudiante');
    var cedula = document.getElementById('cedula').value,
        nombre = document.getElementById('nombre').value,
        apellidos = document.getElementById('apellidos').value,
        imagen = document.getElementById('inputimagen').files[0].name,
        nivel = document.getElementById('nivel').value,
        carrera = document.getElementById('selectCarreras').value;


    var estu = JSON.parse(localStorage.getItem('Estudiantes'));
    var cedu;
    debugger;
    for (var i = 0; i < estu.length; i++) {
        if (estu != undefined) {

            cedu = estu[i].cedula;

            if (cedu == idtemp) {

                estu[i].nombre = nombre;
                estu[i].apellidos = apellidos;
                if (imagen.length >= 0) {
                    estu[i].imagen = imagen;
                }
                estu[i].nivel = nivel;
                estu[i].carrera = carrera;
                estu[i].cedula = cedula;

            }
        }
    }
    localStorage.setItem('Estudiantes', JSON.stringify(estu));
    localStorage.removeItem('IdEstudiante');

    alert("ESTUDIANTE EDITADO CON EXITO")
}

//FUNCION PARA EDITAR EL USUARIO OBTIENE EL ID Y LO COMPARA LUEGO LOS GUARDA
function editarUsuariosNuevo() {

    var idtemp = localStorage.getItem('IdUsuarioEditar');
    var cedula = document.getElementById('cedula').value,
        nombre = document.getElementById('nombre').value,
        apellidos = document.getElementById('apellidos').value,
        contraseña = document.getElementById('contraseña').value,
        role = document.getElementById('selectRole').value;


    var user = JSON.parse(localStorage.getItem('Usuarios'));
    var cedu;
    debugger;
    for (var i = 0; i < user.length; i++) {
        if (user != undefined) {

            cedu = user[i].cedula;

            if (cedu == idtemp) {

                user[i].nombre = nombre;
                user[i].apellidos = apellidos;
                user[i].contraseña = contraseña;
                user[i].role = role;
                user[i].cedula = cedula;

            }
        }
    }
    localStorage.setItem('Usuarios', JSON.stringify(user));
    localStorage.removeItem('IdUsuarioEditar');

    alert("ESTUDIANTE EDITADO CON EXITO")
}

//FUNCION PARA EDITAR LA CARRERA OBTIENE EL ID Y LO COMPARA LUEGO LOS GUARDA
function editarCarrerasNuevo() {

    var idtemp = localStorage.getItem('IdCarrera');
    var codigo = document.getElementById('codigo').value,
        nombre = document.getElementById('nombre').value;


    var car = JSON.parse(localStorage.getItem('Carreras'));
    var codigocarrera;
    debugger;
    for (var i = 0; i < car.length; i++) {
        if (car != undefined) {

            codigocarrera = car[i].codigo;

            if (codigocarrera == idtemp) {

                car[i].codigo = codigo;
                car[i].carrera = nombre;

            }
        }
    }
    localStorage.setItem('Carreras', JSON.stringify(car));
    localStorage.removeItem('IdCarrera');

    alert("CARRERA EDITADA CON EXITO")
}

//FUNCION PARA CAMBIAR LA IMAGEN
function cambiarimagen() {

    var imagen = document.getElementById('inputimagen').files[0].name;

    var image = '<img src="Imagenes/' + imagen + '"  alt="Image width="140" height="135">'
        //  var image= '<img src="Imagenes/' + imagen + '"  alt="Image width="140" height="135" class="file-preview-image">'

    document.getElementById("imagen").innerHTML = image;
}


//FUNCION PARA BORRAR ESTUDIANTE, OBTIENE LA CEDULA, BORRA EL OBJETO DE LA POSICION,
// LUEGO CREA UN ARREGLO NUEVO Y LO VUELVE A CARGAR EN LOCAL STORAGE-
function borrarEstudiante(cedula) {

    var cedu = cedula;
    var arrayTemporal = [];
    var estu = JSON.parse(localStorage.getItem('Estudiantes'));
    var cedutemp;
    debugger;
    for (var i = 0; i < estu.length; i++) {
        if (estu != undefined) {
            cedutemp = estu[i].cedula;
            if (cedutemp == cedu) {

                delete estu[i];
                break;
            }
        }
    }
    for (var i = 0; i < estu.length; i++) {

        if (estu[i] != undefined) {
            var estudiante = {
                "cedula": estu[i].cedula,
                "nombre": estu[i].nombre,
                "apellidos": estu[i].apellidos,
                "imagen": estu[i].imagen,
                "nivel": estu[i].nivel,
                "carrera": estu[i].carrera
            };

            arrayTemporal.push(estudiante);
        }
    }

    localStorage.setItem('Estudiantes', JSON.stringify(arrayTemporal));
}


//FUNCION PARA BORRAR USUARIO, OBTIENE LA CEDULA, BORRA EL OBJETO DE LA POSICION,
// LUEGO CREA UN ARREGLO NUEVO Y LO VUELVE A CARGAR EN LOCAL STORAGE-
function borrarUsuario(cedula) {

    var cedu = cedula;
    var arrayTemporal = [];
    var user = JSON.parse(localStorage.getItem('Usuarios'));
    var cedutemp;
    debugger;
    for (var i = 0; i < user.length; i++) {
        if (user != undefined) {
            cedutemp = user[i].cedula;
            if (cedutemp == cedu) {

                delete user[i];
                break;
            }
        }
    }
    for (var i = 0; i < user.length; i++) {
        if (user[i] != undefined) {
            var usuario = {
                "cedula": user[i].cedula,
                "nombre": user[i].nombre,
                "apellidos": user[i].apellidos,
                "contraseña": user[i].contraseña,
                "role": user[i].role
            };


            arrayTemporal.push(usuario);
        }
    }

    localStorage.setItem('Usuarios', JSON.stringify(arrayTemporal));
}


//FUNCION PARA BORRAR CARRERA, OBTIENE LA CEDULA, BORRA EL OBJETO DE LA POSICION,
// LUEGO CREA UN ARREGLO NUEVO Y LO VUELVE A CARGAR EN LOCAL STORAGE-
function borrarCarrera(id) {

    var idcarrera = id;
    var arrayTemporal = [];
    var car = JSON.parse(localStorage.getItem('Carreras'));
    var idtemp;
    debugger;
    for (var i = 0; i < car.length; i++) {
        if (car != undefined) {
            idtemp = car[i].codigo;
            if (idtemp == idcarrera) {

                delete car[i];
                break;
            }
        }
    }
    for (var i = 0; i < car.length; i++) {
        if (car[i] != undefined) {
            var carrera = {
                "codigo": car[i].codigo,
                "carrera": car[i].carrera
            };


            arrayTemporal.push(carrera);
        }
    }

    localStorage.setItem('Carreras', JSON.stringify(arrayTemporal));
}

//FUNCION PARA VALIDAR USUARIO Y CONTRASEÑA AL INICIAR SESION Y TIENE POR DEFECTO EL USUARIO ADMIN
function iniciarsesion() {
    var admin = "Admin";
    var contra = "12345";
    var usuario = document.getElementById('usuario').value,
        pass = document.getElementById('contra').value;
    var usuariocomparar;
    var contracomparar;
    var user = JSON.parse(localStorage.getItem('Usuarios'));

    for (var i = 0; i < user.length; i++) {
        if (user != undefined) {
            usuariocomparar = user[i].nombre;
            contracomparar = user[i].contraseña;
            if (usuariocomparar == usuario && contracomparar == pass) {
                //location.href='Dashboard.html';
                localStorage.setItem('IdUsuario', usuario);

                setTimeout("location.href='Dashboard.html'", 0);
            } else if (usuario == admin && pass == contra) {
                localStorage.setItem('IdUsuario', "Admin");

                setTimeout("location.href='Dashboard.html'", 0);
            } else {
                alert("USUARIO O CONTRASEÑA INCORRECTA");
            }
        }
    }
}

//FUNCION PARA CARGAR LA BARRA EN TODOS LOS HTML, Y PONE EL USUARIO QUE SE LOGUEA CON LA SIGUIENTE HOLA+"NOMBRE USUARIO"
function cargarBarra() {

    var idtemp = localStorage.getItem('IdUsuario');

    var barra = '<nav class="navbar navbar-default" role="navigation">'
    barra += ' <div class="navbar-header" id="barra">';
    barra += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">';
    barra += '          <span class="sr-only">Toggle navigation</span>';
    barra += '<span class="icon-bar"></span>';
    barra += '<span class="icon-bar"></span>';
    barra += '<span class="icon-bar"></span>';
    barra += '</button>';
    barra += '<a class="navbar-brand" href="Dashboard.html">Universidad Tecnica Nacional</a>'
    barra += '</div>';
    barra += '            <!-- Collect the nav links, forms, and other content for toggling -->';
    barra += '<div class="collapse navbar-collapse navbar-ex1-collapse">';
    barra += ' <ul class="nav navbar-nav navbar-right">';
    barra += '<li>'
    barra += '<a href="Dashboard.html">'
    barra += '<span class="glyphicon glyphicon-th-large"></span> Dashboard</a>';
    barra += '</li>';
    barra += '<li>'
    barra += '<a href="Estudiantes.html">'
    barra += '<span class="glyphicon glyphicon-user"></span> Estudiantes</a>'
    barra += '</li>'
    barra += '<li>'
    barra += '<a href="Carreras.html">'
    barra += '<span class="glyphicon glyphicon-calendar"></span> Carreras</a>'
    barra += '</li>'
    barra += '<li>'
    barra += '<a href="Usuarios.html">'
    barra += '<span class="glyphicon glyphicon-collapse-up"></span> Usuarios</a>'
    barra += '</li>'
    barra += '<li class="dropdown">'
    barra += '<a href="#" class="dropdown-toggle" data-toggle="dropdown">';
    barra += '<span class="glyphicon glyphicon-tag"></span> Hola ' + idtemp;
    barra += '           <span class="caret"></span>'
    barra += '</a>'
    barra += '     </a>'
    barra += '<ul class="dropdown-menu" role="menu">'
    barra += '<li>'
    barra += '<a href="Login.html">'
    barra += '<span class="glyphicon glyphicon-cog"></span>Cerrar Sesion</a>'
    barra += '</li>'
    barra += '</ul>'
    barra += '</li>'
    barra += '</ul>'
    barra += ' </div>'
    barra += ' </nav>'

    document.getElementById("barra").innerHTML = barra;
}
