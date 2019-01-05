// Instructions:

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// DNAStrand ("ATTGC") # return "TAACG"
// DNAStrand ("GTAT") # return "CATA"


// My Answer: 

function DNAStrand(dna){
    let newDNA = [];
  
    for(let i = 0; i < dna.length; i++){
      if(dna[i] === "A"){
        newDNA.push("T")
      }
      else if(dna[i] === "T"){
        newDNA.push("A")
      }
      else if(dna[i] === "C"){
        newDNA.push("G")
      }
      else if(dna[i] === "G"){
        newDNA.push("C")
      }
    }
    return newDNA.toString().replace(/,/g, '')
  }
  
  let dna = "ATTGC"
  DNAStrand(dna)
  
  
  // Best Practice:
  
  // function DNAStrand(dna) {
  //   return dna.replace(/./g, function(c) {
  //     return DNAStrand.pairs[c]
  //   })
  // }
  
  // DNAStrand.pairs = {
  //   A: 'T',
  //   T: 'A',
  //   C: 'G',
  //   G: 'C',
  // }