var guests=[];

function submit(){
    var guest_name = document.getElementById("input_submit_name").value;
    guests.push(guest_name);
    document.getElementById("show_names").innerHTML = guests.toString();
    console.log(guests);
}

function show(){
    var i=guests.join("<br>");
    document.getElementById("show").innerHTML = i.toString();
    console.log(i);
    console.log(guests);
}

function sort_names(){
    guests.sort();
    var j=guests.join("<br>");
    console.log(guests);
    document.getElementById("sorted").innerHTML = j.toString();
}

function search(){
    var s=document.getElementById("input_search_name").value;
    var found=0;
    var j;
    for(j=0; j<guests.length; j++)
    {
            if(s==guests[j]){
                found=found+1;
          }
    }
    document.getElementById("search_output_times").innerHTML="name found "+found+" time/s";
    console.log("found name"+found+" time/s");
}