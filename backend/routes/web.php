<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

// 👇 HARUS di atas route wildcard!
Route::post('/login', function (Request $request) {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $request->session()->regenerate();
        return response()->json(['message' => 'Login berhasil']);
    }

    return response()->json(['message' => 'Login gagal'], 401);
});

Route::post('/login', function (Request $request) {
    $credentials = $request->only('email', 'password');

    if (Auth::guard('web')->attempt($credentials)) {
        $request->session()->regenerate();
        return response()->json(['message' => 'Login berhasil']);
    }

    return response()->json(['message' => 'Email atau password salah'], 401);
});

// 👇 Wildcard route React
Route::get('/{any}', fn () => view('layouts.app'))->where('any', '.*');
