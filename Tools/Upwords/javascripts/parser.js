/*
Format:
W11, A12, R13 | O23, D33
etc.
*/

function scaffolder(data = []) {
    let board = {};
    for (let move of data) {
        for (let turn of move) {
            for (let tile of turn) {
                let coord = coordToString(tile.position);
                if (board[coord] === undefined) {
                    board[coord] = {
                        letter: tile.letter,
                        height: 1,
                        addLetter(ltr) {
                            this.letter = ltr;
                            this.height++;
                        }
                    }
                } else {
                    board[coord].addLetter(tile.letter);
                }
            }
        }
    }
    return board;
}

function coordToString(coord) {
    return coord.join(",");
}

function stringToCoord(str) {
    return str.split(",")
}

function parser(text = "") {
    if (text.trim() === "") return [];
    var data = [];
    for (let moveText of text.split("\n")) {
        let move = [];
        for (let turnText of moveText.split("|")) {
            let turn = [];
            for (let tile of turnText.split(",")) {
                try {
                    let tileParsed = tileParser(tile);
                    turn.push(tileParsed);
                } catch (e) {
                    throw (e);
                }
            }
            move.push(turn);
        }
        data.push(move);
    }
    return data;
}

function tileParser(tile) {
    tile = tile.replaceAll(/\s/g, "");
    if (tile.length === 3) {
        let letter = tile.split("")[0];
        if (letter.match(/[a-zA-Z]/)) {
            let position = tile.split("").slice(1);
            if (position[0].match(/\d/) && position[1].match(/\d/)) {
                return {
                    letter,
                    position: position.map(str => Number(str))
                }
            } else {
                throw(`Error: Expected a number at the 2nd and 3rd position --> ${tile} <-- `)
            }
        } else {
            throw(`Error: Expected a letter at the beginning. --> ${tile} <-- `);
        }
    } else {
        throw(`Error: Each letter move should be 3 characters long. --> ${tile} <-- `);
    }
}
