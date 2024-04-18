import React, { Component } from "react";
import FijiPic from "./fiji.jpg";


class Fiji extends Component {
    render() {
        return (
            <div>
                <h2>FIJI</h2>
                <img src={FijiPic} alt="Fiji" title="Fiji" width="300px" />
                <p id="source">Image by <a href="https://pixabay.com/users/evabane-13404809/">EvaBane</a> from <a href="https://pixabay.com/">Pixabay</a></p>
                <p id="contentp">Boasting 333 islands, resplendent resorts, sparkling waters and
                    endless stretches of pristine sand, Fiji is the perfect spot
                    for paradise-seeking beachgoers. Travelers who want to snorkel
                    while on vacation should set their sights on Taveuni's diverse
                    coral reefs. Meanwhile, those pining for the tropical beaches
                    featured in the movie "Cast Away" and multiple seasons of the
                    TV show "Survivor" can catch a ferry from Port Denarau and head
                    directly to one of the 20 islands that make up the Mamanuca Islands.
                    Popular options include Qalito Island, also known as Castaway, Island and Vomo Island.</p>

                <p id="bottomsource">Source: <a href="https://travel.usnews.com/Fiji/">US News</a></p>
            </div>
        )
    }
}

export default Fiji;