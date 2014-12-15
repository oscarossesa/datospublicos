$(document).ready(function () {
    setTimeout("show5()", 1000);
    mostrarFecha();

    //en minutos
    var minutos = 1;
    var intervalo = 1000 * 60 * minutos;

    //en milisegundos
    //var intervalo = 10000;

    var activo = true;

    if (activo) {
        cargarIndicadoresLc();
        cargarIndicadoresOc();

        setInterval(function () {
            cargarIndicadoresLc();
            cargarIndicadoresOc();
        }, intervalo);
    }
});

function obtenerFecha() {
    var f = new Date();

    var dia = f.getDate();
    var mes = f.getMonth() + 1;
    var anho = f.getFullYear();

    return (dia < 10 ? '0' : '') + dia + (mes < 10 ? '0' : '') + mes + f.getFullYear();
}

function mostrarFecha() {
    var f = new Date();

    var dia = f.getDate();
    var mes = f.getMonth();
    var anho = f.getFullYear();

    meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    $("#spnfecha").text(dia + " " + "de " + meses[mes] + " del " + anho);
}

function getUrl(objeto, estado) {
    //var host = "http://localhost/";
    //var host = "http://desarrollo2:8080/";
    var host = "http://api.mercadopublico.cl/";
    var version = "v1";
    var objeto = objeto;
    var estado = estado;
    var fecha = getFecha();
    //var ticket = "D6DF9A69-2F0E-482E-B1F4-55A234C8193F"; //des
    var ticket = "78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1"; //pro
    host + "servicios/" + version + "/publico/" + objeto + "/" + estado + "/" + fecha + "?ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1";
    var url = host + "servicios/" + version + "/publico/" + objeto + "/" + estado + "/" + fecha + "?ticket=" + ticket;
    return url;
}

function cargarIndicadoresLc() {

    var objeto = "licitaciones";
    var respuesta = "jsonp";

    $.ajax({
        //url: url,
        url: "http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.jsonp?estado=todos&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#TodasLc").text(data.Cantidad);
        },
        error: function (data) { console.log("licitacion/todos"); }
    });

    $.ajax({
        //url: getUrl(objeto, "publicada"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.jsonp?estado=publicada&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#Publicadas").text(data.Cantidad);
        },
        error: function (data) { console.log("licitacion/publicada"); }
    });

    $.ajax({
        //url: getUrl(objeto, "cerrada"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.jsonp?estado=cerrada&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#Cerradas").text(data.Cantidad);
        },
        error: function (data) { console.log("licitacion/cerrada"); }
    });

    $.ajax({
        //url: getUrl(objeto, "desierta"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.jsonp?estado=desierta&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#Desiertas").text(data.Cantidad);
        },
        error: function (data) { console.log("licitacion/desierta"); }
    });

    $.ajax({
        //url: getUrl(objeto, "adjudicada"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.jsonp?estado=adjudicada&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#Adjudicadas").text(data.Cantidad);
        },
        error: function (data) { console.log("licitacion/adjudicada"); }
    });

    $.ajax({
        //url: getUrl(objeto, "revocada"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.jsonp?estado=revocada&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#Revocadas").text(data.Cantidad);
        },
        error: function (data) { console.log("licitacion/revocada"); }
    });

    $.ajax({
        //url: getUrl(objeto, "suspendida"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.jsonp?estado=suspendida&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#Suspendidas").text(data.Cantidad);
        },
        error: function (data) { console.log("licitacion/suspendida"); }
    });

}

function cargarIndicadoresOc() {
    
    var objeto = "ordencompra";

    $.ajax({
        //url: getUrl(objeto, "todos"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/ordenesdecompra.jsonp?estado=todos&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#TodasOc").text(data.Cantidad);
        },
        error: function (data) { console.log("ordencompra/todos"); }
    });

    $.ajax({
        //url: getUrl(objeto, "enviadaproveedor"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/ordenesdecompra.jsonp?estado=enviadaproveedor&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#EnviadaaProveedor").text(data.Cantidad);
        },
        error: function (data) { console.log("ordencompra/enviadaproveedor"); }
    });

    $.ajax({
        //url: getUrl(objeto, "aceptada"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/ordenesdecompra.jsonp?estado=aceptada&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#Aceptada").text(data.Cantidad);
        },
        error: function (data) { console.log("ordencompra/aceptada"); }
    });

    $.ajax({
        //url: getUrl(objeto, "cancelada"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/ordenesdecompra.jsonp?estado=cancelada&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#Cancelada").text(data.Cantidad);
        },
        error: function (data) { console.log("ordencompra/cancelada"); }
    });

    $.ajax({
        //url: getUrl(objeto, "recepcionconforme"),
        url: "http://api.mercadopublico.cl/servicios/v1/publico/ordenesdecompra.jsonp?estado=recepcionconforme&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#RecepcionConforme").text(data.Cantidad);
        },
        error: function (data) { console.log("ordencompra/recepcionconforme"); }
    });

    $.ajax({
        //url: getUrl(objeto, "pendienterecepcion"),}
        url: "http://api.mercadopublico.cl/servicios/v1/publico/ordenesdecompra.jsonp?estado=pendienterecepcion&ticket=78D4FEE6-7D6B-4EE6-85A8-6B272E237AC1",
        type: "get",
        dataType: "jsonp",
        async: true,
        success: function (data) {
            $("#PendientedeRecepcionar").text(data.Cantidad);
        },
        error: function (data) { console.log("ordencompra/pendienterecepcion"); }
    });
}

function show5() {
    if (!document.layers && !document.all && !document.getElementById)
        return

    var Digital = new Date()
    var hours = Digital.getHours()
    var minutes = Digital.getMinutes()
    var seconds = Digital.getSeconds()

    var hours = Digital.getUTCHours();
    console.log(hours);

    var dn = "PM"
    if (hours < 12)
        dn = "AM"
    if (hours > 12)
        hours = hours - 12
    if (hours == 0)
        hours = 12

    if (minutes <= 9)
        minutes = "0" + minutes
    if (seconds <= 9)
        seconds = "0" + seconds
    //change font size here to your desire
    //myclock = "<font size='5' face='Arial' ><b><font size='1'>Hora actual:</font></br>" + hours + ":" + minutes + ":"
    myclock = "Hora Actual: " + hours + ":" + minutes + ":" + seconds + " " + dn;
    if (document.layers) {
        document.layers.liveclock.document.write(myclock)
        document.layers.liveclock.document.close()
    }
    else if (document.all)
        liveclock.innerHTML = myclock
    else if (document.getElementById)
        document.getElementById("liveclock").innerHTML = myclock
    setTimeout("show5()", 1000)
}