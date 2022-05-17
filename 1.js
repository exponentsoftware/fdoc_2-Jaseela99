//1

const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
  
  const createArrayofArrays =(array)=>{
    //create an array of arrays
    const newArray = []
    for(let i = 0; i < array.length; i++){
      //tolowercase() - to make the array lowercase
      //slice(0,3)- slices the array from index 0 to 2 (3 not included)
      //array[i].length - to get the length of  the current index of the array
      newArray.push([array[i].toLowerCase(),array[i].slice(0,3),array[i].length])
    }
    return newArray

  }
  console.log(createArrayofArrays(countries))