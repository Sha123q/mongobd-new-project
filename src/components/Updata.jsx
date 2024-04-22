
import { useLoaderData } from 'react-router-dom';

const Updata = () => {
    const handleUpdata = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = {name, email}

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method :'PUT',
            headers:{
             'content-type': 'application/json'   
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
        })
    }

    const loadedUser = useLoaderData()
    return (
        <div>
            <h3>Update information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdata}>
                <input type="text" name='name' defaultValue={loadedUser?.name}  id=''/>
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Updata;


