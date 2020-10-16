import React,{ Component} from 'react';
import axios from 'axios';
import {Pie} from 'react-chartjs-2';

class HomePage extends Component{
    state = {
       data: { 
                datasets: [
                    { 
                        data: [], 
                        backgroundColor: [
                            '#ffcd56',
                            '#ff6384',
                            '#36a2eb',
                            '#fd6b19',
                            '#48C9B0',
                            '#9B59B6',
                            '#5D6D7E',
                            '#0E6655',
                            '#5DADE2'
                           ], 
                    }
                ],
               
           labels: [
           ]
        }
    }

    async componentDidMount() {
        const res = await axios.get("http://localhost:4000/budget")
        console.log(res);
        let tempvar = this.state.data;
            for (var i = 0; i < res.data.myBudget.length; i++) {
                tempvar.datasets[0].data[i] = res.data.myBudget[i].budget;
                tempvar.labels[i] = res.data.myBudget[i].title;
            }
            this.setState({
                data: Object.assign({}, this.state.data, {
                    data: tempvar
                })
            });
    }
    

render() {
  return (
    <main className="center" id="main">

        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>

            <article>
                <h1>Chart</h1>
                <p>
                    <Pie data = {this.state.data} height = {400} width = {400}></Pie>
                </p>
            </article>

        </div>

    </main>
  );
}
}

export default HomePage;