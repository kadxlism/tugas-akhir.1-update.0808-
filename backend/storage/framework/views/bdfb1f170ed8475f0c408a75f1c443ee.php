<?php
  $manifest = json_decode(file_get_contents(public_path('build/.vite/manifest.json')), true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React in Laravel</title>

  
  <script type="module" src="<?php echo e(asset('build/' . $manifest['src/main.tsx']['file'])); ?>" defer></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>
<?php /**PATH C:\Users\Hype JKT\Herd\tugas-akhir.1\backend\resources\views/app.blade.php ENDPATH**/ ?>