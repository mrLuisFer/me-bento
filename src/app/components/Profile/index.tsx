const imgProfile = "https://avatars.githubusercontent.com/u/65029792";
export default function Profile() {
  return (
    <section className="grid grid-rows-[auto_1fr]">
      <div className="flex flex-col gap-6">
        <div className="h-52 w-52 rounded-full bg-neutral-900">
          <img src={imgProfile} alt="Luis Alvarez Github Profile" />
        </div>
        <h1 className="text-4xl font-bold">Luis Alvarez</h1>
      </div>
    </section>
  );
}
