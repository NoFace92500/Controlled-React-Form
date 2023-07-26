import { useState } from "react";

export default function SignUpForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const reuqestOptions = {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'Username and Password' })
            };
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", reuqestOptions)
            const result = await response.json();
            console.log(result)
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <>
            <h2>Sign up!</h2>;
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} >
                <label>
                    Username: {" "} <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label >
                    Password: {" "} <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}