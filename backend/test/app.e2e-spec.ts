import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/core/modules/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;
    const timeout = 12_000;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    }, timeout);

    it(
        '/ (GET)',
        () => {
            return request(app.getHttpServer()).get('/').expect(200).expect('Hello World!');
        },
        timeout,
    );
});
