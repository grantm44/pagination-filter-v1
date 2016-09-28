//count number of students
//10 students per page
var list = document.getElementsByClassName("student-item cf");



makeButtons();

 function makeButtons(){
	//make buttons for number of students
	var count = 1;
	var diva = document.createElement('div');
	diva.classList.add("pagination")
	var buttonList = document.createElement('ul');
		
	//students.appendChild(div);
	$('.page').append($(diva) );
	for(i=0;i<list.length; i+=10){
		var li = document.createElement("li");
		var a = document.createElement("a");
		a.text=count;
		if(i<1){
			a.classList.add("active");
		}
		buttonList.appendChild(li).appendChild(a);
		diva.appendChild(buttonList);
		
		a.addEventListener("click", function(e){
			e.preventDefault();
			makeActive(this);
		});

		count+=1;	

	}
}
 $(document).ready(function(){
	//when btn is clicked make certain elements active
	//hide other elements
	var num = this.classList;
	var low = 0;
	var high = 10;
	console.log(num);
	for(i=0;i<list.length;i++){
		if(i < low || i >= high){
			list[i].style.display = "none";
		}
		else{
			list[i].style.display = "block";
		}
	}
 });
function makeActive(anchor){
    //when btn is clicked make certain elements active
	//hide other elements
	var num = anchor.innerHTML;	

	$('.active').removeClass();
	$(anchor).addClass("active");
	
	var low = num*10 - 10;
	var high = num*10;
	console.log(num);
	for(i=0;i<list.length;i++){
		if(i < low || i >= high){
			list[i].style.display = "none";
		}
		else{
			list[i].style.display = "block";
		}
	}
 }

