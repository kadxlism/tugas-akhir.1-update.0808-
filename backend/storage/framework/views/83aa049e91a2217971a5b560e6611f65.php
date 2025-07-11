

<?php $__env->startSection('title', 'Login'); ?>

<?php $__env->startSection('content'); ?>
<div class="flex items-center justify-center min-h-screen">
    <form method="POST" action="<?php echo e(route('login')); ?>" class="bg-white p-6 rounded shadow-md w-80">
        <?php echo csrf_field(); ?>
        <h2 class="text-xl font-semibold mb-4">Login</h2>
        <input name="email" type="email" placeholder="Email" required
            class="w-full mb-3 p-2 border border-gray-300 rounded" />
        <input name="password" type="password" placeholder="Password" required
            class="w-full mb-3 p-2 border border-gray-300 rounded" />
        <button type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
    </form>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\Hype JKT\Herd\tugas-akhir.1\backend\resources\views/auth/login.blade.php ENDPATH**/ ?>