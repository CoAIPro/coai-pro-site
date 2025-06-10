import { useEffect, useState } from "react";
import {
  categories,
  myTemplates,
  recommendedTemplates,
} from "../data/templateCard";
import { cn } from "../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Template {
  id: number;
  title: string;
  image: string;
  text: string;
  categories: string[];
  featured?: boolean;
  status?: string;
  lastEdited?: string;
}

interface TemplateGridProps {
  type: "recommended" | "my-templates";
  className?: string;
}

export function TemplateGrid({ type, className }: TemplateGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const templates = type === "recommended" ? recommendedTemplates : myTemplates;

  useEffect(() => {
    const filtered =
      selectedCategory === "all"
        ? templates
        : templates.filter((template) =>
            template.categories.includes(selectedCategory)
          );
    setFilteredTemplates(filtered);
  }, [selectedCategory, templates]);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-secondary">
          {type === "recommended" ? "Recommended Templates" : "My Templates"}
        </h2>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px] bg-[#EEF2FF] rounded-xl border-0">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="relative p-[2px] rounded-2xl transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#3997FF] hover:to-[#F882F2]"
          >
            <div className="bg-white dark:bg-black p-2 pb-5 rounded-2xl flex flex-col h-full border border-slate-200 group-hover:border-transparent">
              <img
                src={template.image}
                alt={template.title}
                className="w-full object-cover rounded-2xl"
              />
              <div className="flex items-center justify-between pt-3 px-2">
                <h3 className="text-secondary text-xl font-bold">
                  {template.title}
                </h3>
                {template.status && (
                  <span
                    className={cn(
                      "px-2 py-1 text-xs rounded-full",
                      template.status === "new"
                        ? "bg-blue-100 text-blue-700"
                        : template.status === "popular"
                        ? "bg-green-100 text-green-700"
                        : template.status === "draft"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-700"
                    )}
                  >
                    {template.status}
                  </span>
                )}
              </div>
              <p className="pt-4 pb-3 text-[#9F9F9F] text-sm lg:text-lg px-2">
                {template.text}
              </p>

              <div className="flex flex-wrap gap-2 px-2 mb-4">
                {template.categories.map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                  >
                    {categories.find((c) => c.id === category)?.label}
                  </span>
                ))}
              </div>

              {template.lastEdited && (
                <p className="text-xs text-[#9F9F9F] px-2 mb-4">
                  Last edited:{" "}
                  {new Date(template.lastEdited).toLocaleDateString()}
                </p>
              )}

              <div className="flex-1 flex items-end px-2">
                <button className="text-dark dark:text-white px-5 py-2 bg-transparent hover:bg-gradient-to-r hover:from-[#3997FF] hover:to-[#F882F2] border border-slate-200 hover:text-white hover:border-transparent rounded-full duration-200 shadow-sm hover:shadow-none">
                  Use {template.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
