import Link from "next/link";
import { Task } from "@/interfaces/Tasks";

interface Props {
  task: Task;
}

const getStatusColor = (status?: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "in-progress":
      return "bg-blue-100 text-blue-800";
    case "pending":
    default:
      return "bg-yellow-100 text-yellow-800";
  }
};

const getPriorityColor = (priority?: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-orange-100 text-orange-800";
    case "low":
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const TaskCard = ({ task }: Props) => {
  return (
    <Link
      href={`/tasks/edit/${task.id}`}
      className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold flex-1">{task.title}</h3>
      </div>
      
      <div className="flex gap-2 mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(task.status)}`}>
          {task.status || "pending"}
        </span>
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(task.priority)}`}>
          {task.priority || "medium"} priority
        </span>
      </div>

      {task.description && (
        <p className="text-gray-700 mb-2 line-clamp-2">{task.description}</p>
      )}
      
      {task.created_on && (
        <p className="text-sm text-gray-500">
          Created: {new Date(task.created_on).toLocaleDateString()}
        </p>
      )}
    </Link>
  );
}; 