import {React} from 'react'

const PrimaryTab = ({title, index, setSelectedTab, selectedTab}) => {
    return (
        <div className={`primary-tab ${selectedTab === index ? 'selected' : ''}`} onClick={() => {
            
            setSelectedTab(index)
            }}>
            {title}
        </div>
    )
}

export default PrimaryTab