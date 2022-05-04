// localizando campos
var fields = document.querySelectorAll("#form-user-create [name]");

// informacoes do usuario
var user = {};

// verificando campos
fields.forEach(function(field, index){

    if(field.name == "gender"){
        
        if(field.checked){
            user[field.name] = field.value;
        }
        
    }else{
        user[field.name] = field.value;
    }
    
});