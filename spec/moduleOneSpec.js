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
	it('ans1 should have the right value', () => {
		expect(ans1).to.equal(true);
	});
	it('ans2 should have the right value', () => {
		expect(ans2).to.equal(false);
	});
	it('ans3 should have the right value', () => {
		expect(ans3).to.equal(false);
	});
	it('ans4 should have the right value', () => {
		expect(ans4).to.equal(false);
	});
	it('ans5 should have the right value', () => {
		expect(ans5).to.equal(true);
	});
	it('ans6 should have the right value', () => {
		expect(ans6).to.equal(false);
	});
	it('ans7 should have the right value', () => {
		expect(ans7).to.equal(true);
	});
	it('ans8 should have the right value', () => {
		expect(ans8).to.equal(true);
	});
	it('ans9 should have the right value', () => {
		expect(ans9).to.equal(false);
	});
	it('ans10 should have the right value', () => {
		expect(ans10).to.equal(false);
	});
	it('ans11 should have the right value', () => {
		expect(ans11).to.equal(false);
	});
	it('ans12 should have the right value', () => {
		expect(ans12).to.equal(true);
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

describe('Reassignment', () => {
	it('h should be the right value!', () => {
		expect(h).to.equal('notKevin');
	});
	it('i should be the right value!', () => {
		expect(i).to.equal('kevin');
	});
});

describe('References', () => {
	it('l should have the right value', () => {
		expect(l).to.equal(15);
	});
	it('m should have the right value', () => {
		expect(m).to.equal(15);
	});
})

describe('MathOperators', () => {
	it('x should have the correct value', () => {
		expect(x).to.equal(4104313/3450903 - 3123);
	});
});

describe('Functions', () => {
	it('Hello should be a function that console logs', () => {
		expect(hello).to.be.instanceof(Function);
	});
	it('helloPerson should be a function', () => {
		expect(helloPerson).to.be.instanceof(Function);
	});
	it('helloPerson should have a single argument called person', () => {
		var test = helloPerson.toString();
		console.log('testt isss', test);
		var open;
		var close;
		var flag1 = true;
		var flag2 = true;
		for (var i = 0; i < test.length; i++) {
			if (test[i] === '(' && flag1) {
				open = i;
				flag1 = false;
			} else if (test[i] === ')' && flag2) {
				close = i;
				flag2 = false;
			}
		}
		var params = helloPerson.toString().slice(open+1, close).split(',');
		expect(params.length).to.equal(1);
		expect(params[0]).to.equal('person');
	});
	it('add10 should be a function that takes a number and then outputs that number + 10', () => {
		var what = addTen(3);
		var what1 = addTen(142);
		expect(what).to.equal(13);
		expect(what1).to.equal(152);
	});
	it('square should be a function that takes a number and outputs that number squared', () => {
		var what = square(34);
		expect(what).to.equal(34*34);
	});
	it('n should be the right value', () => {
		expect(n).to.equal(481943*481943);
	});
	it('product should be a function that takes two numbers and outputs the product of the two number', () => {
		expect(product(3,8)).to.equal(24);
	});
	it('o should be the right value', () => {
		expect(o).to.equal(123*456)
	});
});