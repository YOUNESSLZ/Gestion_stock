import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function EditCategorie({ categorie }) {
    const { data, setData, put, processing, errors } = useForm({
        nom: categorie.nom || '',
        description: categorie.description || '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.categories.update', categorie.id), {
            forceFormData: true, // important for file upload
        });
    };

    return (
        <AuthenticatedLayout header="Modifier Catégorie">
            <Head title="Modifier Catégorie" />

            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold text-dark">Modifier la catégorie</h4>
                    <Link href={route('admin.categories.index')} className="btn btn-secondary">
                        <i className="bi bi-arrow-left me-2"></i> Retour
                    </Link>
                </div>

                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Nom</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
                                    value={data.nom}
                                    onChange={(e) => setData('nom', e.target.value)}
                                />
                                {errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Description</label>
                                <textarea
                                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                    rows="3"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                ></textarea>
                                {errors.description && (
                                    <div className="invalid-feedback">{errors.description}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Image</label>
                                {categorie.image && (
                                    <div className="mb-2">
                                        <img
                                            src={`/storage/${categorie.image}`}
                                            alt={categorie.nom}
                                            className="img-thumbnail"
                                            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
                                <input
                                    type="file"
                                    className={`form-control ${errors.photo ? 'is-invalid' : ''}`}
                                    accept="image/*"
                                    onChange={(e) => setData('photo', e.target.files[0])}
                                />
                                {errors.photo && <div className="invalid-feedback">{errors.photo}</div>}
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={processing}>
                                <i className="bi bi-save me-2"></i> Enregistrer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
