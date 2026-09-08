const checkForTests = () => {
    if (window.location.href == "https://potentiamod.github.io/scratch-gui") {
        const params = new URLSearchParams(window.location.href);
        params.append('livetest', '');
        window.location.href = `https://potentiamod.github.io/scratch-gui?${params.toString()}`;
    }
}

export default checkForTests;