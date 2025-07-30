import Section from "../Section";
import FacultyCard from "./FacultyCard";

export default function FacultySection({ facultyMembers }) {
  return (
    <Section id="faculty" title="Faculty Members">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyMembers.map((member) => (
          <FacultyCard key={member?.id} {...member} />
        ))}
      </div>
    </Section>
  );
}
