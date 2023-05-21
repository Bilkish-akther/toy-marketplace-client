const Todo = ({ handleDelete, handleEdit, task, id, date }) => {
    return (
      <>
        <div className="result_text">
          <h3>{task}</h3>
          <p className="result_textP">{date}</p>
        </div>
        <div>
          <button onClick={() => handleEdit(id, task)} className="button green">
            Edit
          </button>
          <button onClick={() => handleDelete(id)} className="button">
            delete
          </button>
        </div>
      </>
    );
  };
  
  export default Todo;