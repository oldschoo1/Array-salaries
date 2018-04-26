var assertTrue = (expected, actual) => {
    if (expected != actual)
        throw `Expected ${expected}, but got ${actual}`;
};

var assertArraysEquals = (ar1, ar2) => {
    assertEquals(ar1.length, ar2.length);
	for (i = 0; i < ar1.length; i++) { 
		assertEquals(ar1[i], ar2[i]);
    }
}

let text = "some text is written here";
let getWords = (txt) => {
    //...
};
assertArraysEquals(getWords(text), ["some","text","is", "written", "here"])