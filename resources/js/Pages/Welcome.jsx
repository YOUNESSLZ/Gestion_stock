import { Head, Link } from '@inertiajs/react';


export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-vh-100 d-flex flex-column">
                
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                    <div className="container-fluid px-4">
                        <Link href="/" className="navbar-brand fw-bold">
                            StockManager
                        </Link>
                     
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto align-items-center">
                               
                                {auth.user ? (
                                    <li className="nav-item">
                                        <Link href={route('dashboard')} className="nav-link">
                                            <i className="bi bi-speedometer2 me-1"></i> Dashboard
                                        </Link>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link href={route('login')} className="nav-link">
                                            <i className="bi bi-box-arrow-in-right me-1"></i> Log in
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Hero Section - Remove fixed bg-white class */}
                <header className="shadow-sm">
                    <div className="container py-5 text-center">
                        <h1 className="fw-bold">Bienvenue dans StockManager</h1>
                        <p className="text-muted">
                            Gérez vos produits, vos employés et vos stocks en toute simplicité.
                        </p>
                        {!auth.user && (
                            <Link href={route('login')} className="btn btn-primary btn-lg mt-3">
                                <i className="bi bi-box-arrow-in-right me-2"></i> Commencer
                            </Link>
                        )}
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-grow-1">
                    <div className="container py-5">
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card shadow-sm border-0 h-100">
                                    <div className="card-body text-center">
                                        <i className="bi bi-box-seam display-4 text-primary"></i>
                                        <h5 className="mt-3">Gestion des Produits</h5>
                                        <p className="text-muted">Ajoutez, modifiez et suivez vos articles.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm border-0 h-100">
                                    <div className="card-body text-center">
                                        <i className="bi bi-people-fill display-4 text-success"></i>
                                        <h5 className="mt-3">Employés</h5>
                                        <p className="text-muted">Gérez les comptes et autorisations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm border-0 h-100">
                                    <div className="card-body text-center">
                                        <i className="bi bi-graph-up-arrow display-4 text-danger"></i>
                                        <h5 className="mt-3">Rapports</h5>
                                        <p className="text-muted">Analysez vos ventes et vos stocks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-dark text-white text-center py-3 mt-auto">
                    <small>© {new Date().getFullYear()} StockManager. Tous droits réservés.</small>
                </footer>
            </div>
        </>
    );
}