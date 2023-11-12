import { Modal, Typography, Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface EndModalProps {
  isOpen: boolean;
}

const EndModal: React.FC<EndModalProps> = ({ isOpen }) => {
  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            結果
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4 }}>
            かかった時間：実装までちょっとまってね
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            ミスタイプ数：実装までちょっとまってね
          </Typography>
          <Button
            sx={{ mt: 4 }}
            variant="contained"
            onClick={() => window.location.reload()}
          >
            リトライ
          </Button>
          <Link to="/">
            <Button sx={{ mt: 4, ml: 1 }} variant="outlined">
              スタートに戻る
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
};

export default EndModal;
