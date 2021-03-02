var greet = require('./greet');


// Greet a name
test('Greet Elizabeth', () => {
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
});


// Handle null value
test('Handle null value', () => {
    expect(greet()).toBe('Hello there');
});

// Shout name

test('Shout when uppercase', () => {
    expect(greet('JOSE')).toBe('HELLO JOSE');
});


// Handle two names as input
test('Handle two names as input', () => {
    expect(greet(['Jose', 'Pep'])).toBe('Hello, Jose, Pep');
});

// Handle n names as input

test('Handle n names as input', () => {
    expect(greet(['Alex','Arsene','Jose','Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane')
})


