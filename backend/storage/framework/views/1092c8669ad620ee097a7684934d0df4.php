

<?php $__env->startSection('title', 'Dashboard'); ?>

<?php $__env->startSection('content'); ?>
<div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <p>Welcome, <?php echo e(auth()->user()->name); ?> (<?php echo e(auth()->user()->role); ?>)</p>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\Hype JKT\Herd\tugas-akhir.1\backend\resources\views/dashboard.blade.php ENDPATH**/ ?>