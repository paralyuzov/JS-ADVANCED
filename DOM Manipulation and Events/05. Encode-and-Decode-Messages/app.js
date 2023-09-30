function encodeAndDecodeMessages() {
    const textAreaRef = Array.from(document.querySelectorAll("textarea"));
    const buttonsRef = Array.from(document.querySelectorAll("button"));
    const encodeTextArea = textAreaRef[0];
    const decodeTextArea = textAreaRef[1];
    const buttonEncode = buttonsRef[0];
    const buttonDecode = buttonsRef[1];

    buttonEncode.addEventListener("click", encode);
    buttonDecode.addEventListener("click", decode);

    function encode(e) {
        let text = encodeTextArea.value;
        let result = "";
        for (let ch of text) {
            let asciiValue = ch.charCodeAt();
            asciiValue++;
            result += String.fromCharCode(asciiValue);
        }

        decodeTextArea.value = result;
        encodeTextArea.value = "";

    }

    function decode(e) {
        let text = decodeTextArea.value;
        let result = "";
        for (let ch of text) {
            let asciiValue = ch.charCodeAt();
            asciiValue--;
            result += String.fromCharCode(asciiValue);
        }

        decodeTextArea.value = result;

    }

}