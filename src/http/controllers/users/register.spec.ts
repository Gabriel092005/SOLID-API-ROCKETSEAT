import { app } from "@/app";  // Certifique-se de que o caminho está correto
import request from "supertest";
import { beforeAll, afterAll, describe, expect, it } from "vitest";

describe('Register(e2e)', () => {
    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });

    it('should be able to register', async () => {
        const response = await request(app.server).post('/users').send({
            name: 'Jonh Doe',  // Verifique se o nome atende a qualquer requisito
            email: 'johndoe@example.com',  // Corrija o domínio de exemplo
            password: '123456'  // Certifique-se de que a senha atende aos requisitos
        });


        expect(response.statusCode).toEqual(201);


    });
});
