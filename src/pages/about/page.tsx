import React from 'react';
import ModernTemplate from '@/components/ModernTemplate';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <ModernTemplate 
      title="About Homeless Helpers"
      subtitle="Our mission, vision, and the impact we make"
    >
      <section>
        <p>
          If you have any questions, or would like more information about our programs and services, please do not hesitate to contact us. We are here to help.
        </p>
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <section className="my-8">
        </section>
        <p>
          There are many ways you can get involved with Homeless Helpers, from volunteering your time, to donating resources, or simply spreading the word about our mission. Every little bit helps, and together, we can make a difference.
        </p>
        <h2 className="text-2xl font-bold">Get Involved</h2>
        <section className="my-8">
        </section>
        <p>
          Through our various programs and initiatives, we have been able to make a significant impact in the community, providing not just immediate relief, but also long-term solutions to homelessness.
        </p>
        <h2 className="text-2xl font-bold">The Impact We Make</h2>
        <section className="my-8">
        </section>
        <p>
          We envision a world where every individual has a safe place to call home, and the support they need to thrive.
        </p>
        <h2 className="text-2xl font-bold">Our Vision</h2>
        <section className="my-8">
        </section>
        <p>
          At Homeless Helpers, our mission is to provide support and resources to homeless individuals and families, helping them to rebuild their lives and achieve sustainable independence.
        </p>
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <section className="my-8">
        </section>
      </section>
    </ModernTemplate>
  );
}
