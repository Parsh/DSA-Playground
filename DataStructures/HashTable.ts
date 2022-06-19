class HashTable {
    public keyMap: Array<Array<Array<string>>>
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    /**
     * A simple hash function implementation(not cryptographically secure)
     * @param  {} key
     */
    private hash = (key: string) => {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }

    /**
     * Sets the value against the supplied key
     * Note: In order to avoid collision, we'll be using separate chaining(having multiple elements at the same index using an array)
     * @param  {string} key
     * @param  {string} value
     */
    public set = (key: string ,value: string) => {
      let index = this.hash(key);
      if(!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }

    /**
     * Gets the value correponding to the supplied key
     * @param  {string} key
     */
    public get = (key: string) => {
      let index = this.hash(key);
      if(this.keyMap[index]){
        for(let i = 0; i < this.keyMap[index].length; i++){
          if(this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1]
          }
        }
      }
      return undefined;
    }

    /**
     * Gets all the keys in the hash table
     */
    public keys = () => {
      let keysArr: string[] = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!keysArr.includes(this.keyMap[i][j][0])){
              keysArr.push(this.keyMap[i][j][0])
            }
          }
        }
      }
      return keysArr;
    }

    /**
     * Gets all the values from the hash table
     */
    public values = () => {
      let valuesArr: string[] = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!valuesArr.includes(this.keyMap[i][j][1])){
              valuesArr.push(this.keyMap[i][j][1])
            }
          }
        }
      }
      return valuesArr;
    }
  }
  
  // SMOKE TEST
//   let ht = new HashTable(17);
//   ht.set("maroon","#800000")
//   ht.set("yellow","#FFFF00")
//   ht.set("olive","#808000")
//   ht.set("salmon","#FA8072")
//   ht.set("lightcoral","#F08080")
//   ht.set("mediumvioletred","#C71585")
//   ht.set("plum","#DDA0DD")
//   ht.set("purple","#DDA0DD")
//   ht.set("violet","#DDA0DD")
  
//   ht.keys().forEach(function(key){
//     console.log(ht.get(key));
//   })