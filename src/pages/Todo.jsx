import React, {useState} from 'react';
import AuthStatus from "../api/AuthStatus";
import PostItem from "../components/PostItem/PostItem";
import PostList from "../components/PostList/PostList";
import ButtonTodo from "../components/UI/button/ButtonTodo";

const Todo = () => {
    const [posts, setPosts] = useState(
        [
            {id: 1, title: "Javascript", body: "Javascript - it is a programing language"},
            {id: 2, title: "Python", body: "Python - it is a programing language"},
            {id: 3, title: "Ruby", body: "Ruby - it is a programing language"},
            {id: 3, title: "Golang", body: "Golang - it is a programing language"},
        ]
    )
    return (
        <div>
            <AuthStatus/>
            Todo Page
            <form>
                <input type="text" placeholder="Название поста"/>
                <input type="text" placeholder="Описание поста"/>
                <ButtonTodo>Создать пост</ButtonTodo>
            </form>
            <PostList posts={posts} title={"Cписок постов"}/>
        </div>
    );
};

export default Todo;