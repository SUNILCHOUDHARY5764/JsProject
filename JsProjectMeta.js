/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,uid,_class,subject) {
  //Students data as a metadata
  const nftMetadata = {
    name: name,
    uid: uid,
    class: _class,
    subject: subject
  }
  NFTs.push(nftMetadata)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(var i = 0; i < NFTs.length; i++){
    console.log("Name : "+NFTs[i].name+"\tUID : "+NFTs[i].uid+"\tClass : "+NFTs[i].class+"\tSubject : "+NFTs[i].subject)
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nNumber of minted NFTs : "+NFTs.length)
}

// call your functions below this line
mintNFT("Sunil","23PCM2332","12TH","PCM") //PCM = Physics, Chemistry & Maths
mintNFT("Ramesh","23PCB4232","12TH","PCB") //PCB = Physics, Chemistry & Biology
mintNFT("Manisha","24PCB4321","11TH","PCB")
mintNFT("Lalita","24PCM2314","11TH","PCMB") //PCMB = Physics, Chemistry,Maths & Biology


listNFTs()


getTotalSupply()