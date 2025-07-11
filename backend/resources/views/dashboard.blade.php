@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')
<div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <p>Welcome, {{ auth()->user()->name }} ({{ auth()->user()->role }})</p>
</div>
@endsection
