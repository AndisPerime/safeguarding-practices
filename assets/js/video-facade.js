document.addEventListener('DOMContentLoaded', () => {
    const videoFacades = document.querySelectorAll('.video-facade');

    videoFacades.forEach(facade => {
        const handlePlay = () => {
            const videoId = facade.dataset.videoId;
            const iframe = document.createElement('iframe');
            
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('title', 'YouTube video player');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            
            facade.parentNode.replaceChild(iframe, facade);
        };

        // Handle both click and keyboard events
        facade.addEventListener('click', handlePlay);
        facade.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                handlePlay();
            }
        });
    });
});
