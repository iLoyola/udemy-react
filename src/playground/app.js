class IndecisionApp extends React.Component {
	constructor( props ) {
		super( props );
		this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
		this.handlePick = this.handlePick.bind( this );
		this.handleAddOption = this.handleAddOption.bind( this );
		this.handleDeleteOption = this.handleDeleteOption.bind( this );
		this.state = {
			options: props.options
		}
	}
	componentDidMount() {
		try {
			const json = localStorage.getItem( "options" );
			const options = JSON.parse( json );
			if( options ) {
				this.setState(() => ({ options }));
			}	
		} catch( e ) {

		}
	}
	componentDidUpdate( prevProps, prevState ) {
		if( prevState.options.length !== this.state.options.length ) {
			const json = JSON.stringify( this.state.options );
			localStorage.setItem( "options", json );
		}
	}
	componentWillUnmount() {
		console.log( "componentWillUnmount" );
	}
	handleDeleteOptions() {
		this.setState( () => ({ options: [] }));
	}
	handleDeleteOption( optionToDelete ) {
		this.setState( ( prevState ) => ({
			options: prevState.options.filter( ( option ) => optionToDelete !== option)
		}));
	}
	handlePick() {
		const randomNum = Math.floor( Math.random() * this.state.options.length );
		const randomOption = this.state.options[randomNum];
		alert( randomOption );
	}
	handleAddOption( option ) {
		if( !option ) {
			return "Enter valid value";
		} else if( this.state.options.indexOf( option ) > -1 ) {
			return "This option already exists";
		}
		this.setState( ( prevState ) => ({ options: prevState.options.concat( option ) }));
	}
	render() {
		const subtitle = "This is a subtitle";
		return (
			<main>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick} />
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption} />
				<AddOption
					handleAddOption={this.handleAddOption}
				 />
			</main>
		)
	}
}

IndecisionApp.defaultProps = {
	options: []
};

const Header = ( props ) => {
	return (
		<header>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</header>
	)
}

Header.defaultProps = {
	title: "Indecision App"
}

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<header>
// 				<h1>{this.props.title}</h1>
// 				<h2>{this.props.subtitle}</h2>
// 			</header>
// 		)
// 	}
// }

const Action = ( props ) => {
	return (
		<button
			onClick={props.handlePick}
			disabled={!props.hasOptions}
		>
			What should I do?
		</button>
	)
}

// class Action extends React.Component {
// 	render() {
// 		return (
// 			<button
// 				onClick={this.props.handlePick}
// 				disabled={!this.props.hasOptions}
// 			>
// 				What should I do?
// 			</button>
// 		)
// 	}
// }

const Options = ( props ) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Removal All</button>			
			{props.options.length === 0 && <p>Please add an option to get started</p>}
			{/* Message when there is no data */}
			{props.options.map( ( option ) => (
				<Option
					key={option}
					optionText={option}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))}
		</div>
	)
} 

// class Options extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.props.handleDeleteOptions}>Removal All</button>
// 				{this.props.options.map( ( option ) => <Option key={option} optionText={option} />)}
// 			</div>
// 		)
// 	}
// }

const Option = ( props ) => {
	return (
		<div>
			{props.optionText}
			<button
				onClick={(e) => {
					props.handleDeleteOption(props.optionText)
				}}
			>
				Delete
			</button>
		</div>
	)
}

// class Option extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				{this.props.optionText}
// 			</div>
// 		)
// 	}
// }

class AddOption extends React.Component {
	constructor( props ) {
		super( props );
		this.handleAddOption = this.handleAddOption.bind( this );
		this.state = {
			error: undefined
		}
	}
	handleAddOption( e ) {
		e.preventDefault();
		{/* The event doesn't get explicitly handled  */}
		const option = e.target.elements.option.value.trim();
		{/* Removes extra spacing from front and back of input  */}
		const error = this.props.handleAddOption( option );
		this.setState( () => ({ error }));
		if( !error ) {
			e.target.elements.option.value = "";
		}
		{/* Clears input  */}
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form action="" onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		)
	}
}

ReactDOM.render( <IndecisionApp />, document.getElementById("app") );