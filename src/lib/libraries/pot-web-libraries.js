const webLibraries = {
    potentia: {
        getAssetURL: path => `https://raw.githubusercontent.com/PotentiaMod/assets/refs/heads/main${path}`,
        handleAssetLoad: async (path, handleUpload) => {
            try {
                const res = await fetch(`https://raw.githubusercontent.com/PotentiaMod/assets/refs/heads/main${path}`);
                const blob = await res.blob();
                return handleUpload(await blob.arrayBuffer(), blob.type);
            } catch (_) {
                // ignore
            }
        }
    }
};

export const getAssetURL = (library, path) => webLibraries[library]?.getAssetURL?.(path);

export const handleAssetLoad = async (library, path, handleUpload) =>
    await webLibraries[library]?.handleAssetLoad?.(path, handleUpload);
