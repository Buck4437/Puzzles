Vue.component("answer-checker", {
    props: {
        answer: String
    },
    data() {
        return {
            input: ""
        }
    },
    methods: {
        check() {
            if (this.strip(this.answer) === this.strip(this.input)) {
                alert("Correct!");
            } else {
                alert("Incorrect!");
            }
        },
        strip(str) {
            return str.split("")
                      .filter(s => s.match(/[a-zA-Z]/))
                      .join("").toLowerCase();
        }
    },
    template: `
    <div class="COMPONENT answer-checker">
        <input v-model="input">
        </input>
        <button @click="check">
            Check your answer
        </button>
    </div>`
})
