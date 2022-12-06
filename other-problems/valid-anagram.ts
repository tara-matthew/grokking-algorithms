const isAnagram = function(s, t) {
    return s.split("").sort().toString() === t.split("").sort().toString();
};

console.log(isAnagram('anagram', 'nagaram'));
