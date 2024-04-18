import React, { Component } from "react";
import BahamasPic from "./bahamas.jpg";


class Bahamas extends Component {
    render() {
        return (
            <div>
                <h2>BAHAMAS</h2>
                <img src={BahamasPic} alt="Bahamas" title="Bahamas" width="300px" />
                <p id="source">Image by <a href="https://pixabay.com/users/buckeyebeth-3459333/">buckeyebeth</a> from <a href="https://pixabay.com/">Pixabay</a></p>
                <p id="contentp">With countless beaches to choose from on 700 islands, finding the perfect sandy
                    spot in the Bahamas is as easy as it gets. From massive resorts like Atlantis
                    Paradise Island to privately owned islands, the variety of beaches here run the
                    gamut. Pink Sand Beach on Harbour Island will wow you with its rosy hue, while
                    The Exumas will delight you with their wild swimming pigs. If you're after
                    underwater caves and a stretch of sand featured in the "Pirates of the Caribbean"
                    films, look no further than Gold Rock Beach in Lucayan National Park on Grand Bahama Island.</p>

                <p id="bottomsource">Source: <a href="https://travel.usnews.com/Bahamas/">US News</a></p>
            </div>
        )
    }
}

export default Bahamas;