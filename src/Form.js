import './Form.css';

    function Form() {
        return (
            <form className='Form'>
                <label>
                    Full name: 
                    <input type="text" name="fullName"/>
                </label><br/>
                <label>
                    E-mail address: 
                    <input type="text" name="email"/>
                </label><br/>
                <label>
                    Phone number: 
                    <input type="text" name="phone"/>
                </label><br/>
                <label>
                    Message: 
                    <textarea name="message"/>
                </label><br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

export default Form;