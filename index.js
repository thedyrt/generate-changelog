const core = require('@actions/core')
const github = require('@actions/github')
const { execSync } = require('child_process')

try {
  const baseRef = core.getInput('base');
  const headRef = core.getInput('head');
  console.log(`Generating changelog for ${baseRef}..${headRef}`);
  const logArgs = core.getInput('log-args');
  const gitCommand = `git log --no-merges --no-decorate --topo-order --reverse --format='* %s' ${logArgs} ${baseRef}..${headRef}`;
  console.log(`Using git log command: ${gitCommand}`);
  const changelog = execSync(gitCommand).toString().replace(/'/g, "\\'").replace(/"/g, "\\\"").replace(/\n/g, '\\n');
  console.log(`The changelog: ${changelog}`);
  core.setOutput('changelog', changelog);
} catch (err) {
  core.setFailed(err.message);
}
