const {sum,stringLength,reverseSring, calculator, capitalize} = require('./functions');


test('length of "ASHU" is 4', () => {
    expect(stringLength('Ashu')).toBe(4)
});
// test('length of "Pneumonoultramicroscopicsilicovolcanoconiosis" is 45', () => {
//     expect(stringLength('Pneumonoultramicroscopicsilicovolcanoconiosis')).toMatch("String does not met expectations")
// });//!IT IS MEANT TO BE FAILED

test('reverse of ASHU IS UHSA', () => {
    expect(reverseSring('ASHU')).toMatch('UHSA')
})
test('reverse of ISHU IS UHSI', () => {
    expect(reverseSring('ISHU')).toMatch('UHSI')
})



const Calculator = new calculator(2, 2);

describe('calculations',()=>{
    test('adding 2 + 2 is 4',()=>{
        expect(Calculator.add()).toBe(4)
    })
    test('subtract 2 - 2 is 0',()=>{
        expect(Calculator.subtract()).toBe(0)
    })
    test('multiply 2 * 2 is 4',()=>{
        expect(Calculator.multiply()).toBe(4)
    })
    test('divide 2/2 is 1',()=>{
        expect(Calculator.divide()).toBe(1)
    })
})

test('Capitalize "ishu"',()=>{
    expect(capitalize("ishu")).toMatch('Ishu')
})