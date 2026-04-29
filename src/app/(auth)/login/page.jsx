'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleLoginFunc = async (data) => {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message);
        }

        if (res) {
            alert("Signup successful");
        }
    }

    return (
        <div className='container mx-auto bg-slate-100 flex items-center justify-center min-h-[80vh]'>
            <div className='bg-white rounded-xl p-20'>
                <p className="text-3xl font-bold text-center mb-8">Login your account</p>
                <form onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">

                        <label className="label text-black font-bold">Email Address</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Enter your email address"
                            {...register("email",
                                { required: "Email field id required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                        <label className="label text-black font-bold">Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Enter your password"
                            {...register("password",
                                { required: "Password field is required" })} />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <p className='mt-3 text-center'>Dont’t Have An Account ? <Link href={'/register'} className='text-blue-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;