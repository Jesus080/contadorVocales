/*function contarVocales() {
    // Obtener la frase ingresada por el usuario
    var frase = document.getElementById('fraseInput').value.toLowerCase();

    // Inicializar el contador de vocales
    var contadorVocales = 0;

    // Obtener las vocales y contarlas
    for (var i = 0; i < frase.length; i++) {
      var letra = frase.charAt(i);
      if ('aeiou'.includes(letra)) {
        contadorVocales++;
      }
    }

    // Mostrar las vocales y la cantidad en el resultado
    var resultado = 'Vocales: ' + 'aeiou'.split('').filter(v => frase.includes(v)).join(', ') +
                    '<br>Cantidad de Vocales: ' + contadorVocales;

    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado').innerHTML = resultado;
  }*/


  /*function contarVocales() {
    // Obtener la frase ingresada por el usuario
    var frase = document.getElementById('fraseInput').value.toLowerCase();

    // Inicializar el objeto para almacenar el conteo de cada vocal
    var conteoVocales = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };

    // Contar las ocurrencias de cada vocal
    for (var i = 0; i < frase.length; i++) {
      var letra = frase.charAt(i);
      if ('aeiou'.includes(letra)) {
        conteoVocales[letra]++;
      }
    }

    // Construir la cadena de resultado
    var resultado = 'A: ' + conteoVocales['a'] +
                    '<br>E: ' + conteoVocales['e'] +
                    '<br>I: ' + conteoVocales['i'] +
                    '<br>O: ' + conteoVocales['o'] +
                    '<br>U: ' + conteoVocales['u']
                    

    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('fraseMostrada').innerHTML = 'Frase ingresada: ' + frase;
  }*/
  


  
    // Función de flecha para contar vocales
    const contarVocales = () => {
      // Obtener la frase ingresada por el usuario
      const frase = document.getElementById('fraseInput').value.toLowerCase();

      // Inicializar el objeto para almacenar el conteo de cada vocal
      const conteoVocales = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };

      // Contar las ocurrencias de cada vocal
      for (let i = 0; i < frase.length; i++) {
        const letra = frase.charAt(i);
        if ('aeiou'.includes(letra)) {
          conteoVocales[letra]++;
        }
      }

      // Construir la cadena de resultado
      const resultado = `A: ${conteoVocales['a']}<br>E: ${conteoVocales['e']}<br>I: ${conteoVocales['i']}<br>O: ${conteoVocales['o']}<br>U: ${conteoVocales['u']}`;

      // Mostrar el resultado en el elemento con id 'resultado'
      document.getElementById('resultado').innerHTML = resultado;

      // Mostrar la frase ingresada
      document.getElementById('fraseMostrada').innerHTML = `Frase ingresada: ${frase}`;
    };

    // Controlador del botón
    document.querySelector('button').addEventListener('click', contarVocales);
 
