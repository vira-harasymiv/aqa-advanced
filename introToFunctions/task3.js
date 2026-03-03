function checkOrder(available, ordered){
    if (ordered === 0){
        console.log("Your order is empty");
        return;
    }

    if (ordered > available){
        console.log("Your order is too large, we don’t have enough goods.");
        return;
    }

        console.log("Your order is accepted, we will contact you.");
    
}

(checkOrder(10, 0)); // Your order is empty
(checkOrder(10, 15)); // Your order is too large, we don’t have enough goods.
(checkOrder(10, 10)); // Your order is accepted, we will contact you. 