/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let n = nums.length;
    let neg = [];
    let pos = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            neg.push(nums[i]);
        } else {
            pos.push(nums[i])
        }
    }
    if (neg.length === 0) {
        for (let i = 0; i < pos.length; i++) {
            pos[i] *= pos[i];
        }
        return pos;
    }
    if (pos.length === 0) {
        for (let i = 0; i < neg.length; i++) {
            neg[i] *= neg[i];
        }
        neg.reverse();
        return neg;
    }
    let i = 0;
    let j = 0;
    let idx = 0;
    let n1 = pos.length;
    let m = neg.length;
    let res = new Array(n1 + m);

    for (let i = 0; i < m; i++) {
        neg[i] *= neg[i];
    }
    neg.reverse();

    for (let i = 0; i < n1; i++) {
        pos[i] *= pos[i];
    }
    while (i < n1 && j < m) {
        if (neg[j] <= pos[i]) {
            res[idx++] = neg[j++]  // means res[idx] = neg[i] // then, idx++ and i++
        } else {
            res[idx++] = pos[i++];
        }
    }

    while (i < n1) {
        res[idx++] = pos[i++]
    }
    while (j < m) {
        res[idx++] = neg[j++]
    }

    return res;
};