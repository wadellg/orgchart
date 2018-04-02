/**
 * 组织机构图插件-  by wadellg
 */

import React, { Component } from 'react';

// 主类
class OrganizeChart extends Component {
    constructor(props){
        super(props);

    };

    // 渲染render
    render() {
        return (
            <div>
                组织机构
            </div>
        );
    }
}

OrganizeChart.propType = {
    orgData: PropTypes.Object
}

export default OrganizeChart;