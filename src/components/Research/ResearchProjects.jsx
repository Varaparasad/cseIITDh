import useResearchProjectsData from "../../hooks/useResearchProjectsData";
import GlobalError from "../GlobalError";
import Loading from "../Loading";

function ResearchProjectsData() {
  const {
    data: researchProjectData,
    isLoading: isLoadingResearchProject,
    isError: isErrorResearchProject,
    error: errorResearchProject,
  } = useResearchProjectsData();

  if (isLoadingResearchProject) return <Loading />;
  if (isErrorResearchProject)
    return <GlobalError error={errorResearchProject} />;

  const filterType = (type, rawData) =>
    rawData?.filter(
      (item) => item?.Type?.toLowerCase() === type?.toLowerCase()
    );

  const sponsoredProjects = filterType("RnD", researchProjectData);
  const consultancyProjects = filterType(
    "Consultancy/Testing",
    researchProjectData
  );

  return (
    <>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 text-center">
          <h2 class="section-title mt-6">
            R&D Sponsored Projects in the Past Five Years
          </h2>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-bordered table-striped table-hover min-w-full">
          <thead class="thead-dark">
            <tr>
              <th class="border border-gray-400 px-4 py-2">S. No.</th>
              <th class="border border-gray-400 px-4 py-2">Project Title</th>
              <th class="border border-gray-400 px-4 py-2">Project Area</th>
              <th class="border border-gray-400 px-4 py-2">Duration</th>
              <th class="border border-gray-400 px-4 py-2">PI</th>
              <th class="border border-gray-400 px-4 py-2">Co-PI</th>
              <th class="border border-gray-400 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {sponsoredProjects.map((project, idx) => (
              <tr key={project.id}>
                <td class="border border-gray-400 px-4 py-2">{idx + 1}</td>
                <td class="border border-gray-400 px-4 py-2">
                  {project.Title}
                </td>
                <td class="border border-gray-400 px-4 py-2">{project.Area}</td>
                <td class="border border-gray-400 px-4 py-2">
                  {project.Duration}
                </td>
                <td class="border border-gray-400 px-4 py-2">
                  {project.PI || "-"}
                </td>
                <td class="border border-gray-400 px-4 py-2">
                  {project.CoPI || "-"}
                </td>
                <td class="border border-gray-400 px-4 py-2">
                  {project.CurrentStatus || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 text-center">
          <h2 class="section-title mt-14 ">
            Consultancy/Testing Projects in the past five years
          </h2>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="table table-bordered table-striped min-w-full">
          <thead class="thead-dark">
            <tr>
              <th class="border border-gray-400 px-4 py-2">S. No.</th>
              <th class="border border-gray-400 px-4 py-2">Title</th>
              <th class="border border-gray-400 px-4 py-2">Area</th>
              <th class="border border-gray-400 px-4 py-2">Duration</th>
              <th class="border border-gray-400 px-4 py-2">PI</th>
              <th class="border border-gray-400 px-4 py-2">Co-PI</th>
              <th class="border border-gray-400 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {consultancyProjects.map((project, idx) => (
              <tr key={project.id}>
                <td class="border border-gray-400 px-4 py-2">{idx + 1}</td>
                <td class="border border-gray-400 px-4 py-2">
                  {project.Title}
                </td>
                <td class="border border-gray-400 px-4 py-2">{project.Area}</td>
                <td class="border border-gray-400 px-4 py-2">
                  {project.Duration}
                </td>
                <td class="border border-gray-400 px-4 py-2">
                  {project.PI || "-"}
                </td>
                <td class="border border-gray-400 px-4 py-2">
                  {project.CoPI || "-"}
                </td>
                <td class="border border-gray-400 px-4 py-2">
                  {project.CurrentStatus || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function ResearchProjects() {
  return (
    <section id="research-projects" title="Research-Projects">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Research-Projects
        </h3>

        <ResearchProjectsData />
      </div>
    </section>
  );
}
