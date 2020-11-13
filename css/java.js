	
function validaRadio(){
	alert("deu certo");
  if (document.form1.cpf[0].checked == false 
    && document.form1.cnpj[0].checked == false) {
    alert('Por favor, selecione uma das opções.');
    return false;
  }
  return true;
}


function verifica() {
	
	if ( document.getElementById("nome").value == "") {
		alert("Por favor, preencha os campos corretamente."); 
		return; 
		} 
}