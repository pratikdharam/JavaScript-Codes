// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (nums) => {
//     return nums > 4;
// } )

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) =>  num > 4 )

// console.log(newNums);

// const Nums = []

// myNums.forEach( (item) => {
//     if(item > 4) {
//         Nums.push(item)
//     }
// } )

// console.log(Nums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //find books that have genre fiction

  let fictionBooks = books.filter( (bk) => bk.genre=="Fiction" )

//   console.log(fictionBooks);

  //books that published after 1990

  let publishedBooks = books.filter( (bk) => bk.publish>1990 )

//   console.log(publishedBooks);

  //books with ficitin and published after 1990

  let booksFilterd = books.filter( (bk) => {
        return bk.genre=="History" && bk.publish >= 1990
  } )

  console.log(booksFilterd);


