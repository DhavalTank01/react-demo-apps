const AccordionData = [
  {
    id: 1,
    question: "What are the advantages of using React?",
    answer:
      "React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves. React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ). As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.",
  },
  {
    id: 3,
    question:
      "What are the differences between functional and class components?",
    answer:
      "Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on feature basis. After the introduction of Hooks, functional components are equivalent to class components.Although functional components are the new trend, the react team insists on keeping class components in React. Therefore, it is important to know how these both components differ.",
  },
  {
    id: 4,
    question:
      "What are the differences between controlled and uncontrolled components?",
    answer:
      "Controlled component In a controlled component, the value of the input element is controlled by React.  We store the state of the input element inside the code, and by using event-based callbacks, any changes made to the input element will be reflected in the code as well.    When a user enters data inside the input element of a controlled component, onChange function gets triggered and inside the code we check whether the value entered is valid or invalid. If the value is valid, we change the state and re-render the input element with new value. ",
  },
  {
    id: 5,
    question: "What are the different lifecycle methods in React?",
    answer:
      "Every component in React has lifecycle methods that we can tap into, to trigger changes at a particular phase of the life cycle.    Each component in react goes through three phases: Mounting, Updating, and Unmounting.    There are corresponding lifecycle methods for each of the three phases:",
  },
];

export default AccordionData;
