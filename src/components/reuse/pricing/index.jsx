import { plans } from "@/data/plans";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight, FaCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Pricing = () => {
  const navigate = useNavigate();

  const onGetStarted = () => {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "You have selected a plan.",
      confirmButtonText: `<span class="flex items-center gap-2">Go to dashboard <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>`,
      customClass: {
        confirmButton: "swal2-confirm swal2-styled !bg-dark !text-light !px-6 !py-3 !rounded-full !text-base !font-semibold",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashboard");
      }
    });
  };

  return (
    <div className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-20 h-full">
      {plans.map((plan, index) => {
        const isHighlighted = index === 1;
        // const scaleClass = isHighlighted ? "scale-100 hover:scale-[1.03]" : "scale-95 hover:scale-100";
        return (
          <div
            key={index}
            className="h-full flex flex-col"
          >
            <div
              className={`
                ${isHighlighted ? "p-[2px] bg-gradient-to-r from-blue-500 to-pink-400 rounded-3xl" : ""}
                h-full flex flex-col
              `}
            >
              <div
                className={`
                  h-full p-6 rounded-3xl shadow-lg flex flex-col
                  ${isHighlighted ? "bg-white dark:bg-dark" : "border border-slate-200 dark:border-[#313131] hover:border-primary dark:shadow-priceShadow"}
                `}
              >
                <div className="flex items-center gap-1 mb-2">
                  <h3 className="text-base font-medium text-[#7F7E7C]">{plan.title}</h3>
                  {plan.badge && (
                    <span className="text-xs bg-primary text-light rounded-md px-2 py-0.5 inline-block">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <p
                    className={`text-xl ${isHighlighted ? "lg:text-[32px]" : "lg:text-[26px]"} font-bold font-secondary my-2 ${index === 2
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                      : "text-black dark:text-white"
                      }`}
                  >
                    {plan.price}
                  </p>
                  {!plan.hiddenFees && (
                    <p className="text-sm text-[#949391]">(No hidden fees)</p>
                  )}
                </div>
                <p
                  className={`${isHighlighted ? "lg:text-lg" : "lg:text-base"
                    } text-sm text-[#7F7E7C] mb-6`}
                >
                  {plan.note}
                </p>
                <button
                  className="button flex items-center justify-center gap-5 rounded-full py-4 px-6 !w-full mb-5"
                  onClick={onGetStarted}
                >
                  Get Started
                  <FaArrowRight />
                </button>
                <ul className="text-sm text-left space-y-2 pt-3 border-t border-t-slate-200 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.available ? (
                        <FaCheckCircle className="text-[#8CF000]" />
                      ) : (
                        <FaCircleXmark className="text-red-600" />
                      )}
                      <span
                        className={`${isHighlighted ? "lg:text-lg" : "lg:text-base"
                          } text-[#949391] pl-3`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center pt-5">
                  <h5 className="text-primary font-medium text-sm text-center">
                    {plan.footerContent}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Pricing