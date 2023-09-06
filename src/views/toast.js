function toast(content) {
  const toastContainer = document.createElement('section');
  toastContainer.classList.add('toastContainer');
  const singleToast = document.createElement('section');
  singleToast.classList.add('singleToast');
  const toastContent = document.createElement('p');
  toastContent.textContent = content;
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';

  closeButton.addEventListener('click', async (e) => {
    e.preventDefault();
    await singleToast.classList.add('cerrando');
    await toastContainer.classList.add('cerrando');
    toastContainer.removeChild(singleToast);
  });

  singleToast.append(toastContent, closeButton);
  toastContainer.append(singleToast);
  return toastContainer;
}

export default toast;
