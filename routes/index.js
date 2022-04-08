var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// En matemáticas, un número primo es un número natural mayor que 1 
// que tiene únicamente dos divisores positivos distintos: él mismo y el 1.
function esPrimo(numero) {
  if (numero === 2 || numero === 3 ) {
    return true;
  }
  for (let indice = 2; indice < numero; indice++) {
    if (numero % indice === 0) {
      return false;
    }
  }
  return true;
}

router.get('/numeros-primos', function(req, res, next) {
  let numeroMaximo = req.query.maximo;
  if(isNaN(numeroMaximo)){
    res.status(500).json({ error: "El parámetro de entrada no es un número" });
  } else {
    if (numeroMaximo < 2 ) {
      res.status(500).json({ error: "El número de entrada debe ser mayor o igual a 2" });
    }
    let arrayDePrimos = [];
    let indice = 2;
    while (indice <= numeroMaximo ) {
      console.log(esPrimo);
      if (esPrimo(indice)) {
        arrayDePrimos[arrayDePrimos.length] = indice;
      }
      indice++;
    }
    res.json({ "arrayDePrimos": arrayDePrimos.reverse() });
  }
});


module.exports = router;
