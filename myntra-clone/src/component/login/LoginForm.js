import React,{useState} from "react";

const LoginForm = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("")
    // const [pass, setPass] = useState("")
    // const [npass, setNpass] = useState("")

    const [value, setValue] = useState({
        name: "",
        email: "",
        pass: "",
        npass: "",
        state: ""
    });

    // DRY
    // const changeName = (e) => {
    //     setName(e.target.value);
    // }

    // const changeEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    // const changePassword = (e) => {
    //     setPass(e.target.value);
    // }

    // const changeNpass = (e) => {
    //     setNpass(e.target.value);
    // }

    const handleInputChange = (e) => {
        // console.log(e.target.name)
        // setValue("hello")

        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    }

    return(
        <form>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Name : </span></label>
                <input className="input" name="name" required type="text" onChange={handleInputChange} value={value.name}/>
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Email : </span></label>
                <input className="input" name="email" required type="email" onChange={handleInputChange} value={value.email}/>
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Password : </span></label>
                <input className="input" name="pass" required type="password" onChange={handleInputChange} value={value.pass}/>
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Re-enter your password : </span></label>
                <input className="input" name="npass" required type="password" onChange={handleInputChange} value={value.npass}/>
            </div>
            <div className="input_group">
            <label className="input_label red_star"><span className="label_text">State </span></label>
            <select value={value.state} name="state" onChange={handleInputChange}>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Goa">Goa</option>
                <option value="Punjab">Punjab</option>
            </select>
            </div>
        </form>
    )
}

export default LoginForm;