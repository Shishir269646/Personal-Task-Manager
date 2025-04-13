"use client";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/slices/taskSlice';
import Navbar from '../components/Navbar';

const Tasks = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector(state => state.tasks);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:4000/api/tasks', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                dispatch(setTasks(res.data));
            } catch (error) {
                alert('Failed to fetch tasks');
            }
        };
        fetchTasks();
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <h1>My Tasks</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                        <p>Category: {task.category}</p>
                        <p>{task.completed ? 'Completed' : 'Pending'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
