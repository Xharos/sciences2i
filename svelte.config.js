import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import importAssets from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // Consult https://kit.svelte.dev/docs/integrations#preprocessors
        // for more information about preprocessors
        adapter: adapter()
    },

    preprocess: [
        importAssets(),
        preprocess({
            scss: {
                prependData: '@use "src/variables.scss" as *;',
            },
        }),
    ],
};

export default config;
