CREATE TABLE pessoas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO pessoas (nome) VALUES
('Ana Oliveira'),
('Bruno Souza'),
('Carlos Lima'),
('Daniela Martins'),
('Eduardo Ribeiro'),
('Fernanda Castro'),
('Gabriel Alves'),
('Helena Dias'),
('Igor Mendes'),
('Juliana Rocha');