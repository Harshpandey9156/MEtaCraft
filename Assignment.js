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

const Cricket_Container = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(insta_id, name, age, Country, IPL) {
    // create an object to store the detail of the NFT
    const cricket = {
        insta_id: insta_id,
        name: name,
        age: age,
        Country: Country,
        IPL: IPL
    };
    // adding the NFT to cricket container
    Cricket_Container.push(cricket);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function printcricketerNFT(CricketNFT) {
    console.log("Instagram Id: " + CricketNFT.insta_id);
    console.log("Player Name: " + CricketNFT.name);
    console.log("Age: " + CricketNFT.age);
    console.log("Country: " + CricketNFT.Country);
    console.log("IPL: " + CricketNFT.IPL);
    console.log("\n");
}

// function to print the NFT collection stored in the list 
function listNFTs() {
    for (let i = 0; i < Cricket_Container.length; i++) {
        console.log((i + 1) + ".");
        printcricketerNFT(Cricket_Container[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFT: " + Cricket_Container.length);
    return Cricket_Container.length;
}

// call your functions below this line
mintNFT("@rohitsharma45", "Rohit Sharma", 36, "India", "Mumbai Indians");
mintNFT("@iamVkohli", "Virat Kohli", 34, "India", "RCB");
mintNFT("@Stevesmith", "Steve Smith", 34, "Australia", "DC");
mintNFT("@DavidWarner", "David Warner", 30, "Australia", "SRH");

// calling the NFT Function to print the NFT collection
listNFTs();
console.log();

// calling the getTotalSupply function to print the number of NFT available in the list
getTotalSupply();

