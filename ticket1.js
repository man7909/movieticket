function calculateTicketPrice(price, quantity) {
    const totalPrice = price * quantity;
    return "Total Ticket Price = " + totalPrice;
}

module.exports = calculateTicketPrice;