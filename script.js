 // // First part
// let Athams_weight = 78;
// let Athams_height=1.69;
// let Sardors_weight=92;
// let Sardors_height=1.95;
// let BMI_A= Athams_weight / Athams_height**2;
// let BMI_S= Sardors_weight / Sardors_height**2;
// let BMI= BMI_A > BMI_S;
// console.log(BMI);

 // // Secont part

// let Athams_weight2 = 85;
// let Athams_height2=1.76;
// let Sardors_weight2=95;
// let Sardors_height2=1.88;
// let BMI_A2= Athams_weight2 / Athams_height2**2;
// let BMI_S2= Sardors_weight2 / Sardors_height2**2;
// let BMI2 = BMI_A > BMI_S;
// console.log(BMI2);


//5 Darsni uyga vazifasi

// //INFO ABOUT USER 1
// var piople_name = "Bekzod"
// var piople_family_name = "Turaev"
// console.log(`Hello ${piople_name} ${piople_family_name} !. Welcome to our site --__--`);


// //Ages 2
// let user_name = "Bekzod";
// let age = 17;
// console.log(`Sizning ismingiz ${user_name} va yoshingiz ${age}da. Bir yildan o'tib ${age + 1} yosh bo'lasiz `);

// // GMAIL 3  (Ohshamadi biroz)
// var piople_name2 = "Ardashir"
// var piople_family_name2 = "Nefeltroviy"
// console.log(`${piople_name2}${piople_family_name2}@gmail.com`);

// //Tolov habari
// let something = `Huroz Go'shti`;
// let hov_match = 5;
// let cost = 80000; 
// console.log(`Siz ${hov_match} kilo ${something} sotib o'ldingiz. Jami to'lov: ${cost * hov_match} som boladi`);

// //Musbat yoki manfi aniqlash 
// var son = -31;
// if(son > 0){
//     console.log(`Bu musbat son`);
 
// }else{
//     console.log(`Bu musbat son emas`);
// }

// //Filmlar tavsiasi
// var age = 6;
// if(age<13) console.log(`Bo'lalar uchun filmlar tavsia qilaman`);
// else if(age>12, 18 >= age) console.log(`Ommobo uchun filmlar tavsia qilaman`);
// else if(age>100) console.log(`Hali qanday film koraman diysiz? Bunaqa yo'shda ):`)
// else if(age<=7) console.log(`Telefondi o'ta o'nanga qaytar. Film lar sanga hali mumkin emas`)
// else console.log(`Hohlagan filmingizni ko'ruviring`);

// //Paro'lni tekshirish
// let login = `Bekzod200913`
// let password1 = `10zklass22`
// if(login===`Bekzod200913` && password1===`10zklass22`) console.log(`Welkome to your account`);
// else console.log(`Login or password are incorrect. Please try again`);

// //Sonlarning kattaligi va kichigligi (QILA O'LMADIM)
// let num1 = 100;
// let num2 = 60;
// let num3 = 90;

// if (num1>num2, num2>num3) console.log(` ${num1} eng katta, ${num2}or'tach, ${num3}eng kichkina sonlar`);
// else if (num2>num3, num3>num1) console.log(`${num2} eng katta, ${num3}or'rtach, ${num1}eng kichkina sonlar`);
// else if (num3>num1, num1>num2) console.log(`${num3} eng katta, ${num1}or'tach, ${num2}eng kichkina sonlar`);
// else if (num1=num2=num3)console.log(`Hammasi bir`);
// else console.log(`Iltimos son kiriting uchalasiga ham, va ular birhil bo'lmasin`);
    
//Skidka
// var tovar_cost = 20;
// if (tovar_cost >=100) console.log("Chegirma miz bor. 10% ga sizning tolovingizni kamaytiramiz. Hozir:"+ (tovar_cost*0.9)+ "berishingiz kerak" );
// else console.log(`Siz uchun hech qanaqa chegirma yo'q, uzur`);

// 5 ga bolinishini  tekshirish
// let writen_num = 35;
// if(writen_num % 5===0 ) console.log(`Son 5 ga bolinadi`);
// else console.log(`XXX Son 5 ga bolinmaydi`);

//Ish vaqtini tekshirish 
// var work_time= 50;
// var maosh = 3000
// if(work_time>=40) console.log('Sizning ish haqqinngiz ko`paytirildi 1.5 barobar.Hozir u: ' + maosh*1.5 + ` mtashkil qiladi` );
// else console.log(`Maoshingiz oshmaydi, chunki 40 soatdan kam ishladingis `);

//9ni uzingiz ko'rsatudingiz

//Parolni kuchini aniqlash
// var password = "12345670";
// if(password.length>=10){
//     console.log('Welcome, master Shifu');
// }else console.log('Your password must contain more than 9 simbals.');



//5 Lesson
//Balls
// let ball = 10;

// if (ball >100) console.log(`Please do not write numbers greater than 100`);
// else if (ball >= 90 && ball <= 100) {
//     console.log(`Your mark is "A"`);
// } else if (ball >= 80 && ball <=89) {
//     console.log(`Your mark is "B"`);
// } else if (ball >= 70  && ball <=79) {
//     console.log(`Your mark is "C"`);
// } else if (ball >= 60 && ball <=69) {
//     console.log(`Your mark is "D"`);
// } else if (ball >= 0 && ball <=59) {
//     console.log(`Your mark is "F"`);
// }else {
//     console.log(`Please write number from 0 to 100`);
// }

//Traffic light
// let colour=`blue`;

// if (colour===`green`){
//     console.log(`You can start`);
// }else if (colour===`yellow`){
//     console.log(`Be rady`);
// }else if (colour===`red`) console.log(`Stop.You cannot start.`);
// else console.log(`This is wrong colour or this is spallin error in the colour name. Cack agan.`);


//Order distance  9

// let order_cost= -499;
// let distance = 3;
// if (order_cost>=500) console.log(`Free shipping`);
// else console.log(`The shipping coast is ${distance + 5}$`);




//Lesson №9
//Asking age 1ex
// let age=+prompt(`Yoshingizni kiriting: `)

// switch(age>18) {
//     case 1: console.log(`Voyaga eytgansan`);
//     break;
//     default:console.log(`Voyaga etmagansan`);
// }


// //Checking login 2ex
// let gmail=prompt(`Write login:`)
// let password = +prompt(`Writr password:`)

// switch (true) {
//     case (gmail === "admin@gmail.com" && password === 1234):
//         console.log("Welcome, Mr Smit");
//         break;
//     default:  console.log("Parol yoki password noto'g'ri");
// }


//Musbatlikga tekshirish ex4
// let num1 = +prompt(`Write number: `);
// let num2 = +prompt(`Write number agan: `);
//  switch(true){
//     case(num1 % 2 == 0 && num2 % 2 == 0 ): console.log(`Ikkalasi ham musbar son`);
//     break;
//     case(num1 % 2 ==0 && num2 % 2 == 1): console.log("Birinchi son musbat. Ikkinchi son manfiy" );
//     break;
//     case(num1 % 2 ==1 && num2 % 2 == 0): console.log("Birinchisi son manfiy. Ikkinchi son musbat" );
//     break;
//     case(num1 % 2 ==1 && num2 % 2 == 1): console.log(`Ikkalasi ham manfiy son`);
//     break;
//     default: console.log(`Son kiriting. Tekst emas.`);
    
//  }

//Magazin chegirmalari ex 1  (ISHLAMADI SWICHDA)
// let products= prompt(`Nima tanlaysiz:`)
// let money= +prompt(`Qancha pulga sotib oldingiz`)

// switch(money > 100){
//     case (products === `gosht`): console.log(`Sizga skidka 15% boldi. Hozir bizarga: ${ money * 0.85}`);
//     break;
//     case (products === `meva`): console.log(`Sizga skidka 10% boldi. Hozir bizarga: ${ money * 0.9}`);
//     break;
//     case (products === `sut mahsuloti`): console.log(`Sizga skidka 5% boldi. Hozir bizarga: ${ money * 0.95}`);
//     break;
//     // case (money < 100): console.log(`Sizga chegirma yo'q`);
    
// }


//Tizimga krish ex2
// let human = prompt(`Kim siz? Yozing:`)

// switch(true){
//     case(human===`admin`): console.log(`Admin paneliga o'tkazildingiz`);
//     break;
//     case(human===`user`): console.log(`Shaxsiy paneliga o'tkazildingiz`);
//     break;
//     case(human===`guest`): console.log(`Mexmon sahifasiga o'tkazildingiz`);
//     break;
//     default: console.log(`Kirish rad etildi`);   
// }


//Hafta kunini chiqarish ex3 -2
// let a_week_day = +prompt(`Raqam yozing (1-7):`)

// switch(true){
//     case (a_week_day== 1): console.log(`Today is Mondey.`);
//     break;
//     case (a_week_day== 2): console.log(`Today is Tuesday.`);
//     break;
//     case (a_week_day== 3): console.log(`Today is Wednesday.`);
//     break;
//     case (a_week_day== 4): console.log(`Today is Thursday.`);
//     break;
//     case (a_week_day== 5): console.log(`Today is Friday.`);
//     break;
//     case (a_week_day== 6): console.log(`Today is Saturday.`);
//     break;
//     case (a_week_day== 7): console.log(`Today is Sundey.`);
//     break;
//     default: console.log(`Bunaqa hafta kuni yo'q`);
// }


//ex 4-3 Вelivery
// let money= +prompt(`Haridni narhini yozing: `)

// switch(true){
//     case (money < 51): console.log(`Delivery cost: 10$`);
//     break;
//     case (money > 50 && money < 101): console.log(`Delivery cost: 5$`);
//     break;
//     case (money>=100): console.log(`Free delivery`);
//     break;
//     default: console.log(`Please write down the cost of your items.`);
// }

// ex 5-4 Time-Hellou
// let time = +prompt(`Write time (0-23:59):`)

// switch(true){
//     case(time >= 22 || time < 6): console.log(`Xairli tun`);
//     break;
//     case(time >=22 && time > 18): console.log(`Xairli kech`);
//     break;
//     case(time >= 18 && time >12): console.log(`Xairli kun`);
//     break;
//     case(time >=12 && time > 6): console.log(`Xairli tong`);
//     break;
//     default: console.log(`Bunaqa sog'at yo'q`);
// }

// ex 6-5 Valuta

// let valuta= prompt(`Valuta yozing: `)

// switch(true){
//     case( valuta === `$`): console.log(`AQSh dollari`);
//     break;
//     case( valuta === `EUR`): console.log(`Yevro`);
//     break;
//     case( valuta === `UZS`): console.log(`Ozbekiston somi`);
//     break;
//     default: console.log(`Bunaga valuta bizarni baza dannimizda yo'q`);
// }

// 13th lesson

// 1
// const user_name=`CUCUMBER`;

// const myFunction = user_name => console.log(confirm(`Good morning ${ user_name} `));


// myFunction(user_name)

// 2
// const number= +prompt( `Write number and I find its square: `);

// const myFunc = num => console.log(`Your number's squre is ${num * num}` );

// myFunc(number)

// 3
// const year_of_birth = +prompt( `Write year ehen you was born: `); 

// const myFunc = year => console.log(`You are ${2026 - year} years old`);

// myFunc(year_of_birth)

// 4
// var num = prompt(`Write number and I find your number is even or odd number: `)

// if (num %2 == 0) console.log(`Your number: ${num} is even number`);
// else if (num %2 == 1) console.log(`Your number: ${num} is odd number`);
// else console.log(`Plese write number. No text.`);

//5
// var a = +prompt(`Write number A: `);
// var b = +prompt(`Write number B: `);

// function getMax(a, b) {
//     if (a > b) {
//         return console.log(`${a} > ${b} A is bigger than the B`);
//     } else if (a < b) {
//         return console.log(`${b} > ${a} B is bigger than the A`);
//     } else if (a = b){
//         return console.log(`${b} = ${a} A and B is same`);
//     }else{
//         console.log(`Write number everywhere`);
        
//     }
// }
// getMax(a,b)

//6
// var a = +prompt(`Write width A: `);
// var b = +prompt(`Write height B: `);

// const getRectangleArea = (a,b) => console.log(` Your rectangle's S = ${a * b}`);

// getRectangleArea (a,b);

//7 
// var celsius = +prompt(`Write down the temperature in (C*) and I will change it to Fahrenheit values:`)

// const toFar = c => console.log(`C Tenprerature in Far= ${c *1.8+32}`);

// toFar(celsius)

//8
// const chackGrade = (grade) => {
// if (grade>100) console.log(`Plese write number until 100`);
// else if (grade<0) console.log(`Plese write number more than -1`);
// else if(grade > 50 && grade < 101) console.log(`You are pass the exzam`);
// else if (grade<51 && grade>-1)console.log(`You failed the exzam`);
// else console.log(`Write only numbers`);
// }

// chackGrade(-30)

//9
// const checkingSign = num =>{
//     if(num >0) console.log(`Musbat`);
//     else if(num < 0) console.log(`Manfiy`);
//     else if(num === 0 && num=== +0 && num === -0) console.log(`Thero`);
//     else console.log(`Write number`);
// }

// checkingSign(-0)

// ..10
// const hours_to_seconds = hour => console.log(hour * 3600);
// hours_to_seconds(5)

//11
// var a = +prompt(`Write width A: `);
// var b = +prompt(`Write width B: `);
// var c = +prompt(`Write width C: `);

// const getAverege = (num1, num2, num3) =>{
//     console.log((num1 + num2 + num3)/ 3 );
// }


// getAverege(a, b, c)

// getAverege(12, 9, 9)

//12
// const multiplyByTen = num => console.log( num*10);

// multiplyByTen(12)

// //13
// var a = +prompt(`Write things prise: `);
// var b = +prompt(`Write things discount: `);
// const applyDis = () => console.log(`${a - (a * b / 100)} $ you must pay`);

// applyDis()

//14 (GPT was halped)
// const getStringLength = (text) => text.length;
// console.log(getStringLength("You are faking niger"));

//15
// var day = +prompt(`Write week day: `);
// const get_dayName= () =>{
//     if(day==1)console.log(`Today is Mondey`);
//     else if(day==2)console.log(`Today is Tuesday`);
//     else if(day==3)console.log(`Today is Wednasday`);
//     else if(day==4)console.log(`Today is Thirsday`);
//     else if(day==5)console.log(`Today is Friday`);
//     else if(day==6)console.log(`Today is Saturday`);
//     else if(day==7)console.log(`Today is Sunday`);
//     else console.log(`Write week day`);
    
// }
// get_dayName()

// Challenge 3




























