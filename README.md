# Generate Changelog javascript action

This action generates a changelog suitable for use with creating a pull request using the output of `git log`.

## Inputs

### `base`

The base ref to compare against when running `git log <base>..<head>`. Default `"origin/master"`.

### `head`

**Required** The head ref to compare against when running `git log <base>..<head>`.

### `log-args`

Additional arguments to pass to `git log`.

## Outputs

### `changelog`

The sanitized output of `git log --no-merges --no-decorate --topo-order --reverse --format='* %s' <log-args> <base>..<head>`.

## Example usage

```yaml
uses: thedyrt/generate-changelog@v0.1.0
with:
  base: 'origin/master'
  head: 'origin/develop'
  log-args: '--author=@thedyrt.com'
```
