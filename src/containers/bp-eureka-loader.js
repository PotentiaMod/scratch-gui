
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