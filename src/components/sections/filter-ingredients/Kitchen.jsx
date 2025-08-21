function Kitchen(){
    return(
        <div className="illustration">
            <div className="kitchen-cont">
                <div className="fridge-side">
                    <div className="lamp">
                        <div className="lamp-cord"></div>
                        <div className="lamp-case-shadow"></div>
                        <div className="lamp-case">
                            <div className="lamp-case-base">
                                <div className="lamp-bulb"></div>
                            </div>
                        </div>
                    </div>
                    <div className="fridge-cont">
                        <div className="back"></div>
                        <div className="freezer"></div>
                        <div className="fridge"></div>
                    </div>
                </div>
                <div className="kitchen">
                    <div className="kitchen-counter">
                        <div className="kitchen-counter-sink">
                            <div className='kitchen-counter-sink-cont'>
                                <svg width="60" height="90" viewBox="0 0 68 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 123L1 37.462C1 25.7851 8.32488 15.363 19.3115 11.4079V11.4079C35.7225 5.4999 53.4428 16.0525 56.0668 33.2961L58 46" stroke="#1C11EE" stroke-width="2"/>
                                    <rect x="50" y="40" width="15" height="15" rx="4" fill="#1C11EE"/>
                                </svg>
                            </div>
                            <span className="kitchen-counter-sink-base"></span>
                        </div>
                        <div className="kitchen-counter-cabinet cabinet-left"></div>
                        <div className="kitchen-counter-cabinet cabinet-right"></div>
                        <div className="kitchen-counter-oven">
                            <div className="kitchen-counter-oven-top">
                                <span className="button"></span>
                                <span className="screen"></span>
                                <span className="button"></span>
                            </div>
                            <div className="kitchen-counter-oven-door">
                                <span className="handle"></span>
                                <div className="glass"></div>
                            </div>
                        </div>
                        <div className="kitchen-counter-drawers">
                            <span className="drawer"></span>
                            <span className="drawer"></span>
                            <span className="drawer"></span>
                            <span className="drawer"></span>
                        </div>
                        <div className="kitchen-counter-second-cabinet"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kitchen