describe('Do you know your types?', () => {
	it('You should have declared a variable a with type string', () => {
		expect(typeof a).to.equal('string');
	});
	it('You should have declared a variable b with type number', () => {
		expect(typeof b).to.equal('number');
	});
	it('You should have declared a variable c with type boolean', () => {
		expect(typeof c).to.equal('boolean');
	});
});

describe('Console.log', () => {
	it('should be called once with the variable d', () => {
		expect(d).to.not.equal('undefined');
	});
});

describe('Type Coercion', () => {
	it('e should be the right value!', () => {
		expect(e).to.equal(9);
	});
	it('eA should be the right value!', () => {
		expect(eA).to.equal('54');
	});
	it('f should be the right value!', () => {
		expect(f).to.equal('32');
	});
	it('g should be the right value!', () => {
		expect(g).to.equal('189');
	});
});