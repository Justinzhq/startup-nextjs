import SectionTitle from "../Common/SectionTitle";
import SingleSolution from "./SingleSolution";
import solutionData from "./solutionData";

const Solution = () => {
  return (
    <section
      id="solution"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container space-y-4">
        <SectionTitle
          title="典型应用场景"
          paragraph=""
          mb="50px"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {solutionData.map((solution) => (
            <div key={solution.id} className="w-full">
              <SingleSolution solution={solution} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
