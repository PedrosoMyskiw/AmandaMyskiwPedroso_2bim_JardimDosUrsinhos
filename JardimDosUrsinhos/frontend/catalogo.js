const enderecoServidor = 'localhost';
const porta = '3001';

async function carregarProdutos(url = null) {

    try {

        if (!url) {

            url =
            `http://${enderecoServidor}:${porta}/api/produtos`;

        }

        const response = await fetch(url);

        const produtos = await response.json();

        const listaProdutos =
            document.getElementById('lista-produtos');

        listaProdutos.innerHTML = '';

        produtos.forEach(produto => {

            listaProdutos.innerHTML += `
                <div class="produto">

                    <img
                        src="imagens/${produto.imagem}"
                        alt="${produto.nome_produto}"
                    >

                    <h3>${produto.nome_produto}</h3>

                    <p>
                        R$ ${Number(produto.preco)
                            .toFixed(2)}
                    </p>

                </div>
            `;

        });

    }

    catch(error){

        console.error(error);

    }

}

window.onload = () => {

    carregarProdutos();

    const botoes =
        document.querySelectorAll(
            '.botoes-categoria button'
        );

    botoes.forEach(botao => {

        botao.addEventListener('click', () => {

            botoes.forEach(btn =>
                btn.classList.remove('ativo')
            );

            botao.classList.add('ativo');

            const categoria =
                botao.dataset.categoria;

            if (categoria == 0) {

                carregarProdutos();

            } else {

                carregarProdutos(
                    `http://${enderecoServidor}:${porta}/api/produtos/categoria/${categoria}`
                );

            }

        });

    });

    document
        .getElementById('btn-pesquisar')
        .addEventListener('click', () => {

            const texto =
                document
                .getElementById('pesquisa')
                .value
                .trim();

            const preco =
                document
                .getElementById('faixa-preco')
                .value;

            const ordenacao =
                document
                .getElementById('ordenacao')
                .value;

            if (texto !== '') {

                carregarProdutos(
                    `http://${enderecoServidor}:${porta}/api/produtos/busca/${texto}`
                );

                return;
            }

            if (preco !== 'todos') {

                carregarProdutos(
                    `http://${enderecoServidor}:${porta}/api/produtos/preco/${preco}`
                );

                return;
            }

            if (ordenacao === 'crescente') {

                carregarProdutos(
                    `http://${enderecoServidor}:${porta}/api/produtos/preco-crescente`
                );

                return;
            }

            if (ordenacao === 'decrescente') {

                carregarProdutos(
                    `http://${enderecoServidor}:${porta}/api/produtos/preco-decrescente`
                );

                return;
            }

            carregarProdutos();

        });

};