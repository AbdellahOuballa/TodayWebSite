const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



/*loop hero h1*/
  var text1 = ["Diary & Journal","Write your own", "Personal notes on"];
  var text2 = ["- private writing","Private diary!",  "Web and Android!"];
  var counter1 = 0;
  var counter2 = 0;
  var inst = setInterval(change, 5000);
  function change(){
  document.getElementById("looph1").innerHTML = text1[counter1];
  document.getElementById("looph2").innerHTML = text2[counter2];
  counter1++;
  counter2++;

   if (counter1 >= text1.length) {
      counter1 = 0;
      // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
    if (counter2 >= text2.length) {
      counter2 = 0;
      // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
  }
  /*End loop hero h1*/




  