npm por instalar 

1. npm install o npm install --save-dev jest supertest
2. npm install express
3. npm install supertestnpm
4. npm install jest
5. npm test 

Revisar en l package.json  si sale 

"scripts": {
  "test": "jest"
}

Agregar al TC 

GET http://localhost:3000/cafes/

DELETE http://localhost:3000/cafes/123456789
        HTTP Headers Authorization token
POST http://localhost:3000/cafes/1234
        Body / JSON Context 
        { 
            "id": 1234,
            "nombre": "nuevo cafe" 
        }
PUT http://localhost:3000/cafes/1234
 Body / JSON Context 
        { 
            "id": 1234,
            "nombre": "nuevo cafe actualizado" 
        }


Ejecutar test 

npm test