
function inicioEsVisible(){
    document.getElementById('inicio').style.visibility = 'visible';
    document.getElementById('quiensoy').style.visibility = 'hidden';
    document.getElementById('contacto').style.visibility = 'hidden';
    document.getElementById('aficiones').style.visibility = 'hidden';
    imagenesInvisibles()
}
function quiensoyEsVisible(){
    document.getElementById('inicio').style.visibility = 'hidden';
    document.getElementById('quiensoy').style.visibility = 'visible';
    document.getElementById('contacto').style.visibility = 'hidden';
    document.getElementById('aficiones').style.visibility = 'hidden';
    imagenesInvisibles()
}
function contactoEsVisible(){
    document.getElementById('inicio').style.visibility = 'hidden';
    document.getElementById('quiensoy').style.visibility = 'hidden';
    document.getElementById('contacto').style.visibility = 'visible';
    document.getElementById('aficiones').style.visibility = 'hidden';
    imagenesInvisibles()
}
function aficionesEsVisible(){
    document.getElementById('inicio').style.visibility = 'hidden';
    document.getElementById('quiensoy').style.visibility = 'hidden';
    document.getElementById('contacto').style.visibility = 'hidden';
    document.getElementById('aficiones').style.visibility = 'visible';
    imagenesInvisibles()
    document.getElementById('fgs').style.display = 'initial';
}


function streetfighterEsVisible(){
    document.getElementById('streetfighter').style.display = 'initial';
    document.getElementById('dragonball').style.display = 'none';
    document.getElementById('guiltygear').style.display = 'none';
    document.getElementById('meltyblood').style.display = 'none';
    document.getElementById('fgs').style.display = 'none';
}
function dragonballEsVisible(){
    document.getElementById('streetfighter').style.display = 'none';
    document.getElementById('dragonball').style.display = 'initial';
    document.getElementById('guiltygear').style.display = 'none';
    document.getElementById('meltyblood').style.display = 'none';
    document.getElementById('fgs').style.display = 'none';

}
function guiltygearEsVisible(){
    document.getElementById('streetfighter').style.display = 'none';
    document.getElementById('dragonball').style.display = 'none';
    document.getElementById('guiltygear').style.display = 'initial';
    document.getElementById('meltyblood').style.display = 'none';
    document.getElementById('fgs').style.display = 'none';
}
function meltybloodEsVisible(){
    document.getElementById('streetfighter').style.display = 'none';
    document.getElementById('dragonball').style.display = 'none';
    document.getElementById('guiltygear').style.display = 'none';
    document.getElementById('meltyblood').style.display = 'initial';
    document.getElementById('fgs').style.display = 'none';
}


function imagenesInvisibles(){
    document.getElementById('streetfighter').style.display = 'none';
    document.getElementById('dragonball').style.display = 'none';
    document.getElementById('guiltygear').style.display = 'none';
    document.getElementById('meltyblood').style.display = 'none';
    document.getElementById('fgs').style.display = 'none';
}

function cargarPagina(){

    if(location.hash=="#inicio"){
        inicioEsVisible();
    }else if(location.hash=="#quiensoy"){
        quiensoyEsVisible();
    }else if(location.hash=="#contacto"){
        contactoEsVisible();
    }else if(location.hash=="#aficiones"){
        aficionesEsVisible();
    }

    
}

