var app = new Vue({
    el: "#app",
    data: {
        title: "License",
        flavour: "Drivers like license plates that relate to themselves.",
        answer: "SERIALNUMBER",
        images: [
            2,4,1,2,2,
            4,2,3,3,2,
            2,3,3,2,2
        ],
        plates:`45731215K
37H3123U44
P1473
812455
D123444
F145H116H
F1047
571N6
1U448312
D12460N
044364
C08417
73135C0P3
X1247
6124V177`.split("\n")
    }
});
