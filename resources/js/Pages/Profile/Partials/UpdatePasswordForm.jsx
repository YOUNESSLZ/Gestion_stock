import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={`${className} mb-5`}>
            <header className="mb-4">
                <h2 className="h4 fw-bold text-dark mb-2">Update Password</h2>
                <p className="text-muted mb-0">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            <form onSubmit={updatePassword}>
                <div className="mb-3">
                    <label htmlFor="current_password" className="form-label fw-semibold">Current Password</label>
                    <input
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password"
                        autoComplete="current-password"
                        className={`form-control ${errors.current_password ? 'is-invalid' : ''}`}
                        placeholder="Enter your current password"
                    />
                    {errors.current_password && <div className="invalid-feedback">{errors.current_password}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="update_password" className="form-label fw-semibold">New Password</label>
                    <input
                        id="update_password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        autoComplete="new-password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Enter new password"
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password_confirmation" className="form-label fw-semibold">Confirm Password</label>
                    <input
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        autoComplete="new-password"
                        className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                        placeholder="Confirm your new password"
                    />
                    {errors.password_confirmation && <div className="invalid-feedback">{errors.password_confirmation}</div>}
                </div>

                <div className="d-flex align-items-center gap-3">
                    <button disabled={processing} className="btn btn-secondary px-4">
                        {processing ? 'Saving...' : 'Save'}
                    </button>
                    {recentlySuccessful && (
                        <span className="text-success small fw-semibold">
                            ✓ Password updated successfully.
                        </span>
                    )}
                </div>
            </form>
        </section>
    );
}