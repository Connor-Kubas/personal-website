@extends('layouts.master')
    @section('content')

    <div class="container" id="container">
        <div class="main" id="main">
            <div class='introduction' id='introduction'>
                <h1>Connor Kubas</h1>
                <p>Hey, I'm a software engineer.</p>
            </div>
            <div class="contact" id="contact">
                <img class="img-contact" src="{{ url("images/github-mark-white.png") }}">
                <p>Email</p>
                <p onclick="closeContact()">Newton, KS</p>
            </div>
        </div>   
        <div class="projects">
        </div>

        <footer>
            <div id="" class="icon"><a href="https://github.com/Connor-Kubas" target="_blank"><img class="img-icon" src="{{ url("images/github-mark-white.png") }}"></a></div>
            <div id="" class="icon"><a href="https://www.linkedin.com/in/connor-kubas-b1a352261/" target="_blank"><img class="img-icon" src="{{ url("images/In-White-128.png") }}"></a></div>
            <div id="" class="icon" onclick="openContact()"><img class="img-icon" src="{{ url("images/envelope.png") }}"></div>
            <div id="" class="icon"><img class="img-icon" src="{{ url("images/resume.png") }}"></div>
        </footer>  
        
    </div>

    
    
    @endsection

@push('script')
    <script type="text/javascript" src="{{ url('js/welcome.js') }}"></script>
@endpush