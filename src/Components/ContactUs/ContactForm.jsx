import React, { useState, useEffect } from "react";
import Button from "../../Dashboard/components/Button";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    subject: false,
    message: false,
    email: false,
      name: false
  });
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState(null);
  const [isUserDataFetched, setIsUserDataFetched] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/i;

    const validateField = (name, value) => {
    switch (name) {
        case "name":
           if(!value) return "Name is required."
          break;
      case "subject":
        if (!value) return "Subject is required.";
        break;
      case "message":
        if (!value) return "Message is required.";
        break;
      case "email":
        if (!value) return "Email is required.";
        if (!emailRegex.test(value)) return "Invalid email address.";
        break;
      default:
        return null;
    }
    return null;
  };


  const handleBlur = (e) => {
    const { id, value } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
    const error = validateField(id, value);
    setErrors((prev) => ({ ...prev, [id]: error }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (touched[id]) {
      const error = validateField(id, value);
      setErrors((prev) => ({ ...prev, [id]: error }));
    } else {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

    // Fetch user data (name and email) on component mount
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("authToken");
            if (token) {
                try {
                    setLoading(true);
                    const response = await axios.get(`${API_BASE_URL}/auth/user`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    if (response.status === 200) {
                        setFormData((prev) => ({
                            ...prev,
                            name: response.data.firstName || "",
                            email: response.data.email || "",
                        }));
                        setIsUserDataFetched(true);
                    } else {
                        setGeneralError("Failed to fetch user data");
                        setIsUserDataFetched(false);
                        setFormData((prev) => ({
                            ...prev,
                            name: "",
                            email: "",
                        }));
                    }
                } catch (err) {
                    setGeneralError("Error fetching user data");
                    setIsUserDataFetched(false);
                     setFormData((prev) => ({
                         ...prev,
                         name: "",
                         email: "",
                     }));
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
                 setIsUserDataFetched(false);
                  setFormData((prev) => ({
                      ...prev,
                      name: "",
                      email: "",
                  }));
            }
        };

        fetchUserData();
    }, [API_BASE_URL]);


  const validateForm = () => {
    const validationErrors = {};
      const fields = ["name", "subject", "message", "email"];


    fields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) validationErrors[field] = error;
    });

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) {
             setTouched(prev => ({ ...prev, subject: true, message: true, email: true, name:true }));
            return;
        }
    
        setLoading(true);
        setGeneralError(null);
    
        try {
            const response = await axios.post(`${API_BASE_URL}/contact`, {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            });
    
            if (response.status >= 200 && response.status < 300) {
                toast.success("Message sent successfully!");
               // Reset form data only if user data was not fetched
               if(!isUserDataFetched) {
                 setFormData((prev) => ({
                     ...prev,
                      subject: "",
                     message: "",
                     email: "",
                       name: ""
                 }));
               } else {
                 setFormData((prev) => ({
                     ...prev,
                      subject: "",
                     message: "",
                 }));
               }
    
    
                setTouched({
                    subject: false,
                    message: false,
                    email: false,
                     name: false
                });
                setErrors({});
            } else {
                setGeneralError("Failed to send the message");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            if (error.response) {
                const errorMessage = error.response.data.message || "There was an error sending the message.";
                setGeneralError(errorMessage);
            } else if (error.request) {
                setGeneralError("Network error. Please check your connection.");
            } else {
                setGeneralError("Unexpected error. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };


  return (
    <div className="w-full max-w-2xl">
      <h2 className="my-5 text-base font-bold text-center text-sub-color">
        Or send us an email below:
      </h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Display general error message here */}
                            {generalError && (
                                <>
                                    <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-4">
                                         <div className="w-5">
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-xl text-light-orange" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path></svg>
                                         </div>
                                         <p className="text-xs text-[#7a0916]">
                                            {generalError}
                                         </p>
                                    </div>
                                </>
                            )}
        <div>
          <input
            className={`w-full px-4 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-full hover:border-black transition-all duration-150 ${
              isUserDataFetched ? "opacity-50 cursor-not-allowed" : ""
            }`}
            id="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
              onBlur={handleBlur}
            disabled={isUserDataFetched}
          />
             {touched.name && errors.name && (
                    <p className="text-[#FF0000] text-xs mt-1">
                        {errors.name}
                    </p>
            )}
        </div>
        <div>
          <input
            className={`w-full px-4 py-2 border ${
              isUserDataFetched ? "opacity-50 cursor-not-allowed" : ""
            } ${errors.email ? "border-red-500" : "border-gray-300"} rounded-full hover:border-black transition-all duration-150`}
            id="email"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={isUserDataFetched}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p className="text-[#FF0000] text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <input
            className={`w-full px-4 py-2 border ${
              errors.subject ? "border-red-500" : "border-gray-300"
            } rounded-full hover:border-black transition-all duration-150`}
            id="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.subject && errors.subject && (
            <p className="text-[#FF0000] text-xs mt-1">{errors.subject}</p>
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
            onBlur={handleBlur}
          ></textarea>
          {touched.message && errors.message && (
            <p className="text-[#FF0000] text-xs mt-1">{errors.message}</p>
          )}
        </div>
        {/* Submit Button */}
          <div className="text-center">
            {loading ? (
                <div className="flex items-center justify-center">
                    <FaSpinner className="text-lg animate-spin" />
                 </div>
            ) : (
                <Button type="submit">Send Message</Button>
           )}
         </div>
      </form>
    </div>
  );
}

export default ContactForm;