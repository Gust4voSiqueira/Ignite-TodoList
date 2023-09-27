import { Check, Trash } from 'phosphor-react';
import styles from './task.module.css'

interface Task {
    id: number;
    content: String,
    onCompleteTask: (idTask: Number) => void,
    onDeleteTask: (idTask: Number) => void,
    isCompletedTask: Boolean
}

export function Task({ id, content, onCompleteTask, isCompletedTask, onDeleteTask }: Task) {
    return (
        <div className={styles.taskContainer}>
            <button 
                onClick={() => onCompleteTask(id)} 
                className={isCompletedTask && styles.completedTask}
            >
                {isCompletedTask && <Check size={15} className={styles.iconChecked} />}
            </button>

            <p className={isCompletedTask ? styles.completedTaskContent : styles.taskContent}>
                {content}
            </p>

            <Trash 
                size={20} 
                className={styles.iconTrash} 
                onClick={() => onDeleteTask(id)}
            />
        </div>
        )
}