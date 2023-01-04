import { useNavigate } from 'react-router-dom';

//Material UI
import { Close } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';

//Others
import './AuthenDialog.scss';
import { NotiDialogProps } from './constants';

interface Props {
    open: boolean;
    setOpen: any;
    dialogContent: NotiDialogProps;
}

const AuthenDialog = ({ open, setOpen, dialogContent }: Props) => {
    const navigate = useNavigate();
    const handleClose = () => {
        setOpen(false);

        if (dialogContent.type === 'success') {
            //Navigate to home
            navigate('/');
        }
    };

    return (
        <Dialog className={`authen__dialog ${dialogContent.type}`} open={open} onClose={() => setOpen(false)}>
            <Button className="authen-dialog__close-btn" variant="text" color="error" onClick={handleClose}>
                <Close />
            </Button>
            <DialogTitle className="authen-dialog__title">{dialogContent.title}</DialogTitle>
            <DialogContent className="authen-dialog__content">{dialogContent.content}</DialogContent>
        </Dialog>
    );
};

export default AuthenDialog;
