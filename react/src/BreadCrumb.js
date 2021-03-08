function BreadCrumb(){
    return(
        <div className="breadcrumb">
            <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        </div>
    );
}
export default BreadCrumb;