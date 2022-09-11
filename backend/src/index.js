
import app from './app.js';

const main = ()=>{
    app.listen(app.get('PORT'));
    console.log(`Servidor inicado en el puerto ${app.get('PORT')}`);
}

main();