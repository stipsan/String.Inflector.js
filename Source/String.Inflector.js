/*
---

script: String.Inflector.js

description: Extends the String native with inflector methods, like pluralize and singularize.

license: MIT-style license

authors: Stian Didriksen

requires:
- core:1.2.4/String
- core:1.2.4/$util
- core:1.2.4/Array

provides: [String.Inflector]

notice: This script were originally written in MooTools 1.11; so it's not 100%, but it'll get there :)

...
*/
String.Inflector = new Class({
	
	Implements: [Options],

	options: {
		plural: [
			[/move$/i,			'moves'],
			[/sex$/i,			'sexes'],
			[/child$/i,			'children'],
			[/man$/i,			'men'],
			[/foot$/i,			'feet'],
			[/person$/i,			'people'],
			[/taxon$/i,			'taxa'],
			[/(quiz)$/i,			'$1zes'],
			[/^(ox)$/i,			'$1en'],
			[/(m|l)ouse$/i,			'$1ice'],
			[/(matr|vert|ind|suff)ix|ex$/i,	'$1ices'],
			[/(x|ch|ss|sh)$/i,		'$1es'],
			[/([^aeiouy]|qu)y$/i,		'$1ies'],
			[/(?:([^f])fe|([lr])f)$/i,	'$1$2ves'],
			[/sis$/i,			'ses'],
			[/([ti]|addend)um$/i,		'$1a'],
            		[/(alumn|formul)a$/i,		'$1ae'],
			[/(buffal|tomat|her)o$/i,	'$1oes'],
			[/(bu)s$/i,			'$1ses'],
			[/(alias|status)$/i,		'$1es'],
			[/(octop|vir)us$/i,		'$1i'],
       			[/(gen)us$/i,			'$1era'],
			[/(ax|test)is$/i,		'$1es'],
			[/s$/i,				's'],
			[/$/,				's']
		],
		singular: [
			[/cookies$/i, 			'cookie'],
			[/moves$/i, 			'move'],
			[/sexes$/i, 			'sex'],
			[/children$/i, 			'child'],
			[/men$/i, 			'man'],
			[/feet$/i, 			'foot'],
			[/people$/i, 			'person'],
			[/taxa$/i, 			'taxon'],
			[/databases$/i,			'database'],
			[/(quiz)zes$/i, 		'$1'],
			[/(matr|suff)ices$/i, 		'$1ix'],
			[/(vert|ind)ices$/i,		'$1ex'],
			[/^(ox)en/i, 			'$1'],
			[/(alias|status)es$/i,		'$1'],
			[/(tomato|hero|buffalo)es$/i,	'$1'],
			[/([octop|vir])i$/i,		'$1us'],
			[/(gen)era$/i,			'$1us'],
			[/(cris|ax|test)es$/i,		'$1is'],
			[/(shoe)s$/i, 			'$1'],
			[/(o)es$/i, 			'$1'],
			[/(bus)es$/i, 			'$1'],
			[/([m|l])ice$/i, 		'$1ouse'],
			[/(x|ch|ss|sh)es$/i,		'$1'],
			[/(m)ovies$/i,			'$1ovie'],
			[/(s)eries$/i,			'$1eries'],
			[/([^aeiouy]|qu)ies$/i,		'$1y'],
			[/([lr])ves$/i,			'$1f'],
			[/(tive)s$/i,			'$1'],
			[/(hive)s$/i,			'$1'],
			[/([^f])ves$/i, 		'$1fe'],
			[/(^analy)ses$/i, 		'$1sis'],
			[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, '$1\2sis'],
			[/([ti]|addend)a$/i,		'$1um'],
			[/(alumn|formul)ae$/i,		'$1a'],
			[/(n)ews$/i, 			'$1ews'],
			[/(.*)s$/i, 			'$1']
		],
		countable: [
			'aircraft',
			'cannon',
			'deer',
			'equipment',
			'fish',
			'information',
			'money',
			'moose',
			'rice',
			'series',
			'sheep',
			'species',
			'swine'
		]
	},
  
	initialize: function(options){
		this.setOptions(options);
	},
	
	pluralize: function(word) {
		var result = word;
    	
    	this.options.plural.some(function(plural){
			if (plural[0].test(word)) return result = word.replace(plural[0], plural[1]);
		});
		
		this.options.countable.some(function(countable){
		  if (word == countable) return result = countable;
		});
		
		return result;
	},
	
	singularize: function(word) {
		var result = word;

		this.options.singular.some(function(singular){
			if (singular[0].test(word)) return result = word.replace(singular[0], singular[1]);
		});
		
		this.options.countable.some(function(countable){
		  if (word == countable) return result = countable;
		});
		
		return result;
	},
	
	isSingular: function(singular) {
		return this.singularize(this.pluralize(singular)).toLowerCase() == singular.toLowerCase();
	},
	
	isPlural: function(plural) {
		return this.pluralize(this.singularize(plural)).toLowerCase() == plural.toLowerCase();
	}
});

String.implement({
	pluralize: function(options) {
		inflector = new String.Inflector(options);
		return inflector.pluralize(this);
	},
	
	singularize: function(options) {
		inflector = new String.Inflector(options);
		return inflector.singularize(this);
	},
	
	isSingular: function(options) {
		inflector = new String.Inflector(options);
		return inflector.isSingular(this);
	},
	
	isPlural: function(options) {
		inflector = new String.Inflector(options);
		return inflector.isPlural(this);
	}
});