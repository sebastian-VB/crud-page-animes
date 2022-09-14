
import connection from './database/database.js';
import app from './app.js';

try{
    await connection.authenticate();
    console.log('¡¡Conexion a la BD exitosa!!');

}catch(error){
    console.log(`El error de conexión es: ${error}`);
}

const main = ()=>{
    app.listen(app.get('PORT'));
    console.log(`Servidor inicado en el puerto ${app.get('PORT')}`);
}

main();