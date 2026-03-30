class Singleton {
  constructor() {
    // If an instance already exists, return it instead of a new one
    if (Singleton.instance) {
      return Singleton.instance;
    }

    // Initialize your data
    this.data = "I am the only instance";
    
    // Store this instance for future calls
    Singleton.instance = this;
  }

  getData() {
    return this.data;
  }
}

// Usage:
const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2); // true (Both variables point to the same object)
