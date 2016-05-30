/**
 * Created by Lever on 16/5/12.
 */

// import React, { Component } from 'react';
const React = require('react');
const Component = React.Component;
import { render } from 'react-dom';
import { Link } from 'react-router';
import { ReactSelect } from './../react-select/ReactSelect'

var routeArray = [
    {
        key: 0,
        name: "企业简介",
        info: [{
                index: 0,
                value:"北京人人金服投资管理有限公司是一家为客户提供多元化金融信息服务的金融科技（Fintech）公司。",
        },{
            index: 1,
            value: "人人金服专注于金融市场，致力于用科技开启金融服务行业的新时代，帮助客户创造可持续的竞争优势。我们已服务国内包括银行、券商、保险、信托、财务公司在内的多家金融机构，并根据行业客户特点，推出MATRIX平台，为广大的金融机构客户提供定制化金融数据分析及信息跟踪服务。"
        }]
    },
    {
        key: 1,
        name: "团队介绍",
        info: [{
            index: 0,
            value:"人人金服在全球汇聚了金融服务、资产管理、风控及互联网等大批业界一流资深人士，组成了一支平等、专业、进取、力求创新的团队，自始至终专注于用户的需求与体验。",
        },{
            index: 1,
            value: "在人人金服，量化投研团队是由来自北大、清华、中科院的博士及硕士等精英人才组成，背景是人工智能、机器学习、金融工程；分析师有来自私募基金的投资总监、基金经理；数据平台研发团队是由之前负责人人商业大数据管理平台、计算广告平台的技术人员组成，具备丰富的商业数据产品研发经验。"
        },{
            index: 2,
            value: "我们始终致力于为改善用户的每一分满意度而努力，并不断探寻优化产品的创新机会。"
        }]
    },
    {
        key: 2,
        name: "加入我们"
    },
    {
        key: 3,
        name: "联系我们",
        info: [{
            index: 0,
            value:"公司地址：北京市朝阳区酒仙桥中路18号国投创意产业园北楼5层",
        },{
            index: 1,
            value: "电话：400-818-1788"
        },{
            index: 2,
            value: "邮箱：sofund@renren-inc.com"
        }]
    }
];

var fullTimeJob = ["投资经理","量化投资研究员","产品经理"];
var practiceJob = ["量化投资实习生","产品设计实习生"];
var jobInfo = [{
    key: 0,
    nature: '全职',
    value: [
        {
            key: 0,
            name: '投资经理',
            baseInfo: [{
                index: 0,
                value: "职位描述：岗位职责："
            },{
                index: 1,
                value: "1. 负责期货、股票等投资策略的研究及投资方案实践；"
            },{
                index: 2,
                value: "2. 负责定期对市场进行跟踪分析和风险把控，为投资决策提供建议支持；"
            },{
                index: 3,
                value: "3. 协助完成产品设计、产品运营等工作；"
            },{
                index: 4,
                value: "4. 领导分配的其他工作；"
            }],
            jobNeed: [{
                index: 0,
                value: "任职要求："
            },{
                index: 1,
                value: "1. 重点院校全日制硕士及以上学历，具有经济、金融或相关专业知识背景；"
            },{
                index: 2,
                value: "2. 具有3年以上基金、证券、银行等金融机构相关工作经验，其中有2年以上期货市场投资管理经验；"
            },{
                index: 3,
                value: "3. 有良好的团队合作意识和敬业精神，能够与机构和渠道进行有效沟通；"
            },{
                index: 4,
                value: "4. 具备证券从业资格，CPA、CFA等资格证书者优先；"
            },{
                index: 5,
                value: "5. 业绩优良者，条件可适当放宽；"
            }]
        },
        {
            key: 1,
            name: '量化投资研究员',
            baseInfo: [{
                index: 0,
                value: "职位描述："
            },{
                index: 1,
                value: "1. 负责境内外市场量化投资策略的开发及策略管理，包括但不限于高频交易、统计套利、管理期货、基本面量化、全球宏观等；"
            },{
                index: 2,
                value: "2. 完成策略在本地的复制与测试，在给定的风险范围内，负责策略的投资管理和交易数据分析；"
            },{
                index: 3,
                value: "3. 协助业务线完成量化交易、数据等基础设施的规划及建设；"
            },{
                index: 4,
                value: "4. 参与部门日常管理和服务、软硬件建设、团队建设等各方面工作；"
            }],
            jobNeed: [{
                index: 0,
                value: "任职要求："
            },{
                index: 1,
                value: "1. 数量经济，金融工程，统计学，数学等相关专业全日制硕士及以上学历；"
            },{
                index: 2,
                value: "2. 有数量研究和投资经验，熟悉金融投资理论，对量化投资，股指期货，商品期货等对冲，套利有深入研究，有2年以上实战经验者优先；"
            },{
                index: 3,
                value: "3. 熟练掌握MatLab、R、C++、Python等语言中至少一种，熟悉ORACLE，Sql Server, mysql 等数据库，熟练使用SQL语言；"
            },{
                index: 4,
                value: "4. 精力充沛、乐于交流、注重工作实效，抗压能力较强；"
            },{
                index: 5,
                value: "5. 具备证券从业资格，CPA、CFA等资格证书者优先；"
            }]
        },
        {
            key: 2,
            name: '产品经理',
            baseInfo: [{
                index: 0,
                value: "职位描述："
            },{
                index: 1,
                value: "1. 负责互联网金融系统的产品规划和设计，及相关项目的推动和执行； "
            },{
                index: 2,
                value: "2. 负责与设计团队、研发团队、运营团队及市场团队紧密沟通，共同制定研发需求和计划；"
            },{
                index: 3,
                value: "3. 负责跟进行业动态，分析市场竞争状况，推动业务创新设计；"
            },{
                index: 4,
                value: "4. 负责编写PRD和MRD文档。"
            }],
            jobNeed: [{
                index: 0,
                value: "任职要求："
            },{
                index: 1,
                value: "1. 大学本科或以上学历，1年以上互联网金融行业经验；"
            },{
                index: 2,
                value: "2. 熟悉互联网金融行业特征，熟悉互联网金融业务架构；"
            },{
                index: 3,
                value: "3. 了解互联网产品架构，有优秀的互联网思维，有持续改进用户体验的经验；"
            },{
                index: 4,
                value: "4. 有良好的沟通和口头表达能力，良好的文档编写能力，心态乐观、性格外向；"
            },{
                index: 5,
                value: "5. 熟悉支付行业优先、熟悉基金方面业务的优先；"
            }]
        }
    ]
},{
    key: 1,
    nature: '实习生',
    value: [
        {
            key: 0,
            name: '量化投资实习生',
            baseInfo: [{
                index: 0,
                value: "职位描述："
            },{
                index: 1,
                value: "1. 负责市场量化投资策略的开发，包括但不限于高频交易、统计套利、管理期货、基本面量化、全球宏观等"
            },{
                index: 2,
                value: "2. 基于海量数据进行数据挖掘 ，协助业务线完成量化交易、数据等基础设施的规划及建设"
            }],
            jobNeed: [{
                index: 0,
                value: "任职要求："
            },{
                index: 1,
                value: "1. 计算机、金融或相关理工科专业学习背景,本科及以上在校学生"
            },{
                index: 2,
                value: "2. 熟练掌握数据结构与算法相关知识，有数据挖掘相关工作经验者优先，有自然语言处理背景优先，有金融和投资经验优先"
            },{
                index: 3,
                value: "3. 有极佳的逻辑分析能力和学习能力，善于应对各种智力挑战,热爱探索和钻研、对技术充满激情"
            },{
                index: 4,
                value: "4. 有python、C++、shell脚本等经验者，对数据挖掘、算法有深入研究者优先"
            },{
                index: 5,
                value: "5. 最少三个月、每周至少四个工作日的实习时间"
            }]
        },
        {
            key: 1,
            name: '产品设计实习生',
            baseInfo: [{
                index: 0,
                value: "工作职责："
            },{
                index: 1,
                value: "1. 积极寻求改进的各种可能的思路和方案；"
            },{
                index: 2,
                value: "2. 协助产品经理进行各类用户调研和数据分析；"
            },{
                index: 3,
                value: "3. 协助产品经理进行产品功能设计，并完成需求文档写作；"
            },{
                index: 4,
                value: "4. 协调设计、研发、市场等部门同事，推动设计、开发、运营推广等工作。"
            }],
            jobNeed: [{
                index: 0,
                value: "工作要求："
            },{
                index: 1,
                value: "1. 逻辑思维强，对数据敏感，具备优秀的分析能力；"
            },{
                index: 2,
                value: "2. 具备良好的沟通、协调能力，拥有强烈的责任心和团队协作精神；"
            },{
                index: 3,
                value: "3. 经常使用主流的互联网产品，对用户体验有一定的认识和不错的感觉；"
            },{
                index: 4,
                value: "4. 勤奋刻苦，学习能力强，具备一定的抗压能力，有很强的执行力。"
            },{
                index: 5,
                value: "5. 金融或相关理工科专业学习背景,本科及以上在校学生优先"
            },{
                index: 6,
                value: "6. 需要连续实习三个月以上，每周四天以上。"
            }]
        }
    ]
}];

export class IncChild extends Component{
    constructor(){
        super();
        this.state = {
            curNature: fullTimeJob,
            curJobInfoKey: 0,
            curJob: 0,
            curJobInfo: jobInfo[0].value[0],
            curLabel: fullTimeJob[0]
        };
    }
    getIndex(){
        return this.props.params.key
    }
    renderPinfo(){
        let data = routeArray[this.props.params.key];
        if(+this.props.params.key === 2){
            data.info = this.state.curJobInfo.baseInfo.concat(this.state.curJobInfo.jobNeed);
        }
        let list;
        if(!!data.info && data.info.length > 0){
            list = data.info.map(function (item, index) {
                return (
                    <p key={index} className={item.index === 0 ? "sec-title" : ""}>{item.value}</p>
                )
            });
            return list;
        }
    }
    changeNature(cur){
        //如果数据没有变化,不执行任何操作
        if(cur === this.state.curJobInfoKey){
            return;
        }
        let curArray = [];
        let curLabel = '';
        if(cur === 0){
            curArray = fullTimeJob;
            curLabel = fullTimeJob[0];
        }else{
            curArray = practiceJob;
            curLabel = practiceJob[0];
        }
        this.setState({
            curNature: curArray,
            curJobInfoKey: cur,
            curJob: 0,
            curLabel: curLabel,
            curJobInfo: jobInfo[cur].value[0]
        });
    }
    changeJob(curJob){
        this.setState({
            curJob: curJob,
            curJobInfo: jobInfo[this.state.curJobInfoKey].value[curJob]
        });
    }
    joinSelect(){
        if(+this.props.params.key === 2){
            return(
                <div className="select-box">
                    <ReactSelect defaultSelect="北京地区" disabled="true"></ReactSelect>
                    <ReactSelect defaultSelect="全职" selectList={['全职','实习生']} keyType="arrayIndex" callback={this.changeNature.bind(this)}></ReactSelect>
                    <ReactSelect selectList={this.state.curNature} keyType="arrayIndex" callback={this.changeJob.bind(this)} willReceive="true"></ReactSelect>
                    <div className="divide"></div>
                    <h4>{this.state.curJobInfo.name}</h4>
                </div>
            )
        }
    }
    render(){
        let key = this.getIndex();
        return (
            <div className="info-block mh1000">
                {this.joinSelect()}
                <h3>{(+key === 2 && "") || (+key === 3 && "北京人人金服投资管理有限公司") || (+key !== 2 && routeArray[key].name)}</h3>
                <div className={(+key === 3 ? "contactP " : '') + "content-list " + (+key === 2 ? "sectionP" : "")}>
                    {this.renderPinfo()}
                    <p className="resume">请您将您的详细工作简历发送至：liang.kong@renren-inc.com.我们收到您的简历后，会主动与您联系。 </p>
                </div>
                <div className={"img-box "  + (routeArray[key].image ? "show" : "hide")}>
                    <img src={routeArray[key].image ? routeArray[key].image : ""} alt="人人金服MATRIX"/>
                </div>
            </div>
        )
    }
}
export class IncInfo extends Component{
    compileLiForRouteArray(){
        let list;
        let curKey = this.props.params.key;
        list = routeArray.map(function (item) {
            return (
                //必须添加key属性,React在动态渲染子级时,key可以用来唯一确定子级的状态
                <li key={item.key} className={+curKey === +item.key ? "active" : ""}><Link to={"/incInfo/" + item.key}>{item.name}</Link></li>
            )
        });
        return list;
    }
    componentDidMount(){
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
    render(){
        return (
            <div className="bk-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 bk-light-pink mh1000">
                            <ul className="nav-vertical">
                                {this.compileLiForRouteArray()}
                            </ul>
                        </div>
                        <div className="col-md-10 mh1000">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}