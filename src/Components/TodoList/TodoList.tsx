'use client';

import React from 'react';
import { Plus, Trash2, Check, ListTodo } from 'lucide-react';

export default function TodoList() {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-cyan-400/10 rounded-xl text-cyan-400">
          <ListTodo className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-100">Todo List</h3>
          <p className="text-xs text-neutral-400">Manage your tasks effortlessly</p>
        </div>
      </div>

      {/* Input Box & Add Button */}
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter a task..."
          className="flex-1 px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-neutral-100 placeholder:text-neutral-500"
        />
        <button
          type="button"
          className="px-4 py-2.5 bg-cyan-500 text-neutral-950 font-medium rounded-xl text-sm hover:bg-cyan-400 active:scale-95 transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20 shrink-0"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Items Container Div */}
      <div className="space-y-2 min-h-40 p-2 bg-neutral-950/40 border border-neutral-800/60 rounded-xl">
        
        {/* Sample Item 1: Active Task */}
        <div className="flex items-center justify-between p-3 rounded-lg border bg-neutral-900 border-neutral-800 hover:border-cyan-400/40 shadow-xs transition-all">
          <div className="flex items-center gap-3 cursor-pointer flex-1 min-w-0">
            <div className="w-5 h-5 rounded-md border border-neutral-600 flex items-center justify-center transition-all"></div>
            <span className="text-sm font-medium truncate text-neutral-100">
              Learn Redux Toolkit & Auth.js
            </span>
          </div>
          <button
            type="button"
            className="p-1.5 text-neutral-400 hover:text-orange-400 hover:bg-orange-400/10 rounded-lg transition-colors ml-2"
            title="Delete Task"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}