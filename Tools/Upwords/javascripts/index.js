var app = new Vue({
    el: "#app",
    data: {
        textBox: "W24, A34",
        input: "",
        selectedMove: [0, 0],
        hasError: false,
        errorText: ""
    },
    computed: {
        parsed() {
            if (this.hasError) {
                return []
            }
            return parser(this.input);
        },
        selectedMoveParser() {
            if (this.parsed.length === 0) {
                return [];
            }
            let data = this.parsed;
            data = data.slice(0, this.selectedMove[0] + 1);
            data[this.selectedMove[0]] = data[this.selectedMove[0]].slice(0, this.selectedMove[1] + 1);
            return data;
        },
        board() {
            return scaffolder(this.selectedMoveParser)
        }
    },
    watch: {
        input(data) {
            try {
                parser(data);
                this.removeError();
            } catch (e) {
                this.setError(e);
            }
        }
    },
    methods: {
        coordToString(str) {
            return coordToString(str);
        },
        getTile(i, j) {
            if (this.board[coordToString([i, j])] === undefined) {
                return {
                    letter: "",
                    height: 0
                }
            } else {
                return this.board[coordToString([i, j])]
            }
        },
        select(i, j) {
            this.selectedMove = [i, j]
        },
        setError(str) {
            this.errorText = str;
            this.hasError = true;
        },
        removeError(str) {
            this.errorText = "";
            this.hasError = false;
        },
        submit() {
            this.input = this.textBox;
            this.selectedMove = [0, 0]
        },
        toLetter(num) {
            return String.fromCharCode("A".charCodeAt(0) + num - 1);
        }
    },
    created() {
        this.submit();
        this.select(0, 0);
    }
})
