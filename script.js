
const userYearBirth = prompt('Введіть рік вашого народження:');

if (!userYearBirth) {
  alert('Шкода, що ви не зхотіли ввести свій рік народження');
} else if (userYearBirth && !isNaN(userYearBirth) && userYearBirth.toString().length === 4) {
  const userAge = new Date().getFullYear() - userYearBirth;

  const userCity = prompt('В якому місті ви проживаєте?');
  if (!userCity) {
    alert('Шкода, що ви не зхотіли ввести назву свого міста');
  } else if (userCity !== '') {
    const userSport = prompt('Який ваш улюблений вид спорту?');
    if (!userSport) {
      alert('Шкода, що ви не зхотіли ввести свій улюблений вид спорту');
    } else if (userSport !== '') {
      let message = `Ваш вік: ${userAge} років. `;
      let city;
      switch (userCity.toLowerCase()) {
        case 'київ':
          city = 'Ти живеш у столиці України.';
          break;
        case 'вашингтон':
          city = 'Ти живеш у столиці США.';
          break;
        case 'лондон':
          city = 'Ти живеш у столиці Великобританії.';
          break;
        default:
          city = `Ти живеш у місті ${userCity}.`;
      }
      message += city;
      let sportChampion;
      switch (userSport.toLowerCase()) {
        case 'футбол':
          sportChampion = 'Круто! Хочеш стати Ліонелем Мессі?';
          break;
        case 'біг':
          sportChampion = 'Круто! Хочеш стати Усейном Болтом?';
          break;
        case 'бокс':
          sportChampion = 'Круто! Хочеш стати Олександром Усіком?';
          break;
      }
      if (sportChampion) {
        message += ` ${sportChampion}`;
      }

      alert(message);
    }
  }
} else {
  alert('Введіть коректний рік народження (4 цифри)');
}