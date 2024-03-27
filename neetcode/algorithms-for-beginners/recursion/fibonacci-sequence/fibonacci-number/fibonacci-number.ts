const fibonacciNumber = (n: number): number => {
    if (n <= 1) return n;

    return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

// TODO memoization

console.log(fibonacciNumber(7));
