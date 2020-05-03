import React from 'react';
import './TodoApp.css';
import ListItem from './ListItem';
import {Library, library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
 class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }
    handleInput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        });
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text!==''){
            const newItems =[...this.state.items,newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    deleteItem(key){
        const filteredItem = this.state.items.filter(item=> item.key!==key);
        this.setState({
            items:filteredItem
        });
    }
    setUpdate(value,key){
        const items = this.state.items;
        items.map(item=>{
            if(item.key===key){
                item.text=value
            }
        });
        this.setState({
            items:items
        })
    }
    render(){
        return(
            <div className='todoApp'>
                <form id="to-do-form" onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter text.."
                    value={this.state.currentItem.text}
                    onChange={this.handleInput}/>
                    <button type="submit">Add</button>
                </form>
                <ListItem 
                    items={this.state.items} 
                    deleteItem={this.deleteItem}
                    setUpdate={this.setUpdate}
                />
            </div>
        )
    }
}





export default TodoApp;