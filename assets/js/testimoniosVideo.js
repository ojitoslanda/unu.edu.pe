document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.testimonio-card');

  cards.forEach(card => {
    const videoSrc = card.getAttribute('data-video');

    const showVideoFullscreen = () => {
      const video = document.createElement('video');
      video.src = videoSrc;
      video.controls = true;
      video.autoplay = true;
      video.classList.add('video-testimonio');

      document.body.appendChild(video);
      
      const requestFullScreen = video.requestFullscreen || video.webkitRequestFullscreen || video.msRequestFullscreen;
      if (requestFullScreen) {
        requestFullScreen.call(video);
      }

      video.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          video.remove();
        }
      });

      video.addEventListener('webkitendfullscreen', () => {
        video.remove();
      });
    };

    card.addEventListener('click', showVideoFullscreen);
  });
});
