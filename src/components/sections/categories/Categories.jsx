import { useState } from "react";
import CardsList from './CardsList'
import CategoriesButtons from './CategoriesButtons'
import Modal from '../../ui/Modal'
import NewCategory from "./modals/NewCategory";
import DeleteCategory from "./modals/DeleteCategory";
import EditCategory from "./modals/EditCategory";


function Categories(){
    const categories = [{category: 'Carnes', key: 1}, 
        {category: 'Pescados', key: 2}, 
        {category: 'Entradas', key: 3}, 
        {category: 'Postres', key: 4},
        {category: 'Salados', key: 5}]

    const [openModal, setModal] = useState(null)
    return(
        <>
            <CardsList categories={categories}/>
            <CategoriesButtons setModal={setModal}/>

            {openModal === 'add' && (
                <Modal onClose={()=> setModal(null)}>
                    <NewCategory/>
                </Modal>
            )}
            {openModal === 'delete' && (
                <Modal onClose={()=> setModal(null)}>
                    <DeleteCategory/>
                </Modal>
            )}
            {openModal === 'edit' && (
                <Modal onClose={()=> setModal(null)}>
                    <EditCategory/>
                </Modal>
            )}
        </>
    )
}

export default Categories