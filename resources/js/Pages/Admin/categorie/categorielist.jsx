import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function CategoriesIndex({ categories }) {
    // Helper to format date + heure
    // const formatDate = (dateString) => {
    //     if (!dateString) return '';
    //     const date = new Date(dateString);
    //     return date.toLocaleDateString('fr-FR') + ' ' + date.toLocaleTimeString('fr-FR', {
    //         hour: '2-digit',
    //         minute: '2-digit',
    //     });
    // };

    return (
        <AuthenticatedLayout header="Catégories">
            <Head title="Catégories" />

            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold text-dark">Liste des catégories</h4>
                    <Link href={route('admin.categories.create')} className="btn btn-primary">
                        <i className="bi bi-plus-circle me-2"></i> Ajouter une catégorie
                    </Link>
                </div>

                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <table className="table table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Nom</th>
                                    <th>Description</th>
                                    <th>Date de création</th>
                                    <th>Dernière mise à jour</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.length > 0 ? (
                                    categories.map((categorie, index) => (
                                        <tr key={categorie.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                {categorie.photo ? (
                                                    
                                                    <img
                                                        src={`/storage/${categorie.photo}`}
                                                        alt={categorie.nom}
                                                        className="img-thumbnail"
                                                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                    />
                                                ) : (
                                                    <span className="text-muted">Pas d’image</span>
                                                )}
                                            </td>
                                            <td>{categorie.nom}</td>
                                            <td>{categorie.description}</td>
                                            <td>{new Date(categorie.created_at).toLocaleString('fr-FR')}
                                            </td>
                                            <td>{new Date(categorie.created_at).toLocaleString('fr-FR')}</td>
                                            <td>
                                                <div className="btn-group">
                                                    <Link
                                                        href={route('admin.categories.edit', categorie.id)}
                                                        className="btn btn-sm btn-warning"
                                                    >
                                                        <i className="bi bi-pencil"></i>
                                                    </Link>
                                                    <Link
                                                        href={route('admin.categories.destroy', categorie.id)}
                                                        method="delete"
                                                        as="button"
                                                        className="btn btn-sm btn-danger"
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center text-muted">
                                            Aucune catégorie disponible
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
