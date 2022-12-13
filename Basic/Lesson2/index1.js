// Vowel Consonent using switch

let letter = prompt("Enter any letter : ");

letter = letter.toLowerCase();

switch(letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonent");
}