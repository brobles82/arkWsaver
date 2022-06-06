import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const PLUGINS = [resolve({ moduleDirectories: ["node_modules"] })];
const EXTERNAL = ["single-file-core"];

export default [{
	input: ["single-file-core/index.js"],
	output: [{
		file: "lib/single-file.js",
		format: "umd",
		name: "singlefile",
		plugins: [terser()]
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["single-file-core/processors/frame-tree/content/content-frame-tree.js"],
	output: [{
		file: "lib/single-file-frames.js",
		format: "umd",
		name: "singlefile",
		plugins: [terser()]
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["single-file-core/single-file-bootstrap.js"],
	output: [{
		file: "lib/single-file-bootstrap.js",
		format: "umd",
		name: "singlefileBootstrap",
		plugins: [terser()]
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["single-file-core/processors/hooks/content/content-hooks-web.js"],
	output: [{
		file: "lib/single-file-hooks.js",
		format: "iife",
		plugins: [terser()]
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["single-file-core/processors/hooks/content/content-hooks-frames-web.js"],
	output: [{
		file: "lib/single-file-hooks-frames.js",
		format: "iife",
		plugins: [terser()]
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["single-file-core/common/content-infobar-web.js"],
	output: [{
		file: "lib/single-file-infobar.js",
		format: "iife",
		plugins: [terser()]
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["src/common/ui/content/content-infobar.js"],
	output: [{
		file: "lib/single-file-extension-infobar.js",
		format: "umd",
		name: "infobar",
		plugins: [terser()]
	}]
}, {
	input: ["src/extension/core/content/content-bootstrap.js"],
	output: [{
		file: "lib/single-file-extension-bootstrap.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["src/extension/core/content/content-frames.js"],
	output: [{
		file: "lib/single-file-extension-frames.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["src/extension/index.js"],
	output: [{
		file: "lib/single-file-extension-core.js",
		format: "umd",
		name: "extension",
		plugins: [terser()]
	}]
}, {
	input: ["src/extension/core/content/content.js"],
	output: [{
		file: "lib/single-file-extension.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["src/extension/ui/content/content-ui-editor-init-web.js"],
	output: [{
		file: "lib/single-file-extension-editor-init.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["src/extension/ui/content/content-ui-editor-web.js"],
	output: [{
		file: "lib/single-file-extension-editor.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["src/extension/ui/content/content-ui-editor-helper-web"],
	output: [{
		file: "lib/single-file-extension-editor-helper.js",
		format: "umd",
		name: "singlefile",
		plugins: [terser()]
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["src/extension/lib/single-file/browser-polyfill/chrome-browser-polyfill.js"],
	output: [{
		file: "lib/chrome-browser-polyfill.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["src/extension/core/bg/index.js"],
	output: [{
		file: "lib/single-file-extension-background.js",
		format: "iife",
		plugins: [terser()]
	}]
}, {
	input: ["src/extension/lib/single-file/background.js"],
	output: [{
		file: "lib/single-file-background.js",
		format: "iife",
		plugins: [terser()]
	}]
}];