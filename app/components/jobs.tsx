"use client";
import React, { useEffect, useState } from "react";
import JobCard from "./card";
import { useAppSelector } from "../hooks/reduxHook";
import { selectJobs } from "../store/jobsSlice";
interface Data {
  id: number;
  title: string;
  location: string;
  salary: string;
  type: string;
}

interface Props {
  data: Data[];
}

const JobsSection: React.FC<Props> = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data || []);
  const filter = useAppSelector(selectJobs);

  useEffect(() => {
    setFilteredData(
      filter
        ? data?.filter(
            (job) =>
              filter?.type?.includes(job?.type) ||
              filter?.location === job?.location ||
              filter?.salary_range === job?.salary
          )
        : data
    );
  }, [filter]);

  return (
    <section className=" p-6 rounded-lg">
      <h1 className="text-3xl mb-6">{data.length} Jobs</h1>
      <div className="flex flex-col gap-6">
        {filteredData?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobsSection;
