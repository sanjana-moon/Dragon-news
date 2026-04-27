'use client'
import Link from 'next/link';

const LoginPage = () => {

    const handleLoginFunc = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

    }


    return (
        <div className='container mx-auto bg-slate-100 flex items-center justify-center min-h-[80vh]'>
            <div className='bg-white rounded-xl p-20'>
                <p className="text-3xl font-bold text-center mb-8">Login your account</p>
                <form onSubmit={handleLoginFunc}>
                    <fieldset className="fieldset">

                        <label className="label text-black">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />

                        <label className="label text-black">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <p className='mt-3 text-center'>Dont’t Have An Account ? <Link href={'/register'} className='text-blue-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;