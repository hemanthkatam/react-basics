import React from "react";
import "./LibraryTable.css";

export const LibraryTable = () => {
    const Book1Details=   {
      title: "To Kill a Mockingbird",
      author: "Harper",
      yearPublished: 1960,
      genres: ["Fiction", "Classics"],
      availableCopies: 3,
      ratings: [
        { reviewer: "John", rating: 5 },
        { reviewer: "Jane", rating: 4.5 },
        { reviewer: "Alex", rating: 4 }
      ]
    };
    const Book2Details= {
      title: "1984",
      author: "George",
      yearPublished: 1949,
      genres: ["Dystopian", "Science Fiction"],
      availableCopies: 5,
      ratings: [
        { reviewer: "Alice", rating: 5 },
        { reviewer: "Bob", rating: 4.8 },
        { reviewer: "Charlie", rating: 4.5 }
      ]
    };
    const Book3Deyails={
      title: "The Great Gatsby",
      author: "Scott",
      yearPublished: 1925,
      genres: ["Fiction", "Classics"],
      availableCopies: 2,
      ratings: [
        { reviewer: "David", rating: 4.5 },
        { reviewer: "Emma", rating: 4.7 },
        { reviewer: "Frank", rating: 4.3 }
      ]
    };
    const Book4Details={
      title: "Moby Dick",
      author: "Herman",
      yearPublished: 1851,
      genres: ["Adventure", "Classics"],
      availableCopies: 1,
      ratings: [
        { reviewer: "Grace", rating: 4 },
        { reviewer: "Hannah", rating: 3.8 },
        { reviewer: "Ivan", rating: 4.2 }
      ]
    };
    const Book5Details={
      title: "Pride and Prejudice",
      author: "Jane",
      yearPublished: 1813,
      genres: ["Romance", "Classics"],
      availableCopies: 4,
      ratings: [
        { reviewer: "Julia", rating: 5 },
        { reviewer: "Karen", rating: 4.9 },
        { reviewer: "Leo", rating: 4.6 }
      ]
    };
    const Book6Details={
      title: "The Catcher in the Rye",
      author: "J.D",
      yearPublished: 1951,
      genres: ["Fiction", "Classics"],
      availableCopies: 2,
      ratings: [
        { reviewer: "Michael", rating: 4.2 },
        { reviewer: "Nancy", rating: 3.9 },
        { reviewer: "Oscar", rating: 4.1 }
      ]
    };
    const Book7Details={
      title: "The Hobbit",
      author:"J.R.R.",
      yearPublished: 1937,
      genres: ["Fantasy", "Adventure"],
      availableCopies: 5,
      ratings: [
        { reviewer: "Paul", rating: 5 },
        { reviewer: "Quincy", rating: 4.8 },
        { reviewer: "Rachel", rating: 4.9 }
      ]
    };
    const Book8Details={
      title: "War and Peace",
      author: "Leo",
      yearPublished: 1869,
      genres: ["Historical", "Classics"],
      availableCopies: 3,
      ratings: [
        { reviewer: "Sam", rating: 4.3 },
        { reviewer: "Tina", rating: 4.5 },
        { reviewer: "Uma", rating: 4.2 }
      ]
    };
    const Book9Details={
      title: "The Odyssey",
      author: "Homer",
      yearPublished: -800,
      genres: ["Epic", "Classics"],
      availableCopies: 4,
      ratings: [
        { reviewer: "Victor", rating: 4.6 },
        { reviewer: "Wendy", rating: 4.7 },
        { reviewer: "Xander", rating: 4.5 }
      ]
    };
    const Book10Details={
      title: "Crime and Punishment",
      author:  "Fyodor",
  
      yearPublished: 1866,
      genres: ["Philosophical", "Classics"],
      availableCopies: 3,
      ratings: [
        { reviewer: "Yvonne", rating: 4.4 },
        { reviewer: "Zach", rating: 4.6 },
        { reviewer: "Amy", rating: 4.3 }
      ]
    }
 
  const BookList=[
    {itle: "To Kill a Mockingbird",
    author:"Harper",
    yearPublished: 1960,
    genres: ["Fiction", "Classics"],
    availableCopies: 3,
    ratings: [
      { reviewer: "John", rating: 5 },
      { reviewer: "Jane", rating: 4.5 },
      { reviewer: "Alex", rating: 4 }
    ]},
  {
    title: "1984",
      author: "Goerge",
      yearPublished: 1949,
      genres: ["Dystopian", "Science Fiction"],
      availableCopies: 5,
      ratings: [
        { reviewer: "Alice", rating: 5 },
        { reviewer: "Bob", rating: 4.8 },
        { reviewer: "Charlie", rating: 4.5 }
      ]
  },
  {
    title: "The Great Gatsby",
    author: "Scott",
    yearPublished: 1925,
    genres: ["Fiction", "Classics"],
    availableCopies: 2,
    ratings: [
      { reviewer: "David", rating: 4.5 },
      { reviewer: "Emma", rating: 4.7 },
      { reviewer: "Frank", rating: 4.3 }
    ]
  },
  {
    title: "Moby Dick",
      author: "Herman",
      yearPublished: 1851,
      genres: ["Adventure", "Classics"],
      availableCopies: 1,
      ratings: [
        { reviewer: "Grace", rating: 4 },
        { reviewer: "Hannah", rating: 3.8 },
        { reviewer: "Ivan", rating: 4.2 }
      ]
  },
  {
    title: "Pride and Prejudice",
      author: "Jane",
      yearPublished: 1813,
      genres: ["Romance", "Classics"],
      availableCopies: 4,
      ratings: [
        { reviewer: "Julia", rating: 5 },
        { reviewer: "Karen", rating: 4.9 },
        { reviewer: "Leo", rating: 4.6 }
      ]
  },
  {
    title: "The Catcher in the Rye",
      author: "J.D",
      yearPublished: 1951,
      genres: ["Fiction", "Classics"],
      availableCopies: 2,
      ratings: [
        { reviewer: "Michael", rating: 4.2 },
        { reviewer: "Nancy", rating: 3.9 },
        { reviewer: "Oscar", rating: 4.1 }
      ]
  },
  {
    title: "The Hobbit",
      author: "J.R.R",
      yearPublished: 1937,
      genres: ["Fantasy", "Adventure"],
      availableCopies: 5,
      ratings: [
        { reviewer: "Paul", rating: 5 },
        { reviewer: "Quincy", rating: 4.8 },
        { reviewer: "Rachel", rating: 4.9 }
      ]
  },
  {
    title: "War and Peace",
    author: "Leo",
    yearPublished: 1869,
    genres: ["Historical", "Classics"],
    availableCopies: 3,
    ratings: [
      { reviewer: "Sam", rating: 4.3 },
      { reviewer: "Tina", rating: 4.5 },
      { reviewer: "Uma", rating: 4.2 }
    ] 
  },
  {
    title: "The Odyssey",
    author: "Homer",
    yearPublished: -800,
    genres: ["Epic", "Classics"],
    availableCopies: 4,
    ratings: [
      { reviewer: "Victor", rating: 4.6 },
      { reviewer: "Wendy", rating: 4.7 },
      { reviewer: "Xander", rating: 4.5 }
    ] 
  },
  {
    title: "Crime and Punishment",
      author:  "Fyodor",
      yearPublished: 1866,
      genres: ["Philosophical", "Classics"],
      availableCopies: 3,
      ratings: [
        { reviewer: "Yvonne", rating: 4.4 },
        { reviewer: "Zach", rating: 4.6 },
        { reviewer: "Amy", rating: 4.3 }
      ]
  }
  ];
  console.log("--Books Data--",BookList)
  const header=["title","author","YearPublished","genres","availableCopies","ratings"]
  return(
    <div className="Library">
      <table>
        <tr>
        {header.map((heading) => (
            <th>{heading}</th>
          ))}          
        </tr>
        {BookList.map((books) => {
          return(
          <tr>
          <td>{books.title}</td>
          <td>{books.author}</td>
          <td>{books.yearPublished}</td>
          <td>{books.genres}</td>
          <td>{books.availableCopies}</td>
          <td>{books.ratings.reviewer}</td>
          </tr>
          );
        })
        }
      
      </table>

    </div>
  )
}

// {employeeList.map((employee) => {
//   return (
//     <tr>
//       <td>{employee.compnay}</td>
//       <td>{employee.contract}</td>
//       <td>{employee.country}</td>
//     </tr>
//   );
// })}