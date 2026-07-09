import {useState} from "react";
import {supabase} from "@/lib/supabase";
import {useNavigate} from "react-router";
import {LoginForm} from "@/components/login-form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login() {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            navigate("/dashboard");
        }
    }

    return (
        <>
            <LoginForm title="Login" className="w-[450px] mx-auto mt-15">
                <div className="grid gap-4">
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />

                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />

                    <Button onClick={login}>
                        Login
                    </Button>
                </div>
            </LoginForm>

        </>
    );

}
