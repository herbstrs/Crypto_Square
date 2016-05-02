var Crypto = function(text) {
	this.text = text;	
};

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/[\W]/g, "").toLowerCase();
};

Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));
};

Crypto.prototype.plaintextSegments = function() {
	var segments =[ ],
		npt = this.normalizePlaintext(),
		size = this.size();

	for (var i = 0; i < npt.length; i += size) {
		segments.push(npt.slice(i,i+size));
	}
		return segments;
	};
Crypto.prototype.ciphertext = function() {
	var ct = "";
		size = this.size();
		segs = this.plaintextSegments();
	
	for (var i = 0;i < size;i += 1) {
		// from 0; to size; increments
		for (var j = 0; j < segs.length; j += 1){
			ct += segs[j].charAt(i);
		}
		
	}


	return ct;
};

module.exports = Crypto;





//math.ceil(math.sqrt(str.length))
// Property is the text, 
// Square brackets indicate arrays
// find a string method for line 18?

