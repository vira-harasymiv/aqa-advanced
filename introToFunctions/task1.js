//Function Declaration
function areaOfRectangle(width, height){
    return width * height;
}

console.log(areaOfRectangle(5,10));

//Function Expression
const area = function(width, height){
    return width * height;
}
console.log(area(5,10));

//Arrow Function
const rectangleArea = (width, height) => width * height;
console.log(rectangleArea(5,10));