import React from "react";
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";
import useParentHook from "../hooks/useParentHook";

const Home = () => {
    const {
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
    } = useParentHook();

    return (
        <>
            <Header handleClearTodos={handleClearTodos} />
            <ListItems
                todos={todos}
                setTodos={setTodos}
                handleTriggerEdit={handleTriggerEdit}
            />
            <InputModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                todoInputValue={todoInputValue}
                setTodoInputValue={setTodoInputValue}
                handleAddTodo={handleAddTodo}
                todos={todos}
                todoToBeEdited={todoToBeEdited}
                setTodoToBeEdited={setTodoToBeEdited}
                handleEditTodo={handleEditTodo}
            />
        </>
    );
};

export default Home;
