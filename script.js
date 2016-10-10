var list = document.getElementsByClassName("student-item cf");

var perPage = 10;//items per page
makeButtons(); 
searchBar();

//show first ten elements when page loads
 $(document).ready(function(){
	
	var low = 0;
	var high = 10;
	$(list).each(function(){
		$(this).addClass('show');
	});
	for(var i=0;i<list.length;i++){
		if(i < low || i >= high){
			list[i].style.display = "none";
			
		}
		else{
			list[i].style.display = "block";
			
		}
	}
 });
//make search bar
 function searchBar(){

	var div = document.createElement('div');
	div.classList.add('student-search');
	var input = document.createElement('input');
	input.placeholder = "Search for students...";
	var button = document.createElement('button');
	button.innerHTML = "Search";
	button.addEventListener('click', searchList);
	div.appendChild(input);
	div.appendChild(button);
	document.querySelector(".page-header").appendChild(div);

}
//search when search button is clicked
function searchList(){
	var name = $('input').val();
	//if text from input matches name in list show item
	//otherwise hide item
	var count = 0;
	//TODO: make search non-case sensitive indexOf()
	//		search for email also
	$("div.student-details h3").each(function(){
			var check = $(this).text();
				if(check.indexOf(name) >=0 ){
					$(this).parent().parent().addClass("show");
					count += 1;
				}
				else{
					$(this).parent().parent().removeClass("show");
				}
	});	
	createPagination(count);

	buttonClick();
	showHide();
}
//create necessary number of pages
function createPagination(count){
	//create number of buttons for how many results are returned
	$('.pagination').remove();
	var pages = Math.ceil(count/perPage);
	var diva = document.createElement('div');
	diva.classList.add("pagination");
	var buttonList = document.createElement('ul');
	if(count>perPage){
	$('.page').append($(diva) );
		for(var i=1; i<=pages; i++){
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.text = i;
			if(i<=1){
				a.classList.add("active");
			}
			buttonList.appendChild(li).appendChild(a);
			diva.appendChild(buttonList);
		}
	}
}

//event listener for pagination
function buttonClick(){
	$('div.pagination li').children().each(function(){
		this.addEventListener("click", showHide);
	});
}
//show items based on current page
function showHide(){
	var page = $(this).text(); //get number from anchor 
	if(page === ""){ //check if button was clicked or initial search
		page = 1;
	}
	else{
		$('div.pagination a').removeClass('active'); 
		$(this).addClass('active'); //set current anchor to active
	}
	
	var show = page * perPage;
	var low = show - perPage;
	var count = 0;
	$('ul.student-list li').each(function(){ //loop over elements and set to hide or show
		if($(this).hasClass('show')){
			count++;
			if(count>low && count<=show){
				$(this).css('display', 'block');
			}
			else{
				$(this).css('display', 'none');
			}
		}
		else{
			$(this).css('display', 'none');
		} 
	});
}

function makeButtons(){
	//make buttons for number of students
	var count = 1;
	var pages = list.length;
	var diva = document.createElement('div');
	diva.classList.add("pagination");
	var buttonList = document.createElement('ul');
		
	//students.appendChild(div);
	$('.page').append($(diva) );
	for(var i=0;i<pages; i+=10){
		var li = document.createElement("li");
		var a = document.createElement("a");
		a.text=count;
		if(i<1){
			a.classList.add("active");
		}
		buttonList.appendChild(li).appendChild(a);
		diva.appendChild(buttonList);

		count+=1;	

	}
	buttonClick();
}

$('button').on('click', searchList);