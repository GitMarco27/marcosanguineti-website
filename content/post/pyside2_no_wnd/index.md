---
title: PySide2 (Apple Silicon - x86 with Rosetta2) does not show main window
subtitle: Quick fix of a common PySide2 bug

# Summary for listings and search engines
summary: Often, when working with PySide2 on macOS Monterey with Apple Silicon, the main window is not shown, even though the execution of our python code does not seem to give any problems and an icon representing the interface itself appears.

# Link this post with a project
projects:
  - python_coding

# Date published
date: '2022-10-24T00:00:00Z'

# Date updated
lastmod: '2022-10-24T00:00:00Z'

# Is this an unpublished draft?
draft: false

# Show this page in the Featured widget?
featured: false

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'PySide2 does not show main window'
  focal_point: ''
  placement: 2
  preview_only: false

authors:
  - admin

tags:
  - PySide2
  - Macbook
  - Apple Silicon
  - M1
  - Python

categories:
  - Technology
  - PyQt
  - PySide
---

## Overview

Often, when working with PySide2 on macOS Monterey with Apple Silicon, the main window is not shown, even though the execution of our python code does not seem to give any problems and an icon representing the interface itself appears.

I'm working with the following setup, but this solution might be extented to different cases:

  - Apple Silicon M1 (Macbook Pro 2020 13 inches)
  - macOS Monterey 12.6
  - x86 Miniconda installation
  - python3.9
  - PySide2 from conda-forge 

When this happens, you'll have to shut down your application. Luckily, a quick fix to this bug exists and is as simple as changing a global variable:

```python
import os
os.environ['QT_MAC_WANTS_LAYER'] = '1'
```

You'll have to do so in the main script of your application.
