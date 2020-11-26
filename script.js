var txt = document.getElementById('bckg');
var dn = false;

function chcolor(){
	if(dn==false){
		txt.style.backgroundImage="url('noc.jpg')"
		dn=true;
	}
	else{
		txt.style.backgroundImage="url('hawaje.jpg')"
		dn=false;
	}
};
	