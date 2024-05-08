import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "gv7y171m",
    dataset: "production",
    title: "Sanity Studio Playground",
    apiVersion: "2024-05-06",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas},
});

export default config;