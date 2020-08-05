import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import './App.css';

const Placeholder =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: Placeholder,
    }
  //add handleChange() methods 
  this.handleChange=this.handleChange.bind(this);
  };
handleChange(event){
    this.setState({
      input: event.target.value
    });
}
  
render(){
  var md = window.markdownit();

var result = md.render(this.state.input);
    return(
      <div class="container-fluid">
      <div class="row">
        <p id="other"> Markdown Previewer</p>
        <div class="col-sm-3 col-md-6">
          <header>Editor</header>
        <textarea id="editor" value={this.state.input}onChange={this.handleChange.bind(this)}></textarea>
        </div>
      
<div class="col-sm-9 col-md-6">
  <p id="header2">Previewer</p>
  <div id="preview"  dangerouslySetInnerHTML={{ __html: result}}></div>
        </div>
        </div>
         </div>
    );
  }
};
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
export default App;

