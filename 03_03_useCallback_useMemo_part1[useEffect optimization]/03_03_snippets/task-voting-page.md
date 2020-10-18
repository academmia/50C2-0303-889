```jsx

<div className="my-3 my-md-5">
	<div className="container">
	    <div className="page-header">
		<h1 className="page-title"> Task Voting </h1>
		<div className="page-subtitle"> useCallback and useMemo </div>
	    </div>
	    <div className="row row-cards">

		{ 
		    items.map( (item, i) => (
		        <div key={i} className="col-sm-6 col-lg-4">
		            <div className="card p-3">
		                
		                <div className="d-flex align-items-center px-2">
		                    <div>
		                        <div> subject </div>
		                    </div>
		                    <div className="ml-auto text-muted">
		                        <a href="/" className="icon">
		                            <i className="fe fe-heart mr-1"></i> votes </a>
		                        <a href="/" className="icon d-none d-md-inline-block ml-3">
		                            <i className="fe fe-file mr-1"></i> 
		                                Project: </a>
		                    </div>
		                </div>
		            </div>
		        </div>
		    ))

		}

	    </div>
	</div>
</div>

```