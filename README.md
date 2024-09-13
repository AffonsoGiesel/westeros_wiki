Westeros Wiki (Projeto Conheça um País)

Westeros Wiki é uma aplicação web inspirada no continente fictício de Westeros da série Game of Thrones. Ela permite que os usuários explorem reinos, locais e pessoas importantes, utilizando Ruby on Rails para o back-end e React.js no front-end.

Pré-requisitos

    Ruby: 3.2.0
    Rails: 7.0.6
    PostgreSQL: 13.0+
    Node.js: 16.0+ (para o front-end com React.js)
    Yarn: 1.22+
    Bundler: 2.3.0+

Passo a Passo para Configuração

1. Clonando o Repositório

    Primeiro, clone o repositório para sua máquina:

        git clone https://github.com/AffonsoGiesel/westeros-wiki.git
        cd westeros-wiki

2. Instalando Dependências

    Instale as dependências do Ruby e JavaScript:
    
        bundle install
        yarn install

3. Configurando o Banco de Dados

    Certifique-se de ter o PostgreSQL rodando localmente. Você pode iniciar o serviço com:
    
        sudo service postgresql start

    Em seguida, configure as credenciais do PostgreSQL no arquivo .env ou no arquivo de configuração de banco config/database.yml.
    Criar e Migrar o Banco de Dados
    
    Crie o banco de dados e rode as migrações:
    
        rails db:create
        rails db:migrate

4. Configurando o Arquivo .env

    Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
    
        DATABASE_USERNAME=affonso
        DATABASE_PASSWORD=senha
        SECRET_KEY_BASE=chave_secreta

5. Populando o Banco de Dados

    Popule o banco de dados com os dados de seed para preencher os reinos, locais e pessoas:
    
        rails db:seed

6. Executando o Servidor

    Após configurar o banco de dados e popular as tabelas, inicie o servidor Rails:
    
        rails s

    Para iniciar o front-end em React, use:
    
        yarn start 
    Ou então:
        
        npm start

    A aplicação estará disponível em http://localhost:3000.

7. Testes

    Para rodar os testes, utilize:
    
        rspec

Tecnologias Utilizadas

        Ruby on Rails: Framework para o back-end.
        React.js: Framework para o front-end.
        PostgreSQL: Banco de dados relacional.
        Devise: Autenticação de usuários.
        RSpec: Ferramenta de testes para Ruby.
        Axios: Utilizado para comunicação com a API.
