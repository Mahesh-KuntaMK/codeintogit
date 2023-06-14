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
}

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
}*/
//done with changes using getselementsby tag name;


//Queryselector//
//Deliverable



//1.Make the 2nd item have green background color
//2.Make the 3rd item invisible


//var  header=document.querySelector('.main-header');
//console.log(header);
//var item=document.querySelector('.list-group-item:nth-child(2)');
//item.style.backgroundColor='green';
//var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.visibility='hidden';

//QuerySelectorAALL//
//1.Using QuerySelectorALL change the font color to green for 2nd item in the item list
//2.Choose all the odd elements and make their background green using QuerySelectorALL
  
//var  items=document.querySelectorAll('li');
//console.log(items);
//items[1].style.color='green';
//var odd=document.querySelectorAll('li:nth-child(odd');
//for(var i=0;i<odd.length;i++){

    //odd[i].style.backgroundColor='green';
//}
//done the changes successfully using quartSelectorAll


//now lets practice some queary slector methods
//1.parentElemnet
var itemList=document.querySelector('#items');
//console.log(itemList.parentElement.parentElement.parentElement);
 
//Now 2.parentNode
//console.log(itemList);
//itemList.parentNode.parentNode.style.backgroundColor="green";4

//console.log(itemList.parentElement.parentElement.parentElement);
//itemList.parentElement.parentElement.style.backgroundColor='red';

//CHILDNODES
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='green';


//firstChild
//console.log(itemList.firstChild);

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.style.backgroundColor="yellow";
//itemList.firstElementChild.textContent="helloWorld"


//lastchild
//console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent="hello new world"


//NEXTSIBLING
//console.log(itemList.nextSibling);

//NEXTELEMENTSIBLING
//console.log(itemList.nextElementSibling);//here we dont have sibling

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.backgroundColor="red";


//lets learn how to create in js using dom methods;

//createElement and added "hello" before ItemlIster

var newDiv=document.createElement("div");

//add class
newDiv.className="hello"

//add id
newDiv.id='hello1'

//add attribute


newDiv.setAttribute('title','Hello Div');

//add text node

var newDivText=document.createTextNode('Hello');


//add text to div
newDiv.appendChild(newDivText);



var container=document.querySelector('header .container');

var h1=document.querySelector('header h1');

console.log(newDiv);



container.insertBefore(newDiv,h1);

//now lets add hello to item

var newText=document.createElement("Div");


newText.className="item1";

newText.id='hello'

var text=document.createTextNode("hello");

newText.appendChild(text);


var ul=document.querySelector('div .list-group');
var li=ul.firstElementChild;

   


ul.insertBefore(newText,li);

//successfully complted dom methods using methods of querySElector;

var a=document.querySelector('#item');
console.log(a.parentElement);
console.log(a.parentNode);


 


