let answerChecker = {
    props: {
        answer: [String, Object]
    },
    data() {
        return {
            input: ""
        }
    },
    methods: {
        check() {
            let input = this.strip(this.input)
            if (typeof this.answer === "string") {
                if (this.strip(this.answer) === input) {
                    alert("Correct!");
                } else {
                    alert("Incorrect!");
                }
            } else {
                for (let key in this.answer) {
                    if (this.strip(key) === input) {
                        alert(this.answer[key]);
                        return;
                    }
                }
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
    <div class="SUBCOMPONENT base-puzzle answer-checker">
        <input v-model="input">
        </input>
        <button @click="check">
            Check your answer
        </button>
    </div>`
}

Vue.component("base-puzzle", {
    components: {
        answerChecker
    },
    props: {
        title: String,
        answer: [String, Object]
    },
    template: `
    <div class="COMPONENT base-puzzle">
        <div class="title">{{title}}</div>
        <answer-checker :answer="answer" class="checker"></answer-checker>
        <div class="flavour-text">
            <slot name="flavour-text"/>
        </div>
        <slot></slot>
    </div>`
})
