import Button from 'components/Button/Button';
import TextInput from 'components/TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ListForm.module.scss'
import { addList } from 'src/redux/listsRedux';

const ListForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const  handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description}))
        setTitle('');
        setDescription('');
    }
    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
        Title: <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
        Description: <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <Button>ADD LIST</Button>
    </form>
    )
};

export default ListForm;