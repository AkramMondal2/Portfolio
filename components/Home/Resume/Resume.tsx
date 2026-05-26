import React from "react";
import { BsDatabase } from "react-icons/bs";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <section className="py-20" id="journey">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              My Work <span className="text-cyan-300">Experience</span>
            </h2>

            <div className="mt-10">
              <ResumeCard
                Icon={FaCodepen}
                role="WordPress Developer Intern"
                date="28/10/2024 – 28/04/2025 (6 months)"
                institute="Advnit Web Solutions , West Bengal "
              />
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              My <span className="text-cyan-300">Education</span>
            </h2>

            <div className="mt-10">
              <ResumeCard
                Icon={BiBadge}
                role="Bachelor of Computer Applications (BCA)"
                date="2016-2019"
                institute="The University of Burdwan"
              />

              <ResumeCard
                Icon={BiBadge}
                role="Master of Computer Applications (MCA)"
                date="2019-2022"
                institute="Maulana Abul Kalam Azad University of Technology"
              />

              <ResumeCard
                Icon={BiBadge}
                role="MERN Stack Certification"
                date="2025-2026"
                institute="Weavers Web Academy, Kolkata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
