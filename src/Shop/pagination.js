import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (

        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center justify-content-lg-end">
            <li class="page-item mx-1"><button class="page-link" onClick={prevPage} aria-label="Previous"><span aria-hidden="true">«</span></button></li>
            
            {/* <li class="page-item mx-1 active"><a class="page-link" href="#!">1</a></li>
            <li class="page-item mx-1"><a class="page-link" href="#!">2</a></li>
            <li class="page-item mx-1"><a class="page-link" href="#!">3</a></li> */}

            {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} className= {`page-item mx-1 ${currentPage == pgNumber ? 'active' : ''} `} >
                        <button onClick={() => setCurrentPage(pgNumber)} className='page-link'>
                            {pgNumber}
                        </button>
                    </li>
                ))}
            
            <li class="page-item ms-1"><button class="page-link" onClick={nextPage} aria-label="Next"><span aria-hidden="true">»</span></button></li>
        </ul>
    
    
            {/* <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link" 
                        onClick={prevPage} 
                        href='#'>
                        
                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <button onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            >
                            
                            {pgNumber}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    <button className="page-link" 
                        onClick={nextPage}
                        >
                        
                        Next
                    </button>
                </li>
            </ul> */}
        </nav>
    )
}

export default Pagination