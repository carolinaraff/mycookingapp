import Button from './Button'
import { Check, X} from 'lucide-react';
import styles from './Modal.module.scss'

const blue = '#1c11ee'
const stroke = '0.5'

function Modal({onClose, children}){
    return(
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <span className={styles.smodalBackground}></span>
                {children}
                <div className={styles.modalActions}>
                    <Button>
                        <Check color={blue} strokeWidth={stroke}/>
                    </Button>
                    <Button onClick={onClose}>
                        <X color={blue} strokeWidth={stroke}/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal