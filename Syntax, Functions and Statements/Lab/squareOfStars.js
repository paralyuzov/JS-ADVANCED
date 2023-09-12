function squareOfStars(n) {
    const star = "* "
    for (let i = 0; i < n; i++) {
        console.log(`${star.repeat(n)}`);
    }

}
squareOfStars(5)