import React, { Component } from 'react';
import Header from './Header';
class News extends Component {

  render() {
    let transList = []
    this.props.news.forEach(elm => {
      transList.push(<React.Fragment>
        <article>
          <div class="col-lg-12">
            <div class="card">
              <h4>{elm.text}</h4>
              <p>{elm.date}</p>
            </div>
            <hr></hr>
          </div>
        </article>
      </React.Fragment>)

    });
    return (
      <React.Fragment>
            <Header></Header>
            <div class="container"> 
              <div class="col-lg-12"> 
                  <h1>TRANSFER NEWS</h1>
              </div>
                 {transList}
            </div>
      </React.Fragment>
    );

  }
}

export default News;
