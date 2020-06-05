//fxn are variable
function sayHello()
{
    console.log("Hello Everyone :");
} 

//fxn expression
let fnVar = function()
{console.log("I will fxn expression");

};

//arrow fxn
let arrowFn =  () => {
    console.log("I am arrow");
}



sayHello();
fnVar();
arrowFn();

//imemediate fxn
(function anotherFn()
{
console.log("I will be called when I was created");
})();
