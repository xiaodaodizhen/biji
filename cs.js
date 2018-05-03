
console.log(Array(3).fill(5));

console.log(Array.from({ 0: 1, 1: 5, length: 2 }));
console.log(Array.from('sdfdsfdsfdsfsdf'));
console.log(Array.of(4));

function Promise(executor) {
  let self = this;
  self.status = "pending";
  self.value = undefined;
  self.reason = undefined;
  function resolve(value) {
    if (self.status === "pending") {
      self.status = "resolved";
      self.value = value;
    }
  }
  function reject(reason) {
    if (self.status === "pending") {
      self.status = "rejected";
      self.reason = reason;
    }
  }
  executor(resolve, reject);
}
Promise.prototype.then = function (onFufiled, onRejected) {
  let self = this;
  if (self.status === "resolved") {
    onFufiled(self.value);
  }
  if (self.status === "rejected") {
    onRejected(self.reasonF);
  }
};


