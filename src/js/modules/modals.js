import { modals, modalsOverlay, settingsBtn, settingsModal, todoBtn, todoModal, todoNum } from '../services/selectors';
import { getGithubCurrentImgNum, getNeedBgReload, setNeedBgReload } from '../services/localstorage';
import setBg, { choseImageService, choseImageTag } from './slider';

const modalsInit = () => {
    settingsBtn.addEventListener('click', () => {
        settingsModal.classList.toggle('show');
        modals.classList.toggle('show');
        modalsOverlay.classList.toggle('show');
    });

    todoBtn.addEventListener('click', () => {
        todoModal.classList.toggle('show');
        modals.classList.toggle('show');
        modalsOverlay.classList.toggle('show');
    });

    todoNum.addEventListener('click', () => {
        todoModal.classList.toggle('show');
        modals.classList.toggle('show');
        modalsOverlay.classList.toggle('show');
    });

    modals.addEventListener('click', (e) => {
        const childModals = e.currentTarget.querySelectorAll('.modal');
        if (e.target === modalsOverlay || e.target.classList.contains('modal__close')) {
            modalsOverlay.classList.toggle('show');
            childModals.forEach((child) => {
                child.classList.remove('show');
            });
            modals.classList.toggle('show');
            const need = getNeedBgReload();
            if (need) {
                setNeedBgReload(false);
                setBg(getGithubCurrentImgNum() + 1, choseImageService(), choseImageTag());
            }
        }
    });
};

export default modalsInit;
