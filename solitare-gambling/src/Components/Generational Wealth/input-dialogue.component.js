import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
const InputDialogue = ({ title, open, inputLabel, setOpen, onConfirm }) => {
    const [input, setInput] = useState('');

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-dialog"
        >
            <DialogTitle id="confirm-dialog">{title}</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                margin={'dense'}
                id="standard-helperText"
                label={inputLabel}
                value={input}
                onChange={(event) =>{setInput(event.target.value)}}/>

                
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() => {
                        setOpen(false);
                        onConfirm();
                    }}
                    color="default"
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}; export default InputDialogue;