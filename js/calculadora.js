/**-------------------------------------------------------------------------
 *          ==Objeto para definir las propiedades de la calculadora==
 --------------------------------------------------------------------------*/
var ProCal={
    teclado:document.querySelectorAll('#calculadora ul li'),
    accion:null

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
        console.log(tecla);
        ProCal.accion=tecla.target.getAttribute('class');
        console.log(ProCal.accion);
        medCal.calculadora(ProCal.accion);
    },
    calculadora:function(accion){
        switch (accion) {
            case'numero' :
                console.log(accion);
                break;
            case 'signo':
                console.log(accion);
                break;
            case 'decimal':
                console.log(accion);
                break;
            case 'igual':
                console.log(accion);
                break;
            default:
                break;
        }
    }
 }
 medCal.inicio();