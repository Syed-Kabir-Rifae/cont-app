import React from 'react';

class AddContact extends React.Component{
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className='field'>
                        <label>Name:</label><br>
                        </br>
                        <input type="text" name="name" placeholder="Name"/>
                    </div><br></br>
                    <div className='field'>
                        <label>Email:</label><br></br>
                        <input type="text" name="email" placeholder="Email"/>
                    </div><br></br>
                    <button ClassName="ui button">Add/Register</button><br>
                    </br>
                </form>
            </div>
        );
    }
}

export default AddContact;