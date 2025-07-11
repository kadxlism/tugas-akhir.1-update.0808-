<?php

use Illuminate\Support\Facades\Route;
use Illuminate\HTtp\Request;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\InvoiceController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\FileController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Admin\UserController;

Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']); // token-based
    Route::middleware('auth:sanctum')->get('/auth/me', function (Request $request) {
    return $request->user();

});

    Route::post('register', [AuthController::class, 'register']);
    Route::get('me', [AuthController::class, 'me'])->middleware('auth:sanctum');
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


Route::middleware(['auth:sanctum'])->prefix('admin')->group(function () {
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::put('/users/{user}', [UserController::class, 'update']);
    Route::delete('/users/{user}', [UserController::class, 'destroy']);
});


    // CRUD Project
    Route::apiResource('projects', ProjectController::class);

    // Task per Project
    Route::get('projects/{project}/tasks', [TaskController::class, 'index']);
    Route::post('projects/{project}/tasks', [TaskController::class, 'store']);
    Route::get('tasks/{task}', [TaskController::class, 'show']);
    Route::put('tasks/{task}', [TaskController::class, 'update']);
    Route::delete('tasks/{task}', [TaskController::class, 'destroy']);

    // File Upload per Project
    Route::post('projects/{project}/files', [FileController::class, 'store']);
    Route::get('projects/{project}/files', [FileController::class, 'index']);

    // Comment per Task
    Route::post('tasks/{task}/comments', [CommentController::class, 'store']);
    Route::get('tasks/{task}/comments', [CommentController::class, 'index']);

    // Invoice & Item
    Route::apiResource('invoices', InvoiceController::class);
    Route::post('invoices/{invoice}/items', [InvoiceController::class, 'addItem']);

    // Payment
    Route::post('invoices/{invoice}/pay', [PaymentController::class, 'pay']);
    Route::get('payments', [PaymentController::class, 'index']);
});
