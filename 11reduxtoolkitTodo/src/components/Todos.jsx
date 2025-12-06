import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editableId, setEditableId] = useState(null);
    const [editText, setEditText] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (editableId !== null && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editableId]);

    function editTodo(id){
        dispatch(updateTodo({ id, text: editText }));
        setEditableId(null);
        setEditText('');
    }

    function startEdit(todo) {
        setEditableId(todo.id);
        setEditText(todo.text);
    }

    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <div className="text-2xl font-bold mb-4 text-white">Todos</div>
            <ul className="list-none">
            {todos.map((todo) => (
                <li
                className="mt-4 flex items-center bg-zinc-800 px-4 py-2 rounded gap-2"
                key={todo.id}
                >
                <input 
                    ref={editableId === todo.id ? inputRef : null}
                    className={`flex-1 text-white bg-transparent border-none outline-none px-2 py-1 rounded transition-all ${
                        editableId === todo.id 
                            ? 'bg-zinc-700 ring-2 ring-blue-500 shadow-lg' 
                            : 'bg-transparent'
                    }`}
                    value={editableId === todo.id ? editText : todo.text}
                    onChange={(e) => setEditText(e.target.value)}
                    readOnly={editableId !== todo.id}
                />
                <button 
                onClick={() => {
                    if(editableId === todo.id){
                        editTodo(todo.id)
                    } else {
                        startEdit(todo)
                    }
                }}
                className="text-xl hover:scale-110 transition-transform flex-shrink-0"
                >
                    {editableId === todo.id ? "📁" : "✏️"}
                </button>
                <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md flex-shrink-0"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                    </svg>
                </button>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Todos