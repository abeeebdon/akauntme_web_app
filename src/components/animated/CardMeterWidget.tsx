import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ApexOptions } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface CardWidgetProps {
    className?: string;
    children: React.ReactNode;
}


const CardMeterWidget: React.FC<CardWidgetProps> = ({ className }) => {
    const [chartData] = useState<{
        series: number[];
        options: ApexOptions;
    }>({
        series: [75], // Percentage value
        options: {
            series: [76],
            chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: '97%',
                        margin: 5, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            color: '#999',
                            opacity: 1,
                            blur: 2
                        }
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -2,
                            fontSize: '22px'
                        }
                    }
                }
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            fill: {
                type: 'solid',
                gradient: {
                    shade: 'light',
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 53, 91]
                },
            },
            labels: ['Average Results'],
        },
    });

    return (
        <div className={`glassmorphism absolute ${className} rounded-lg pt-4 pl-4 pr-4 overflow-hidden`}>
            <div className="flex items-center justify-center bg-gray-100">
                <div className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden bg-white p-6">
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="radialBar"
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardMeterWidget;
