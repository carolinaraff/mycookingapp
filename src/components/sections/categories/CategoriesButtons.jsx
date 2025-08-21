import { Hand, PencilLine, Trash2, Utensils  } from 'lucide-react';
import Button from '../../ui/Button'

const blue = '#1c11ee'
const stroke = '0.5'

function CategoriesButtons({setModal}){
    
    return(
        <div className="categories-buttons">
            <Button  onClick={()=> setModal('reorder')}>
                <Hand color={blue} strokeWidth={stroke}/>
            </Button>
            <Button onClick={()=> setModal('edit')}>
                <PencilLine color={blue} strokeWidth={stroke}/>
            </Button>
            <Button onClick={()=> setModal('add')}>
                <Utensils color={blue} strokeWidth={stroke}/>
            </Button>
            <Button onClick={()=> setModal('delete')}>
                <Trash2 color={blue} strokeWidth={stroke}/>
            </Button>
        </div>
    )
}

export default CategoriesButtons