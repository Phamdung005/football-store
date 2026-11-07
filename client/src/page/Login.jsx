import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/auth/dang-nhap", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await response.json();
        if (response.ok === false) {
            alert(data.message);
            return;
        }
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        if (data.user.role === "admin") {
            navigate("/admin");
        } else {
            navigate("/");
        }
        alert("Đăng nhập thành công");
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md p-8 border rounded-xl">
                    <h1 className="flex items-center justify-center p-10 font-bold">ĐĂNG NHẬP</h1>
                    <div className="flex items-center justify-center">
                        <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col gap-4 w-80">
                            <input type="email"
                                placeholder="Email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border p-3"
                            />

                            <input type="password"
                                placeholder="Password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border p-3"
                            />
                            <button type="submit"
                                className="bg-gray-200 p-3 border border-gray-200 rounded-md w-full hover:bg-gray-300 cursor-pointer"
                            >Đăng nhập</button>
                            <h2>Chưa có tài khoản?<Link to="/dang-ky"><span className="font-bold hover:text-red-500"> Đăng Ký</span></Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;