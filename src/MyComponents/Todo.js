import React from "react";

export const Todo = ({todo, onDelete, onEdit}) => {
    if(!todo) { // checking if object of array is defined or not
        return null;
    }
    return (
        <div style={{margin: "30px 0"}}>
            <hr />
            <h4>{todo.title}</h4>
            <div className="my-2" style={{ whiteSpace: "pre-wrap" }}>
				{todo.desc.split("\n").map((line, index) => (
					<p key={index} style={{ margin: "0" }}>
						{line}
					</p>
				))}
			</div>
            <p><b>Time:</b> {todo.time}</p>
            <button className="btn btm-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
            <button className="btn btm-sm btn-primary ms-3" onClick={() => onEdit(todo)}>Edit</button>
        </div>
    );
};
