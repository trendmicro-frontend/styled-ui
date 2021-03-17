### 🚧 Contributing to Tonic UI 🚧 
Looking to contribute something to Tonic UI? Here's how you can help.
Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.
Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

####The [Phases](#Phases) part of this contribution guide is only for Trend Micro’s internal compliance. If you are a Trend Micro engineer, please be sure to read it.

## Using the issue tracker
The [issue tracker](https://github.com/trendmicro-frontend/styled-ui/issues) is
the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests)
and [submitting pull requests](#pull-requests), but please respect the following
restrictions:

* Please **do not** use the issue tracker for personal support requests.
  [Slack](https://bootstrap-slack.herokuapp.com/) or [IRC](README.md#community) are better places to get help.

* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.

* Please **do not** post comments consisting solely of "+1" or ":thumbsup:".
  Use [GitHub's "reactions" feature](https://blog.github.com/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)
  instead. We reserve the right to delete comments which violate this rule.

## Issues and labels
Our bug tracker utilizes several labels to help organize and identify issues. Here's what they represent and how we use them:

- `confirmed` - Issues that have been confirmed with a reduced test case and identify a bug in Tonic UI.
- `documentation` - Issues for improving or updating our documentation.
- `examples` - Issues involving the example templates included in our docs.
- `feature (enhancement)` - Issues asking for a new feature to be added, or an existing one to be extended or modified. New features require a minor version bump (e.g., `v3.0.0` to `v3.1.0`).
- `build (ci/cd)` - Issues with our build system, which is used to run all our tests, concatenate and compile source files, and more.
- `help wanted` - Issues we need or would love help from the community to resolve.
- `duplicate` - Issue or pull request already exists.

For a complete look at our labels, see the [project labels page](https://github.com/trendmicro-frontend/styled-ui/labels).

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

0. **[Validate your HTML](https://html5.validator.nu/)** to ensure your
   problem isn't caused by a simple error in your own code.

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` (or `@trendmicro/styled-ui-theme@0.11.0` version) in the repository.
   
3. **Isolate the problem** &mdash; ideally create a [reduced test
   case](https://css-tricks.com/reduced-test-cases/) and a live example.
   
A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? Do other browsers show the bug differently? What
would you expect to be the outcome? All these details will help people to fix
any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any **significant** pull request (e.g.
implementing features, refactoring code),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project. For trivial
things, or things that don't require a lot of your time, you can go ahead and
make a PR.

## Phases
We divide the Tonic UI contribution into two different periods:

### 1. Component development in the project:

* During the project development, if there is a component or function that does not exist in the [Tonic UI](https://trendmicro-frontend.github.io/styled-ui/getting-started), please implement it by the project developer.

* Tonic UI is developed based on technologies such as [React](https://reactjs.org/), [React Hooks](https://reactjs.org/docs/hooks-intro.html), [Styled System](https://styled-system.com/), [Styled Components](https://styled-components.com/), and [Emotion](https://emotion.sh/docs/introduction), so familiarity with these technologies is necessary.

* For the trace ticket when developing the component, please create it in the Jira system of the own project, and select the `vt-fed` tag in the TM Team field for effort management of contributions.
