import React from 'react'
import Link from 'next/link'

const Reports = () => {
  const reports = [
    {
      date: '2023-02-15',
      time: '10:00 AM',
      title: 'Quarterly Financial Report',
      link: '#'
    },
    {
      date: '2023-05-15',
      time: '11:00 AM',
      title: 'Annual Performance Review',
      link: '#'
    },
    {
      date: '2023-08-10',
      time: '09:30 AM',
      title: 'Market Analysis Report',
      link: '#'
    },
    {
      date: '2023-11-20',
      time: '02:00 PM',
      title: 'Sustainability Report',
      link: '#'
    }
  ];

  return (
    <div className=" w-full bg-[#EFF8EC] mx-auto py-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl py-10 font-bold text-center">
        Our Recent <span className="text-[#090E73]">Reports</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto ">
        {reports.map((report, index) => (
          <div key={index} className="report-card border bg-white border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="report-card-header flex justify-between text-gray-500 text-sm mb-4">
              <span className="report-date">Date: {report.date}</span>
              <span className="report-time">Time: {report.time}</span>
            </div>
            <div className="report-card-content">
              <h2 className="report-title text-2xl font-semibold mb-4">{report.title}</h2>
              <Link href={report.link} className="text-[#090E73] font-medium hover:underline">
                Read Full Report
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
