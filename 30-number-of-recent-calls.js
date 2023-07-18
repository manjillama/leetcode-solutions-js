var RecentCounter = function () {
  this.stream = [];
};
RecentCounter.prototype.ping = function (t) {
  this.stream.push(t); // Everytime we recieve a ping, add the time to the stream of integers
  /*
  To exclude the times that are not included within the range of t - 3000,
  we remove the first element from the stream while it is less than the calculated range 
  */
  while (this.stream[0] < t - 3000) {
    this.stream.shift();
  }
  // When the loop ends the length of calls will be the length of the array
  return this.stream.length;
};

const recentCounter = new RecentCounter();
recentCounter.ping(1); // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100); // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001); // requests = [1, 100, 3001], range is [1,3001], return 3
console.log(recentCounter.ping(3002));
