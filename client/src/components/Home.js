import React from "react";
import "../App.css";

const Home = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
    });
    return (
        <div className="container w-75 mt-5">
            <div>
                <h1></h1>
                <h2></h2>
                <h3>
                    <b>What is it?</b>
                </h3>
                <p>
                    Wholesome Food is a waste food management Web application
                    that allows users to browse unsold food items in nearby(in
                    1.5 Miles of radius) shops and restaurants. The users can
                    purchase them at a highly discounted price, avoiding food
                    waste.
                </p>
                <h3>
                    <b>Why it is necessary?</b>
                </h3>
                <p>
                    <b>Reducing food waste can save or make money</b>
                    <br />
                </p>
                <ul>
                    <li>
                        In some areas, trash pickup is less expensive if volume
                        is reduced by keeping wasted food out of the garbage. In
                        addition, some haulers lower fees if wasted food is
                        separated from the trash and sent to a compost facility
                        instead of the landfill.
                    </li>
                    <li>
                        On average, households could save about $370 per person
                        annually. Imagine what a family of four could do with an
                        extra $1,500 each year.
                    </li>
                </ul>
                <p>
                    <b>Resources could be conserved for more productive uses</b>
                    <br />
                </p>
                <ul>
                    <li>
                        When food is wasted, so too is the land, water, labor,
                        energy and other inputs that are used in producing,
                        processing, transporting, preparing, storing, and
                        disposing of the discarded food.
                    </li>
                </ul>
                <p>
                    <b>
                        Greenhouse gases generated from food rotting in
                        landfills could be reduced to help mitigate climate
                        change
                    </b>
                    <br />
                </p>
                <ul>
                    <li>
                        According the
                        <a href="https://www.epa.gov/sustainable-management-food/sustainable-management-food-basics">
                            U.S Environmental Protection Agency,
                        </a>{" "}
                        in the United States, food is the single largest
                        category of material placed in municipal landfills,
                        where it emits methane, a powerful greenhouse gas.
                        Municipal solid waste landfills are the third-largest
                        source of human-related methane emissions in the United
                        States, accounting for approximately 14.1 percent of
                        these emissions in 2017.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
