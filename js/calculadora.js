/**-------------------------------------------------------------------------
 *          ==Objeto para definir las propiedades de la calculadora==
 --------------------------------------------------------------------------*/
var ProCal={
    teclado:document.querySelectorAll('#calculadora ul li'),
    accion:null,
    operaciones:document.querySelectorAll('#operaciones'),
    digito:0,
    cantidadSigno:0,
    cantidadDecimal:false

};
/**-------------------------------------------------------------------------
 *          ==Objeto para definir todos los metodos para la calculadora==
 --------------------------------------------------------------------------*/
 var medCal={
    inicio:function () {
        //  console.log(ProCal.teclado);
        ProCal.teclado.forEach(element => {
            element.addEventListener('click',medCal.oprimirTecla);
        })
        },
    oprimirTecla:function(tecla){
        // console.log(tecla);
        ProCal.accion=tecla.target.getAttribute('class');
        // console.log(ProCal.accion);
        ProCal.digito=tecla.target.innerHTML;
        // console.log(ProCal.digito);
        medCal.calculadora(ProCal.accion,ProCal.digito);
    },
    calculadora:function(accion,digito){
        switch (accion) {
            case'numero' :
                ProCal.cantidadSigno==0;
                if (ProCal.operaciones.innerHTML===0) {
                    ProCal.operaciones.innerHTML=digito;
                }
                console.log(accion);
                ProCal.operaciones.innerHTML+=digito;
                break;
            case 'signo':
                ProCal.cantidadSigno++;
                if (ProCal.cantidadSigno==1 ) {
                    ProCal.operaciones.innerHTML+=digito;
                }
                if ( ProCal.operaciones.innerHTML==0) {
                    ProCal.operaciones.innerHTML=0;
                } else { (ProCal.cantidadSigno==1)
                    ProCal.cantidadSigno==0;
                }
                console.log(accion);
                break;
            case 'decimal':
            if (!ProCal.cantidadDecimal && ProCal.cantidadSigno!=1) {
                ProCal.operaciones.innerHTML+=digito;
                ProCal.cantidadDecimal=true;
            }
                ProCal.operaciones.innerHTML+=digito;
                 console.log(accion);
                break;
            case 'igual':
            ProCal.operaciones.innerHTML=eval(ProCal.operaciones.innerHTML);
                console.log(accion);
                break;
            default:
                break;
        }
    },
    borrar:function () {
        ProCal.operaciones.innerHTML===0;
    }
 }
 medCal.inicio();