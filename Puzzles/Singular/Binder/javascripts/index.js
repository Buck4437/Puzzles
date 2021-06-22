/* Heavy spoilers below */







































var app = new Vue({
    el: "#app",
    data: {
        title: "Binder",
        answer: "COVALENT BOND",
        flavourText: `
        After adding the reactants, I added some chemicals to combine them together.
        How do the reactants bind with each other?`,
        sections: [
            {
                name: "Reactants",
                clues: [
                    "Capable of (4)",
                    "CS Lovelace (3)",
                    "Invisible gas (3)",
                    "Automated computer program (3)",
                    "Mustard's rank (abbr.) (3)",
                    "Top-level domain (3)",
                    "One might do with crayons (4)",
                    "Slimy substance (3)",
                    "Sopranos actor Robert (4)",
                    "Path (4)",
                    "For fear that (4)",
                    "Sea, in portuguese (3)",
                    "Fog (4)",
                    "Close by (4)",
                    "Earthbound character (4)",
                    "Soccer game (abbr.) (3)",
                    "Advantage (3)",
                    "Tirade (4)",
                    "To grade (4)",
                    "____ a bell (4)",
                    "Location (4)",
                    "Opposite of super (3)",
                    "1.17, e.g. (abbr.) (3)",
                    "Keen intelligence (3)"
                ]
            },
            {
                name: "Products",
                clues: [
                    "Geometric relationship",
                    "A Computer program",
                    "Cunning",
                    "Remove",
                    "A psychologist",
                    "Likely",
                    "Stupidity",
                    "A mineral",
                    "Worrying",
                    "Transportation mode",
                    "Negative person",
                    "Whip"
                ]
            }
        ]
    }
})
