var app = new Vue({
    el: "#app",
    data: {
        title: "Crappy Clues",
        flavour: "Charlie has created a couple of cryptic, yet crappy clues.",
        answer: "CHAOS",
        clues:
`Bread sauces containers contain some flavourings (6;6)
Kind of a rbchi tree (5;5)
Even aabcc oddea -Conclusion- (4;10)
Area, Absolute, and RAC in TT are theoretical (8;7)
Clay from crushed talc (4;9)
Desc. error: "---> New <--- testament smell" (5;3)
Daughter (Acttwo): flipped, reversed, and confrontation (3,3;4)
Qwertyuippasdfgh jklzxcvbnmdbaco nbvcxzlkjhgfds contains meat (5;8)
Initials of a crazily-easily-and-stupidly-enumerated halt (5;2)
(New) a cat! (3;1)
Synchronization - a fall echo (4;12)
<br> <a> Cod confuses snake (5;1)
A 0.02777777777777777777777777777... yard move (4;11)`.split("\n")
    }
});
