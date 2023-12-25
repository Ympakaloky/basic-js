const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value = '(  )') {
    this.result.push( `( ${value} )` );
    return this;
  },

  removeLink(position) {
    if (Number.isNaN(position) || position > this.result.length || position <= 0 || !Number.isInteger(position)){
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
    
    this.result.splice(position-1, 1);
    return this;
  },
  
  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    const finish = this.result.join('~~');
    this.result = [];
    return finish;
  }
};

module.exports = {
  chainMaker
};
