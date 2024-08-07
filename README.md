
<img width="1614" alt="Captura de pantalla 2024-08-07 a la(s) 03 13 16" src="https://github.com/user-attachments/assets/4078fa51-dd55-47d6-86c7-d2a786c92726">

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

a. GET http://localhost:3000/cafes/

b. DELETE http://localhost:3000/cafes/123456789
        HTTP Headers Authorization token
        
c. POST http://localhost:3000/cafes/1234
        Body / JSON Context 
        { 
            "id": 1234,
            "nombre": "nuevo cafe" 
        }
        
d. PUT http://localhost:3000/cafes/1234
 Body / JSON Context 
        { 
            "id": 1234,
            "nombre": "nuevo cafe actualizado" 
        }


Ejecutar test 

npm test
