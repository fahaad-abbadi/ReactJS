import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component{
    state = {
        items: [],
        id : uuid(),
        item : "",
        editItem : false
    };

    handleChange = e => {
        this.setState({
            item : e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            id : this.state.id,
            title : this.state.item
        };

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: "",
            id: uuid(),
            editItem: false
        });
    };

    clearList = () => {
        this.setState({
            items: []
        });
    };

    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);

        this.setState({
            items: filteredItems
        });
    }

    handleEdit = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItems = this.state.items.find(item => item.id === id);

        console.log(selectedItems);

        this.setState({
            items: filteredItems,
            item: selectedItems.title,
            editItem: true,
            id: id
        });
    };
}