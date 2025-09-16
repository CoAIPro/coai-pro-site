import { useState } from "react";
import CreatableSelect from 'react-select/creatable';

const options = [
  { value: 'hero', label: 'Hero Section' },
  { value: 'navbar', label: 'Navbar' },
  { value: 'footer', label: 'Footer' },
  { value: 'gallery', label: 'Gallery' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'testimonial', label: 'Testimonials' },
  { value: 'contact', label: 'Contact Form' },
];
const PublishSite = () => {
  const [selected, setSelected] = useState([]);

  const handleChange = (newValue) => {
    setSelected(newValue || []);
  };
  return (
    <div className="max-w-4xl mx-auto rounded-lg py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-5xl font-medium">Publish your Site</h2>
        <p className="text-textGray">Make your content live instantly and reach your audience in real-time</p>
      </div>
      <div className="form-controls">
        <label htmlFor="#">Title <span>(Required)</span></label>
        <input type="text" placeholder="Add a title" />
      </div>
      <div className="form-controls mt-4">
        <label htmlFor="#">Description <span>(Required)</span></label>
        <textarea name="description" id="description" placeholder="Add Description"></textarea>
      </div>
      <div className="mt-4">
        <label htmlFor="#" className="text-dark dark:text-light mb-3 block">SEO Meta Tags</label>
        <div>
          <CreatableSelect
            isMulti
            options={options}
            value={selected}
            onChange={handleChange}
            placeholder="Search or add section..."
            className="react-select-container"
            classNamePrefix="react-select"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: '#d1d5db',
                boxShadow: 'none',
                minHeight: '40px',
                paddingLeft: '4px',
              }),
              multiValue: (base) => ({
                ...base,
                backgroundColor: '#e0f2fe',
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: '#0369a1',
              }),
              multiValueRemove: (base) => ({
                ...base,
                color: '#ef4444',
                ':hover': {
                  backgroundColor: '#fecaca',
                  color: '#991b1b',
                },
              }),
            }}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="#" className="text-dark dark:text-light">Action</label>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div class="flex items-center ps-4 py-3 rounded-xl bg-primary-50">
            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-5 h-5 accent-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 outline-none" />
            <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-textCheck dark:text-gray-300">Publish to a  CoAI.Pro URL</label>
          </div>
          <div class="flex items-center ps-4 py-3 rounded-xl bg-primary-50">
            <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-5 h-5 accent-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 outline-none" />
            <label for="bordered-radio-2" class="w-full py-4 ms-2 text-sm font-medium text-textCheck dark:text-gray-300">Save as a online Draft</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublishSite