import TodoItem from './TodoItem';
import { Todo } from "type"


interface Props {
  todos: Todo[]
  onToggleDone: (id: number) => void
  onSave: (params: { id: number, title: string }) => void
  onDelete: (id: number) => void
  onChangeMode: (params: { id: number, isEdit: boolean }) => void

}
const TodoCollection:React.FC<Props> = ({
  todos,
  onToggleDone,
  onSave,
  onDelete,
  onChangeMode
}) => {
  return (
    <>
      {
        todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            onToggleDone={(id) => onToggleDone?.(id)}
            onChangeMode={({ id, isEdit }) => onChangeMode?.({id, isEdit})}
            onSave={({id, title}) => onSave?.({id, title})}
            onDelete={(id) => onDelete?.(id)}
          /> 
        ))
      }
    </>
  );
};

export default TodoCollection;
