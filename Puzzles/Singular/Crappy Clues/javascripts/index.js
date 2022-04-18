var app = new Vue({
    el: "#app",
    data: {
        title: "Crappy Clues",
        flavour: "Charlie has created a couple of cryptic, yet crappy clues.",
        answer: "CHAOS",
        clues:
`6: Bread sauces containers contain some flavourings (6)
5: Kind of a rbchi tree (5)
10: Even aabcc oddea -Conclusion- (4)
7: Area, Absolute, and RAC in TT are theoretical (8)
9: Clay from crushed talc (4)
3: Desc. error: "---> New <--- testament smell" (5)
4: Daughter (Acttwo): flipped, reversed, and confrontation (3,3)
8: Qwertyuippasdfgh jklzxcvbnmdbaco nbvcxzlkjhgfds contains meat (5)
2: Initials of a crazily-easily-and-stupidly-enumerated halt (5)
1: (New) a cat! (3)
12: Synchronize a fall echo (4)
1: <br> <a> Cod confuses snake (5)
11: A 0.02777777777777777777777777777... yard move (4)`.split("\n")
    }
});
