import React, { Component } from "react";
import QuestionForm from "./questionadd";

class MainComponent extends Component {
  state = {
    question: [],
    view: -1,
    editIndex: -1
  };
  handleview = v => {
    this.setState({ view: v });
  };
  submit = data => {
    let question = [...this.state.question];
    if (this.state.view === 3) {
      question[this.state.editIndex] = data;
    } else {
      question.push(data);
    }
    this.setState({ question });
    this.setState({ view: 2 });
  };
  handleEdit = index => {
    this.setState({ editIndex: index, view: 3 });
  };
  handleDelete = index => {
    let question = [...this.state.question];
    question.splice(index, 1);
    this.setState({ question });
  };
  render() {
    const { question, editIndex } = this.state;
    let edit = {
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctanswer: ""
    };
    let mode = "";
    if (this.state.view === 3) {
      mode = "edit";
      edit = { ...question[editIndex] };
    }
    return (
      <div className="container">
        {this.state.view === -1 ? (
          <div>
            <button
              className="btn btn-primary m-2"
              onClick={() => this.handleview(1)}
            >
              Add Question
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => this.handleview(2)}
            >
              Question Bank
            </button>
          </div>
        ) : (
          ""
        )}

        {this.state.view >= 1 ? (
          <div>
            <button
              className="btn btn-primary m-2"
              onClick={() => this.handleview(-1)}
            >
              Home
            </button>
          </div>
        ) : (
          ""
        )}
        {this.state.view === 1 ? (
          <div>
            <QuestionForm
              submit={this.submit}
              edit={edit}
              mode={mode}
            ></QuestionForm>
          </div>
        ) : (
          ""
        )}
        {this.state.view === 2 ? (
          <div>
            <h4>Question Bank</h4>
            {this.state.question.length === 0
              ? "No Question have been added so far"
              : this.state.question.map((ques, index) => (
                  <div key={index}>
                    Q {index + 1}. {ques.question}
                    <button
                      className="btn btn-warning m-2"
                      onClick={() => this.handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-warning m-2"
                      onClick={() => this.handleDelete(index)}
                    >
                      Delete
                    </button>
                    <ul>
                      <li>A.{ques.optionA}</li>
                      <li>B.{ques.optionB}</li>
                      <li>C.{ques.optionC}</li>
                      <li>D.{ques.optionD}</li>
                      <li>Answer.{ques.correctanswer}</li>
                    </ul>
                  </div>
                ))}
          </div>
        ) : (
          ""
        )}
        {this.state.view === 3 ? (
          <div>
            <QuestionForm
              submit={this.submit}
              edit={edit}
              mode={mode}
            ></QuestionForm>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MainComponent;
