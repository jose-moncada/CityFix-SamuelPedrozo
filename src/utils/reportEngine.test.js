// src/utils/reportEngine.test.js
const { getReports } = require('./reportEngine');

// Tiempo de espera amplio de 10 segundos configurado estrictamente
jest.setTimeout(10000);

describe('Pruebas E2E - Conexión Live Network con Supabase', () => {
  
  test('Debe certificar la estructura y persistencia de los reportes', async () => {
    const reports = await getReports();

    // 1. Que devuelva un código exitoso y el resultado sea un array auténtico
    expect(Array.isArray(reports)).toBe(true);

    // 2. Que la longitud sea mayor a cero (certificando que lee tus datos inyectados)
    expect(reports.length).toBeGreaterThan(0);

    // 3. Que el primer registro tenga las propiedades requeridas
    const primerReporte = reports[0];
    expect(primerReporte).toHaveProperty('id');
    expect(primerReporte).toHaveProperty('title');
    expect(primerReporte).toHaveProperty('category');
    expect(primerReporte).toHaveProperty('votes');
    
    console.log(`\n🚀 ¡Éxito! Se descargaron ${reports.length} reportes reales desde Supabase.`);
    console.log(reports)
  });
  
});