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
            <div className="container mx-auto py-4">
                <div className="my-4 inline-block">
                    <div className="flex justify-start gap-4 border border-gray-300 p-3 rounded-full">
                        <div className="bg-main-color text-white py-3 px-8 border border-main-color rounded-full cursor-pointer">
                            Add Funds
                        </div>
                        <div
                            className="bg-white text-gray-900 py-3 px-8 border border-gray-300 rounded-full cursor-pointer"
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