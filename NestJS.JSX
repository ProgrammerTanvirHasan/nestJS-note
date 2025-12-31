// NODEJS  hocce javascript runtime emvironment manea javascript ke run korar jayga..r ei node js er ekta special framework hocce NESTJS.NODEJS er r ek framwork hocce express but sheita UNOPINIONTED mane kuno strick structure follow korena but NESTJS moduler pattern architecture follow kore.eta fixed..moduler pattern follow kortei hobe.

// package.json file a application er shob dependency gula thake .applcationer main introduction ta thake  but package-log.json file a shei dependecy gular bistarito thake.

//NestJS a  decorator file hocce ekta special function ja class gula ke metadata provide kore.jar symbol @.ei symbol jukto kuno function thakle tarmane eita decorators function er majhe extra kicu feature add ace.

//   patchItem(id:number,data:Partial<{name:string,age:number}>){
//     const fixedItem=this.getUserById(id);
//     Object.assign(fixedItem,data);
//     return fixedItem;
//   }
// patch er khetre shadharooto partial use kora hoi jate jkuno ekta coloumn er upor update kora jay R object.assign data er ekta copy create kore.tarpor nirdristo field update kore puru data return kore
// slice & splice
//slice Array থেকে অংশ কেটে নেয়, কিন্তু original array পরিবর্তন করে না.borong kata ongsho tuku niye নতুন array রিটার্ন করে.
// splice Array-এর ভিতরে পরিবর্তন আনে (add / remove / replace).original array পরিবর্তন করে

// DTO (Data Transfer Object) হলো NestJS-এ ব্যবহৃত একটা class
// যেটা দিয়ে API-তে আসা/যাওয়া data এর structure, type ও validation rule ঠিক করা হয়।

// import { IsInt, IsString,IsEmail,IsOptional,IsEnum } from 'class-validator';
// export class SignupDto {
//   @IsString()
//   name: string;

//   @IsEmail()
//   email: string;

//   @IsString()
//   @MinLength(6)
//   password: string;

//   @IsString()
//   phone: string;

//   @IsOptional()
//   @IsEnum(UserRole)
//   role?: UserRole;
// }

// mainly DTO typscript a kaj korena karon typescript run time a kaj korena only deployment but jodi run time a kaj korate chay tobe class-validator install lagbe r ekta class lagbe sheta hocce class-transfromer .eitar kaj hocce client theke asha json data ke class a formate kore then validate apply kore.
// R obosshoi main.ts a globally apply korte hobe
//  app.useGlobalPipes(
//   new ValidationPipe({
//     whitelist: true, //DTO  er moddhe je je value ace shudhu sheigulai thakbe baki shob remove kore deve.
//     forbidNonWhitelisted:true //vul boshoto kuno unknown filed ashle run time error debe
//   }),
// );
