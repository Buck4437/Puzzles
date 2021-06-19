let answerChecker = {
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
        answer: String
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
