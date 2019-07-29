import React, { Component } from 'react'

export default class NewQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      date: ""
    }

    this.handleNewsInput = this.handleNewsInput.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }

  onChangeText(event) {
    this.setState({
      text: event.target.value
    })
  }

  onChangeDate(event) {
    this.setState({
      date: event.target.value
    })
  }

  handleNewsInput(event) {
    event.preventDefault()
    this.props.addNews(this.state.date, this.state.text);
  }


  render() {
    return (
      <React.Fragment>

        <div class="container">
            <div class="col-lg-12">
              <form class="custom-form">
                <h2 class="center">New Transfer</h2>
                <div className="form-group col-lg-12">

                <label>Text</label>
                  <input type="text" onChange={this.onChangeText} className="form-control" id="text" placeholder="Enter text here..."></input>
                </div>

                <div className="form-group col-lg-12">
                <label>Date</label>
                  <input type="text" onChange={this.onChangeDate} className="form-control" id="date" placeholder="Enter date here..."></input>
                </div>

                <button onClick={this.handleNewsInput}
                  type="submit" id="submitButton" className="btn btn-primary"> Create Transfer
                </button>

              </form>
            </div>
        </div>
      </React.Fragment>
    )
  }
}