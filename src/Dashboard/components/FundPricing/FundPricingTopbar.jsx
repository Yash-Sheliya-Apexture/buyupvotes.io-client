import React, { useState } from "react";
import PaymentHistoryModal from './PaymentHistoryModal'; // Import the component

const FundPricingTopbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="container mx-auto">
                <div className="my-4 w-full lg:w-1/3 md:w-1/2">
                    <div className="flex md:justify-start justify-center gap-2 border border-gray-300 p-1.5 rounded-full">
                        <div className="bg-main-color text-white py-3 md:px-8 px-6 w-full border text-nowrap border-main-color rounded-full cursor-pointer">
                            Add Funds
                        </div>
                        <div
                            className="bg-white text-gray-900 py-3 md:px-8 px-6 w-full border text-nowrap border-gray-300 rounded-full cursor-pointer"
                            onClick={openModal}
                        >
                            Payment History
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <PaymentHistoryModal closeModal={closeModal} />}
        </>
    );
};

export default FundPricingTopbar;