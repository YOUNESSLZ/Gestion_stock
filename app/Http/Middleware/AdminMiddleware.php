<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && auth()->user()->role === 'admin') {
            return $next($request);
        }

        // If logged in but not admin, redirect to their appropriate dashboard
        if (auth()->check()) {
            if (auth()->user()->role === 'employee') {
                return redirect()->route('employee.dashboard');
            }
        }
        
        // If not logged in, redirect to login
        return redirect()->route('login');
    }
}