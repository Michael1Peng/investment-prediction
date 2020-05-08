import React, {useState} from "react";
import {Layout, Menu, Row, Col} from "antd";
import Chart from "../components/Chart";
import InvestForm from "../components/InvestForm";
import RecommendTable from "../components/RecommendTable";

const {Header, Content} = Layout;

function Strategies() {
  // 导航栏数据
  let navItems = [{
    title: '连跌买进策略',
    key: 'one'
  }, {
    title: '收益率前n策略',
    key: 'two'
  }, {
    title: '小市值策略',
    key: 'three'
  }, {
    title: '单股sma策略',
    key: 'four'
  }]
  const [activeTabs, setActiveTabs] = useState('one')

  function clickTab(e) {
    setActiveTabs(e.key)
  }

  // 图表数据
  const [data, setData] = useState({xData: [], seriesData: [[], []]})

  const [rate, setRate] = useState(0)
  const [recommendations, setRecommendations] = useState([[], []])

  function onResponse(res) {
    setData(res.chartData)
    setRate(res.rate)
    setRecommendations(res.answer)
  }

  return <Layout>
    <Header>
      <Menu mode='horizontal' selectedKeys={[activeTabs]} onClick={clickTab}>
        {navItems.map(i => <Menu.Item key={i.key}>{i.title}</Menu.Item>)}
      </Menu>
    </Header>
    <Content style={{padding: '15px', 'background-color': 'white'}}>
      <Row>
        <Col span={16}>
          <Chart data={data}/>
          <RecommendTable recommendations={recommendations}/>
        </Col>
        <Col span={6}>
          <InvestForm tab={activeTabs} onResponse={onResponse} rate={rate}/>
        </Col>
      </Row>
    </Content>
  </Layout>
}

export default Strategies
