let pipVideo = null;
let pipStream = null;
let pipFrameInterval = null;

const cleanupStagePiP = () => {
    if (pipFrameInterval !== null) {
        window.clearInterval(pipFrameInterval);
        pipFrameInterval = null;
    }

    if (pipStream) {
        pipStream.getTracks().forEach(track => track.stop());
        pipStream = null;
    }

    if (pipVideo) {
        pipVideo.srcObject = null;
        pipVideo = null;
    }
};

const openStagePiP = async vm => {
    const canvas = vm && vm.renderer && vm.renderer.canvas;

    if (!canvas) {
        console.error('Scratch stage canvas not found.');
        return;
    }

    if (
        !document.pictureInPictureEnabled ||
        typeof canvas.captureStream !== 'function'
    ) {
        console.error('Picture-in-Picture is not supported.');
        return;
    }

    try {
        // Close an existing PiP window first.
        if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
        }

        cleanupStagePiP();

        // Use manual frame requests.
        pipStream = canvas.captureStream(0);

        const track = pipStream.getVideoTracks()[0];

        if (!track) {
            throw new Error('Could not create a PiP video track.');
        }

        pipVideo = document.createElement('video');
        pipVideo.srcObject = pipStream;
        pipVideo.muted = true;
        pipVideo.autoplay = true;
        pipVideo.playsInline = true;

        await pipVideo.play();
        await pipVideo.requestPictureInPicture();

        // Redraw the renderer and request a captured frame.
        pipFrameInterval = window.setInterval(() => {
            if (
                !pipVideo ||
                document.pictureInPictureElement !== pipVideo
            ) {
                return;
            }

            try {
                if (
                    vm.renderer &&
                    typeof vm.renderer.draw === 'function'
                ) {
                    vm.renderer.draw();
                }

                if (typeof track.requestFrame === 'function') {
                    track.requestFrame();
                }
            } catch (error) {
                console.warn('PiP frame update failed:', error);
            }
        }, 1000 / 30);

        pipVideo.addEventListener('leavepictureinpicture', () => {
            cleanupStagePiP();
        }, {once: true});
    } catch (error) {
        console.error('Could not open stage PiP:', error);
        cleanupStagePiP();
    }
};

export default openStagePiP;