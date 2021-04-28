# Application YouTube for SmartTv

A aplicação utiliza a API do YouTube para exibir alguns trilhos na Home como: Música, Notícia e Esportes. Para fazer pesquisas de um vídeo específico. Também é possível salvar os videos, acessar a lista de salvos e remover. Para isso deve-se realizar o login na aplicação.
Para navegar na aplicação basta utilizar as setas do teclado: "<- ->".

Aplicação desenvolvida com React e layout utilizando AntDesign.

## Scripts disponíveis

Para rodar a aplicação, basta baixar as dependências do projeto executando:

### `npm install`

Após baixar as dependências é necessário criar um arquivo .env.local com a key (credencial do YouTube): \
REACT_APP_YOUTUBE_API_KEY="YOUR_KEY"

### `npm start`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.\

A página será carregada automáticamente caso seja realizada alguma alteração.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.
