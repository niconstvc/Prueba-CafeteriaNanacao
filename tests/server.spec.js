const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

    it("Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto", async () => {
        const response = await request(server).get("/cafes").send();
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThanOrEqual(1);
    });

    it("Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe", async () => {
        const token = "token"; 
        const idTest = 123456789;
        const response = await request(server).delete(`/cafes/${idTest}`).set("Authorization", token).send();
        expect(response.statusCode).toBe(404);
    });

    it("Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201", async () => {
        const nuevoCafe = {
            id: Math.floor(Math.random() * 9999),
            nombre: "nuevo café"
        };
        const response = await request(server).post("/cafes").send(nuevoCafe);
        expect(response.statusCode).toBe(201);
        expect(response.body).toContainEqual(nuevoCafe);
    });

    it("Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload", async () => {
        const id = 1234;
        const cafeActualizado = {
            id: id + 1,  
            nombre: "nuevo café actualizado"
        };
        const response = await request(server).put(`/cafes/${id}`).send(cafeActualizado);
        expect(response.statusCode).toBe(400);
    });
});
