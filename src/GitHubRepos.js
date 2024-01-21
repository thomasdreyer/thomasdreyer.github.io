// GitHubRepos.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubRepos = ({ organization }) => {
  const [pinnedRepos, setPinnedRepos] = useState([]);

  useEffect(() => {
    const apiUrl = `https://gh-pinned-repos.egoist.sh/?org=${organization}`;

    const fetchPinnedRepos = async () => {
      try {
        const response = await axios.get(apiUrl);

        setPinnedRepos(response.data);
      } catch (error) {
        console.error('Error fetching pinned GitHub repositories:', error);
      }
    };

    fetchPinnedRepos();
  }, [organization]);

  return (
    <div>
      <h2>Pinned Repositories for {organization}</h2>
      <ul>
        {pinnedRepos.map(repo => (
          <li key={repo.repo}>
            <a href={repo.link} target="_blank" rel="noopener noreferrer">
              {repo.repo}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;
