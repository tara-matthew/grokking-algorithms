const climbStairs = (n: number, memo: any): number => {
    memo = memo || {};

    if (memo[n]) return memo[n];

    if (n <= 2) {
        return n;
    }

    return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
}

console.log(climbStairs(44, {}));
