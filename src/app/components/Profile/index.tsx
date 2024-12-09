import Img from "../Img";

const imgProfile = "https://avatars.githubusercontent.com/u/65029792";
export default function Profile() {
  return (
    <section className="flex w-full flex-col items-start gap-3 pb-0 pt-8 lg:py-8">
      <div className="flex w-full items-center justify-center rounded-full">
        <Img
          src={imgProfile}
          alt="Luis Alvarez Github Profile"
          className="w-60 rounded-full transition hover:shadow-lg md:h-44 md:w-44 lg:h-52 lg:w-52 lg:shadow-md"
        />
      </div>
      <div className="flex w-full justify-center">
        <h1 className="text-center text-4xl font-bold">Luis Alvarez</h1>
      </div>
    </section>
  );
}
