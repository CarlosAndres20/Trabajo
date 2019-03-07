var validar={
    entradas:document.querySelectorAll('input.validar'),
    valimput:null,
    vartipo:null,
}
var valForm = {
    //Función que valida textos con  valores maximos, minimos,y expresiones 
    //regulares
   
    valText:function(min,max,propVal,inpVal,menError,expresionRegular ){
       
   
       if(propVal.length < min || propVal.length > max || !expresionRegular.test(propVal) ){
           //Al existir un error se muestra un mensaje de advertencia en un span 
           inpVal.innerHTML = '<span style="color:red">*Error al ingresar los datos: '+menError+'</span>';

           return false;

       }else{
          //Si no existe error borramos el  span
           inpVal.parentNode.removeChild(inpVal);

          return true;

       }
      
    },
    //Método para validar expresiones regulares 
    valExpRegular:function(expresionRegular,propFormVal,inpVal,menError){
        
       if(!expresionRegular.test(propFormVal)){
           //Si es incorrecta la validación se muestra el mensaje de advertencia
           inpVal.innerHTML = '<span style="color:red">*Error al ingresar los datos: '+menError+'</span>';

           return  false;

       }else{

            //En caso contrario se elimina el mensaje que anteriormente fue creado
           inpVal.parentNode.removeChild(inpVal);

           return  true;
       }

    }
}
var metform={
    inicio:function () {
        validar.entradas.forEach(element => {
            element.addEventListener('focus',metform.inpfocu);
            element.addEventListener('blur',metform.inpfuerafocu);
            element.addEventListener('change',metform.inpCambio);
        });
    },
    inpfocu:function(input){
        validar.valimput=input.target.value;
        // console.log(inpfocu.input);
        if (validar.valimput=='') {
            document.querySelector('#'+input.target.id).style.background='rgb(113,15,223)';
            document.querySelector('#'+input.target.id).style.borderBotton='6px solid rgb(255,0,0)'
            document.querySelector('[for='+input.target.id+'] .obligatorio').style.display='block';
        } else{
            document.querySelector("[for="+input.target.id+"]").appendChild(document.createElement("DIV")).setAttribute("class","error")
        }
    },
    inpfuerafocu:function(input){
        document.querySelector('[for='+input.target.id+'] .obligatorio').style.display='none';
        document.querySelector('#'+input.target.id).style.background='#FFF';
    },
    inpCambio:function(input){
        console.log('Estoy cambiando'+input.target.id);
    },
    inpEscribiendo:function(){
        var vartipo=input.target.type;
        switch (vartipo) {
            case 'text':
                console.log('Este es un tipo texto');
                propForm.expresionRegular = /^[a-zA-Z]+$/;
                let validars=valForm.valText(2,8, validar.valimput.document.querySelector('[form='+input.target.id+'] .error'),input.target.placeholder,propForm.expresionRegular);
                break;
            case 'number':
                console.log('Este es un tipo number');
                break;
            case 'password':
                console.log('Este es un tipo password');
                break;
            case 'date':
                console.log('Este es un tipo date');
                break;
        
            default:
                break;
        }
    }
} 
metform.inicio();