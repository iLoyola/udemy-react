console.log( "App is running" );

const app = {
	title: "Indecesion App",
	subtitle: "Subtitle for app tst",
	options: []
};

const onFormSubmit = ( e ) => {
	e.preventDefault();
	const option = e.target.elements.option.value;

	if( option ) {
		app.options.push( option );
		e.target.elements.option.value = "";
		templateRenderer();
	}
};

const removeAll = () => {
	app.options = [];
	templateRenderer();
};

const onMakeDecision = () => {
	const randomNum = Math.floor( Math.random() * app.options.length );
	const option = app.options[randomNum];
	alert( option );
};

const appRoot = document.getElementById( "app" );

const templateRenderer = () => {
	const template = (
		<div>
			<h2>{app.title}</h2>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? "Here are my options" : "No options"}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={removeAll}>Remove All</button>
			<ol>
				{app.options.map( ( option ) => <li key={option}>{option}</li>)}
			</ol>
			<form action="" onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>	
	);
	ReactDOM.render( template, appRoot );
}

templateRenderer();