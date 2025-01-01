### Getting Started

 The first step is to run the development server.

### Installation 


*** 1- Install bun using the following command: ***

```bash
 npm i bun 
```

***  2- Install bun using the following curl command on Linux and macOS: *** 

``` Linux & macOS ```
```bash
 curl -fsSL https://bun.sh/install | bash
 ```

*** 3-Install bun using the following powershell command on Windows: ***

```Windows```

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

*** 4-Create a Next.js app in the current directory using the following command: ***
```bash
bunx create next-app@latest .
```

*** Start the development server using one of the following commands: ***

```bash
bun run dev
```

### Root Directory Structure: ###

The image depicts the root directory of a Next.js project. This structure is typical for projects created using ``` create-next-app. ```

### Key Components: ###

``` app```: This directory houses the core components of your Next.js application.

```components```: Contains reusable UI components like Configurator.jsx, Header.jsx, and Preview.jsx. These components can be imported and used throughout your application.

```lib```: May contain utility functions or data structures that are shared across different parts of the application.
imageMap.js and swatch.js are likely files related to image handling and color swatches, respectively.

```public```: This directory holds static assets that are directly accessible via their URL.

```images```: Contains images used within your application.

```swatch```: Might contain color swatch files or related data.

```wheels```: Could contain images or data related to different wheel options.

```prettierrc```: Configuration file for the Prettier code formatter.

carimage.png, file.svg, globe.svg, next.svg, vercel.svg, window.svg: These are likely SVG images used in the application.


### Configuration and Build Files: ###

```gitignore```: Specifies files and directories that should be excluded from Git version control.

```bun.lockb```: A file used by the Bun package manager to manage dependencies.

```eslint.config.mjs```: Configuration file for ESLint, a JavaScript linting tool.

```jsconfig.json```: Configuration file for JavaScript language features.

```next.config.mjs```: Configuration file for Next.js.

```postcss.config.mjs```: Configuration file for PostCSS, a CSS transformation tool.

```package.json```: The core file of the project, containing metadata, dependencies, and scripts.

```README.md```: A file containing information about the project, such as its purpose, installation instructions, and usage.


Note: The presence and contents of files and directories can vary depending on the specific project and its requirements.