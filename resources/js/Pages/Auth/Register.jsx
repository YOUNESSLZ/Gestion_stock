// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';
// import './registercss.css';
// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('register'), {
//             onFinish: () => reset('password', 'password_confirmation'),
//         });
//     };
// // 
//     return (
//         <GuestLayout>
//             <Head title="Register" />

//             <div className="register-container">
//                 <form className="form" onSubmit={submit}>
//                     <p className="title">Register</p>
//                     <p className="message">Signup now and get full access to our app.</p>
                    
//                     <div className="flex">
//                         <label>
//                             <input
//                                 className="input"
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={data.name}
//                                 autoComplete="name"
//                                 onChange={(e) => setData('name', e.target.value)}
//                                 required
//                                 placeholder=" "
//                             />
//                             <span>Name</span>
//                         </label>
//                     </div>
//                     {errors.name && <p className="error-text">{errors.name}</p>}

//                     <label>
//                         <input
//                             className="input"
//                             id="email"
//                             type="email"
//                             name="email"
//                             value={data.email}
//                             autoComplete="username"
//                             onChange={(e) => setData('email', e.target.value)}
//                             required
//                             placeholder=" "
//                         />
//                         <span>Email</span>
//                     </label>
//                     {errors.email && <p className="error-text">{errors.email}</p>}

//                     <label>
//                         <input
//                             className="input"
//                             id="password"
//                             type="password"
//                             name="password"
//                             value={data.password}
//                             autoComplete="new-password"
//                             onChange={(e) => setData('password', e.target.value)}
//                             required
//                             placeholder=" "
//                         />
//                         <span>Password</span>
//                     </label>
//                     {errors.password && <p className="error-text">{errors.password}</p>}

//                     <label>
//                         <input
//                             className="input"
//                             id="password_confirmation"
//                             type="password"
//                             name="password_confirmation"
//                             value={data.password_confirmation}
//                             autoComplete="new-password"
//                             onChange={(e) => setData('password_confirmation', e.target.value)}
//                             required
//                             placeholder=" "
//                         />
//                         <span>Confirm password</span>
//                     </label>
//                     {errors.password_confirmation && <p className="error-text">{errors.password_confirmation}</p>}

//                     <button className="submit" disabled={processing}>Register</button>
//                     <p className="signin">Already have an account? <a href={route('login')}>Sign in</a></p>
//                 </form>
//             </div>
//         </GuestLayout>
//     );
// }