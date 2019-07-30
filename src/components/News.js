import React, { Component } from 'react';
import Header from './Header';
class News extends Component {

  render() {
    let transList = []
    this.props.news.forEach(elm => {
      transList.push(<React.Fragment>
        <article>
          <div className="col-lg-12">
            <div className="card">
              <h4><i className="fas fa-random arrow-trans"></i></h4>
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
            <div className="container"> 
              <div className="col-lg-12"> 
                  <h1>TRANSFER NEWS</h1>
              </div>
                 {transList}
            </div>
      </React.Fragment>
    );

  }
}

export default News;
