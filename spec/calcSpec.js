describe("Calculator", function() {
      
       beforeEach(function() {
        calc = new Calculator;
    });
    
    describe("Addition function", function() {
        it("should return 42", function() {
            
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
            
           // expect(addition(20, 22)).toBe(42); 
        });
        it("should return 26", function() {
            
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        
            // expect(addition(7, 19)).toBe(26);   
        });
        
         it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");

           // addition("Hitchhikers", "Guide")
           
            expect(window.alert).toHaveBeenCalledWith("Error!"); 
             
            /*expect(addition("Hitchhikers", "Guide")).toBe("Error!") */
        });
    });
});