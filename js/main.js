// Tabs trên trang nhóm: hỗ trợ chuột, bàn phím và liên kết dạng #projects.
const tabList = document.querySelector('[role="tablist"]');
if (tabList) {
  const tabs = [...tabList.querySelectorAll('[role="tab"]')];
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));

  const activateTab = (nextTab, updateHash = true) => {
    tabs.forEach((tab, index) => {
      const isActive = tab === nextTab;
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      panels[index].hidden = !isActive;
    });
    if (updateHash) history.replaceState(null, '', `#${nextTab.getAttribute('aria-controls')}`);
  };

  document.documentElement.classList.add('tabs-ready');
  const hashTab = tabs.find(tab => `#${tab.getAttribute('aria-controls')}` === location.hash);
  activateTab(hashTab || tabs[0], false);

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      let nextIndex;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex === undefined) return;
      event.preventDefault();
      activateTab(tabs[nextIndex]);
      tabs[nextIndex].focus();
    });
  });

  window.addEventListener('hashchange', () => {
    const target = tabs.find(tab => `#${tab.getAttribute('aria-controls')}` === location.hash);
    if (target) activateTab(target, false);
  });
}

// Tự tải ảnh cá nhân theo MSSV; ưu tiên .jpg, sau đó thử .png.
const profileAvatar = document.querySelector('.profile-avatar[data-student-id]');
if (profileAvatar) {
  const studentId = profileAvatar.dataset.studentId;
  const studentName = profileAvatar.dataset.studentName;
  const extensions = ['jpg', 'png'];
  const tryImage = index => {
    if (index >= extensions.length) return;
    const photo = new Image();
    photo.alt = `Ảnh ${studentName}`;
    photo.addEventListener('load', () => {
      profileAvatar.textContent = '';
      profileAvatar.appendChild(photo);
      profileAvatar.removeAttribute('aria-hidden');
    });
    photo.addEventListener('error', () => tryImage(index + 1));
    photo.src = `../assets/${studentId}.${extensions[index]}`;
  };
  tryImage(0);
}
