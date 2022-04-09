const request = require('supertest')
const app = require('../../app');

describe('test numeros primos', () => {

  test('deberia retornar numeros primos entre 2 y 7', async () => {
    const res = await request(app)
      .get('/numeros-primos?maximo=7');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(
        {
          numerosPrimos: '7,5,3,2'
        });
  });

  test('deberia retornar numeros primos entre 2 y 15', async () => {
    const res = await request(app)
      .get('/numeros-primos?maximo=15');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(
        {
          numerosPrimos: '13,11,7,5,3,2'
        });
  });

  test('deberia retornar El parámetro de entrada no es un número', async () => {
    const res = await request(app)
      .get('/numeros-primos?maximo=asdf');
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({ error: "El parámetro de entrada no es un número" });
  });

  test('deberia retornar El parámetro de entrada no es un número', async () => {
    const res = await request(app)
      .get('/numeros-primos?maximo=1');
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({ error: "El número de entrada debe ser mayor o igual a 2"});
  });
  
  test('deberia retornar El parámetro de entrada no es un número', async () => {
    const res = await request(app)
      .get('/numeros-primos?maximo=0');
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({ error: "El número de entrada debe ser mayor o igual a 2"} );
  });

  test('deberia retornar El parámetro de entrada no es un número', async () => {
    const res = await request(app)
      .get('/numeros-primos?maximo=-1');
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({ error: "El número de entrada debe ser mayor o igual a 2"});
  });


})