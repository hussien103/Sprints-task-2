"use strict";

const getHoroscope=function(){
// enter day/year/month
let day =Number(document.getElementById("day").value);
let month =Number(document.getElementById("month").value);
let  year = Number( document.getElementById("year").value);
// validate and display error msg
if(!Validate(day,month,year)){
  alert("invalid date");
  return;
}
else{
let horoscopeName = getHoroscopeName(day, month);
    displayHoroscopeName(horoscopeName);
}
//

}
const Validate = function(day,month,year){

    if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
    if (
      day < 1 ||
      month < 1 ||
      year < 1900 ||
      month > 12 ||
      year > 2100 ||
      day > 31
    )
      return false;
    if (day > 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
      return false;
    }
    if (day > 28 && month == 2 && year % 4 != 0) {
      return false;
    }
    if (day > 29 && month == 2 && year % 4 == 0) {
      return false;
    }
    return true;
};
const getHoroscopeName = function(day,month){
    let astro_sign="";
     
    // checks month and date within the
    // valid range of a specified zodiac
    if (month == 12){
         
        if (day < 22)
        astro_sign = "Sagittarius";
        else
        astro_sign ="capricorn";
    }
         
     if (month == 1){
        if (day < 20)
        astro_sign = "Capricorn";
        else
        astro_sign = "aquarius";
    }
         
    else if (month == 2){
        if (day < 19)
        astro_sign = "Aquarius";
        else
        astro_sign = "pisces";
    }
         
    else if(month == 3){
        if (day < 21)
        astro_sign = "Pisces";
        else
        astro_sign = "aries";
    }
    else if (month == 4){
        if (day < 20)
        astro_sign = "Aries";
        else
        astro_sign = "taurus";
    }
         
    else if (month == 5){
        if (day < 21)
        astro_sign = "Taurus";
        else
        astro_sign = "gemini";
    }
         
    else if( month == 6){
        if (day < 21)
        astro_sign = "Gemini";
        else
        astro_sign = "cancer";
    }
         
    else if (month == 7){
        if (day < 23)
        astro_sign = "Cancer";
        else
        astro_sign = "leo";
    }
         
    else if( month == 8){
        if (day < 23)
        astro_sign = "Leo";
        else
        astro_sign = "virgo";
    }
         
    else if (month == 9){
        if (day < 23)
        astro_sign = "Virgo";
        else
        astro_sign = "libra";
    }
         
    else if (month == 10){
        if (day < 23)
        astro_sign = "Libra";
        else
        astro_sign = "scorpio";
    }
         
    else if (month == 11){
        if (day < 22)
        astro_sign = "scorpio";
        else
        astro_sign = "sagittarius";
    }
    return astro_sign;
};

const displayHoroscopeName = function (name) {
    document.getElementById("result").innerHTML =
      "<strong style='color:green'>" + name + "</strong>";
  };   
   

 