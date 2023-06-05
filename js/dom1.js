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
//var headerTitle=document.getElementById('header-title');
//var head=document.getElementById('main-header');
//var item=document.getElementById('item');
//item.innerHTML='<h2 style="color:green"><b>Add Items</b></h2>';
//console.log(headerTitle);
//head.style.borderBottom="solid 3px #000";

//GETelement by classsname
/*var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent='hello';
items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow';
//Make the 3 rd element in the list have green background color

items[2].style.backgroundColor='green';

//Make all the elements in the list have bold color font
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}*/

// editing it with getelementsbyclassname and then by getelementbytagname
//gateelenetsbyclassname doesnt have access to item 5 due to diiference in class name
//now with getelementbytagnsme

var li=document.getElementsByTagName('li');
console.log(li);
li[1].textContent='hello';
li[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow';
//Make the 3 rd element in the list have green background color

li[2].style.backgroundColor='green';

//Make all the elements in the list have bold color font
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}
//done with changes using getselementsby tag name;



