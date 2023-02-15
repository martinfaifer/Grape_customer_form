<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <title>Formulář grape zákazník</title>
    <meta name="author" content="Martin Faifer">
    <meta content="Formulář grape zákazník" name="description">
    <meta content="Formulář grape zákazník" property="og:title">
    <meta content="Formulář grape zákazník" property="og:description">
    <meta content="Formulář grape zákazník" property="twitter:title">
    <meta content="Formulář grape zákazník" property="twitter:description">
    <meta property="og:type" content="website">
    <meta content="summary_large_image" name="twitter:card">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="icon/favicon.ico" type="image/x-icon">
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>

    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
    <script src="{{ mix('js/app.js') }}" defer></script>
    <style>
        * {
            text-transform: none !important;
        }

        [v-cloak] {
            display: inline !important;
        }
    </style>
</head>

<body>
    <v-app id="app">

    </v-app>
</body>

</html>
