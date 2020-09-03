import React, { Component } from 'react';
import Product from './productData'

class header extends Component {
    
    render() {
        return (
            <div>
                
                {/* <!-- START HEADER --> */}
                <header class="header_wrap fixed-top header_with_topbar">
                    <div class="top-header">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <div class="d-flex align-items-center justify-content-center justify-content-md-start">

                                        <ul class="contact_detail text-center text-lg-left">
                                            <li><i class="ti-mobile"></i><span>123-456-7890</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="text-center text-md-right">
                                        <ul class="header_list">
                                            <li><a href="#"><i class="ti-control-shuffle"></i><span>Compare</span></a></li>
                                            <li><a href="#"><i class="ti-heart"></i><span>Wishlist</span></a></li>
                                            <li><a href="#"><i class="ti-user"></i><span>Login</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom_header dark_skin main_menu_uppercase">
                        <div class="container">
                            <nav class="navbar navbar-expand-lg">
                                <a class="navbar-brand" href="index.html">
                                    <img class="logo_light" src={require("./assets/images/logo_light.png")} alt="logo" />
                                    <img class="logo_dark" src={require("./assets/images/logo_dark.png")} alt="logo" />
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false">
                                    <span class="ion-android-menu"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul class="navbar-nav">
                                        <li class="dropdown">
                                            <a data-toggle="dropdown" class="nav-link dropdown-toggle" href="#">Home</a>
                                            <div class="dropdown-menu">
                                                <ul>
                                                    <li><a class="dropdown-item nav-link nav_item" href="index.html">Homeopathic</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="index-2.html">Allopathic</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="index-3.html">Ayurvedic</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="dropdown">
                                            <a class="dropdown-toggle nav-link active" href="#" data-toggle="dropdown">Pages</a>
                                            <div class="dropdown-menu">
                                                <ul>
                                                    <li><a class="dropdown-item nav-link nav_item" href="about.html">About Us</a></li>
                                                    <li><a class="dropdown-item nav-link nav_item" href="contact.html">Contact Us</a></li>
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
                                                            <li class="dropdown-header">Hair & Skin Care</li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="mega-menu-col col-lg-3">
                                                        <ul>
                                                            <li class="dropdown-header">Baby Care</li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="mega-menu-col col-lg-3">
                                                        <ul>
                                                            <li class="dropdown-header">Woman care</li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="mega-menu-col col-lg-3">
                                                        <ul>
                                                            <li class="dropdown-header">First Aid’s </li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="$">Vivamus in tortor</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a class="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <div class="d-lg-flex menu_banners">
                                                    <div class="col-sm-4">
                                                        <div class="header-banner">
                                                            <img src={require("./assets/images/menu_banner1.jpg")} alt="menu_banner1" />
                                                            <div class="banne_info">
                                                                <h6>10% Off</h6>
                                                                <h4>New Arrival</h4>
                                                                <a href="#">Shop now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="header-banner">
                                                            <img src={require("./assets/images/menu_banner2.jpg")} alt="menu_banner2" />
                                                            <div class="banne_info">
                                                                <h6>15% Off</h6>
                                                                <h4>Men's Fashion</h4>
                                                                <a href="#">Shop now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="header-banner">
                                                            <img src={require("./assets/images/menu_banner3.jpg")} alt="menu_banner3" />
                                                            <div class="banne_info">
                                                                <h6>23% Off</h6>
                                                                <h4>Kids Fashion</h4>
                                                                <a href="#">Shop now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="dropdown">
                                            <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Pathology</a>
                                            {/* work later */}
                                        </li>
                                        <li class="dropdown dropdown-mega-menu">
                                            <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Biomedical</a>
                                            <div class="dropdown-menu">
                                                <ul class="mega-menu d-lg-flex">
                                                    <li class="mega-menu-col col-lg-9">
                                                        <ul class="d-lg-flex">
                                                            <li class="mega-menu-col col-lg-4">
                                                                <ul>
                                                                    <li class="dropdown-header">XYZ</li>
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
                                                                    <li class="dropdown-header">ABC</li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="shop-cart.html">Cart</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="checkout.html">Checkout</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="wishlist.html">Wishlist</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="compare.html">compare</a></li>
                                                                    <li><a class="dropdown-item nav-link nav_item" href="order-completed.html">Order Completed</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="mega-menu-col col-lg-4">
                                                                <ul>
                                                                    <li class="dropdown-header">123</li>
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
                                                                        <img src={require("./assets/images/shop_banner.jpg")} alt="shop_banner" />
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
                                <ul class="navbar-nav attr-nav align-items-center">
                                    <li><a href="javascript:void(0);" class="nav-link search_trigger"><i class="linearicons-magnifier"></i></a>
                                        <div class="search_wrap">
                                            <span class="close-search"><i class="ion-ios-close-empty"></i></span>
                                            <form>
                                                <input type="text" placeholder="Search" class="form-control" id="search_input" />
                                                <button type="submit" class="search_icon"><i class="ion-ios-search-strong"></i></button>
                                            </form>
                                        </div><div class="search_overlay"></div>
                                    </li>
                                    <li class="dropdown cart_dropdown"><a class="nav-link cart_trigger" href="#" data-toggle="dropdown"><i class="linearicons-cart"></i><span class="cart_count">2</span></a>
                                        <div class="cart_box dropdown-menu dropdown-menu-right">
                                            <ul class="cart_list">
                                                {Product.map((product)=>(
                                                   <li>
                                                    <a href="#" class="item_remove"><i class="ion-close"></i></a>
                                                    <a href="#"><img src={require("./assets/images/cart_thamb1.jpg")}  alt="cart_thumb1" />{product.name}</a>
                                                    <span class="cart_quantity"> {product.quantity} x <span class="cart_amount"> <span class="price_symbole">Rs.</span></span>{product.price}</span>
                                                </li> 
                                                ))}
                                                
                                            </ul>
                                            <div class="cart_footer">
                                                <p class="cart_total"><strong>Subtotal:</strong> <span class="cart_price"> <span class="price_symbole">$</span></span>159.00</p>
                                                <p class="cart_buttons"><a href="#" class="btn btn-fill-line view-cart">View Cart</a><a href="#" class="btn btn-fill-out checkout">Checkout</a></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                {/* <!-- END HEADER --> */}

            </div>
        );
    }
}

export default header;