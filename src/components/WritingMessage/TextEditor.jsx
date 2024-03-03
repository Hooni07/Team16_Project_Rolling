import React, {
  useMemo,
  useState,
} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
  'size',
  'h1',
];

function EditorBox({ onContentChange }) {
  const [values, setValues] = useState('');

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

  const handleKeyUp = () => {
    if (values === '' || values === '<p><br></p>') {
      onContentChange(false);
    } else {
      onContentChange(true);
    }
  };

  return (
    <ReactQuill
      theme="snow"
      style={{ width: '720px', height: '260px' }}
      modules={modules}
      formats={formats}
      onChange={setValues}
      onKeyUp={handleKeyUp}
    />

  );
}
export default EditorBox;
