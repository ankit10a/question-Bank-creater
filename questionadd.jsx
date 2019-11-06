import React, { Component } from "react";

class QuestionForm extends Component {
  state = {
    questionadd: this.props.edit,
    error: {}
  };
  validate = () => {
    const error = {};
    const questionadd = this.state.questionadd;
    if (questionadd.question.trim() === "") {
      error.question = "Please Enter the question";
    }
    if (questionadd.optionA.trim() === "") {
      error.optionA = "Enter the optionA";
    }
    if (questionadd.optionB.trim() === "") {
      error.optionB = "Enter the optionB";
    }
    if (questionadd.optionC.trim() === "") {
      error.optionC = "Enter the optionC";
    }
    if (questionadd.optionD.trim() === "") {
      error.optionD = "Enter the optionD";
    }
    if (questionadd.correctanswer.trim() === "") {
      error.correctanswer = "Enter the correctanswer";
    }
    return Object.keys(error).length === 0 ? null : error;
  };
  handlesubmit = e => {
    e.preventDefault();
    let error = this.validate();
    this.setState({ error: error || {} });
    if (error) return;
    this.props.submit(this.state.questionadd);
  };
  handlechange = ({ currentTarget: input }) => {
    const questionadd = { ...this.state.questionadd };
    questionadd[input.name] = input.value;
    this.setState({ questionadd });
  };

  render() {
    const { questionadd, error } = this.state;
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <input
              value={questionadd.question}
              type="text"
              name="question"
              onChange={this.handlechange}
              id="question"
              className="form-control"
            />
          </div>
          {error.question && (
            <div className="alert alert-danger">{error.question}</div>
          )}
          <div className="form-group">
            <label htmlFor="optionA">Option A</label>
            <input
              type="text"
              name="optionA"
              onChange={this.handlechange}
              value={questionadd.optionA}
              id="optionA"
              className="form-control"
            />
          </div>
          {error.optionA && (
            <div className="alert alert-danger">{error.optionA}</div>
          )}
          <div className="form-group">
            <label htmlFor="optionB">OptionB</label>
            <input
              type="text"
              name="optionB"
              onChange={this.handlechange}
              value={questionadd.optionB}
              id="optionB"
              className="form-control"
            />
          </div>
          {error.optionB && (
            <div className="alert alert-danger">{error.optionB}</div>
          )}
          <div className="form-group">
            <label htmlFor="optionC">OptionC</label>
            <input
              type="text"
              name="optionC"
              onChange={this.handlechange}
              value={questionadd.optionC}
              id="optionC"
              className="form-control"
            />
          </div>
          {error.optionC && (
            <div className="alert alert-danger">{error.optionC}</div>
          )}
          <div className="form-group">
            <label htmlFor="optionD">OptionD</label>
            <input
              type="text"
              name="optionD"
              onChange={this.handlechange}
              value={questionadd.optionD}
              id="optionD"
              className="form-control"
            />
          </div>
          {error.optionD && (
            <div className="alert alert-danger">{error.optionD}</div>
          )}
          <div className="form-group">
            <label htmlFor="correctanswer">Correct Answer</label>
            <input
              type="text"
              name="correctanswer"
              onChange={this.handlechange}
              value={questionadd.correctanswer}
              id="correctanswer"
              className="form-control"
            />
          </div>
          {error.correctanswer && (
            <div className="alert alert-danger">{error.correctanswer}</div>
          )}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default QuestionForm;
