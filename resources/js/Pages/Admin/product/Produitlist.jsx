import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ProduitsIndex({ produits }) {
    return (
        <AuthenticatedLayout header="Produits">
            <Head title="Produits" />

            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold text-dark">Liste des produits</h4>
                           <Link href={route('admin.produits.create')} className="btn btn-primary">
                        <i className="bi bi-plus-circle me-2"></i> Ajouter un produit
                    </Link>
                   
                </div>

                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <table className="table table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Nom</th>
                                    <th>Catégorie</th>
                                    <th>Prix</th>
                                    <th>Stock</th>
                                    <th>Seuil d’alerte</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produits.length > 0 ? (
                                    produits.map((produit, index) => (
                                        <tr key={produit.id}>
                                            <td>{index + 1}</td>
                                            <td>{produit.nom}</td>
                                            <td>{produit.categorie?.nom ?? 'Non définie'}</td>
                                            <td>{produit.prix} MAD</td>
                                            <td>{produit.quantiteStock}</td>
                                            <td>{produit.seuilAlert}</td>
                                            <td>
                                                <div className="btn-group">
                                                    <Link 
                                                        href={route('admin.produits.show', produit.id)} 
                                                        className="btn btn-sm btn-info"
                                                    >
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
                                                    <Link
                                                        href={route('admin.produits.edit', produit.id)}
                                                        className="btn btn-sm btn-warning"
                                                    >
                                                        <i className="bi bi-pencil"></i>
                                                    </Link>
                                                 
                                                    <Link
                                                        href={route('admin.produits.destroy', produit.id)}
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
                                            Aucun produit disponible
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
