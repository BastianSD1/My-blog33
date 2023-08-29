var lienzo =new fabric.canvas('milienzo')


block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var bloque_objeto_imagen= "";


function nueva_imagen(get_image)
fabric.imagen.fromURL(get_image , function(img){(
	bloque_objeto_imagen=img;
	bloque_objeto_imagen.scaletowhidth(block_image_width);
	bloque_objeto_imagen.scaletoheight(block_image_height;)
	bloque_objeto_imagen.set({top:block_y,left:block_x});
lienzo.add(bloque_objeto_imagen);

)};

{
	






	

}

window.addEventListener("keydown", mi_TeclaPulsada);

function mi_TeclaPulsada(e)
{
teclaPresionada = e.keyCode;
console.log(teclaPresionada);
	
	if(teclaPresionada =='82' ) 
	block_x=10;
nueva_imagen(rojo.jpg)
console.log('R')
	
	{



	}
	// Usa el código de tecla apropiado para agregar la imagen verde
	if(teclaPresionada =='71' ) 
	block_x=310;
nueva_imagen(rojo.jpg)
console.log('G')
{


	}
	// Usa el código de tecla apropiado para agregar la imagen amarilla
}			
if(teclaPresionada =='89' ) 
block_x=560;
nueva_imagen(verde.png)
console.log('Y')
{
// Usa el código de tecla apropiado para agregar la imagen verde
if(teclaPresionada =='80' ) 
block_x=10;
nueva_imagen(amarillo.png)
console.log('P')
{

// Usa el código de tecla apropiado para agregar la imagen verde
if(teclaPresionada =='66' ) 
block_x=880;
nueva_imagen(rosa.jpg)
console.log('B')

