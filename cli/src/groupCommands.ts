import { program } from "commander";
import { snippets } from "./commands/snippets.js";
import { absord } from "./commands/absorb.js";


program.addCommand(snippets);
program.addCommand(absord);
