import './Pagination.scss'

const Pagination = ({ activePage, SetActivePage, totalPages }) => {
    return (
        <>
        
        <div className="pagination">
        <button className='btn__left'
        onClick={()=> SetActivePage(activePage -1)} > {`<`} </button>
        <button className='btn__right'
        onClick={()=> SetActivePage(activePage +1)} > {`>`} </button>
        </div>
        </>
        )
        
    }
    
    export default Pagination