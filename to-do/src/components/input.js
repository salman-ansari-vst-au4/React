import React from 'react';

class Input extends React.Component {

    state = {
        todo: "",
        date: ""
    }

    addTodo(todo) {
        this.setState({
            todo: todo
        })
    }

    addDate(date) {
        this.setState({
            date: date
        })
    }

    submitForm() {
        this.props.getTodoData(this.state);
        this.setState({
            todo: "",
            date: ""
        });
    }

    updateForm() {
        let newObject = {
            todo: this.state.todo,
            date: this.state.date,
            isEdit: false
        };
        this.props.getUpdatedData(newObject);
        this.setState({
            todo: "",
            date: "",
            isEdit: false
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.todoEdit !== prevProps.todoEdit) {
            this.setState({
                todo: this.props.todoEdit.todo,
                date: this.props.todoEdit.date,
                isEdit: true
            });
        }
    }

    date() {
        let curr = new Date();
        curr.setDate(curr.getDate());
        return curr.toISOString().substr(0, 10)
    }

    render() {
        return (
            <form className="mb-4">
                <div className="">
                    <div className="mx-auto w-25 m-1">
                        <input
                            type="text"
                            value={this.state.todo}
                            className="form-control shadow-sm"
                            placeholder="Task"
                            onChange={event => { this.addTodo(event.target.value) }} />
                    </div>
                    <div className="mx-auto w-25 m-1">
                        <input
                            type="date"
                            min={this.date()}
                            value={this.state.date}
                            className="form-control shadow-sm"
                            onChange={event => { this.addDate(event.target.value) }}
                            placeholder="Email" />
                    </div>
                    <div className="mx-auto w-25 m-1 pt-1 text-center">
                        <button
                            type="button"
                            className="btn btn-info "
                            onClick={e => {
                                e.preventDefault();
                                if (this.state.isEdit) {
                                    this.updateForm();
                                } else {
                                    this.submitForm();
                                }
                            }}>
                            {this.state.isEdit ? "Update" : "Add"}
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Input;