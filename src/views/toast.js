function toast(content) {
  const toastContainer = document.createElement('section');
  toastContainer.classList.add('toastContainer');
  const singleToast = document.createElement('section');
  singleToast.classList.add('singleToast');
  const toastContent = document.createElement('p');
  toastContent.textContent = content;
  const closeToastButton = document.createElement('button');
  closeToastButton.textContent = ' Ok ';
  closeToastButton.classList.add('closeToastButton');

  closeToastButton.addEventListener('click', (e) => {
    e.preventDefault();
    singleToast.classList.add('cerrando');
    toastContainer.classList.add('cerrando');
    // setTimeout(toastContainer.removeChild(singleToast), 400);
    setTimeout(() => {
      toastContainer.removeChild(singleToast);
    }, 400);
  });

  singleToast.append(toastContent, closeToastButton);
  toastContainer.append(singleToast);
  return toastContainer;
}

export default toast;
