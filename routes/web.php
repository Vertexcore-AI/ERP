<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Redirect old dashboard to new Farmer Dashboard
Route::get('/dashboard', function () {
    return redirect('/farmer/dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Redirect old routes to new Farmer Dashboard
    Route::get('/sensors', function () {
        return redirect('/farmer/dashboard');
    })->name('sensors');

    Route::get('/actuators', function () {
        return redirect('/farmer/dashboard');
    })->name('actuators');

    Route::get('/watering-schedule', function () {
        return redirect('/farmer/dashboard');
    })->name('watering-schedule');

    Route::get('/statistics', function () {
        return redirect('/farmer/dashboard');
    })->name('statistics');

    // Farmer Routes
    Route::prefix('farmer')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Farmer/Dashboard', [
                'user' => Auth::user()
            ]);
        })->name('farmer.dashboard');

        Route::get('/crops', function () {
            return Inertia::render('Farmer/Crops', [
                'user' => Auth::user()
            ]);
        })->name('farmer.crops');

        Route::get('/inventory', function () {
            return Inertia::render('Farmer/Inventory', [
                'user' => Auth::user()
            ]);
        })->name('farmer.inventory');

        Route::get('/harvest', function () {
            return Inertia::render('Farmer/Harvest', [
                'user' => Auth::user()
            ]);
        })->name('farmer.harvest');

        Route::get('/sales', function () {
            return Inertia::render('Farmer/Sales', [
                'user' => Auth::user()
            ]);
        })->name('farmer.sales');

        Route::get('/reports', function () {
            return Inertia::render('Farmer/Reports', [
                'user' => Auth::user()
            ]);
        })->name('farmer.reports');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
