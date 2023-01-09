/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split('');
    magazine = magazine.split('');

    if (ransomNote.length > magazine.length) {
        return false;
    }
    const ransomNoteCount = {};
    const magazineCount = {};

    for (let i = 0; i < ransomNote.length; i ++) {
        if (!ransomNoteCount[ransomNote[i]]) {
            ransomNoteCount[ransomNote[i]] = 1;
        } else {
            ransomNoteCount[ransomNote[i]] ++;
        }
    }

    for (let i = 0; i < magazine.length; i ++) {
        if (!magazineCount[magazine[i]]) {
            magazineCount[magazine[i]] = 1;
        } else {
            magazineCount[magazine[i]] ++;
        }
    }

    for (const property in ransomNoteCount) {
        // console.log(magazineCount[property], ransomNoteCount[property]);
        if (!magazineCount[property]) {
            return false;
        }

        if (magazineCount[property] < ransomNoteCount[property]) {
            return false;
        }
    }

    return true;
};

console.log(canConstruct('abb', 'bba'));
