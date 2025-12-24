


export let basic_conditional_rendering = [
    "Scenario: You have a component that displays a welcome message. Conditionally render \"Welcome, User!\" if a isLoggedIn prop is true, and \"Please log in.\" if it's false.",
    "Scenario: Create a button that toggles the visibility of a paragraph of text. Implement this using a state variable and conditional rendering.",
    "Scenario: Display a loading spinner component when data is being fetched, and hide it once the data is available.",
]

export let advance_conditional_rendering = [
    "Scenario: Render different components based on a user's role (e.g., \"AdminDashboard\" for admins, \"UserDashboard\" for regular users).",
    "Scenario: You have a list of items. Conditionally render a \"No items found\" message if the list is empty, otherwise render the list.",
    "Scenario: Implement a form where certain input fields are only visible if a specific checkbox is checked.",
    "Scenario: Create a component that displays a warning message only when a certain condition (e.g., an invalid input) is met.",
    "Scenario: Use the logical AND operator (&&) to conditionally render an icon next to a list item if a particular property of the item is true (e.g., isFeatured).",
]


export let conditional_rendering_with_multiple_conditions = [
    'Scenario: Render different content based on multiple conditions using nested ternary operators or if/else if/else statements. For instance, display "Loading..." if isLoading is true, "Error!" if hasError is true, and the actual data if both are false.',
    'Scenario: You have a component that displays a user\'s profile. Conditionally render different sections (e.g., "Edit Profile" button, "View Orders") based on the user\'s authentication status and their ownership of the profile.'
]

export let conditional_rendering_best_practices = [
    "When would you prefer using the ternary operator (condition ? <A /> : <B />) over an if statement for conditional rendering in JSX?",
    "Explain the use case and benefits of the short-circuiting && operator in conditional rendering. Provide an example.",
    "You have a component with complex nested conditional rendering logic. How would you refactor it to improve readability and maintainability? Consider extracting sub-components or using helper functions.",
]