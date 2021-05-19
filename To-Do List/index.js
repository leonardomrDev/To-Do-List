class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {is_done: false};

    }

    render() {
        return (
            <ul class="custom-ul">
                {this.props.task}                
                <button class="btn-task-remove" /> 
            </ul>
        );
    }
}

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            to_do_list: ['Finish this test', 'Get hired', 'Change the world', ]
            
    };
		this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);        
        
    }

    handleCheck(index, event){
        this.setState(state => ({
            completed: { ...state.completed, [index]: !state.completed[index] }
          }));
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({task : event.target.value})
    }

	handleSubmit(event){
        this.setState({
            to_do_list: [].concat(this.state.to_do_list, this.state.task)
        });
    }

    render() {
        return (
        <body class="">
            <div class="custom-div">
                <h2>Add a new task to your to-do list</h2>
                <input type= "text" class= "custom-input" onChange = {this.handleChange} />
                &nbsp;
                <button class="custom-button" onClick = {this.handleSubmit}>Add</button>
                <ul>
                    {this.state.to_do_list.map((task_text) =>
                        <ToDoItem task={task_text} />
                    )}
                </ul>
            </div>
        </body>
        );
    }
}

ReactDOM.render(
    <ToDoList/>,
    document.getElementById('root')
);