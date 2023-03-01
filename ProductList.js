import React from "react";
import Product from "../components/Product";
import ProductService from "../services/ProductService";

class ProductList extends React.Component
{
    state = {plist : []};
    componentDidMount() {
        this.getData();
    }
    getData() {
        ProductService.getProducts()
            .then((res) => {
                console.log("success", res);
                this.setState({plist : res.data});
            })
            .catch((err) => {
                console.log("error",err);
            });
    }
    render() {
        return(
            <div>
              {  
                this.state.plist.map((item) =>(
                <Product
                    key={item.productId}
                    data={item}
                    btnClick={(id) => console.log("add item", id)} />
              ))}
            </div>
        );
    }
}
export default ProductList;