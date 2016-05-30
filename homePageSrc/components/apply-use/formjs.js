var $ = require('jquery');
var React = require('react');
var JPlaceHolder = require('./JPlaceholder');

require('./../common/common.scss');

var MyForm = React.createClass({
    componentDidMount: function() {
        //执行
        JPlaceHolder.init();
        //IE下浏览器自动填充表单,暂时做延迟处理.
        setTimeout(()=>{
            document.form.username.value && (document.form.username.value = '');
            document.form.agencyname.value && (document.form.agencyname.value = '');
            document.form.phonenum.value && (document.form.phonenum.value = '');
            document.form.verifycode.value && (document.form.verifycode.value = '');
            document.form.email.value && (document.form.email.value = '');
            document.form.qq.value && (document.form.qq.value = '');
        },110)
    },
    getInitialState: function() {
        return {
            username: "",
            usernameError: "",
            usernameStyle: "right",

            agencyname: "",
            agencynameError: "",
            agencynameStyle: "right",

            phonenum: "",
            phonenumError: "",
            phonenumStyle: "right",


            verifycode: "",
            verifycodeError: "",
            verifycodeStyle: "right",

            email: "",
            emailError: "",
            emailStyle: "right",

            qq: "",
            qqError: "",
            qqStyle: "right",

            btntxt: "获取验证码",
            btnstyle: "tryusebtn",
            submitstyle: 'tryusebtn',

            curLocationHash: location.hash
        };
    },
    //监听props可能发生变化的情况,在其中触发对当前url hash的判断,以确定用户是否点击了链接希望回到申请页面.
    componentWillReceiveProps: function () {
        if(location.hash === this.state.curLocationHash){
            return;
        }
        this.formInit();
    },
    formInit: function () {
        this.setState({
            username: "",
            usernameError: "",
            usernameStyle: "right",

            agencyname: "",
            agencynameError: "",
            agencynameStyle: "right",

            phonenum: "",
            phonenumError: "",
            phonenumStyle: "right",


            verifycode: "",
            verifycodeError: "",
            verifycodeStyle: "right",

            email: "",
            emailError: "",
            emailStyle: "right",

            qq: "",
            qqError: "",
            qqStyle: "right",

            btntxt: "获取验证码",
            btnstyle: "tryusebtn",
            submitstyle: 'tryusebtn',

            curLocationHash: location.hash
        });
        clearInterval(this.interval);
        setTimeout(()=>{
            document.form.username.value && (document.form.username.value = '');
            document.form.agencyname.value && (document.form.agencyname.value = '');
            document.form.phonenum.value && (document.form.phonenum.value = '');
            document.form.verifycode.value && (document.form.verifycode.value = '');
            document.form.email.value && (document.form.email.value = '');
            document.form.qq.value && (document.form.qq.value = '');
        },110)
    },
    handleChange: function(name, event) {
        // alert("sdfsd");
        var newState = {};
        newState[name] = event.target.value;
        this.setState(newState);

    },
    urlhost: window.location.origin,
    //倒计时方法
    interval: null,
    sleep: 60,

    clickHandle: function() {
        if (this.state.btnstyle == 'tryusebtndisable') {
            return;
        }

        var phonenumvalue1 = this.state.phonenum;
        var phonenumerror1 = '';
        var phonenumstyle1 = "right";
        if (phonenumvalue1.trim() == '') {
            phonenumerror1 = '请输入手机号码';
            phonenumstyle1 = "error invalid";

            if (phonenumvalue1.trim() == '') {
                phonenumvalue1 = "";
            }
            phonenumstyle1 = "error invalid";
            this.setState({
                phonenum: phonenumvalue1,
                phonenumError: phonenumerror1,
                phonenumStyle: phonenumstyle1
            });
            return;
        } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(phonenumvalue1))) {

            phonenumerror1 = '手机号码格式不正确';
            phonenumstyle1 = "error invalid";
            if (phonenumvalue1.trim() == '') {
                phonenumvalue1 = "";
            }

            this.setState({
                phonenum: phonenumvalue1,
                phonenumError: phonenumerror1,
                phonenumStyle: phonenumstyle1
            });
            return;
        }

        this.setState({
            phonenum: phonenumvalue1,
            phonenumError: phonenumerror1,
            phonenumStyle: phonenumstyle1
        });
        if (!this.interval) {
            $.ajax({
                type: "POST",
                data: {
                    phone: phonenumvalue1.trim()
                },
                url: "http://www.sofund.com/sendCaptcha",
                success: function(data) {

                    if (data.code == 0) {

                    } else if (data.code == 305) {
                        if (phonenumvalue1.trim() != '') {
                            this.setState({
                                phonenumStyle: 'error invalid',
                                phonenumError: "手机号码格式不正确"
                            });
                        }
                    }

                }.bind(this)
            });

            var text = "重新获取 (" + this.sleep-- + ")";
            this.setState({
                btntxt: text,
                btnstyle: "tryusebtndisable",
                btndisable: "disabled"
            });
            this.interval = setInterval(this.tick, 1000);
        }
    },

    tick: function() {
        if (this.sleep == 0) {
            if (!!this.interval) {
                clearInterval(this.interval);
                this.interval = null;
                this.sleep = 60;
                this.setState({
                    btntxt: "获取验证码",
                    btnstyle: "tryusebtn",
                    btndisable: ""
                });
            }
            return false;
        }
        this.setState({
            btntxt: "重新获取 (" + this.sleep-- + ")",
            btnstyle: "tryusebtndisable",
            btndisable: "disabled"
        });
        //btn.value = "重新发送 (" + this.sleep-- + ")";
    },
    addPlaceholder: function(msg, id) {
        var $p = $('#' + id).parent();
        $p.find("input[type='text']").trigger("focusout");
    },
    addblur: function(name, msg, event) {
        var newState = {};
        var value = event.target.value;
        newState[name] = value;
        var newError = {};
        var newStyle = {};
        this.setState(newState);
        if (value.trim() == '') {
            newError[name + 'Error'] = msg;
            newStyle[name + 'Style'] = 'error invalid';
            this.setState(newStyle);
            this.setState(newError);

        } else {
            if (name == 'phonenum' && !/^1[3|4|5|7|8]\d{9}$/.test(value)) {
                newError[name + 'Error'] = '手机号码格式不正确';
                newStyle[name + 'Style'] = 'error invalid';
            } else if (name == 'email' && !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
                newError[name + 'Error'] = '邮箱格式不正确';
                newStyle[name + 'Style'] = 'error invalid';
            } else {
                newError[name + 'Error'] = '';
                newStyle[name + 'Style'] = 'right';
            }
            this.setState(newStyle);
            this.setState(newError);
        }

    },
    //验证顺序
    textarr: true,
    handleSubmit: function(e) {

        var submitsty = this.state.submitstyle;
        if (submitsty == 'tryusebtndisable') {
            return;
        }
        this.textarr = true;
        var submitflog = true;
        //用户名验证
        var usernamevalue1 = this.state.username;
        var usererror1 = '';
        var userstyle1 = "right";
        if (usernamevalue1.trim() == '' && this.textarr) {
            usererror1 = '请输入真实姓名';
            userstyle1 = "error invalid";
            this.addPlaceholder("真实姓名（必填）", 'username');
            //  this.addPlaceholder(usererror1,'username');
            submitflog = false;
            this.textarr = false;
        }
        this.setState({
            username: usernamevalue1,
            usernameError: usererror1,
            usernameStyle: userstyle1
        });

        //   alert(this.state.usernameError);
        //机构名称验证
        var agencynamevalue1 = this.state.agencyname;
        var agencynameerror1 = '';
        var agencynamestyle1 = "right";
        if (agencynamevalue1.trim() == '' && this.textarr) {
            agencynamevalue1 = "",
                agencynameerror1 = '请输入机构名称';
            agencynamestyle1 = "error invalid";
            this.addPlaceholder("机构名称（必填）", 'agencyname');
            submitflog = false;
            this.textarr = false;
        }
        this.setState({
            agencyname: agencynamevalue1,
            agencynameError: agencynameerror1,
            agencynameStyle: agencynamestyle1
        });

        //电话验证

        var phonenumvalue1 = this.state.phonenum;
        var phonenumerror1 = '';
        var phonenumstyle1 = "right";

        if (phonenumvalue1.trim() == '' && this.textarr) {
            phonenumvalue1 = '';
            phonenumerror1 = '请输入手机号码';
            phonenumstyle1 = "error invalid";
            // this.setState({
            //     phonenum: phonenumvalue1,
            //     phonenumError: phonenumerror1,
            //     phonenumStyle: phonenumstyle1,
            // });
            this.addPlaceholder("手机号码（必填）", 'phonenum');
            submitflog = false;
            this.textarr = false;
        } else if ((!/^1[3|4|5|7|8]\d{9}$/.test(phonenumvalue1)) && this.textarr) {
            phonenumerror1 = '手机号码格式不正确';
            phonenumstyle1 = "error invalid";
            if (phonenumvalue1.trim() == '') {
                phonenumvalue1 = "";
            }

            this.addPlaceholder("手机号码（必填）", 'phonenum');
            submitflog = false;
            this.textarr = false;
            // this.setState({
            //     phonenum: phonenumvalue1,
            //     phonenumError: phonenumerror1,
            //     phonenumStyle: phonenumstyle1
            // });

        }

        this.setState({
            phonenum: phonenumvalue1,

            phonenumError: phonenumerror1,
            phonenumStyle: phonenumstyle1
        });



        //验证码验证
        var verifycodevalue1 = this.state.verifycode;
        var verifycodeerror1 = '';
        var verifycodestyle1 = "right";
        if (verifycodevalue1.trim() == '' && this.textarr) {
            verifycodevalue1 = "";
            verifycodeerror1 = '请输入验证码';
            verifycodestyle1 = "error invalid";
            this.addPlaceholder(verifycodeerror1, 'verifycode');
            submitflog = false;
            this.textarr = false;
        }
        this.setState({
            verifycode: verifycodevalue1,
            verifycodeError: verifycodeerror1,
            verifycodeStyle: verifycodestyle1
        });



        var emailvalue1 = this.state.email;
        var emailerror1 = '';
        var emailstyle1 = 'right';

        if (emailvalue1.trim() == '' && this.textarr) {
            emailerror1 = '请输入公司邮箱';
            emailstyle1 = "error invalid";
            emailvalue1 = '';
            // this.setState({
            //     email: emailvalue1,
            //     emailError: emailerror1,
            //     emailStyle: emailstyle1
            // });
            this.addPlaceholder("公司邮箱（使用此邮箱登录，请填写正确的邮箱信息）", 'email');
            submitflog = false;
            this.textarr = false;

        } else if ((!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailvalue1))) && this.textarr) {
            emailerror1 = '邮箱格式不正确';
            emailstyle1 = "error invalid";
            if (emailstyle1.trim() == '') {
                emailstyle1 = "";
            }
            this.addPlaceholder("公司邮箱（使用此邮箱登录，请填写正确的邮箱信息）", 'email');
            submitflog = false;
            this.textarr = false;
            // this.setState({
            //     email: emailvalue1,
            //     emailError: emailerror1,
            //     emailStyle: emailstyle1
            // });

        }

        this.setState({
            email: emailvalue1,
            emailError: emailerror1,
            emailStyle: emailstyle1
        });
        var qqvalue1 = this.state.qq;
        qqvalue1 = qqvalue1.trim();
        var qqerror1 = '';
        var qqstyle1 = 'right';

        if (qqvalue1 != "" && this.textarr) {

            if (qqvalue1.search(/^[1-9]\d{4,12}$/) != -1) {

            } else {

                qqerror1 = '请输入正确的QQ号';
                qqstyle1 = "error invalid";
                qqvalue1 = "";
                this.addPlaceholder("QQ号码", 'qq');
                submitflog = false;
                this.textarr = false;
            }
        }
        this.setState({
            qq: qqvalue1,
            qqError: qqerror1,
            qqStyle: qqstyle1
        });
        if (submitflog) {
            this.setState({
                submitstyle: 'tryusebtndisable'
            });
            $.ajax({
                type: "POST",
                data: {
                    phone: this.state.phonenum,
                    realName: this.state.username,
                    orgName: this.state.agencyname,
                    email: this.state.email,
                    qq: this.state.qq,
                    captcha: this.state.verifycode
                },
                url: "http://www.sofund.com/regist",
                success: function(data) {
                    //  alert(data.code + '  ' + data.msg);
                    switch (data.code) {
                        case 306:
                            {
                                this.setState({
                                    emailError: "邮箱格式错误",
                                    emailStyle: "error invalid",
                                });
                                submitflog = false;
                            }
                            break;
                        case 305:
                            {
                                this.setState({
                                    phonenumError: "手机号格式错误",
                                    phonenumStyle: "error invalid",
                                });
                                submitflog = false;

                            }
                            break;
                        case 307:
                            {
                                this.setState({
                                    phonenumError: "该手机号码已进行过申请,请耐心等待审核",
                                    phonenumStyle: "error invalid",
                                });
                                submitflog = false;
                            }

                            break;
                        case 308:
                            {
                                this.setState({
                                    emailError: "该邮箱已进行过申请，请耐心等待审核",
                                    emailStyle: "error invalid",
                                });
                                submitflog = false;
                            }
                            break;
                        case 309:
                            {
                                this.setState({
                                    verifycodeError: "发送验证码失败",
                                    verifycodeStyle: "error invalid"
                                });
                                submitflog = false;
                            }
                            break;
                        case 310:
                            {
                                this.setState({
                                    verifycodeError: "验证码错误",
                                    verifycodeStyle: "error invalid"
                                });
                                submitflog = false;

                            }

                            break;
                        case 311:
                            {
                                this.setState({
                                    verifycodeError: "验证码错误",
                                    verifycodeStyle: "error invalid"
                                });
                                submitflog = false;
                            }
                            break;
                        case 312:
                            {
                                this.setState({
                                    phonenumError: "该手机号码已有MATRIX账号，您可直接登录",
                                    phonenumStyle: "error invalid"
                                });
                                submitflog = false;
                             }
                            break;
                        case 313:
                            {
                                this.setState({
                                    emailError: "该邮箱已有MATRIX账号，您可直接登录",
                                    emailStyle: "error invalid"
                                });
                                submitflog = false;
                            }
                                break;
                    }
                    if (submitflog) {
                        this.props.isRegistSuccess && this.props.isRegistSuccess();
                    } else {

                        //  alert('后台返回错误信息');
                        this.setState({
                            submitstyle: 'tryusebtn'
                        });
                    }

                }.bind(this)
            });


        } else {
            //alert("前台检验数据有问题，请检查");
        }
        // this.props.isRegistSuccess && this.props.isRegistSuccess();
    },

    render: function() {
        return (
            <form style={{width:"675px"}} autoComplete="off" name="form">
                     <div className='formerrordiv' style={{float:"right"}}>
                    <p >
                        <span>{this.state.usernameError}</span>
                    </p>
                    <p className={this.state.agencynameStyle}>
                      <span>{this.state.agencynameError}</span>
                    </p>
                    <p className={this.state.phonenumStyle}>
                          <span>{this.state.phonenumError}</span>
                    </p>
                    <p className={this.state.verifycodeStyle}>
                      <span>{this.state.verifycodeError}</span>
                    </p>
                    <p className={this.state.emailStyle}>
                        <span>{this.state.emailError}</span>
                    </p>
                    <p className={this.state.qqStyle}>
                     <span>{this.state.qqError}</span>
                    </p>
                    
                     </div>  
                    <div style={{width:"500px",marginLeft:"93px"}}>
                    <p className={this.state.usernameStyle}>
                        <input type='text' name='username' id='username' placeholder="真实姓名（必填）" value={this.state.username} onChange={this.handleChange.bind(this,"username")} onBlur={this.addblur.bind(this,"username","请输入真实姓名")} autoComplete="off" />
                     
                    </p>
                    <p className={this.state.agencynameStyle}>
                        <input type='text' name='agencyname' id='agencyname' placeholder='机构名称（必填）'  value={this.state.agencyname} onChange={this.handleChange.bind(this,"agencyname")} onBlur={this.addblur.bind(this,"agencyname","请输入机构名称")} autoComplete="off"/>
                     
                    </p>
                    <p className={this.state.phonenumStyle}>
                        <input type='text' name='phonenum' id='phonenum' placeholder="手机号码（必填）" value={this.state.phonenum} onChange={this.handleChange.bind(this,"phonenum")} onBlur={this.addblur.bind(this,"phonenum","请输入手机号码")} autoComplete="off"/>
                        
                    </p>
                    <p className={this.state.verifycodeStyle}>
                        <input type='text' name='verifycode' id='verifycode' style={{width:"240px"}}  placeholder= "请输入验证码"  onChange={this.handleChange.bind(this,"verifycode")} onBlur={this.addblur.bind(this,"verifycode","请输入验证码")} autoComplete="off"/>
                      
                       <span className={this.state.btnstyle} style={{width:"114px",height:"20px",display:'inline-block',marginLeft:'5px'}} onClick={this.clickHandle} >
                        <a>{this.state.btntxt}</a>
                       </span>
                    </p>
                    <p className={this.state.emailStyle}>
                        <input type='text' name='email'  id='email' placeholder="公司邮箱（使用此邮箱登录，请填写正确的邮箱信息）"   value={this.state.email} onChange={this.handleChange.bind(this,"email")} onBlur={this.addblur.bind(this,"email","请输入公司邮箱")} autoComplete="off"/>
                       
                    </p>
                    <p className={this.state.qqStyle}>
                        <input type='text' name='qq' id='qq' placeholder="QQ号码" value={this.state.qq}  onChange={this.handleChange.bind(this,"qq")} autoComplete="off"/>
                    </p>
                </div>               
              <br/>
                <div className={this.state.submitstyle} style={{width:"382px",marginLeft:"93px",height:"20px"}} onClick={this.handleSubmit}>
                    <a>提交</a>
                </div>
            </form>



        )
    }
});
module.exports = MyForm;