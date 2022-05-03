/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
    piles.sort((a, b) => {
        return a - b;
    });

    let left = 0;
    let right = piles[piles.length - 1];
    let mid;
    let best;
    let hoursToEat;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        hoursToEat = checkHours(mid, piles);
        best = mid;

        if (hoursToEat > h) {
            // too long, eat more per hour so go right
            left = mid + 1;
        }

        if (hoursToEat <= h) {
            right = mid - 1;
        }
    }

    if (hoursToEat <= h) {
        return best;
    }

    return left;
};

function checkHours(guess, piles) {
    let hoursTaken = 0;
    for (let i = 0; i < piles.length; i ++) {
        let division = piles[i] / guess;
        hoursTaken += Math.ceil(division);
    }

    return hoursTaken;
}

// const piles = [3,6,7,11];
// const piles = [30,11,23,4,20]
// const hours = 8
const piles = [873375536,395271806,617254718,970525912,634754347,824202576,694181619,20191396,886462834,442389139,572655464,438946009,791566709,776244944,694340852,419438893,784015530,588954527,282060288,269101141,499386849,846936808,92389214,385055341,56742915,803341674,837907634,728867715,20958651,167651719,345626668,701905050,932332403,572486583,603363649,967330688,484233747,859566856,446838995,375409782,220949961,72860128,998899684,615754807,383344277,36322529,154308670,335291837,927055440,28020467,558059248,999492426,991026255,30205761,884639109,61689648,742973721,395173120,38459914,705636911,30019578,968014413,126489328,738983100,793184186,871576545,768870427,955396670,328003949,786890382,450361695,994581348,158169007,309034664,388541713,142633427,390169457,161995664,906356894,379954831,448138536]
const hours = 943223529

console.log(minEatingSpeed(piles, hours));