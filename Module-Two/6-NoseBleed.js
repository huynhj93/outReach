// 1. Alex has been cursed with getting bloody noses quite often. In order to 
//    track the source of his nose bleeds, he keeps a journal of what he does and what he eats.

var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"noseBleed":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"noseBleed":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"noseBleed":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"noseBleed":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"noseBleed":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"noseBleed":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"noseBleed":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"noseBleed":false},
  {"events":["cauliflower","brushed teeth","work"],"noseBleed":false},
  {"events":["pizza","brushed teeth","cycling","work"],"noseBleed":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"noseBleed":false},
  {"events":["brushed teeth","weekend","touched tree"],"noseBleed":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"noseBleed":false},
  {"events":["spaghetti","brushed teeth","work"],"noseBleed":false},
  {"events":["brushed teeth","computer","work"],"noseBleed":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"noseBleed":false},
  {"events":["carrot","brushed teeth","running","work"],"noseBleed":false},
  {"events":["brushed teeth","work"],"noseBleed":false},
  {"events":["cauliflower","reading","weekend"],"noseBleed":false},
  {"events":["bread","brushed teeth","weekend"],"noseBleed":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"noseBleed":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"noseBleed":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"noseBleed":false},
  {"events":["spaghetti","nachos","work"],"noseBleed":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"noseBleed":false},
  {"events":["spaghetti","hot cheetos","computer","weekend"],"noseBleed":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"noseBleed":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"noseBleed":false},
  {"events":["hot cheetos","brushed teeth","running","work"],"noseBleed":false},
  {"events":["potatoes","exercise","work"],"noseBleed":false},
  {"events":["pizza","ice cream","computer","work"],"noseBleed":false},
  {"events":["lasagna","ice cream","work"],"noseBleed":false},
  {"events":["cauliflower","candy","reading","weekend"],"noseBleed":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"noseBleed":false},
  {"events":["potatoes","brushed teeth","work"],"noseBleed":false},
  {"events":["carrot","work"],"noseBleed":false},
  {"events":["pizza","beer","work","dentist"],"noseBleed":false},
  {"events":["lasagna","pudding","cycling","work"],"noseBleed":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"noseBleed":false},
  {"events":["spaghetti","pudding","television","weekend"],"noseBleed":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"noseBleed":false},
  {"events":["lasagna","hot cheetos","work"],"noseBleed":true},
  {"events":["pizza","work"],"noseBleed":false},
  {"events":["potatoes","exercise","work"],"noseBleed":false},
  {"events":["brushed teeth","exercise","work"],"noseBleed":false},
  {"events":["spaghetti","brushed teeth","television","work"],"noseBleed":false},
  {"events":["pizza","cycling","weekend"],"noseBleed":false},
  {"events":["carrot","brushed teeth","weekend"],"noseBleed":false},
  {"events":["carrot","beer","brushed teeth","work"],"noseBleed":false},
  {"events":["pizza","hot cheetos","candy","work"],"noseBleed":true},
  {"events":["carrot","hot cheetos","brushed teeth","reading","work"],"noseBleed":false},
  {"events":["potatoes","hot cheetos","brushed teeth","work"],"noseBleed":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"noseBleed":false},
  {"events":["pizza","hot cheetos","brushed teeth","television","weekend"],"noseBleed":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"noseBleed":false},
  {"events":["cauliflower","hot cheetos","brushed teeth","computer","work","touched tree"],"noseBleed":false},
  {"events":["lettuce","brushed teeth","television","work"],"noseBleed":false},
  {"events":["potatoes","brushed teeth","computer","work"],"noseBleed":false},
  {"events":["bread","candy","work"],"noseBleed":false},
  {"events":["potatoes","nachos","work"],"noseBleed":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"noseBleed":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"noseBleed":false},
  {"events":["brussel sprouts","running","work"],"noseBleed":false},
  {"events":["brushed teeth","work"],"noseBleed":false},
  {"events":["lettuce","brushed teeth","running","work"],"noseBleed":false},
  {"events":["candy","brushed teeth","work"],"noseBleed":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"noseBleed":false},
  {"events":["bread","brushed teeth","weekend"],"noseBleed":false},
  {"events":["cauliflower","brushed teeth","weekend"],"noseBleed":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"noseBleed":false},
  {"events":["carrot","pudding","brushed teeth","work"],"noseBleed":false},
  {"events":["lettuce","brushed teeth","work"],"noseBleed":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"noseBleed":false},
  {"events":["pizza","brushed teeth","work"],"noseBleed":false},
  {"events":["spaghetti","hot cheetos","exercise","weekend"],"noseBleed":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"noseBleed":false},
  {"events":["brushed teeth","running","work"],"noseBleed":false},
  {"events":["lettuce","hot cheetos","brushed teeth","work","touched tree"],"noseBleed":false},
  {"events":["lasagna","brushed teeth","television","work"],"noseBleed":false},
  {"events":["cauliflower","brushed teeth","running","work"],"noseBleed":false},
  {"events":["carrot","brushed teeth","running","work"],"noseBleed":false},
  {"events":["carrot","reading","weekend"],"noseBleed":false},
  {"events":["carrot","hot cheetos","reading","weekend"],"noseBleed":true},
  {"events":["potatoes","brushed teeth","running","work"],"noseBleed":false},
  {"events":["lasagna","ice cream","work","touched tree"],"noseBleed":false},
  {"events":["cauliflower","hot cheetos","brushed teeth","cycling","work"],"noseBleed":false},
  {"events":["pizza","brushed teeth","running","work"],"noseBleed":false},
  {"events":["lettuce","brushed teeth","work"],"noseBleed":false},
  {"events":["bread","brushed teeth","television","weekend"],"noseBleed":false},
  {"events":["cauliflower","hot cheetos","brushed teeth","weekend"],"noseBleed":false}
];


// To measure correlation between a certain event, say eating pizza, to getting a nosebleed,
// we need a table like this:

//     __________________________
//	  |No nosebleed	|No nosebleed |
//	  |No pizza	  	|Yes pizza	  |
//    |		76		    |	   9        |
//	  |_____________|____________ |
//    |Yes nosebleed|Yes nosebleed|
//    |	No pizza    |  Yes pizza  |
//    |		4		      |		1	        |	
//    |_____________|____________ |

//   What this table is telling us, is that there are 79 times in the journal when
//   Alex didn't eat a pizza, and he didn't get a nosebleed, 9 times when Alex ate a pizza,
//   but didn't get a nose bleed, 4 times when Alex got a nosebleed, but didn't have pizza,
//   and one time when alex got a nosebleed and ate a pizza. Let's say that we are able to 
//   represent this table as a 4 element array: [76, 9, 4, 1]. We can use this array to 
//   calculate what we call 'correlation' : 1 * 76 - 4 * 9 / sqrt((4+1)*(76+9)*(9+1)*(76+4))
//   in other words, we need a function that computes correlation:
function correlation (table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(correlation[76, 9 , 4, 1]) // -> 0.0685994

// 1. Fill out the rest of the code for the following function. The function should return
//    the table for the given event. For example, given the event "pizza",
//    and the journal Alex possess, the function should return [76, 9 ,4, 1].
function tableFor(event, journal) {

}
tableFor('pizza', JOURNAL); // should equal [76, 9, 4, 1]


// The following code uses an object as a map. A possible way to store all correlations
// is by having each key be the event, and the value as the correlation. We will use 
// the same concept later in problem 2, but for now, just analyze the code to see 
// what it's doing.

var map = {};
function storePhi(event, phi) {
	map[event] = phi;
}

storePhi('pizza', 0.069);
console.log('pizza' in map); // ->true;
console.log(map['pizza']);  // -> 0.069;

//  2. Fill out the following function that returns a map of all correlations. In other words,
//  create a variable called correlations inside the function body that has correlation 
//  coefficients for all the event types that are seen in the journal. You'll need your
//  function tableFor.

function gatherCorrelations(journal) {
	var correlations = {};   // Fill out this object so that it has correlations for all events;
	// Start writing code here;
	return correlations;
}

var correlations = gatherCorrelations(JOURNAL);

// 3. Loop through correlations and console log the event and it's correlation value.
//    You'll find that most correlations seem to lie close to zero. 

for (event in correlations) {
	//console log each correlation
}

//4. Change the code above so that you only console log when the correlations is greater than
//   0.1 or less than -0.1
//   There are two correlations that are stronger than the others. Eating hot cheetos should have
//   a strong positive effect on getting a nose bleed, whereas brushing teeth has a negative effect.

//5. Finally, loop through the journal. On any given day where Alex ate hot cheetos, but didn't
//   brush his teeth, add an entry called "hot cheetos no brushed teeth". Find the correlation
//   for this new entry.