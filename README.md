# Frontend React TypeScript + Vite - Streaming de Tela

Este é um frontend em React TypeScript com Vite que se conecta ao servidor de streaming de tela por meio de uma conexão WebSocket. Ele permite exibir o streaming de tela em tempo real em um navegador.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- WebSocket

## Funcionalidades

- Conexão com o servidor de streaming de tela por meio de uma conexão WebSocket.
- Exibição em tempo real do streaming de tela recebido do servidor.

## Como usar

1. Certifique-se de que o servidor de streaming de tela esteja em execução. Consulte as instruções do servidor para obter mais detalhes sobre como executá-lo.
2. Clone este repositório: `git clone https://github.com/Higor-Matos/videoplayer.git`
3. Navegue até o diretório do projeto: `cd videoplayer`
4. Instale as dependências: `npm install`
5. Inicie o servidor de desenvolvimento: `npm run dev`
6. Abra o navegador e acesse `http://localhost:5173`.

## Subir a aplicação usando Docker Compose

Se você preferir, também é possível executar a aplicação usando o Docker Compose. Certifique-se de ter o Docker Compose instalado em sua máquina e siga as etapas abaixo:

1. Certifique-se de que o servidor de streaming de tela esteja em execução. Consulte as instruções do servidor para obter mais detalhes sobre como executá-lo.
2. Clone este repositório: `git clone https://github.com/Higor-Matos/videoplayer.git`
3. Navegue até o diretório do projeto: `cd videoplayer`
4. Execute o comando `docker-compose up` para iniciar o contêiner.
5. Abra o navegador e acesse `http://localhost:5173`.

Certifique-se de que a porta `5173` esteja disponível em sua máquina. Caso contrário, você pode alterar a porta mapeada no arquivo `docker-compose.yml` para uma porta disponível.

## Repositório do servidor de streaming de tela

Você tem duas opções para o servidor de streaming de tela:

- Se você quiser usar o servidor de streaming de tela mencionado neste frontend, você pode encontrar o repositório correspondente em [https://github.com/Higor-Matos/ScreenStreamingServer](https://github.com/Higor-Matos/ScreenStreamingServer). Siga as instruções fornecidas no repositório para executar o servidor.

- Se você preferir usar o seu próprio servidor de streaming de tela desenvolvido por você.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um "issue" ou enviar um "pull request" com melhorias, correções de bugs ou novos recursos.
