<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'client_id',
        'status',
        'start_date',
        'end_date',
        'description',
    ];

    // Relasi: Client (User)
    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    // Relasi: Tasks
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    // Relasi: Files
    public function files()
    {
        return $this->hasMany(ProjectFile::class);
    }

    // Relasi: Invoices
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
}
