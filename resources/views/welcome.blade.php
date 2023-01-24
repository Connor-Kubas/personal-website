@extends('layouts.master')
    @section('content')

    <div class="container">
        <div class="banner" id="banner">
            <div id="github" class="icon github" onhover="expand()"><img class="img-icon" src="{{ url("images/github-mark-white.png") }}"></div>
            <div id="" class="icon linkedin"><img class="img-icon" src="{{ url("images/In-White-128.png") }}"></div>
            <div id="" class="icon contact"><img class="img-icon" src="{{ url("images/envelope.png") }}"></div>
            <div id="" class="icon resume"><img class="img-icon" src="{{ url("images/resume.png") }}"></div>
        </div>  
        <div class="center">
            <div class='introduction' id='introduction'>
                <h1>Connor Kubas</h1>

                <p>Hey, I'm a software engineer.</p>
            </div>
        </div>   
        <div class="footer">
        </div> 
    </div>
      
    @endsection

@push('script')
    <script type="text/javascript" src="{{ url('js/welcome.js') }}"></script>
@endpush