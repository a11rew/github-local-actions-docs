---
title: GitHub Local Actions
description: Run your GitHub Actions locally!
banner:
  content: |
    ✨ If you find this extension useful, please consider starring the <a href="https://github.com/SanjulaGanepola/github-local-actions">GitHub repository</a> ✨
---

<div style="display: flex; gap: 10px;">
  <a href="https://marketplace.visualstudio.com/items?itemName=SanjulaGanepola.github-local-actions">
    <img src="https://img.shields.io/visual-studio-marketplace/v/SanjulaGanepola.github-local-actions" alt="Version">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=SanjulaGanepola.github-local-actions">
    <img src="https://img.shields.io/visual-studio-marketplace/i/SanjulaGanepola.github-local-actions" alt="Installs">
  </a>
</div>

<img src="/github-local-actions/icon.png" align="right" width="128" height="128">

Run your GitHub Actions locally with the power of the [GitHub Local Actions](https://marketplace.visualstudio.com/items?itemName=SanjulaGanepola.github-local-actions) Visual Studio Code extension! Say goodbye to the hassle of committing and pushing changes every time you need to test a workflow. This extension lets you quickly and efficiently run your workflows locally, leveraging the [nektos/act](https://github.com/nektos/act) CLI tool. Enjoy a seamless experience with an interface designed to feel as familiar as the official [GitHub Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions) extension.

* 🚀 **Run Workflows/Jobs**: Run entire workflows or specific jobs locally without leaving your editor.
* ⚡ **Trigger Events**: Trigger standard [GitHub events](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows) to run multiple workflows.
* 📖 **View Workflow Run History**: Track and investigate past workflow logs.
* ⚙️ **Manage Workflow Settings**: Define secrets, variables, inputs, and runners to be used when executing workflows.

![GitHub Local Actions](/github-local-actions/github-local-actions.gif)

## Why Run GitHub Actions Locally?

Ever wondered why you might want to run GitHub Actions locally? As summarized perfectly in the [nektos/act documentation](https://nektosact.com/#introduction), there are two major advantages:

* ⏳ **Fast Feedback**: Developers, especially newer ones, often end up pushing unnecessary commits to their GitHub repository just to test changes in their `.github/workflows` files. These commit-push cycles can be easily avoided by running these workflows locally instead, allowing them to get feedback much faster.
* 🛠️ **Local Task Runner**: Running workflows locally can be used to minimize repetitive tasks in your development flow. By being able to run the same actions you do on GitHub but locally, you can ensure consistency across both environments while streamlining your development process.