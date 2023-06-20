var app = new Vue({
    el: "#app",
    data: {
        title: "Line",
        answer: "CARVING TOOL",
        text: `Start at the station that is also on the Sub-Central line. Towards the direction with increasing station number, ride until the next stop has a smaller number than the current stop. Ride 1 stop along the same direction. Read the first letter.
        Start at the station closest to Sherlock Holmes' residence. Ride 2 stops. Exit the train. Enter the train. Ride to the terminal. Read the second letter.
        Start at the station that starts with "Ø". Ride 1 stop such that the next stop is an intersection. Ride 15 stops along the same direction. Read the second letter.
        Start at the station in Ukraine constructed in 1927-1932. Ride 15 stops. Read the fourth letter.
        Start at the Ginza station. Ride 3 stops to a major interchange. Read the second letter.
        Start at the busiest station. Alight at platform with number greater than 10. Ride 15 stops. Read the third letter.
        Start at the busiest station. Ride 1 stop to a station that starts with a T.  Exit the train. Enter the train. Ride 38 stops. Read the ninth letter.
        Start at the station whose translated name is "Avenue of the Americas". Ride 14 stops. Read the 6th letter.
        Start at the busiest station in Korea. Ride 11 stops. Exit the train. Enter the train. Ride to the terminal. Read the sixth letter.
        Start at the station in Thailand with a prime number in its name. Ride 1 stop. Exit the train. Enter the train. Ride to the terminal. Read the fifth letter.
        Start at the station with Belarusian themes. Ride 36 stops. Read the third letter.`.split("\n").map(x => x.trim())
    }
})
