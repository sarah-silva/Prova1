
$(document).ready(function() {
	
	$("#cpf").mask("000.000.000-00", { placeholder: "___.___.___-__" });
	$("#cnpj").mask("00.000.000/0000-00", { placeholder: "__.___.___/____-__" });
	$("#cep").mask("00000-000", { placeholder: "_____-___" });	
	
});




function verifica() {
	
	if ( document.getElementById("nome").value == "" || document.getElementById("cpf").value == "" || document.getElementById("cep").value == "")
	{
		alert("Por favor, preencha os campos corretamente."); 
		return; 
	} 
}

function mostrarRegistro(){
	
	if((document.getElementById("pessoafisica").checked))
	{
		document.getElementById("mostraDivCpf").style ="";
		document.getElementById("mostraDivCnpj").style = "display:none;";
		
	}else if ((document.getElementById("pessoajuridica").checked))
	{
		document.getElementById("mostraDivCnpj").style ="";
		document.getElementById("mostraDivCpf").style = "display:none;";
		
	}
}
