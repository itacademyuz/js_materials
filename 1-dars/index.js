/*
Tasavvur qiling siz dastur tuzmoqdasiz va dasturingizda ro'yxatdan o'tishga layoqatli bo'lishi uchun foydalanuvchilar 18 yoshdan katta bo'lishi kerak 

Dasturingizda foydalanuvchilardan quyidagi ma'lummotlarni olishingiz kerak.

1) Ismi sharifi,
2) Tug'ilgan yili
3) Oilaviy xolati: oilalimi yoki yo'q?
Ushbu ma'lumotlar foydalanuvchilardan olinadi hamda o'zgaruvchilarga saqlanadi.
Ma'lumot turlari haqida o'ylang.
Undan tashqari yana qo'shimcha ikkita o'zgaruvchi yarating ular quyidagicha bo'lsin:
1) hozirgi yoshi. Hozirgi yildan foydalanuvchidan olingan tug'ilgan yili qiymatini ayirmasini xisoblang va uni `yosh` degan o'zgaruvchiga saqlang.
2) Foydalanuvchi dasturingizda ro'yxatdan o'tishga yoshi to'g'ri keladimi yo'qmi? Buni `layoqatlimi` degan o'zgaruvchiga saqlang. 
Layoqatli yoki layoqatli emasini kompyuter o'zi aniqlab qaror qabul qilsin.
*/
let ism_sharif = "Polvonmurod Botirov";
let t_yili = 2010;
let oilaviy_holati = true;
let yosh = 2022 - t_yili;
let layoqatlimi = (yosh>18);

console.log("Foydalanuvchi yoshi: " + yosh);
console.log("Ro'yxatdan o'tishga layoqatlimi: " + layoqatlimi);
