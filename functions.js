const { element } = require("prop-types");

 // do only when function
 doOnlyWhen  = (toDoHandler , toCheckHandler , interval , times , failHandler) => {
if (interval == undefined) interval = 1000;
if(times == undefined) times = 20;
var isCondition = false
for (var i = 0 ; i< times; i++){
    if (toCheckHandler) isCondition= true;
    else isCondition = false;
 }
 if (isCondition == true)
 toDoHandler();
 else 
 failHandler();
 setTimeout((toDoHandler , isCondition , times , failHandler), interval);

}
//is visible function
function isVisible(element){
    var style = !!element && window.getComputedStyle(element);
    return (!!style.visibility || style.display === 'none' || element.offsetParent === null);
}

// create style
function CreateStyle(selector, rule){
    var elements = document.querySelectorAll(selector);
    elements.forEach(element =>{
        if(element){
            element.setAttribute("style",rule);
        }
    })
}
