
import ClipboardJS from 'clipboard';
const copyToClipboard = (code: string) => {
    const clipboard = new ClipboardJS('.copy-button', {
      text: () => code,
    });
  
    clipboard.on('success', (e) => {
      e.clearSelection();
      // You can also show a tooltip or message here to indicate successful copy
    });
  
    clipboard.on('error', () => {
      // Handle copy error
    });
    const copyButton = document.querySelector('.copy-button');

    copyButton.addEventListener('click', () => {
      clipboard.copy('The text to be copied');
    });
  };
