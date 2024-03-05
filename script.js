const programmingLanguages = ["python", "javascript", "java", "c++", "php"];

console.log(programmingLanguages);

const randomIndex = Math.floor(Math.random() * programmingLanguages.length); // ცვლადი რომელიც რენდომულად ირჩევს ინდექს პროგრამირების ენებიდან.
const randomLanguage = programmingLanguages[randomIndex]; // რენდომ ინდექსის მეშვებოით ამოიღებს რენდომულად პროგრამირების ენებიდან ერთ-ერთს.

let underscoredLanguage = randomLanguage.replace(/./g, "_ "); // სიტყვის თითოეულ ასოს გარდაქმნის "_ " სიმბოლოდ

let attempts = 0;
const maxAttempts = 5;
console.log(randomLanguage);

// ლუპი , რომელიც ატრიალებს ციკლს მანამ , სანამ სიტყვაში არის "_ " და მცდელობების რაოდენობა ნაკლებია მაქს.მცდელობების რაოდენობაზე

while (underscoredLanguage.includes("_") && attempts < maxAttempts) {
  let guessLanguage = prompt(
    `თამაში Hangman! - გამოიცანი პროგრამირების ენა . შეიყვანე ასო, რომელსაც ფიქრობ, რომ მოიცავს სიტყვა: "${underscoredLanguage}"`
  );

  let guessedCorrectly = false;

  for (let i = 0; i < randomLanguage.length; i++) {
    if (randomLanguage[i] === guessLanguage) {
      // "_ " იცვლება მომხმარებლის მიერ გამოცნობილი ასოთი
      underscoredLanguage =
        underscoredLanguage.substring(0, i * 2) +
        randomLanguage[i] +
        underscoredLanguage.substring(i * 2 + 1);
      guessedCorrectly = true;
    }
  }
  if (!guessedCorrectly && attempts < 4) {
    // თუ მომხმარებელმა ვერ გამოიცნო ასო და ჰქონდა 4ზე ნაკლები მცდელობა ...
    attempts++;
    alert(
      `არასწორია! სცადე თავიდან. მცდელობების რაოდენობა ${attempts} / ${maxAttempts}`
    );
  } else if (!guessedCorrectly && attempts === 4) {
    // თუ მომხმარებელს ქონდა 4ზე მეტი მცდელობა
    attempts++;
  }
}
if (attempts === maxAttempts) {
  // თუ მომხმარებლის მცდელობა უდრის 5-ს , ანუ maxAttempts..
  alert(
    `სამწუხაროდ შენ დამარცხდი, რადგან ამოწურე მცდელობების რაოდენობა: ${attempts} / ${maxAttempts}`
  );
} else {
  // თუ მომხმარებლის მცდელობა არ უდრის 5-ს ანუ < maxAttempts-ზე
  alert(
    `გილოცავ! შენ გამოიცანი სიტყვა: ${randomLanguage} ! დაგჭირდა ${attempts} / ${maxAttempts} მცდელობა`
  );
}
