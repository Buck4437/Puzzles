var app = new Vue({
    el: "#app",
    computed: {
        currentFlavourText() {
            if (this.expertMode) {
                return this.flavourText.expert;
            }
            return this.flavourText.casual;
        }
    },
    data: {
        expertMode: true,

        title: "Merchandise",
        answer: "COALESCENCE",
        flavourText: {
            casual: "These <b>bands</b> named themselves after the merch they sell.",
            expert: "These musical groups named themselves after the merch they sell."
        },
        expertClues: 
        `This music group sells a video recording software. [6]
        This music group sells Internet access technology. [3]
        This music group sells a video game company. [5]
        This music group sells the energy range of unexcited electrons. [3]
        This music group sells a type of mineral formation. [5]
        This music group sells a cable tie in Japan. [3]
        This music group sells a well-known rhythm game. [3]
        This music group sells a kind of medical equipment. [7]
        This music group sells illegal goods. [3]
        This music group sells a species — a famous one is named Crash. [6]
        This music group sells a "weapon" seen in classrooms. [5]`.split("\n")
    }
})
