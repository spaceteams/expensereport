const {printReport} = require("./Expenses");

const output = [];
process.stdout.write = jest
    .fn()
    .mockImplementation((message) => output.push(message));

describe("Expenses", () => {
    test("empty array", () => {
        printReport([]);
        expect(output).toMatchInlineSnapshot(`
      Array [
        "Expenses 2023-04-14
      ",
        "Meal expenses: 0",
        "Total expenses: 0",
      ]
    `);
    });

    test("approval test", () => {
        printReport([
            {type: 1, amount: 33.45},
            {type: 1, amount: 1033.45},
            {type: 2, amount: 1033.45},
        ])
    })
});
