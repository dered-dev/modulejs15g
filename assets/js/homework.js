/**
 *
 * Pedir al usuario el dia de la semana
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

const dayWeek = prompt("¿Qué día de la semana es hoy?").toLowerCase();
switch (dayWeek) {
  case "lunes":
    console.log(`${day} es el dia 1`);
    break;
  case "martes":
    console.log(`${day} es el dia 2`);
    break;
  case "miercoles":
  case "miércoles":
    console.log(`${day} es el dia 3`);
    break;
  case "jueves":
    console.log(`${day} es el dia 4`);
    break;
  case "viernes":
    console.log(`${day} es el dia 5`);
    break;
  case "sabado":
  case "sábado":
    console.log(`${day} es el dia 6`);
    break;
  case "domingo":
    console.log(`${day} es el dia 7`);
    break;
  default:
    console.error(`Es un día invalido`);
    break;
}
