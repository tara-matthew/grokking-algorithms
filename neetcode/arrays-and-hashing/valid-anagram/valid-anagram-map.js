var isAnagram = function (s, t, counts) {
    if (counts === void 0) { counts = new Map(); }
    if (s.length !== t.length)
        return false;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var character = s_1[_i];
        counts.set(character, (counts.get(character) || 0) + 1);
    }
    console.log(counts);
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var character = t_1[_a];
        if (!counts.has(character) || counts.get(character) === 0) {
            return false;
        }
        counts.set(character, counts.get(character) - 1);
    }
    console.log(counts);
    return true;
};
var s = "anagram";
var t = "nagaram";
console.log(isAnagram(s, t));
