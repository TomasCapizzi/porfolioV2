import { projectsList } from "../projectsList";

const useFetchProjectById = () => {
    //const url = 'https://projects-api-tcapizzi-sql.herokuapp.com/api/proyectos/';

    async function fetchProject(id, setProject, setHandler) {
    //const response = await fetch(url + id);
    //  const res = await response.json()
    // setProject(res.proyecto);
    console.log(projectsList.filter(proj => proj.id = id));
    setProject(projectsList.filter(proj => proj.id = id));
    setHandler(true);

  }
  return {
    fetchProject
  }
}

export default useFetchProjectById