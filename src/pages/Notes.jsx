import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  Trash2,
  Pencil,
  Save,
  X,
  Sparkles,
  FileText
} from 'lucide-react';
import { useFitness } from '../context/FitnessContext';

export const Notes = () => {
  const { notes, addNote, updateNote, deleteNote } = useFitness();

  const [showForm, setShowForm] = useState(false);
  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!contentInput.trim()) return;
    addNote(titleInput || 'Untitled Note', contentInput);
    setTitleInput('');
    setContentInput('');
    setShowForm(false);
  };

  const handleStartEdit = (note) => {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
    setExpandedId(note.id);
  };

  const handleSaveEdit = (id) => {
    if (!editContent.trim()) return;
    updateNote(id, editTitle || 'Untitled Note', editContent);
    setEditingId(null);
  };

  const formatDate = (iso) => {
    return new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-200 text-[#2D2335]">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#FFF4E6] via-[#FFFBF0] to-[#F0F9FF] rounded-2xl p-4 border border-amber-100 flex items-center justify-between shadow-2xs">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Saved Notes</span>
          </div>
          <h1 className="font-extrabold text-lg sm:text-xl text-[#2D2335] mt-0.5 leading-tight">
            Notes
          </h1>
          <p className="text-xs text-[#7A6B80] font-medium">
            Save emails, reminders, and important info
          </p>
        </div>
        {notes.length > 0 && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-amber-200 text-amber-700 font-bold text-xs shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{notes.length} Note{notes.length !== 1 ? 's' : ''}</span>
          </div>
        )}
      </div>

      {/* Add Note Button / Form Toggle */}
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-dashed border-amber-200 text-amber-600 font-bold text-sm hover:bg-amber-50/50 hover:border-amber-300 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Note</span>
        </button>
      ) : (
        <form
          onSubmit={handleAdd}
          className="bg-white rounded-2xl p-4 border border-amber-200 shadow-sm space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">New Note</span>
            <button
              type="button"
              onClick={() => { setShowForm(false); setTitleInput(''); setContentInput(''); }}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <input
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            placeholder="Title (e.g. Doctor Email, Reminder...)"
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#2D2335] focus:outline-none focus:ring-2 focus:ring-amber-300 bg-gray-50"
          />
          <textarea
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
            placeholder="Write your note here... (email, reminder, anything important)"
            rows={4}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-[#2D2335] focus:outline-none focus:ring-2 focus:ring-amber-300 bg-gray-50 resize-none"
            autoFocus
          />
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => { setShowForm(false); setTitleInput(''); setContentInput(''); }}
              className="px-4 py-2 rounded-xl bg-gray-100 text-charcoal-700 font-semibold text-xs hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-400 text-white font-bold text-xs shadow-xs hover:shadow-md active:scale-95 transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              Save Note
            </button>
          </div>
        </form>
      )}

      {/* Notes List */}
      {notes.length > 0 && (
        <div className="space-y-3">
          {notes.map((note) => {
            const isEditing = editingId === note.id;
            const isExpanded = expandedId === note.id;

            return (
              <div
                key={note.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-2xs overflow-hidden hover:border-amber-200 transition-all"
              >
                {/* Note Header */}
                <div
                  className="flex items-center gap-3 p-3.5 cursor-pointer"
                  onClick={() => !isEditing && setExpandedId(isExpanded ? null : note.id)}
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-[#2D2335] truncate">{note.title}</h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">{formatDate(note.createdAt)}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleStartEdit(note); }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-amber-500 hover:bg-amber-50 transition-all"
                      title="Edit"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-50 transition-all"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Note Body (expanded or editing) */}
                {(isExpanded || isEditing) && (
                  <div className="px-3.5 pb-3.5 border-t border-gray-50">
                    {isEditing ? (
                      <div className="space-y-2.5 pt-3">
                        <input
                          type="text"
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          placeholder="Title..."
                          className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-[#2D2335] focus:outline-none focus:ring-2 focus:ring-amber-300 bg-gray-50"
                        />
                        <textarea
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          rows={4}
                          className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm text-[#2D2335] focus:outline-none focus:ring-2 focus:ring-amber-300 bg-gray-50 resize-none"
                          autoFocus
                        />
                        <div className="flex gap-2 justify-end">
                          <button
                            type="button"
                            onClick={() => setEditingId(null)}
                            className="px-3 py-1.5 rounded-xl bg-gray-100 text-charcoal-700 font-semibold text-xs hover:bg-gray-200 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSaveEdit(note.id)}
                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 transition-all"
                          >
                            <Save className="w-3 h-3" />
                            Save
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="pt-3 text-sm text-[#5A4D65] leading-relaxed whitespace-pre-wrap">
                        {note.content}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {notes.length === 0 && !showForm && (
        <div className="text-center py-14 flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-amber-300" />
          </div>
          <p className="text-sm font-semibold text-gray-400">No notes yet</p>
          <p className="text-xs text-gray-300">Tap "Add New Note" to save an email, reminder, or anything important</p>
        </div>
      )}
    </div>
  );
};
