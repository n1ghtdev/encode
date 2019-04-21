import hash from 'object-hash';

const modal = [...document.querySelectorAll('.enc-modal')];

let jsonData;

const eventHandler = (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.parentElement.tagName === 'BUTTON') {
    if (e.target.getAttribute('data-role') === 'close' || e.target.parentElement.getAttribute('data-role') === 'close') {
      modal.forEach(el => {
        el.classList.add('enc-modal--off');
      });
    } else if (e.target.getAttribute('data-role') === 'save') {
      setJSONHrefToButton(e.target);
    }
  }
};

const setJSONHrefToButton = (btn) => {
  if (jsonData !== undefined || jsonData !== null || jsonData !== '') {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(jsonData))}`;
    btn.setAttribute('href', dataStr);
    btn.setAttribute('download', `crypt-${hash(jsonData)}.json`);
  }
};

export const openModal = (mID, body) => {
  jsonData = body;
  const mEl = document.getElementById(mID);
  if (mEl.classList.contains('enc-modal--off')) {
    mEl.classList.remove('enc-modal--off');
  }
};

export const modalControlInit = () => {
  window.addEventListener('click', eventHandler);
};
