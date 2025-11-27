import React from "react";
import Team1 from "../../images/team/team-1.jpg";
import Team2 from "../../images/team/team-2.jpg";
import Team3 from "../../images/team/team-3.jpg";
import "./style.css";

const TeamSection = () => {
    return (
        <div className="container py-5 leader">
            {/* Section Title */}
            <div className="text-center mb-5">
                <p className="text-uppercase small fw-bold purplee">Who We Are</p>
                <h2 className="fw-bold">Entrusted with Stewardship</h2>
            </div>

            {/* Card Container */}
            <div className="bg-light p-4 p-md-5 rounded-4 shadow-sm">

                {/* Member 1 */}
                <div className="text-center mb-5">
                    <img
                        src={Team1}
                        alt="Oswald Dhanaraj"
                        className="rounded-circle mb-3"
                        width="120"
                        height="120"
                    />
                    <h4 className="fw-bold mb-1">Oswald Dhanaraj</h4>
                    <p className="purplee fw-semibold">President & CEO</p>
                    <p className="text-muted">
                        Growing up in India, Oswald saw firsthand the struggles that children face.
                        After moving to the United States, he dedicated his life to supporting
                        underserved children and co-founded Children Left Behind to ensure every
                        child has the opportunity to thrive.
                    </p>
                </div>

                <hr />

                {/* Member 2 */}
                <div className="text-center my-5">
                    <img
                        src={Team2}
                        alt="Frank Viswanath"
                        className="rounded-circle mb-3"
                        width="120"
                        height="120"
                    />
                    <h4 className="fw-bold mb-1">Frank Viswanath</h4>
                    <p className="purplee fw-semibold">International Director</p>
                    <p className="text-muted">
                        Frank is committed to helping children with disabilities and impoverished
                        families. With years of international service, he leads missions to provide
                        food, education, shelter, and medical care for vulnerable children.
                    </p>
                </div>

                <hr />

                {/* Member 3 */}
                <div className="text-center my-5">
                    <img
                        src={Team3}
                        alt="Amy Dempsey"
                        className="rounded-circle mb-3"
                        width="120"
                        height="120"
                    />
                    <h4 className="fw-bold mb-1">Amy Dempsey</h4>
                    <p className="purplee fw-semibold">Executive Director</p>
                    <p className="text-muted">
                        Amy is a registered nurse with a passion for child welfare. She supports
                        Children Left Behind by organizing medical care, fundraising programs, and
                        outreach initiatives. Her work helps children receive essential support
                        and love.
                    </p>
                </div>

            </div>

            {/* Volunteer Button Section */}
            <div className="text-center mt-5">
                <p className="fw-semibold mb-2">
                    Want to be a part of our Volunteer / Sponsor Program?
                </p>
                <p className="text-muted mb-3">
                    We're always excited to welcome people who want to help bring positive
                    change to children in need.
                </p>
                <button className="btn  rounded-pill px-4 py-2">
                    Join Hands
                </button>
            </div>

        </div>
    );
};

export default TeamSection;
