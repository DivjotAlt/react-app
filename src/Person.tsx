export default function Person(props: any) {
  let member = props.data;
  return (
    <div className="w-64 bg-neutral-700 my-4 rounded-lg" key={member.name}>
      <p className="text-2xl first-letter:uppercase text-center">
        {member.name}
      </p>
      <img
        src={`/src/assets/people/${member.name}.jpg`}
        alt="user image"
        className="rounded-full"
      />
      <p>{member.roles.toString()}</p>
    </div>
  );
}
