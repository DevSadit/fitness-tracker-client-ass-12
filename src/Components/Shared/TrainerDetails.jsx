import { Link, useLoaderData } from "react-router-dom";
import { format, parse } from "date-fns";
import image from "../../assets/beatrainer.jpg";
const TrainerDetails = () => {
  const trainerDatas = useLoaderData();
  const {
    _id,
    name,
    availableDay,
    availableTime,
    expertise,
    email,
    experience,
    category,
    bio,
    certification,
    pic,
  } = trainerDatas;


  function convertTo12HourFormatFunny(time) {
  const [hour, minute] = time.split(':');
  const period = hour >= 12 ? 'PM' : 'AM';
  const adjustedHour = hour % 12 || 12;

  return `${adjustedHour}:${minute} ${period}`;
}
  return (
    <div>
      {/* header */}
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-216px)] p-10 bg-[#caf0f8]">
        {/* heading */}
        <div className="w-full ">
          <p className="italic text-2xl font-normal">
            Meet Your {expertise} Coach
          </p>
          <h1 className="text-5xl font-semibold">
            Hi there, <br /> {"I'm"} {name}!
          </h1>
          <h4 className="my-10 text-2xl">Certifications</h4>
          {certification.map((crtificate) => (
            <h5 key={_id}>
              <ol className="list-disc ml-9">
                <li className="mb-4">
                  <p className="text-lg">{crtificate.value}</p>
                </li>
              </ol>
            </h5>
          ))}
          <div>
            <h4 className="my-10 text-2xl">Description</h4>
            <p className="">{bio}</p>
          </div>
        </div>
        {/* image */}
        <div className="">
          <img src={pic} className="w-full rounded-full h-96 " />
        </div>
      </div>

      {/* about */}
      <div className="bg-[#F2F2F2] gap-x-3 justify-between items-center flex md:flex-row flex-col p-10">
        <div className="md:w-1/2 lg:h-[600px] border-4 rounded-lg p-3 md:h-[700px] border-[#0fc050]  md:space-y-5 mt-8">
          <h1 className="text-4xl italic font-semibold">
            About Coach <br /> {name}
          </h1>
          {/* b1 */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-green-500 font-bold text-xl">
              Where {"I'm"} from & where I now call home
            </h3>
            <p className="italic text-lg">
              I was born in Pozzuoli, Italy and now live in Indiana.
            </p>
          </div>
          {/* b2 */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-green-500 font-bold text-xl">
              How I like to spend my free time
            </h3>
            <p className="italic text-lg">
              I really enjoy being outdoors (mountain climbing), reading,
              cooking for family and friends. I am a big foodie!
            </p>
          </div>
          {/* b3 */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-green-500 font-bold text-xl">
              My go-to workout
            </h3>
            <p className="italic text-lg">
              A kettlebell total body workout! It’ll leave you on the floor for
              at least 15 minutes afterward in glorious exhaustion.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:h-[700px] lg:h-[600px] border-4 rounded-lg p-3  border-[#0fc050] md:space-y-5 mt-8">
          <h1 className="text-4xl italic font-semibold">
            {name}
            {"'s training Slots"}
          </h1>
          <div className="mt-5 grid grid-cols-3 gap-4">
            {availableDay.map((day, i) => (
              <Link key={i} to={`/trainer-booked/${_id}`}>
                <div className="p-4 hover:bg-[#55dcf4] text-xl italic font-medium bg-[#CAF0F8] cursor-pointer rounded-lg mb-3">
                  <p>{convertTo12HourFormatFunny(availableTime[0])}</p>
                  <p>{day.value}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Be a Trainer */}
      <div
        className="hero min-h-[calc(100vh-216px)]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Be A Trainer</h1>
            <p className="mb-5">
              Become a fitness trainer with us and help clients achieve their
              wellness goals. Enjoy access to top-notch facilities, ongoing
              professional growth, and a supportive community. Transform lives
              with personalized training programs.
            </p>
            <Link to="/be-a-trainer">
              <button className="bg-gray-900 text-white px-7 py-4 hover:bg-gray-800">
                Be A Trainer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
