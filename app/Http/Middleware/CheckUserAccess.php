<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUserAccess
{
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {
            $user = Auth::user();
            
            // Skip validation checks for admin users
            if ($user->role === 'admin') {
                return $next($request);
            }
            
            // Only check validation/activation for non-admin users (employees)
            if (!$user->estValide) {
                return redirect()->route('pending.approval');
            }
            
            if (!$user->estActif) {
                Auth::logout();
                return redirect()->route('login')->withErrors([
                    'email' => 'Your account has been deactivated.',
                ]);
            }
        }
        
        return $next($request);
    }
}