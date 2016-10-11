import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

var App = React.createClass({
  render:function(){
    return(
      <div>
        TutsPlus - Welcome to React 
      </div>
    );
  }
});

var Navigation = React.createClass({
	render: function(){
		return(
			<ul>
				<li>
					Home	
				</li>
				<li>
				 	<Link to="/contactus">Contact us</Link>
				</li>
				<li>
					<Link to="/aboutus">About us</Link>
				</li>
			</ul>
		);
	}
});

var AboutUs = React.createClass({
	render:function(){
		return(
			<div>
				<h2>Welcome, to About Us</h2>
				<Link to="/"> back to Home </Link>
			</div>
			)
	}
});

var ContactUs = React.createClass({
	render:function(){
		return(
			<div>
				<h2>Welcome, to Contact Us</h2>
				<Link to="/"> back to Home </Link>
			</div>
			)
	}
});

render((
	<Router>
    	<Route path="/" component={Navigation} />
    	<Route path="/aboutus" component={AboutUs} />
    	<Route path="/contactus" component={ContactUs} />
    </Router>
	),document.getElementById('app'))
