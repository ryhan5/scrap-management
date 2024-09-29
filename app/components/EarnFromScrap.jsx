import Head from 'next/head';
import { Truck, DollarSign, CheckCircle, Recycle } from 'lucide-react'; // Lucide icons
import React from 'react'; // Required to use createElement

const benefits = [
  { title: 'Convenient Pickup', description: 'We collect scrap directly from your doorstep', icon: Truck },
  { title: 'Competitive Rates', description: 'Get the best prices for your scrap materials', icon: DollarSign },
  { title: 'Eco-Friendly', description: 'Contribute to a cleaner environment by recycling', icon: Recycle },
  { title: 'Hassle-Free Process', description: 'Easy scheduling and quick payments', icon: CheckCircle },
];

const faqs = [
  {
    question: 'What types of scrap do you accept?',
    answer: 'We accept a wide range of scrap materials including paper, cardboard, plastic, metals (aluminum, copper, steel), electronics, and more. Check our rates page for a full list.',
  },
  {
    question: 'How do I schedule a pickup?',
    answer: "You can schedule a pickup through our website or mobile app. Simply select a convenient date and time, and we'll come to collect your scrap.",
  },
  {
    question: 'How do I get paid for my scrap?',
    answer: "We offer multiple payment options including direct bank transfer, mobile wallet, or cash. You'll receive payment immediately after we weigh and assess your scrap.",
  },
  {
    question: 'Is there a minimum amount of scrap required for pickup?',
    answer: 'We generally require a minimum of 5kg of scrap for a pickup. However, we can be flexible for certain high-value materials.',
  },
];

export default function EarnFromScrap() {
  return (
    <> 
      <Head>
        <title>Earn Money from Your Scrap | ScrapSmart</title>
        <meta
          name="description"
          content="Learn how to earn money by selling your scrap materials. We offer convenient pickup and competitive rates."
        />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <main>
          {/* Hero Section */}
          <div className="bg-green-600 text-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                Turn Your Trash into Cash
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-center">
                Earn money by selling your scrap materials. We'll pick it up from your home!
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white mx-auto">
                  1
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Collect Your Scrap</h3>
                <p className="mt-2 text-base text-gray-500">
                  Gather recyclable materials from your home or office.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white mx-auto">
                  2
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Schedule a Pickup</h3>
                <p className="mt-2 text-base text-gray-500">
                  Use our app or website to book a convenient pickup time.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white mx-auto">
                  3
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Get Paid</h3>
                <p className="mt-2 text-base text-gray-500">
                  Receive payment for your scrap materials on the spot.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white mx-auto">
                      {React.createElement(benefit.icon, { className: "h-6 w-6", "aria-hidden": true })}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{benefit.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                Frequently Asked Questions
              </h2>
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                    <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>

{/* CTA Section */}
<div className="bg-green-600">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to start earning?</span>
                <span className="block">Download our app today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-green-200">
                Get started in minutes and turn your scrap into cash.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                Download App
              </a>
            </div>
          </div>

          </div>
        </main>

        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-base text-gray-400">
              &copy; 2023 ScrapSmart. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
