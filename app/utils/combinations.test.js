const combinations = require("./combinations")
// @ponicode
describe("combinations.k_combinations", () => {
    test("0", () => {
        let callFunction = () => {
            combinations.k_combinations({ length: 0 }, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            combinations.k_combinations({ length: 64 }, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            combinations.k_combinations({ length: 10 }, 520)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            combinations.k_combinations({ length: -1 }, 0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            combinations.k_combinations({ length: 10 }, 410)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            combinations.k_combinations(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
