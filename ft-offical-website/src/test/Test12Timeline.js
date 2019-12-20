import React,{Component} from 'react';
import './Test12Timeline.css';

class Timelinenew extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  widthOfWin: window.innerWidth,
		  heightOfWin: window.innerHeight,
		  heightToTop: window.scrollY,
		  opacityVar: 1,
		  moveRate: 30,

		  ts1height: 0,
		  ts1top: 0,
		  ts1left: 0,
		  ts1bottom: 0,
		  ts1right: 0,
		  ts1heightp: 100,

		  ts2height: 0,
		  ts2top: 0,
		  ts2left: 0,
		  ts2bottom: 0,
		  ts2right: 0,
		  ts2heightp: 100,

		  ts3height: 0,
		  ts3top: 0,
		  ts3left: 0,
		  ts3bottom: 0,
		  ts3right: 0,
		  ts3heightp: 100,

		  ts4height: 0,
		  ts4top: 0,
		  ts4left: 0,
		  ts4bottom: 0,
		  ts4right: 0,
		  ts4heightp: 100,

		  ts5height: 0,
		  ts5top: 0,
		  ts5left: 0,
		  ts5bottom: 0,
		  ts5right: 0,
		  ts5heightp: 100,

		  ts6height: 0,
		  ts6top: 0,
		  ts6left: 0,
		  ts6bottom: 0,
		  ts6right: 0,
		  ts6heightp: 100,

		  ts7height: 0,
		  ts7top: 0,
		  ts7left: 0,
		  ts7bottom: 0,
		  ts7right: 0,
		  ts7heightp: 100,
    };

		// it has some problem here!
		// this.getInnerInfo = this.refs.inner;
		// this.getInnerValue = this.getInnerInfo.value;
		// this.getInnerRect = this.getInnerInfo.getBoundingClientRect();

		this.handleScroll = this.handleScroll.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	  }
	
	  componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions.bind(this));
		window.addEventListener('scroll', this.handleScroll);
	  }
	
	  componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
		window.removeEventListener('scroll', this.handleScroll);
	  }
	
	  handleScroll(event) {
		this.setState({heightToTop: window.scrollY});

		// var getInnerInfo = this.refs.inner;
		// var getInnerRect = getInnerInfo.getBoundingClientRect();
		// this.setState({
		// 	tstop: getInnerRect.top,
		// 	tsheight: getInnerRect.height,
		// 	tsbottom: getInnerRect.bottom,
		// });
		// console.log("rect: ",this.getInnerRect);

    var getInnerInfo = this.refs.inner1;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts1top: getInnerRect.top,
			ts1bottom: getInnerRect.bottom,
		});
		console.log("ts1: ",this.state.ts1top, this.state.ts1bottom);

    var getInnerInfo = this.refs.inner2;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts2top: getInnerRect.top,
			ts2bottom: getInnerRect.bottom,
		});
		console.log("ts2: ",this.state.ts2top, this.state.ts2bottom);

    var getInnerInfo = this.refs.inner3;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts3top: getInnerRect.top,
			ts3bottom: getInnerRect.bottom,
		});
		console.log("ts3: ",this.state.ts3top, this.state.ts3bottom);

    var getInnerInfo = this.refs.inner4;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts4top: getInnerRect.top,
			ts4bottom: getInnerRect.bottom,
		});
		console.log("ts4: ",this.state.ts4top, this.state.ts4bottom);

    var getInnerInfo = this.refs.inner5;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts5top: getInnerRect.top,
			ts5bottom: getInnerRect.bottom,
		});
		console.log("ts5: ",this.state.ts5top, this.state.ts5bottom);

    var getInnerInfo = this.refs.inner6;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts6top: getInnerRect.top,
			ts6bottom: getInnerRect.bottom,
		});
		console.log("ts6: ",this.state.ts6top, this.state.ts6bottom);

    var getInnerInfo = this.refs.inner7;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts7top: getInnerRect.top,
			ts7bottom: getInnerRect.bottom,
		});
		console.log("ts7: ",this.state.ts7top, this.state.ts7bottom);

	  }  
	  
	  updateWindowDimensions() {
		this.setState({ widthOfWin: window.innerWidth, heightofWin: window.innerHeight });
	  }
	

render() {
	
	// it doesn't work here!!!
	// var getInnerInfo = this.refs.inner;
	// var getInnerValue = getInnerInfo.value;
	// var getInnerRect = getInnerInfo.getBoundingClientRect();

	let classactive = [];
	let difHeight = this.state.heightToTop - this.state.ts1height; 
 
	if	(difHeight > 0 && this.state.heightToTop >= this.state.ts1top) {
		classactive[0] = "ContentComponent active";
	} else {
		classactive[0] = "ContentComponent";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.ts2top) {
		classactive[1] = "ContentComponent active";
	} else {
		classactive[1] = "ContentComponent";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.ts3top) {
		classactive[2] = "ContentComponent active";
	} else {
		classactive[2] = "ContentComponent";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.ts4top) {
		classactive[3] = "ContentComponent active";
	} else {
		classactive[3] = "ContentComponent";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.ts5top) {
		classactive[4] = "ContentComponent active";
	} else {
		classactive[4] = "ContentComponent";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.ts6top) {
		classactive[5] = "ContentComponent active";
	} else {
		classactive[5] = "ContentComponent";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.ts7top) {
		classactive[6] = "ContentComponent active";
	} else {
		classactive[6] = "ContentComponent";
	}

    return (
        <>
            <div className="ft-time-steps-bg">
              <div className="ft-time-steps-content">

        <div ref="inner" className="TimelineComponent">

            <div ref="inner1" class={classactive[0]}>
                <div className="YearComponent">
                  <div className="YearComponentItem">
                      2014 - Nov
                  </div>
                </div>
                <div className="BodyComponent body-component">
                  <p className="BodyComponentTitle">
                    Fantuan was founded
                  </p>
                  <div className="DescriptionComponent">
                    <span className="DescriptionComponentText">
                        Fantuan was founded in Vancouver, Canada in 2014 and it is a one stop service platform provides food delivery, reviews,  
                    </span>
                    <span className="DescriptionComponentTextOptional">
                        I'm an amazing optional text
                    </span>
                  </div>
                </div>
            </div>
  
            <div ref="inner2" class={classactive[1]}>
                <div className="YearComponent">
                    <div className="YearComponentItem">
                        2016 - Sep
                    </div>
                </div>
                <div className="BodyComponent body-component">
                  <p className="BodyComponentTitle">
                    Expanded to Toronto
                  </p>
                  <div className="DescriptionComponent">
                    <span className="DescriptionComponentText">
                        Life can be complicated but ordering food doesn't have to be.
                        Life can be complicated but ordering food doesn't have to be.
                        Life can be complicated but ordering food doesn't have to be.
                        Life can be complicated but ordering food doesn't have to be.
                        Life can be complicated but ordering food doesn't have to be.
                        Life can be complicated but ordering food doesn't have to be.
                    </span>
                  </div>
                </div>
            </div>
  
            <div ref="inner3" class={classactive[2]}>
                <div className="YearComponent">
                    <div className="YearComponentItem">
                        2017 - Apr
                    </div>
                </div>
                <div className="BodyComponent body-component">
                  <p className="BodyComponentTitle">
                    Launched self-pickup service
                  </p>
                  <div className="DescriptionComponent">
                    <span className="DescriptionComponentText">
                        Fantuan was founded in Vancouver, Canada in 2014 and it is a one stop service platform provides food delivery, reviews,  
                    </span>
                    <span className="DescriptionComponentTextOptional">
                        I'm an amazing optional text
                    </span>
                  </div>
                </div>
            </div>
  
            <div ref="inner4" class={classactive[3]}>
                <div className="YearComponent">
                    <div className="YearComponentItem">
                        2018 - Sep
                    </div>
                </div>
                <div className="BodyComponent body-component">
                  <p className="BodyComponentTitle">
                    Launched Fantuan Reviews
                  </p>
                  <div className="DescriptionComponent">
                    <span className="DescriptionComponentText">
                      Life can be complicated but ordering food doesn't have to be.
                    </span>
                    <span className="DescriptionComponentTextOptional">
                        I'm an amazing optional text
                    </span>
                  </div>
                </div>
            </div>

            <div ref="inner5" class={classactive[4]}>
                <div className="YearComponent">
                    <div className="YearComponentItem">
                        2018 - Dec
                    </div>
                </div>
                <div className="BodyComponent body-component">
                  <p className="BodyComponentTitle">
                    Raised seed round
                  </p>
                  <div className="DescriptionComponent">
                    <span className="DescriptionComponentText">
                        Fantuan was founded in Vancouver.
                    </span>
                  </div>
                </div>
            </div>

            <div ref="inner6" class={classactive[5]}>
                <div className="YearComponent">
                    <div className="YearComponentItem">
                        2019
                    </div>
                </div>
                <div className="BodyComponent body-component">
                  <p className="BodyComponentTitle">
                    Expanded to Seattle
                  </p>
                </div>
            </div>


          <div ref="inner7" class={classactive[6]}>
            <div className="YearComponent">
                <div className="YearComponentItem">
                    &nbsp;
                </div>
            </div>
            <div className="BodyComponent body-component">
                <p className="BodyComponentTitle">
                Expanded to Los Angeles & New York City
                </p>
            </div>
          </div>

          {/* <div class={classactive[7]}>
            <div className="YearComponent">
                <div className="YearComponentItem">
                    &nbsp;
                </div>
            </div>
            <div className="BodyComponent body-component">
                <p className="BodyComponentTitle">
                Launched English app
                </p>
            </div>
          </div> */}


            </div>

			</div>
		</div>
        </>
      )
    };
  }
  
  export default Timelinenew;
  