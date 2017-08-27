var cv = {
    name: "Kashif Ali",
    age: 23,
    Fname : "Tufail Ahmed Chandio",
    cnic: "4230123875411",
    MartialStatus : "Married",
    Nationality: "Pakistani",
    Domicile: "Karachi",
    contact: '03132401066',
    email: 'kashifc313@gmail.com',
    DOB : "06-04-1995",
    BSCS: "Doing BSCS from SMIU (Sindh Madressatul Islam University) form 2015 and will complete in 2018 (december) InshahAllah",
    pre: "Have Done Intermediate in Pre-Engineering in 2015 and have got \"B\" grade from Karachi Board",
    matric: "Have Done Matriculation in 2012 and have got \"B\" grade from Karachi Board"
}
var skills = {
    webDesig:  "Website Desiging",
    webDe: "Website Development",
    cryt: "Cryptography",
    msOf: "MS Office",
    A: "Comptia A+",
    security: "Comptia Security+",
    network: "Comptia Network+",
    java: "JAVA"
}

document.getElementById("name").innerHTML = cv.name;
document.getElementById("age").innerHTML = cv.age;
document.getElementById("fname").innerHTML = cv.Fname;
document.getElementById("cnic").innerHTML = cv.cnic;
document.getElementById("domicle").innerHTML = cv.Domicile;
document.getElementById("nat").innerHTML = cv.Nationality;
document.getElementById("mat").innerHTML = cv.MartialStatus;
document.getElementById("no").innerHTML = cv.contact;
document.getElementById("email").innerHTML = cv.email;
document.getElementById("Dob").innerHTML = cv.DOB;
document.getElementById("bscs").innerHTML = cv.BSCS;
document.getElementById("pre").innerHTML = cv.pre;
document.getElementById("matric").innerHTML = cv.matric;
document.getElementById("weds").innerHTML = skills.webDesig;
document.getElementById("weDe").innerHTML = skills.webDe;
// document.getElementById("cryt").innerHTML = skills.cryt;
// document.getElementById("weds").innerHTML = skills.msOf;
// document.getElementById("weds").innerHTML = skills.A;
// document.getElementById("secuirty").innerHTML = skills.security;
// document.getElementById("java").innerHTML = skills.java;
// document.getElementById("net").innerHTML = skills.network;
