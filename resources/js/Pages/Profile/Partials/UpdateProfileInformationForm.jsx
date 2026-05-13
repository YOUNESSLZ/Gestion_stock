import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={`${className} mb-5`}>
            <header className="mb-4">
                <h2 className="h4 fw-bold text-dark mb-2">Profile Information</h2>
                <p className="text-muted mb-0">Update your account's profile information and email address.</p>
            </header>

            <form onSubmit={submit} className="space-y-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoComplete="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Your full name"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="your@email.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className="alert alert-warning mb-3">
                        <p className="mb-0">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="btn btn-link p-0 ms-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="alert alert-success mt-2 mb-0">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="d-flex align-items-center gap-3">
                    <button disabled={processing} className="btn btn-secondary px-4">
                        {processing ? 'Saving...' : 'Save'}
                    </button>
                    {recentlySuccessful && (
                        <span className="text-success small fw-semibold">
                            ✓ Saved successfully.
                        </span>
                    )}
                </div>
            </form>
        </section>
    );
}