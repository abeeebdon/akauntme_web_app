import React, { Component } from "react";
import Chart from "react-apexcharts";

// class DashboardChartWidget extends Component {
// constructor(props: string) {
//     super(props);

//     this.state = {

//         options: {

//             chart: {
//                 id: "basic-bar",
//                 type: 'area',
//                 toolbar: {
//                     show: false
//                 },
//             },
//             xaxis: {
//                 categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
//             },
//             plotOptions: {
//                 bar: {
//                     borderRadius: 5,

//                     colors: {
//                         ranges: [{
//                             from: 0,
//                             to: 100,
//                             color: '#5E56FF'
//                         }]
//                     }
//                 }
//             },


//         },
//         series: [
//             {
//                 name: "Sales",
//                 data: [30, 40, 45, 50, 49, 60, 0]
//             }
//         ]
//     };
// }

// render() {
//     return (
//         <div className="">
//             <div className="flex justify-between items-center  lg:px-4 border-b dark:border-akauntme/20 p-4">
//                 <h1 className="font-semibold text-lg" >Total Sales</h1>
//                 <div>
//                     asjasjxajsxjasxajxjajxs
//                 </div>
//             </div>
//             <div className="p-4">
//                 <div className="flex w-full flex-col lg:flex-row lg:gap-x-4">
//                     <Chart
//                         options={this.state.options}
//                         series={this.state.series}
//                         type="bar"
//                         height="200"
//                         className="w-full lg:w-9/12 dark:text-gray-500"
//                     />
//                     <div className="shadow-sm border dark:border-akauntme/20 w-full lg:w-3/12 rounded-md p-2 flex flex-col lg:flex-row lg:gap-x-4 gap-y-4">
//                         <ul className="flex lg:flex-col items-center lg:items-start lg:gap-y-2 border-b dark:border-akauntme/20  lg:border-b-none pb-2 lg:pb-0 lg:border-r lg:pr-2 justify-between ">
//                             <li>Mon</li>
//                             <li>Tue</li>
//                             <li>Wed</li>
//                             <li>Thur</li>
//                             <li>Fri</li>
//                             <li>Sat</li>
//                             <li>Sun</li>
//                         </ul>

//                         <ul>
//                             DFDF
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// }
const DashboardChartWidget = () => {
    return <>
        <h1>Dashboard Widget</h1>
    </>
}

export default DashboardChartWidget;