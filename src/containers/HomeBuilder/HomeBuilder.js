import React from 'react';
import './HomeBuilder.scss';
import DisBurger from '../../assets/img/burger_dis.png'

const HomeBuilder = (props) => {
    return (
        <div className="home_page_builder">
            <div className="add_tile">
                <div className="main_content">
                    <p className="title">Healthy Tasty Burger</p>
                    <p className="sub_title">For Healthy Life</p>
                </div>
                <div className="des">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </div>
            </div>

            <div className="home_discount_tile">
                <div className="header">
                    Discount coupon
                </div>
                <div className="discount_content">
                    <div className="img">
                        <img src={DisBurger}/>
                    </div>
                    <div className="title">
                        <h3>Chicken Deluxe</h3>
                    </div>
                    <div className="price">
                        <p className="old_price">$7.90</p>
                        <h3 className="disc_price">$7.89</h3>
                    </div>
                    <div className="exp_date">
                        <div>30 days</div>
                    </div>
                </div>
            </div>

            <div className="location_tile">
                <div className="lat">
                    34.3627183
                </div>
                <div className="long">
                    73.3815753
                </div>
            </div>
        </div>
    )
};

export default HomeBuilder;