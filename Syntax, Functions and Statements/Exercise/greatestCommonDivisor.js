function gcd(n, m) {
    let int = 0;
    while (m !== 0) {
        int = n % m;
        n = m;
        m = int;
    }
    console.log(n)

}
gcd(2154, 56457)