// 1. Basic Array Destructuring
const fruits = ["Apple", "Banana", "Mango"];

// We choose the variable names ourselves based on the position
const [first, second] = fruits; 

console.log(first);  // "Apple"
console.log(second); // "Banana"


// 2. Practical Interview Example: Fetching Repositories
async function getRepoData() {
    const response = await fetch('https://api.github.com/users/aryan098-max/repos');
    const repos = await response.json(); // This returns an ARRAY of objects

    // Destructuring the first two objects from the array
    const [firstRepo, secondRepo] = repos;

    // Now let's use OBJECT DESTRUCTURING on those specific repos
    const { name: name1 } = firstRepo;
    const { name: name2 } = secondRepo;

    console.log(name1, name2);
}

getRepoData();
