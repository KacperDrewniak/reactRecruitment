import React from 'react';

const Main = () => 
(<main>
    <h1 class="header">Our Passion</h1>
    <aside>
        <div class="passion">
            <div>
                <img src="/assets/images/icon_development.svg" alt=""/>
                    <h3>Development</h3>
                </div>

                <p>Living in today's metropolitan world of cellular phones, mobile computers</p>
            </div>
            <div class="passion">
                <div>
                    <img src="/assets/images/icon_audyt.svg" alt=""/>
                        <h3>Audyt</h3>
                </div>

                    <p>It is a good idea of think of your PC as an office. It stores files, programs, pictures.</p>
                </div>
                <div class="passion">
                    <div>
                        <img src="/assets/images/icon_consulting.svg" alt=""/>
                            <h3>Consulting</h3>
                </div>
                        <p>Last mont ,my wife, Anne Doe, took me to Las Vegas because she had to go.</p>
                    </div>
        </aside>
    </main>
    )

export default Main