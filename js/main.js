var siteName=document.getElementById('siteName');
var siteURL=document.getElementById('siteURL');
var siteList;


if(localStorage.getItem("siteList")==null){
    siteList=[];
}

else{
    siteList=JSON.parse(localStorage.getItem("siteList"));
    displaydata(); 
}
//Add Sites//
function addSite(){
    var sites={
     name:siteName.value,
     url:siteURL.value,
    }

    siteList.push(sites)
    localStorage.setItem("siteList",JSON.stringify(siteList));
    clearForm();
    displaydata();
}



//clear Form
function clearForm(){
    siteName.value="";
    siteURL.value="";
}



//Display

function displaydata(){
    var container="";
    for(var i=0 ; i<siteList.length ; i++){
        container +=`<tr>
        <td>${i}</td>
        <td>${siteList[i].name}</td>
        <td id="visit">
        <a href="https://${siteList[i].url}" class="text-white">
        <button class="btn btn-success">
        <i class="fa-solid fa-eye pe-2">
        <span class="ps-1 fw-bold">Visit</span>
        </i>
        <a>
        </button>
        </td>
        
        <td> 
        <button class="btn btn-danger" onclick='DeleteItem(${i})'>
        <a onclick='Getlink(${i})'>
        <i class="fa-solid fa-trash-can">
        <span class="ps-1 fw-bold">Delete</span>
        </i>
        </a>
        </button>
        </td>
        </tr>
        `
    }
    document.getElementById('tableBody').innerHTML= container;
}



//Delete

function DeleteItem(index){
siteList.splice(index,1)
displaydata();
}


