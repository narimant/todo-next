import { RiMastodonLine } from "react-icons/ri";

const Tasks = ({ data, next, back, fetchTodos }) => {
  const changeStatus = async (id, status) => {
    const res = await fetch("/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ id, status }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if ((data.status = "success")) {
        fetchTodos();
    }
  };
  return (
    <div className="tasks">
      {data?.map((item, index) => (
        <div key={index} className="tasks__card">
          <span className={item.status}></span>
          <RiMastodonLine />
          <h4>{item.title}</h4>
          <div>
            {back && (
              <button
                onClick={() => changeStatus(item._id, back)}
                className="button-back"
              >
                back
              </button>
            )}
            {next && (
              <button
                onClick={() => changeStatus(item._id, next)}
                className="button-next"
              >
                next
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
