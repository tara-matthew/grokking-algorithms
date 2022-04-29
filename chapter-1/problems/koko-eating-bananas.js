/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // if (piles.length === 1) {
    //     return piles.length - h;
    // }
    piles.sort((a, b) => {
        return a - b;
    });

    console.log(piles, piles.length, h);

    // const range = generateRange(piles);

    let left = 0;
    let right = piles.length;
    let mid;
    let best;
    let hoursToEat;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        hoursToEat = checkHours(piles[mid], piles);
        best = mid;

        if (hoursToEat > h) {
            // too long, eat more per hour so go right
            left = mid + 1;
        }

        if (hoursToEat <= h) {
            right = mid - 1;
        }
    }

    console.log(left, right); // THIS IS THE RANGE

    // console.log(best);
    // if (hoursToEat <= h) {
        // console.log(left, right)
        // return best;
    // }

    // return left;
};

function checkHours(guess, piles) {
    let hoursTaken = 0;
    for (let i = 0; i < piles.length; i ++) {
        let division = piles[i] / guess;
        // console.log(Math.ceil(division));
        hoursTaken += Math.ceil(division);
    }

    return hoursTaken;
}

function generateRange(piles) {
    // let range = [];
    // for (let i = 1; i < 20; i ++) {
    //     range.push(i);
    // }
    //
    // return range;
    return [...Array(piles[piles.length-1]).keys()]
}

// const piles = [3,6,7,11];
// const piles = [30,11,23,4,20]
// const hours = 8
const piles = [873375536,395271806,617254718,970525912,634754347,824202576,694181619,20191396,886462834,442389139,572655464,438946009,791566709,776244944,694340852,419438893,784015530,588954527,282060288,269101141,499386849,846936808,92389214,385055341,56742915,803341674,837907634,728867715,20958651,167651719,345626668,701905050,932332403,572486583,603363649,967330688,484233747,859566856,446838995,375409782,220949961,72860128,998899684,615754807,383344277,36322529,154308670,335291837,927055440,28020467,558059248,999492426,991026255,30205761,884639109,61689648,742973721,395173120,38459914,705636911,30019578,968014413,126489328,738983100,793184186,871576545,768870427,955396670,328003949,786890382,450361695,994581348,158169007,309034664,388541713,142633427,390169457,161995664,906356894,379954831,448138536]
const hours = 943223529
// const piles = [332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184]
// const hours = 823855818

// const piles = [30,11,23,4,20];
console.log(minEatingSpeed(piles, hours));

// console.log(checkHours(4, piles));
