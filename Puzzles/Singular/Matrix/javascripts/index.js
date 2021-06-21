/* Heavy spoilers below */







































var app = new Vue({
    el: "#app",
    data: {
        title: "Matrix",
        answer: "HARD DROP",
        flavourText: `
        I tried to drop all pieces in, but they seemed to be in an odd shape.
        After checking them left-to-right, top-to-bottom,
        I removed them from the board.`,
        clues: [
            "Lobster relative",
            "Inferno",
            "Singer Sargent",
            "Oven for pottery",
            "Toxic element",
            "Jack up",
            "SI unit for amount",
            "Send to the bottom",
            "Zoom or expert",
        ],
        wordSearch:
        `ACJOTCRA
        IHNONBLA
        NKIDLEAT
        ELNTRDOM
        INSIOLMI
        NNKSTIOL
        WHANFTTE
        LIZYHELL`
    }
})

/* Answers:
Drop all pieces => Tetris
Odd shape => Tetrominos

Beginning letter of each clue hints to shape of tetromino

Lobster relative: Crab
Inferno: Hell
Singer Sargent: John
Oven for pottery: Kiln
Toxic element: Lead
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
	L	N			D
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

Matrix => The 10x20 board where tetris pieces land
*/
