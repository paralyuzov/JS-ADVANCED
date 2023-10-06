function requestValidator(data) {
    const methods = ["GET", "POST", "DELETE", "CONNECT"];
    const httpVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const pattern = /^[\w.]+$/g;
    const specialChar = [`<`, `>`, `\\`, `&`, `'`, `"`]
    if (!data.hasOwnProperty("method")) {
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!methods.includes(data.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!data.hasOwnProperty("uri")) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!data.uri !== "*" && !data.uri.match(pattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!data.hasOwnProperty("version")) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!data.version || !httpVersions.includes(data.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!data.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message");
    }

    for (const character of data.message) {
        if (specialChar.includes(character)) {
            throw new Error("Invalid request header: Invalid Message");
        }


    }

    return data;


}
console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}))
