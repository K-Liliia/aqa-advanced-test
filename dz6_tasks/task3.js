let checkOrder = (available, ordered) => {
    switch(true){
        case (available < ordered): {
            return console.log("Your order is too large, we don’t have enough goods.")
        }
        case (ordered == 0): {
            return console.log("Your order is empty.")
        }
        case (available >= ordered): {
            return console.log("Your order is accepted")
        }
    }
}

//checkOrder(0, 0);
//checkOrder(12, 0);
//checkOrder(12, 12);
//checkOrder(14, 1);
//checkOrder(7, 10);
checkOrder(1, 2);
