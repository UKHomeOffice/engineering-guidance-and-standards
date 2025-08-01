import {join} from "node:path";
import {readFile} from "node:fs/promises"
import {fileURLToPath} from "node:url";
import frontMatter from 'gray-matter';

const fromPage = async (name) => {
    const filePath = join(fileURLToPath(import.meta.url), '..', '..', 'docs', `${name}.md`);
    const contents = await readFile(filePath);
    const data = frontMatter(contents.toString()).data;

    return {
        url: `/${name}`,
        id: name,
        data,
    }
}

// noinspection JSUnusedGlobalSymbols - included dynamically by 11ty
export default async () => {
    return [
            await fromPage('principles'),
            await fromPage('standards'),
            await fromPage('patterns'),
    ];
}
