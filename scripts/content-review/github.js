import fetch from "node-fetch";

export async function githubRequest({ token, method, endpoint, body }) {
  const response = await fetch(`https://api.github.com${endpoint}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "content-review-scan-script",
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  });
  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(`GitHub API error ${response.status} for ${method} ${endpoint}: ${responseText}`);
  }
  return response.json();
}

export async function findExistingOpenIssueByKey({ token, repository, reviewKey }) {
  const searchQuery = [
    `repo:${repository}`,
    "is:issue",
    "is:open",
    "in:body",
    `\"${reviewKey}\"`
  ].join(" ");
  const result = await githubRequest({
    token,
    method: "GET",
    endpoint: `/search/issues?q=${encodeURIComponent(searchQuery)}`
  });
  return (result.items || []).length > 0;
}

export async function createIssue({ token, repository, issue }) {
  const [owner, repo] = repository.split("/");
  if (!owner || !repo) {
    throw new Error(`Invalid GITHUB_REPOSITORY value: ${repository}`);
  }
  return githubRequest({
    token,
    method: "POST",
    endpoint: `/repos/${owner}/${repo}/issues`,
    body: {
      title: issue.title,
      body: issue.body,
      labels: issue.labels
    }
  });
}
