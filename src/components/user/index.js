import React, {useState, useLayoutEffect, useEffect} from 'react';
import { Search } from './search';
import { TableUsers } from '../table/user';
import styles from '../../styles/user-homepage.module.css';

const User = ({title, fetchUsers, auth, user, link}) => {
    const [selected, setSelected] = useState("All");
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    useLayoutEffect(()=>{
        const body = {
            name: name,
            status: selected
        }
        fetchUsers(auth.token, link, JSON.stringify(body))
    }, [])

    useEffect(() => {
        setUsers(user.users);
        
    }, [user])

    const handleSelect = (item) => {
        setSelected(item);
        const body = {
            name: name,
            status: item
        }
        fetchUsers(auth.token, link, JSON.stringify(body))
    }
    const handleChange = (e) => {
        setName(e.target.value);
        const body = {
            name: e.target.value,
            status: selected
        }
        fetchUsers(auth.token, link, JSON.stringify(body))
    }
    return (
        <div className={styles.container}>
            <Search
                selected = {selected}
                handleSelect = {handleSelect}
                handleChange = {handleChange}
                name = {name}
            />
            <TableUsers
                users = {users}
                link = {link}
            />
        </div>
    )
}

export default User;