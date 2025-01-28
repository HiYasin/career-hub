
const Faq = () => {
    return (
        <div className="mx-auto w-fit">
            <div className="join join-vertical bg-base-100">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title font-semibold">What services does Career Hub provide?</div>
                    <div className="collapse-content text-sm">Career Hub offers personalized career advice, guidance, and resources to help users explore career paths, set goals, and make informed professional decisions.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">How does Career Hub personalize career guidance?</div>
                    <div className="collapse-content text-sm">Career Hub uses user input and data to offer tailored advice, career recommendations, and resources based on individual interests, skills, and goals.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Is Career Hub free to use?</div>
                    <div className="collapse-content text-sm">Career Hub provides free basic services, with additional premium features available for users seeking more in-depth guidance and exclusive resources.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">How is my data secured on Career Hub?</div>
                    <div className="collapse-content text-sm">Career Hub uses Firebase for secure user authentication and data management, ensuring your personal information is protected and handled responsibly.</div>
                </div>
            </div>
        </div>
    );
};

export default Faq;