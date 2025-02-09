@extends('_layouts.main')
@section('header')
    <header class="site-header">
        <div id="header-wrap" class="">
            <div class="container">
                <div class="row">
                    <!--menu start-->
                    <div class="col">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand logo text-primary mb-0 font-w-7" href="main">
                                <img style="    image-rendering: -moz-crisp-edges;
                image-rendering: -o-crisp-edges;
                image-rendering: -webkit-optimize-contrast;
                -ms-interpolation-mode: nearest-neighbor;" src="../assets/images/squirx-logo.png" alt="SquirX"
                                     width="130">
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                    aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ml-auto mr-auto">
                                    <li class="nav-item dropdown">
                                        <a id="nav_Home" class="nav-link h6 active" href="main" href="javascript:">Home</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a id="nav_Benfits" class="nav-link  h6"  href="#Benefits">Benefits</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a id="nav_Features" class="nav-link h6 " href="features" >Features</a>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a id="nav_Pricing" class="nav-link h6 " href="#Pricing" >Pricing</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a id="nav_Company" class="nav-link h6 " href="about-us" >Company</a>
                                    </li>
                                    <li id="dropdown" class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                            <img id="selectedlangIcon" class="img-fluid" width="20px"
                                                 src="../assets/images/icon/united-kingdom.svg" alt="">
                                            <span id="selectdlang">English</span>
                                        </a>
                                        <ul class="dropdown-menu shadow-sm">
                                            <li class="dropdown-submenu">
                                                <a id="eng_op"></a>
                                            </li>
                                            <li class="dropdown-submenu">
                                                <a id="fr_op" class="dropdown-item" onclick="changeLanguage('Fr')" href="#Fr">
                                                    <img class="img-fluid" width="20px" src="../assets/images/icon/france.svg" alt="">
                                                    French</a>
                                            </li>
                                            <!-- <li class="dropdown-submenu">
                                            <a id="Du_op" class="dropdown-item" href="#">
                                              <img class="img-fluid" width="20px" src="assets/images/icon/netherlands.svg" alt="">
                                              Dutch</a>
                                          </li> -->
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="d-none d-sm-flex align-items-center w-25 justify-content-end"><a id="nav_Login"
                                                                                                         class="btn-link" href="404">Login</a>
                                <a id="nav_SignUp" class="btn btn-primary btn-sm ml-3"
                                   href="404">Sign Up</a>
                            </div>
                        </nav>

                    </div>
                    <!--menu end-->
                </div>
            </div>
        </div>
    </header>
@endsection
@section('body')

    <!-- page wrapper start -->
    <div class="page-wrapper">


        <div id="ht-preloader">
            <div class="loader clear-loader">
                <span>S</span>
                <span>q</span>
                <span>u</span>
                <span>i</span>
                <span>r</span>
                <span>X</span>
            </div>
        </div>

        <!-- preloader end -->


        <!--header start-->

        <!--header end-->


        <!--hero section start-->

        <section style="padding:0px" class="hero-banner hero-shape8 pt-6 position-relative overflow-hidden  "
        >
            <div class="container z-index-1">
                <div class="row text-primary  z-index-1">
                    <div class="col-12 col-lg-5 mb-4">
                        <h2 style="line-height: 1.3;" class=" text-primary">
                            <span id="heder_Manage">Manage your</span>
                            <span id="heder_Businesses">Business</span> <span id="heder_infew"> in few Clicks</span>
                        </h2>
                        <h5 style="line-height: 1.6;" id="header_Intuitive" class="text-light mt-4">Intuitive & AI powered Invoicing, Accounting and ERP platform</h5>
                        <a id="Creat_Account" href="404" class="btn btn-primary mt-3">Create Free Account</a>

                    </div>
                    <div class="col-12 col-lg-7 pb-3 ">
                        <img  class="img-fluid" src="assets/images/about/3.png" >
                    </div>
                    <div class="custom-shape-divider-bottom-1621014559">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path
                                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                    opacity=".25" class="shape-fill"></path>
                            <path
                                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                    opacity=".5" class="shape-fill"></path>
                            <path
                                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                    class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <!-- / .row -->

            </div>
            <!-- / .container -->

        </section>

        <!--hero section end-->


        <!--body content start-->

        <div class="page-content">

            <!--about start-->

            <section id="Benefits" class="position-relative">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-12 col-lg-12 mb-4 mt-lg-0 text-center">
                            <h2 id="Our_Features" class="text-primary">Our Benefits</h2>
                            <h4 id="What_makes" class="text-light">A Unique User Experience</h4>
                        </div>

                    </div>
                    <div class="row align-items-center justify-content-between p-1">
                        <div class="col-12 col-lg-4 col-md-6 mb-5 text-center">
                            <!-- Card -->
                            <div class="card  border-0 shadow_custom  " >
                                <!-- Body -->
                                <div class="card-body ">
                                    <img style="height: 300px;" class="img-fluid" src="assets/images/svg/All_in_one-colored.svg" alt="">
                                    <!-- Badge -->
                                    <div  class="my-2 px-3 "><span id="oneplacee_header" style="display: block;" class="h4 bg-primary text-primary button-rounder">Save your time</span>
                                    </div>
                                    <!-- Features -->
                                    <div class="d-flex align-items-center mt-4">
                                        <!-- Check -->

                                        <!-- Text -->
                                        <div class="row no-gutters text-light2 font-w-7">
                                            <div class="col-sm">
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right "></i>
                                                        </div>
                                                        <p id="oneplacee_first" class="mb-0 ml-3">Quotes, Invoices & Orders in few seconds</p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right"></i>
                                                        </div>
                                                        <p id="oneplacee_second" class="mb-0 ml-3">Manage Inventory & CRM</p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right"></i>
                                                        </div>
                                                        <p id="oneplacee_third"  class="mb-0 ml-3">Export Data to accountant in few clicks</p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right"></i>
                                                        </div>
                                                        <p id="oneplacee_fourth" class="mb-0 ml-3">Cash & Expenses management</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="d-block text-center py-2">
                                        <a id="learn_more2" href="features" class="btn btn-sm btn-primary ">Learn More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 col-md-6 mb-5 text-center">
                            <!-- Card -->
                            <div id="bentfit_2" class="card  border-0 shadow_custom  " >
                                <!-- Body -->
                                <div class="card-body ">
                                    <img style="height: 300px;"  class="img-fluid" src="assets/images/svg/Managerial Accounting-colored.svg" alt="">
                                    <!-- Badge -->
                                    <div  class="my-2 px-3 "><span id="onepowerful_header" style="display: block;" class="h4 bg-primary text-primary button-rounder">No Sweat</span>
                                    </div>
                                    <!-- Features -->
                                    <div class="d-flex align-items-center mt-4">
                                        <!-- Check -->

                                        <!-- Text -->
                                        <div class="row no-gutters text-light2 font-w-7">
                                            <div class="col-sm">
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right "></i>
                                                        </div>
                                                        <p id="onepowerful_first" class="mb-0 ml-3">Intuitive & User-Friendly</p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right"></i>
                                                        </div>
                                                        <p id="onepowerful_second" class="mb-0 ml-3">AI, predictions & Optical Capture Recognition</p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right"></i>
                                                        </div>
                                                        <p id="onepowerful_third"  class="mb-0 ml-3">Full Integration with accountants systems</p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right"></i>
                                                        </div>
                                                        <p id="onepowerful_fourth" class="mb-0 ml-3">All your business in one unique dashboard</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="d-block text-center py-2">
                                        <a id="learn_more1" href="features" class="btn btn-sm btn-primary ">Learn More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 col-md-6 mb-5 text-center">
                            <!-- Card -->
                            <div id="bentfit_3" class="card  border-0 shadow_custom  " >
                                <!-- Body -->
                                <div class="card-body ">
                                    <img style="height: 300px;"  class="img-fluid" src="assets/images/svg/Benefits-colored.svg" alt="">
                                    <!-- Badge -->
                                    <div  class="my-2 px-3 "><span id="convenience_header" style="display: block;" class="h4 bg-primary text-primary button-rounder">Boost cash position</span>
                                    </div>
                                    <!-- Features -->
                                    <div class="d-flex align-items-center mt-4">
                                        <!-- Check -->

                                        <!-- Text -->
                                        <div class="row no-gutters text-light2 font-w-7">
                                            <div class="col-sm">
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right "></i>
                                                        </div>
                                                        <p id="convenience_first" class="mb-0 ml-3">Focus on core business</p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right"></i>
                                                        </div>
                                                        <p id="convenience_second" class="mb-0 ml-3">Scale down Accounting time</p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right"></i>
                                                        </div>
                                                        <p id="convenience_third"  class="mb-0 ml-3">End hassles of closing periods</p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <div><i class="las la-angle-right"></i>
                                                        </div>
                                                        <p id="convenience_fourth" class="mb-0 ml-3">Get relevant and useful data analytics</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="d-block text-center py-2">
                                        <a id="learn_more3" href="features" class="btn btn-sm btn-primary ">Learn More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section  id="Pricing" class="hero-banner hero-shape7 position-relative ">
                <div class="container">
                    <div class="row align-items-center justify-content-between z-index-1">
                        <div class="col-12 col-lg-12  mb-4  text-center">
                            <h2 id="footer_simple" class="text-primary">Pricing Plans</h2>
                            <h4 id="footer_affordable" class="text-light">Simple, Fair and affordable prices for all.</h4>
                        </div>

                    </div>
                    <div id="Pricing_container">
                        <div class="row align-items-center  p-1">
                            <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0  ">
                                <!-- Card -->
                                <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
                                    <!-- Body -->
                                    <div class="card-body">
                                        <!-- Badge -->
                                        <div  style="text-align: center;" class="pt-3 mb-3 "><span
                                                    class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary ">Plan 10</span>
                                        </div>
                                        <h2  style="text-align: center;" class="h3 font-weight-bold">
                                            <span id="price">Free</span>
                                        </h2>
                                        <div class="custom-separator my-4 mx-auto bg-primary"></div>

                                        <!-- Features -->
                                        <div class="row no-gutters">
                                            <div class="col-sm fw-bold">
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_second" class="mb-0 ml-3  ">Up to 10 Invoices & Orders per month
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_third" class="mb-0 ml-3 "> 1 User
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  ">  Options charged additionally
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="text-align: center;">
                                            <button style="width: 180px;" type="button"
                                                    class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
                                <!-- Card -->
                                <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
                                    <!-- Body -->
                                    <div class="card-body">
                                        <!-- Badge -->
                                        <div style="text-align: center;" class="pt-3 mb-3 "><span
                                                    class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 20</span>
                                        </div>
                                        <h2 style="text-align: center;" class="h3 font-weight-bold">€5<span
                                                    class="text-small font-weight-normal text-light ml-2">/ month</span></h2>
                                        <div class="custom-separator my-4 mx-auto bg-primary"></div>

                                        <!-- Features -->
                                        <div class="row no-gutters">
                                            <div class="col-sm fw-bold">
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_second" class="mb-0 ml-3  ">Up to 20 Invoices & Orders per month
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_third" class="mb-0 ml-3 "> 1 User
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options charged additionally
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="text-align: center;">
                                            <button style="width: 180px;" type="button"
                                                    class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
                                <!-- Card -->
                                <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
                                    <!-- Body -->
                                    <div class="card-body">
                                        <!-- Badge -->
                                        <div style="text-align: center;" class="pt-3 mb-3 "><span
                                                    class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 100</span>
                                        </div>
                                        <h2 style="text-align: center;" class="h3 font-weight-bold">€10<span
                                                    class="text-small font-weight-normal text-light ml-2">/ month</span></h2>
                                        <div class="custom-separator my-4 mx-auto bg-primary"></div>

                                        <!-- Features -->
                                        <div class="row no-gutters">
                                            <div class="col-sm fw-bold">
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_second" class="mb-0 ml-3  ">Up to 100 Invoices & Orders per month
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_third" class="mb-0 ml-3 "> 1 User
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options charged additionally
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="text-align: center;">
                                            <button style="width: 180px;" type="button"
                                                    class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="row align-items-center mt-4  p-1">
                            <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0  ">
                                <!-- Card -->
                                <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
                                    <!-- Body -->
                                    <div class="card-body">
                                        <!-- Badge -->
                                        <div style="text-align: center;" class="pt-3 mb-3 "><span
                                                    class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 200</span>
                                        </div>
                                        <h2 style="text-align: center;" class="h3 font-weight-bold">€20 <span
                                                    class="text-small font-weight-normal text-light ml-2">/ month</span>
                                        </h2>
                                        <div class="custom-separator my-4 mx-auto bg-primary"></div>

                                        <!-- Features -->
                                        <div class="row no-gutters">
                                            <div class="col-sm fw-bold">
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_second" class="mb-0 ml-3  ">Up to 200 Invoices & Orders per month
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_third" class="mb-0 ml-3 "> 2 Users
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  ">  Options charged additionally
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="text-align: center;">
                                            <button style="width: 180px;" type="button"
                                                    class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
                                <!-- Card -->
                                <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
                                    <!-- Body -->
                                    <div class="card-body">
                                        <!-- Badge -->
                                        <div style="text-align: center;" class="pt-3 mb-3 "><span
                                                    class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 300</span>
                                        </div>
                                        <h2 style="text-align: center;" class="h3 font-weight-bold">€30<span
                                                    class="text-small font-weight-normal text-light ml-2">/ month</span></h2>
                                        <div class="custom-separator my-4 mx-auto bg-primary"></div>

                                        <!-- Features -->
                                        <div class="row no-gutters">
                                            <div class="col-sm fw-bold">
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_second" class="mb-0 ml-3  ">Up to 300 Invoices & Orders per month
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_third" class="mb-0 ml-3 "> 2 Users
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options charged additionally
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="text-align: center;">
                                            <button style="width: 180px;" type="button"
                                                    class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
                                <!-- Card -->
                                <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
                                    <!-- Body -->
                                    <div class="card-body">
                                        <!-- Badge -->
                                        <div style="text-align: center;" class="pt-3 mb-3 "><span
                                                    class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 500</span>
                                        </div>
                                        <h2 style="text-align: center;" class="h3 font-weight-bold">€50<span
                                                    class="text-small font-weight-normal text-light ml-2">/ month</span></h2>
                                        <div class="custom-separator my-4 mx-auto bg-primary"></div>

                                        <!-- Features -->
                                        <div class="row no-gutters">
                                            <div class="col-sm fw-bold">
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>

                                                        <p id="oneplace_second" class="mb-0 ml-3  ">Up to 500 Invoices & Orders per month
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_third" class="mb-0 ml-3 "> 2 Users
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="d-flex align-items-center">
                                                        <i class="las la-check"></i>
                                                        <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options charged additionally
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="text-align: center;">
                                            <button style="width: 180px;" type="button"
                                                    class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div style="    background-image: linear-gradient(rgb(226 244 245), #21c0dc03);"  class="custom-shape-divider-top-1622174540">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <!--about end-->

        </div>

        <!--body content end-->


        <!--footer start-->

        <footer  class=" py-7 bg-footer">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-5 col-xl-4 mr-auto mb-5 mb-lg-0">
                        <a class="footer-logo h2 text-primary mb-6 font-w-7 " href="main">
                            <span class=" font-w-4 ">SquirX.</span>
                        </a>
                        <ul class="list-inline pt-3">
                            <li class="list-inline-item"><a class="border rounded px-2 py-1 text-light" href="javascript:;"><i
                                            class="la la-facebook"></i></a>
                            </li>
                            <li class="list-inline-item"><a class="border rounded px-2 py-1 text-light" href="javascript:;"><i
                                            class="la la-instagram"></i></a>
                            </li>
                            <li class="list-inline-item"><a class="border rounded px-2 py-1 text-light" href="javascript:;"><i
                                            class="la la-twitter"></i></a>
                            </li>
                            <li class="list-inline-item"><a class="border rounded px-2 py-1 text-light" href="javascript:;"><i
                                            class="la la-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-7">
                        <div class="row">
                            <div class="col-12 col-sm-4">
                                <h5 id class="mb-4 text-white">Pages</h5>
                                <ul class="list-unstyled mb-0">
                                    <li class="mb-3"><a id="About_footer" class="list-group-item-action text-light" href="about-us">Company                  </a>
                                    </li>
                                    <li class="mb-3"><a id="footer_Features" class="list-group-item-action text-light" href="features">Features</a>
                                    </li>

                                </ul>
                            </div>
                            <div class="col-12 col-sm-4 mt-6 mt-sm-0">
                            </div>
                            <div class="col-12 col-sm-4 mt-6 mt-sm-0">
                                <h5 id="Our_Address" class="mb-4 text-white">Our Address</h5>
                                <div class="mb-3">
                                    <p id="address" class="mb-0 text-light">Avenue Louise, 65 Brussels</p>
                                </div>
                                <div class="mb-3">
                                    <a class="btn-link text-light" href="Info@squirx.com">
                                        Info@squirx.com</a>
                                </div>
                                <div>
                                    <a class="btn-link text-light" href="tel:+33-640-223-427">+33-640-223-427</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        <hr class="m-0">
                    </div>
                </div>
                <div class="row align-items-center text-center">
                    <div id="Copyright" class="col-md-12 text-light">
                        Copyright ©2023 All rights reserved</div>
                    <!-- <div class="col-md-6 text-md-right">
                      <ul class="list-inline mb-0">
                        <li class="mr-3 list-inline-item"><a class="list-group-item-action text-light" href="javascript:">
                            Term Of Service
                          </a>
                        </li>
                        <li class="mr-3 list-inline-item"><a class="list-group-item-action text-light" href="javascript:">
                            Privacy Policy
                          </a>
                        </li>
                        <li class="list-inline-item"><a class="list-group-item-action text-light" href="javascript:">
                            Support
                          </a>
                        </li>
                      </ul>
                    </div> -->
                </div>
            </div>
        </footer>

        <!--footer end-->

    </div>

    <!-- page wrapper end -->


    <!--back-to-top start-->


    <!--back-to-top end-->

    <!-- inject js start -->

    <script src="assets/build/js/theme-plugin.js"></script>
    <script src="assets/build/js/theme-script.js"></script>

    <!-- inject js end -->

@endsection
