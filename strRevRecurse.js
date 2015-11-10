var revRec = function(str, buffer) {
    buffer = buffer || str.split("");
    if (str === '') return buffer.join("");
            
    buffer[0] = str[str.length - 1];
    buffer[str.length - 1] = str[0];

    return revRec(str.split("").slice(1, str.length).join(""), buffer);
};

// test

console.log(revRec("What"));
