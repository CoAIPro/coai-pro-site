import { useState } from "react";

const CustomTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.key || "");
  return (
    <div>
      {/* Tab Headers */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm font-medium ${activeTab === tab.key
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {tabs.map(
          (tab) =>
            tab.key === activeTab && (
              <div key={tab.key}>
                {typeof tab.content === "function" ? tab.content() : tab.content}
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default CustomTabs