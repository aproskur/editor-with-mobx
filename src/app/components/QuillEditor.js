import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuillEditor({ isVisible }) {
    const [editorValue, setEditorValue] = useState('');

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            [{ align: [] }],
            [{ color: [] }],
            ['code-block'],
            ['clean'],
        ],
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'align',
        'color',
        'code-block',
    ];

    return (
        <div style={{ display: isVisible ? 'block' : 'none' }}>
            <ReactQuill
                value={editorValue}
                onChange={(value) => setEditorValue(value)}
                modules={modules}
                formats={formats}
                placeholder="Write something amazing..."
            />
        </div>
    );
}

export default QuillEditor;
