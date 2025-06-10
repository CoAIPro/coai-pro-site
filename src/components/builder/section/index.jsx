import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { BiInfoCircle, BiPaint } from "react-icons/bi";
import { MdOutlineAnimation } from "react-icons/md";

const BuilderSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [scaleUniformly, setScaleUniformly] = useState(false);
  const [fixedHeight, setFixedHeight] = useState(false);

  return (
    <div
      className={`dashboardSidebar transition-all duration-300 ${
        isOpen ? "active" : ""
      }`}
    >
      {/* Toggle button */}
      <button onClick={() => setIsOpen(!isOpen)} className="btn_toggleSidebar">
        <svg
          className={`transition-transform text-xl ${
            isOpen ? "" : "rotate-180"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="pb-8">
        <h2 className="text-xl font-medium pb-6 pt-3 pl-3">Section</h2>
        {/* Section widget tabs */}
        <Tabs defaultValue="editsize">
          <TabsList className="grid w-full grid-cols-2 bg-transparent">
            <TabsTrigger
              value="editsize"
              className="flex items-center justify-center text-[#374957] border-b-[1.5px] rounded-none data-[state=active]:text-primary data-[state=active]:border-[#3997FF] bg-transparent"
            >
              <BiPaint className="text-2xl" />
            </TabsTrigger>
            <TabsTrigger
              value="setup"
              className="flex items-center justify-center text-[#374957] border-b-[1.5px] rounded-none data-[state=active]:text-primary data-[state=active]:border-[#3997FF] bg-transparent"
            >
              <MdOutlineAnimation className="text-2xl" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="editsize" className="pt-4">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Size Section */}
              <AccordionItem value="size" className="border rounded-lg">
                <AccordionTrigger className="px-4">Size</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Width</Label>
                        <Input type="text" placeholder="Width" />
                      </div>
                      <div className="space-y-2">
                        <Label>Height</Label>
                        <Input type="text" placeholder="Height" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Label>Responsive Behavior</Label>
                        <BiInfoCircle
                          size={16}
                          className="text-gray-400 cursor-help"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Scale Uniformly</Label>
                        <Switch
                          checked={scaleUniformly}
                          onCheckedChange={setScaleUniformly}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Label>Fixed Height</Label>
                          <Label className="text-sm text-gray-500">
                            Fit to Screen
                          </Label>
                        </div>
                        <Switch
                          checked={fixedHeight}
                          onCheckedChange={setFixedHeight}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Design Section */}
              <AccordionItem value="design" className="border rounded-lg">
                <AccordionTrigger className="px-4">Design</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  {/* Design content */}
                </AccordionContent>
              </AccordionItem>

              {/* Typography Section */}
              <AccordionItem value="typography" className="border rounded-lg">
                <AccordionTrigger className="px-4">Typography</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  {/* Typography content */}
                </AccordionContent>
              </AccordionItem>

              {/* Layout Section */}
              <AccordionItem value="layout" className="border rounded-lg">
                <AccordionTrigger className="px-4">Layout</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  {/* Layout content */}
                </AccordionContent>
              </AccordionItem>

              {/* Anchor Section */}
              <AccordionItem value="anchor" className="border rounded-lg">
                <AccordionTrigger className="px-4">Anchor</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  {/* Anchor content */}
                </AccordionContent>
              </AccordionItem>

              {/* Position Section */}
              <AccordionItem value="position" className="border rounded-lg">
                <AccordionTrigger className="px-4">Position</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  {/* Position content */}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="setup"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BuilderSection;
