var MyQueue = function() {
    this.stackIn = [];
    this.stackOut = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // If stackOut is empty, move everything from stackIn to stackOut
    if (this.stackOut.length === 0) {
        while (this.stackIn.length > 0) {
            this.stackOut.push(this.stackIn.pop());
        }
    }
    return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // If stackOut is empty, move everything from stackIn to stackOut
    if (this.stackOut.length === 0) {
        while (this.stackIn.length > 0) {
            this.stackOut.push(this.stackIn.pop());
        }
    }
    // Return the top of stackOut without removing it
    return this.stackOut[this.stackOut.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
};

