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
    const sorteBytitles = bookLibrary.sort((first, second) =>
      first.title > second.title ? 1 : -1
    );
    console.log("----sorteBytitles", sorteBytitles);
    setBookLibrary(sorteBytitles.slice());
  };

  return (
    <div>
      <div className="tableheader">
        <button className="my-button" onClick={sortByTitle}>
          Sort by title
        </button>
        <button className="my-button">Sort by author ascending</button>
        <button className="my-button">Sort by year published descedning</button>
        <button className="my-button">
          Sort by available copies ascending
        </button>
        <button className="my-button">Sort by rating descending</button>
      </div>
      <div className="tableheader">
        <button className="my-button">Delete year published 1960 </button>
        <button className="my-button">Delete author is Scott </button>
        <button className="my-button">
          Delete title is Pride and Prejudice{" "}
        </button>
        <button className="my-button">Delete availableCopies is 3 </button>
        <button className="my-button">Delete genere is EpicClassics </button>
        <button className="my-button">Delete ratings is 5 </button>
      </div>
      <div className="tableheader">
        <button className="my-button">get all published 1869 </button>
        <button className="my-button">
          get all genres HistoricalClassics{" "}
        </button>
        <button className="my-button">get all availableCopies 2</button>
        <button className="my-button">
          get all availableCopies grater than3
        </button>
        <button className="my-button">get all rating grater than 3 </button>
        <button className="my-button">get all rating less than 3 </button>
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
