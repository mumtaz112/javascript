//  Task 1
// var zakatpercentage=2.5/100;
// var userinput=prompt("Enter Amount:");
// var result=zakatpercentage*userinput;
// document.write("Total Amount After Zakat"  + ' ' + result);
//  Task 2

// var familyMembers=prompt("Enter Total Family Member");
// var fitrahmethod=prompt("Enter Mode of payment");
// var kishmish=200;
// var wheat=300;
// if(familyMembers==null){
//     document.write("Please Enter Family member");
// }
// if(fitrahmethod== 'kishmish'){
// var  fitrahamount=Number(kishmish*familyMembers);
// alert("Fitrah Amount is" + ' ' + fitrahamount); 

// }
// else if(fitrahmethod== 'wheat')
// {
//  var  fitrahamount=Number(wheat*familyMembers);
// alert("Fitrah Amount is" + ' ' + fitrahamount);
// }
// Task 3

// var secretnumber= Math.floor((Math.random() * 10) + 1);
// var secret=prompt("Enter secret number");
// if(secret==secretnumber){
//     document.write('Congratulations! You guessed the secret number');

// }
// else{
//     document.write('Guess Again');
// }
// Task 4
// var user=prompt("Enter Name")
// var out=user[0].toUpperCase() + user.slice(1)
// document.write(out)

// Task 5
// var cntctnum=[]
// var cntctname=[]
// for(var i=0; i<2; i++)
// {
//  cntctnum.push(prompt("Enter Contact Number"));
// }
// for(var i=0; i<2; i++)
// {vo
//  cntctname.push(prompt("Enter Contact name"));
// }
// var all=cntctname.concat(cntctnum); 
// document.write(all);
// Task 7
// var name=prompt('Enter Your Name');
// var nationality=prompt('Enter Your Nationality');
// var gender=prompt('Enter Your Gender');
// var age=prompt('Enter Your Age');

// if(nationality=='pakistani' && nationality == 'indian')
// {
//  document.write('Eligible for vote');
// }
// else if(gender=='male' && age >=18)
// {
//     document.write('Eligible to Vote');

// }

// else if(gender=='female' && age >=18)
// {
//     var martialstat= prompt('Are You Married Or Not');
// }
// else if(martialstat=='married')
// {
//     document.write('Eligible For Vote');
    
    
// }
// else{
//     document.write('Not Eligible For Vote')
// }
// task 8
// var player=["ali","faraz","Neaz","Rahul","Ganguly","Modi","Rohi,'Ayaz","Ejaz","Mumtaz","Farukh","agha","khan","umer","Hassan"];
// var selected=[];
// selected=player.slice(0,9);
// var selectedplayer=selected;
// document.write(selectedplayer);

// project done

//One Time Password
// function generateotp() {

//     var digits = '1234567890';
//     var otp = '';
//     for (i = 0; i < 4; i++) {
//         otp += digits[Math.floor(Math.random() * 10)];
//     }
//     return otp;
// }
// console.log(generateotp());
// check leap year between two years
// function findLeapYears(startYear, endYear) {
//  var leapYears = [];

//   for (let year = startYear; year <= endYear; year++) {
//     if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//       leapYears.push(year);
//     }
//   }

//   return leapYears;
// }

// const leapYears = findLeapYears(2023, 2032);
// console.log(leapYears);
// check current year leap
// function check_leapyear(){
		
		
// 		var year = prompt('Enter year');

// 		if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
// 		{
// 			alert(year+" is a leap year");  
// 		}
// 		else
// 		{
// 			alert(year+" is not a leap year");  
// 		}
// 	}
//     console.log(check_leapyear());

//Calculate Age 

function ageCount() {
	var date1 = new Date();
	var  dob= prompt("Enter Date Of Birth");
	var date2=new Date(dob);
	var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/; //Regex to validate date format (dd/mm/yyyy)
	if (pattern.test(dob)) {
		var y1 = date1.getFullYear(); 
		var y2 = date2.getFullYear(); 
		var age = y1 - y2;           
		document.write("Age : " + age);
		return true;
	} else {
		alert("Invalid date format. Please Input in (dd/mm/yyyy) format!");
		return false;
	}

}
console.log(ageCount())



	
   