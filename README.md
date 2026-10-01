

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It is used in React to create and describe the user interface easily.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage state in a component.

In this project, I used it to store the technologies, loading status, and selected technologies in the stack.

Example:

```tsx
const [stack, setStack] = useState<Technology[]>([]);
## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used to perform side effects in a component.

I used it to fetch the technology data from `technologies.json` when the application loads.

Example:

```tsx
useEffect(() => {
  fetch("/data/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
    });
}, []);
## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update, add, or remove items when the list changes.

In this project, `technology.id` is used as the unique key.

Example:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
## 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different content based on a condition.

I used conditional rendering in the `YourStack` component. When the stack is empty, it shows a message saying that no technologies have been selected.

Example:

```tsx
{stack.length === 0 ? (
  <p>No technologies selected</p>
) : (
  // Selected technologies
)}
## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using props.

In this project, `App.tsx` passes the `technology` data and the `onAddToStack` function to the `TechnologyCard` component.

Example:

```tsx
<TechnologyCard
  technology={technology}
  onAddToStack={addToStack}
/>