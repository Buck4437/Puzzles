let answerChecker = {
    props: {
        answer: String,
        nudge: {
            type: Object,
            default: () => {
                return {};
            }
        },
        strip: {
            type: Function,
            default: function(str) {
                return str.split("")
                          .filter(s => s.match(/[a-zA-Z]/))
                          .join("").toUpperCase();
            }
        }
    },
    data() {
        return {
            textField: "",
            input: "",
            state: "",
            CORRECT: "correct",
            INCORRECT: "incorrect",
            PARTIAL: "partial"
        }
    },
    computed: {
        answerTable() {
            let table = {};
            for (let key in this.nudge) {
                table[this.strip(key)] = this.PARTIAL;
            }
            table[this.strip(this.answer)] = this.CORRECT;
            return table;
        },
        nudgeTable() {
            let table = {};
            for (let key in this.nudge) {
                table[this.strip(key)] = this.nudge[key];
            }
            return table;
        },
        display() {
            switch (this.state) {
                case this.CORRECT:
                    return `${this.answer} is correct!`
                case this.PARTIAL:
                    return `${this.nudgeTable[this.input]}`
                default:
                    return `${this.input} is incorrect.`
            }
        }
    },
    methods: {
        checkAnswer(input) {
            return this.answerTable[input] || this.INCORRECT;
        },
        check() {
            let input = this.strip(this.textField);
            this.input = input;
            this.state = this.checkAnswer(input);
        }
    },
    template: `
    <div class="SUBCOMPONENT base-puzzle answer-checker">
        <div>
            <input v-model="textField">
            </input>
            <button @click="check">
                Check your answer
            </button>
        </div>
        <div v-if="state" class="result" :class="state">
            {{this.display}}
        </div>
    </div>`
}

Vue.component("base-puzzle", {
    components: {
        answerChecker
    },
    props: {
        title: String,
        answer: String,
        nudge: Object,
        strip: Function
    },
    methods: {
        hasSlot(name = "default") {
            return !!this.$slots[name] || !!this.$scopedSlots[name];
        }
    },
    mounted() {
        document.title = this.title;
    },
    template: `
    <div class="COMPONENT base-puzzle">
        <div class="title">{{title}}</div>
        <answer-checker :answer="answer" :nudge="nudge" :strip="strip" class="checker"></answer-checker>
        <div v-if="hasSlot('header')">
            <slot name="header"/>
        </div>
        <div v-if="hasSlot('flavour-text')" class="flavour-text">
            <slot name="flavour-text"/>
        </div>
        <slot></slot>
    </div>`
})
