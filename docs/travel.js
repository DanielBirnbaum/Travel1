console.log("travel start");


let destinations = [
    { flight_num: 4, destination: "Budapest", price: 350 },
    { flight_num: 5, destination: "NewYork", price: 1200 },
    { flight_num: 6, destination: "Venice", price: 250 },
    { flight_num: 7, destination: "London", price: 550 },
    { flight_num: 8, destination: "Toronto", price: 1300 },
    { flight_num: 9, destination: "Berlen", price: 400 }
]
let orders = []
let customer = []
let destinationSearch = []

try {
    console.log("fill start")


    let tdDestination = document.querySelector(".destination tbody")
    let tbodyTemplate = "<tr><td>#flight_num</td><td>#destination</td><td>#price</td></tr>"
    let itemDestination = ''
    destinations.forEach(Item => {
        itemDestination += tbodyTemplate
            .replace('#flight_num', Item.flight_num)
            .replace('#destination', Item.destination)
            .replace('#price', Item.price)
    });
    tdDestination.innerHTML = itemDestination;
    console.log("fill end")

} catch (error) {
    console.log("fill error", error)
}


try {
    console.log("add order")


    let num_order = 0
    function send() {
        console.log("function send start")
        let name = document.getElementById('name').value;
        let passport = document.getElementById('passport').value;
        let flight_order = document.getElementById('flight_order').value;
        let passengers = document.getElementById('passengers').value;
        let getInfo = matchInfo(flight_order, passengers);
        let destination_order = getInfo[0];
        let total = getInfo[1];
        num_order++
        orders.push({ num_order, name, passport, destination_order, passengers, total })
        console.log("Order completed: ", num_order, " ", destination_order, " ", total)
        console.log(orders)
        dateBaseSearch(orders, ".display-order")
        document.getElementById('name').value = null;
        document.getElementById('passport').value = null;
        document.getElementById('flight_order').value = null;
        document.getElementById('passengers').value = null;
        console.log("function send end")
    }

} catch (error) {
    console.log("function send error", error)
}

try {
    function matchInfo(flight_order, passengers) {
        console.log("matchInfo start")
        let my_destination, my_total
        destinations.forEach(info => {
            if (info.flight_num == flight_order) {
                my_destination = info.destination
                my_total = info.price * passengers
                console.log("matchInfo end")
            }
        });
        return [my_destination, my_total]
    }
} catch (error) {
    console.log("function matchInfo error", error)

}
try {
    function dateBaseSearch(array, claas) {
        console.log("dateBaseSearch  start")
        let dbSearch = document.querySelector(claas + " tbody")
        let tbodyTemplate = "<tr><td>#num_order</td><td>#name</td><td>#passport</td><td>#destination_order</td><td>#passengers</td><td>#total</td></tr>"
        let itemSearch = ''
        array.forEach(mySearch => {
            itemSearch += tbodyTemplate
                .replace('#num_order', mySearch.num_order)
                .replace('#name', mySearch.name)
                .replace('#passport', mySearch.passport)
                .replace('#destination_order', mySearch.destination_order)
                .replace('#passengers', mySearch.passengers)
                .replace('#total', mySearch.total)

        });
        dbSearch.innerHTML = itemSearch;
        console.log("dateBaseSearch  end")
    }
} catch (error) {
    console.log("dateBaseSearch error", error)
}

try {
    function find() {
        let totalCash = 0               
        console.log("find start")
        let search = document.getElementById('your-name').value;
        orders.forEach(element => {
            if (element.name == search) {
                customer.push(element)
                totalCash += element.total;                               
                dateBaseSearch(customer, ".customer-select")
                sum(".total-customer", totalCash)

            }
        });
        customer = []
        document.getElementById('your-name').value = null;


        console.log("find end")
    }
} catch (error) {
    console.log("find error", error)

}

try {
    function select() {
        let totalPas = 0
        let totalCash = 0
        console.log("select start")
        let search = document.getElementById('destination').value;
        console.log(search)

        orders.forEach(element => {
            if (element.destination_order == search) {
                destinationSearch.push(element)
                totalPas += (element.passengers * 1);
                totalCash += element.total;
                dateBaseSearch(destinationSearch, ".agent-select")

                sum(".totel-passengers", totalPas)
                sum(".total-orders", totalCash)

            }
        });
        destinationSearch = []



        console.log("select end")
    }
} catch (error) {

}

try {
    function sum(claas, item) {
        console.log("sum  start")
        let dbSearch = document.querySelector(claas)
        let tbodyTemplate = item

        dbSearch.innerHTML = tbodyTemplate;
        console.log("sum end")
    }
} catch (error) {
    console.log("sum error", error)
}



