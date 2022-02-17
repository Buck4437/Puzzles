var app = new Vue({
    el: "#app",
    data: {
        title: "License",
        flavour: "Drivers like license plates that relate to themselves.",
        answer: "SERIALNUMBER",
        images: [
            3,4,2,3,3,
            2,2,2,2,4,
            2,2,3,1,1
        ],
        plates:`S954123
H3457
D15312
C41260
S11443
C41253
H31272
N3571241
F1055
P147312
H44444312
K3848
J35531
X1247
D1246`.split("\n")
    }
});
