//count number of students
//10 students per page
var list = document.getElementsByClassName("student-item cf");

// <div class="student-search">
//           <input placeholder="Search for students...">
//           <button>Search</button>
// </div>

makeButtons();
searchBar();

function searchBar(){

	var div = document.createElement('div');
	div.classList.add('student-search');
	var input = document.createElement('input');
	input.placeholder = "Search for students...";
	var button = document.createElement('button');
	button.innerHTML = "Search";
	
	button.addEventListener("click", function(){
		searchList();
	});

	div.appendChild(input);
	div.appendChild(button);
	document.querySelector(".page-header").appendChild(div);

}

function searchList(){
	var string = document.querySelector('div.student-search input').value;
	var names = document.querySelectorAll('div.student-details h3');
	var count = 0;
	var newList = [];
	for(i=0;i<names.length;i++){
		var test = names[i].innerHTML;
		if(names[i].innerHTML.indexOf(string) >= 0){
			//newList.push(list[i]);
			list[i].style.display = "block";
			count+=1;
			
		}
		else{
			list[i].style.display = "none";
		}
	}
	deleteButtons();
	searchButtons(count);
}

function searchButtons(number){
	var count = 1;
	var diva = document.createElement('div');
	diva.classList.add("pagination")
	var buttonList = document.createElement('ul');
		
	//students.appendChild(div);
	$('.page').append($(diva) );
	for(i=0;i<number; i+=10){
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

function deleteButtons(){
	$('.pagination').remove();
}

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

