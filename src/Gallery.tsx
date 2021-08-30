import "./Gallery.css";

export default function Gallery() {
    return (
        <div className="Gallery">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top"><p>CATLAS</p></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#services">학과공지</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">동아리</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">갤러리</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">게시판</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <map >
                                <div className="col-sm-6 col-lg-4 mb-4">
                                    <div className="candidate-list candidate-grid">
                                        <div className="candidate-list-image">
                                            <img className="img-fluid" src="image1.jpg" alt=""/>
                                        </div>
                                        <div className="candidate-list-details">
                                            <div className="candidate-list-info">
                                                <div className="candidate-list-title">
                                                    <h5><a href="candidate-detail.html">MT 사진 1</a></h5>
                                                </div>
                                                <div className="candidate-list-option">
                                                    <ul className="list-unstyled">
                                                        <li><i className="fas fa-filter pr-1"></i>2018 CS</li>
                                                        <li><i className="fas fa-map-marker-alt pr-1"></i>Jinju-si, Gyeongsangnam-do, Republic of Korea</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="candidate-list-favourite-time">
                                                <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                                                <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>1M ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="col-sm-6 col-lg-4 mb-4">
                                <div className="candidate-list candidate-grid">
                                    <div className="candidate-list-image">
                                        <img className="img-fluid" src="image2.jpg" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                            <div className="candidate-list-title">
                                                <h5><a href="candidate-detail.html">MT 사진 2</a></h5>
                                            </div>
                                            <div className="candidate-list-option">
                                                <ul className="list-unstyled">
                                                    <li><i className="fas fa-filter pr-1"></i>2018 CS</li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Jinju-si, Gyeongsangnam-do, Republic of Korea</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="candidate-list-favourite-time">
                                            <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                                            <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>3M ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-4">
                                <div className="candidate-list candidate-grid">
                                    <div className="candidate-list-image">
                                        <img className="img-fluid" src="image3.jpg" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                            <div className="candidate-list-title">
                                                <h5><a href="candidate-detail.html">MT 사진 3</a></h5>
                                            </div>
                                            <div className="candidate-list-option">
                                                <ul className="list-unstyled">
                                                    <li><i className="fas fa-filter pr-1"></i>2018 CS</li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Jinju-si, Gyeongsangnam-do, Republic of Korea</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="candidate-list-favourite-time">
                                            <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                                            <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>3D ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-4">
                                <div className="candidate-list candidate-grid">
                                    <div className="candidate-list-image">
                                        <img className="img-fluid" src="image2.jpg" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                            <div className="candidate-list-title">
                                                <h5><a href="candidate-detail.html">MT 사진 4</a></h5>
                                            </div>
                                            <div className="candidate-list-option">
                                                <ul className="list-unstyled">
                                                    <li><i className="fas fa-filter pr-1"></i>2018 CS</li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Jinju-si, Gyeongsangnam-do, Republic of Korea</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="candidate-list-favourite-time">
                                            <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                                            <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>6D ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-4">
                                <div className="candidate-list candidate-grid">
                                    <div className="candidate-list-image">
                                        <img className="img-fluid" src="image3.jpg" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                            <div className="candidate-list-title">
                                                <h5><a href="candidate-detail.html">MT 사진 5</a></h5>
                                            </div>
                                            <div className="candidate-list-option">
                                                <ul className="list-unstyled">
                                                    <li><i className="fas fa-filter pr-1"></i>2018 CS</li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Jinju-si, Gyeongsangnam-do, Republic of Korea</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="candidate-list-favourite-time">
                                            <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                                            <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>2D ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-4">
                                <div className="candidate-list candidate-grid">
                                    <div className="candidate-list-image">
                                        <img className="img-fluid" src="image1.jpg" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                            <div className="candidate-list-title">
                                                <h5><a href="candidate-detail.html">MT 사진 6</a></h5>
                                            </div>
                                            <div className="candidate-list-option">
                                                <ul className="list-unstyled">
                                                    <li><i className="fas fa-filter pr-1"></i>2018 CS</li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Jinju-si, Gyeongsangnam-do, Republic of Korea</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="candidate-list-favourite-time">
                                            <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                                            <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>3W ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-4">
                                <div className="candidate-list candidate-grid">
                                    <div className="candidate-list-image">
                                        <img className="img-fluid" src="image3.jpg" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                            <div className="candidate-list-title">
                                                <h5><a href="candidate-detail.html">MT 사진 7</a></h5>
                                            </div>
                                            <div className="candidate-list-option">
                                                <ul className="list-unstyled">
                                                    <li><i className="fas fa-filter pr-1"></i>2018 CS</li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Jinju-si, Gyeongsangnam-do, Republic of Korea</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="candidate-list-favourite-time">
                                            <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                                            <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>1H ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-4">
                                <div className="candidate-list candidate-grid">
                                    <div className="candidate-list-image">
                                        <img className="img-fluid" src="image1.jpg" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                            <div className="candidate-list-title">
                                                <h5><a href="candidate-detail.html">MT 사진 8</a></h5>
                                            </div>
                                            <div className="candidate-list-option">
                                                <ul className="list-unstyled">
                                                    <li><i className="fas fa-filter pr-1"></i>2018 CS</li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Jinju-si, Gyeongsangnam-do, Republic of Korea</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="candidate-list-favourite-time">
                                            <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                                            <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>3M ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-4 mb-md-0">
                                <div className="candidate-list candidate-grid">
                                    <div className="candidate-list-image">
                                        <img className="img-fluid" src="image2.jpg" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                            <div className="candidate-list-title">
                                                <h5><a href="candidate-detail.html">MT 사진 9</a></h5>
                                            </div>
                                            <div className="candidate-list-option">
                                                <ul className="list-unstyled">
                                                    <li><i className="fas fa-filter pr-1"></i>2018 CS</li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Jinju-si, Gyeongsangnam-do, Republic of Korea</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="candidate-list-favourite-time">
                                            <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                                            <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>6D ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center mt-4 mt-sm-5">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item disabled"> <span className="page-link">Prev</span> </li>
                                    <li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span className="sr-only">(current)</span></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">25</a></li>
                                    <li className="page-item"> <a className="page-link" href="#">Next</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}