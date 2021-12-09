// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (uniqueNum, dnastrand) =>{
  return {
    specimenNum :uniqueNum,

    dna : dnastrand,

    compareDNA(pAequor){
      let DNABaseSimilarityCount=0
      for(let i = 0; i < 15; i++){
        if(this.dnastrand[i] === pAequor[i]) DNABaseSimilarityCount++
      }
      let DNABaseSimilarityPercentage = DNABaseSimilarityCount/15 * 100
      console.log(`Specimen ${this.specimenNum} and speciment${pAequor.specimenNum} have ${DNABaseSimilarityPercentage}% DNA in common`)
    },
    willLikelySurvive(){
      let CorGDNACount = this.dna.filter(dnaBase => (dnaBase === 'C' || dnaBase === 'G')).length

      if(CorGDNACount >= 9) return true //check is 60% or more  "C" or "G" DNA base count
      else return false
    }

  }
}

let pAequorStudyArr = []
let specimenNumId = 0

while( pAequorStudyArr.length < 30){
  let tempPAequor = pAequorFactory(specimenNumId, mockUpStrand())
  if(tempPAequor.willLikelySurvive()){
    pAequorStudyArr.push(tempPAequor)
    specimenNumId++
  }

}

/* Tests
console.log(pAequorFactory(1,mockUpStrand()))// Should create an object with specimen 1 and random DNA strand

console.log(pAequorFactory(1,['A', 'T', 'C', 'G','A', 'T', 'C', 'G','A', 'T', 'C', 'G','A', 'T', 'C']).willLikelySurvive())//Shoulld print false
console.log(pAequorFactory(1,['G', 'C', 'C', 'G','A', 'T', 'C', 'G','A', 'T', 'C', 'G','A', 'T', 'C']).willLikelySurvive())//Shoulld print True
console.log(pAequorFactory(1,['G', 'C', 'C', 'G','A', 'T', 'C', 'G','A', 'T', 'C', 'G','A', 'C', 'C']).willLikelySurvive())//Shoulld print True

console.log(pAequorStudyArr.length)// should return 30
console.log(pAequorStudyArr.length)
*/