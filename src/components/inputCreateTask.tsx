import { PlusCircle } from 'phosphor-react'
import { useState, ChangeEvent, FormEvent } from 'react'
import styles from './inputCreateTask.module.css'

interface onCreateTask {
    onCreateTask: (content: String) => void
} 

export function InputCreateTask({ onCreateTask }: onCreateTask) {
    const [content, setContent] = useState("")
    const error = content.length === 0

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        const contentTask = event.target.value

        setContent(contentTask);
    }

    function handleSubmit(event: FormEvent) {
      event.preventDefault()

      if(!error) {
        setContent("")
        onCreateTask(content)
      }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formCreateTask}>
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa' 
            value={content} 
            onChange={onChange}  
          />

          <button type='submit' disabled={error} >
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
    )
}