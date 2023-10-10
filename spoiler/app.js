'use strict';
const toggleSpoiler = getSpoilerToggleCallback('#spoiler', '#myBtn');
document.addEventListener('click', toggleSpoiler);
document.addEventListener('keyup', toggleSpoiler);

function getSpoilerToggleCallback(spoilerSelector, buttonSelector) {
  const spoiler = document.querySelector(spoilerSelector);
  let isClosed = spoiler?.classList?.contains('closed');
  const hideSpoiler = () => {
    spoiler?.classList?.add('closed');
    isClosed = true;
  };
  const showSpoiler = () => {
    spoiler?.classList?.remove('closed');
    isClosed = false;
  };
  const toggleSpoiler = () => {
    if (isClosed) {
      showSpoiler();
    } else {
      hideSpoiler();
    }
  };
  return (event) => {
    if (event?.type === 'click' && event?.target?.closest(buttonSelector)) {
      toggleSpoiler();
    }

    if (event?.type === 'keyup' && event?.code === 'Escape' && !isClosed) {
      hideSpoiler();
    }
  };
}
