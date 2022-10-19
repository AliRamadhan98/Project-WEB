# Project-WEB

step for BE:
    1.npm i sequelize express jsonwebtoken dotenv pg
    2.npm i -D sequelize-cli
    3.npx sequelize-cli init
    4.npx sequelize-cli model:generate --name {table_name} --attributes {key_table:type}

step for deploy:
    1.npm i -g heroku
    2.heroku login 
    3.heroku apps:create {"Nama Web"}
    4.heroku addons:create heroku-postgresql:hobby-dev -a {"Nama web"}
    5.heroku config:set {key}