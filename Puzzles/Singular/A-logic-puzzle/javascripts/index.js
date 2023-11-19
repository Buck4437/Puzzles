let partial = "I want a better answer."

var app = new Vue({
    el: "#app",
    data: {
        title: "A Logic Puzzle",
        answer: "∀",
        strip(str) {
            return str.split("")
                      .filter(s => !s.match(/\s/))
                      .join("").toUpperCase();
        },
        nudge: {
            "GATES AS HITORI CLUES": "Keep going!",
            "SHADE CLUES WITH A": "Keep going!",
            "UNIVERSAL QUANTIFICATION": partial,
            "GIVEN ANY": partial,
            "FOR ALL": partial,
            "FOR ANY": partial,
            "TURNED A": partial
        },
        letterGrid: 
        `T	G	S	A	T	E	H
        I	H	S	A	A	D	S
        S	I	S	N	O	W	E
        C	U	L	H	U	S	I
        T	E	E	S	L	O	W
        R	I	E	C	S	L	U
        I	E	T	S	H	S	A`.split("\n").map(x => x.split("\t")),
        clueGrid: [
            ["6 > 3 AND 9 > 12", "T∨F", "?13.jpg", "?14.jpg", "X ↔ X", "?16.jpg", "?17.jpg"],
            ["not (true or false)", "Function Q(X,Y) checks if X+Y=0. Q(1,1)=?", "Either (X < 10) or (X ≥ 10) is true, but not both.", "?24.jpg", "?25.jpg", "Inverse of True", "At least one statement is true: 1 is a prime number; 4228 cannot be written as a sum of two prime numbers."],
            ["¬F", "?32.jpg", "(X∧Y)∨(¬X∧¬Y), where X = False, Y = True", "Only one statement is true: X is a prime number; X has two factors. (Assume that X is a positive integer)", "Both \"Today is Tuesday\" and \"Today is not Tuesday\" are false.", "?36.jpg", "?37.jpg"],
            ["?41.jpg", "(X AND (NOT Y)) OR ((NOT X) AND Y) , where X = Y = FALSE", "?43.jpg", "¬(F∨F)", "(X>5)⊕(X>5)", "?46.jpg", "console.log(true && true);"],
            ["console.log(!((2 > 1) && (1 > 2)))", "¬((3>1)⊕(4<2))", "?53.jpg", "NOT (3 > 1)", "(X > 4) and (X < 4)", "?56.jpg", "¬(T∧T)"],
            ["(X = 2) or (X is odd), where X = prime number", "?62.jpg", "?63.jpg", "T∧T", "At most one statement is true: NAND is a universal gate; NOR is a universal gate.", "?66.jpg", "Function P(X,Y) checks if X+Y=1. P(1,0)=?"],
            ["x = 4; y = 5; console.log((x > 10) || (y > 10));", "?72.jpg", "(X∧¬Y)∨(¬X∧Y), where X = True, Y = True", "NOT ((1 > 0) AND (0 < 1))", "?75.jpg", "X > 4 OR X < 5", "?77.jpg"],
        ]
    }
})
