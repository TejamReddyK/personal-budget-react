// import React from 'react';


// function HomePage() {
//   return (
//     <>
//       <main className="container center">
//     <section className="page-area">

//         {/* <!-- Chart.js Pie Chart --> */}
//         <article className="text-box">
//             <h2 id="chartjs-chart">Chart.js Pie Chart</h2>
//             <p>
//                 <canvas id="myChart" width="400" height="400"></canvas>
//             </p>
//         </article>
// {/* 
//         <!-- New D3.js Chart Section --> */}
//         <article className="text-box">
//             <h2 id="d3-chart">D3.js Pie Chart</h2>
//             <button className="randomize">Randomize</button>
//             <div id="d3-chart-container"></div>
//         </article>
//     </section>

//     <div class="page-area">
//         {/* <p>
//             [title]="'Stay on track'"
//             [content]="'Do you know where you are spending your money? If you really stop to track it down,
//             you would get surprised! Proper budget management depends on real data... and this
//             app will help you with that!'"
//         </p> */}

//   {/* <article>
//     <h1>Title</h1>
//     <p>content</p>
//   </article> */}

//   <article>
//     <h1>Results</h1>
//     <p>
//       People who stick to a financial plan, budgeting every expense, get out of debt faster!
//       Also, they live happier lives... since they spend without guilt or fear...
//       because they know it is all good and accounted for.
//     </p>
//   </article>

//   <article>
//     <h1>Free</h1>
//     <p>This app is free!!! And you are the only one holding your data!</p>
//   </article>

//   <article>
//     <h1>Stay on track</h1>
//     <p>
//       Do you know where you are spending your money? If you really stop to track it down,
//       you would get surprised! Proper budget management depends on real data... and this
//       app will help you with that!
//     </p>
//   </article>

//   <article>
//     <h1>Alerts</h1>
//     <p>
//       What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
//     </p>
//   </article>

//   <article>
//     <p>
//       <canvas id="myChart" width="400" height="400"></canvas>
//     </p>
//   </article>
// </div>
// </main>
//     </>
  
//   );
// }

// export default HomePage;









// src/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChartComponent from '../Components/ChartComponent'; 
import D3Component from '../Components/D3Component';
function HomePage() {
  const [data, setData] = useState(null);

  // Function to fetch data
  const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/data');
        console.log('Fetched Data:', response.data);
        setData(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main className="container center">

        <div className="page-area">
          <article>
            <h1>Results</h1>
            <p>
              People who stick to a financial plan, budgeting every expense, get out of debt faster!
              Also, they live happier lives... since they spend without guilt or fear...
              because they know it is all good and accounted for.
            </p>
          </article>

          <article>
            <h1>Free</h1>
            <p>This app is free!!! And you are the only one holding your data!</p>
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
        </div>

        <section className="page-area">
          {/* Chart.js Pie Chart */}
          <article className="text-box">
            <h2 id="chartjs-chart">Chart.js Pie Chart</h2>
            {data && <ChartComponent data={data} />} {/* Render Chart.js Pie chart */}
          </article>

          {/* D3.js Chart Section */}
          <article className="text-box">
            <h2 id="d3-chart">D3.js Pie Chart</h2>
            <button className="randomize">Randomize</button>
            {data && <D3Component data={data} />} {/* Render D3.js chart */}
          </article>
        </section>

      </main>
    </>
  );
}

export default HomePage;
