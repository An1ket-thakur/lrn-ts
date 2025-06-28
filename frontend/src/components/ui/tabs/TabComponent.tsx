/* eslint-disable react/prop-types */
import FormWrapper from "@/components/common/hoc/FromWrapper";
import { useTabsCtx } from "./Tabs";

export function TabBox({ children }) {
  return <section className="flex">{children}</section>;
}

export function Tab({
  eventTab,
  disabled,
  hidden,
  className = "border-[#d3d3d3]",
  children,
  ...props
}) {
  const { activeTab, setActiveTab } = useTabsCtx();

  const customOnClick = async () => {
    if (props.customFunc) {
      const res = await props.customFunc();
      if (res.state === true) {
        setActiveTab(eventTab);
      } else {
        return props.setCurrStateModal((prev) => ({
          ...prev,
          loading: false,
          error: true,
          message: res.message,
        }));
      }
    } else {
      setActiveTab(eventTab);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`py-1 px-2 rounded-t-md items-center justify-center font-semibold cursor-pointer shadow-sm max-sm:text-[10px] text-xs border text-[#202020] 
        ${className}
        ${hidden ? "hidden" : "flex"}
        ${
          activeTab === eventTab && !disabled ? "bg-[#dee0e9]" : "bg-[#ffffff]"
        }`}
      onClick={() => customOnClick()}
    >
      {children}
    </button>
  );
}

export function TabItemBox({ children }) {
  return <FormWrapper>{children}</FormWrapper>;
}

export function TabItem({ children, eventTab, className }) {
  const { activeTab } = useTabsCtx();
  return activeTab ? (
    <div
      className={`realtive ${className} ${
        activeTab === eventTab ? "block" : "hidden"
      }`}
    >
      {children}
    </div>
  ) : null;
}
