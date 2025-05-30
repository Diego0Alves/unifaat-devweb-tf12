import { join } from 'path';
import { readdir } from 'fs';
import TodoModel from '../Models/TodoModel.js';

export default async (request, response) => {

    const ORDER_CAMPOS = ['id', 'updated', 'created_at'];

    const ORDER_DIRECAO = ['desc', 'asc'];

    const dirPath = join(CONSTANTS.DIR, 'public');

    readdir(dirPath, (err, files) => {
        if (err) {
            return res.status(CONSTANTS.HTTP.SERVER_ERROR).send('Erro ao ler o diretório');
        }

        const fileList = files.map(file => {
            return `<li><a href="/${file}">${file}</a></li>`;
        }).join('');

        return response.send(`
            <html>
                <head><title>Lista de Arquivos</title></head>
                <body>
                    <h2>Lista de Arquivos</h2>
                    <ul>${fileList}</ul>
                </body>
            </html>
        `);
    });

};
