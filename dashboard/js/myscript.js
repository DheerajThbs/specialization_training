// let packagevalue="lmno@gmail.com";
// let pricevalue="0";
// var count=0;

function adult()
{
  var el = document.getElementById('adult').value;
   console.log(el); 
   window.packagevalue="ADULTPACKAGE";
   window.pricevalue="700 Rs/-"
    console.log(packagevalue);
    console.log(pricevalue);
    window.alert('You have choosed Individual pack');
}


function family()
{
    
   window.packagevalue="FAMILYPACKAGE";
   window.pricevalue="1200 Rs/-"
    console.log(packagevalue);
    console.log(pricevalue);
    window.alert('You have choosed Family package');
}


function student()
{
    
   window.packagevalue="STUDENTPACKAGE";
   window.pricevalue="500 Rs/-"
    console.log(packagevalue);
    console.log(pricevalue);
    window.alert('You have choosed Student Package');
}


function superfamily()
{
    
   window.packagevalue="SUPERFAMILYPACKAGE";
   window.pricevalue="1700 Rs/-"
    console.log(packagevalue);
    console.log(pricevalue);
    window.alert('You have choosed Superfamily package');
}

function fetchinfo()
{
  sessionStorage.setItem("pckval",window.packagevalue);
  sessionStorage.setItem("prcval",window.pricevalue);
  // console.log(pckval);
  // console.log(prcval);  you can't display localstorage value :(
  window.str1=sessionStorage.getItem("pckval");//window.variable act as global variable :o
  window.str2=sessionStorage.getItem("prcval");
  console.log(str1);
  console.log(str2);
}



function valid()
{
  
    let packageval1=sessionStorage.getItem("pckval");
    let priceval1=sessionStorage.getItem("prcval");
    console.log(packageval1);
    console.log(priceval1);
document.getElementById('package').value=packageval1;
document.getElementById('price').value=priceval1;


}







//window.location.href='/application.html';
/*
const page = window.open('test.html')

page.addEventListener('DOMContentLoaded', () => {
  // Now we can access the #test element on the other page
  const testDiv = page.document.getElementById('test')
  testDiv.textContent = 'Hello world!'
})
*/