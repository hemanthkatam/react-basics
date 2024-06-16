import React from "react";

export const Content = (props) => {
  console.log('....Content..',props)
  return (
    <div>
      <h1 className="content for current file">{props.title}</h1>;

      <mark>Unified Functional Testing </mark>
      <main>
        UFT supports keyword and scripting interfaces and features a graphical
        user interface.It uses the Visual Basic Scripting Edition (VBScript)
        scripting language to specify a test procedure, and to manipulate the
        objects and controls of the application under test.
      </main>
      <h4> We can download it from different applications</h4>
      <article>
        <h3>Google</h3>
        <p>Google chrome is developed by Google Chrome</p>
      </article>
      <article>
        <h3>Edge</h3>
        <p>Edge is developed by Microsoft</p>
      </article>
      <section>
        <h3>UI</h3>
        <p>
          OpenText UFT One provides two views and ways to modify a test script:
          Keyword View and Expert View. These views enable UFT to act as an
          Integrated Development Environment (IDE) for the test, and UFT
          includes many standard IDE features, such as breakpoints to pause a
          test at predetermined places.
        </p>
      </section>
      <h4>we can download it from</h4>
      <summary>
        OpenText UFT One and Quality Center work together for additional testing
        capabilities. Users can use HP Quality Center with UFT assets, such as
        tests, shared object repositories, libraries, recovery scenarios and
        external data tables.
      </summary>
      <details>
        <p>
          OpenText UFT One uses VBScript as its scripting language. VBScript
          supports classes but not polymorphism and inheritance. Compared with
          Visual Basic for Applications (VBA), VBScript lacks the ability to use
          some Visual Basic keywords, does not come with an integrated debugger,
          lacks an event handler, and does not have a forms editor. HP added a
          debugger, but the functionality is more limited when compared with
          testing tools that integrate a full-featured IDE, such as those
          provided with VBA, Java, or VB.NET.
        </p>
      </details>
    </div>
  );
};
