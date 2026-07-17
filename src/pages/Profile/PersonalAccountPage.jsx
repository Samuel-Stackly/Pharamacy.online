import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";

import AccountSidebar from "./components/AccountSidebar";
import FeedbackTab from "./components/FeedbackTab";
import OrdersTab from "./components/OrdersTab";
import PersonalDetailsForm from "./components/PersonalDetailsForm";

function PersonalAccountPage() {
    return (
        <section className="py-8">
            <Container className="max-w-[1400px]">
                <Breadcrumb
                    items={[
                        { label: "Home", path: "/" },
                        { label: "Personal account" },
                    ]}
                />

                <h1 className="mt-4 text-5xl font-bold text-[#24325B]">
                    Personal account
                </h1>

                <div className="mt-10 grid gap-12 xl:grid-cols-[280px_1fr]">
                    <AccountSidebar />

                    <div>
                        <PersonalDetailsForm />

                        <OrdersTab />

                        <FeedbackTab />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default PersonalAccountPage;