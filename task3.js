function runTask3() {
  const age = Number(prompt('Введите ваш возраст:'));
  if (age >= 18) {
    console.log('Совершеннолетний');
  } else {
    console.log('Несовершеннолетний');
  }
}