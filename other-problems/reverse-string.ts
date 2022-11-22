const reverseString = (s)  => {
    for (let i = 0; i < Math.floor((s.length) / 2); i++) {
        let count = 0;
        while (count < 1) {
            let j = s.length - i - 1;
            [s[i], s[j]] = [s[j], s[i]];
            count ++;

        }
    }

    return s;
};

const string = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"];
console.log(reverseString(string));
