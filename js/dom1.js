//"Examine the document Object";
//console.dir(document);
//console.log(document.doctype);
//console.log(document.URL);
//console.log(document.title);
//document.title= "hello" ;

//console.log(document.head);
//console.log(document.body);
//console.log(document.all[10]);//headertilex
//document.all[10].textContent="hello"


//GETELEMENTBYID
var headerTitle=document.getElementById('header-title');
var head=document.getElementById('main-header');
var item=document.getElementById('item');
item.innerHTML='<h2 style="color:green"><b>Add Items</b></h2>';
console.log(headerTitle);
head.style.borderBottom="solid 3px #000";
