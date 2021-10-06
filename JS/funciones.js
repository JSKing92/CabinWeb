



function consultar(){
    $.ajax({
        url:'https://g4d23dfd3163dfe-gastosdb1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',  
        type:'GET',
        dataType:'json',
        success: function(respuesta){
            console.log(respuesta);
            pintarCabin(respuesta.items);
         
        }


        
    });
}

function prueba(){
    console.log("Anidado")
}



function buscar(){

    var e = document.getElementById("servicio");
    var text = e.options[e.selectedIndex].text;
    /*alert('Buscando por servicio '+text);*/

    if(text == "Cabaña"){
       /*const result = document.getElementById('Resultado')
       result.innerHTML ='<h1> Resultados cabañas </h1>'
       const titulo = document.createElement('h1')
       titulo.textContent = 'Cabañas'
       result.appendChild(titulo)*/

       /*const tablar = document.getElementById('Tabla')
       tablar.innerHTML ='<table><thead><tr><th>ID</th><th>BRAND</th><th>ROOMS</th><th>CATEGORY ID</th><th>NAME</th><th>ACCIONES</th></tr></thead></table>'
       */
      
       MostrarCabin();


        
    }

    if(text == "Cliente"){
        /*alert('Ejecutar Codigo2')
        const result = document.getElementById('Resultado')
        result.innerHTML ='<h1> Resultados clientes</h1>'
        const titulo = document.createElement('h1')
        titulo.textContent = 'Clientes'
        result.appendChild(titulo)
        const tablar = document.getElementById('Tabla')
        tablar.innerHTML ='<table><thead><tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>AGE</th><th>ACCIONES</th></tr></thead></table>'
        */

        MostrarClientes();
    
    }

    if(text == "Mensaje"){
       /*alert('Ejecutar Codigo3')
        const result = document.getElementById('Resultado')
        result.innerHTML ='<h1> Resultados mensaje </h1>'
        const titulo = document.createElement('h1')
        titulo.textContent = 'Mensajes'
        result.appendChild(titulo)
        const tablar = document.getElementById('Tabla')
        tablar.innerHTML ='<table><thead><tr><th>ID</th><th>MENSAJE</th><th>ACCIONES</th></tr></thead></table>'
        */ 
        MostrarMensajes();  
    }
    
    

    console.log(text)

}


function EnviarCabin(){
    let datos = {
        id:$("#id").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let datosenviados = JSON.stringify(datos);
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin',
        data:datos,
        type:'POST',
        dataType:'JSON',

        errr: function(xhr,status){
            alert('Ha sucedido un problema, '+xhr.status);
        },
        complete: function(xhr,status){
           /*alert('Peticion realizada '+xhr.status)*/
           if(xhr.status==555){

            alert("Error al guardar prube con otro ID o verifique que esta completa la informacion")

           }
           else{
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
    
            alert("Cabaña guardada");

           }

     
         
        },
        
        /*success: function(respuesta){
        $("#id").val("");
        $("#brand").val("");
        $("#rooms").val("");
        $("#category_id").val("");
        $("#name").val("");

        alert("Cabaña guardada");

        }*/


        
    });

}


function EnviarClient(){
    let datos = {
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let datosenviados = JSON.stringify(datos);
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        data:datos,
        type:'POST',
        dataType:'JSON',

        errr: function(xhr,status){
            alert('Ha sucedido un problema, '+xhr.status);
        },
        complete: function(xhr,status){
           /*alert('Peticion realizada '+xhr.status)*/
           if(xhr.status==555){

            alert("Error al guardar prube con otro ID o verifique que esta completa la informacion")

           }
           else{
            $("#id").val("");
            $("#name").val("");
            $("#mail").val("");
            $("#age").val("");
            alert("Cliente guardado");

           }

     
         
        },
        
    });

}

function EnviarMensaje(){
    let datos = {
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };
    let datosenviados = JSON.stringify(datos);
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        data:datos,
        type:'POST',
        dataType:'JSON',

        errr: function(xhr,status){
            alert('Ha sucedido un problema, '+xhr.status);
        },
        complete: function(xhr,status){
           /*alert('Peticion realizada '+xhr.status)*/
           if(xhr.status==555){

            alert("Error al guardar prube con otro ID o verifique que esta completa la informacion")

           }
           else{
            $("#id").val("");
            $("#messagetext").val("");
            alert("Mensaje guardado");

           }

     
         
        },
        
    });

}





function MostrarCabin(){
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin',  
        type:'GET',
        dataType:'JSON',
        success: function(respuesta){
            console.log(respuesta);
            pintarCabin(respuesta.items);        
        }
    });
}

function pintarClientes(items){
    let mytable='<table>';
    mytable+='<thead><tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>AGE</th><th>ACCIONES</th></tr></thead>';
    for(i=0;i<items.length;i++){
        
        mytable+='<tr>';
        mytable+='<td>'+items[i].id+'</td>';
        mytable+='<td>'+items[i].name+'</td>';
        mytable+='<td>'+items[i].email+'</td>';
        mytable+='<td>'+items[i].age+'</td>';
        mytable+="<td><button onclick='BorrarCliente("+items[i].id+")'>Borrar</button>";
        mytable+="<td><button onclick='EditarClient("+items[i].id+")'>Editar</button>";
        mytable+='</tr>';
    }
    
    mytable+='</table>';
    $("#Tabla").append(mytable);


}

function MostrarClientes(){
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',  
        type:'GET',
        dataType:'JSON',
        success: function(respuesta){
            console.log(respuesta);
            pintarClientes(respuesta.items);
                    
        }
    });
}

function pintarMensajes(items){

    let mytable='<table>';
    mytable+='<thead><tr><th>ID</th><th>MENSAJE</th><th>ACCIONES</th></tr></thead>';
    for(i=0;i<items.length;i++){
        
        mytable+='<tr>';
        mytable+='<td>'+items[i].id+'</td>';
        mytable+='<td>'+items[i].messagetext+'</td>';
        mytable+="<td><button onclick='BorrarMensaje("+items[i].id+")'>Borrar</button>";
        mytable+="<td><button onclick='EditarMensaje("+items[i].id+")'>Editar</button>";
        mytable+='</tr>';
    }
    
    mytable+='</table>';
    $("#Tabla").append(mytable);


}

function MostrarMensajes(){
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',  
        type:'GET',
        dataType:'JSON',
        success: function(respuesta){
            console.log(respuesta);
            pintarMensajes(respuesta.items);        
        }
    });
}

function BorrarCabin(idCabin){
    let Mydata = {
        id:idCabin
    };
    let dato = JSON.stringify(Mydata);
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin',  
        data:dato,
        type:'DELETE',
        contentType:"application/JSON",
        dataType:'JSON',
        success: function(respuesta){
            alert('Cabina Borrada')
            pintarCabin(respuesta.items);        
        }

    });
}

function BorrarCliente(idCliente){
    let Mydata = {
        id:idCliente
    };
    let dato = JSON.stringify(Mydata);
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',  
        data:dato,
        type:'DELETE',
        contentType:"application/JSON",
        dataType:'JSON',
        success: function(respuesta){
            alert('Cliente Borrado')
            pintarClientes(respuesta.items);        
        }

    });
}

function TraerCabin(idCabin){

}

function BorrarMensaje(idMensaje){
    let Mydata = {
        id:idMensaje
    };
    let dato = JSON.stringify(Mydata);
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',  
        data:dato,
        type:'DELETE',
        contentType:"application/JSON",
        dataType:'JSON',
        success: function(respuesta){
            alert('Mensaje borrado')       
        }

    });
}

function pintarCabin(items){

    
    let mytable='<table>';
    mytable+='<thead><tr><th>ID</th><th>BRAND</th><th>ROOMS</th><th>CATEGORY ID</th><th>NAME</th><th>ACCIONES</th></tr></thead>';
    for(i=0;i<items.length;i++){
        
        mytable+='<tr>';
        mytable+='<td>'+items[i].id+'</td>';
        mytable+='<td>'+items[i].brand+'</td>';
        mytable+='<td>'+items[i].rooms+'</td>';
        mytable+='<td>'+items[i].category_id+'</td>';
        mytable+='<td>'+items[i].name+'</td>';
        mytable+="<td><button onclick='BorrarCabin("+items[i].id+")'>Borrar</button></td>";
        mytable+="<td><button onclick='EditarCabin("+items[i].id+")'>Editar</button></td>";
        mytable+='</tr>';
    }
    
    mytable+='</table>';
    $("#Tabla").append(mytable);


}



function MostrarFormCabin(){
    var y = document.getElementById("ConsultaForm");
    y.style.display = 'none';
    var x = document.getElementById("EditCabin");
    x.style.display = 'block';

}

function MostrarFormClient(){
    var y = document.getElementById("ConsultaForm");
    y.style.display = 'none';
    var x = document.getElementById("EditClient");
    x.style.display = 'block';


}

function MostrarFormMensaje(){
    var y = document.getElementById("ConsultaForm");
    y.style.display = 'none';
    var x = document.getElementById("EditMensj");
    x.style.display = 'block';
 

}


function EditarCabin(ident){
    
    MostrarFormCabin();
    /*document.getElementById("id").value = id.text;
    document.getElementById("brand").value = brand.text;
    document.getElementById("rooms").value = rooms.text;
    document.getElementById("category_id").value = category_id.text;
    document.getElementById("name").value = name.text;*/

    /*$("#id").val()=id;
    $("#brand").val()=brand;
    $("#rooms").val()=rooms;
    $("#category_id").val()=category_id;
    $("#name").val()=name;*/

    document.getElementById("id1").value = ident;

    console.log(ident)

    let Mydata = {
        id:ident
    };
    let dato = JSON.stringify(Mydata);
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin/'+ident,  
        type:'GET',
        dataType:'JSON',
        success: function(respuesta){
        
            document.getElementById("brand1").value = respuesta.items[0].brand;
            document.getElementById("rooms1").value = respuesta.items[0].rooms;
            document.getElementById("category_id1").value = respuesta.items[0].category_id;
            document.getElementById("name1").value = respuesta.items[0].name;
        }

    });

    let identidad = document.getElementById("id1");
    identidad.disabled = true;
    

}

function EditarClient(ident){
    
    MostrarFormClient();

    document.getElementById("id2").value = ident;

    console.log(ident)

    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/'+ident,  
        type:'GET',
        dataType:'JSON',
        success: function(respuesta){
        
            document.getElementById("name2").value = respuesta.items[0].name;
            document.getElementById("email2").value = respuesta.items[0].email;
            document.getElementById("age2").value = respuesta.items[0].age;
            
        }

    });

    let identidad = document.getElementById("id2");
    identidad.disabled = true;
    

}


function EditarMensaje(ident){

    MostrarFormMensaje();

    document.getElementById("id3").value = ident;

    console.log(ident)

    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/'+ident,  
        type:'GET',
        dataType:'JSON',
        success: function(respuesta){
        
            document.getElementById("messagetext").value = respuesta.items[0].messagetext;
  
            
        }

    });

    let identidad = document.getElementById("id3");
    identidad.disabled = true;
    


}

function GuardarCabin(){
    let datos = {
        id:document.getElementById("id1").value,
        brand:document.getElementById("brand1").value,
        rooms:document.getElementById("rooms1").value,
        category_id:document.getElementById("category_id1").value,
        name:document.getElementById("name1").value,
    };


    let datosenviados = JSON.stringify(datos);
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin',
        data:datosenviados,
        type:'PUT',
        contentType: 'application/json',
        dataType:'JSON',

        errr: function(xhr,status){
            alert('Ha sucedido un problema, '+xhr.status);
        },
        complete: function(xhr,status){
           /*alert('Peticion realizada '+xhr.status)*/

        alert(xhr.status);
           if(xhr.status==555){

            alert("Error al guardar prube con otro ID o verifique que esta completa la informacion")

           }
           else{
           /* $("#id1").val("");
            $("#brand1").val("");
            $("#rooms1").val("");
            $("#category_id1").val("");
            $("#name1").val("");*/
    
            alert("Cabaña Editada");

           }
             
        },
        
    });

}


function GuardarClient(){

    let datos = {
        id:document.getElementById("id2").value,
        name:document.getElementById("name2").value,
        email:document.getElementById("email2").value,
        age:document.getElementById("age2").value,
    };


    let datosenviados = JSON.stringify(datos);
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        data:datosenviados,
        type:'PUT',
        contentType: 'application/json',
        dataType:'JSON',

        errr: function(xhr,status){
            alert('Ha sucedido un problema, '+xhr.status);
        },
        complete: function(xhr,status){
           /*alert('Peticion realizada '+xhr.status)*/

        alert(xhr.status);
           if(xhr.status==555){

            alert("Error al guardar prube con otro ID o verifique que esta completa la informacion")

           }
           else{
           /* $("#id1").val("");
            $("#brand1").val("");
            $("#rooms1").val("");
            $("#category_id1").val("");
            $("#name1").val("");*/
    
            alert("Cliente editado");

           }
             
        },
        
    });

}


function GuardarMensaje(){

    let datos = {
        id:document.getElementById("id3").value,
        messagetext:document.getElementById("messagetext").value,
    };


    let datosenviados = JSON.stringify(datos);
    $.ajax({
        url:'https://g4d23dfd3163dfe-db202109242319.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        data:datosenviados,
        type:'PUT',
        contentType: 'application/json',
        dataType:'JSON',

        errr: function(xhr,status){
            alert('Ha sucedido un problema, '+xhr.status);
        },
        complete: function(xhr,status){
           /*alert('Peticion realizada '+xhr.status)*/

        alert(xhr.status);
           if(xhr.status==555){

            alert("Error al guardar prube con otro ID o verifique que esta completa la informacion")

           }
           else{
           /* $("#id1").val("");
            $("#brand1").val("");
            $("#rooms1").val("");
            $("#category_id1").val("");
            $("#name1").val("");*/
    
            alert("Mensaje editado");

           }
             
        },
        
    });

}


    
