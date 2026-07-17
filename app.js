const tasks = [
  { id: 1, text: "了解 Git 仓库、工作区和暂存区的基本概念", completed: false },
  { id: 2, text: "手动初始化仓库并查看当前状态", completed: false },
  { id: 3, text: "把新建网页文件加入暂存区", completed: false },
  { id: 4, text: "创建第一次提交并编写清晰的提交说明", completed: false },
  { id: 5, text: "查看提交历史并理解 HEAD 指向", completed: false }
];

const taskList = document.querySelector("#task-list");
const completedCount = document.querySelector("#completed-count");

function updateCompletedCount() {
  const completedTasks = tasks.filter((task) => task.completed).length;
  completedCount.textContent = String(completedTasks);
}

function markTaskAsCompleted(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task || task.completed) {
    return;
  }

  task.completed = true;
  renderTasks();
}

function createTaskItem(task) {
  const listItem = document.createElement("li");
  listItem.className = task.completed ? "task-item completed" : "task-item";

  const taskText = document.createElement("p");
  taskText.className = "task-text";
  taskText.textContent = task.text;

  const button = document.createElement("button");
  button.className = "task-button";
  button.type = "button";
  button.textContent = task.completed ? "已完成" : "标记完成";
  button.disabled = task.completed;
  button.addEventListener("click", () => {
    markTaskAsCompleted(task.id);
  });

  listItem.append(taskText, button);
  return listItem;
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    taskList.appendChild(createTaskItem(task));
  });

  updateCompletedCount();
}

renderTasks();
