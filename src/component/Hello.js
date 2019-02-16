import React from 'react'; //主要框架

class Hello extends React.Component { // React.Component = react 主要作組件
    render() {
        const {name} =this.props; // 運用ES6解構，對應出this.props的結構 {name}可以接收外部name屬性
        console.log("解構後 : ",{name});
        return (
            <div>
                <div style={{ textAlign: 'center' }} >
                   Hello,{name}
                </div>
            </div>

        )
    }
}


export default Hello; //主要輸出組件 