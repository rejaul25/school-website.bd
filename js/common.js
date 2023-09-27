// main header html and link
class MainHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>High School Web template-design</title>
            <!-- fontawsome-cdn-links -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
            <!-- bootstrap-file-link -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
            <!-- main-css-file-link -->
            <link rel="stylesheet" href="css/style.css">
            <!-- other-css-link-file -->
            <link rel="stylesheet" href="css/other.css">
            <!-- responsive-css-link -->
            <link rel="stylesheet" href="./css/responsive.css">
        </head>
        

        
        `
    }
}
customElements.define('main-head', MainHead)
//main header html and link


class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="co-main-container">
        <!-- header area img start -->

        <header class="header-part">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-1 col-md-2">
                        <div class="header-img-area">
                            <img src="./gallery/edu-bd-logo.png" alt="photo">
                        </div>
                    </div>
                    <div class="col-lg-11 col-md-10">
                        <div class="head-box">
                            <h1>চাকিনীয়া সরকারি প্রাথমিক বিদ্যালয়</h1>
                            <div class="school-det">
                                <h4>চাকিনীয়া, খানসামা , দিনাজপুর</h4>
                                <h5>স্থাপিতঃ ১১-১১-১১১১</h5>
                                <h5>
                                    কোড নং: ১২১২
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- header area img start -->

        <!-- menubar area start -->
        <section class="menubar-section ">

            <div class="navbar-menu">

                <div class="topnav" id="myTopnav">

                    <div class="menubar">
                        <nav>
                            <ul>
                                <li><a href="#" class="active" onclick= "homeButton()">প্রচ্ছদ</a></li>
                                <li><a href="#">প্রশাসন</a>

                                    <div class="dropdown_menu">
                                        <ul>
                                            <li><a href="#">শিক্ষকবৃন্দ</a></li>
                                            <li><a href="#">পরিচালনা পরিষদ</a></li>
                                            <li><a href="#">মানেজিং কমিটি</a></li>
                                            <li><a href="#">কর্মকর্তা কর্মচারী</a></li>
                                            <li><a href="#">প্রাক্তন শিক্ষক</a></li>
                                            <li><a href="#">কৃতি শিক্ষার্থী</a></li>


                                        </ul>
                                    </div>

                                </li>
                                <li><a href="#">শিক্ষার্থীদের তথ্য</a></li>
                                <li><a href="#">ভর্তি</a></li>
                                <li><a href="#">ডাউনলোড</a></li>
                                <li><a href="#">রুটিন</a></li>
                                <li><a href="#">ফলাফল</a></li>
                                <li><a href="#">নোটিশ</a></li>
                                <li><a href="#">ব্লগ</a></li>
                                <li><a href="#">গ্যালারি</a></li>
                                <li><a href="#">বিভিন্ন তথ্য</a></li>
                                <li><a href="#">যোগাযোগ</a></li>

                            </ul>
                        </nav>
                    </div>

                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>


            </div>

        </section>

    </div>


        `
    }
}

customElements.define('my-header', MyHeader)

// right side start 
class RightSide extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="main-body-right">

        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-lg-12">

                    <div class="biodata-card">
                        <div class="biodata-head">
                            <h4>Honourable Minister</h4>
                        </div>
                        <div class="biodata-box">
                            <img src="./gallery/head-teacher.gif" alt="photo">
                            <h5>D. Dipu Moni (M.P)</h5>
                            <h5><a href="#">Detailes</a> </h5>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="container my-3">
            <div class="row">
                <div class="col-lg-12 col-lg-12">

                    <div class="biodata-card">
                        <div class="biodata-head">
                            <h4>Honourable Minister</h4>
                        </div>
                        <div class="biodata-box">
                            <img src="./gallery/head-teacher.gif" alt="photo">
                            <h5>D. Dipu Moni (M.P)</h5>
                            <h5><a href="#">Detailes</a> </h5>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="container my-3">
            <div class="row">
                <div class="col-lg-12 col-lg-12">

                    <div class="biodata-card">
                        <div class="biodata-head">
                            <h4>Honourable Minister</h4>
                        </div>
                        <div class="biodata-box">
                            <img src="./gallery/head-teacher.gif" alt="photo">
                            <h5>D. Dipu Moni (M.P)</h5>
                            <h5><a href="#">Detailes</a> </h5>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="container my-3">
            <div class="row">
                <div class="col-lg-12 col-lg-12">

                    <div class="some-information-card">
                        <div class="some-information-head">
                            <h4>অফিসিয়াল লিংক</h4>
                        </div>

                        <div class="some-information-box">
                            <a href="#">শিক্ষা মন্ত্রণালয়</a>
                            <a href="#">এসএসসি/এইচএসসি ফলাফল</a>
                            <a href="#">ব্যানবেইজ</a>
                            <a href="#">এসএসসি/এইচএসসি ফলাফল</a>
                            <a href="#">শিক্ষা মন্ত্রণালয়</a>
                        </div>

                    </div>


                </div>
            </div>
        </div>

        <div class="container my-3">
            <div class="row">
                <div class="col-lg-12 col-lg-12">

                    <div class="some-information-card">
                        <div class="some-information-head">
                            <h4>গুরুত্বপূর্ণ তথ্য</h4>
                        </div>

                        <div class="some-information-box">
                            <a href="#">ই-বুক</a>
                            <a href="#">শিক্ষক বাতায়ন</a>
                            <a href="#">মাল্টিমিডিয়া ক্লাসরুম ম্যানেজমেন্ট</a>

                        </div>

                    </div>


                </div>
            </div>
        </div>

        <div class="container my-3">
            <div class="row">
                <div class="col-lg-12 col-lg-12">

                    <div class="some-information-card">
                        <div class="some-information-head">
                            <h4>ডেঙ্গু প্রতিরোধে করণীয়</h4>
                        </div>

                        <div class="some-information-box">
                            <a href="#"> <img src="./gallery/dengu-protect.jpg" alt="photo"></a>

                        </div>

                    </div>


                </div>
            </div>
        </div>




    </div>

        
        `
    }
}
customElements.define('right-side', RightSide)


// right side end

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <footer>

        <div class="footer-content d-flex justify-content-between">
            <p href="#">All © rights reserved md rejaul islam reja</P>
            <p>Design & Developed BY <a href="#">REJAUL ISLAM</a></p>
        </div>
    </footer>

        
        `
    }
}
customElements.define('my-footer', MyFooter)


