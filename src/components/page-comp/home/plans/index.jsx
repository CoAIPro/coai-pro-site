import Pricing from "@/components/reuse/pricing";


const Plans = () => {

    return (
        <section className="py-10 lg:py-20">
            <div className="container mx-auto">
                <h2 className="section-title">Choose a plan & start building your website</h2>
                <p className="section-subtitle">No code. No delays. Just pick a plan and launch with CoAI.Pro</p>
                <Pricing />
            </div>
        </section>
    );
};

export default Plans;