<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}">
<head>

    <!-- meta tags -->
    <meta charset="utf-8">
    <meta name="name" content="SquirX: Manage your Business in few Clicks" />
    <meta name="image" content="https://squirx.com/assets/images/about/3.png">
    <meta property="og:type" content="website">
    <meta name="keywords" content="squirx, erp, Belgium, business, manage, orders, purchase, purchase orders " />
    <meta name="description" content="Manage your Business in few Clicks" />
    <meta name="author" content="squirx.com" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="SquirX: Manage your Business in few Clicks">
    <meta name="twitter:title" content="SquirX: Manage your Business in few Clicks">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:description" content="SquirX: Manage your Business in few Clicks">
    <meta name="twitter:description" content="SquirX: Manage your Business in few Clicks">
    <meta property="og:image" content="https://squirx.com/assets/images/about/3.png">
    <meta name="twitter:image" content="https://squirx.com/assets/images/about/3.png">
    <meta property="og:url" content="https://squirx.com">
    <meta name="url" content="https://squirx.com">

    <!-- Title -->
    <title>SquirX</title>

    <!-- Favicon Icon -->
    <link rel="shortcut icon" href="assets/images/favicon.ico" />

    <!-- inject css start -->

    <link href="assets/build/css/theme-plugin.css" rel="stylesheet" />
    <link href="assets/build/css/theme.min.css" rel="stylesheet" />
    <link href="assets/build/css/Custom.css" rel="stylesheet" />
    <link href="assets/build/css/animateS.css" rel="stylesheet">


    <!-- inject css end -->

</head>

    <body class="text-gray-900 font-sans antialiased">
        @yield('header')
        @yield('body')
    </body>
</html>
