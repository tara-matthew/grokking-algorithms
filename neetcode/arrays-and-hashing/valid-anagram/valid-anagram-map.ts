const isAnagram = (s: string, t: string, counts:Map<any,any>= new Map()) => {
    if (s.length !== t.length) return false;

    for (let character of s) {
        counts.set(character, (counts.get(character) || 0) + 1);
    }
    console.log(counts);
    for (let character of t) {
        if (! counts.has(character) || counts.get(character) === 0) {
            return false;
        }

        counts.set(character, counts.get(character) - 1)

    }
    console.log(counts);

    return true;
};

const s: string = "anagram";
const t: string = "nagaram";

console.log(isAnagram(s,t));


