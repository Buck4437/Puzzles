/* Heavy spoilers below */







































var app = new Vue({
    el: "#app",
    data: {
        title: "Matrix",
        answer: "HARD DROP",
        flavourText: `
        I tried to tetris all pieces in, but they seemed to be in an odd shape.
        After checking them left-to-right, top-to-bottom,
        I removed them from the board.`,
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
        `ACJOTCRA
        IHNONBLA
        NKIDLEAT
        ELNTRKOM
        INSIOLMI
        NNKSTIOL
        WHANFTTE
        LIZYHELL`
    }
})

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

		J	O		C	R	A
	H	N			B
	K	I		L	E	A
	L	N	T		K
		S	I		L	M
	N	K			I	O	L
W	H			F	T		E
	I	Z		H	E	L	L

A	C			T
I			O	N		L	A
N			D				T
E			T	R		O	M
I	N			O			I
N			S	T
		A	N			T
L			Y

ACTION LAND TETROMINO INSTANTLY
=> Hard drop
*/
