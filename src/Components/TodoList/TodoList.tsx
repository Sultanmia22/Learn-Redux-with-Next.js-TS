'use client';

import React from 'react';
import { Plus, Trash2, Check, ListTodo } from 'lucide-react';

export default function TodoList() {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-card border border-border/60 rounded-2xl shadow-xl backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
          <ListTodo className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Todo List</h3>
          <p className="text-xs text-muted-foreground">Manage your tasks effortlessly</p>
        </div>
      </div>

      {/* Input Box & Add Button */}
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter a task..."
          className="flex-1 px-4 py-2.5 bg-muted/50 border border-border/80 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
        />
        <button
          type="button"
          className="px-4 py-2.5 bg-primary text-primary-foreground font-medium rounded-xl text-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5 shadow-md shadow-primary/20 shrink-0"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Items Container Div */}
      <div className="space-y-2 min-h-40 p-2 bg-muted/20 border border-border/40 rounded-xl">
        
        {/* Sample Item 1: Active Task */}
        <div className="flex items-center justify-between p-3 rounded-lg border bg-card border-border/70 hover:border-primary/40 shadow-xs transition-all">
          <div className="flex items-center gap-3 cursor-pointer flex-1 min-w-0">
            <div className="w-5 h-5 rounded-md border border-muted-foreground/40 flex items-center justify-center transition-all"></div>
            <span className="text-sm font-medium truncate text-foreground">
              Learn Redux Toolkit & Auth.js
            </span>
          </div>
          <button
            type="button"
            className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors ml-2"
            title="Delete Task"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}