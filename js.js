'use strict';
const rules = [
    {
        text: 'Минимум одна большая буква',
        regex: /[A-Z]+/
    },
    {
        text: 'Минимум одна цифра',
        regex: /[0-9]+/
    },
    {
        text: 'Минимум однин /',
        regex: /\//
    }
];

let fuck = function() {
    let inputText = document.getElementById('pass').value;
    let counter = 0;
    rules.forEach(function (item) {
    counter++;

        if (item.regex.test(inputText)) {
            console.log(true);
            document.getElementById(counter).style.color = 'green'; ///те самые костыли
            //покрасить в зеленый

        } else {
            console.log(false);
            document.getElementById(counter).style.color = 'red';
            //покрасить в красный

        }

    })
};






