module.exports = {
    copiarValores,
    copiarValoresInverso,
    somarVetores,
    intercalarElementos
}
const A = [1, 2, 3, 4, 5]
const B = [10, 20, 30, 40, 50, 60]
const C = [9, 10, 43]


function copiarValores(a, b) {
    if (a.length > b.length) {
        return a
    }
    for (let i = 0; i < a.length; i++) {
        b[i] = a[i]
    }
    return b
}
//copiarValores(A, C)

function copiarValoresInverso(a, b) {
    let counter = 0

    if (a.length > b.length) {
        b = a.reverse();
        console.log(b);

        return b
    }

    for (let i = a.length - 1; i >= 0; i--) {
        b[i] = a[counter]
        counter++
    }
    console.log(b);

    return b
}
// copiarValoresInverso(B, A)

function somarVetores(a, b) {
    let r = []
    for (let i = 0; i < a.length || i < b.length; i++) {

        if (a[i] === undefined) {
            r[i] = b[i]
        }
        else if (b[i] === undefined) {
            r[i] = a[i]
        }
        else {
            r[i] = a[i] + b[i]
        }
    }
    return r
}
somarVetores([3, 4, 5, 6, 7], [1, 2])

function intercalarElementos(a, b) {
    let interleaved = []
    for (let i = 0; i < a.length || i < b.length; i++) {
        if (a[i] == undefined) {
            interleaved.push(b[i])
        }
        else if (b[i] == undefined) {
            interleaved.push(a[i])
        }
        else {
            interleaved.push(a[i] == undefined ? null : a[i])
            interleaved.push(b[i])
        }
    }
    return interleaved
}
intercalarElementos(C, B)

