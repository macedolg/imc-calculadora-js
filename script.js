let $calcular = document.getElementById("calcular");
$calcular.addEventListener("click",imc); 

function imc(){
  let $nome = document.getElementById("nome").value;
  let $altura = document.getElementById("altura").value;
  let $peso = document.getElementById("peso").value;
  let $resultado = document.getElementById("valor");
  
    if($nome == '' || $altura == '' || $peso == ''){
      $resultado.textContent = "OBRIGATÓRIO O PREENCHIMENTO DE TODOS OS CAMPOS!!"
    }
    else{
      $altura = parseFloat($altura);
      $peso = parseFloat($peso);

      let calcIMC = $peso / (Math.pow($altura, 2));
      calcIMC = calcIMC.toFixed(1)
      $resultado.textContent = `Seu IMC é ${calcIMC}`; 
      let $classificar = "";
      
      if (calcIMC < 17){
        $classificar = "DESNUTRIDO!!!"; 
      }
      else if (calcIMC < 18.5){
        $classificar =  "NO PESO IDEAL!!";
      }
      else if (calcIMC < 25){
        $classificar =  "NO PESO IDEAL!!";
      }
      else if (calcIMC < 30){
        $classificar =  "ACIMA DO PESO!!";
      }
      else if (calcIMC < 35){
        $classificar =  "NO GRAU DE OBESIDADE 1!!";
      }
      else if (calcIMC < 40){
        $classificar =  "NO GRAU DE OBESIDADE 2!!";
      }
      else {
        $classificar = "NO GRAU DE OBESIDADE 3!!";
      }
      $resultado.textContent = `${$nome}, O SEU IMC É ${calcIMC}, VOCÉ ESTÁ ${$classificar}`;
        
    }
  }

