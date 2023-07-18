/**
Online Stock Span

Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.
Implement the StockSpanner class:

StockSpanner() Initializes the object of the class.
int next(int price) Returns the span of the stock's price given that today's price is price.
 */

var StockSpanner = function () {
  this.stockPrices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.stockPrices.push(price);
  let stockPricesSpan = [...this.stockPrices];
  let spanCount = 0;
  while (
    stockPricesSpan.length &&
    stockPricesSpan[stockPricesSpan.length - 1] <= price
  ) {
    stockPricesSpan.pop();
    spanCount = spanCount + 1;
  }
  return spanCount;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// Your StockSpanner object will be instantiated and called as such:
const obj = new StockSpanner();
console.log(obj.next(85));
console.log(obj.next(76));
console.log(obj.next(43));
console.log(obj.next(26));
console.log(obj.next(52));
console.log(obj.next(75));
console.log(obj.next(85));
