describe('Prompt and Confirm', () => {
	it('boolean should have the right value', () => {
		expect(boolean).to.equal(true);
	});
	it('text should have the right value', () => {
		expect(text).to.equal("He's the best ever!");
	});
})

describe('Conditionals', () => {
	it("smallMedOrLarge should return 'the number is small' if the number is less than 10 and 'the number is big' otherwise", () => {
		var what = smallMedOrLarge(9);
		console.log('-----0',what);
		var what2 = smallMedOrLarge(10);
		console.log(what2);
		var what3 = smallMedOrLarge(101);
		console.log(what3);
		expect(what).to.equal('the number is small');
		expect(what2).to.equal('the number is medium');
		expect(what3).to.equal('the number is large');
	})
});

describe('Loops', () => {
	it('sum should sum up 1 + 2 + 4 up to that number', () => {
		var what = sum(8);
		expect(what).to.equal(1+2+3+4+5+6+7+8);
	});
});

describe('Objects and arrays', () => {
	it('range should give you an array ranging from start to end',() => {
		var what = range(2, 5);
		expect(what).to.deep.equal([2,3,4,5]);
	});
	it('sumArr should return you the sum of all numbers in the array', () => {
		var what = sumArray(range(1,5));
		expect(what).to.equal(1+2+3+4+5);
	});
	it('bunny should have the right properties with the right values', () => {
		expect(bunny.color).to.equal('white');
		expect(bunny.eyeColor).to.equal('black');
		expect(bunny.diet).to.equal('carrots');
	});
	it('numers should be iterated and each value should be increased by 5', () => {
		expect(numbers.num1).to.equal(6);
		expect(numbers.num2).to.equal(7);
		expect(numbers.num3).to.equal(8);
	});
}); 

describe('Closures', () => {
	
});
describe('Nosebleed', () => {
	it('tableFor should be a function that returns a table for a given event', () => {
		var what = tableFor('pizza', JOURNAL);
		console.log(JOURNAL);
		console.log('what isss', what);
		expect(what).to.deep.equal([76,9,4,1]);
		var what2 = tableFor('weekend', JOURNAL);
		expect(what2).to.deep.equal([58,27,2,3]);
	});
	it('correlations should be an object with events as the keys and the correlations as values', () => {
		var what = gatherCorrelations(JOURNAL);
		console.log('what isss', what);
		expect(what.lasagna).to.equal(0.08084520834544433);
		expect(what.beer).to.equal(-0.05230657809659414);
		expect(what.cycling).to.equal(-0.08084520834544433);
	});
});

