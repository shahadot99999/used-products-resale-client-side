import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className="text-4xl"> BLog</h2>
            <div>
                <h3> What are the different ways to manage a state in a React application?</h3>
                <p> Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                   The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
                Hooks,React Context API, Apollo Link State</p>
          <br></br>
             <h3> How does prototypical inheritance work?</h3>
             <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
                  </p>
<br></br>
                  <h3> What is a unit test? Why should we write unit tests?</h3>
                  <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
<br></br>
                  <h3>  React vs. Angular vs. Vue?</h3>
                  <p>Angular Angular: In Angular, components are referred to as directives. Directives are just markers on DOM elements, which Angular can track and attach specific behavior too. Therefore, Angular separates the UI part of components as attributes of HTML tags, and their behaviors in the form of JavaScript code. This is what sets it apart when looking at Angular vs React.
                  
                   <p> React React: React, interestingly, combines the UI and behavior of components. For instance, here is the code to create a hello world component in React. In React, the same part of the code is responsible for creating a UI element and dictating its behavior.</p>
                  
                    <p>Vue Vue: When looking into Vue vs React, in Vue, UI and behavior are also a part of components, which makes things more intuitive. Also, Vue is highly customizable, which allows you to combine the UI and behavior of components from within a script. Further, you can also use pre-processors in Vue rather than CSS, which is a great functionality. Vue is great when it comes to integration with other libraries, like Bootstrap.</p>

</p>
            </div>
        </div>
    );
};

export default Blog;