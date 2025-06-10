import { TemplateGrid } from "../components/TemplateGrid";

export default function Templates() {
  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Templates</h1>
        <p className="text-gray-600">
          Choose from our collection of professional templates or access your
          custom designs
        </p>
      </div>

      <TemplateGrid type="recommended" />

      <div className="border-t border-gray-200 pt-8">
        <TemplateGrid type="my-templates" />
      </div>
    </div>
  );
}
