import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Info,
  PlusCircle
} from "lucide-react";
import { useState } from "react";
import { BiPaint } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineAnimation, MdOutlineImage } from "react-icons/md";
import { PiResizeThin } from "react-icons/pi";
import LayoutSelector from "../layout-selector";

const BuilderSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [scaleUniformly, setScaleUniformly] = useState(false);
  const [fixedHeight, setFixedHeight] = useState(false);

  return (
    <div
      className={`dashboardSidebar transition-all duration-300 ${isOpen ? "active" : ""
        }`}
    >
      {/* Toggle button */}
      <button onClick={() => setIsOpen(!isOpen)} className="btn_toggleSidebar">
        <svg
          className={`transition-transform text-xl ${isOpen ? "" : "rotate-180"
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
      <div className={`pb-8 ${isOpen ? "" : "hidden"
        }`}>
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
            <Accordion type="multiple" collapsible="true" className="space-y-4">
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
                    <div className="space-y-4">
                      <Accordion type="single" collapsible="true">
                        <AccordionItem value="responsive" className="border border-[#E0E0E0] rounded-lg">
                          <AccordionTrigger 
                            className="py-2 px-4 cursor-pointer data-[state=open]:bg-[#EEF2FF] group [&[data-state=open]>svg]:text-primary"
                          >
                            <Label className="text-xs font-normal group-data-[state=open]:text-primary">
                              Scale uniformly
                            </Label>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 py-4">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <Label>Fixed Height</Label>
                                <Switch
                                  checked={scaleUniformly}
                                  onCheckedChange={setScaleUniformly}
                                />
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Label className="text-sm text-gray-500">
                                    Fit to screen
                                  </Label>
                                </div>
                                <Switch
                                  checked={fixedHeight}
                                  onCheckedChange={setFixedHeight}
                                />
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Design Section */}
              <AccordionItem value="design" className="border rounded-lg">
                <AccordionTrigger className="px-4">Design</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="flex items-center justify-between gap-2 pb-2">
                    <label htmlFor="background">Background</label>
                    <span>
                      <IoIosInformationCircleOutline className="text-gray-400 cursor-pointer" />
                    </span>
                  </div>
                  <div className="flex flex-col justify-between gap-2">
                    <label htmlFor="background-color">Color</label>
                    <div className="grid grid-cols-6 gap-2">
                      {/* First row: 6 solid colors */}
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-white hover:ring-2 ring-primary transition"
                        style={{ background: "#FFFFFF" }}
                        aria-label="White"
                      />
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-[#F87171] hover:ring-2 ring-primary transition"
                        style={{ background: "#F87171" }}
                        aria-label="Red"
                      />
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-[#FBBF24] hover:ring-2 ring-primary transition"
                        style={{ background: "#FBBF24" }}
                        aria-label="Yellow"
                      />
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-[#34D399] hover:ring-2 ring-primary transition"
                        style={{ background: "#34D399" }}
                        aria-label="Green"
                      />
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-[#60A5FA] hover:ring-2 ring-primary transition"
                        style={{ background: "#60A5FA" }}
                        aria-label="Blue"
                      />
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-[#A78BFA] hover:ring-2 ring-primary transition"
                        style={{ background: "#A78BFA" }}
                        aria-label="Purple"
                      />
                      {/* Second row: 5 solid colors + 1 gradient */}
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-[#F472B6] hover:ring-2 ring-primary transition"
                        style={{ background: "#F472B6" }}
                        aria-label="Pink"
                      />
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-[#FCD34D] hover:ring-2 ring-primary transition"
                        style={{ background: "#FCD34D" }}
                        aria-label="Gold"
                      />
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-[#4B5563] hover:ring-2 ring-primary transition"
                        style={{ background: "#4B5563" }}
                        aria-label="Gray"
                      />
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-[#10B981] hover:ring-2 ring-primary transition"
                        style={{ background: "#10B981" }}
                        aria-label="Emerald"
                      />
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-[#F59E42] hover:ring-2 ring-primary transition"
                        style={{ background: "#F59E42" }}
                        aria-label="Orange"
                      />
                      <button
                        className="w-7 h-7 rounded-md border border-gray-200 bg-gradient-to-r from-[#F87171] via-[#FBBF24] to-[#34D399] hover:ring-2 ring-primary transition"
                        style={{ background: "linear-gradient(to right, #F87171, #FBBF24, #34D399)" }}
                        aria-label="Gradient"
                      />
                    </div>
                  </div>
                  {/* Opacity */}
                  <div className="flex items-center justify-between gap-2 py-5">
                    <label htmlFor="opacity">Opacity</label>
                    <input type="number" min="1" max="100" step="1" placeholder="100%" className="border border-gray-200 rounded-md p-1 text-center py-1 px-1" />
                  </div>
                  <hr />
                  <div className="flex flex-col justify-between gap-2 pt-5">
                    <label htmlFor="media">Media</label>
                    <div className="flex items-center justify-center min-h-[200px] bg-primary/10 rounded-md pt-2 relative hover:text-primary">
                      <input type="file" className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0" />
                      <label htmlFor="media" className="cursor-pointer flex flex-col items-center justify-center gap-2">
                        <PlusCircle className="cursor-pointer" />
                        <span className="flex items-center gap-2">Add Video or image</span>
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Typography Section */}
              <AccordionItem value="typography" className="border rounded-lg">
                <AccordionTrigger className="px-4">Typography</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-6">
                    {/* Font Family */}
                    <div className="space-y-2">
                      <Label>Font Family</Label>
                      <Select defaultValue="inter">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select font" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inter">Inter</SelectItem>
                          <SelectItem value="roboto">Roboto</SelectItem>
                          <SelectItem value="open-sans">Open Sans</SelectItem>
                          <SelectItem value="poppins">Poppins</SelectItem>
                          <SelectItem value="montserrat">Montserrat</SelectItem>
                          <SelectItem value="lato">Lato</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Font Weight & Size */}
                    <div className="grid grid-cols-2 gap-4">
                      <Select defaultValue="400">
                        <SelectTrigger>
                          <SelectValue placeholder="Weight" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100">Thin</SelectItem>
                          <SelectItem value="200">Extra Light</SelectItem>
                          <SelectItem value="300">Light</SelectItem>
                          <SelectItem value="400">Regular</SelectItem>
                          <SelectItem value="500">Medium</SelectItem>
                          <SelectItem value="600">Semi Bold</SelectItem>
                          <SelectItem value="700">Bold</SelectItem>
                          <SelectItem value="800">Extra Bold</SelectItem>
                          <SelectItem value="900">Black</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select defaultValue="16">
                        <SelectTrigger>
                          <SelectValue placeholder="Size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12">12px</SelectItem>
                          <SelectItem value="14">14px</SelectItem>
                          <SelectItem value="16">16px</SelectItem>
                          <SelectItem value="18">18px</SelectItem>
                          <SelectItem value="20">20px</SelectItem>
                          <SelectItem value="24">24px</SelectItem>
                          <SelectItem value="30">30px</SelectItem>
                          <SelectItem value="36">36px</SelectItem>
                          <SelectItem value="48">48px</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Text Alignment */}
                    <div className="space-y-3">
                      <Label>Position</Label>
                      <div className="grid grid-cols-4 gap-2">
                        <button 
                          className="p-2 border rounded-lg hover:bg-gray-50 flex items-center justify-center"
                          title="Align Left"
                        >
                          <AlignLeft className="w-4 h-4" />
                        </button>
                        <button 
                          className="p-2 border rounded-lg hover:bg-gray-50 flex items-center justify-center"
                          title="Align Center"
                        >
                          <AlignCenter className="w-4 h-4" />
                        </button>
                        <button 
                          className="p-2 border rounded-lg hover:bg-gray-50 flex items-center justify-center"
                          title="Align Right"
                        >
                          <AlignRight className="w-4 h-4" />
                        </button>
                        <button 
                          className="p-2 border rounded-lg hover:bg-gray-50 flex items-center justify-center"
                          title="Justify"
                        >
                          <AlignJustify className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Layout Section */}
              <AccordionItem value="layout" className="border rounded-lg">
                <AccordionTrigger className="px-4">Layout</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-6">
                    {/* Padding Controls */}
                    <div className="space-y-4 pt-5">
                      <div className="flex items-center justify-between">
                        <Label>Padding</Label>
                        <Select defaultValue="px">
                          <SelectTrigger className="w-20 h-8 rounded-lg">
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="px">px</SelectItem>
                            <SelectItem value="rem">rem</SelectItem>
                            <SelectItem value="em">em</SelectItem>
                            <SelectItem value="%">%</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {/* Left & Right Padding */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Left</Label>
                          <Input type="number" placeholder="0" />
                        </div>
                        <div className="space-y-2">
                          <Label>Right</Label>
                          <Input type="number" placeholder="0" />
                        </div>
                      </div>

                      {/* Top & Bottom Padding */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Top</Label>
                          <Input type="number" placeholder="0" />
                        </div>
                        <div className="space-y-2">
                          <Label>Bottom</Label>
                          <Input type="number" placeholder="0" />
                        </div>
                      </div>
                    </div>

                    {/* Layout Options Grid */}
                    {/* <div className="space-y-3">
                      <Label>Layout Options</Label>
                      <div className="grid grid-cols-4 gap-3">
                        <button className="p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-center" title="Flex Row">
                          <Rows className="w-5 h-5" />
                        </button>
                        <button className="p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-center" title="Flex Column">
                          <Columns className="w-5 h-5" />
                        </button>
                        <button className="p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-center" title="Grid">
                          <LayoutGrid className="w-5 h-5" />
                        </button>
                        <button className="p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-center" title="List">
                          <LayoutList className="w-5 h-5" />
                        </button>
                        <button className="p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-center" title="Align Left">
                          <AlignLeft className="w-5 h-5" />
                        </button>
                        <button className="p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-center" title="Align Center">
                          <AlignCenter className="w-5 h-5" />
                        </button>
                        <button className="p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-center" title="Align Right">
                          <AlignRight className="w-5 h-5" />
                        </button>
                        <button className="p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-center" title="Justify">
                          <AlignJustify className="w-5 h-5" />
                        </button>
                      </div>
                    </div> */}
                    <LayoutSelector />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Anchor Section */}
              <AccordionItem value="anchor" className="border rounded-lg">
                <AccordionTrigger className="px-4">Anchor</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">Enable Anchor</span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#25C866]"></div>
                    </div>
                  </label>
                </AccordionContent>
              </AccordionItem>

              {/* Position Section */}
              <AccordionItem value="position" className="border rounded-lg">
                <AccordionTrigger className="px-4">Position</AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Position Type</span>
                    <Info className="w-4 h-4 text-muted-foreground cursor-pointer" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sticky" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="static">Static</SelectItem>
                      <SelectItem value="relative">Relative</SelectItem>
                      <SelectItem value="absolute">Absolute</SelectItem>
                      <SelectItem value="fixed">Fixed</SelectItem>
                      <SelectItem value="sticky">Sticky</SelectItem>
                      <SelectItem value="inherit">Inherit</SelectItem>
                      <SelectItem value="initial">Initial</SelectItem>
                      <SelectItem value="unset">Unset</SelectItem>
                    </SelectContent>
                  </Select>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="setup">
            <div className="flex items-center justify-between mb-2 mt-10">
              <span className="text-sm font-medium">Animation and Effect</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Add Movement in your site</span>
              <Info className="w-4 h-4 text-muted-foreground cursor-pointer" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className={`pb-8 ${isOpen ? "hidden" : "block"
        }`}>
        <div className="flex flex-col items-center border border-gray-200 rounded-lg px-2">
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <BiPaint className="w-5 h-5" />
            <span className="text-sm font-medium">Design</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 border-t border-gray-200 py-5 px-2">
            <MdOutlineAnimation className="w-5 h-5" />
            <span className="text-sm font-medium">Animation</span>
          </button>
        </div>
        {/* Content For Designing */}
        <div className="flex flex-col items-center rounded-lg px-2">
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <PiResizeThin className="w-5 h-5" />
            <span className="text-sm font-medium">Size</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <CiMobile3 className="w-5 h-5" />
            <span className="text-sm font-medium">Responsive</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <BiPaint className="w-5 h-5" />
            <span className="text-sm font-medium">Design</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <MdOutlineAnimation className="w-5 h-5" />
            <span className="text-sm font-medium">Typography</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <MdOutlineImage className="w-5 h-5" />
            <span className="text-sm font-medium">Media</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <MdOutlineImage className="w-5 h-5" />
            <span className="text-sm font-medium">Layout</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <MdOutlineImage className="w-5 h-5" />
            <span className="text-sm font-medium">Anchor</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <MdOutlineImage className="w-5 h-5" />
            <span className="text-sm font-medium">Position</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuilderSection;
