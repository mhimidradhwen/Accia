import { EventCard } from "../components/EventCard";
import { HeadingTitle } from "../components/HeadingTitle";
import { Title } from "../components/Titre";

export function AllEventsPage() {
  return (
    <>
      <HeadingTitle title="Tous Les Evenements" />
      <div className="p-9 pt-0 pb-0 mb-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
          <EventCard
            title="Event Title"
            description="Lorem perspiciatis omnis modi, temporibus velit maxime animi aliquam iure eveniet dicta voluptas? Voluptatem, velit ea?
 "
            date="23-11-2024"
            hour="11h00"
          />
          <EventCard
            title="Event Title"
            description="Lorem perspiciatis omnis modi, temporibus velit maxime animi aliquam iure eveniet dicta voluptas? Voluptatem, velit ea?
 "
            date="23-11-2024"
            hour="11h00"
          />
          <EventCard
            title="Event Title"
            description="Lorem perspiciatis omnis modi, temporibus velit maxime animi aliquam iure eveniet dicta voluptas? Voluptatem, velit ea?
 "
            date="23-11-2024"
            hour="11h00"
          />{" "}
        </div>
      </div>
    </>
  );
}
