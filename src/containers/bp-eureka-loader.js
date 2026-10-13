// this was made by dumo i yoinked it from https://github.com/thepython555/ba4x-player

let injected = false;

const load = () => {
    if (injected) return;
    injected = true;

    const script = document.createElement('script');
    script.src = `https://potentiamod.github.io/Eureka-11.js`;

    document.head.appendChild(script);
};

export default {
    load
}