import React, { Component } from "react";
import TurksCaicosPic from "./TurksCaicos.jpg";


class Turkscaicos extends Component {
    render() {
        return (
            <div>
                <h2>TURKS & CAICOS</h2>
                <img src={TurksCaicosPic} alt="Turks & Caicos" title="Turks & Caicos" width="300px" />
                <p id="source">Image by <a href="https://pixabay.com/users/huggs24-3085689/">huggs24</a> from <a href="https://pixabay.com/">Pixabay</a></p>
                <p id="contentp">The Turks & Caicos Islands, located southeast of the Bahamas,
                    are renowned for their spellbinding white sand beaches, crystal-clear
                    water and an abundance of snorkeling sites. The island of Providenciales
                    draws sun-seekers in droves with the world-famous Grace Bay Beach, which
                    boasts more than 3 miles of picture-perfect shoreline, and the
                    crescent-shaped Taylor Bay Beach, home to shallow waters excellent
                    for families with small children. If island-hopping is on your agenda,
                    check out laid-back Governor's Beach on Grand Turk. After a long day
                    spent lounging on the beach, travelers can retreat to their luxurious
                    digs at one of the destination's top all-inclusive hotels.</p>

                <p id="bottomsource">Source: <a href="https://travel.usnews.com/Turks-Caicos/">US News</a></p>
            </div>
        )
    }
}

export default Turkscaicos;