const pool = require('./db');

// importo el pool de conexión para poder comunicarme con la base de datos
async function obtenerUsuarios() {
  try {
    // consulta sql para obtener todos los registros de tabla usuarios
    const resultado = await pool.query('SELECT * FROM usuarios');

    // título en consola para identificar salida
    console.log('Todos los usuarios:');

    // imprimo las filas obtenidas en formato de tabla para que se vean ordenadas
    console.table(resultado.rows);
  } catch (error) {
    // aquí capturo cualquier error que ocurra al consultar los usuarios
    console.error('Error al obtener usuarios:', error.message);
  }
}

//  función que recibe un email para buscar un usuario especcifico
async function obtenerUsuarioPorEmail(email) {
  try {
    // consulta parametrizada para evitar inyección sql
    const consulta = 'SELECT * FROM usuarios WHERE email = $1';

    // guardo el email 
    const valores = [email];

    // aquí ejecuto la consulta usando el texto sql y los valores por separado
    const resultado = await pool.query(consulta, valores);

    // muestro en consola queemail estoy buscando
    console.log(`Resultado de búsqueda para: ${email}`);

    // resultado de la búsqueda en formato tabla
    console.table(resultado.rows);

    
    if (resultado.rows.length === 0) {
      console.log('No se encontró ningún usuario con ese email.');
    }
  } catch (error) {
    
    console.error('Error al buscar usuario por email:', error.message);
  }
}

//  función principal para ejecutar todo en orden
async function main() {
 
  await obtenerUsuarios();

  
  console.log('\n--- Búsqueda de usuario existente ---');

  // busco un usuario que sí existe en la base de datos
  await obtenerUsuarioPorEmail('ana.garcia@example.com');

  // mensaje para indicar que probaré una búsqueda inexistente
  console.log('\n--- Búsqueda de usuario inexistente ---');

  //busca usuario que no ecxiste
  await obtenerUsuarioPorEmail('noexiste@example.com');
}


main()
 
  .then(() => pool.end())
  .catch((error) => {
 
    console.error('Error en la ejecución principal:', error.message);

    pool.end();
  });