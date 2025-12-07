import React from "react";
import Team1 from "../../images/team/team-1.png";
import Team2 from "../../images/team/team-2.png";
import Team3 from "../../images/team/team-3.png";
import "./style.css";

const TeamSection = () => {
    return (
        <div className="container py-5 leader">
            {/* Section Title */}
            <div className="text-center mb-5">
                <p className="text-uppercase small fw-bold whoweare">Who We Are</p>
                <h2 className="fw-bold">Entrusted with Stewardship</h2>
            </div>

            {/* Card Container */}
            <div style={{backgroundColor:'#F8F0FF',   borderRadius: "8px",}}  className=" p-4 p-md-5 rounded-4 shadow-sm">

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
                    <p className="text-muted">
                      It is Oswald’s desire to help underprivileged and orphaned children to have the same opportunities he had. He co-founded Children Left Behind to partner and work with his childhood friend and classmate Frank Viswanath to provide an environment where children’s educational, medical, and living needs can be provided for.
                    </p>
                    <p className="text-muted">
                      He passionately believes every child should have the chance to fulfill their potential. It’s simply not right that children suffer neglect or abuse, or are held back because of disadvantage.
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
                    <p className="text-muted">
                      As International Director, Frank’s duties are to oversee both U.S. and overseas operations, which include fund raising and program development. Frank has been helping children and families affected by hunger, disabilities, and homelessness for over 20 years and has made this a priority for the organization.
                    </p>
                    <p className="text-muted">
                      Frank has pioneered several projects over the years and has produced remarkable results. Frank travels internationally and raises funds to support children in desperate need.
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
                    <p className="text-muted">
                      Amy initiates and organizes meetings and events to help raise funding and project support. She also directs fundraising, communications and policy. 
                    </p>
                    <p className="text-muted">
                      Amy also helps coordinate volunteers and interns to travel to India, providing a life changing experience in serving and helping children in need.
                    </p>
                </div>

            </div>

            {/* Volunteer Button Section */}
            {/* <div style={{backgroundColor:'#F8F0FF', borderRadius: "6px", height:'176px'}} className="text-center mt-5">
                <h2 className="fw-semibold mb-4 sponsorcars">
                    Want to be a part of our Volunteer / Sponsor Program?
                </h2>
                <p className="text-muted mb-3">
                    We're always excited to welcome people who want to help bring positive
                    change to children in need.
                </p>
               <button
  style={{
    width: "792px",
    height: "36px",
    borderRadius: "8px",
    gap: "6px",
    border: "1px solid rgb(104, 23, 174)",
    backgroundColor: "#F8F0FF"
  }}
  className="px-4 py-2"
>
  Join Hands
</button>

            </div> */}

            <div
  style={{
    backgroundColor: "#F7F5FA",
    borderRadius: "6px",
    padding: "20px",
  }}
  className="text-center mt-5 col-md-8 mx-auto"
>
  <h3 className="fw-semibold mb-4 sponsorcars">
    Want to be a part of our Volunteer / Sponsor Program?
  </h3>

  <p className="text-muted mb-3">
    We're always excited to welcome people who want to help bring positive
    change to children in need.
  </p>

  <button
    style={{
      width: "100%",          // FULL responsive width
      maxWidth: "792px",      // Limit max width on large screens
      height: "36px",
      borderRadius: "8px",
      border: "1px solid rgb(104, 23, 174)",
      backgroundColor: "#F8F0FF",
    }}
    className="px-4 py-2"
  >
    Join Hands
  </button>
</div>


        </div>
    );
};

export default TeamSection;
