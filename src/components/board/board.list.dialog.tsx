import { Col, Modal, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
interface IBoardListDialog {
  isVisible: boolean;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
}
const BoardListDialog = ({ isVisible, onCancel, onOk }: IBoardListDialog) => {
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
          <p>asdasdas</p>
          <TextArea />
        </Col>
        <Col span={8}>
          <p>asdasdas</p>
        </Col>
      </Row>
    </Modal>
  );
};
export default BoardListDialog;
