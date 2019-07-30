import React, { Component } from 'react'
import News from "./News.js";
import Header from "./Header.js";
import CreateNews from "./CreateNews.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Transfer",
            date: "12-12-2012",
            news: [],
            status: ""
        }
        this.sendNoti = this.sendNoti.bind(this);
    }

    //Localhosts
    // http://localhost:9090/getTrans
    // http://localhost:9090/createTrans
    // http://localhost:9090/api/push_message
    

    componentDidMount() {
        fetch('https://trans-pwa.herokuapp.com/getTrans')
            .then(response => response.json())
            .then(data => this.setState({ news: data }))
    }

 
    addNews(date, text ) {
    fetch('https://trans-pwa.herokuapp.com/createTrans', {
        method: 'POST',
        body: JSON.stringify({
            text: text,
            date: date
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      fetch('https://trans-pwa.herokuapp.com/api/push_message', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                date: date
            }),
        }).catch(error => console.error(error));

    }

    sendNoti(text, date) {
        fetch('https://trans-pwa.herokuapp.com/api/push_message', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                date: date
            }),
        }).catch(error => console.error(error));
    }

    render() {

        return (
            <Router>
                <React.Fragment>
                    <Switch>
                        <Route exact path={"/"}
                            render={(props) =>
                                <React.Fragment>
                                    <div className="wrapper">
                                        <div id="content">
                                            <Header></Header>                                            
                                            <div className="col-ld-12">
                                                <div className="container">
                                                    <div className="card">
                                                        <h1>Football Transfer News</h1>
                                                            <h2>Mainly News from Arsenal FC.</h2>
                                                            <br></br>
                                                            <h2>About</h2>
                                                                <p>This site makes it possible to get notifications when a transfer happens.<br></br>The PWA is downloadable.<br></br>It is possible to use the site offline.</p>
                                                            <h2>Notifications</h2> 
                                                                <p>To get notifications you need to <i>turn on and allow notifications.</i></p>      
                                                                <a href="/transfers" ><button className="btn btn-danger center-block">Go to Transfers</button></a>                                                             
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </React.Fragment>
                            }
                        />
                        <Route exact path={"/Transfers"}
                            render={(props) =>
                                <React.Fragment>  
                        <div className="wrapper">
                            <div id="content">                           
                                <News {...props} news={this.state.news} />    
                                <CreateNews {...props} addNews={this.addNews}></CreateNews>                         
                            </div>
                        </div>                                     
                            </React.Fragment>      
                                }
                        />
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}
