import PropTypes from 'prop-types';

const NodeItem = {
    render(){
        return (
            <div className="nodeWapper">
                <div className="vLine-first"></div>
                <div className="nodeItem">{ props.name }</div>
            </div>
        );
    }
};

// 定义
OrganizeChart.propType = {
    name: PropTypes.String
}

export default NodeItem;