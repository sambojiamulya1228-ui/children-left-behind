import React from "react";
import ValuesImage from "../../images/valuesection-img.png"; // change to your image path
import "./style.css";

const ValuesSection = () => {
    return (
        <div className="container values pt-4">
            <div className="row align-items-center g-5">

                {/* LEFT TEXT CONTENT */}
                <div className="col-lg-6">
                    <p className="text-uppercase small mb-2 title ourvalues ">
                        Our Values
                    </p>

                    <h5 className="fw-bold lh-base mb-3 ">
                        The values we embrace that truly <br /> reflect our beliefs.
                    </h5>

                    <p className="text-muted">
                        Our values define the heart and spirit of Children Left Behind.
                        They remind us why we serve and inspire us to continue creating
                        a world where no child is forgotten.
                    </p>

                    {/* Image */}
                  
                </div>

                {/* RIGHT COLUMN – LIST OF VALUES */}
                <div className="col-lg-12 right-values">
<div className="row">
<div className="col-md-4">
                    {/* VALUE ITEM */}
                    <div className="d-flex mb-2">
                        <div style={{ color: "#832AD1" }} className="value-number me-3">1</div>
                        <div>
                            <h5 className="fw-bold mb-1">Compassion</h5>
                            <p className="text-muted mb-0">
                                We lead with empathy and kindness, understanding that behind every challenge
                                lies a child's dream. Compassion drives our purpose and fuels our mission
                                to restore hope.
                            </p>
                        </div>
                    </div>
</div>
<div className="col-md-4">
                    {/* VALUE ITEM */}
                    <div className="d-flex mb-2">
                        <div style={{ color: "#832AD1" }} className="value-number me-3">2</div>
                        <div>
                            <h5 className="fw-bold mb-1">Empowerment</h5>
                            <p className="text-muted mb-0">
                                We believe in giving children and communities the tools to shape their own
                                futures. Through education, mentoring, and capacity-building, we help them rise
                                above challenges and lead independent, meaningful lives.
                            </p>
                        </div>
                    </div>
</div>
<div className="col-md-4">
                    {/* VALUE ITEM */}
                    <div className="d-flex mb-2">
                        <div style={{ color: "#832AD1" }} className="value-number me-3">3</div>
                        <div>
                            <h5 className="fw-bold mb-1">Inclusivity</h5>
                            <p className="text-muted mb-0">
                                We embrace diversity in all its forms. Our programs ensure that children from
                                every background—including those with disabilities, rural communities, and
                                those in poverty—receive equal care, attention, and opportunity.
                            </p>
                        </div>
                    </div>
</div>
<div className="col-md-4">
                    {/* VALUE ITEM */}
                    <div className="d-flex mb-4">
                        <div style={{ color: "#832AD1" }} className="value-number me-3">4</div>
                        <div>
                            <h5 className="fw-bold mb-1">Collaboration</h5>
                            <p className="text-muted mb-0">
                                We value partnerships built on trust, respect, and shared purpose. Working
                                together with communities and partners amplifies our impact and ensures
                                sustainability.
                            </p>
                        </div>
                    </div>
</div><div className="col-md-4">
                    {/* VALUE ITEM */}
                    <div className="d-flex mb-2">
                        <div style={{ color: "#832AD1" }} className="value-number me-3">
                            5
                        </div>

                        <div>
                            <h5 className="fw-bold mb-1">Faith in Humanity</h5>
                            <p className="text-muted mb-0">
                                We believe compassion, love, and unity can heal what divides us. Every child
                                we reach strengthens our faith in humanity’s power to create a better world.
                            </p>
                        </div>
                    </div>
</div>
</div>
                </div>
            </div>


        </div>
    );
};

export default ValuesSection;
