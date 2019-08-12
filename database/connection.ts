import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    host: '127.0.0.1',
    database: 'yang',
    dialect: 'mysql',
    port: 3306,
    username: 'root',
    password: 'root',
    define: {
        charset: 'utf8'
    }
});
console.log(__dirname + '/models/*.model.ts');

sequelize.addModels([__dirname + '/models/*.model.ts']);
sequelize.sync({force: false}).then(() => {
    console.log("DB 연결 설공")
}).catch((err) => {
    if(err) console.error(err)
})

export default sequelize;
