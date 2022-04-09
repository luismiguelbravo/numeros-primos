# Instrucciones de instalación

Instalar el proyecto
```sh
npm i
```

Iniciar el proyecto
```sh
npm start
```

# Rutas para probar

| url | resultado esperado |
| ------ | ------ |
| http://localhost:3000/numeros-primos?maximo=7 | { numerosPrimos: '7,5,3,2' } |
| http://localhost:3000/numeros-primos?maximo=15 | { numerosPrimos: '13,11,7,5,3,2' } |
| http://localhost:3000/numeros-primos?maximo=asdf | { error: "El parámetro de entrada no es un número" } |
| http://localhost:3000/numeros-primos?maximo=1 | { error: "El parámetro de entrada no es un número" } |
| http://localhost:3000/numeros-primos?maximo=0 | { error: "El parámetro de entrada no es un número" } |
| http://localhost:3000/numeros-primos?maximo=-1 | { error: "El parámetro de entrada no es un número" } |

Ejecutar los test:
```sh
npm run test
```

# Instrucciones de instalación con Docker

Construir imagen docker
docker build -f Dockerfile -t expressapp/node .

ejecutar imagen docker
docker run -d -p 8080:3000 expressapp/node

# Rutas para probar con Docker
| url | resultado esperado |
| ------ | ------ |
| http://localhost:8080/numeros-primos?maximo=7 | { numerosPrimos: '7,5,3,2' } |
| http://localhost:8080/numeros-primos?maximo=15 | { numerosPrimos: '13,11,7,5,3,2' } |
| http://localhost:8080/numeros-primos?maximo=asdf | { error: "El parámetro de entrada no es un número" } |
| http://localhost:8080/numeros-primos?maximo=1 | { error: "El parámetro de entrada no es un número" } |
| http://localhost:8080/numeros-primos?maximo=0 | { error: "El parámetro de entrada no es un número" } |
| http://localhost:8080/numeros-primos?maximo=-1 | { error: "El parámetro de entrada no es un número" } |