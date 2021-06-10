const a = 500,
	mw = mediaWiki;

mw.testNamespace = {
	add( x, y ) {
		return x + y;
	},
	getA() {
		return a;
	}
};
