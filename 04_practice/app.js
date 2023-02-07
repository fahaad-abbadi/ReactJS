import React from 'react';
import ReactDOM from 'react-dom';

import './css/Header.css';
import './css/Main.css';
import './css/Footer.css';
import './css/Container.css';
import './css/Photo.css';
import './css/ImageContainer.css'

class Header extends React.Component{
	render(){
		return(
			<header>
				<div className="header-wrapper">
					<h2 className = "title">Hospital</h2>
					<h4>Leading in Cancer and Dialysis research</h4>
				</div>
			</header>
		)
	}
}

class Diagnosis extends React.Component{
	render()
	{
		const categories = ["checkup", "diagnosis", "Glucose levels", "Sugar Levels","Surgery"];
		const categoriesList = categories.map((category) => <li key = {category}>{category}</li>)

		return categoriesList;
	}
}


class Main extends React.Component{
	render()
	{
		return(
			<main>
				<div className="main-wrapper">
					<p>Prerequisite to getting started : </p>
					<ul>
						<Diagnosis/>
					</ul>
				</div>
			</main>
		)
	}
}

class Container extends React.Component{
	render()
	{
		return(
			<div className="container">
				<Main/>
				<Main/>
				<Main/>
				<Main/>
				<Main/>
				<Main/>	
			</div>
		)
	}
}

class ImageContainer extends React.Component{
	render()
	{
		return(
			<div className="image-container">
				<Photo/>
				<Photo/>
				<Photo/>
				<Photo/>
				<Photo/>
			</div>
		)
	}
}

class Photo extends React.Component{
	render()
	{
		return(
			<div className="images">
				<img id = "first-img" src = "https://images.unsplash.com/photo-1643143596361-a39511490214?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt = "some low poly" width = "300px" height = "300px"></img>
				<img id = "second-img" src="https://cdn.dribbble.com/users/15687/screenshots/12020592/media/ed4e50f0f46b88260f7044aa73b05eda.png?compress=1&resize=400x300" alt="another low poly" width = "300px" height = "300px"/>
			</div>
		)
	}
}

class Footer extends React.Component{
	render()
	{
		return(
			<footer class = "footer">
				<div class="footer__addr">
					<h1 class="footer__logo">Something</h1>
						
					<h2>Contact</h2>
					
				</div>
				
				<ul class="footer__nav">
					<li class="nav__item">
					<h2 class="nav__title">Media</h2>
					</li>
					
					<li class="nav__item nav__item--extra">
					<h2 class="nav__title">Technology</h2>
					
					<ul class="nav__ul nav__ul--extra">
						<li>
						<a href="#">Hardware Design</a>
						</li>
						
						<li>
						<a href="#">Software Design</a>
						</li>
						
						<li>
						<a href="#">Digital Signage</a>
						</li>
						
						<li>
						<a href="#">Automation</a>
						</li>
						
						<li>
						<a href="#">Artificial Intelligence</a>
						</li>
						
						<li>
						<a href="#">IoT</a>
						</li>
					</ul>
					</li>
					
					<li class="nav__item">
					<h2 class="nav__title">Legal</h2>
					
					<ul class="nav__ul">
						<li>
						<a href="#">Privacy Policy</a>
						</li>
						
						<li>
						<a href="#">Terms of Use</a>
						</li>
						
						<li>
						<a href="#">Sitemap</a>
						</li>
					</ul>
					</li>
				</ul>
				
				<div class="legal">
					<p>&copy; 2019 Something. All rights reserved.</p>
					
					<div class="legal__links">
					<span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
					</div>
				</div>
			</footer>
		)
	}
}

const App = () => {
	
	return (
        <div className="app">
			<Header/>
			<Container type = "Main"/>
			<ImageContainer/>
			<Footer/>
        </div>
	)
}	

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default App;