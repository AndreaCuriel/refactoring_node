const FizzbuzzService = require("./../lib/services/FizzbuzzService");

describe("FizzbussService test", () => {
    test("1) Test validations", () => {
        const explorer1 = { name: "Explorer1", score: 1 };
        const Fizzbuss1 = FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1}

        const explorer3 = { name: "Explorer3", score: 3 };
        const Fizzbuss3 = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}

        const explorer5 = { name: "Explorer5", score: 5 };
        const Fizzbuss5 = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}

        const explorer15 = { name: "Explorer15", score: 15 };
        const Fizzbuss15 = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}

        expect(Fizzbuss1.trick).toBe(1);
        expect(Fizzbuss3.trick).toBe("FIZZ");
        expect(Fizzbuss5.trick).toBe("BUZZ");
        expect(Fizzbuss15.trick).toBe("FIZZBUZZ");
    });
});
