const app = new Vue({
    el: "#app",
    data: {
        singulars: [
            {
                name: "Matrix",
                link: "Matrix"
            },
            {
                name: "Binder",
                link: "Binder"
            },
            {
                name: "Interlocked",
                link: "Interlocked"
            },
            {
                name: "Recorrections",
                link: "Recorrections"
            },
            {
                name: "Space",
                link: "Space"
            },
            {
                name: "License",
                link: "License"
            },
            {
                name: "Crappy Clues",
                link: "Crappy Clues"
            },
            {
                name: "Line",
                desc: "Originally written for a mini-hunt",
                link: "Line"
            },
            {
                name: "A Logic Puzzle",
                desc: "2023 Sep, originally written for a mini-hunt",
                link: "A-logic-puzzle"
            }
        ],
        hunts: [
            {
                name: "MIT Mystery Hunt 2026",
                puzzles: [
                    {
                        name: "Jumping to Conclusions",
                        desc: "(with Dan Simon)",
                        link: "https://puzzmon.world/puzzles/jumping_to_conclusions",
                    },
                    {
                        name: "Jam Session",
                        link: "https://puzzmon.world/puzzles/jam_session",
                    },
                    {
                        name: "Stray Child",
                        link: "https://puzzmon.world/puzzles/stray_child",
                    },
                    {
                        name: "Hear Me Out",
                        link: "https://puzzmon.world/puzzles/hear_me_out",
                    },
                    {
                        name: "Goku",
                        link: "https://puzzmon.world/puzzles/goku",
                    },
                    {
                        name: "Layers: Bordered",
                        link: "https://puzzmon.world/puzzles/layers_bordered",
                    },
                    {
                        name: "Layers: Bowled",
                        link: "https://puzzmon.world/puzzles/layers_bowled",
                    },
                    {
                        name: "Layers: Colored",
                        link: "https://puzzmon.world/puzzles/layers_colored",
                    },
                    {
                        name: "Layers: Rounded",
                        link: "https://puzzmon.world/puzzles/layers_rounded",
                    },
                    {
                        name: "Layers: Trapezoidal",
                        link: "https://puzzmon.world/puzzles/layers_trapezoidal",
                    },
                    {
                        name: "Layers",
                        link: "https://puzzmon.world/puzzles/layers",
                    },
                ]
            }
        ]
    }
})