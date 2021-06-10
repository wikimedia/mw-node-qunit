const
	/* eslint-disable camelcase */
	namespaceIDs = {
		special: -1,
		talk: 1,
		user_talk: 3,
		project: 4,
		project_talk: 5
	}; /* eslint-enable camelcase */

function Api() {}
Api.prototype.get = function () {};
Api.prototype.post = function () {};
Api.prototype.getToken = function () {};
Api.prototype.postWithToken = function () {};

const MwUri = function () {
	this.query = {};
};

MwUri.prototype.toString = function () {
	return `https://host?${Object.keys( this.query ).join( '=' )}`;
};

module.exports = function newMockMediaWiki() {
	const config = { wgNamespaceIds: namespaceIDs };
	return {
		Api: Api,
		RegExp: {
			escape: function () {}
		},
		Title: {
			newFromText: function () {},
			makeTitle: function () {}
		},
		Uri: MwUri,
		config: {
			get: function ( name, fallback ) {
				return config[ name ] || fallback;
			}
		},
		confirmCloseWindow: function () {},
		hook: function () {
			return {
				fire: function () {}
			};
		},
		experiments: {
			getBucket: function () {}
		},
		html: {
			escape: function ( str ) {
				return str.replace( /['"<>&]/g, function ( char ) {
					switch ( char ) {
						case '\'': return '&#039;';
						case '"': return '&quot;';
						case '<': return '&lt;';
						case '>': return '&gt;';
						case '&': return '&amp;';
					}
				} );
			}
		},
		jqueryMsg: {
			parser: function () {}
		},
		language: {
			convertNumber: function () {}
		},
		log: {
			deprecate: function () {},
			warn: function () {}
		},
		message: function () {
			return {
				escaped: function () {},
				text: function () {},
				parse: function () {}
			};
		},
		msg: function ( id ) { return id; },
		now: Date.now.bind( Date ),
		template: {
			get: function () {
				return {
					render: function () {}
				};
			}
		},
		user: {
			tokens: {
				get: function () {}
			},
			options: {
				get: function () {}
			},
			isAnon: function () {},
			generateRandomSessionId: function () { return Math.random().toString(); }
		},
		trackSubscribe: function () {},
		track: function () {},
		util: {
			getParamValue: function () {},
			getUrl: function ( title ) { return title; }
		},
		loader: {
			load: function () {},
			using: function () {
				return {
					then: function () {}
				};
			},
			require: function () {
				return {};
			}
		},
		requestIdleCallback: function ( fn ) {
			return fn();
		},
		storage: {
			get: function () {},
			set: function () {},
			remove: function () {}
		},
		notify: function () {}
	};
};
