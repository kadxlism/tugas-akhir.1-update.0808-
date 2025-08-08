@php
  $manifest = json_decode(file_get_contents(public_path('build/.vite/manifest.json')), true);
@endphp

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React in Laravel</title>

  {{-- Tidak ada CSS, jadi tidak perlu link rel="stylesheet" --}}
  <script type="module" src="{{ asset('build/' . $manifest['src/main.tsx']['file']) }}" defer></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>
