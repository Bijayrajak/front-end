import React, { Component } from 'react';

const product = [
    {
        id: 1,
        name: 'paracitamol',
        price: 10
    },
    {
        id: 2,
        name: 'baby powder',
        price: 100
    },
    {
        id: 3,
        name: 'sanitary pad',
        price: 150
    },
    {
        id: 4,
        name: 'face wash',
        price: 200
    },
    {
        id: 5,
        name: 'jomsom powder',
        price: 250
    },
    {
        id: 5,
        name: 'jomsom powder',
        price: 250
    },

]
class main extends Component {
    render() {
        return (
            <div>
                <div class="bottom_header dark_skin main_menu_uppercase border-top border-bottom">
                    <div class="custom-container">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-sm-6 col-3">
                                <div class="categories_wrap">
                                    <button type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" class="categories_btn">
                                        <i class="linearicons-menu"></i><span>All Categories </span>
                                    </button>
                                    <div id="navCatContent" class="nav_cat navbar collapse">
                                        <ul>
                                            <li class="dropdown dropdown-mega-menu">
                                                <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-tv"></i> <span>Computer</span></a>
                                                <div class="dropdown-menu">
                                                    <ul class="mega-menu d-lg-flex">
                                                        <li class="mega-menu-col col-lg-7">
                                                            <ul class="d-lg-flex">
                                                                <li class="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li class="dropdown-header">Featured Item</li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li class="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li class="dropdown-header">Popular Item</li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-5">
                                                            <div class="header-banner2">
                                                                <img src="assets/images/menu_banner1.jpg" alt="menu_banner1" />
                                                                <div class="banne_info">
                                                                    <h6>10% Off</h6>
                                                                    <h4>New Arrival</h4>
                                                                    <a href="#">Shop now</a>
                                                                </div>
                                                            </div>
                                                            <div class="header-banner2">
                                                                <img src="assets/images/menu_banner2.jpg" alt="menu_banner2" />
                                                                <div class="banne_info">
                                                                    <h6>15% Off</h6>
                                                                    <h4>Men's Fashion</h4>
                                                                    <a href="#">Shop now</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="dropdown dropdown-mega-menu">
                                                <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-responsive"></i> <span>Mobile & Tablet</span></a>
                                                <div class="dropdown-menu">
                                                    <ul class="mega-menu d-lg-flex">
                                                        <li class="mega-menu-col col-lg-7">
                                                            <ul class="d-lg-flex">
                                                                <li class="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li class="dropdown-header">Featured Item</li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li class="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li class="dropdown-header">Popular Item</li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-5">
                                                            <div class="header-banner2">
                                                                <a href="#"><img src="assets/images/menu_banner4.jpg" alt="menu_banner4" /></a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="dropdown dropdown-mega-menu">
                                                <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-camera"></i> <span>Camera</span></a>
                                                <div class="dropdown-menu">
                                                    <ul class="mega-menu d-lg-flex">
                                                        <li class="mega-menu-col col-lg-7">
                                                            <ul class="d-lg-flex">
                                                                <li class="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li class="dropdown-header">Featured Item</li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li class="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li class="dropdown-header">Popular Item</li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-5">
                                                            <div class="header-banner2">
                                                                <a href="#"><img src="assets/images/menu_banner5.jpg" alt="menu_banner5" /></a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="dropdown dropdown-mega-menu">
                                                <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i class="flaticon-plugins"></i> <span>Accessories</span></a>
                                                <div class="dropdown-menu">
                                                    <ul class="mega-menu d-lg-flex">
                                                        <li class="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li class="dropdown-header">Woman's</li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-three-columns.html">Vestibulum sed</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-four-columns.html">Donec porttitor</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-grid-view.html">Donec vitae facilisis</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-list-view.html">Curabitur tempus</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Vivamus in tortor</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li class="dropdown-header">Men's</li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-cart.html">Donec vitae ante ante</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="checkout.html">Etiam ac rutrum</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="wishlist.html">Quisque condimentum</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="compare.html">Curabitur laoreet</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="cart-empty.html">Vivamus in tortor</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li class="dropdown-header">Kid's</li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail.html">Donec vitae facilisis</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Quisque condimentum</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Etiam ac rutrum</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec vitae ante ante</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-accordion-style.html">Donec porttitor</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a class="dropdown-item nav-link nav_item" href="coming-soon.html"><i class="flaticon-headphones"></i> <span>Headphones</span></a></li>
                                            <li><a class="dropdown-item nav-link nav_item" href="404.html"><i class="flaticon-console"></i> <span>Gaming</span></a></li>
                                            <li><a class="dropdown-item nav-link nav_item" href="login.html"><i class="flaticon-watch"></i> <span>Watches</span></a></li>
                                            <li><a class="dropdown-item nav-link nav_item" href="register.html"><i class="flaticon-music-system"></i> <span>Home Audio & Theater</span></a></li>
                                            <li><a class="dropdown-item nav-link nav_item" href="coming-soon.html"><i class="flaticon-monitor"></i> <span>TV & Smart Box</span></a></li>
                                            <li><a class="dropdown-item nav-link nav_item" href="404.html"><i class="flaticon-printer"></i> <span>Printer</span></a></li>
                                            <li>
                                                <ul class="more_slide_open">
                                                    <li><a class="dropdown-item nav-link nav_item" href="login.html"><i class="flaticon-fax"></i> <span>Fax Machine</span></a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="register.html"><i class="flaticon-mouse"></i> <span>Mouse</span></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div class="more_categories">More Categories</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-8 col-sm-6 col-9">
                                <nav class="navbar navbar-expand-lg">
                                    <button class="navbar-toggler side_navbar_toggler" type="button" data-toggle="collapse" data-target="#navbarSidetoggle" aria-expanded="false">
                                        <span class="ion-android-menu"></span>
                                    </button>
                                    <div class="pr_search_icon">
                                        <a href="javascript:void(0);" class="nav-link pr_search_trigger"><i class="linearicons-magnifier"></i></a>
                                    </div>
                                    <div class="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
                                        <ul class="navbar-nav">
                                            <li class="dropdown">
                                                <a data-toggle="dropdown" class="nav-link dropdown-toggle active" href="#">Home</a>
                                                <div class="dropdown-menu">
                                                    <ul>
                                                        <li><a class="dropdown-item nav-link nav_item" href="index.html">Fashion 1</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="index-2.html">Fashion 2</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="index-3.html">Furniture 1</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="index-4.html">Furniture 2</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item active" href="index-5.html">Electronics 1</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="index-6.html">Electronics 2</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="dropdown">
                                                <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Pages</a>
                                                <div class="dropdown-menu">
                                                    <ul>
                                                        <li><a class="dropdown-item nav-link nav_item" href="about.html">About Us</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="contact.html">Contact Us</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="faq.html">Faq</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="404.html">404 Error Page</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="login.html">Login</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="signup.html">Register</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="term-condition.html">Terms and Conditions</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="dropdown dropdown-mega-menu">
                                                <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Products</a>
                                                <div class="dropdown-menu">
                                                    <ul class="mega-menu d-lg-flex">
                                                        <li class="mega-menu-col col-lg-3">
                                                            <ul>
                                                                <li class="dropdown-header">Woman's</li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-3">
                                                            <ul>
                                                                <li class="dropdown-header">Men's</li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-3">
                                                            <ul>
                                                                <li class="dropdown-header">Kid's</li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-3">
                                                            <ul>
                                                                <li class="dropdown-header">Accessories</li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="$">Vivamus in tortor</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <div class="d-lg-flex menu_banners">
                                                        <div class="col-lg-6">
                                                            <div class="header-banner">
                                                                <div class="sale-banner">
                                                                    <a class="hover_effect1" href="#">
                                                                        <img src="assets/images/shop_banner_img7.jpg" alt="shop_banner_img7" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="header-banner">
                                                                <div class="sale-banner">
                                                                    <a class="hover_effect1" href="#">
                                                                        <img src="assets/images/shop_banner_img8.jpg" alt="shop_banner_img8" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="dropdown">
                                                <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Blog</a>
                                                <div class="dropdown-menu dropdown-reverse">
                                                    <ul>
                                                        <li>
                                                            <a class="dropdown-item menu-link dropdown-toggler" href="#">Grids</a>
                                                            <div class="dropdown-menu">
                                                                <ul>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-three-columns.html">3 columns</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-four-columns.html">4 columns</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-left-sidebar.html">Left Sidebar</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-right-sidebar.html">right Sidebar</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-standard-left-sidebar.html">Standard Left Sidebar</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-standard-right-sidebar.html">Standard right Sidebar</a></li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item menu-link dropdown-toggler" href="#">Masonry</a>
                                                            <div class="dropdown-menu">
                                                                <ul>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-masonry-three-columns.html">3 columns</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-masonry-four-columns.html">4 columns</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-masonry-left-sidebar.html">Left Sidebar</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-masonry-right-sidebar.html">right Sidebar</a></li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item menu-link dropdown-toggler" href="#">Single Post</a>
                                                            <div class="dropdown-menu">
                                                                <ul>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-single.html">Default</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-single-left-sidebar.html">left sidebar</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-single-slider.html">slider post</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-single-video.html">video post</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-single-audio.html">audio post</a></li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item menu-link dropdown-toggler" href="#">List</a>
                                                            <div class="dropdown-menu">
                                                                <ul>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-list-left-sidebar.html">left sidebar</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="blog-list-right-sidebar.html">right sidebar</a></li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="dropdown dropdown-mega-menu">
                                                <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Shop</a>
                                                <div class="dropdown-menu">
                                                    <ul class="mega-menu d-lg-flex">
                                                        <li class="mega-menu-col col-lg-9">
                                                            <ul class="d-lg-flex">
                                                                <li class="mega-menu-col col-lg-4">
                                                                    <ul>
                                                                        <li class="dropdown-header">Shop Page Layout</li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list.html">shop List view</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">shop List Left Sidebar</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-list-right-sidebar.html">shop List Right Sidebar</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-load-more.html">Shop Load More</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li class="mega-menu-col col-lg-4">
                                                                    <ul>
                                                                        <li class="dropdown-header">Other Pages</li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-cart.html">Cart</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="checkout.html">Checkout</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="wishlist.html">Wishlist</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="compare.html">compare</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="order-completed.html">Order Completed</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li class="mega-menu-col col-lg-4">
                                                                    <ul>
                                                                        <li class="dropdown-header">Product Pages</li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail.html">Default</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Left Sidebar</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Right Sidebar</a></li>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Thumbnails Left</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-3">
                                                            <div class="header_banner">
                                                                <div class="header_banner_content">
                                                                    <div class="shop_banner">
                                                                        <div class="banner_img overlay_bg_40">
                                                                            <img src="assets/images/shop_banner.jpg" alt="shop_banner" />
                                                                        </div>
                                                                        <div class="shop_bn_content">
                                                                            <h5 class="text-uppercase shop_subtitle">New Collection</h5>
                                                                            <h3 class="text-uppercase shop_title">Sale 30% Off</h3>
                                                                            <a href="#" class="btn btn-white rounded-0 btn-sm text-uppercase">Shop Now</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a class="nav-link nav_item" href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div class="contact_phone contact_support">
                                        <i class="linearicons-phone-wave"></i>
                                        <span>123-456-7689</span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- START SECTION BANNER --> */}
                <div class="mt-4 staggered-animation-wrap">
                    <div class="custom-container">
                        <div class="row">
                            <div class="col-lg-7 offset-lg-3">
                                <div class="banner_section shop_el_slider">
                                    <div id="carouselExampleControls" class="carousel slide carousel-fade light_arrow" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active background_bg" data-img-src="assets/images/banner13.jpg">
                                                <div class="banner_slide_content banner_content_inner">
                                                    <div class="col-lg-7 col-10">
                                                        <div class="banner_content3 overflow-hidden">
                                                            <h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Get up to 50% off Today Only!</h5>
                                                            <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Dual Camera 20MP</h2>
                                                            <h4 class="staggered-animation mb-4 product-price" data-animation="slideInLeft" data-animation-delay="1.2s"><span class="price">$45.00</span><del>$55.25</del></h4>
                                                            <a class="btn btn-fill-out btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item background_bg" data-img-src="assets/images/banner14.jpg">
                                                <div class="banner_slide_content banner_content_inner">
                                                    <div class="col-lg-8 col-10">
                                                        <div class="banner_content3 overflow-hidden">
                                                            <h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">50% off in all products</h5>
                                                            <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Smart Watches</h2>
                                                            <h4 class="staggered-animation mb-3 mb-sm-4 product-price" data-animation="slideInLeft" data-animation-delay="1.2s"><span class="price">$45.00</span><del>$55.25</del></h4>
                                                            <a class="btn btn-fill-out btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item background_bg" data-img-src="assets/images/banner15.jpg">
                                                <div class="banner_slide_content banner_content_inner">
                                                    <div class="col-lg-8 col-10">
                                                        <div class="banner_content3 overflow-hidden">
                                                            <h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Taking your Viewing Experience to Next Level</h5>
                                                            <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Beat Headphone</h2>
                                                            <h4 class="staggered-animation mb-4 product-price" data-animation="slideInLeft" data-animation-delay="1.2s"><span class="price">$45.00</span><del>$55.25</del></h4>
                                                            <a class="btn btn-fill-out btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ol class="carousel-indicators indicators_style3">
                                            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 d-none d-lg-block">
                                <div class="shop_banner2 el_banner1">
                                    <a href="#" class="hover_effect1">
                                        <div class="el_title text_white">
                                            <h6>iphone Collection</h6>
                                            <span>25% off</span>
                                        </div>
                                        <div class="el_img">
                                            <img src="assets/images/shop_banner_img6.png" alt="shop_banner_img6" />
                                        </div>
                                    </a>
                                </div>
                                <div class="shop_banner2 el_banner2">
                                    <a href="#" class="hover_effect1">
                                        <div class="el_title text_white">
                                            <h6>MAC Computer</h6>
                                            <span><u>Shop Now</u></span>
                                        </div>
                                        <div class="el_img">
                                            <img src="assets/images/shop_banner_img7.png" alt="shop_banner_img7" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END SECTION BANNER --> */}

                {/* <!-- END MAIN CONTENT --> */}
                <div class="main_content">

                    {/* <!-- START SECTION SHOP --> */}
                    <div class="section small_pt pb-0">
                        <div class="custom-container">
                            <div class="row">
                                <div class="col-xl-3 d-none d-xl-block">
                                    <div class="sale-banner">
                                        <a class="hover_effect1" href="#">
                                            <img src="assets/images/shop_banner_img6.jpg" alt="shop_banner_img6" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-9">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="heading_tab_header">
                                                <div class="heading_s2">
                                                    <h4>Exclusive Products</h4>
                                                </div>
                                                <div class="tab-style2">
                                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#tabmenubar" aria-expanded="false">
                                                        <span class="ion-android-menu"></span>
                                                    </button>
                                                    <ul class="nav nav-tabs justify-content-center justify-content-md-end" id="tabmenubar" role="tablist">
                                                        <li class="nav-item">
                                                            <a class="nav-link active" id="arrival-tab" data-toggle="tab" href="#arrival" role="tab" aria-controls="arrival" aria-selected="true">New Arrival</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" id="sellers-tab" data-toggle="tab" href="#sellers" role="tab" aria-controls="sellers" aria-selected="false">Best Sellers</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" id="featured-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="false">Featured</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" id="special-tab" data-toggle="tab" href="#special" role="tab" aria-controls="special" aria-selected="false">Special Offer</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="tab_slider">
                                                <div class="tab-pane fade show active" id="arrival" role="tabpanel" aria-labelledby="arrival-tab">
                                                    <div class="product_slider carousel_slider owl-carousel owl-theme dot_style1" data-loop="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img1.jpg" alt="el_img1" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img1.jpg" alt="el_hover_img1" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Red & Black Headphone</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$45.00</span>
                                                                        <del>$55.25</del>
                                                                        <div class="on_sale">
                                                                            <span>35% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '80%' }}></div>
                                                                        </div>
                                                                        <span class="rating_num">(21)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img2.jpg" alt="el_img2" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img2.jpg" alt="el_hover_img2" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Smart Watch External</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$55.00</span>
                                                                        <del>$95.00</del>
                                                                        <div class="on_sale">
                                                                            <span>25% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '68%' }}></div>
                                                                        </div>
                                                                        <span class="rating_num">(15)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <span class="pr_flash">New</span>
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img3.jpg" alt="el_img3" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img3.jpg" alt="el_hover_img3" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Nikon HD camera</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$68.00</span>
                                                                        <del>$99.00</del>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '87%' }}></div>
                                                                        </div>
                                                                        <span class="rating_num">(25)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img4.jpg" alt="el_img4" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img4.jpg" alt="el_hover_img4" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Audio Equipment</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$69.00</span>
                                                                        <del>$89.00</del>
                                                                        <div class="on_sale">
                                                                            <span>20% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '70%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(22)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img5.jpg" alt="el_hover_img5" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Smart Televisions</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$45.00</span>
                                                                        <del>$55.25</del>
                                                                        <div class="on_sale">
                                                                            <span>35% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '80%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(21)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <span class="pr_flash bg-danger">Hot</span>
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img6.jpg" alt="el_img6" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img6.jpg" alt="el_hover_img6" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Samsung Smart Phone</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$55.00</span>
                                                                        <del>$95.00</del>
                                                                        <div class="on_sale">
                                                                            <span>25% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '68%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(15)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="sellers" role="tabpanel" aria-labelledby="sellers-tab">
                                                    <div class="product_slider carousel_slider owl-carousel owl-theme dot_style1" data-loop="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img7.jpg" alt="el_img7" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img7.jpg" alt="el_hover_img7" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Audio Theaters</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$45.00</span>
                                                                        <del>$55.25</del>
                                                                        <div class="on_sale">
                                                                            <span>35% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '80%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(21)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <span class="pr_flash bg-danger">Hot</span>
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img8.jpg" alt="el_img8" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img8.jpg" alt="el_hover_img8" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Surveillance camera</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$55.00</span>
                                                                        <del>$95.00</del>
                                                                        <div class="on_sale">
                                                                            <span>25% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '68%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(15)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img9.jpg" alt="el_img9" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img9.jpg" alt="el_hover_img9" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">oppo Reno3 Pro</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$68.00</span>
                                                                        <del>$99.00</del>
                                                                        <div class="on_sale">
                                                                            <span>20% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '87%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(25)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <span class="pr_flash bg-success">Sale</span>
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img10.jpg" alt="el_img10" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img10.jpg" alt="el_hover_img10" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">classical Headphone</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$68.00</span>
                                                                        <del>$99.00</del>
                                                                        <div class="on_sale">
                                                                            <span>20% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '87%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(25)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img11.jpg" alt="el_img11" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img11.jpg" alt="el_hover_img11" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Basics High-Speed HDMI</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$69.00</span>
                                                                        <del>$89.00</del>
                                                                        <div class="on_sale">
                                                                            <span>20% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '70%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(22)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img12.jpg" alt="el_img12" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img12.jpg" alt="el_hover_img12" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Sound Equipment for Low</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$45.00</span>
                                                                        <del>$55.25</del>
                                                                        <div class="on_sale">
                                                                            <span>35% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '80%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(21)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                                    <div class="product_slider carousel_slider owl-carousel owl-theme dot_style1" data-loop="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <span class="pr_flash bg-danger">Hot</span>
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img8.jpg" alt="el_img8" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img8.jpg" alt="el_hover_img8" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Surveillance camera</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$55.00</span>
                                                                        <del>$95.00</del>
                                                                        <div class="on_sale">
                                                                            <span>25% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '68%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(15)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img4.jpg" alt="el_img4" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img4.jpg" alt="el_hover_img4" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Audio Equipment</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$69.00</span>
                                                                        <del>$89.00</del>
                                                                        <div class="on_sale">
                                                                            <span>20% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '70%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(22)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img11.jpg" alt="el_img11" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img11.jpg" alt="el_hover_img11" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Basics High-Speed HDMI</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$69.00</span>
                                                                        <del>$89.00</del>
                                                                        <div class="on_sale">
                                                                            <span>20% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '70%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(22)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img1.jpg" alt="el_img1" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img1.jpg" alt="el_hover_img1" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Red & Black Headphone</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$45.00</span>
                                                                        <del>$55.25</del>
                                                                        <div class="on_sale">
                                                                            <span>35% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '80%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(21)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img7.jpg" alt="el_img7" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img7.jpg" alt="el_hover_img7" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Audio Theaters</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$45.00</span>
                                                                        <del>$55.25</del>
                                                                        <div class="on_sale">
                                                                            <span>35% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '80%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(21)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <span class="pr_flash bg-danger">Hot</span>
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img6.jpg" alt="el_img6" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img6.jpg" alt="el_hover_img6" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Samsung Smart Phone</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$55.00</span>
                                                                        <del>$95.00</del>
                                                                        <div class="on_sale">
                                                                            <span>25% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '68%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(15)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="special" role="tabpanel" aria-labelledby="special-tab">
                                                    <div class="product_slider carousel_slider owl-carousel owl-theme dot_style1" data-loop="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img2.jpg" alt="el_img2" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img2.jpg" alt="el_hover_img2" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Smart Watch External</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$55.00</span>
                                                                        <del>$95.00</del>
                                                                        <div class="on_sale">
                                                                            <span>25% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '68%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(15)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img5.jpg" alt="el_hover_img5" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Smart Televisions</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$45.00</span>
                                                                        <del>$55.25</del>
                                                                        <div class="on_sale">
                                                                            <span>35% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '80%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(21)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img9.jpg" alt="el_img9" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img9.jpg" alt="el_hover_img9" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">oppo Reno3 Pro</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$68.00</span>
                                                                        <del>$99.00</del>
                                                                        <div class="on_sale">
                                                                            <span>20% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '87%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(25)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img7.jpg" alt="el_img7" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img7.jpg" alt="el_hover_img7" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Audio Theaters</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$45.00</span>
                                                                        <del>$55.25</del>
                                                                        <div class="on_sale">
                                                                            <span>35% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '80%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(21)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img5.jpg" alt="el_hover_img5" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Smart Televisions</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$45.00</span>
                                                                        <del>$55.25</del>
                                                                        <div class="on_sale">
                                                                            <span>35% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '80%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(21)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="product_wrap">
                                                                <div class="product_img">
                                                                    <a href="shop-product-detail.html">
                                                                        <img src="assets/images/el_img12.jpg" alt="el_img12" />
                                                                        <img class="product_hover_img" src="assets/images/el_hover_img12.jpg" alt="el_hover_img12" />
                                                                    </a>
                                                                    <div class="product_action_box">
                                                                        <ul class="list_none pr_action_btn">
                                                                            <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                            <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                            <li><a href="#"><i class="icon-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="product_info">
                                                                    <h6 class="product_title"><a href="shop-product-detail.html">Sound Equipment for Low</a></h6>
                                                                    <div class="product_price">
                                                                        <span class="price">$45.00</span>
                                                                        <del>$55.25</del>
                                                                        <div class="on_sale">
                                                                            <span>35% Off</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rating_wrap">
                                                                        <div class="rating">
                                                                            <div class="product_rate" style={{ width: '80%' }} ></div>
                                                                        </div>
                                                                        <span class="rating_num">(21)</span>
                                                                    </div>
                                                                    <div class="pr_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END SECTION SHOP --> */}

                {/* <!-- START SECTION BANNER -->  */}
                <div class="section pb_20 small_pt">
                    <div class="custom-container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="sale-banner mb-3 mb-md-4">
                                    <a class="hover_effect1" href="#">
                                        <img src="assets/images/shop_banner_img7.jpg" alt="shop_banner_img7" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="sale-banner mb-3 mb-md-4">
                                    <a class="hover_effect1" href="#">
                                        <img src="assets/images/shop_banner_img8.jpg" alt="shop_banner_img8" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="sale-banner mb-3 mb-md-4">
                                    <a class="hover_effect1" href="#">
                                        <img src="assets/images/shop_banner_img9.jpg" alt="shop_banner_img9" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END SECTION BANNER -->  */}

                {/* <!-- START SECTION SHOP --> */}
                <div class="section pt-0 pb-0">
                    <div class="custom-container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="heading_tab_header">
                                    <div class="heading_s2">
                                        <h4>Deal Of The Day</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="product_slider carousel_slider owl-carousel owl-theme nav_style3" data-loop="true" data-dots="false" data-nav="true" data-margin="30" data-responsive='{"0":{"items": "1"}, "650":{"items": "2"}, "1199":{"items": "2"}}'>
                                    <div class="item">
                                        <div class="deal_wrap">
                                            <div class="product_img">
                                                <a href="shop-product-detail.html">
                                                    <img src="assets/images/el_img1.jpg" alt="el_img1" />
                                                </a>
                                            </div>
                                            <div class="deal_content">
                                                <div class="product_info">
                                                    <h5 class="product_title"><a href="shop-product-detail.html">Red & Black Headphone</a></h5>
                                                    <div class="product_price">
                                                        <span class="price">$45.00</span>
                                                        <del>$55.25</del>
                                                    </div>
                                                </div>
                                                <div class="deal_progress">
                                                    <span class="stock-sold">Already Sold: <strong>6</strong></span>
                                                    <span class="stock-available">Available: <strong>8</strong></span>
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100" style={{ width: '46%' }} > 46% </div>
                                                    </div>
                                                </div>
                                                <div class="countdown_time countdown_style4 mb-4" data-time="2020/06/02 12:30:15"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="deal_wrap">
                                            <div class="product_img">
                                                <a href="shop-product-detail.html">
                                                    <img src="assets/images/el_img2.jpg" alt="el_img2" />
                                                </a>
                                            </div>
                                            <div class="deal_content">
                                                <div class="product_info">
                                                    <h5 class="product_title"><a href="shop-product-detail.html">Smart Watch External</a></h5>
                                                    <div class="product_price">
                                                        <span class="price">$55.00</span>
                                                        <del>$95.00</del>
                                                    </div>
                                                </div>
                                                <div class="deal_progress">
                                                    <span class="stock-sold">Already Sold: <strong>4</strong></span>
                                                    <span class="stock-available">Available: <strong>22</strong></span>
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" aria-valuenow="26" aria-valuemin="0" aria-valuemax="100" style={{ width: '26%' }} > 26% </div>
                                                    </div>
                                                </div>
                                                <div class="countdown_time countdown_style4 mb-4" data-time="2020/06/02 12:30:15"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="deal_wrap">
                                            <div class="product_img">
                                                <a href="shop-product-detail.html">
                                                    <img src="assets/images/el_img3.jpg" alt="el_img3" />
                                                </a>
                                            </div>
                                            <div class="deal_content">
                                                <div class="product_info">
                                                    <h5 class="product_title"><a href="shop-product-detail.html">Nikon HD camera</a></h5>
                                                    <div class="product_price">
                                                        <span class="price">$68.00</span>
                                                        <del>$99.25</del>
                                                    </div>
                                                </div>
                                                <div class="deal_progress">
                                                    <span class="stock-sold">Already Sold: <strong>16</strong></span>
                                                    <span class="stock-available">Available: <strong>20</strong></span>
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100" style={{ width: '28%' }} > 28% </div>
                                                    </div>
                                                </div>
                                                <div class="countdown_time countdown_style4 mb-4" data-time="2020/06/02 12:30:15"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END SECTION SHOP --> */}
                <div class="section small_pt small_pb">
                    <div class="custom-container">
                        <div class="row">
                            <div class="col-xl-3 d-none d-xl-block">
                                <div class="sale-banner">
                                    <a class="hover_effect1" href="#" >
                                        <img src="assets/images/shop_banner_img10.jpg" alt="shop_banner_img10" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-9">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="heading_tab_header">
                                            <div class="heading_s2" >
                                                <h4>Trending products</h4>
                                            </div>
                                            <div class="view_all">
                                                <a href="#" class="text_default"><i class="linearicons-power"></i> <span>View All</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="product_slider carousel_slider owl-carousel owl-theme dot_style1 " data-loop="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>

                                    {product.map((products) => (
                                        <div>
                                            <div class="item">
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img class="image" src="assets/images/wall.jpg" alt="el_img2" height="240px" />
                                                            <div class="product_hover_img" >
                                                                <ul style={{fontSize: '10pt'}}>
                                                                    <li><b>Brand Name:</b> Paracitamol</li>
                                                                    <li>Generic Name: ABC</li>
                                                                    <li>Price: ABC</li>
                                                                    <li>Composition: ABC</li>
                                                                    <li>Details Information (Permalink)</li>
                                                                </ul>
                                                            </div>
                                                        </a>
                                                        <div class="product_action_box">
                                                            <ul class="list_none pr_action_btn">
                                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> </a></li>
                                                                <li><a href="//bestwebcreator.com/shopwise/demo/shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                                                <li><a href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">{products.name} </a></h6>
                                                        <div class="product_price">
                                                            <span class="price">Rs.{products.price} </span>
                                                            {/* <del>$95.00</del>
                                                            <div class="on_sale">
                                                                <span>25% Off</span> */}
                                                            {/* </div> */}
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '68%' }}></div>
                                                            </div>
                                                            <span class="rating_num">(15)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // <!-- START SECTION SHOP -->  */}
                <div class="section pt-0 pb_20">
                    <div class="custom-container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="heading_tab_header">
                                            <div class="heading_s2">
                                                <h4>Featured Products</h4>
                                            </div>
                                            <div class="view_all">
                                                <a href="#" class="text_default"><span>View All</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="product_slider carousel_slider product_list owl-carousel owl-theme nav_style5" data-nav="true" data-dots="false" data-loop="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "380":{"items": "1"}, "640":{"items": "2"}, "991":{"items": "1"}}'>
                                            <div class="item">
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img2.jpg" alt="el_img2" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img2.jpg" alt="el_hover_img2" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Smart Watch External</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div class="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '68%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(15)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img1.jpg" alt="el_img1" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img1.jpg" alt="el_hover_img1" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Red &amp; Black Headphone</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div class="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '80%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(21)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <span class="pr_flash">New</span>
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img3.jpg" alt="el_img3" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img3.jpg" alt="el_hover_img3" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Nikon HD camera</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$68.00</span>
                                                            <del>$99.00</del>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '87%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(25)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img5.jpg" alt="el_hover_img5" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Smart Televisions</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div class="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '80%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(21)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img9.jpg" alt="el_img9" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img9.jpg" alt="el_hover_img9" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">oppo Reno3 Pro</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$68.00</span>
                                                            <del>$99.00</del>
                                                            <div class="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '87%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(25)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img7.jpg" alt="el_img7" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img7.jpg" alt="el_hover_img7" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Audio Theaters</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div class="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '80%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(21)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="heading_tab_header">
                                            <div class="heading_s2">
                                                <h4>Top Rated Products</h4>
                                            </div>
                                            <div class="view_all">
                                                <a href="#" class="text_default"><span>View All</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="product_slider carousel_slider product_list owl-carousel owl-theme nav_style5" data-nav="true" data-dots="false" data-loop="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "380":{"items": "1"}, "640":{"items": "2"}, "991":{"items": "1"}}'>
                                            <div class="item">
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img5.jpg" alt="el_hover_img5" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Smart Televisions</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div class="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '80%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(21)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img12.jpg" alt="el_img12" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img12.jpg" alt="el_hover_img12" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Sound Equipment for Low</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div class="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '80%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(21)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img4.jpg" alt="el_img4" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img4.jpg" alt="el_hover_img4" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Audio Equipment</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div class="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '70%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(22)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="product_wrap">
                                                    <span class="pr_flash bg-danger">Hot</span>
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img6.jpg" alt="el_img6" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img6.jpg" alt="el_hover_img6" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Samsung Smart Phone</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div class="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '68%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(15)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <span class="pr_flash bg-danger">Hot</span>
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img8.jpg" alt="el_img8" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img8.jpg" alt="el_hover_img8" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Surveillance camera</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div class="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '68%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(15)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <span class="pr_flash bg-success">Sale</span>
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img10.jpg" alt="el_img10" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img10.jpg" alt="el_hover_img10" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">classical Headphone</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$68.00</span>
                                                            <del>$99.00</del>
                                                            <div class="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '87%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(25)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="heading_tab_header">
                                            <div class="heading_s2">
                                                <h4>On Sale Products</h4>
                                            </div>
                                            <div class="view_all">
                                                <a href="#" class="text_default"><span>View All</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="product_slider carousel_slider product_list owl-carousel owl-theme nav_style5" data-nav="true" data-dots="false" data-loop="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "380":{"items": "1"}, "640":{"items": "2"}, "991":{"items": "1"}}'>
                                            <div class="item">
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img11.jpg" alt="el_img11" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img11.jpg" alt="el_hover_img11" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Basics High-Speed HDMI</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div class="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '70%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(22)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img7.jpg" alt="el_img7" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img7.jpg" alt="el_hover_img7" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Audio Theaters</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div class="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '80%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(21)</span>
                                                        </div>
                                                        <div class="pr_desc">

                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <span class="pr_flash bg-danger">Hot</span>
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img8.jpg" alt="el_img8" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img8.jpg" alt="el_hover_img8" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Surveillance camera</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div class="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '68%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(15)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img5.jpg" alt="el_hover_img5" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Smart Televisions</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div class="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '80%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(21)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img9.jpg" alt="el_img9" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img9.jpg" alt="el_hover_img9" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">oppo Reno3 Pro</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$68.00</span>
                                                            <del>$99.00</del>
                                                            <div class="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '87%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(25)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product_wrap">
                                                    <div class="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/el_img1.jpg" alt="el_img1" />
                                                            <img class="product_hover_img" src="assets/images/el_hover_img1.jpg" alt="el_hover_img1" />
                                                        </a>
                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href="shop-product-detail.html">Red &amp; Black Headphone</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div class="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div class="product_rate" style={{ width: '80%' }} ></div>
                                                            </div>
                                                            <span class="rating_num">(21)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- END SECTION SHOP --> */}
            </div >
        );
    }
}

export default main;