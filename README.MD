# Setting up Deno

Since it's my first time using Deno, I'm writing down the steps to make it work here.

## Installing Deno

Download and install Deno from https://deno.land/#installation

You can now run .js and .ts files by writing "deno run \*.js" in the console.

## Enabling Deno intellisense

_Visual Studio code_

- Download extension denoland.vscode-deno
- Enable Deno in the project by configuring ./.vscode/settings.json

## Adding Deno executables to path

export PATH="$HOME/.deno/bin:$PATH"

## Deno plugins used

```
Velociraptor (Script runner)

Install: deno install -qA -n vr https://deno.land/x/velociraptor/cli.ts

How to use: Type "vr start" to run start script in "scripts.yaml".

Note: Had problems adding "vr" to path. Had to manually add 'export PATH="$HOME/.deno/bin:$PATH"' to my ~/.zshrc# deno_graphql_playground```