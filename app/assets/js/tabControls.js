const createTabControls = (btnClass, tabClass) => {};

const customProps = {
  buttons: [...document.querySelectorAll('.nav__item')],
  tabs: [...document.querySelectorAll('.tab')],
};

const props = {
  ...customProps,
  activeTab: 0,
  tabsLength: customProps.tabs.length,
};

const changeTab = (tabIndex) => {
  props.tabs.forEach(tab => {
    if (tab.getAttribute('data-tab') === tabIndex) {
      tab.style.display = 'block';
    } else {
      tab.style.display = 'none';
    }
  });
};

const eventHandler = (e) => {
  changeTab(e.target.getAttribute('data-tab-index'));
};

const init = () => {
  props.tabs.forEach((tab, i, arr) => {
    tab.style.display = 'none';
    arr[0].style.display = 'block';
  });
  props.buttons.forEach(btn => {
    btn.addEventListener('click', eventHandler);
  });
};

export default init;
