{"filter":false,"title":"calcSpec.js","tooltip":"/spec/calcSpec.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["describe(\"Calculator\", function() {","      ","       beforeEach(function() {","        calc = new Calculator;","    });","    ","    describe(\"Addition function\", function() {","        it(\"should return 42\", function() {","            ","            calc.add(20);","            calc.add(22);","            expect(calc.value).toBe(42);","            ","           // expect(addition(20, 22)).toBe(42); ","        });","        it(\"should return 26\", function() {","            ","            calc.add(7);","            calc.add(19);","            expect(calc.value).toBe(26);","        ","            // expect(addition(7, 19)).toBe(26);   ","        });","        ","         it(\"should return an error if we don't supply two numbers\", function() {","            spyOn(window, \"alert\");","            calc.add(\"Hitchhikers\");","","           // addition(\"Hitchhikers\", \"Guide\")","           ","            expect(window.alert).toHaveBeenCalledWith(\"Error!\"); ","             ","            /*expect(addition(\"Hitchhikers\", \"Guide\")).toBe(\"Error!\") */","        });","    });","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":180,"scrollleft":0,"selection":{"start":{"row":35,"column":3},"end":{"row":35,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1571822305827,"hash":"9cb9c312945292704a454ad3b781f2df74381ab8"}