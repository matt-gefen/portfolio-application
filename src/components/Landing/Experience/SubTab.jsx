import {React} from 'react'

const SubTab = ({title, index, setSelectedSubTab, selectedSubTab}) => {
    return (
        <div 
            className={`sub-tab ${selectedSubTab === index ? 'selected-sub' : ''}`}
            onClick={() => {
                setSelectedSubTab(index)
                }}>
            {title}
        </div>
    )
}

export default SubTab