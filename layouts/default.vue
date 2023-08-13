<script setup>
</script>

<template>
  <div>

    <div class="loader-wrapper">
      <div class="loader"></div>
      <div class="loder-section left-section"></div>
      <div class="loder-section right-section"></div>
    </div>

    <!--==================================================-->
    <!-- Start consen Main Menu Area -->
    <!--==================================================-->
    <div id="sticky-header" class="consen_nav_manu">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="logo">
              <nuxt-link class="logo_img" to="/" title="consen">
                <img src="../assets/images/logo.png" alt="logo">
              </nuxt-link>
              <nuxt-link class="main_sticky" to="/" title="consen">
                <img src="../assets/images/logo.png" alt="logo">
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-9 pl-0 pr-0">
            <nav class="consen_menu">
              <ul class="nav_scroll">
                <li> <nuxt-link to="/">Home</nuxt-link></li>
                <li> <nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
                <li> <nuxt-link to="/about-us">About us</nuxt-link></li>
                <li> <nuxt-link to="/services">Services</nuxt-link></li>
                <li> <nuxt-link to="/contact">Contact</nuxt-link></li>
              </ul>
              <div class="header-button">
                <nuxt-link to="/contact">Schedule Consultation</nuxt-link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- consen Mobile Menu Area -->
    <div class="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
      <div class="mobile-menu">
        <nav class="consen_menu">
          <ul class="nav_scroll">
            <li><a href="#">Home </a>
              <ul class="sub-menu">
                <li><a href="index.html">IT Consulting</a></li>
                <li><a href="index-2.html">Finance Consulting</a></li>
                <li><a href="index-3.html">IT Solution</a></li>
                <li><a href="landing-1.html">Landing One<span>New</span></a></li>
                <li><a href="landing-2.html">Landing Two<span>New</span></a></li>
              </ul>
            </li>
            <li><a href="#">Company </a>
              <ul class="sub-menu">
                <li><a href="about.html">About Us</a></li>
                <li><a href="service.html">Our Service</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="team.html">Our Team</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                <li><a href="404.html">404</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </li>
            <li><a href="#">Services </a>
              <ul class="sub-menu">
                <li><a href="service.html">Our Service</a></li>
                <li><a href="service-details.html">Service Details</a></li>
              </ul>
            </li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="#">Blog </a>
              <ul class="sub-menu">
                <li><a href="blog-grid.html">Blog Gird</a></li>
                <li><a href="blog-list.html">Blog List</a></li>
                <li><a href="blog-2column.html">Blog-2Column</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <!--    pages-->
      <slot/>
    <!--==================================================-->
    <!-- Start consen Footer Middle Area -->
    <!--==================================================-->
    <div class="footer-middle">
      <div class="container">
        <div class="subscribe-area">
          <div class="row ">
            <div class="col-lg-6 col-md-6">
              <div class="subscribe-title">
                <h1>Subscribe to our Newsletter</h1>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                <div class="subscribe_form">
                  <input type="email" name="email" id="email" class="form-control" required
                         data-error="Please enter your email" placeholder="Enter Your Email">
                  <button type="submit" class="btn">Subscribe</button>
                </div>
                <div class="subscribe_form_send">

                </div>
              </form>
              <div id="status"></div>
            </div>
          </div>
          <div class="subscribe-shape">
            <div class="subscribe-thumb bounce-animate5">
              <img src="~/assets/images/resource/small-dot.png" alt="">
            </div>
            <div class="subscribe-thumb1">
              <img src="~/assets/images/resource/big-dot.png" alt="">
            </div>
          </div>
        </div>

        <div class="footer-bg">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="widget widgets-company-info mb-4 mb-lg-0">
                <div class="company-info-desc pr-2">
                  <h4 class="widget-title"> About Us </h4>
                  <p>Busines Consulting is optimize standing manufactured products and installation
                    synergy.
                    Professionally predominat why professional business</p>
                </div>
                <div class="follow-company-icon">
                  <a class="social-icon-color" href="#"> <i class="bi bi-facebook"></i> </a>
                  <a class="social-icon-color2" href="#"> <i class="bi bi-instagram"> </i> </a>
                  <a class="social-icon-color1" href="#"> <i class="bi bi-twitter"></i> </a>
                  <a class="social-icon-color3" href="#"> <i class="bi bi-youtube"></i> </a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-6">
              <div class="widget widget-nav-menu">
                <h4 class="widget-title">Company</h4>
                <div class="menu-quick-link-content">
                  <ul class="footer-menu">
                    <li><a href="#"> Home </a></li>
                    <li><a href="#"> About U s</a></li>
                    <li><a href="#"> Contact Us </a></li>
                    <li><a href="#"> Service </a></li>
                    <li><a href="#"> Our Team </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="widget widget-nav-menu">
                <h4 class="widget-title"> Services </h4>
                <div class="menu-quick-link-content">
                  <ul class="footer-menu">
                    <li><a href="#"> Strategy & Planing </a></li>
                    <li><a href="#"> Consumer Market </a></li>
                    <li><a href="#"> Data Analysis </a></li>
                    <li><a href="#"> Corporate Finance </a></li>
                    <li><a href="#"> Market Research </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div id="em-recent-post-widget" class="mt-5 mt-sm-0">
                <div class="single-widget-item">
                  <h4 class="widget-title">Popular Posts</h4>
                  <div class="recent-post-item active">
                    <div class="recent-post-image">
                      <a href="#">
                        <img width="80" height="80" src="~/assets/images/resource/footer1.png" alt="">
                      </a>
                    </div>
                    <div class="recent-post-text">
                      <h6><a href="#">
                        How To Plugin Install WP server?
                      </a>
                      </h6>
                      <span class="rcomment">Dec 12, 2023</span>
                    </div>
                  </div>
                  <div class="recent-post-item">
                    <div class="recent-post-image">
                      <a href="#">
                        <img width="80" height="80" src="~/assets/images/resource/footer2.png" alt="">
                      </a>
                    </div>
                    <div class="recent-post-text">
                      <h6><a href="#">
                        Top 10 Most Usefull Google Extansion
                      </a>
                      </h6>
                      <span class="rcomment">Dec 15, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="foorer-shape">
            <div class="footer-thumb">
              <img src="~/assets/images/resource/red-dot.png" alt="">
            </div>
            <div class="footer-thumb1 bounce-animate2">
              <img src="~/assets/images/resource/all-shape.png" alt="">
            </div>
          </div>
        </div>

      </div>
      <div class="footer-bottom-area d-flex align-items-center">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-md-4">
              <div class="consen-logo">
                <nuxt-link class="logo_thumb" to="/" title="consen">
                  <img src="../assets/images/logo.png" alt="logo">
                </nuxt-link>
              </div>
            </div>
            <div class="col-md-8">
              <div class="footer-bottom-content">
                <div class="footer-bottom-content-copy">
                  <p>© 2023 <span>Consen</span> all rights reserved. Design By Dream-IT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==================================================-->
    <!-- End consen Footer Middle Area -->
    <!--==================================================-->


    <!--==================================================-->
    <!-- Start scrollup section Area -->
    <!--==================================================-->
    <!-- scrollup section -->
    <div class="scroll-area">
      <div class="top-wrap">
        <div class="go-top-btn-wraper">
          <div class="go-top go-top-button">
            <i class="fas fa-arrow-up"></i>
            <i class="fas fa-arrow-up"></i>
          </div>
        </div>
      </div>
    </div>
    <!--==================================================-->
    <!-- Start scrollup section Area -->
    <!--==================================================-->
  </div>

</template>

