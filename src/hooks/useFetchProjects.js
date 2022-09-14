import {useState} from 'react'

function useFetchProjects() {
    const [projects, setProjects] = useState();
    const url = 'https://projects-api-tcapizzi-sql.herokuapp.com/api/proyectos';

    async function getProyects(){
      const response = await fetch(url);
      const res = await response.json()
      return setProjects(res.data)
    }

  return {projects, getProyects}
}

export default useFetchProjects;