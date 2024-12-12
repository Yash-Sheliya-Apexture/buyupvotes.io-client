import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Breadcrumb from "../../Dashboard/components/Breadcrumb";
import background from "../../assets/Images/hero1.jpg";
import Button from "../components/Button";

const ContactUs = () => {
  const textRef = useRef(null);

  // State for form values and errors
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    subject: false,
    message: false,
  });

  useEffect(() => {
    const el = textRef.current;
    gsap.fromTo(
      el.querySelectorAll("span"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.5, ease: "power3.out" }
    );
  }, []);

  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Contact Us" },
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: false })); // Reset error state on change
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {
      subject: !formData.subject.trim(), // Check if subject is empty
      message: !formData.message.trim(), // Check if message is empty
    };

    setErrors(newErrors);

    // If no errors, proceed with form submission (e.g., send to backend)
    if (!newErrors.subject && !newErrors.message) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!!");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="mb-2 font-bold text-sub-color text-basic">Contact Us</h1>
      <div className="flex items-center space-x-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <div className="flex h-screen my-10 bg-white">
        {/* Left Side */}
        <div className="relative w-1/2 overflow-hidden rounded-xlarge">
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/65 z-10"></div>
          <div className="absolute -bottom-20 z-20 flex items-center justify-center h-full px-6">
            <h1
              ref={textRef}
              className="text-white text-[60px] font-black text-start leading-[80px]"
            >
              <span>Looking to</span> <br />
              <span className="text-main-color">contact</span> <br />
              <span>us?</span>
            </h1>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="text-center flex items-center border-b py-4">
            <h2 className="text-medium font-bold text-sub-color mr-2">
              Chat with us:
            </h2>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="size-5 text-[#24A1DE] "
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8m114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716a43.8 43.8 0 0 1 .417 9.769"
                ></path>
              </svg>
              <a
                href="https://web.telegram.org/a/"
                target="_blank"
                className="text-sub-color font-medium hover:underline mr-4"
              >
                Telegram
              </a>
              <span>-</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="size-5 text-[#237067]"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"
                ></path>
              </svg>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                className="text-sub-color hover:underline ml-4"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="w-full max-w-md">
            <h2 className="text-center text-base font-bold text-sub-color my-5">
              Or send us an email below:
            </h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  disabled
                />
              </div>
              <div>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  disabled
                />
              </div>
              <div>
                <input
                  className={`w-full px-4 py-2 border ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  } rounded-full`}
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    Subject is required.
                  </p>
                )}
              </div>
              <div>
                <textarea
                  className={`w-full border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } hover:border-black transition-all duration-150 ease-in rounded-small resize-none`}
                  id="message"
                  rows="8"
                  cols="20"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    Message is required.
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
