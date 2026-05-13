<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EmployeeMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && auth()->user()->role === 'employee') {
            return $next($request);
        }

        // If logged in but not employee, redirect to their appropriate dashboard
        if (auth()->check()) {
            if (auth()->user()->role === 'admin') {
                return redirect()->route('admin.dashboard');
            }
        }
        
        // If not logged in, redirect to login
        return redirect()->route('login');
    }
}