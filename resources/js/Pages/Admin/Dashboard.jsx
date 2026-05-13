import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ recentActivities }) {
    // Helper function to check if stock increased or decreased
    const getStockChangeIcon = (description) => {
        if (description.includes('augmenté')) {
            return <i className="bi bi-arrow-up-circle-fill text-success me-1"></i>;
        }
        if (description.includes('diminué')) {
            return <i className="bi bi-arrow-down-circle-fill text-danger me-1"></i>;
        }
        return null;
    };

    const getStockChangeClass = (description) => {
        if (description.includes('augmenté')) return 'text-success';
        if (description.includes('diminué')) return 'text-danger';
        return '';
    };

    return (
        <AuthenticatedLayout header={<h2 className="fw-bold text-dark">Tableau de bord Admin</h2>}>
            <Head title="Dashboard" />

            <div className="container py-4">
                {/* Welcome Section */}
                <div className="alert alert-primary shadow-sm mb-4">
                    <i className="bi bi-person-check me-2"></i>
                    Bienvenue sur votre tableau de bord, vous êtes connecté !
                </div>

                {/* Quick Actions */}
                <div className="row g-4 mb-4">
                    <div className="col-md-3">
                        <div className="card h-100 shadow-sm border-0 text-center">
                            <div className="card-body">
                                <i className="bi bi-plus-circle display-5 text-success"></i>
                                <h5 className="mt-3"> Categories</h5>
                                <p className="text-muted">Consultez et gérez vos categorie.</p>
                                <Link href={route('admin.categories.index')} className="btn btn-success btn-sm">
                                  Voir Categories
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card h-100 shadow-sm border-0 text-center">
                            <div className="card-body">
                                <i className="bi bi-box-seam display-5 text-primary"></i>
                                <h5 className="mt-3">Produits</h5>
                                <p className="text-muted">Consultez et gérez vos articles.</p>
                                <Link href={route('admin.produits.index')} className="btn btn-primary btn-sm">
                                    Voir produits
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card h-100 shadow-sm border-0 text-center">
                            <div className="card-body">
                                <i className="bi bi-people-fill display-5 text-info"></i>
                                <h5 className="mt-3">Employés</h5>
                                <p className="text-muted">Gérez les comptes utilisateurs.</p>
                                <Link href={route('admin.employees.index')} className="btn btn-info btn-sm">
                                    Gérer employés
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card h-100 shadow-sm border-0 text-center">
                            <div className="card-body">
                                <i className="bi bi-graph-up-arrow display-5 text-danger"></i>
                                <h5 className="mt-3">Rapports</h5>
                                <p className="text-muted">Analysez vos ventes et stocks.</p>
                                <Link href={route('reports.index')} className="btn btn-danger btn-sm">
                                    Voir rapports
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest Activities */}
                <div className="card shadow-sm border-0">
                    <div className="card-header bg-dark text-white">
                        <i className="bi bi-clock-history me-2"></i> Activités récentes
                    </div>
                    <div className="card-body">
                        {recentActivities && recentActivities.length > 0 ? (
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Action</th>
                                        <th>Employé</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentActivities.map((activity, index) => (
                                        <tr key={activity.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <span className={`badge me-2 bg-${
                                                    activity.action === 'created' ? 'success' : 'info'
                                                }`}>
                                                    {activity.action === 'created' ? 'Ajout' : 'Modification'}
                                                </span>
                                                {getStockChangeIcon(activity.description)}
                                                <span className={getStockChangeClass(activity.description)}>
                                                    {activity.description}
                                                </span>
                                            </td>
                                               
                                            <td>
                                                <i className="bi bi-person-circle me-1"></i>{activity.user_name}
                                                </td>
                                            <td><i className="bi bi-calendar3 me-1"></i>
                                                {new Date(activity.created_at).toLocaleString('fr-FR')}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                           <p className="text-muted text-center">Aucune activité récente</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}