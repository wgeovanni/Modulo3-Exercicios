const transformNumbersToTime = require('./exercicio')

describe("Function transformNumbersToTime", () => {
    it("should transform value 30 to '30s'", () => {
        const result = transformNumbersToTime(30)
        const resultExpected = "30s"

        expect(result).toBe(resultExpected)
    })

    it("should transform value 350 to '5m 50s'", () => {
        const result = transformNumbersToTime(350)
        const resultExpected = "5m 50s"

        expect(result).toBe(resultExpected)
    })

    it("should transform value 3725 to '1h 2m 5s'", () => {
        const result = transformNumbersToTime(3725)
        const resultExpected = "1h 2m 5s"

        expect(result).toBe(resultExpected)
    })
})