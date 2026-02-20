import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
} from "reactstrap";


const SharePosts = () => {
  return (
    <Container>
      <Row>
        <Col>
        <Input
        id="share"
        name="share"
        placeholder="share your thoughts..."
        type="textarea">
        </Input>
        <Button>PostIT</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SharePosts;
