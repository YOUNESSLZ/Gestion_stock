import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function DeleteUserForm({ className = '' }) {

    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const deleteUser = (e) => {
        e.preventDefault();

        const isConfirmed = window.confirm("Are you sure you want to delete your account?");

        if (isConfirmed) {
            destroy(route('profile.destroy'), {
                preserveScroll: true,
                onSuccess: () => clearErrors(),
                onError: () => passwordInput.current.focus(),
                onFinish: () => reset(),
            });
        }
    };

    return (
        <section className={`${className}`}>
            <header className="mb-4">
                <h2 className="h4 fw-bold text-danger mb-2">Delete Account</h2>
                <p className="text-muted mb-0">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to retain.
                </p>
            </header>

            <form onSubmit={deleteUser} className="border-top pt-4">
                <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Enter your password to confirm"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div>
                    <button 
                        disabled={processing} 
                        className="btn btn-danger px-4"
                    >
                        {processing ? 'Deleting...' : 'Delete Account'}
                    </button>
                </div>
            </form>
        </section>
    );
}