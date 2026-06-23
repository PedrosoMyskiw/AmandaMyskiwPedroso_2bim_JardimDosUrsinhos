const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Conexão com PostgreSQL

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// Middleware

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type'
    );

    next();
});

// =========================
// PRODUTOS
// =========================

app.get('/api/produtos', async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM produto
            ORDER BY id_produto
        `);

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            erro: 'Erro ao buscar produtos'
        });

    }

});

// =========================
// CATEGORIAS
// =========================

app.get('/api/categorias', async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM categoria
            ORDER BY id_categoria
        `);

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            erro: 'Erro ao buscar categorias'
        });

    }

});

// =========================
// PRODUTOS POR CATEGORIA
// =========================

app.get(
    '/api/produtos/categoria/:id',
    async (req, res) => {

        try {

            const idCategoria = req.params.id;

            const result = await pool.query(
                `
                SELECT *
                FROM produto
                WHERE id_categoria = $1
                ORDER BY nome_produto
                `,
                [idCategoria]
            );

            res.json(result.rows);

        } catch (error) {

            console.error(error);

            res.status(500).json({
                erro: 'Erro ao buscar produtos'
            });

        }

    }
);

// =========================
// DESTAQUES
// =========================

app.get('/api/destaques', async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM produto
            LIMIT 3
        `);

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            erro: 'Erro ao buscar destaques'
        });

    }

});

// =========================
// BUSCAR PRODUTO POR NOME
// =========================

app.get('/api/produtos/busca/:nome', async (req, res) => {

    try {

        const nome = req.params.nome;

        const result = await pool.query(
            `
            SELECT *
            FROM produto
            WHERE nome_produto ILIKE $1
            ORDER BY nome_produto
            `,
            [`%${nome}%`]
        );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            erro: 'Erro na pesquisa'
        });

    }

});

// =========================
// FILTRAR POR PREÇO
// =========================

app.get('/api/produtos/preco/:valor', async (req, res) => {

    try {

        const valor = req.params.valor;

        const result = await pool.query(
            `
            SELECT *
            FROM produto
            WHERE preco <= $1
            ORDER BY preco
            `,
            [valor]
        );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            erro: 'Erro ao filtrar por preço'
        });

    }

});

// =========================
// ORDENAR POR MENOR PREÇO
// =========================

app.get('/api/produtos/preco-crescente', async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM produto
            ORDER BY preco ASC
        `);

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            erro: 'Erro na consulta'
        });

    }

});

// =========================
// ORDENAR POR MAIOR PREÇO
// =========================

app.get('/api/produtos/preco-decrescente', async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM produto
            ORDER BY preco DESC
        `);

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            erro: 'Erro na consulta'
        });

    }

});

app.listen(port, '0.0.0.0', () => {

    console.log(
        `Servidor rodando na porta ${port}`
    );

    console.log(
        `GET http://localhost:${port}/api/produtos`
    );

    console.log(
        `GET http://localhost:${port}/api/categorias`
    );

    console.log(
        `GET http://localhost:${port}/api/produtos/categoria/1`
    );

    console.log(
        `GET http://localhost:${port}/api/destaques`
    );

});

