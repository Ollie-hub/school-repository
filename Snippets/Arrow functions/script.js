// Omskriv følgende fire funktioner til arrow functions

        /*1. Tilføj 10 til et tal
        function addToTen(num) {
            return 10 + num;
        }*/ 

        // Arrow function
        addToTen = (num) => {
            return 10 + num;
        }

        /*document.getElementById('add').addEventListener("click", function() {
            let value = parseInt(document.getElementById('addtoten').value);
            console.log(addToTen(value));
        });*/

        // Arrow function
        document.getElementById('add').addEventListener("click", () => {
            let value = parseInt(document.getElementById('addtoten').value);
            console.log(addToTen(value));
        });

        /* 2. Divider tal 1 med tal 2
        function divideUs(num1, num2) {
            return num1/num2;
        }*/

        // Arrow function 
        const divideUs = (num1, num2) => {
            return num1/num2;
        }

        /* 3. Beregn summen af to værdier
        function sum(a, b) {
            return a + b;
        }*/

        // Arrow function
        sum = (a, b) => {
            return a + b;
        }

        /* 4. Besvar spørgsmålet
        function ask(question, yes, no) {
            if (confirm(question)) yes() 
            else no();
        }*/

        // Arrow function
        const ask = (question, yes, no) => {
            if (confirm(question)) yes() 
            else no();
        }