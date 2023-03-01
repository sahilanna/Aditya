import React from "react";
// renderStock(){
//     if(this.props.data.productStock > 0){
//         return <button> Add to Cart </button>
//     }
//     return <p>Out Of Stock</p>;
// };
class Product extends React.Component{
    render()
    {
        const data = this.props.data;
        return(
            <div>
                <img src={data.productImage} />
                <h4>{data.productName}</h4>
                <h5>{data.productPrice}</h5>
                {data.productStock>0?(
                    <button onClick={()=>this.props.btnClick(data.productName)
                }> Add to cart; </button>
                ):null}
            </div>
        );
    }
}

export default Product;