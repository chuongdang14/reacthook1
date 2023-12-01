import { useState, useEffect } from 'react'
import axios from 'axios'

const TodoAPI = () => {
    const [api, setAPI] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    useEffect(async () => {
        try {
            let res = await axios.get('https://123jsonplaceholder.typicode.com/todos')
            let api = res && res.data ? res.data : []
            setAPI(api)
            setLoading(false)
        }
        catch (e) {
            setErr(true)
            setLoading(false)
        }
    }, [])
    return (

        <table id="customers">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {err == false && loading == false && api && api.length > 0 && api.map(item => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{JSON.stringify(item.completed)}</td>
                        </tr>
                    )
                })}
                {loading == true &&
                    <tr>
                        <td colSpan={'5'} style={{ 'textAlign': 'center' }}>Loading data...</td>
                    </tr>
                }
                {err == true &&
                    <tr>
                        <td colSpan={'5'} style={{ 'textAlign': 'center' }}>Can't take API</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default TodoAPI