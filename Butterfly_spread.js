import React from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';

      class Butterfly_spread extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      option: 'put',
      chartData:{},
        K1: 0,
        K2: 0,
        K3: 0,
        C1: 0,
        C2: 0,
        C3: 0,
        P:  0
    }
    this.profit = this.profit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //componentWillMount(){
    //this.getChartData();
  //}

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: [Number(this.state.K1)-1, Number(this.state.K1) , (Number(this.state.K1)+Number(this.state.K2))/2,
          Number(this.state.K2),
          (Number(this.state.K2)+Number(this.state.K3))/2,
          Number(this.state.K3),
          Number(this.state.K3)+1  
        ],
        datasets:[
          {
            label:'Profit',
            data:[
              this.profit(Number(this.state.K1)-1),
              this.profit(Number(this.state.K1)),
              this.profit((Number(this.state.K1)+Number(this.state.K2))/2),
              this.profit(Number(this.state.K2)),
              this.profit((Number(this.state.K2)+Number(this.state.K3))/2),
              this.profit(Number(this.state.K3)),
              this.profit(Number(this.state.K3)+1)
            ],
            backgroundColor:[
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
  profit(c){
        console.log(c);
        if(c <= this.state.K1){
            this.setState({P : Number(this.state.C1)+Number(this.state.C3)-(2*Number(this.state.C2))});
            return (Number(this.state.C1)+Number(this.state.C3)-(2*Number(this.state.C2)));
        } 
       else if( (this.state.K1  < c && c <= this.state.K2))
            {
                const name=c-Number(this.state.K1);
                const p2=Number(this.state.C1)+Number(this.state.C3)-2*Number(this.state.C2)+name;
                //console.log(p2);
                this.setState({P : p2});
                return p2;
            }
        
        else if( (this.state.K2  < c && c <= this.state.K3))
            {
                const name=c-Number(this.state.K1) -  2*(c-Number(this.state.K2)) ;
                const p3=Number(this.state.C1)+Number(this.state.C3)-(2*Number(this.state.C2))+name;
                //console.log(p3);
                this.setState({P : p3});
                return p3;
            }
       
       else if( ( c > this.state.K3))
            {
                const name=c-Number(this.state.K1) + c -Number(this.state.K3) -  2*(c -Number(this.state.K2)) ;
                const p4=Number(this.state.C1)+Number(this.state.C3)-(2*Number(this.state.C2))+name;

                //console.log(p4);
                this.setState({P : p4});
                return p4;
                
            }
  }

  handleChange = event => {
     this.setState({
        [event.target.name]: event.target.value
     });
}
 
  handleSubmit(event) {
      this.profit();
      this.getChartData();
      //console.log(this.state.P);
    event.preventDefault();
  }

  render() {
    return (
        <div className="content">
        <h1>Butterfly Spread</h1>
      
       
       <div className="infoitem">
        <ul>
        <li>Investor can create this with both put and call type options.Investor will use this when he thinks the strike price will be in between any certain range.</li>
        
        <li>Investor will buy options at K1 and K3 strike price and will sell 2 call options at strike price K2.</li>
        
        <li>When the strike price will be less than K1 none of the options will be executed.</li>
        
        <li>When the strike price will be in between K1 and K2 , the option with strike price K1 will be executed.</li>
        
        <li>When the strike price will be in between K2 and K3 , the option with strike price K1 and K2 will be executed.</li>
        
        <li>when the strike price will be graeter than K3 , all the option will be executed.</li>
        </ul>
        </div>
        <form onSubmit={this.handleSubmit}>
        <div className="row">
            <div className="col-25">
              <label> K1:</label>
            </div>
            <div className="col-75">
              <input type="number" name="K1" value={this.state.K1} onChange={this.handleChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label> K2:</label>
            </div>
            <div className="col-75">
              <input type="number" name="K2" value={this.state.K2} onChange={this.handleChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label> K3:</label>
            </div>
            <div className="col-75">
              <input type="number" name="K3" value={this.state.K3} onChange={this.handleChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>option value at K1:</label>
            </div>
            <div className="col-75">
              <input type="number" name="C1" value={this.state.C1} onChange={this.handleChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>option value at K2:</label>
            </div>
            <div className="col-75">
              <input type="number" name="C2" value={this.state.C2} onChange={this.handleChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>option value at K3:</label>
            </div>
            <div className="col-75">
              <input type="number" name="C3" value={this.state.C3} onChange={this.handleChange} required/>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
       </form>
        <div className='line'>
        <Line
          data={this.state.chartData}
          options={{
           // maintainAspectRatio: false ,
            title:{
              display:this.state.displayTitle,
              text:'Largest Cities In '+this.state.location,
              fontSize:25
            },
            legend:{
              display:this.state.displayLegend,
              position:this.state.legendPosition
            }
            
          }}
        />
        </div>
        </div>
    );
  }
}

export default Butterfly_spread;