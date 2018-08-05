const guid = counter();

function counter() {
    let index = 0;
    return function() {
        return index++;
    }
}

module.exports = guid;
