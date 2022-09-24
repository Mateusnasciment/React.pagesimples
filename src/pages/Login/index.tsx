import { HtmlHTMLAttributes, useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');

const handlelogin = () => {

}

    return (
        <div className="pag-login">
            <h2> Página fechada 
                
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder= "Digite seu e-mail"
                />

                <input
                     type="password" 
                     value={password} 
                     onChange={e => setPassword(e.target.value)}
                     placeholder= "Digite sua senha"
                />
            </h2>
        </div>
    )
}
