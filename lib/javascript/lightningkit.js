// LightningDevKit.js

// Helper function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Lightning component class
class LightningComponent {
  constructor() {
    this.state = {};
  }

  // Setter for component state
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  // Render method to be implemented by child components
  render() {
    throw new Error('render method must be implemented');
  }

  // Mount the component to a target DOM element
  mount(targetElement) {
    this.targetElement = targetElement;
    this.render();
  }

  // Update the DOM with the component's rendered output
  updateDOM() {
    const content = this.render();
    this.targetElement.innerHTML = content;
  }
}

// Example usage of the LightningDevKit
class MyComponent extends LightningComponent {
  async fetchDataAndSetState() {
    const data = await fetchData('https://api.example.com/data');
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    if (data) {
      return `<div>${data}</div>`;
    } else {
      return `<div>Loading...</div>`;
    }
  }
}

// Usage example
const myComponent = new MyComponent();
myComponent.fetchDataAndSetState(); // Fetch data asynchronously
myComponent.mount(document.getElementById('root')); // Mount the component to a root element

