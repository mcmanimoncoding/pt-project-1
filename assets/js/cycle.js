
/**
 * Cycle takes a an array as a list of items, and every time `get()` is called on the class, will return the next cycled item
 * 
 * @param  {Array} list Array of items to cycle over
 * @return {Cycle} Returns a new Cycle object from the given list of items
 */
class Cycle {
    constructor(list) {
        if (list.length <= 0) throw new Error("The given array cannot be empty");
        this.list = list;
        this.index = list.length;
        this.get = this.get.bind(this);
    }

    /**
     * Gives you the next item in the cycled array
     * @return Returns the next item from the given array list to cycle
     */
    get() {
        this.index++;
        if (this.index >= this.list.length) this.index = 0;
        return this.list[this.index];
    }
}