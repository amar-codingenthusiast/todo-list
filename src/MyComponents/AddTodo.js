import React, { useEffect, useState } from "react";

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        setTitle(props.defaultTitle || "");
        setDesc(props.defaultDesc || "");
    }, [props.defaultTitle, props.defaultDesc]);

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("All field must be filled.");
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    };

    return (
        <form style={{ margin: "30px 0" }} onSubmit={submit}>
            <h4>Add A Todo</h4>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Todo Title
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    id="title"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                    Todo Description
                </label>
                <textarea
                    className="form-control"
                    id="desc"
                    rows="4"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-sm btn-success">
                {props.defaultTitle ? "Edit Todo" : "Add Todo"}
            </button>
        </form>
    );
}
