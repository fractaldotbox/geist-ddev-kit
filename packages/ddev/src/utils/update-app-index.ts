import path from "path";
import { getRegistryItem } from "@/src/registry/api";
import type { Config } from "@/src/utils/get-config";
import fs from "fs/promises";

export async function updateAppIndex(component: string, config: Config) {
	const indexPath = path.join(config.resolvedPaths.cwd, "app/page.tsx");

	if (!(await fs.stat(indexPath)).isFile()) {
		return;
	}

	const registryItem = await getRegistryItem(component, config.style);
	if (
		!registryItem?.meta?.importSpecifier ||
		!registryItem?.meta?.moduleSpecifier
	) {
		return;
	}

	// Overwrite the index file with the new import.
	const content = `import { ${registryItem?.meta?.importSpecifier} } from "${registryItem.meta.moduleSpecifier}"\n\nexport default function Page() {\n  return <${registryItem?.meta?.importSpecifier} />\n}`;
	await fs.writeFile(indexPath, content, "utf8");
}
