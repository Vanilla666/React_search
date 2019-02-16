import React from 'react'; //主要框架
// import $ from 'jquery'; //引入jq
import Hello from './Hello'; //引用其他組件
class Contacts extends React.Component { // React.Component = react 主要作組件
  constructor(props) { //建構子
    super(props) //繼承父元件資訊
    this.state = {  //起始化設定內部屬性
      items: [],
      data: [],
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this); //setState只要改變值都要
    // this.search = this.search.bind(this);
  }

  componentWillMount() { //組件即將掛載
    // this.loadCommentsFromServer();
    this.setState({ //設定初始值
      items: [], //放符合的收尋
      data: [ //一開始資料
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      search: '' //查看輸入欄位
    }
    )
  }
  updateSearch(event) { // onChange={this.updateSearch} 觸發時使用
    //console.log(event.target.value); //當前輸入值
    var datedList = this.state.data;//去拿內部預設資料
    this.setState({ data: datedList, search: event.target.value.toLowerCase() });//就把符合的對象放到item
  }

  search() { //這裡做收尋
    // console.log(this.state.items, this.state.data, this.state.search);
    let insideState = { ...this.state }; //解構
    // console.log(updatedList);
    insideState.items = insideState.data.filter(function (item) { //filter 遍歷每個元素，回傳 true 時，目前的值會保留在陣列內，這會回傳一個新陣列，而不是修改原本的陣列
      return item.toLowerCase().search( //itema每個對象  toLowerCase()字串變小寫 search() 去作收尋
        insideState.search) !== -1; // this.state.search使用者所輸入的對象 !== -1 等於有找到符合對象
    });
    console.log("收尋符合的值: ", insideState.items); //收尋符合的值
    let showData = insideState.items.map((item, index) => { //迭代把每個值都拿出來
      return <li className="list-group-item" data-category={item} key={index}>{item}</li>
    })
    return showData

  }
  render() {
    return (
      <div >
        <form>
          <fieldset className="form-group">
            <input className="form-control form-control-lg" placeholder="Search" onChange={this.updateSearch} type="text" />
          </fieldset>
        </form>
        <ul >
          {this.search()}  {/* 做資料判斷,介面更新 */}
        </ul>
        <Hello name="Hyora">  </Hello>
      </div>

    );
  }
}

export default Contacts;  // 匯出 Contacts Component 
