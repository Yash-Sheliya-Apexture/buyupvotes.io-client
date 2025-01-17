import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { FaClock } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";

const data = [
  {
    id: 1,
    remainingVotes: 0,
    label: "Votes remaining",
    link: "dashboard/fundprice",
    icon: <FaWallet />,
  },
  {
    id: 2,
    remainingVotes: 0,
    label: "Total Orders",
    link: "dashboard/upvoteorder",
    icon: <BsCartCheckFill />,
  },
  {
    id: 3,
    remainingVotes: 0,
    label: "Order in Progress",
    link: "dashboard/upvoteorder",
    icon: <FaClock />,
  },
  {
    id: 4,
    label: "New Order",
    link: "dashboard/upvoteorder",
    icon: <FaSquarePlus />,
  },
  {
    id: 5,
    label: "Buy Reddit Accounts",
    link: "dashboard/account",
    icon: <FaReddit />,
  },
  {
    id: 6,
    label: "API Documentation",
    link: "/",
    icon: <FaFileCode />,
  },
];

const DataSection = () => {
  const [dataList, setDataList] = useState(data);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const headers = { Authorization: `Bearer ${token}` };

        const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, {
          headers,
        });

        let completedQuantityVotes = 0;
        // Check if ordersResponse.data is an array before using reduce
        if (
          ordersResponse.status === 200 &&
          Array.isArray(ordersResponse.data)
        ) {
          completedQuantityVotes = ordersResponse.data.reduce(
            (total, order) => total + parseInt(order.quantity || 0, 10),
            0
          );
        }

        const ordersInProgress =
          ordersResponse.status === 200 && Array.isArray(ordersResponse.data)
            ? ordersResponse.data.filter(
                (order) => order.status === "In Progress"
              ).length
            : 0;

        // Fetch Payments
        const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, {
          headers,
        });

        let tokensTotal = 0;
        if (paymentsResponse.status === 200 && paymentsResponse.data) {
          tokensTotal = paymentsResponse.data.tokens || 0;
        }

        const calculatedBalance = tokensTotal - completedQuantityVotes;

        const updatedData = data.map((item) => {
          if (item.id === 1) {
            return {
              ...item,
              remainingVotes: calculatedBalance >= 0 ? calculatedBalance : 0,
            };
          }
          if (item.id === 2) {
            return {
              ...item,
              remainingVotes:
                ordersResponse.status === 200 &&
                Array.isArray(ordersResponse.data)
                  ? ordersResponse.data.length
                  : 0,
            };
          }
          if (item.id === 3) {
            return { ...item, remainingVotes: ordersInProgress };
          }
          return item;
        });

        setDataList(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setDataList(
          data.map((item) => {
            if (item.id === 1 || item.id === 2 || item.id === 3) {
              return { ...item, remainingVotes: 0 };
            }
            return item;
          })
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  const handleCardClick = (link) => {
    if (link) navigate(`/${link}`);
  };

  return (
    <section className="Data-Section my-5 w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-full h-full">
                <div
                  className="flex items-center justify-between w-full h-full p-4 bg-white shadow-main rounded-small"
                  style={{ minHeight: "100px" }}
                >
                  <div>
                    <Skeleton height={25} width={70} />
                    <Skeleton height={20} width={100} />
                  </div>
                  <div className="p-4 text-main-color lg:text-large text-basic">
                    <Skeleton height={30} width={30} />
                  </div>
                </div>
              </div>
            ))
          : dataList.map((item) => (
              <div
                key={item.id}
                className="w-full h-full cursor-pointer"
                onClick={() => handleCardClick(item.link)}
              >
                <div
                  className="flex items-center justify-between w-full h-full p-4 bg-white shadow-main border border-slate-300/50 rounded-small"
                  style={{ minHeight: "100px" }}
                >
                  {/* Left Section */}
                  <div className="">
                    {item.remainingVotes !== undefined && (
                      <p className="mb-2 font-bold lg:text-large text-sub-color">
                        {item.remainingVotes}
                      </p>
                    )}
                    <p className="font-medium lg:text-base text-para-color">
                      {item.label}
                    </p>
                  </div>

                  {/* Icon Section */}
                  <div className="p-4 text-main-color lg:text-large text-basic">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default DataSection;
