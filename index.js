/* შექმენით ფუნქცია სადაც პარამეტრები გვექნება მასივი და სტრინგი.
მასივში უნდა იყოს სტუდენტების სახელები, და სტრინგში მხოლოდ ერთი სტუდენტის. 
ფუნქციამ უნდა შეამოწმოს მასივში არის თუ არა ეს სტუდენტი და დააბრუნოს: სტუდენტი სწავლობს, თუ არ არის უნდა დააბრუნოს ასეთი სტუდენტი ვერ მოიძებნა */

// I ვარიანტი:

/* const arrayOfStudents = ["Lasha", "Bacho", "Tamari", "Mariami", "Tornike"];

function findStudent(arrayOfStudents, string) {
  for (let name of arrayOfStudents) {
    if (name === string) {
      return `${string} სწავლობს!`;
    }
  }
  return "ასეთი სტუდენტი ვერ მოიძებნა!";
}
console.log(findStudent(arrayOfStudents, "Tamari")); */

// II ვარიანტი:

const arrayOfStudents = ["Lasha", "Bacho", "Tamari", "Mariami", "Tornike"];

function findStudent(arrayOfStudents, string) {
  const value = arrayOfStudents.find((name) => name === string);
  if (value) {
    return `${value} სწავლობს!`;
  }
  return "ასეთი სტუდენტი ვერ მოიძებნა!";
}
console.log(findStudent(arrayOfStudents, "Lasha"));
