

describe("fizzbazz", function() {
	
	var fizz

	beforeEach(function() {
		fizz = new FizzBuzz
	})

	it("should know when a number is divisible by three", function() {
		fizz = new FizzBuzz
		expect(fizz.isDivisibleByThree(3)).toBeTruthy()
	})

	it("should know when a number is divisible by five", function() {
		expect(fizz.isDivisibleByFive(5)).toBeTruthy()
	})

	it("should know when a number is divisible by fifteen", function() {
		expect(fizz.isDivisibleByFifteen(15)).toBeTruthy()
	})

})

