# Projetos Computacionais PUC-Campinas | Sorting & Searching Speed

---

> Gabriel Scandiuzzi, Guilherme de Lima, Luis Gustavo Selber, Pedro Carvalho, Vinicius Batista

---

## Pré-requisitos

- Docker instalado na sua máquina

---

## Download do código

1. Clique no botão "**Code**" (presente no canto superior direito do repositório)
2. Após isso, clique no botão "**Download ZIP**"
3. Por fim, extraia o conteúdo compactado no arquivo ZIP

---

## Executando o código

- Crie uma imagem do Docker a partir do arquivo de configuração **Dockerfile**, navegando até o diretório onde o **Dockerfile** está localizado e execute o seguinte comando: `docker build -t searching-and-sorting-app .`
- Isso criará uma imagem do Docker com a tag **searching-and-sorting-app**. Depois que a imagem for criada, execute um contêiner da imagem com o seguinte comando: `docker run -p 3000:3000 searching-and-sorting-app`
- Finalmente um contêiner da imagem **searching-and-sorting-app** será executado e a porta 3000 na máquina host será mapeada para a porta 3000 no contêiner, permitindo que você acesse o aplicativo em http://localhost:3000.

---

## Utilizando o código

- Feito isso, automaticamente os algoritimos de ordenação serão executados e, ao final do processo, os resultados serão exibidos em milissegundos
- Para os algoritmos de busca, insira cinco números entre **20** e **20.000.000** seguindo o formato (**n n n n n**), onde n são os números que você deseja buscar
- Clique nos botões denominados "**Search**" e então o resultado do tempo das buscas serão apresentado

---
