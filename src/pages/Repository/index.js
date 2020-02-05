import React, { useState, useEffect } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default function Repository(props) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async function callApi() {
      const repoName = decodeURIComponent(props.match.params.repository);
      const data = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: { state: 'open', per_page: 5 },
        }),
      ]);

      const [repoRequested, issuesRequested] = data;

      setRepository(repoRequested);
      setIssues(issuesRequested);
      setLoading(false);
    })();
  });

  return <h1>Repository</h1>;
}
