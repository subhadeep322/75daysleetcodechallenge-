/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {

    const frequencies = new Array(26).fill(0);
    
    for (let task of tasks) {
        const index = task.charCodeAt(0) - 65; 
        frequencies[index]++;
    }
    
    let maxFreq = 0;
    for (let freq of frequencies) {
        if (freq > maxFreq) {
            maxFreq = freq;
        }
    }
    
    let maxFreqCount = 0;
    for (let freq of frequencies) {
        if (freq === maxFreq) {
            maxFreqCount++;
        }
    }
    
    const intervalsRequired = (maxFreq - 1) * (n + 1) + maxFreqCount;

    return Math.max(intervalsRequired, tasks.length);
};