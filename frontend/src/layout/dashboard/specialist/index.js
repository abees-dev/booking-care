import React from 'react';
import DashBoardLayout from '../../../components/LayoutContainer/DashBoardLayout';
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
   console.log('handleEditorChange', html, text);
}
const Specialist = () => {
   return (
      <>
         <DashBoardLayout>
            <MdEditor
               style={{ height: '500px' }}
               renderHTML={(text) => mdParser.render(text)}
               onChange={handleEditorChange}
            />
         </DashBoardLayout>
      </>
   );
};

export default Specialist;
