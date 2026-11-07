import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  Trash2,
  Plus,
  ClipboardList,
  Sparkles
} from 'lucide-react';
import { useFitness } from '../context/FitnessContext';

export const TodoList = () => {
  const { todoList, addTodo, toggleTodo, deleteTodo } = useFitness();
  const [inputValue, setInputValue] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue('');
  };

  const pending = todoList.filter(t => !t.done);
  const done = todoList.filter(t => t.done);
  const pct = todoList.length > 0 ? Math.round((done.length / todoList.length) * 100) : 0;

  return (
    <div className="space-y-4 animate-in fade-in duration-200 text-[#2D2335]">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#F3EEFF] via-[#FAF0FF] to-[#FFE9F5] rounded-2xl p-4 border border-purple-100 flex items-center justify-between shadow-2xs">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>My Tasks</span>
          </div>
          <h1 className="font-extrabold text-lg sm:text-xl text-[#2D2335] mt-0.5 leading-tight">
            To-Do List
          </h1>
          <p className="text-xs text-[#7A6B80] font-medium">
            Add tasks &amp; mark them done
          </p>
        </div>
        {todoList.length > 0 && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-purple-200 text-purple-700 font-bold text-xs shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{done.length}/{todoList.length} Done ({pct}%)</span>
          </div>
        )}
      </div>

      {/* Add Task Form */}
      <form
        onSubmit={handleAdd}
        className="bg-white rounded-2xl p-3 border border-purple-100 shadow-2xs flex items-center gap-2.5"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 text-sm font-semibold text-[#2D2335] bg-transparent focus:outline-none placeholder:text-gray-300"
        />
        <button
          type="submit"
          className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-xs shadow-xs hover:shadow-md active:scale-95 transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add</span>
        </button>
      </form>

      {/* Pending Tasks */}
      {pending.length > 0 && (
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#2D2335] uppercase tracking-wider px-1">
            Pending ({pending.length})
          </span>
          {pending.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-2xl p-3.5 border border-gray-100 shadow-2xs flex items-center gap-3 group hover:border-purple-200 transition-all"
            >
              <button
                onClick={() => toggleTodo(task.id)}
                className="shrink-0 text-gray-300 hover:text-purple-500 transition-colors"
              >
                <Square className="w-5 h-5" />
              </button>
              <span className="flex-1 text-sm font-semibold text-[#2D2335]">
                {task.text}
              </span>
              <button
                onClick={() => deleteTodo(task.id)}
                className="shrink-0 p-1 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Completed Tasks */}
      {done.length > 0 && (
        <div className="space-y-2">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider px-1">
            Completed ({done.length})
          </span>
          {done.map((task) => (
            <div
              key={task.id}
              className="bg-emerald-50/60 rounded-2xl p-3.5 border border-emerald-100 shadow-2xs flex items-center gap-3 group"
            >
              <button
                onClick={() => toggleTodo(task.id)}
                className="shrink-0 text-emerald-500 hover:text-gray-400 transition-colors"
              >
                <CheckSquare className="w-5 h-5" />
              </button>
              <span className="flex-1 text-sm font-semibold text-gray-400 line-through">
                {task.text}
              </span>
              <button
                onClick={() => deleteTodo(task.id)}
                className="shrink-0 p-1 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {todoList.length === 0 && (
        <div className="text-center py-14 flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center">
            <ClipboardList className="w-7 h-7 text-purple-300" />
          </div>
          <p className="text-sm font-semibold text-gray-400">No tasks yet</p>
          <p className="text-xs text-gray-300">Type above and hit Add to get started</p>
        </div>
      )}
    </div>
  );
};
