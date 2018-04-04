/**
 * 组织机构图插件-  by wadellg
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './OrganizeChart.css';

// 主类
class OrganizeChart extends Component {

    constructor(props){
        super(props);

    }
    
    // 递归生成节点
    renderNodes(nodes = { children:[] }, key, lastKey){
        // 横连接线
        let lineClass = 'line';
        let wapperClass = 'nodeWapper';
        // 边角线条样式
        let cLineStyle = {
            borderTopWidth: this.props.line.width,
            borderTopColor: this.props.line.color,
            borderTopStyle: this.props.line.style
        };
        // 垂直线条样式
        let vLineStyle = {
            borderLeftWidth: this.props.line.width,
            borderLeftColor: this.props.line.color,
            borderLeftStyle: this.props.line.style
        };
        // 水平横线样式
        let lLineStyle = {};

        // 区分连线类型
        if ( key === 0){
            // 折线开始
            lineClass += '-first';
        }else if (lastKey){
            // 折线结尾
            lineClass += '-last';
        }

        // 区分连线样式
        switch(lineClass){
            case 'line-first':
                cLineStyle.borderLeftWidth = this.props.line.width;
                cLineStyle.borderLeftColor = this.props.line.color;
                cLineStyle.borderLeftStyle = this.props.line.style;
    
                break;
            case 'line-last':
                cLineStyle.borderRightWidth = this.props.line.width;
                cLineStyle.borderRightColor = this.props.line.color;
                cLineStyle.borderRightStyle = this.props.line.style;

                break;
            default: 
                cLineStyle = {
                    borderLeftWidth: this.props.line.width,
                    borderLeftColor: this.props.line.color,
                    borderLeftStyle: this.props.line.style
                };
                lLineStyle = {
                    borderTopWidth: this.props.line.width,
                    borderTopColor: this.props.line.color,
                    borderTopStyle: this.props.line.style
                };
                break;
        }
        // 控制水平横线
        if(key === undefined || lineClass === 'line-last'){
            lLineStyle = null;
            wapperClass += ' lineEnd';
        }
    
        // 递归生成子节点
        const childNodes = nodes.children.map((item, index)=>{
            let { name, children } = item;  
            let isLast = (index === nodes.children.length -1);
            return this.renderNodes(item, index, isLast);
        });

        return (
            <div className={ wapperClass } style={ lLineStyle } key={key}>
                { key !== undefined ? <div className={lineClass} style={ cLineStyle }></div>: null }
                { childNodes.length > 0 ? 
                    <div className="nodeParent">
                        <div className="nodeItem" style={ this.props.nodeStyle }>
                            { 
                                this.props.orgNode? 
                                    <this.props.orgNode node={ nodes } />
                                :   nodes.name 
                            }
                        </div>
                    </div>
                :   
                    <div className="nodeItem" style={ this.props.nodeStyle }>
                        { 
                            this.props.orgNode? 
                                <this.props.orgNode node={ nodes } />
                            :   nodes.name 
                        }
                    </div> 
                }
                { childNodes.length > 0 ? <div className='vLine' style={ vLineStyle }></div> : null }
                { childNodes.length > 0 ? 
                    <div className="nodeChildren">
                        { childNodes }
                    </div>
                : null }
            </div>
        );
    }

    // 渲染render
    render() {
        
        return (
            <div className="container" style={ {minWidth: this.props.width + 'px' } } >
                <div className="wapper"> 
                    { this.renderNodes(this.props.orgData) }
                </div>
            </div>
        );
    }
}

// 属性类型约束验证
OrganizeChart.propType = {
    orgData: PropTypes.object.isRequired,
    orgNode: PropTypes.object,
    width: PropTypes.number,
    nodeStyle: PropTypes.object,
    line: PropTypes.object
}

// 默认值
OrganizeChart.defaultProps = {
    nodeStyle: {},
    width: 800,
    line: {
        width: 1,
        style: 'solid',
        color: 'red'
    } 
}

export default OrganizeChart;