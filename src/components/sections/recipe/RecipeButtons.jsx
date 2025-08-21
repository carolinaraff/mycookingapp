import { PencilLine, Trash2, Utensils, ArrowRightLeft, House  } from 'lucide-react';
import Button from '../../ui/Button'

const blue = '#1c11ee'
const stroke = '0.5'

function RecipeButtons({setModal}){
    return(
        <div className='recipe-buttons'>
            <Button>
                <ArrowRightLeft stroke={blue} strokeWidth={stroke}/>
            </Button>
            <Button> 
                <House stroke={blue} strokeWidth={stroke}/>
            </Button>
            <Button onClick={() => setModal('add')}>
                <Utensils stroke={blue} strokeWidth={stroke}/>
            </Button>
            <Button onClick={() => setModal('edit')}>
                <PencilLine stroke={blue} strokeWidth={stroke}/>
            </Button>
            <Button onClick={() => setModal('delete')}>
                <Trash2 stroke={blue} strokeWidth={stroke}/>
            </Button>
        </div>
    )
}

export default RecipeButtons