import React from "react";
import JobCard from "./card";
interface Data {
  id: number;
  title: string;
  body: string;
}

interface Props {
  data: Data[];
}

const JobsSection: React.FC<Props> =  ({ data }) => {
  return (
    <section className=" bg-white p-6 rounded-lg">
      <h1>{data.length} Jobs</h1>
      <div className="flex flex-col gap-6">
        {data.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};



export default JobsSection;
