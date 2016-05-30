require("./tryusebackground.css");
require('./../common/common.scss');
var React = require('react');

var FormComponent = require('./formjs');


var TryuseComponent = React.createClass({
     getInitialState: function() {
        return {
            parentstyle:'divshow',
            successstyle:'divhide',
            curLocationHash: location.hash
        };
    },
    callback:function(){       
        this.setState({
            parentstyle:'divhide',
            successstyle:'divshow'
        });
    },
    //监听props可能发生变化的情况,在其中触发对当前url hash的判断,以确定用户是否点击了链接希望回到申请页面.
    componentWillReceiveProps: function () {
        if(location.hash === this.state.curLocationHash){
            return;
        }
        this.setState({
            parentstyle:'divshow',
            successstyle:'divhide',
            curLocationHash: location.hash
        });
    },
    render: function() {
        return (        
        <div>
          <div className={this.state.parentstyle}>
          <section className="tryuse" >
                <div className="tryusecontent">
                    <div className="title">
                        <h1>
                            申请试用
                        </h1>
                        <p>
                            欢迎申请试用MATRIX，请填写以下内容。
                        </p>                       
                    </div>
                    <div id="form1" className="form" >
                        <FormComponent isRegistSuccess={this.callback}/>
                    </div>            
                </div>
            </section>
          </div>
       <div className={this.state.successstyle}>
           <section className="tryuse">
                <div className="tryusecontent">
                    <div className="title">
                    <div>
                      <img src="http://static.sofund.com/matrix/images/xinfeng.png"/>
                          <h1>您的申请已收到！</h1>
                                 <p>
                                我们的机构客户经理将在24小时内联系您。
                            </p>
                            <p>
                                若您有紧急开户需求，可直接拨打我们的客服电话 400-818-1788。
                            </p> 
                            <div>
                            
                            </div> 
                      </div>                                                  
                    </div>                            
                     </div>
                     
              </section>       
          </div>
        </div>
           
        )
    }
});
module.exports = TryuseComponent;


