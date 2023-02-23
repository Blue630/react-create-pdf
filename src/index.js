import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import "./styles.css";

const ref = React.createRef();

class App extends React.Component {
  state = {
    name: 'Alex22321',
    course: 'new workbook',
    date: 'Jan 27 2023',
  }
  handleChangeName = (e) => {
    this.setState({name: e.target.value})
  }
  handleChangeCourse = (e) => {
    this.setState({course: e.target.value})
  }
  handleChangeDate = (e) => {
    this.setState({date: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <div className="form-title">
          <div>
          <Pdf targetRef={ref} filename="download.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
          </Pdf>
          </div>
          <div>
            <input placeholder="Name" type="text" onChange={this.handleChangeName} />
          </div>
          <div>
            <input placeholder="Course" type="text" onChange={this.handleChangeCourse} />
          </div>
          <div>
            <input placeholder="Date" type="text" onChange={this.handleChangeDate} />
          </div>
        </div>
        <div className="container" ref={ref}>
          <div className="content">
            <p className="present">PRESENT TO</p>
            <h1 className="name">{this.state.name}</h1>
            <p className="course">FOR THE OCMPLETION OF THE COURSE: "{this.state.course}"</p>
            <p className="real-date">{this.state.date}</p>
            <p className="date">DATE</p>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
