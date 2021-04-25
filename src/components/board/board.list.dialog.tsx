import { faBug, faLink, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useMemo, useRef, useState } from "react";
import { Col, Modal, Row, Button } from "antd";
// const RichTextExample = () => {
//   const [value, setValue] = useState<Descendant[]>(initialValue)
//   const renderElement = useCallback(props => <Element {...props} />, [])
//   const renderLeaf = useCallback(props => <Leaf {...props} />, [])
//   const editor = useMemo(() => withHistory(withReact(createEditor())), [])

//   return (
//     <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      
//       <Editable
//         renderElement={renderElement}
//         renderLeaf={renderLeaf}
//         placeholder="Enter some rich text…"
//         spellCheck
//         autoFocus
//         onKeyDown={event => {
//           for (const hotkey in HOTKEYS) {
//             if (isHotkey(hotkey, event as any)) {
//               event.preventDefault()
//               const mark = HOTKEYS[hotkey]
//               toggleMark(editor, mark)
//             }
//           }
//         }}
//       />
//     </Slate>
//   )
// }


interface IBoardListDialog {
  isVisible: boolean;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
}
const BoardListDialog = ({ isVisible, onCancel, onOk }: IBoardListDialog) => {
  const editor = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  return (
    <Modal
      title="Drag and drop issue"
      visible={isVisible}
      style={{ backdropFilter: "blur( 3.0px )" }}
      onOk={onOk}
      onCancel={onCancel}
      width={window.innerWidth / 1.8}
      className="board--list--dialog"
    >
      <Row>
        <Col span={16}>
          <div className="actions">
            <Button
              type="default"
              icon={<FontAwesomeIcon icon={faPaperclip} />}
            >
              Attach
            </Button>
            <Button type="default" icon={<FontAwesomeIcon icon={faBug} />}>
              Add a child issue
            </Button>
            <Button type="default" icon={<FontAwesomeIcon icon={faLink} />}>
              Link Issue
            </Button>
          </div>

          
        </Col>
        <Col span={8}>
          <p>asdasdas</p>
        </Col>
      </Row>
    </Modal>
  );
};
export default BoardListDialog;
