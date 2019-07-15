class VisibilityToggle extends React.Component {
	constructor( props ) {
		super( props );
		this.handleToggleVisibility = this.handleToggleVisibility.bind( this );
		this.state = {
			visibility: false
		}
	}
	handleToggleVisibility() {
		this.setState( ( prevState ) => {
			return {
				visibility: !prevState.visibility
			}
		});
	}
	render() {
		return(
			<main>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? "Hide Details" : "Show Details"}
				</button>
				{this.state.visibility && <p>This is the toggled visibility text</p>}
			</main>
		)
	}
}

ReactDOM.render( <VisibilityToggle />, document.getElementById( "app" ) );



// let visibility = false;

// const buttonToggle =() => {
// 	visibility = !visibility;
// 	templateRender();
// }

// const appRoot = document.getElementById( "app" );

// const templateRender = () => {
// 	const template = (
// 		<div>
// 			<h1>{app.title}</h1>
// 			<button onClick={buttonToggle}>
// 				{visibility ? "Hide Details" : "Show Details"}
// 			</button>
// 			{visibility && <p>thi akf aklfak ak a kl akalfka </p>}
// 		</div>
// 	);
// 	ReactDOM.render( template, appRoot );
// };

// templateRender();