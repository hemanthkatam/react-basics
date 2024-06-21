import React, { useState } from "react";
import { BookList } from "./constants";
import "./LibraryTable.css";

export const LibraryTable = () => {
  const [bookLibrary, setBookLibrary] = useState(BookList);
    const header = [
    "title",
    "author",
    "YearPublished",
    "genres",
    "availableCopies",
    "ratings",
  ];

  const sortByTitle = () => {
    const sortBytitles = bookLibrary.sort((first, second) =>
      first.title > second.title ? 1 : -1
    );
    console.log("----sorteBytitles", sortBytitles);
    setBookLibrary(sortBytitles.slice());
  };
  const sortByAuthor=()=>{
    const sortByAuthor=bookLibrary.sort((a1,a2)=>
      a1.author>a2.author ? 1:-1
    );
    console.log("--sort by author",sortByAuthor)
    setBookLibrary(sortByAuthor.slice());

  }
  const sortByYear=()=>{
    const sortByYear=bookLibrary.sort((a1,a2)=>
      a1.yearPublished<a2.yearPublished ? 1:-1
    );
    console.log("--sort by author",sortByYear)
    setBookLibrary(sortByYear.slice());

  }
  const sortByCopies=()=>{
    const sortByCopies=bookLibrary.sort((a1,a2)=>
      a1.availableCopies>a2.availableCopies ? 1:-1
    );
    console.log("--sort by author",sortByCopies)
    setBookLibrary(sortByCopies.slice());

  }
  const sortByRating=()=>{
    const sortByRating=bookLibrary.sort((a1,a2)=>
      a1.ratings.rating<a2.ratings.rating ? 1:-1
    );
    console.log("--sort by author--",sortByRating)
    setBookLibrary(sortByRating.slice());

  }
  const delPublished=()=>{
    const delPublished=bookLibrary.filter(({yearPublished})=>yearPublished !==1960)
    //delete Employee.firstname;
    console.log("....",delPublished)
    setBookLibrary(delPublished.slice())
  }
  const delAuthor=()=>{
    const delAuthor=bookLibrary.filter(({author})=>author !="Scott")
    console.log("....",delAuthor)
    setBookLibrary(delAuthor.slice())
  }
  const delTitle=()=>{
    const delTitle=bookLibrary.filter(({title})=>title !="Pride and Prejudice")
    console.log("....",delTitle)
    setBookLibrary(delTitle.slice())
  }
  const delCopies=()=>{
    const delCopies=bookLibrary.filter(({availableCopies})=>availableCopies !=3)
    console.log("....",delCopies)
    setBookLibrary(delCopies)
  }
  const delGenre=()=>{
    const delGenre=bookLibrary.filter(({genres})=>!genres.includes("Classics"))
    console.log("....",delGenre)
    setBookLibrary(delGenre)
  }
  const delRating=()=>{
    const delRating=bookLibrary.filter(({ratings})=>ratings.rating !=5)
    console.log("....",delRating)
    setBookLibrary(delRating.slice())
  }
  const getPublished=()=>{
     const getPublished=bookLibrary.filter(({yearPublished})=>yearPublished===1869)
     console.log("..to get specific year...",getPublished)
     setBookLibrary(getPublished.slice())
  }
  const getAllgenres=()=>{
    const getAllgenres=bookLibrary.filter(({genres})=>genres=="Classics")
    console.log("..to get specific genre...",getAllgenres)
    setBookLibrary(getAllgenres.slice())
 }
  const getCopies=()=>{
    const getCopies=bookLibrary.filter(({availableCopies})=>availableCopies===2)
    console.log("...get available copies 2...",getCopies)
    setBookLibrary(getCopies.slice())
  }
  const getCopies1=()=>{
    const getCopies1=bookLibrary.filter(({availableCopies})=>availableCopies>3)
    console.log("...get available copies greater than 3...",getCopies1)
    setBookLibrary(getCopies1.slice())
  }
  const getRating=()=>{
    const getRating=bookLibrary.filter(({ratings})=>ratings.rating>3)
    console.log("...get rating greater than 3...",getRating)
    setBookLibrary(getRating.slice())
  }
  const getRating1=()=>{
    const getRating1=bookLibrary.filter(({ratings})=>ratings.rating<3)
    console.log("...get available copies greater than 3...",getRating1)
    setBookLibrary(getRating1.slice())
  }
  return (
    <div>
      <div className="tableheader">
        <button className="my-button" onClick={sortByTitle}>Sort by title</button>
        <button className="my-button" onClick={sortByAuthor}>Sort by author ascending</button>
        <button className="my-button"  onClick={sortByYear}>Sort by year published descedning</button>
        <button className="my-button"  onClick={sortByCopies}> Sort by available copies ascending</button>
        <button className="my-button" onClick={sortByRating}>Sort by rating descending</button>
      </div>
      <div className="tableheader">
        <button className="my-button" onClick={delPublished}>Delete year published 1960 </button>

        <button className="my-button" onClick={delAuthor}>Delete author is Scott </button>
        <button className="my-button" onClick={delTitle}>Delete title is Pride and Prejudice{" "}</button>
        <button className="my-button"onClick={delCopies}>Delete availableCopies is 3 </button>
        <button className="my-button"onClick={delGenre}>Delete genere is EpicClassics </button>
        <button className="my-button"onClick={delRating}>Delete ratings is 5 </button>
      </div>
      <div className="tableheader">
        <button className="my-button" onClick={getPublished}>get all published 1869 </button>
        <button className="my-button" onClick={getAllgenres}>get all genres HistoricalClassics{""}</button>
        <button className="my-button" onClick={getCopies}>get all availableCopies 2</button>
        <button className="my-button" onClick={getCopies1}>get all availableCopies grater than3</button>
        <button className="my-button"onClick={getRating} >get all rating grater than 3 </button>
        <button className="my-button"onClick={getRating1}>get all rating less than 3 </button>
      </div>
      <div className="Library">
        <table>
          <tr>
            {header.map((heading) => (
              <th>{heading}</th>
            ))}
          </tr>
          {bookLibrary.map((books) => {
            return (
              <tr>
                <td>{books.title}</td>
                <td>{books.author}</td>
                <td>{books.yearPublished}</td>
                <td>{books.genres}</td>
                <td>{books.availableCopies}</td>
                <td>{books.ratings.rating}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

// {employeeList.map((employee) => {
//   return (
//     <tr>
//       <td>{employee.compnay}</td>
//       <td>{employee.contract}</td>
//       <td>{employee.country}</td>
//     </tr>
//   );
// })}
