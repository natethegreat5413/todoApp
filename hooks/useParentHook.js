import React, { useState } from "react";

const useParentHook = () => {
    // initial todos
    const initialTodos = [
        {
            title: "Get some snacks",
            date: "Fri, 08 Jan 2021 16:32:11 GMT",
            key: "1",
        },
        {
            title: "Get some Groceries",
            date: "Fri, 08 Jan 2021 16:32:11 GMT",
            key: "2",
        },
        {
            title: "Ride the rim trail",
            date: "Fri, 08 Jan 2021 16:32:11 GMT",
            key: "3",
        },
    ];

    const [todos, setTodos] = useState(initialTodos);
    const [modalVisible, setModalVisible] = useState(false);
    const [todoInputValue, setTodoInputValue] = useState("");
    const [todoToBeEdited, setTodoToBeEdited] = useState();

    const handleEditTodo = (editedTodo) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex(
            (todo) => todo.key === editedTodo.key
        );
        newTodos.splice(todoIndex, 1, editedTodo);
        setTodos(newTodos);
        setTodoToBeEdited(null);
        setModalVisible(false);
    };

    const handleTriggerEdit = (item) => {
        setTodoToBeEdited(item);
        setModalVisible(true);
        setTodoInputValue(item.title);
    };

    const handleClearTodos = () => {
        setTodos([]);
    };

    const handleAddTodo = (todo) => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        setModalVisible(false);
    };

    return {
        setTodos,
        todos,
        modalVisible,
        setModalVisible,
        todoInputValue,
        setTodoInputValue,
        todoToBeEdited,
        setTodoToBeEdited,
        handleEditTodo,
        handleTriggerEdit,
        handleClearTodos,
        handleAddTodo,
        initialTodos,
    };
};

export default useParentHook;
