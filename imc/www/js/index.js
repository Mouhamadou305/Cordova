 function calculerImc(){
   let size = Number(taille.value)
   let weight = Number(poids.value)

   let interpretation =  "Vous êtes en état "
   const imc = weight / Math.pow(size, 2)

   if( imc < 16.5 )
     interpretation += "de dénutrition"
   else if( imc >= 16.5 && imc < 18.5)
     interpretation += "de maigreur"
   else if( imc >= 18.5 && imc < 25)
     interpretation += "normal"
   else if( imc >= 25 && imc < 30)
     interpretation += "de surpoids"
   else if( imc >= 30 && imc < 35)
     interpretation += "d'obésité modérée"
   else if( imc >= 35 && imc < 40)
     interpretation += "d'obésité sévère"
   else
     interpretation += "d'obésité morbide"
   
  let messageBox = document.querySelectorAll("fieldset")[1]
  let resultBox = document.querySelectorAll("fieldset span")[0]

  messageBox.hidden = false
  resultBox.innerHTML = "Votre Imc est : "+imc+" "+interpretation
}

