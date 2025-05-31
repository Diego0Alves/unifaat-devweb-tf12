import { join, parse } from 'path';
import { readdir } from 'fs';
import PessoaModel from '../Models/PessoaModel.js';
import TelefoneModel from '../Models/TelefoneModel.js';
import CONSTANTS from '../../config/constants.js';


export default async (request, response) => {

    const ORDER_CAMPOS = ['id', 'updated', 'created_at'];

    const ORDER_DIRECAO = ['desc', 'asc'];

    const HTTP_STATUS = CONSTANTS.HTTP;

    const limit = parseInt(request.query.limit) || 10;
    const offset = parseInt(request.query.offset) || 0;
    const orderBy = request.query.orderBy || 'id,asc';

    if (limit > CONSTANTS.MAX_GET_LIMIT) {
        return response.status(CONSTANTS.HTTP.BAD_REQUEST).json({ error: `Limite máximo de itens: ${CONSTANTS.MAX_GET_LIMIT} excedido`});
    }

    const orderByArray = orderBy.split(',');

    const orderCampo = orderByArray[0];
    const orderDirecao = orderByArray[1] || 'asc';

    const orderCampoFim = ORDER_CAMPOS.includes(orderCampo) ? orderCampo : 'id';

    const orderDirecaoFim = ORDER_DIRECAO.includes(orderDirecao) ? orderDirecao : 'asc';

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
