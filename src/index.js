import React from 'react';
import ReactDOM from 'react-dom';

const YOUTUBE_API_KEY = 'AIzaSyAP6i-VyWyJulmdAIvASVzW26J6avY3Z5c';
// Create a new component. This component should produce some HTML. 
const App = () => {
  return <div>Hello World!</div>;
}
// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));