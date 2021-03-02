var greet = (name) => {
    // if name is not null
    if(name != null)  {

	// if name is an array, set name as join of elements
	if(Array.isArray(name)){
	    name = name.join(', ');
	}
	// if name is not an array and is in uppercase
	if( name == name.toUpperCase()){
	    return `HELLO ${name}`;
	}
	
	return `Hello, ${name}`
	
    } else {
	// return a default value if name is null
	return 'Hello there';
    }
    

}


module.exports = greet;
