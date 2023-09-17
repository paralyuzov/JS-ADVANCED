function sortArrayByTwoCritiria(arr) {

    const result = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(result.join("\n"))

}
sortArrayByTwoCritiria(['test',
    'Deny',
    'omen',
    'Default']
)