/* 
 * Naive implementation of bloom filter
 * Using FNV hash function
 */

// FNV hash
// http://www.isthe.com/chongo/tech/comp/fnv/
// FNV_PRIME = 2^10 + 2^8 + 
var fnv18a = function fnv18a(str) {
  var b = 0xAD;
  // var FNV_PRIME = Math.pow(2, 10) + Math.pow(2, 8) + b;
  var FNV_PRIME = 0x5AD;
  var offset_basis = 0;
  // var FNV1_18A_INIT = 0x811c9dc5;
  // for ( var i = 0; i < str.length; ++i) {
  // 	hval ^= str.charCodeAt(i); 		// unicode
  // 	hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  // }
  // return hval >>> 0;
  var hash_bits = 18;
  hash_mod = Math.pow(2, hash_bits);
  for ( var i = 0, len = str.length; i < len; i++) {
    offset_basis = (offset_basis * FNV_PRIME) % hash_mod;
    // offset_basis ^=
  }
}

var bloomFilter = function bloomFilter() {
  // Set up parameters
  var m = 18;
  var k = 3;

  // 18 slots, 3 hash functions
  var bitVec = 0;
  // var bitMask = 0b00000000000000111111111111111111 
  var bitMask = 262143;



}