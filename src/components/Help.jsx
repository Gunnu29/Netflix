import React, { useState } from "react";

export default function Help() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div className="bg-white w-full h-[600px]">
        <div className="w-[60%] h-auto m-auto">
          <div className="font-bold text-4xl pt-5">
            <h1>Contact us</h1>
          </div>
          <div className="mt-10 font-semibold text-lg">
            <p>Tell us more and we'll find the best solution for you</p>
          </div>
          <div className="relative">
            <input
              type="text"
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                if (!e.target.value) setIsFocused(false);
              }}
              placeholder="Describe your issue"
              className="pl-3 border w-full border-gray-300 py-2 mt-3 rounded-md"
            />
            {isFocused && (
              <i className="ri-arrow-right-line absolute right-4 top-[60%] transform -translate-y-1/2 text-gray-600 text-xl cursor-pointer"></i>
            )}
          </div>
          <div className="mt-10 mb-2 font-semibold text-lg">
            <p>Quick Links</p>
          </div>
          <div className="w-full h-[1px] border border-gray-300/60"></div>
          <div className="flex my-2">
            <div className="mr-3 my-1">
              <i class="ri-error-warning-line"></i>
            </div>
            <div className="cursor-pointer underline font-semibold">
              <a href="#">Content Grievances in India</a>
            </div>
          </div>

          <div className="w-full h-[1px] border border-gray-300/60"></div>

          <div className="flex my-2">
            <div className="mr-3 my-1">
              <i class="ri-lock-line"></i>
            </div>
            <div className="cursor-pointer underline font-semibold">
              <a href="#">Reset Password</a>
            </div>
          </div>

          <div className="w-full h-[1px] border border-gray-300/60"></div>

          <div className="flex my-2">
            <div className="mr-3 my-1">
              <i class="ri-mail-line"></i>
            </div>
            <div className="cursor-pointer underline font-semibold">
              <a href="#">Update email</a>
            </div>
          </div>

          <div className="w-full h-[1px] border border-gray-300/60"></div>

          <div className="flex my-2">
            <div className="mr-3 my-1">
              <i class="ri-question-line"></i>
            </div>
            <div className="cursor-pointer underline font-semibold">
              <a href="#">Get help signing in</a>
            </div>
          </div>

          <div className="w-full h-[1px] border border-gray-300/60"></div>

          <div className="flex my-2">
            <div className="mr-3 my-1">
              <i class="ri-bank-card-line"></i>
            </div>
            <div className="cursor-pointer underline font-semibold">
              <a href="#">Update payment method</a>
            </div>
          </div>

          <div className="w-full h-[1px] border border-gray-300/60"></div>
          <div className="flex my-2">
            <div className="mr-3 my-1">
              <i class="ri-megaphone-line"></i>
            </div>
            <div className="cursor-pointer underline font-semibold">
              <a href="#">Request TV shows or movies</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
