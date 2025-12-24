



export let conceptual_understanding = [
    "What are props in React? Explain their purpose and how they facilitate communication between components.",
    "Describe the \"one-way data flow\" principle in React and how props enforce it.",
    "Can you modify props directly within a child component? Why or why not?",
    "What is the difference between props and state in React? When would you use one over the other?",
    "Explain \"prop drilling\" What are its potential drawbacks, and what alternative solutions exist in React?",
    "What are defaultProps and when are they useful? Provide an example.",
    "Can you pass functions as props? If so, how can this be used for communication from a child component to a parent?",
]

export let practical_application = [
    "Create a functional component UserProfile that accepts name and email as props and displays them.",
    "Build a Button component that accepts a text prop for its label and an onClick prop (a function) to handle clicks.",
    "Implement a List component that takes an array of items as a prop and renders each item within a <li> tag.",
    "Modify the List component to accept a renderItem prop (a function) that customizes how each list item is rendered.",
    "Create a Card component that accepts title, description, and imageSrc as props and displays them in a structured layout.",
    "Demonstrate how to pass an object as a prop to a child component. How would the child component access properties within that object?",
    "Using defaultProps, set a default value for a prop in a functional component.",
    "How would you pass multiple props from a parent component to a child component using the spread operator (...)? Provide an example.",
]

export let advanced_concepts = [
    "Explain the concept of children prop in React. When is it used, and how does it differ from other props?",
    "How can you use PropTypes (or TypeScript) to validate the types of props being passed to a component?",
    "Discuss how props are involved in the reconciliation process and virtual DOM updates.",
    "When might you use React.memo in conjunction with props to optimize component re-renders?",
    "Consider a scenario where you have deeply nested components. How would you decide whether to use prop drilling, Context API, or a state management library to pass data?",
]