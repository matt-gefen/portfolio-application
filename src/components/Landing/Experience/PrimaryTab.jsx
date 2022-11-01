import {React} from 'react'

const PrimaryTab = ({title, index, setSelectedTab, selectedTab, section}) => {
    return (
        <div className={`primary-tab ${section} ${selectedTab === index ? 'selected' : ''}`} onClick={() => {
            setSelectedTab(index)
            }}>
            {title}
        </div>
    )
}

export default PrimaryTab