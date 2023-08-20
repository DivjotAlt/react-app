import Person from "./Person";
import people from "./people";
function getMember(memberName: string): object {
  return people.filter((person) => {
    return person.name == memberName;
  })[0];
}

export default function Content() {
  return (
    <div className="my-4 mx-20 lg:mx-48">
      <div className="text-center text-3xl text-white font-bold">Members</div>
      <div className="grid justify-items-center grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 align-middle">
        {people.map((person) => {
          return <Person data={getMember(person.name)} key={person.phoneNo} />;
        })}
      </div>
    </div>
  );
}
