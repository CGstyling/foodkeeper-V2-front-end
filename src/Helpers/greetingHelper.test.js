import greetingHelper from "./greetingHelper";

test('GreetingHelper at hour 10', () => {
    expect(greetingHelper(10)).toBe("Good morning");
});

test('GreetingHelper at hour 19', () => {
    expect(greetingHelper(19)).toBe("Good evening")
});

test('GreetingHelper at hour 13', () => {
    expect(greetingHelper(13)).toBe("Good afternoon")
});