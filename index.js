let number = +prompt('How old are you?');

function yearsOld(age) {
    if (age >= 18) {
        alert('Welcome!');
    } else {
        alert('дебил!');
    }
}

yearsOld(number);

const name = max_name('Alex', 'George', 'Michael')

function max_name(a, b, c) {
    if (a.length >= b.length && a.length >= c.length) {
        return a
    } else if (b.length >= a.length && b.length >= c.length) {
        return b
    } else {
        return c

    }
}

console.log(name);