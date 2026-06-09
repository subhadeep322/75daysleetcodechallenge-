/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a,b)=>a[0]-b[0]);
    let res2 = []
    let n2 = intervals.length;
    let start1= intervals[0][0];
    let end1 = intervals[0][1];

    for(let i=1;i<n2;i++){
        start2 = intervals[i][0];
        end2 = intervals[i][1];

        if(end1>=start2){
            end1 = Math.max(end1,end2);
        }
        else{
            res2.push([start1,end1]);
            start1 = start2;
            end1 = end2
        }
        
    }
    res2.push([start1,end1])

    return res2;
};