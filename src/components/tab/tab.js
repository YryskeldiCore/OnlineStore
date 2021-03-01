import React, { Component } from 'react';
import TabBar from './tabBar';
import TabBarItem from './tabBarItem';
import './tab.css';
import Pizza1 from './img/pizza1.jpg';
import Pizza2 from './img/pizza2.jpg';
import Pizza3 from './img/pizza3.jpg';

export default class Tab extends Component {

    render(){
        return(
            <>
                <TabBar>
                    <TabBarItem label="Pepperoni">
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam magni doloremque libero qui illo reiciendis nostrum? Omnis, tempora vitae ab dolor libero sequi tempore praesentium labore. Facere, blanditiis ut?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore ullam distinctio quo voluptatem delectus sequi, ipsa excepturi debitis saepe officia illum aspernatur consequatur molestiae velit quis architecto eveniet! Ipsa?</h3>
                    <img src={Pizza1} alt="pizza" className="pizzaimg"/>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis libero dolore sequi excepturi beatae voluptate illum laborum reiciendis, hic temporibus nobis maiores saepe iste repellat dicta assumenda. Tempore, nobis similique?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis libero atque nostrum maxime ut provident consequatur commodi facilis ipsam dolore et sit officia laboriosam sequi, beatae incidunt quae maiores quam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis libero atque nostrum maxime ut provident consequatur commodi facilis ipsam dolore et sit officia laboriosam sequi, beatae incidunt quae maiores quam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis libero atque nostrum maxime ut provident consequatur commodi facilis ipsam dolore et sit officia laboriosam sequi, beatae incidunt quae maiores quam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis libero atque nostrum maxime ut provident consequatur commodi facilis ipsam dolore et sit officia laboriosam sequi, beatae incidunt quae maiores quam?
                        </p>
                    </TabBarItem>
                    <TabBarItem label="Olivia">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis libero dolore sequi excepturi beatae voluptate         illum laborum reiciendis, hic temporibus nobis maiores saepe iste repellat dicta assumenda. Tempore,        nobis       similique?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis libero atque nostrum maxime ut provident consequatur commodi facilis ipsam dolore et sit officia laboriosam sequi, beatae incidunt quae maiores quam?
                        </p>
                        <img src={Pizza2} alt="pizza" className="pizzaimg"/>
                    </TabBarItem>
                    <TabBarItem label="Mangana">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis libero dolore sequi excepturi beatae voluptate illum laborum reiciendis, hic temporibus nobis maiores saepe iste repellat dicta assumenda. Tempore, nobis similique?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis libero atque nostrum maxime ut provident consequatur commodi facilis ipsam dolore et sit officia laboriosam sequi, beatae incidunt quae maiores quam?
                        </p>
                        <img src={Pizza3} alt="pizza" className="pizzaimg"/>
                    </TabBarItem>
                </TabBar>
            </>
        )
    }
}