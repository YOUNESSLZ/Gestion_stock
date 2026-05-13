import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ProduitsIndex({ produits }) {
    return (
        <AuthenticatedLayout header="Produits">
            <Head title="Produits" />

            <div className="container py-4">
                <h4 className="fw-bold text-dark mb-4">Liste des produits</h4>

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
                                                    {/* View details */}
                                                    <Link 
                                                        href={route('employee.produits.show', produit.id)} 
                                                        className="btn btn-sm btn-info"
                                                    >
                                                        <i className="bi bi-eye"></i>
                                                    </Link>

                                                    {/* Increase stock */}
                                                    <Link
                                                        href={route('employee.produits.increase', produit.id)}
                                                        method="put"
                                                        as="button"
                                                        className="btn btn-sm btn-success"
                                                    >
                                                        <i className="bi bi-plus-lg"></i>
                                                    </Link>

                                                    {/* Decrease stock */}
                                                    <Link
                                                        href={route('employee.produits.decrease', produit.id)}
                                                        method="put"
                                                        as="button"
                                                        className="btn btn-sm btn-danger"
                                                    >
                                                        <i className="bi bi-dash-lg"></i>
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
