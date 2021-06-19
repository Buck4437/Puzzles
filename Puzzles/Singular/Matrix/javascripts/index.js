var app = new Vue({
    el: "#app",
    data: {
        title: "Matrix",
        flavourText: `
        I tried to tetris all pieces in, but they seemed to be in an odd shape.
        I checked every pieces carefully, from top to bottom, from left to right.
        After eliminating all the pieces, I turned my attention to the remains.`,
        clues: [
            "Lobster relative",
            "Inferno",
            "Singer Sargent",
            "Oven for pottery",
            "Titanic's problem",
            "Jack up",
            "SI unit for amount",
            "Send to the bottom",
            "Zoom or expert",
        ],
        wordSearch:
        `ACJOLEAT
        IHNONKLA
        NKIDHTME
        TLNREOOL
        CRAMLISE
        BNOILNIN
        WHSTALNK
        TIZLYIFT`
    }
})

/* Heavy spoilers below */






























/* Answers:
Lobster relative: Crab
Inferno: Hell
Singer Sargent: John
Oven for pottery: Kiln
Titanic's problem: Leak
Jack up: Lift
SI unit for amount: Mole
Send to the bottom: Sink
Zoom or Expert: Whiz
*/

/*
Board:
..JOLEA.
.HN..K..
.KI.H.M.
.LN.E.OL
CRA.L.SE
B...L.IN
WH...L.K
.IZ..IFT

ACJOLEAT
IHNONKLA
NKIDHTME
TLNREOOL
CRAMLISE
BNOILNIN
WHSTALNK
TIZLYIFT

ACTION LAND TETROMINO INSTANTLY
*/
