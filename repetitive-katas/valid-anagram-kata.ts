const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const counts = new Map();

    for (let character of s) {
        counts.set(character, (counts.get(character) || 0) + 1);
    }
    for (let character of t) {
        if (! counts.has(character) || counts.get(character) === 0) {
            return false;
        }

        counts.set(character, counts.get(character) - 1)

    }
    return true;
};

console.log(isAnagram('anagram', 'nngramm'));

// (counts[character] || 0) + 1;

