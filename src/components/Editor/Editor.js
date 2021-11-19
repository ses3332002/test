import './Editor.css';

function Editor(props) {
  return (
    <div className="content content2">
      this is Editor page {props.prop1}
      {props.prop2}
    </div>
  );
}

export default Editor;
