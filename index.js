class SortedList {
  constructor() {
      this.items= []
      this.length= 0
  }

  add(num) {
    this.length = this.length+1
    this.items.push(num)
    this.items.sort((a,b)=>a-b)
  }
  get(i) {
    if(i>=this.length)
      throw new exception ("OutOfBounds")
    else
      return (this.items[i])
  }
  max() {
    if (this.length==0)
      throw new exception ("EmptySortedList")
    else
    {
      let max = this.items[0]
      this.items.forEach(element => {
        if(element>max)
          max=element
      })
      return max
    }
  }
  min() {
    if (this.length==0)
      throw new error ("EmptySortedList")
    else
      {
        let min = this.items[0]
        this.items.forEach(element=>{
          if(element<min)
            min = element
        })
        return min
      }
  }
  avg() {
    if (this.length ==0)
      throw new exception ("EmptySorteedList")
    let avg=this.sum()/this.length
    return avg
  }

  sum() {
    let sum = this.items.reduce((total,num)=>total=total+num, 0)
    return sum
  }
  
};

module.exports = SortedList;
