import React from 'react';

class List extends React.Component {

    completed() {
        if (!this.props.completed) {
            let newObject = {
                todo: this.props.todo,
                date: this.props.date,
                completed: true
            }
            this.props.completeIndex(newObject, this.props.index);
        }
        else {
            let newObject = {
                todo: this.props.todo,
                date: this.props.date,
                completed: false
            }
            this.props.completeIndex(newObject, this.props.index);
        }
    }

    render() {
        return (
            <li className="list-group-item p-1">
                < button className="btn  m-1 pt-1 px-1" onClick={() => this.completed()}>
                    <i className={this.props.completed ? "far fa-check-square text-success" : "far fa-square text-danger"} />
                </button>
                <span className={this.props.completed ? "text-success" : "text-danger"}>
                    {this.props.todo} ({this.props.date})
                     </span>
                < button className="btn  m-1 pt-1 px-2 float-right" onClick={() => this.props.deleteIndex(this.props.index)}>
                    <i className="far fa-trash-alt text-danger" />
                </button>
                < button className="btn  m-1 pt-1 px-2 float-right" onClick={() => this.props.editIndex(this.props.index)}>
                    <i className="far fa-edit text-info" />
                </button>
            </li>
        );
    }
}

export default List;