const useFetchProjectById = () => {
    const url = 'https://projects-api-tcapizzi-sql.herokuapp.com/api/proyectos/';

    const fetchProject = async (id, setProject, setHandler) => {
        const response = await fetch(url + id);
        const res = await response.json()
        setProject(res.proyecto);
        setHandler(true)
    }
  return {
    fetchProject
  }
}

export default useFetchProjectById