import React, { useState } from "react";
import Pdf from "react-to-pdf";
import "./App.css";

const ref = React.createRef();

const App = () => {
  const [name, setName] = useState('Alex22321')
  const [course, setCourse] = useState('new workbook')
  const [date, setDate] = useState('Jan 27 2023')
  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeCourse = (e) => {
    setCourse(e.target.value)
  }
  const handleChangeDate = (e) => {
    setDate(e.target.value)
  }
  return (
    <div className="App">
      <div className="form-title">
        <div>
        <Pdf targetRef={ref} filename="download.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        </div>
        <div>
          <input placeholder="Name" type="text" onChange={handleChangeName} />
        </div>
        <div>
          <input placeholder="Course" type="text" onChange={handleChangeCourse} />
        </div>
        <div>
          <input placeholder="Date" type="text" onChange={handleChangeDate} />
        </div>
      </div>
      <div className="container" ref={ref}>
        <div className="content">
          <p className="present">PRESENT TO</p>
          <h1 className="name">{name}</h1>
          <p className="course">FOR THE OCMPLETION OF THE COURSE: "{course}"</p>
          <p className="real-date">{date}</p>
          <p className="date">DATE</p>
        </div>
      </div>
    </div>
  );
}

export default App;