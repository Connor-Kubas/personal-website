<!DOCTYPE html>
    <head>
        <title>Connor Kubas</title>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
          
        <link rel="icon" href="{{ url('images/favicon.ico') }}">

        <link href="{{ url('css/welcome.css')}}" rel="stylesheet">
    </head>
    
    <body>
        @yield('content')
    </body>

</html>

@stack('script')