-- Fazer modificações depois

CREATE TABLE categoria (
    id_categoria SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL
);

CREATE TABLE produto (
    id_produto SERIAL PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    preco NUMERIC(10,2) NOT NULL,
    quantidade_produto INT NOT NULL,
    imagem VARCHAR(255),
    id_categoria INT NOT NULL,

    CONSTRAINT fk_categoria
        FOREIGN KEY (id_categoria)
        REFERENCES categoria(id_categoria)
);

INSERT INTO categoria (nome_categoria) VALUES
    ('Ursinhos'),
    ('Coelhinhos'),
    ('Gatinhos'),
    ('Personagens');

INSERT INTO produto (nome_produto, preco, quantidade_produto, imagem, id_categoria) VALUES

    ('Ursinho Caramelo', 79.90, 15, 'urso-caramelo.jpg', 1),
    ('Ursinho Soninho', 89.90, 10, 'urso-soninho.jpg', 1),
    ('Mini Bear', 49.90, 25, 'mini-bear.jpg', 1),

    ('Coelhinho Rosa', 69.90, 12, 'coelho-rosa.jpg', 2),
    ('Coelhinho Azul', 69.90, 9, 'coelho-azul.jpg', 2),
    ('Coelhinho Dorminhoco', 74.90, 7, 'coelho-dorminhoco.jpg', 2),

    ('Gatinho Cinza', 79.90, 11, 'gatinho-cinza.jpg', 3),
    ('Gatinho Listrado', 84.90, 6, 'gatinho-listrado.jpg', 3),

    ('Capivara Fofinha', 94.90, 8, 'capivara.jpg', 4),
    ('Pinguim Amigurumi', 89.90, 5, 'pinguim.jpg', 4);