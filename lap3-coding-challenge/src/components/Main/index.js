
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Main.css'

function RepoMain() {
  const [username, setUsername] = useState("github")
  const [warning, setWarning] = useState()
  const [userData, setUserData] = useState([])
  const [repos, setRepos] = useState([])
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const state = useLocation()

  useEffect(() => {
    if (state.state == 'null' || !state.state) {
      setUsername('github')
    } else {
      setUsername(state.state);
    }
  }, [])


  useEffect(() => {
    async function fetchData() {
      const user = await fetch(`https://api.github.com/users/${username}/repos?page=${page}`)
      const data = await user.json();
      if (data.length) {
        setRepos(data)
        setWarning("")
      }
      else {
        setRepos([])
        setWarning(`No account with the username ${username} has found`)
      }
    }

    async function fetchUserData() {

      const user = await fetch(`https://api.github.com/users/${username}`)
      const data = await user.json();

      setUserData(data)
    }

    fetchData()
    fetchUserData()

  }, [username, page])

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target.user.value)
  }

  const getNextPage = () =>{
    if(page < Math.ceil(userData.public_repos / 30))
      setPage(page=>page+1)
  }

  const getPrevPage = () => {
    if (page > 1)
      setPage(page => page - 1)
  }

  const repositories = repos.map((repo, i) => {
    return (
      <div key={i}>
        <h2>{repo.name}</h2>
        <button onClick={() => navigate(`/${username}/${repo.id}`)}>Repo page</button>
      </div>
    );
  })

  return (
    <div className="RepoMain">
      <form onSubmit={handleSubmit}>
        <input name="user" required placeholder="Enter GitHub username" />
        <input type="submit" />
      </form>
      {warning}

      {Object.keys(userData).length && !warning ?
        <div className="user-info">
          <h1>{userData.login}</h1>
          <img src={userData.avatar_url} alt='avatar' />
        </div>
        :
        null
      }

      <p>{userData.bio}</p>
      {
        repos.length ?
          <p>This user has {userData.public_repos} public repositories</p>
          :
          null
      }

      <div className="inner-repo">
        {repositories}
      </div>

      {
        repos.length ?
          <div>
            <p>{page}/{Math.ceil(userData.public_repos / 30)}</p>
            <button onClick={getPrevPage}>Prev</button>
            <button onClick={getNextPage}>Next</button>
          </div>
          :
          null
      }

      
    </div>
  );
}

export default RepoMain;
