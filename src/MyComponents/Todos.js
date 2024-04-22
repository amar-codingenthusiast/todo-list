import { Todo } from "./Todo";
import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";

export const Todos = () => {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title, desc) => {
        const currTime = new Date().toLocaleString();
        if (editTodo) {
            const updatedTodos = todos.map((todo) => {
                if (todo === editTodo) {
                    return { ...todo, title, desc, time: currTime };
                }
                return todo;
            });
            setTodos(updatedTodos);
            setEditTodo(null);
        } else {
            let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
            const newTodo = {
                sno: sno,
                title: title,
                desc: desc,
                time: currTime,
            };
            setTodos([...todos, newTodo]);
        }
    };

    const onDelete = (todo) => {
        setTodos(todos.filter((obj) => obj !== todo));
    };

    const [editTodo, setEditTodo] = useState(null);
    const onEdit = (todo) => {
        setEditTodo(todo);
    };

    useEffect(() => {
        if (editTodo) {
            const addTodoElement = document.querySelector(".navbar");
            if (addTodoElement) {
                addTodoElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [editTodo]);

    return (
        <div className="container my-3">
            <AddTodo
                addTodo={addTodo}
                defaultTitle={editTodo ? editTodo.title : ""}
                defaultDesc={editTodo ? editTodo.desc : ""}
            />
            <h2 className="text-center my-3">
                <u>Todos List</u>
            </h2>
            {todos.length === 0
                ? "No Todos to display."
                : todos.map((todo) => (
                      <Todo
                          key={todo.sno}
                          todo={todo}
                          onDelete={onDelete}
                          onEdit={onEdit}
                      />
                  ))}
        </div>
    );
};
