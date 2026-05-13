import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Link } from '@inertiajs/react';

export default function CreateEmployee() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.employees.store'));
    };

    return (
        <AuthenticatedLayout header={<h2 className="fw-bold text-dark">➕ Ajouter un employé</h2>}>
            <div className="container py-4">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <form onSubmit={submit}>
                            {/* Full Name */}
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Nom complet</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Entrez le nom"
                                    required
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Adresse email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="exemple@domaine.com"
                                    required
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Mot de passe</label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="********"
                                    required
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Confirmer mot de passe</label>
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    className="form-control"
                                    placeholder="********"
                                    required
                                />
                            </div>

                            {/* Actions */}
                            <div className="d-flex justify-content-end gap-2">
                                <Link
                                    href={route('admin.employees.index')}
                                    className="btn btn-outline-secondary btn-sm"
                                >
                                    <i className="bi bi-arrow-left me-1"></i> Annuler
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="btn btn-primary btn-sm fw-bold"
                                >
                                    {processing ? (
                                        <span><i className="spinner-border spinner-border-sm me-2"></i> Création...</span>
                                    ) : (
                                        <span><i className="bi bi-person-plus me-1"></i> Créer employé</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
