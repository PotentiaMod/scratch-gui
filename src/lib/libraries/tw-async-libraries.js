const asyncLibrary = callback => {
    let data = null;
    return () => {
        if (data) return data;
        return callback()
            .then(mod => (data = mod.default));
    };
};

export const getBackdropLibrary = asyncLibrary(
    () => import(/* webpackChunkName: "library-backdrops" */ './backdrops.json'),
    () => import(/* webpackChunkName: "pot-library-backdrops" */ './pot-assets/generated-backdrops.json')
);
export const getCostumeLibrary = asyncLibrary(
    () => import(/* webpackChunkName: "library-costumes" */ './costumes.json'),
	() => import(/* webpackChunkName: "pot-library-costumes" */ './pot-assets/generated-costumes.json')
);        
export const getSoundLibrary = asyncLibrary(
    () => import(/* webpackChunkName: "library-sounds" */ './sounds.json'),
	() => import(/* webpackChunkName: "pot-library-sounds" */ './pot-assets/generated-sounds.json')
);
export const getSpriteLibrary = asyncLibrary(
    () => import(/* webpackChunkName: "library-sprites" */ './sprites.json')
);
