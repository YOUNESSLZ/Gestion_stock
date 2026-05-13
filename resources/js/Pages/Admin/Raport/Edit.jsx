import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ report }) {
    const { data, setData, put, processing, errors } = useForm({
        title: report.title || '',
        type: report.type || '',
        file: null,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('reports.update', report.id));
    };

    return (
        <AuthenticatedLayout header={<h2 className="fw-bold text-dark">Modifier le rapport</h2>}>
            <Head title="Modifier rapport" />
         <a href={route('reports.index')} className="btn btn-secondary mt-3">
                                <i className="bi bi-arrow-left"/>
 Liste de Raport 
                            </a>
            <div className="container py-4">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <form onSubmit={submit} encType="multipart/form-data">
                            <div className="mb-3">
                                <label className="form-label">Titre</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                />
                                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <select
                                    className={`form-select ${errors.type ? 'is-invalid' : ''}`}
                                    value={data.type}
                                    onChange={(e) => setData('type', e.target.value)}
                                >
                                    <option value="Ventes">Ventes</option>
                                    <option value="Stock">Stock</option>
                                    <option value="RH">RH</option>
                                </select>
                                {errors.type && <div className="invalid-feedback">{errors.type}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Nouveau fichier (optionnel)</label>
                                <input
                                    type="file"
                                    className={`form-control ${errors.file ? 'is-invalid' : ''}`}
                                    onChange={(e) => setData('file', e.target.files[0])}
                                />
                                {errors.file && <div className="invalid-feedback">{errors.file}</div>}
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-warning fw-bold" disabled={processing}>
                                    {processing ? 'Mise à jour...' : 'Mettre à jour'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
