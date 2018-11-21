// Instructions:

// Create a method is_uppercase() to see whether the string is ALL CAPS


//My Answer:

String.prototype.isUpperCase = function() {
    if(this == this.toUpperCase()) {
     return true;
    }
    if(this !== this.toUpperCase()){
     return false;
    }
  }
  
  
  // Best Practice:
  
  // String.prototype.isUpperCase = function() {
  //   return this.toUpperCase() === this.toString();
  // }