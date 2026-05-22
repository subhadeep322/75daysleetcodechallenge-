/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = [];
    
    for (let num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.heap.length < this.k) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    } else if (val > this.heap[0]) {
        this.heap[0] = val;
        this.bubbleDown(0);
    }
    
    return this.heap[0];
};

KthLargest.prototype.bubbleUp = function(index) {
    while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        
        if (this.heap[index] < this.heap[parentIndex]) {
            // Swap
            let temp = this.heap[index];
            this.heap[index] = this.heap[parentIndex];
            this.heap[parentIndex] = temp;
            
            index = parentIndex;
        } else {
            break;
        }
    }
};


KthLargest.prototype.bubbleDown = function(index) {
    let length = this.heap.length;
    
    while (true) {
        let leftChild = index * 2 + 1;
        let rightChild = index * 2 + 2;
        let smallest = index;

        if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }
        
        if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }

        if (smallest !== index) {
            let temp = this.heap[index];
            this.heap[index] = this.heap[smallest];
            this.heap[smallest] = temp;

            index = smallest;
        } else {
            break;
        }
    }
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */