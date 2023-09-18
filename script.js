 var myArray = [];

 var arrayLength = parseInt(prompt("Введіть довжину масиву:"));

 for (var i = 0; i < arrayLength; i++) {
     var element = parseInt(prompt("Введіть елемент масиву #" + (i + 1) + ":"));
     myArray.push(element);
 }

 document.write("Початковий масив: " + myArray + "<br>");

 myArray.sort(function(a, b) {
     return a - b;
 });

 document.write("Масив після сортування: " + myArray + "<br>");

 myArray.splice(1, 4);

 document.write("Масив після видалення елементів з 2 по 4: " + myArray + "<br>");