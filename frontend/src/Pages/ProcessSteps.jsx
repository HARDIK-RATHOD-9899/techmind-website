import React from 'react';

const ProcessSteps = () => {
    return (
        <div className="container" id="mainn">
            <div className="heading">
                <h2>Our <span>Difference</span></h2>
                <p>We don't just start developing. As solution partners we research, analyze, plan, document your project requirements and then execute it to ensure Results.</p>
            </div>

            <div className="background">
                <img 
                    src="https://media-hosting.imagekit.io//6502e192f36947a2/Group%2013%20(2).png?Expires=1735560903&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MLq8JsbtroVxQZ3m5cqHXwFGxnIP9TaNlUcYfmFDTddGODS9V5KyGih46Y51QLXBAs0h4Z5u4H42UuAzPROmuTp-zbIh4Zhx7UrQGhUdbR7KQ~lnrTctFld2ZW4TRDuzIfl7yJjlAhuSI4r7T3-HYdRWTuWrmrU0ipsPSTvk-r7avGLv3SvczShmpwSOzuVLdtPtoGgqh-cj7W7hSLrhN2jvgCrZuJl7xWSAs-Jk9NE4eY0HSY5jDFJErn1oIqDnsSae4Z0tE~NRM4zE81MGr9lLESsix6UtvuyX5mggE8xKS53vPBDdaeeCLKZwUisUqVxvy5AqhJHKMgX3KAdlNw__" 
                    alt="Process Steps Background" 
                />
                <div className="steps">
                    <div className="step1">
                        <div className="icon">
                            {/* 📋 */}
                            <i class="fa-solid fa-clipboard"></i>
                            </div>
                        <div className="title">RESEARCH</div>
                    </div>
                    <div className="step2">
                        <div className="icon">
                            {/* 🔍 */}
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        <div className="title">ANALYZE</div>
                    </div>
                    <div className="step3">
                        <div className="icon">
                            {/* 📈 */}
                            <i class="fa-solid fa-chart-line"></i>
                            </div>
                        <div className="title">PLAN</div>
                    </div>
                    <div className="step4">
                        <div className="icon" >
                            {/* <p id='ico'> */}
                                {/* 📄 */}
                                <i class="fa-solid fa-file"></i>
                                {/* </p> */}
                                </div>
                        <div className="title">DOCUMENT</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSteps;
