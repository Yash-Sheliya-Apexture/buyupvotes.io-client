import React from "react";
import Breadcrumb from "../Dashboard/components/Breadcrumb";
import ContactForm from "../Components/ContactUs/ContactForm";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import GradientHeading from "../Components/GradientHeading";

function ContactUs() {
  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Contact Us" },
  ];

  return (
    <>
      <main className="py-10"  id="Contact">
        <section className="Contact-Us">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="w-full">
                <h1 className="mb-2 font-bold text-sub-color text-basic">
                  Contact-Us
                </h1>
                <div className="flex items-center space-x-4">
                  <Breadcrumb items={breadcrumbs} />
                </div>
                <div className="lg:max-w-md lg:mt-10 mt-5">
                  <GradientHeading
                    tag="h1"
                    beforeText="Have questions? We are always to help "
                    gradientText="you question!"
                    beforeSpanClassName="font-bold"
                    textSize="text-3xl lg:text-5xl md:text-4xl lg:leading-[55px]"
                    className="mb-5"
                  />
                </div>
                <p className="mb-6 lg:text-xl text-[16px] text-gray-700">
                  Get the oars in the water and start rowing. Execution is the
                  single biggest factor in achievement. The quicker you will get
                  to the goals!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                  {/* Call Center */}
                  <div className="rounded-lg">
                    <h3 className="font-semibold mb-2 text-black text-xl">
                      Call Center
                    </h3>
                    <div className="flex flex-col">
                      <a href="" className="text-gray-700">
                        123 456-7890
                      </a>
                      <a href="" className="text-gray-700">
                        +(000) 123-456-7890
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="rounded-lg">
                    <h3 className="font-semibold mb-2 text-black text-xl">
                      Our Location
                    </h3>
                    <p className="text-gray-800">
                      214 West Arnold St, New York, NY 10002
                    </p>
                  </div>

                  {/* Email */}
                  <div className="rounded-lg ">
                    <h3 className="font-semibold mb-2 text-black text-xl">
                      Email
                    </h3>
                    <a
                      href="mailto:info@redditmarketing.company"
                      className="text-gray-700 underline"
                    >
                     info@redditmarketing.company
                    </a>
                  </div>

                  {/* Social Networks */}
                  <div className="rounded-lg ">
                    <h3 className="font-semibold mb-2 text-black text-xl">
                      Social Network
                    </h3>
                    <div className="flex space-x-4 text-gray-600">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <FaFacebook className="text-xl" />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <FaTwitter className="text-xl" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <FaInstagram className="text-xl" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white border boder-[#d1d5db] rounded-2xl md:p-8 p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactUs;
