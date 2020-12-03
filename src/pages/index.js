import React from 'react';

import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import ImageElement from '../svg/ImageElement';

import LanderHacks from '../assets/images/landerhacks.jpg'
import Networking from '../assets/images/networking.jpg'
import Mentorship from '../assets/images/mentorship.png'

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Building Tech Ecosystem
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
	    For Young Somalilanders to thrive.
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>

    <section id="about" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">About</h2>
	<p className="mt-8 text-xl font-light leading-relaxed">
	  Silicon nomads are a group of young people hailing from Somaliland (The Jewel of Horn of Africa). The group came together to build an ecosystem for tech startups to thrive. The group will organize events, hackathons, competitions, etc.
	</p>
      </div>
    </section>

    <section id="programs" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Programs</h2>

	<SplitSection
	  primarySlot={
	    <div className="lg:pr-32 xl:pr-48">
	      <h3 className="text-3xl font-semibold leading-tight">Lander Hacks</h3>
	      <p className="mt-8 text-xl font-light leading-relaxed">
		Our team of enthusiastic marketers will analyse and evaluate how your company stacks
		against the closest competitors
	      </p>
	    </div>
	  }
	  secondarySlot={ <img src={LanderHacks} />}
	/>

	<SplitSection
	  reverseOrder
	  primarySlot={
	    <div className="lg:pl-32 xl:pl-48">
	      <h3 className="text-3xl font-semibold leading-tight">
		Mentorship
	      </h3>
	      <p className="mt-8 text-xl font-light leading-relaxed">
		Connecting junior developers in Somaliland with world-class Mentors/ Senior Developers/ Experts
	      </p>
	    </div>
	  }
	  secondarySlot={ <img src={Mentorship} />}
	/>

	<SplitSection
	  primarySlot={
	    <div className="lg:pr-32 xl:pr-48">
	      <h3 className="text-3xl font-semibold leading-tight">
		Networking
	      </h3>
	      <p className="mt-8 text-xl font-light leading-relaxed">
		Organizing monthly events for Entrepreneurs & Developers
	      </p>
	    </div>
	  }
	  secondarySlot={ <img src={Networking} />}
	/>

	<SplitSection
	  reverseOrder
	  primarySlot={
	    <div className="lg:pl-32 xl:pl-48">
	      <h3 className="text-3xl font-semibold leading-tight">
		Startup House
	      </h3>
	      <p className="mt-8 text-xl font-light leading-relaxed">
		Admitting 2-3 startups per year for a year long program, that will include, Mentorship, Product development, Business evelopment & Funding
	      </p>
	    </div>
	  }
	  secondarySlot={<SvgCharts />}
	/>
      </div>
    </section>

    <section id="events" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Events</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
	    <Card className="mb-8">
	      <p className="font-semibold text-xl">1st Hackthon</p>
	      <p className="mt-4">
                Jan - 2021
	      </p>
	    </Card>
          </div>
          <div className="flex-1 px-3">
	    <Card className="mb-8">
	      <p className="font-semibold text-xl">1st Mentorship Session</p>
	      <p className="mt-4">
                Feb - 2021
	      </p>
	    </Card>
          </div>
          <div className="flex-1 px-3">
	    <Card className="mb-8">
	      <p className="font-semibold text-xl">1st Networking Event</p>
	      <p className="mt-4">
                TBC
	      </p>
	    </Card>
          </div>
        </div>
      </div>
    </section>

    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
	    <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
	    <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
	    <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
	    <div key={customer.customerName} className="flex-1 px-3">
	      <CustomerCard customer={customer} />
	    </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
