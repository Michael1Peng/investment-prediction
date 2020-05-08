import React from "react";
import {Layout, Menu, Row, Col} from "antd";
import Chart from "../components/Chart";
import InvestForm from "../components/InvestForm";

const {Header, Content} = Layout;

function Strategies() {
  let navItems = ['连跌买进策略', '收益率前n策略', '小市值策略', '单股sma策略']
  let data = {
    xData: ['4-12', '4-13', '4-14', '4-15', '4-16'],
    seriesData: [
      ['0.1', '0.2', '0.4', '-0.1', '0.2'],
      ['0.2', '0.1', '0.3', '0', '0.3']
    ]
  };

  return <Layout>
    <Header>
      <Menu mode='horizontal'>
        {navItems.map(i => <Menu.Item key={i}>{i}</Menu.Item>)}
      </Menu>
    </Header>
    <Content style={{padding: '15px', 'background-color': 'white'}}>
      <Row>
        <Col span={16}>
          <Chart data={data}/>
        </Col>
        <Col span={6}>
          <InvestForm/>
        </Col>
      </Row>
    </Content>
  </Layout>
}

export default Strategies
