instalar el proyecto

$ npm i

iniciar el proyecto
$ npm start


Rutas para probar


http://localhost:3000/numeros-primos?maximo=7
response : { numerosPrimos: '7,5,3,2' }

http://localhost:3000/numeros-primos?maximo=15
response : { numerosPrimos: '13,11,7,5,3,2' }

http://localhost:3000/numeros-primos?maximo=asdf
response : { error: "El parámetro de entrada no es un número" }

http://localhost:3000/numeros-primos?maximo=1
response: { error: "El número de entrada debe ser mayor o igual a 2"}

http://localhost:3000/numeros-primos?maximo=0
response: { error: "El número de entrada debe ser mayor o igual a 2"}

http://localhost:3000/numeros-primos?maximo=-1
response: { error: "El número de entrada debe ser mayor o igual a 2"}


ejecutar los test:
$ npm run test