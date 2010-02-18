String.Inflector
================

Extends the String native with inflector methods, like pluralize and singularize.

![Screenshot](http://s3.amazonaws.com/ember/ZVuVXbBSsnE4X6UJb8BRmtZoN1aq1knT_o.png)

How to Use
----------

Pluralize

	#JS
	"cookie".pluralize(); // "cookies"
	
Singularize

	#JS
	"databases".singularize(); // "database"
	
isSingular and isPlural

	#JS
	"tools".isSingular(); // false
	"tools".isPlural();   // true